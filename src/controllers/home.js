'use strict';

import pkginfo from '../../package.json'
import spec from '../spec';

/**
 * @swagger
 * /:
 *  get:
 *    description: Returns API information
 *    responses:
 *      200:
 *        description: Hello API
 */
exports.welcome = ctx => {
    // BUSINESS LOGIC
    const data = {
        name: pkginfo.name,
        version: pkginfo.version,
        description: pkginfo.description,
        author: pkginfo.author
    };

    ctx.res.ok(data, 'Hello, API!');
};

exports.showSwaggerSpec = ctx => {
    ctx.body = spec;
};
