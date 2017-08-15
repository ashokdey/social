require('../config/config');
require('babel-core/register');
require('./users.test');

before((done) => {
  require('../db/db');
  done();
})