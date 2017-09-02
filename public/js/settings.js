define(['jquery','template','util','ckeditor','uploadify','datepicker','language','region'],function($,template,util,CKEDITOR){
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
      // 处理省市县三级联动
      $('#pcd').region({
        url : '/public/assets/jquery-region/region.json'
      });
      // 处理富文本
      CKEDITOR.replace('ckeditor',{
        toolbarGroups : [
          { name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
          { name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] },
          { name: 'links', groups: [ 'links' ] }
        ]
      });
    }
  });

});