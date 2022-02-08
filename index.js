const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport'); // the services/passport.js is not returning anything so we don't have to assign it to anything like const passport = require(...)

// const authRoutes = require('./routes/authRoutes'); // refactored id1

mongoose.connect(keys.mongoURI);

const app = express();

//tell express to make use of cookie inside our application
app.use(
    cookieSession({
        maxAge: 30*24*60*60*1000, // milliseconds - 30 days
        keys: [keys.cookieKey]
    })
);

// tell passport to make use of cookies to handle authentication
app.use(passport.initialize());
app.use(passport.session());

// authRoutes(app); // refactored id1
require('./routes/authRoutes')(app); // refactored id1
/**
 * @description new GoogleStrategy creates a new instance of the google passport strategy
 */

const PORT = process.env.PORT || 5000;
app.listen(PORT);
