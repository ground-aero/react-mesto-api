/** middlewares/logger.js */
/** импортируем нужные модули */
const winston = require('winston');
const expressWinston = require('express-winston');

// создадим логгер запросов
const requestLogger = expressWinston.logger({
  // transports отвечает за то, куда нужно писать лог
  transports: [
    new winston.transports.File({ filename: 'request.log' }),
  ],
  format: winston.format.json(),
});
