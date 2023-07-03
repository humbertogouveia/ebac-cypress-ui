pipeline {
agent any
stages {
stage ('Clonar o repositorio') {
steps {
git branch: 'main', url: 'https://github.com/EBAC-QE/testes-e2e-ebac-shop.git'
}
}
stage( 'Instalar dependencias") {
steps {
sh 'npm install'
}
stage('Executar Testes') {
steps {
sh 'npx cypress run'
}
}
}
