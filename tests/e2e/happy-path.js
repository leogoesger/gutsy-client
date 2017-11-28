import fetch from 'isomorphic-fetch';

module.exports = {
  reporter(results, cb) {
    fetch(
      'http://localhost:4444/selenium-server/driver/?cmd=shutDownSeleniumServer'
    ).then(() => {
      cb();
      if (
        (typeof results.failed === 'undefined' || results.failed === 0) &&
        (typeof results.error === 'undefined' || results.error === 0)
      ) {
        process.exit(0);
      } else {
        process.exit(1);
      }
    });
  },
};
