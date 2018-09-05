var express= require('./node_modules/express');
var app = express();
var os = require('os');
var server = app.listen(1337, function(){
	var datetime = new Date();
	var host = server.address().address;
    var port = server.address().port;
	console.log({ 
		'date': datetime,
		'type':'component', 
		'criticality': 'informational',
		'component':'express server',
		'name': os.hostname(),
		'version':'1.0',
		'section':'orchestration',
		'message':{
			'host': os.hostname(),
			'port': port,
			'status': 'Server listening'
		}
    });
});

// set the view engine to ejs
app.set('view engine', 'ejs');

// Home 
app.get('/', function(req, res) {
    res.render('index', {'title':'Expresses'});
});

//users

app.get('/users/', function(req,res) {
	var userlist = [
      {
        "firstname": "Bruce ",
        "lastname": "Lock",
        "companyid": 1,
        "emailaddress": "block@as.net.au",
        "password": "$2a$10$T1zPBx.8SdhSOwJt4rZnaug/y8itcZN9gXbHAQzZpuPn0JHNDmsVC",
        "confirmation": "password",
        "id": 1,
        "active": true,
        "createdAt": "2017-01-08T06:38:26.739Z",
        "updatedAt": "2017-09-24T23:51:23.194Z",
        "empno": "undefined",
        "company": "1",
        "usertype": "admin",
        "showclosedstories": false,
        "shownotes": true,
        "showtasks": true,
        "showdods": true,
        "currprojectid": 8,
        "currproject": "Digitisation",
        "showtestcases": true
      },
      {
        "firstname": "Adrian",
        "lastname": "Phelan",
        "companyid": 2,
        "emailaddress": "adrian.phelan@rcrtom.com.au",
        "password": "$2a$10$JRdlYYYytYp4Uxk83lJiuuWPNcO.Pdu0yYudReFYV9c1BpId/18.C",
        "confirmation": "adrian",
        "id": 2,
        "active": false,
        "createdAt": "2017-01-09T04:01:50.881Z",
        "updatedAt": "2017-04-18T10:01:52.558Z",
        "empno": "undefined",
        "company": "2",
        "usertype": "companyadmin",
        "showclosedstories": true,
        "shownotes": true,
        "showtasks": true,
        "showdods": true,
        "showtestcases": true
      }]
	res.render('users',{'userlist':userlist});
});

app.get('/users/new', function(req,res) {
	var newuser = {'firstname':'Bruce', 'lastname':'Lock'}
	res.render('users',{'newuser':user});
});



// about page 
app.get('/about', function(req, res) {
    res.render('about');
});