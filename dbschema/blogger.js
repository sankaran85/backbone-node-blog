var mongoose = require('mongoose');
var schema = mongoose.Schema;

var bloggerSchema = schema({
	user : {
		type: String,
		required:  true
	},
	title : {
		type: String,
		required: true
	},
	story : {
		type: String,
		required: true
	},
	created_at : {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model("blogger",bloggerSchema);
