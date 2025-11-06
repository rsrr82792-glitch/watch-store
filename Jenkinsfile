pipeline {
    agent any

    stages {
        stage('Deploy') {
            steps {
                sh '''
                # Create target directory if it doesn't exist
                sudo mkdir -p /var/www/html/watch-store
                sudo rm -rf /var/www/html/watch-store/*
                
                # Copy project files
                sudo cp -r * /var/www/html/watch-store/
                '''
            }
        }
    }
}
pipeline {
    agent any

    stages {
        stage('Deploy') {
            steps {
                sh '''
                # Create target directory if it doesn't exist
                sudo mkdir -p /var/www/html/watch-store
                sudo rm -rf /var/www/html/watch-store/*
                
                # Copy project files
                sudo cp -r * /var/www/html/watch-store/
                '''
            }
        }
    }
}

