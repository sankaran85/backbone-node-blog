
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var app = express();

var mongoDb = require('mongoose');

mongoDb.connect('mongodb://localhost/myblog');
// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');
app.use(express.cookieParser());
app.use(express.session({secret: '1234567890QWERTY'}));
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(require('less-middleware')(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}
//index
app.get('/', routes.index);
//sample blog
app.get('/loginblog',routes.loginblog);
app.post('/blogit',routes.blogit);
app.get('/blogit',routes.blogit);
app.post('/deletecomment',routes.deletecomment);
app.get('/logout',routes.logout);

app.get('/backbone',routes.backbone);
//backbone example
app.get('/whatityped',routes.bkwhatityped);
//blogger 
app.get('/myblogger',routes.loginblogger);
app.post('/Welcomeblogger',routes.welcomeblogger);
app.get('/Welcomeblogger',routes.welcomeblogger);
app.get('/getpostlist',routes.getpostlist);
app.post('/post',routes.savepost);
app.del('/post/del/:id',routes.deletepost);
app.get('/clearallpost',routes.clearallpost);
app.get('/showpost/:id',routes.showpost);
app.get('/goback',routes.welcomeblogger);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
