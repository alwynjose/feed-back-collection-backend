const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users'); // single argument means we are pulling a schema (fetching the 'users' collection) FROM mongoose

passport.serializeUser((user, done) => { // serializeUser will find the id from the user mongoose model class instance and turn it into an id (user.id)
    done(null, user.id); // user.id , id property is the id assigned to this user by mongoDB automatically (inside mongoDB the id may mentioned as _id: {_id: "aksjdhasdh"} bu we can reference it just by calling .id )
});

passport.deserializeUser((id, done) => { // this will take the id and turn it into an mongoose model instance
    User.findById(id)
        .then(user => {
            done(null, user);
        })
});

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true // allow if request goes through any proxy (to handle heroku proxy server, else google call back will have no http's' in the url and will break)
                // handle Error 400: redirect_uri_mismatch
}, 
(accessToken, refreshToken, profile, done) => {
        // console.log(accessToken);
        // console.log(refreshToken);
        // console.log(profile);
        User.findOne({ googleId: profile.id })
        .then((existingUser) => {
            if(existingUser) {
                // we have a record of the same profile id in the database
                done(null, existingUser); // 'done' (which is the fourth argumnet) we have made the user and we have finished, proceed with the authemtication.
            } else {
                // we dont have any record with profile id in the database

                /**
                 * @description new new User(...) will create an instance of the user, .save will save the instance or record (googleId: profileId) in mongoDB
                 */
                new User({ googleId: profile.id }).save()
                .then(user => done(null, user)); // .then (user  => ...) will create another instance of the user which is a model instance from the mongoDB

            }
        })
        }
    )
);
