// server.js
// where your node app starts

// init project
const express = require('express');
const app = express();
const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function (req, res) {


    let text = "";

    for (let i = 0; i < 9; i++) text += "Lorem ipsum dolor sit met, qui at desert mandamus, adduce ullum apeirian mea at";

    res.render('home', {
        text
    });


});


app.get('/font', function (req, res) {

    setTimeout(() => {

        res.set('Content-Type: application/font-woff');

        res.sendFile(__dirname + '/public/sedgwickave-regular-webfont.woff');

    }, 8000)

});




// listen for requests :)
const listener = app.listen(9876, function () {
    console.log('Your app is listening on port ' + listener.address().port);
});