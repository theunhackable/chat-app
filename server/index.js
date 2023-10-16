import {createServer } from 'http'
import {Server}  from "socket.io"

const httpServer = createServer();
const io = new Server(httpServer, {
    cors: {
        origin: process.env.NODE_ENV === 'production' ? false: ["http://localhost:5500"],
    }
})


io.on('connection', socket => {
    console.log(`User Id: ${socket.id} connected`)
    socket.on('message', message => {
        console.log(message)
        io.emit('message', `${message}`)
    })
})