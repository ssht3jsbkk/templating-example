const express = require("express");
const handlebars = require('express-handlebars');


const app = express();

app.engine('handlebars', handlebars({defaultlayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function(req, res) {

  res.render('index', {
  title: 'Choreo Coder',
  username: 'Sharon',
  location: 'Birmingham',
  building: 'ICentrum',
  computer: 'Dell',
  items: [{name: 'BTS'}, {date: '2017'}, {album: 'Serendipity'}],
  src:'https://s-media-cache-ak0.pinimg.com/originals/7f/9d/6e/7f9d6eae541f8bb8f7d871b8f8913cc1.jpg',
});

})



const PORT = 3000;


app.listen(PORT, function()  {
  console.log("listening on" + PORT);
})
