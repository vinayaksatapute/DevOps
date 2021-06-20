pipeline {
    agent any
    tools {nodejs "NodeJs 16"}
    environment{
        NODE_ENV='PRD'
    }

    stages {
        stage('source') {
            steps {
                git 'https://github.com/vinayaksatapute/DevOps.git'
            }
        }
        stage('build') {
            environment {NODE_ENV='staging'}
            
            steps {
                echo NODE_ENV
                withCredentials([string(credentialsId: 'secvar', variable: 'secvar')]) {
                    echo secvar
                }
                sh 'npm install'
            }
        }
        stage('saveArtifact') {
            steps {
                archiveArtifacts artifacts: '**', followSymlinks: false
            }
        }
    }
}
