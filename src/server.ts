import {Server} from 'http';
import mongoose from 'mongoose';
import app from './app';


let server: Server
const MONGO_URI = process.env.MONGO_URI as string


const startServer = async () => {
    try {
        await mongoose.connect(MONGO_URI)

        console.log("connected to db UwU")
        server = app.listen(5000, ()=>{
            console.log(`server is listening to port http://localhost:5000`)
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