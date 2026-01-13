pipeline {
  agent any
  stages {
    stage('Install') { steps { sh 'npm install' } }
    stage('Test') { steps { sh 'npm test' } }
  }
}

//This is a Jenkins Declarative Pipeline.

//It tells Jenkins:

//which agent to use

//which steps to run

//in what order

//Without this file, Jenkins cannot execute your tests automatically