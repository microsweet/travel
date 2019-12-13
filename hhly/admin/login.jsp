<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>欢迎登录新乐市文化旅游管理后台</title>
<link href="css/style.css" rel="stylesheet" type="text/css" />
<script language="JavaScript" src="js/jquery.js"></script>
<script src="js/cloud.js" type="text/javascript"></script>

<script language="javascript">
	$(function(){
    $('.loginbox').css({'position':'absolute','left':($(window).width()-692)/2});
	$(window).resize(function(){  
    $('.loginbox').css({'position':'absolute','left':($(window).width()-692)/2});
    })  
});  
</script> 

</head>

<body style="background-color:#1c77ac; background-image:url(images/light.png); background-repeat:no-repeat; background-position:center top; overflow:hidden;">

<form action="Login" method="post">

    <div id="mainBody">
      <div id="cloud1" class="cloud"></div>
      <div id="cloud2" class="cloud"></div>
    </div>  


<div class="logintop">    
    <span>欢迎登录新乐市文化旅游管理后台</span>    
    <ul>
    <li><a href="../index.jsp">回首页</a></li>
    <li><a href="#">帮助</a></li>
    <li><a href="#">关于</a></li>
    </ul>    
    </div>
    
    <div class="loginbody">
    
    <span class="systemlogo" style="margin:0;padding:0;display:block;"></span> 
       
    <div class="loginbox">
    
    <ul>
    <li><input id="loginname" name="loginname" type="text" class="loginuser"  /></li>
    <li><input id="loginpwd" name="loginpwd" type="password" class="loginpwd" /></li>
    <li><input name="" type="submit" class="loginbtn" value="登录"   />&nbsp;&nbsp;<font
							style="font-weight:bold;font-style:italic;" color=red>
								${Ms }</font></li>
    </ul>
    
    
    </div>
    
    </div>
    
    
    
    <div class="loginbm">版权所有  2013  <a href="">河北省第二测绘院</a></div>
	</form>
    
</body>

</html>
