# gutsy-client

[![Build Status](https://travis-ci.org/leogoesger/gutsy-client.svg?branch=master)](https://travis-ci.org/leogoesger/gutsy-client)
[![Coverage Status](https://coveralls.io/repos/github/leogoesger/gutsy-client/badge.svg?branch=master)](https://coveralls.io/github/leogoesger/gutsy-client?branch=master)

## About

This project uses [NodeJS](https://nodejs.org/), [ExpressJS](https://expressjs.com/), [Sequelize](http://docs.sequelizejs.com/), and [Postgres](https://www.postgresql.org/).

## Getting Started

1. Install [NodeJS](https://nodejs.org/), [npm](https://www.npmjs.com/), [yarn](https://yarnpkg.com/en/) and [Postgres](https://postgresapp.com/).
2. Create `dev` and `test` database in Postgres

   ```
   psql;
   CREATE DATABASE gutsy_development;
   CREATE DATABASE gutsy_test;
   ```

3. Install your dependencies

   ```
   cd path/to/gutsy-api; yarn
   ```

4. Start your app

   ```
   yarn start
   ```

## Testing

Simply run `yarn test` and all your tests in the `test/` directory will be run.

## CI

It uses [Travis-CI](https://travis-ci.org/) and [Coveralls](https://coveralls.io/).

## Sequelize CLI

```
$ npm install -g sequelize-cli

$ sequelize model:create --name TodoItem --attributes content:string,complete:boolean #Generate a model
```

## Help

For more information on all the things you can do with Sequelize CLI visit [sequelize cli ](https://github.com/sequelize/cli).

## Scripts

```
"test": "NODE_ENV=test yarn run test-prepare ; NODE_ENV=test npm run mocha", # Clear database before all the tests are run
"test-cover": "NODE_ENV=test nyc --reporter=text npm run mocha",             # Generate test coverage report locally
"test-coverage": "nyc report --reporter=text-lcov | coveralls",              # Generate test coverage and send it to Coveralls
```

## Deployment

```
location / {
try_files $uri $uri/ /index.html;
}

location /api {
proxy_pass http://localhost:8080;
proxy_http_version 1.1;
proxy_set_header Upgrade $http_upgrade;
proxy_set_header Connection 'upgrade';
proxy_set_header Host $host;
proxy_cache_bypass $http_upgrade;
}

sudo nano /etc/nginx/sites-available/default
sudo nginx -t
sudo systemctl restart nginx
```

## Options

[Postico](https://eggerapps.at/postico/): A Modern PostgreSQL Client for the Mac

## License

Copyright (c) 2017

Licensed under the [MIT license](LICENSE).
