/**
 * Created by yanshi0429 on 16/7/20.
 */
/**
 * Created by yanshi0429 on 15/6/25.
 */

$(function () {
    $(document).ready(function () {
        $('#loginBtn').click(function(){
            $('#registeForm').addClass('hidden');
            $('#loginForm').removeClass('hidden');
            $('#loginBtn').addClass('hidden');
            $('#registeBtn').removeClass('hidden');
        });
        $('#registeLink').click(function(){
            $('#registeForm').removeClass('hidden');
            $('#loginForm').addClass('hidden');
            $('#loginBtn').removeClass('hidden');
            $('#registeBtn').addClass('hidden');
        });
        $('#registeBtn').click(function(){
            $('#registeForm').removeClass('hidden');
            $('#loginForm').addClass('hidden');
            $('#loginBtn').removeClass('hidden');
            $('#registeBtn').addClass('hidden');
        });
    });
    $('#loginForm').validator().on('submit', function (e) {
        if (e.isDefaultPrevented()) {
            // handle the invalid form...
        } else {
            // everything looks good!
            var $form = $(this),
                name = $form.find("input[name='name']").val(),
                password = $form.find("input[name='password']").val()
            $.ajax({
                type    : "post",
                url     : '/login',
                data    : {name: name, password: password},
                success : function (data) {
                    window.location.href = '/hotsport'
                },
                error:function(XMLHttpRequest, textStatus, errorThrown){
                    alert(XMLHttpRequest.responseText);
                },
                dataType: 'json'
            });
            return false;
        }
    });
    $('#registeForm').validator().on('submit', function (e) {
        if (e.isDefaultPrevented()) {
            // handle the invalid form...
        } else {
            // everything looks good!
            var $form = $(this),
                name = $form.find("input[name='name']").val(),
                password = $form.find("input[name='password']").val()
            $.ajax({
                type    : "post",
                url     : '/register',
                data    : {name: name, password: password},
                success : function (data,textStatus) {
                    $('#loginBtn').click();
                },
                error:function(XMLHttpRequest, textStatus, errorThrown){
                    alert(XMLHttpRequest.responseText);
                },
                dataType: 'json'
            });
            return false;
        }
    });
});
