module.exports = {
  apps: [{
    name: 'docs',
    script: 'npm',
    args: 'start',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    },
    watch: false,
    max_memory_restart: '256M',
    instances: 1,
    exec_mode: 'fork'
  }]
}
