const orm = require('../config/orm');

const burger =  {
    all: function(){
        return orm.selectAll("burgers");
    }
}



module.exports = burger;