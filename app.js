const express = require('express');

const app = express();
app.use(express.static('./public'));

const exphbs = require('express-handlebars');



app.engine('handlebars', exphbs({

  layoutsDir: './views/layouts',

  defaultLayout: 'main'

}));

app.set('view engine', 'handlebars');

app.set('views', `${__dirname}/views/`);


app.use(require('./controllers/'));


module.exports = app;

app.listen(8000);