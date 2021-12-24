const express = require('express');
const app = express();
const port = 3000;
app.set('views', './views')
app.set('view engine', 'pug')
const timeCheck = (req, res, next) => {
    const date = new Date();
    const hour = date.getHours();
    const day = date.getDay();
    console.log(day);
    if (day !==0 && day !== 5   &&  hour < 17 && hour >= 9) {
      next();
    } else {
      res.send(
        "Sorry ! Server is available only between Monday and Friday from 9 to 17"
      );
    }
  };
 
app.use(express.static('public'));
app.use(timeCheck);
app.get('/',(req, res) => {
    res.render('index')
})
app.get('/contact',(req, res) => {
    res.render('contact')
})
app.get('/ourservice',(req, res) => {
    res.render('ourservice')
})
app.listen(port,(err)=>
err? console.log(err) : console.log("server is running on port 3000"));