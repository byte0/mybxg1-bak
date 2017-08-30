require.config({
  baseUrl : '/public/assets',
  paths : {
    jquery : 'jquery/jquery',
    cookie : 'jquery-cookie/jquery.cookie',
    template : 'artTemplate/template-web',
    bootstrap : 'bootstrap/js/bootstrap.min',
    common : '../js/common',
    login : '../js/login',
    index : '../js/index',
    teacherlist : '../js/teacher-list',
    util : '../js/util'
  },
  shim : {
    bootstrap : {
      deps : ['jquery']
    }
  }
});