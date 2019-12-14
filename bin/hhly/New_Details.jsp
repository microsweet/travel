<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<base href="<%=basePath%>">

<title>新乐市旅游</title>

<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta http-equiv="description" content="This is my page">

<link href="New_css/style.css" rel="stylesheet" type="text/css" />
<script language="javascript" type="text/javascript"
	src="New_scripts/jquery.js"></script>
<script language="javascript" type="text/javascript"
	src="New_scripts/tab.js"></script>
<script src="New_scripts/swfobject_modified.js" type="text/javascript"></script>
</script>
<script type="text/javascript" src="New_js/jquery.slideBox.js"></script>
<script type="text/javascript" src="New_js/jquery.slideBox.min.js"></script>
<script type="text/javascript">
var type;
var localUrl;
	$(function(){
		var thisURL = document.URL;
		localUrl = thisURL.split('?')[0]; 
		var num = thisURL.indexOf("&");
		if(num > 0 ){
			var getval =thisURL.split('&')[1]; 
			type= getval.split("=")[1];
			var itemName="";
			if(type == 0){
				itmeName="新乐市文化";
			}else if(type == 4){
				itmeName="景点介绍";
			}else{
				itmeName="未知位置";
			}
			
			var end = localUrl.lastIndexOf("\/");
			localUrl = localUrl.substring(0,end);
			
			var html = '<a href="'+localUrl+'/NewList?type='+type+'">'+itmeName+'</a>'
			$("#itmeName").html("&nbsp;>&nbsp;"+html);
			}
		
	})
</script>
<link rel="stylesheet" href="New_css/jquery.slideBox.css" type="text/css"></link>
</head>

<body>


	<form>
<div style="text-align:center;">
		<!--头部-->

	
		<div class="head">
			<%@include file="/MasterPage/Top.html"%>

		</div>
		<!--首页中间内容-->


		<!--二级左边导航-->



		<div class="main">
			<table width="100%" border="0" cellspacing="0" cellpadding="0"
				class="main_bg">
				<tr>
					<td width="210" align="center" valign="top">
						<table width="100%" border="0" cellspacing="0" cellpadding="0">
							<tr>
								<td align="center">
									<table width="160" border="0" cellspacing="0" cellpadding="0">
										<tr>
											<td height="97" align="left" valign="bottom"><img
												src="New_images\l_jqdt.png" tppabs="New_images\l_jqdt.png"
												width="144" height="65" /></td>
										</tr>
										<tr>
											<td class="left_titile">
												<ul>
													
													<li><a href="NewList?type=4">周边景区</a>
													</li>
													<li><a href="NewList?type=2">交通指南</a>
													</li>
												</ul>
											</td>
										</tr>
									</table>
								</td>
							</tr>
							<tr>
								<td height="200" align="left" valign="top"><img
									src="New_images\l_22.png" tppabs="  New_images\l_22.png"
									width="172" height="194" /></td>
							</tr>
							<tr>
								<td height="300">&nbsp;</td>
							</tr>
						</table>
					</td>
					<td valign="top"  width="792" >
						<table width="100%" border="0" cellspacing="0" cellpadding="0">
							<tr>
								<td height="55" valign="top"
									style="background:url(New_images\l_03.png) no-repeat bottom">
									<table width="100%" border="0" cellspacing="0" cellpadding="0">
										<tr>
											<td width="443" height="55" class="right_title">信息正文</td>
											<td width="349" align="right" class="adress">您现在位置：<a
												href="index.jsp">首页</a>
											<span id="itmeName" style="color:#825c1e;"></span>&nbsp;>&nbsp;<span style="color:#825c1e;">文章内容</span></td>
										</tr>
									</table>
								</td>
							</tr>
							<tr>
								<td valign="top" class="xw">
									<table width="100%" border="0" cellspacing="0" cellpadding="0">
										<tr>
											<!--	<td height="50" align="center" valign="bottom"
												class="Article_title"><div style="margin-left:100px;"> ${wzbt }</div>
												
											</td>
											 <td height="50" align="center" valign="bottom"><div style="margin-right:20px;"><a href="jiemian.jsp">[地图查看]</a></div></td>
											 -->
											<td height="50" align="center" valign="bottom"
												class="Article_title">${wzbt }</td>
										</tr>
										<tr>
											<td height="40" align="center" class="from">信息来源：新乐市旅游地理信息系统 &nbsp;&nbsp;
												发布时间：${fbdate} </td>
										</tr>

										<tr>
											<td height="1" bgcolor="#e0bc51" colspan="2"></td>
										</tr>
									</table>
								</td>
							</tr>
							<tr>
								<td align="left" valign="top"  width="792" class="article">

									<p>${jianjie }</p>
								</td>
							</tr>
						</table>
					</td>
				</tr>
			</table>
		</div>


		<!--二级右边内容-->
		<!--所有页面下方版权-->

		<!--所有页面下方版权-->
		<%@include file="/MasterPage/Bottom.jspf"%>
		</div>
</body>
</html>
