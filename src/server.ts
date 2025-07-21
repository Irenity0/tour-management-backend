/* eslint-disable no-console */
import {Server} from 'http';
import mongoose from 'mongoose';
import app from './app';
import { envVars } from './app/config/env';


let server: Server
const MONGO_URI = envVars.MONGO_URI as string
const PORT = envVars.PORT 

const startServer = async () => {
    try {
        await mongoose.connect(MONGO_URI)

        console.log("connected to db UwU")
        server = app.listen(PORT, ()=>{
            console.log(`server is listening to port http://localhost:${PORT}`)
        })       
    }
    catch (error) {
        console.error(error)
    }
}

startServer()

process.on("unhandledRejection", (err)=>{
    console.log("unhandled Rejection detected.... Server shutting down", err);

    if(server){
        server.close(()=>{
            process.exit(1)
        });
    }

    process.exit(1);
    
})

process.on("uncaughtException", (err)=>{
    console.log("Uncaught Exception detected.... Server shutting down", err)

    if(server){
        server.close(()=>{
            process.exit(1)
        });
    }

    process.exit(1);
})

process.on("SIGTERM", ()=>{
    console.log("SIGTERM SIGNAL RECEIVED.... Server shutting down");

    if(server){
        server.close(()=>{
            process.exit(1)
        });
    }

    process.exit(1);
})

process.on("SIGINT", ()=>{
    console.log("SIGINT SIGNAL RECEIVED.... Server shutting down");

    if(server){
        server.close(()=>{
            process.exit(1)
        });
    }

    process.exit(1);
})