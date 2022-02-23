const NetServer = require("net").Server;
// class SocketServer extends NetServer{
//     constructor(){
//         super()
//         this.listen('8080')
//         this.on('connection',this.connectionHandler)
//     }
//     connectionHandler(socket){
//         console.log('someone connected');
//         this.socket =socket;
//         this.repeater();
//     }
//     repeater(){
//         let counter=0;
//         setInterval(() => {
//             this.socket.write(`hello, ${counter++} \n`)
//         }, 1000);
//     }
// }

// module.exports = new SocketServer();

////////////////////////////////////////////////////////////
// class SocketServer25 extends NetServer{
//     constructor(){
//         super();
//         this.listen('2525')
//         this.on('connection',this.connectionHandler)
//     }
//     connectionHandler(mySocket){
//         console.log("im connected");
//         this.socket=mySocket;
//         this.repeater();
//     }
//     repeater(){
//         let counter=0;
//         setInterval(() => {
//             this.socket.write(`hello, ${counter++ * 2} \n`)
//         }, 1000);
//     }
// }
// module.exports =new SocketServer25();
///////////////////////////////////////////////
// class SocketServer26 extends NetServer {
//   constructor() {
//     super();
//     this.listen("2626");
//     this.on("connection", this.connectionHandler);
//   }
//   connectionHandler(mySocket) {
//     console.log("welcome user");
//     this.socket = mySocket;
//     this.repeater();
//   }
//   repeater() {
//     setInterval(() => {
//       const socketDate = new Date();
//       this.socket.write(
//         `${socketDate.getSeconds()}-${socketDate.getMinutes()}-${socketDate.getHours()}`
//       );
//     }, 1000);
//   }
// }
// module.exports = new SocketServer26();
///////////////////////////////////////////////////

class SocketServer27 extends NetServer {
  constructor() {
    super();
    this.listen("2727");
    this.on("connection", this.connectionHandler);
  }
  connectionHandler(mySocket) {
    console.log("hi there");
    this.socket = mySocket;
    this.repeater();
  }
  repeater() {
    let citiesArray = [
      "asdod",
      "London",
      "Lisbon",
      "Paris",
      "LosAngeles",
      "newYork",
      "washington",
      "Tel Aviv",
      "Tokyo",
      "Askelon",
    ];

    let counter = 0;
    setInterval(() => {
      this.socket.write(citiesArray[counter++])
    }, 2000);
  }
}

module.exports =new SocketServer27();