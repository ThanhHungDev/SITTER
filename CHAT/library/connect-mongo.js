var mongoose = require("mongoose"),
    CONFIG = require("../config"),
    TokenAccess = require("../model/TokenAccess")
    

var IS_PRODUCTION = CONFIG.IS_ENVIROMENT_PRODUCT

/// connect mongodb
mongoose.connect(CONFIG.database.mongodb, 
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useCreateIndex: true,
        useNewUrlParser: true
    }
)
!IS_PRODUCTION && mongoose.set('debug', true)
mongoose.set('useFindAndModify', true);

// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on('connected', function () {
    console.log('Mongoose default connected ' + CONFIG.database.mongodb);
});

// If the connection throws an error
mongoose.connection.on('error', function (err) {
    console.log('Mongoose default connection error: ' + err.message, CONFIG.database.mongodb);
});

// When the connection is disconnected
mongoose.connection.on('disconnected', function () {
    console.log('Mongoose default connection disconnected');
});

// When the connection is open
mongoose.connection.on('open', function () {
    console.log('Mongoose default connection is open');
    console.log('===================================');
    
    // var Postgre = require("../model/Postgre.js")
    // Postgre.USER.findOne({ where: { email : 'thanhhung.code@gmail.com' } })
    // .then( user => {

    //     console.log( user, "userssss" )
    // })
    // .catch(err => {
    //     console.log(err, " có lỗi db")
    // })

    // myTokenAccess = new TokenAccess({
    //     token : "tokenAccess",
    //     user  : 1,
    //     online: false,
    //     detect: "ahihi"
    // })

    // myTokenAccess.save()
    // .then( token => {
        
    //     console.log("vào đc")
    // })
    // .catch( err => {
    //     console.log( err.message )
    // })


    // TokenAccess.find({ user  : 1 })
    // .then( token => {
    //     console.log( token )
    // })
    // .catch( err => {
    //     console.log( err.message , "catching")
    // })
    
});
