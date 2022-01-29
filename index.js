const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./config/keys');

const app = express();

/**
 * @description new GoogleStrategy creates a new instance of the google passport strategy
 */

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
}, (accessToken) => {
        console.log(accessToken);
        }
    )
);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
