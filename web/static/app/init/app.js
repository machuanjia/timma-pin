/**
 * Created by yanshi0429 on 16/6/13.
 */
(function () {
    angular.module('my.app.tpls', []);
    var app = angular.module("myApp", [
        'ui.router',
        'ui.bootstrap',
        'w5c.validator',
        "my.route",
        "my.app.tpls",
        "my.init",
        "my.data",
        "my.user",
        "my.nav",
        "my.aside",
        "my.slider",
        "my.hotsport"
    ]);
})();