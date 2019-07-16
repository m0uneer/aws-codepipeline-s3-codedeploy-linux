module.exports = {
  // apps, an array that contains the configuration for each process
  apps : [{
    name: 'djaty-test-deployment',

    // instances, number of instances to be started in cluster mode
    instances  : '1',
    output: './logs/pm2/out.log',
    error: './logs/pm2/error.log',
    log: './logs/pm2/combined.out-err.log',
    script: './application.js',

    env: {
      NODE_ENV: 'development',
    },

    env_production: {
      NODE_ENV: 'production',
    },
  }],
};
