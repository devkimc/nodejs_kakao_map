module.exports = {
  apps : [
    { 
      name: 'proj-dev',
      script: './server-register.js',
      instances: 1,
      autorestart: false,
      watch: false,
      exec_interpreter : "babel-node",
    }, 
    { 
      name: 'proj-prod',
      script: './server-register.js',
      instances: -1,
      autorestart: false,
      watch: false,
      exec_interpreter : "babel-node",
    }
  ]
};
