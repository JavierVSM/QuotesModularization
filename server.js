const express = require ('express');
const mongoose = require ('mongoose');
const flash = require( 'express-flash' );
const session = require( 'express-session' );
const {QuotesRouter} = require( './server/routes/routes' );

require( './server/config/database' );

const app = express ();

app.set('views', __dirname+ '/views');
app.set ('view engine', 'ejs');

app.use(flash());
app.use(express.urlencoded({extendend:true}) );
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 * 20}//number in miliseconds 
}));

app.use('/app', QuotesRouter);

app.listen (8080, function (){
    console.log ("The user server is running on 8080")
});