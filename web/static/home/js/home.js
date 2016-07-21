/**
 * Created by yanshi0429 on 16/7/20.
 */
/**
 * Created by yanshi0429 on 15/6/25.
 */

$(function () {
    //$(document).ready(function () {
    //
    //});
    $('#loginForm').validator().on('submit', function (e) {
        if (e.isDefaultPrevented()) {
            // handle the invalid form...
        } else {
            // everything looks good!
            var $form = $(this),
                name = $form.find("input[name='name']").val(),
                password = $form.find("input[name='name']").val()
            $.ajax({
                type    : "post",
                url     : '/login',
                data    : {name: name, password: password},
                success : function (data) {
                    window.location.href = '/hotsport'
                },
                dataType: 'json'
            });
            return false;
        }
    });
});
