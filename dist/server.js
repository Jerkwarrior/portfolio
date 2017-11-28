// server.js

var express = require('express');
var path = require('path');
var history = require('connect-history-api-fallback');
var serveStatic = require('serve-static');


app = express();
app.use(serveStatic(__dirname));

app.use(staticFileMiddleware);
app.use(history());
app.use(staticFileMiddleware);

var port = process.env.PORT || 5000;
app.listen(port);

console.log('server started '+ port);
