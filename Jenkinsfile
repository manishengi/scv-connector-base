/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

@Library('sfci-pipeline-sharedlib@master')

import net.sfdc.dci.BuildUtils
import net.sfdc.dci.CodeCoverageUtils

env.RELEASE_BRANCHES = ['master']

def complianceFlags = [
                        enable: true,//For ensuring PR has WI mentiooned
                        validateCommitsInPR: true // For ensuring all commits have WI mentioned     
                      ]

def releaseParameters = {
    parameters([
        booleanParam(
            defaultValue: false,
            description: 'Do you want to release?',
            name: 'RELEASE')
    ])
}

def buildImage = "331455399823.dkr.ecr.us-east-2.amazonaws.com/sfci/sfci/centos-sfci-nodejs:latest"

def envDef = [releaseParameters: releaseParameters, compliance: complianceFlags, buildImage: buildImage, maxDaysToKeepBuild: 10 , maxNumToKeepBuild: 100]

def coverage_config = [
    tool_name              : 'clover',
    gus_team_name          : 'Voice Ecosystem',
    test_suite             : 'aggregate',
    language_type          : 'javascript',
    aggregate_team_coverage: true,
    dev_gus_upload         : false,
    gus_record_active      : true,
    report_location        : 'coverage/clover.xml'
]

executePipeline(envDef) {   
    stage('Init') {
            checkout scm
            npmInit([nexusCredsId: 'sfci-nexus'])
            sh 'npm install'
    }   
    stage('NPM Test and Build'){
      sh 'npm run test' 
    } 
   
    stage('Coverage Report') {
          publishHTML([
              allowMissing: false,
              alwaysLinkToLastBuild: false,
              keepAll: false,
              reportDir: 'jest-report',
              reportFiles: 'index.html',
              reportName: 'JEST Results',
              reportTitles: ''
          ])
          publishHTML([
              allowMissing: false,
              alwaysLinkToLastBuild: false,
              keepAll: false,
              reportDir: 'coverage/lcov-report',
              reportFiles: 'index.html',
              reportName: 'JEST Coverage',
              reportTitles: ''
          ]) 
          CodeCoverageUtils.uploadReportForGusDashboard(this, coverage_config)
      }
    
    // More information: https://salesforce.quip.com/A7RBA2kk3b74
    stage('GUS Compliance'){
        git2gus()
    }

    // Release to internal npm
    if (BuildUtils.isReleaseBuild(env) && params.RELEASE){
        stage('Release'){
            final String registry = 'nexus.soma.salesforce.com/nexus/content/repositories/npmjs-internal/'
            withCredentials([usernamePassword(
                credentialsId: 'sfci-nexus',
                usernameVariable: 'NEXUS_USERNAME',
                passwordVariable: 'NEXUS_PASSWORD'
            )]) {
                // Get the auth token and configure npm (securely)
                String authToken = sh([script: "echo -n ${NEXUS_USERNAME}:${NEXUS_PASSWORD} | base64", returnStdout: true]).trim()
                wrap([$class: 'MaskPasswordsBuildWrapper', varPasswordPairs: [[password: authToken, var: 'SECRET']]]) {
                  sh "npm config set //${registry}:_auth ${authToken}"
                }
            }
          sh "npm publish --registry=https://${registry}"
        }
    }

    stage('Complete'){
        currentBuild.result = 'SUCCESS'
    }
}
