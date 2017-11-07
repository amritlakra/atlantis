'use strict';

import Router from 'koa-router';
import graphqlHTTP from 'koa-graphql';
import homeController from './controllers/home';
import schema from './schema';

const router = new Router();
router.get('/', homeController.welcome);
router.get('/spec', homeController.showSwaggerSpec);
router.get('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}));
router.post('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}));

module.exports = router;
