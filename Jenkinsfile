pipeline {
    agent any
    
    stages {
        stage('Checkout SCM') {
            steps {
                checkout scm
            }
        }
        
        stage('Deploy') {
            steps {
                sh '''
                    sudo mkdir -p /var/www/html/watch-store
                    sudo rm -rf /var/www/html/watch-store/*
                    sudo cp -r Jenkinsfile index.html nohup.out script.js style.css venv /var/www/html/watch-store/
                '''
            }
        }
    }
}
