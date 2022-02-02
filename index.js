const express = require('express');
require('./services/passport'); 
// the services/passport.js is not returning anything so we don't have to assign it to anything like const passport = require(...)

const authRoutes = require('./routes/authRoutes');

const app = express();

authRoutes(app);
/**
 * @description new GoogleStrategy creates a new instance of the google passport strategy
 */

const PORT = process.env.PORT || 5000;
app.listen(PORT);
