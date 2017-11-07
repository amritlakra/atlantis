'use strict';

import dotenv from 'dotenv';
import path from 'path';


// Load environment variables from .env file
dotenv.config();

const env = process.env.NODE_ENV || 'development';
const configs = {
    base: {
        env,
        host: 'localhost',
        port: 7070
    },
    production: {
        port: process.env.APP_PORT || 7071,
        logger: {
            name: 'atlantis-production',
            streams: [{
                type: 'rotating-file',
                path: path.join(__dirname, '../../.koa-rest-api-boilerplate.log'),
                period: '1d',
                count: 7,
                level: 'info'
            }]
        }
    },
    development: {
        logger: {
            name: 'atlantis-development',
            streams: [{
                type: 'stream',
                stream: process.stdout,
                level: 'debug'
            }]
        }
    },
    test: {
        port: 7072,
        logger: {
            name: 'atlantis-test',
            streams: []
        }
    }
};
const config = Object.assign(configs.base, configs[env]);

module.exports = config;
