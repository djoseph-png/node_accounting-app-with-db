'use strict';

const { Sequelize } = require('sequelize');
const utils = require('util');

// Needed for testing purposes, do not remove
require('dotenv').config();
global.TextEncoder = utils.TextEncoder;

const {
  POSTGRES_HOST,
  POSTGRES_PORT,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_DB,
  DB_HOST,
  DB_PORT,
  DB_USER,
  DB_PASSWORD,
  DB_NAME,
} = process.env;

/*
  All credentials setted to default values (exsept password - it is exapmle)
  replace if needed with your own
*/

const sequelize = new Sequelize({
  database: POSTGRES_DB || DB_NAME || 'accounting_app',
  username: POSTGRES_USER || DB_USER || 'postgres',
  host: POSTGRES_HOST || DB_HOST || 'localhost',
  dialect: 'postgres',
  port: POSTGRES_PORT || DB_PORT || 5432,
  password: POSTGRES_PASSWORD || DB_PASSWORD || 'postgres',
});

module.exports = {
  sequelize,
};
