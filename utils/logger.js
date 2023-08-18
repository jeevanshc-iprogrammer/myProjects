const winston = require('winston');

module.exports = winston.createLogger({
    'transports' : [
        new winston.transports.File({
            filename : '../logs/appLogs.log',
            format : winston.format.combine(
                winston.format.timestamp({format: 'MMM-DD-YYYY HH:mm:ss'}),
                winston.format.align(),
                winston.format.printf(info => `${info.level} : ${ [info.timestamp] } : ${info.message}`),
                winston.format.printf(err => `${err.level} : ${err.timestamp} : ${err.message}`)
            )
        })
    ]
})
