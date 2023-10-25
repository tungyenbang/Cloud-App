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
  db.createTable('users', {
    columns: {
      id: { type: 'int', primaryKey: true, autoIncrement: true },
      user_name: 'string',
      pass_words: 'string',
      name: 'string',
      shop: 'string',
      role: 'string',
    },
    ifNotExists: true
  }, callback);
};

exports.down = function (db, callback) {
  db.dropTable('users', callback);
};
exports._meta = {
  "version": 1
};