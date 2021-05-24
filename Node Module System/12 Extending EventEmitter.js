const EventEmitter = require('events')

const Logger = require('./04 Creating a Module');
const logger = new Logger()

// Register a listener
logger.on('messageLogged', (arg) => {
    console.log('Listener called', arg);
})

logger.log('message');