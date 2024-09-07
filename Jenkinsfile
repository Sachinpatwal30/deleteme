pipeline {
    agent any

    environment {
        // Define your EC2 instance details
        EC2_HOST = '44.211.63.67'
        EC2_USER = 'ubuntu'
        SSH_KEY_ID = credentials('ssh-ky') // Replace with the ID you used for the SSH key
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Checkout1') {
            steps {
                script {
                    echo 'Hello  ${env.SSH_KEY_ID}'
                }
            }
        }

        stage('Deploy to EC2') {
            steps {
                script {
                    sshagent([env.SSH_KEY_ID]) {
                        sshCommand remote: [
                            name: 'EC2',
                            host: "${env.EC2_HOST}",
                            user: "${env.EC2_USER}",
                            allowAnyHosts: true
                        ], command: """
                            echo "Connected to EC2 instance!"
                            ls -l
                        """
                    }
                }
            }
        }
    }
}
