(function () {
  'use strict';

  var api = require('../api');

  module.exports = exports = function (app) {
    app.get('/api/articles', api.article.getArticles);
    app.post('/api/article', api.article.addArticle);
    app.delete('/api/article/:_id', api.article.removeArticle);
  };
})();