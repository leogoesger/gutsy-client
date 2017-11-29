function _getEnvironmentURL() {
  const environment = process.env.ENV;
  switch (environment) {
    default:
      return 'http://localhost:3000';
  }
}

module.exports = {
  url: _getEnvironmentURL(),
};
