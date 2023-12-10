const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('.')) // serve static files

app.set('view engine', 'hbs'); //setting the view engine

app.get('/', (req, res) => {
    res.render('index', {
        name: 'meghra', //this is dianyamic data 
        number: '8390302033'
    })
})
app.get('/about', (req, res) => {
    res.render('about')
})
app.get('/contact', (req, res) => {
    res.render('contact')
})

app.listen(port, (err, res) => {
    console.log(`listening on http://localhost:${port}`)
})