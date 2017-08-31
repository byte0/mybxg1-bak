define(['jquery'],function($){
  // 工具函数
  return {
    setMenu : function(path){// 设置导航菜单选中
      $('.navs a[href="'+path+'"]').addClass('active');
    },
    qs : function(key){// 获取指定的URL参数值
      // uname=lisi&flag=123
      var param = location.search.substring(1);
      var result = null;
      if(param){
        var kvs = param.split('&');
        $.each(kvs,function(i,item){
          var kv = item.split('=');
          if(key == kv[0]){
            result = kv[1];
            return false;// 终止循环
          }
        });
      }
      return result;
    }
  }
});