var mongoose = require('mongoose');
var schema = mongoose.Schema;

var postSchema = schema({
	user : {
		type: String,
		required:  true
	},
	comment : {
		type: String,
		required: true
	},
	created_at : {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model("post",postSchema);
