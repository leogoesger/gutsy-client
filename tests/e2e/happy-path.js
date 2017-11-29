/* eslint-disable no-console */
const globals = require('./settings/globals.js');

module.exports = {
  '@tags': ['happy-path'],

  'Happy-Path': browser => {
    return browser
      .url(globals.url)
      .pause(6000000)
      .end();
  },
};
