pipeline {
  agent any

  stages {
    stage('Clonar repositório') {
      steps {
        git 'https://github.com/humbertogouveia/automation-api-cypress.git'
      }
    }

    stage('Instalar dependências') {
      steps {
        sh 'npm install'
      }
    }

    stage('Subir servidor') {
      steps {
        sh 'npm run open api'
      }
    }

    stage('Rodar testes automatizados de API') {
      steps {
        sh 'npx cypress run'
      }
    }

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
