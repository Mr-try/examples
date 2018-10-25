'use strict';

module.exports = app => {
  router.get('/', controller.home.index)
  router.all('/:controller/:action/', (ctx, next) => {
    let controllerName = ctx.params.controller || 'index'
    let actionName = ctx.params.action || 'index'
    controller[controllerName][actionName](ctx,next)
    next()
  })
};
