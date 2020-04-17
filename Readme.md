# Step 1

- install necessary package yarn add sequelize sequelize-cli pg pg-hstore

# Step 2

- Create a file name @ .sequelizerc and write the path where your seeders, migrations, models with be created at
  @touch .sequelizerc

### example

- const path = require('path')

- module.exports = {
  config: path.resolve('./database/config', 'config.js'),
  'models-path': path.resolve('./database/models'),
  'seeders-path': path.resolve('./database/seeders'),
  'migrations-path': path.resolve('./database/migrations'),
  }

# Step 3

- Run @sequelize init to create files to the path where you signified in step 2

# Step 4

- Edit config.js file with your your database url string

### @example

- require('dotenv').config()

- module.exports = {
  development: {
  url: process.env.DEV_DATABASE_URL,
  dialect: 'postgres',
  },
  test: {
  url: process.env.TEST_DATABASE_URL,
  dialect: 'postgres',
  },
  production: {
  url: process.env.DATABASE_URL,
  dialect: 'postgres',
  },
  }

# Step 5

- create a file name .env

### example

- DATABASE_URL=
- DEV_DATABASE_URL=postgres://<db_user>:<db_password>@127.0.0.1:5432/dev_db
- TEST_DATABASE_URL=postgres://<db_user>:<db_password>@127.0.0.1:5432/test_db

# Step 6

- create a model using the terminal by running the commands in the example which will generate a migration table

### example

- sequelize model:generate --name User --attributes name:string,email:string

# Step 7

- Run @ (sequelize db:migrate) on your terminal to create the tables in your database

## Install and configuring Babel

- yarn add @babel/core @babel/cli @babel/node @babel/plugin-transform-runtime @babel/preset-env @babel/register @babel/runtime babel-loader --save-dev

# Create a file name .babelrc and write to the file with this below

- {
  "presets": ["@babel/preset-env"],
  "plugins": [["@babel/transform-runtime"]]
  }

# your package.json write this script below

- "dev": "node or nodemon --exec babel-node ./bin/www"

# Testing App

## Testing package

- yarn add mocha chai chai-http nyc --save-dev

## Create a folder and a test file

## Write test but first import your node entry file ('../app) and other neccessary packages for testing

@example

- import chai from 'chai';
  import chatHttp from 'chai-http';
  import 'chai/register-should';
  import app from '../app'

## Write the script below in your package.json file on the script property

@example
"test": "SET NODE_ENV=test&& sequelize db:migrate:undo:all && sequelize db:migrate && nyc --require @babel/register mocha ./api/test/test.js --timeout 20000 --exit"

### for mac use (export NODE_ENV=test)

## Finally for the test run yarn test on your terminal
