import express from "express";
import session from 'express-session'
import path from "path"
import bodyParser from "body-parser";

import router from './routes.js'



const __dirname = path.resolve()

const app = express()

app.use(session({
    secret:'oo_K(uOwN(k#|2Pm%+Sl>F(w/7k7|n',    
    resave: false,
    saveUninitialized: true,
    rolling: true,
    cookie: {
        maxAge: 60 * 60 * 1000, // 1 hora em milissegundos
    },
}))
app.use(express.json())

app.set('view engine', 'ejs')

app.set('views', path.join(__dirname,'/views'))

app.use(express.static(path.join(__dirname,'public')))

app.use(bodyParser.urlencoded({ extended: true, limit:'2mb'}))

//app.use(express.urlencoded({limit:'2mb'}))

//app.use(express.urlencoded({extended:true}))

app.use('/',router)

export default app