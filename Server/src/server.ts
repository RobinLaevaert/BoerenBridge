// src/server.ts
import * as express from "express";
import * as socketio from "socket.io";
import { Player } from "./Models/Player/Player";
import { RegisterError } from "./Errors/RegisterError";

const app = express();
app.set("port", process.env.PORT || 3000);
var http = require("http").Server(app);

let io = socketio(http);

app.get("/", (req: any, res: any) => {
  res.send("hello world");
});

// start our simple server up on localhost:3000
const server = http.listen(3000, function () {
  console.log("listening on *:3000");
});

const players: Player[] = new Array<Player>(); // 3-8 players

io.on("connection", (socket: ExtendedSocket) => {
  socket.on("test", (userName: string) => {
    try {
      let player = RegisterPlayer(userName);
      socket.username = player.userName;
      var test = startGame(5,6);
    } catch (_e) {
      if (_e instanceof RegisterError) socket.emit("err", _e.message);
      else console.log(_e.message);
    }
  });
});

function RegisterPlayer(newUserName: string) {
  var trimmedUserName = newUserName.trim();
  if (players.length == 8) throw new RegisterError("Already with 8 players, maximum reached");
  if (!trimmedUserName || trimmedUserName.length == 0) throw new RegisterError("Please choose a valid username");
  if (players.some((x) => x.userName == trimmedUserName)) throw new RegisterError("UserName already chosen");
  let newPlayer = new Player(trimmedUserName)
  players.push(newPlayer);
  return newPlayer;
}

function startGame(a: number, b:number){
    return a + b;
}
