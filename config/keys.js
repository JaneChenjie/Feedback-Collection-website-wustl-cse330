// keys.js
if (process.env.NODE_ENV === 'production') {
    // in prodection mode
    module.exports = require('./prod');

} else {
    // in development
    module.exports = require('./dev');

}
//mongodb+srv://jane:anoFmbVv9ZBW8bhk@cluster0.qastm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

// anoFmbVv9ZBW8bhk