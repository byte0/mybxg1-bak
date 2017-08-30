define(['jquery','template','bootstrap'],function($,template){
  // 调用后台接口获取列表数据
  $.ajax({
    type : 'get',
    url : '/api/teacher',
    dataType : 'json',
    success : function(data){
      // 解析数据渲染页面
      var html = template('teacherTpl',{list : data.result});
      $('#teacherInfo').html(html);

      // 绑定预览单击事件
      $('.preview').click(function(){
        // 获取当前记录ID
        var td = $(this).closest('td');
        var tcId = td.attr('data-tcId');
        // 根据ID查询数据
        $.ajax({
          type : 'get',
          url : '/api/teacher/view',
          data : {tc_id : tcId},
          dataType : 'json',
          success : function(data){
            // 解析数据渲染页面
            var html = template('modalTpl',data.result);
            $('#modalInfo').html(html);
            // 显示弹窗
            $('#teacherModal').modal();
          }
        });

      });
    }
  });


});