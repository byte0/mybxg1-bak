define(['jquery','template','util','uploadify'],function($,template,util){
  // 设置导航菜单选中
  util.setMenu('/course/add');
  // 获取课程ID
  var csId = util.qs('cs_id');
  // 根据课程ID查询课程的封面信息
  $.ajax({
    type : 'get',
    url : '/api/course/picture',
    data : {cs_id : csId},
    dataType : 'json',
    success : function(data){
      // 渲染页面
      var html = template('pictureTpl',data.result);
      $('#pictureInfo').html(html);
      // 处理封面上传
      $('#upfile').uploadify({
        width : 80,
        height : 'auto',
        buttonText : '选择图片',
        itemTemplate : '<span></span>',
        buttonClass : 'btn btn-success btn-sm',
        swf : '/public/assets/uploadify/uploadify.swf',
        uploader : '/api/uploader/cover',
        fileObjName : 'cs_cover_original',
        formData : {cs_id : csId},
        onUploadSuccess : function(f,data){
          data = JSON.parse(data);
          $('.preview img').attr('src',data.result.path);
        }
      });
    }
  });

});