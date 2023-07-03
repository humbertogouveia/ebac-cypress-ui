pipeline {
    agent any
    tools {
        nodejs 'NodeJS',
        git 'git' 
    }
    stages {
        stage('Instalando dependências') {
            steps {
                sh 'npm install'
            }
        }

        stage('Executar teste automatizado de UI com Cypress') {
            steps {
                sh 'npx cypress run'
            }
        }
    }
}
