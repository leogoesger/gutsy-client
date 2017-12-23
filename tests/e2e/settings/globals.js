function _getEnvironmentURL() {
  const environment = process.env.ENV;
  switch (environment) {
    default:
      return 'http://localhost:4000';
  }
}

module.exports = {
  url: _getEnvironmentURL(),
};
