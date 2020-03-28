function sayHello(name) {
    console.log('HEY WORLD ' + name );
}
//setTimeout();

sayHello('AMIT');

var message = 'blank';                   // variables not added to global scope
console.log(global.message);        

/* Node = JS runtime engine. So allows javascript run outside browser on server. 
// In node, each file is module, so vars in this file are private by def. 


var exportedMsg = require('./app'); //require function is used to import
console.log(exportedMsg);

/* we have various inbuilt modules in node like console, filesystem, 
http services etc */

const path = require('path');
var pathObj = path.parse(__filename);
console.log(pathObj);


const os = require('os');
console.log("Total memory " + os.totalmem() + "Hostname " + os.hostname());


const fs = require('fs');
/* Note that each method can be sync(blocking) or asynnc(non-blocking)
 Sync methods keep thread blocked until operation is complete. 
 Node.js has only one thread */

console.log( fs.readdirSync('./'));           // return array of files

// Same with async. Note that async methods need callback fn as last arg
fs.readdir('./', function(err,files) {
    if(err) console.log('WTF Error', err)
    else console.log('Files in dir via async',files)
})


const EventEmiiter = require('events');  //EventEmitter is a class, hence need to create object
const emitter = new EventEmiiter();

//Register a listener and log event args
emitter.on('messageLogged', (arg) => {
    console.log('Event Logged', arg);

});

//Raise an event
emitter.emit('messageLogged' , {id: 1, url: 'http://'});


/*---------------------------------------------------------------------------------------------------
If listener and registerer are in diff modules, diff instances of eventemitters will cause not
logging the event. Solution is to extend the class and add ur functionality as done in logger.js
So with new object, you can do both
*/
const Logger = require('./logger');           // class exported now
const logger = new Logger();
//Register
logger.on('outside message', function() {
    console.log('Listener called')
})

logger.log('message');

const http = require('http');
const server = http.createServer((req,res) => {
    if(req.url == '/') {
        res.write('HELLO HTTP WORLD');
        res.end();
    }
})

server.listen(3000);
console.log('Listening on port 3000...')

// open localhost:3000 on browser