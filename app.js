
const express = require('express');
const path = require("path");
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'./public')));


app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname,'./public/index.html'));
});

app.post('/login', async (req, res) => {

        let username = req.body.username;
        let password = req.body.password;

        if(username == '7623' && password == '7623'){
            res.send(`<!doctype html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport"
                      content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <link rel="preconnect" href="https://fonts.gstatic.com">
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet">
                <link rel="stylesheet" href="styles/home-style.css">
                <title>Login Apps</title>
            </head>
            <body>
            <main>
                <header>
                    <h1>Login Berhasil</h1>
                </header>
                <h1>Selamat Datang</h1>
            </main>
            </body>
            </html>`);
        } else 
        res.send(`<!doctype html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport"
                  content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <link rel="preconnect" href="https://fonts.gstatic.com">
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet">
            <link rel="stylesheet" href="styles/home-style.css">
            <title>Login Apps</title>
        </head>
        <body>
        <main>
            <header>
                <h1>Silahkan Keluar</h1>
            </header>
        </main>
        </body>
        </html>`)
        
});

app.listen(5000, function(){
    console.log("server is listening on port: 80");
});