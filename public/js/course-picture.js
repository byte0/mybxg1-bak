define(['jquery','template','util'],function($,template,util){
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
      var html = template('pictureTpl',data.result);
      $('#pictureInfo').html(html);
    }
  });

});