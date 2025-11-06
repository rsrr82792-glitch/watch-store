pipeline {
    agent any

    stages {
        stage('Deploy') {
            steps {
                sh '''
                # Copy files to web root
                sudo rm -rf /var/www/html/watch-store/*
                sudo cp -r * /var/www/html/watch-store/
                '''
            }
        }
    }
}

