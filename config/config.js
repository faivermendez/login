const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/login', { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }, (err, res) => {
    if (err) throw err;
    console.log('Base de datos conectada');
});

module.exports=mongoose