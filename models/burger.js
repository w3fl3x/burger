var orm = require('../config/orm');

var burgers = {
    all: function(cb) {
        orm.selectAll('burgers', function(res) {
            cb(res);
        });
    },
    
    create: function(value, cb) {
        orm.insertOne('burgers', 'burger_name', value, function(res) {
            cb(res);
        });
    },

    update: function(id, devoured, cb) {
        orm.updateOne('burgers', id, devoured, function(res) {
            cb(res);
        });
    }
};

module.exports = burgers;