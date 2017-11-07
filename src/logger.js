'use strict';

import bunyan from 'bunyan';
import {logger as loggerConfig} from './config';

const logger = bunyan.createLogger(loggerConfig);
module.exports = logger;
