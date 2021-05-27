stage('install') {
    steps{
        sh 'npm install'
        sh 'npm test'
        sh 'npm install typescript'
        sh 'npx tsc'
        sh 'npm tar -czf backup.tar.gz dist'
    }
}
stage('Publish') {
    step{
        archiveArtifacts artifacts: 'backup.tar.gz', followSymlinks: false
    }
}

