const express= require('express')
const app= express()


//middleware automatically used


 app.use(date=(req,res,next)=>{
    let horaire=new Date().getHours()
    console.log(horaire > 17)
    if(horaire < 8 || horaire >17){
    return res.sendFile(__dirname +'/public/close.html')
}
    else
    next();
})

//servir des fichiers static dans le dossier public


app.use(express.static(__dirname + "/public"))


// app.get('/home',date,(req,res)=>{
//     res.sendFile(__dirname + "/public/home.html")
// })
// app.get('/contact',date,(req,res)=>{
//     res.sendFile(__dirname + "/public/contact.html")
// })
// app.get('/ourservices',date,(req,res)=>{
//     res.sendFile(__dirname + "/public/ourservices.html")
// })

app.listen(3000,(err)=>{
    if(err) console.log('server is not running')
else console.log('server is running on port 3000')
})