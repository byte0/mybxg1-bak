define(['jquery'],function($){
  $(document).ajaxStart(function(){
    // 控制遮罩显示
    $('.overlay').show();
  });

  $(document).ajaxStop(function(){
    // 控制遮罩隐藏
    setTimeout(function(){
      $('.overlay').hide();
    },500);
  });
});