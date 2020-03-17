const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes/index.route');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json({limit: '10mb'}));

//setting
app.set('port', process.env.PORT || 3000);
app.use(express.urlencoded({extended: true}));

app.listen(app.get('port'), () => {
    console.log('server-on-port: ' + app.get('port'));
});

app.use('/' , routes);
