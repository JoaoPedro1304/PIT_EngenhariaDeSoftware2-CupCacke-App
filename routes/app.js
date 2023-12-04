import express from "express";
import session from 'express-session'
import path from "path"

import router from './routes.js'



const __dirname = path.resolve()

const app = express()

app.use(session({secret:'oo_K(uOwN(k#|2Pm%+Sl>F(w/7k7|n'}))
app.use(express.json())

app.set('view engine', 'ejs')

app.set('views', path.join(__dirname,'/views'))

app.use(express.static(path.join(__dirname,'public')))

app.use(express.urlencoded({limit:'2mb'}))

app.use(express.urlencoded({extended:true}))

app.use('/',router)

export default app