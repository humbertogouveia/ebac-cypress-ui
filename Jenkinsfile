pipeline {
  agent any

  tools {
   nodejs 'NodeJS'
   git 'git'
  }

  stages {
    stage('Clone UI repository') {
      steps {
        git 'https://github.com/humbertogouveia/ebac-cypress-ui.git'
      }
    }

    stage('Install dependencies (UI)') {
      steps {
        sh 'npm install'
      }
    }

    stage('Rodar testes de interface gráfica') {
      steps {
        sh 'npx cypress run'
      }
    }
  }
}
