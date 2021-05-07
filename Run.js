const express = require('express');
const path = require('path')
// const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const cors = require('cors')
app.use(cors())
const http = require('http').Server(app);
// app.use(bodyParser.json()); // support json encoded bodies
// app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

let url = "localhost";
let db_name = "tic_tac_toe";
let user = 'root';
let password = '';

// connect database
let dbCon = mysql.createConnection({
    host: url,
    user: user,
    password: password,
    database: db_name
})
dbCon.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});
app.get('/history', (req, res) => {

    dbCon.query("SELECT * FROM history", function (err, result, fields) {
        if (err) throw err;
        // res.send("<pre>" + JSON.stringify(result, null, 4) + "</pre>")
        res.send(result)
        // console.log(result);
    });

    // dbCon.end();
});
app.post('/history', (req, res) => {
    var user_o = JSON.stringify(req.body.user_o)
    var user_x = JSON.stringify(req.body.user_x)
    var result = JSON.stringify(req.body.result)
    var size = JSON.stringify(req.body.size)
    var sql = `INSERT INTO history (user_o, user_x,result,size) VALUES ('${user_o}',' ${user_x}',${result},${size})`;
    dbCon.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
    });
});

app.use('/play', (req, res) => {
    res.sendFile('index.html', { root: __dirname })
});
app.use('*', (req, res) => {
    res.send("<br><br><br><h1 style='text-align: center'>The requested URL <U>" + req.baseUrl + "</U> was not found on this server.<br><br><a href='/play'>Go to homepage</a><br><br><img src='https://cdn.dutchcowboys.nl/uploads/images/error-404.jpg'></h1>");
});
var server = http.listen(3000, function () {
    console.log("Server is Running... At: http://localhost:%s", server.address().port);
});
