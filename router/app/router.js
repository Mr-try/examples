'use strict';

module.exports = app => {
  const { controller, router } = app;
  router.get('/', controller.index.index)
  router.all('/:controller/:action/', (ctx, next) => {
    let controllerName = ctx.params.controller || 'index'
    let actionName = ctx.params.action || 'index'
    controller[controllerName][actionName](ctx,next)
    next()
  })
};
