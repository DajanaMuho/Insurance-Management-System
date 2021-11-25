const winston = require('winston');

const logConfiguration = {
  transports: [
      new winston.transports.Console({
          level: 'warn'
      }),
      new winston.transports.File({
          level: 'error',
          filename: 'logs/track.log'
      })
  ]
};

module.exports =  winston.createLogger(logConfiguration);