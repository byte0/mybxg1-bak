define(['jquery','template'],function($,template){
  // 调用后台接口获取列表数据
  $.ajax({
    type : 'get',
    url : '/api/teacher',
    dataType : 'json',
    success : function(data){
      // 解析数据渲染页面
      var html = template('teacherTpl',{list : data.result});
      $('#teacherInfo').html(html);
    }
  });
});