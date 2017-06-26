//model/issue.js
'use strict';
//import dependency
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//create new instance of the mongoose.schema. the schema takes an
//object that shows the shape of your database entries.
var IssueSchema = new Schema({
     project: String,
     summary: String,
     id: String,
     type: String,
     description: String,
     priority: String,
     sprint: String,
     component: String,
     status: String
});
//export our module to use in server.js
module.exports = mongoose.model('Issue', IssueSchema);
