pipeline {
    agent any
    environment {
        VENV = 'venv'
    }
    stages {
        stage('Install Dependencies') {
            steps {
                sh '''
                set -e
                sudo apt update
                sudo apt install -y python3-venv python3-pip
                # Create venv only if not exists
                [ -d "$VENV" ] || python3 -m venv $VENV
                . $VENV/bin/activate
                python -m pip install --upgrade pip
                python -m pip install -r requirements.txt
                '''
            }
        }
        stage('Migrate & Run') {
            steps {
                sh '''
                set -e
                . $VENV/bin/activate
                python manage.py migrate
                # Kill previous server if running
                pkill -f "manage.py runserver" || true
                nohup python manage.py runserver 0.0.0.0:8000 > server.log 2>&1 &
                '''
            }
        }
    }
}

