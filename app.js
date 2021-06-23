const express = require ('express') ;
const path = require ('path') ;
const app = express ()
const publicpath = path.resolve (__dirname, './public') ;
app.use (express.static(publicpath)) ;// De esta manera le indico que voy a trabajar dentro de esa carpeta y no tener problema a la hora de hacer un img src 
app.listen(process.env.PORT || 3000, function() {
    console.log("Esta corriendo todo") ;
});
app.get ('/', ( req, res) => {
    res.sendFile (path.resolve(__dirname,'./views/home.html'))
}) ;
app.get('/login',(req,res) =>{
    res.sendFile(path.resolve(__dirname,'./views/login.html'))

})
app.get('/signup',(req,res) =>{
    res.sendFile(path.resolve(__dirname,'./views/signup.html'))

})                                    