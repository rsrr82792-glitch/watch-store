pipeline {
    agent any
    environment {
        PROJECT_DIR = "/home/ubuntu/watch-store"
        WEB_ROOT = "/var/www/html/watch-store"
    }
    stages {
        stage('Pull from GitHub') {
            steps {
                git branch: 'main', 
                    credentialsId: 'github-creds', 
                    url: 'https://github.com/rsrr82792-glitch/watch-store.git'
            }
        }
        stage('Deploy to Web Root') {
            steps {
                sh 'sudo rm -rf $WEB_ROOT/*'
                sh 'sudo cp -r $PROJECT_DIR/* $WEB_ROOT/'
                sh 'sudo chown -R www-data:www-data $WEB_ROOT'
            }
        }
        stage('Restart Nginx') {
            steps {
                sh 'sudo systemctl restart nginx'
            }
        }
    }
}

