const _ = require('lodash');
const logger = require('core/logger');
const {Post, User, Category} = require('core/database');


module.exports = class {
  constructor(params) {
    this.params = params;
    this.includeMapper = [
      {model: Post, as: 'posts'},
      {model: User, as: 'author'},
      {model: Category, as: 'category'},
    ];
    this.where = {};
    this.include = [];
    this.query = {
      where: this.where,
      include: this.include
    };
  }
 
  whereIn(param) {
    const obj = this.params[param];
    if(obj) {
      this.where[param] = {$in: obj.split(',')};
    }
    return this;
  }

  includes(param) {
    const obj = this.params[param];
    if(obj) {
      const fieldsToInclude = obj.split(',');
      logger.debug(fieldsToInclude)
      fieldsToInclude.forEach(field => {
        const include = _.find(this.includeMapper, {'as': field});
        if(!_.isEmpty(include)) {
          this.include.push(include);
        }
      });
    }
    logger.debug(this.include)
    return this;
  }

  build() {
    return this.query;
  }
}