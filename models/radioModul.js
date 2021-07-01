var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var onradioSchema = new Schema({
	'radioname' : String,
	'radiowebsite' : String,
	'radiostream' : String,
	'radioemail' : String,
    'radiolocation':String,
	'radiophone' : Number,
	'image': String
});

module.exports = mongoose.model('onradio', onradioSchema);