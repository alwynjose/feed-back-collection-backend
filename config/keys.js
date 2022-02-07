// keys.js 
if(process.env.NODE_ENV === 'production') {
 // load production keys
 module.exports = require('./prod');
} else {
    // load development keys
    module.exports = require('./dev'); // pull in dev file and make it available else where using module.exports
}
