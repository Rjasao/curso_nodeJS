const mongoose = require('mongoose');

const subscriberSchema = new mongoose.Schema({
    userName:{
        type: String,
        require: true
    },
    userChanel:{
        type: String,
        require: true
    },
    userDate:{
        type: String,
        require: true,
        default: Date.now
    }
})

module.exports = mongoose.model('Subscriber', subscriberSchema)