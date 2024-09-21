import logger from './logger.js';

logger.log('App started');
logger.log('App running...');
logger.printLogCount();  // Output: 2 Logs

// Reuse the same instance
const anotherLogger = new Logger();
anotherLogger.log('App terminated');
anotherLogger.printLogCount();  // Output: 3 Logs