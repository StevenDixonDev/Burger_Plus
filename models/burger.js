const orm = require('../config/orm');

const burger =  {
    all: function(){
        return orm.all("burgers");
    }
}

module.export = burger;