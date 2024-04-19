import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import mongoose from 'mongoose';
import router from './router';

const app = express();

app.use(cors({
    credentials: true,
}));

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(8080, () => {
    console.log('Server running on 8080');
})

console.log(process.version);
console.log("Hello typescript!");

const MONGO_URL = 'mongodb+srv://root:root@mongoatlascluster0.hdwgyrk.mongodb.net/?retryWrites=true&w=majority&appName=mongoAtlasCluster0';

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on('error', (error: Error) => console.log(error));

app.use('/', router())


















