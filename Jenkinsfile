pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/rsrr82792-glitch/watch-store.git'
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                    set -euxo pipefail

                    # Create target folder if not exists
                    sudo mkdir -p /var/www/html/watch-store

                    echo "🧹 Cleaning old deployment..."
                    sudo rm -rf /var/www/html/watch-store/*

                    echo "🚀 Deploying new build..."
                    # Copy only if files exist (ignore venv)
                    for file in Jenkinsfile index.html nohup.out script.js style.css server.log; do
                        if [ -e "$file" ]; then
                            sudo cp -r "$file" /var/www/html/watch-store/
                        fi
                    done

                    echo "✅ Deployment successful!"
                '''
            }
        }
    }

    post {
        success {
            echo '🎉 Build and Deployment completed successfully!'
        }
        failure {
            echo '❌ Build failed — check missing files or permissions.'
        }
    }
}
