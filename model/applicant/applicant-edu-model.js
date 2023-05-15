const mongoose = require('mongoose');

const educationSchema = new mongoose.Schema();
const Education = mongoose.model('Education', educationSchema);
module.exports = Education