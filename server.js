import app from './routes/app.js'


const port = process.env.PORT || 5500

app.listen(port, (req,res)=>{
    
    console.log(`escutando em http://localhost:${port}`)    
    
})