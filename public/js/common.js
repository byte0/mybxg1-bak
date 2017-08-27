NProgress.start();
NProgress.done();

$('.navs ul').prev('a').on('click', function () {
	$(this).next().slideToggle();
});

// 退出功能
$('#logoutBtn').click(function(){
  console.log(123);
  $.ajax({
    type : 'post',
    url : '/api/logout',
    dataType : 'json',
    success : function(data){
      if(data.code == 200){
        location.href = '/main/login';
      }
    }
  });
});