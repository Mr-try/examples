'use strict';

const path = require('path');
const fs = require('fs');
const Controller = require('egg').Controller;

class IndexController extends Controller {
  async index() {
    this.ctx.body = 'index'
  }
}

module.exports = IndexController;
