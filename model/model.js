var DB = require('../config/db').DB;

var User = DB.Model.extend({
   tableName: 'users',
   idAttribute: 'id',
});

module.exports = {
   User: User
};