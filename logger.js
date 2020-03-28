const EventEmitter = require("events");

class Logger extends EventEmitter {
  log(message) {
    //Sends https req
    console.log(message);

    //Raise an event
    this.emit("outside message"); // this refers to Logger class itself
  }
}
//export const wtf = "foo";

module.exports = Logger;
