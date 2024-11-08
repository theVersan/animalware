// test/lifecycle.test.js
var sails = require('sails');

before(function(done) {
  this.timeout(5000000);

  sails.lift({
    hooks: { grunt: false, csrf: false },
    log: { level: 'warn' }
  }, (err) => {
    if (err) {return done(err);}
    return done();
  });
});

after((done) => {
  sails.lower(done);
});