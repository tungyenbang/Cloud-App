'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function (db, callback) {
  db.createTable('products', {
    columns: {
      id: { type: 'int', primaryKey: true, autoIncrement: true },
      name: 'string',
      price: 'int',
      amount: 'int',
      shop: 'string',
    },
    ifNotExists: true
  }, callback);
}
exports.down = function (db, callback) {
  db.dropTable('products', callback);
};

exports._meta = {
  "version": 1
};