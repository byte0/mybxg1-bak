define(['jquery','template','util','uploadify'],function($,template,util){
  // 设置导航菜单选中
  util.setMenu('/main/index');
  // 调用后台接口填充表单
  $.ajax({
    type : 'get',
    url : '/api/teacher/profile',
    dataType : 'json',
    success : function(data){
      // 解析数据渲染页面
      var html = template('settingsTpl',data.result);
      $('#settingsInfo').html(html);
      // 处理头像上传
      $('#upfile').uploadify({
        width : 120,
        height : 120,
        buttonText : '',
        itemTemplate : '<span></span>',
        swf : '/public/assets/uploadify/uploadify.swf',
        uploader : '/api/uploader/avatar',
        fileObjName : 'tc_avatar',
        onUploadSuccess : function(f,data){
          var data = JSON.parse(data);
          // 重置头像的图片地址
          $('.preview img').attr('src',data.result.path);
        }
      });
    }
  });

});