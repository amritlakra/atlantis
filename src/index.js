#!/usr/bin/env node

'use strict';

import Koa from 'koa';
import bodyParser from 'koa-body';
import cors from 'kcors';
import config from './config';
import logMiddleware from './middlewares/log';
import logger from './logger';
import requestId from './middlewares/requestId';
import responseHandler from './middlewares/responseHandler';
import router from './routes';


const app = new Koa();

// Set middlewares
app.use(
  bodyParser({
    enableTypes: ['json', 'form'],
    formLimit: '10mb',
    jsonLimit: '10mb'
  })
);
app.use(requestId());
app.use(logMiddleware({ logger }));
app.use(
  cors({
    origin: '*',
    allowMethods: ['POST'],
    exposeHeaders: ['X-Request-Id']
  })
);
app.use(responseHandler());

// Bootstrap application router
app.use(router.routes());
app.use(router.allowedMethods());

// Start server
if (!module.parent) {
  app.listen(config.port, config.ip, () => {
    console.log(`API server listening on ${config.host}:${config.port}, in ${config.env}`);
  });
}

// Expose app
module.exports = app;
