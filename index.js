#!/usr/bin/env node
'use strict';

var commander = require('commander');
var seedFunction = require('./seedFunction');


commander
.version('1.0.0')
.command('seed')
.description('seed database with data')
.option('-u, --users', 'seed user data table')
.option('-q --questions', 'seed question data table')
.option('-a --answers', 'seed answer data table')
.option('-r --regions', 'seed regions data table')
.action(seedFunction);

commander.parse(process.argv);

if (commander.args.length === 0) commander.help();