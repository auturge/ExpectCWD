#!/usr/bin/env node

'use strict';

const { getFolder, expectCwd, die } = require('../lib');

const folder = getFolder();

expectCwd(folder, die);
