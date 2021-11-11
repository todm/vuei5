const fs = require('fs');
const ncp = require('ncp');
const path = require('path');
const package = require('../package.json');

ncp("src", "dist/resources/");