/**
 * Created by yanshi0429 on 16/6/13.
 */

module.exports = exports = {
    appIndex: function (req, res) {
        if(!req.session.user){
            req.session.error = "请先登录!";
            res.redirect("/");
        }
        return res.render('app/index', {title: 'MyAppExpress', layout: "app/layout.html"});
    },
    //siteIndex:function(req,res){
    //    return res.render('site/index', {title: 'MyAppExpress', layout: "site/layout.html"});
    //},
    homeIndex:function(req,res){
        return res.render('home/index', {title: 'MyAppExpress', layout: "home/layout.html"});
    }
};