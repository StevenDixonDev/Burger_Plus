const orm = require('../config/orm');

const burger =  {
    all: function(){
        return orm.selectAll("burgers");
    },
    insertOne: function(...params){
        return orm.insertOne(...params);
    },
    updateOne: function(...params){
        return orm.updateOne('burgers', 'devoured', ...params);
    }
};

module.exports = burger;