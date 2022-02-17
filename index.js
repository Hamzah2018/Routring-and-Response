// const http = require('http');

// const routing = require('./routing');
// console.log("Hamzah");

const express = require('express');
const app = express();


app.use(express.static('public'))
app.use('/css',express.static(__dirname + 'public/css'))
app.use('/fonsts',express.static(__dirname + 'public/fonts'))
app.use('/js',express.static(__dirname + 'public/js'))
app.use('/images',express.static(__dirname + 'public/images'))

//  const server = http.createServer(routing);

app.set('views','./views');
app.set('view engine','ejs');
///home
//home
app.get('',(req,res)=>{
    res.render('home');
});


app.listen(3001,'127.0.0.1',()=>{ 
    console.log('server runing...');
}
);


// console.log("Car");

