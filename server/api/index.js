/**
 * Created by yanshi0429 on 16/6/13.
 */
var UserAPI = require('./user');
var ArticleAPI = require('./article');

module.exports = exports = {
    user : new UserAPI(),
    article : new ArticleAPI()
}