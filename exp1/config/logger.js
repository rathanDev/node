const winston = require('winston');
require('winston-daily-rotate-file');
const config = require("./config").get(process.env.NODE_ENV);

const tsFormat = () => (new Date().toISOString());

const transportAccess = new (winston.transports.DailyRotateFile)({
  filename: './logs/application-%DATE%.log',
  datePattern: 'YYYY-MM-DD-HH',
  zippedArchive: true,
  maxSize: '20m',
  maxFiles: '30d',
  timestamp: tsFormat,
  options: {
    timestamp: tsFormat
  }
});

const transportError = new (winston.transports.DailyRotateFile)({
  filename: './logs/error-%DATE%.log',
  datePattern: 'YYYY-MM-DD-HH',
  zippedArchive: true,
  maxSize: '20m',
  maxFiles: '30d'
});

const logger = winston.createLogger({
  level: 'info',
  // format: winston.format.json(),
  transports: [
    transportAccess,
    // transportError
  ]
});


if (config.env === "dev" || config.env === "development" || process.env.NODE_ENV === "dev") {
  // app.use(logger(config.morgan.debugLevel));
  logger.add(new winston.transports.Console({
    format: winston.format.simple(),
    timestamp: tsFormat
  }));
}

module.exports = logger;