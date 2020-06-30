document.writeln("<link rel=\"shortcut icon\" href=\""+contextPath+"favicon.ico\"/>");
<!-- Twitter Bootstrap -->
//<!-- link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootswatch/3.1.1/superhero/bootstrap.min.css" -->
document.writeln("<link rel=\"stylesheet\" href=\""+contextPath+"static/css/lib/bootstrap.min.css\">");
<!-- Font Awesome Icons -->
document.writeln("<link href=\""+contextPath+"static/css/lib/font-awesome.css\" rel=\"stylesheet\">");
<!-- specific styles -->
document.writeln("<link rel=\"stylesheet/less\" href=\""+contextPath+"static/css/lib/style.less\">");
document.writeln("<link href=\""+contextPath+"static/css/index.css\" rel=\"stylesheet\">");
document.writeln("<link href=\""+contextPath+"static/css/common.css\" rel=\"stylesheet\">");
<!-- Animate.css -->
//<!-- <link rel="stylesheet/less" href="//cdnjs.cloudflare.com/ajax/libs/animate.css/3.1.0/animate.min.css"> -->
//<!-- Less.js in the head to act fast -->
document.writeln("<script src=\""+contextPath+"static/js/lib/less.min.js\"></script>");
<!-- Modrernizr -->
document.writeln("<script src=\""+contextPath+"static/js/lib/modernizr.min.js\"></script>");
<!-- jQuery  -->
document.writeln("<script src=\""+contextPath+"static/js/lib/jquery.min.js\"></script>");
<!-- /.container -->
<!-- Twitter Bootstrap	-->
document.writeln("<script src=\""+contextPath+"static/js/lib/bootstrap.min.js\"></script>");
<!-- jQuery plugins we might use  -->
document.writeln("<script src=\""+contextPath+"static/js/lib/plugins.js\"></script>");
<!-- specific Javascript -->
document.writeln("<script src=\""+contextPath+"static/js/lib/main.js\"></script>");

/*百度访问统计
var _hmt = _hmt || [];
(function() {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?百度统计账号下每个网站的唯一码，注册后获取";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
})();
*/

