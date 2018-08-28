const mongoose = require("mongoose");

const dateSchema = mongoose.Schema({
    location: {type:String, required: true},
    description: {type:String, required: true},
    userIdOne: {type:String, required: true},
    userIdTwo: {type:String, required: true}
});

module.exports = mongoose.model("Date", dateSchema);
