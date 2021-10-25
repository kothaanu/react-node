const express = require('express'),
    bodyParser = require('body-parser'),
    appRoutes = require('./approutes');
const app = express();
const port = process.env.PORT || 5000;
const path = require('path');
const proxy = require('http-proxy-middleware');
const PUBLIC_PATH = path.join('build');

app.use(bodyParser.urlencoded({ extended: true }));
app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6

app.get('/health', (req, res) => {
    res.status(200).send('Application is Up and Running...');
});

app.get('/express_backend', (req, res) => { //Line 9
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); //Line 10
});

app.use(express.static(path.join(PUBLIC_PATH)));
app.get('/' ,appRoutes.appIndex);
app.use(proxy(['/api/users/**'], appRoutes.UserProxySettings));
