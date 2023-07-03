pipeline {
  agent any

  tools {
    nodejs 'NodeJS'
    git 'git'
  }

  stages {
    stage('Clone UI repository') {
      steps {
        git url: 'https://github.com/humbertogouveia/ebac-cypress-ui.git'
      }
    }

    stage('Install dependencies (UI)') {
      steps {
        sh 'npm install'
      }
    }

    stage('Run GUI tests') {
      steps {
        sh 'npx cypress run'
      }
    }
  }
}
