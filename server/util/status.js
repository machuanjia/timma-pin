/**
 * Created by yanshi0429 on 16/7/25.
 */
(function () {
    var status = {
        ok      : 200,
        notFound: 404,
        error   : 500,
        signUp  : {
            userExit: 1000,
            error   : 1001
        },
        login   : {
            userNotExist: 2000,
            userPwdError: 2001
        }
    };
    module.exports = exports = status;
})();
