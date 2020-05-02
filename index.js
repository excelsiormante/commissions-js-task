/* eslint-disable no-console */
const outputCommissions = require('./src/lib/outputCommissions');

const input = require(`./${process.argv[2]}`);

outputCommissions(input);
