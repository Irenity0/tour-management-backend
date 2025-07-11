import {Server} from 'http';
import mongoose from 'mongoose';
import app from './app';

let server: Server


const startServer = async () => {
    try {
        await mongoose.connect("mongodb+srv://WorkHive:m3QfzhcDDxtdHgmW@cluster0.oo5u4.mongodb.net/tour-management-backend?retryWrites=true&w=majority&appName=Cluster0")
    
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

