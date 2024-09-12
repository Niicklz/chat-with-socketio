import express from "express"
import { Server } from "socket.io"
import http from 'http'


const app = express()
const httpServer = http.createServer(app)
const io = new Server(httpServer, {
    cors: {
        origin: '*'
    },
    
})



io.on('connection', (socket) => {
    console.log('a user connected', Date.now());
    socket.on("chat_msg", (data)=> {
        
        
        io.emit("chat_msg",data)
    })
  });
  

httpServer.listen(3000, ()=> {
    console.log("Servidor iniciado en el puerto 3000");
    
})