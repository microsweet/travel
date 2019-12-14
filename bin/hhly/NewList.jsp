<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
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
	src="New_scripts/jquery.js"">
	
</script>
<script language="javascript" type="text/javascript"
	src="New_scripts/tab.js"">
	
</script>
<script src="New_scripts/swfobject_modified.js" type="text/javascript">
	
</script>

<script type="text/javascript" src="New_js/jquery.slideBox.js"></script>
<script type="text/javascript" src="New_js/jquery.slideBox.min.js"></script>
<script type="text/javascript">
var type;
var localUrl;
	$(function(){
		var thisURL = document.URL;
		localUrl = thisURL.split('?')[0]; 
		var getval =thisURL.split('?')[1]; 
		type= getval.split("=")[1];
		var itemName;
		if(type == 0){
			itmeName="新乐市文化";
		}else if(type == 4){
			itmeName="景点介绍";
		}else{
			itmeName="未知位置";
		}
		$("#itmeName").html(itmeName);
		
		var end = localUrl.lastIndexOf("\/");
		localUrl = localUrl.substring(0,end);
	})
	
	function openNewsInfo(newsID){
		var pageurl = localUrl+'/New_Details?ID='+newsID+'&typeid='+type+'';
		window.open(pageurl,"_self");
	}
</script>
<link rel="stylesheet" href="New_css/jquery.slideBox.css" type="text/css"></link>
</head>

<body>
<div style="text-align:center;width:100%">
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
											src="New_images/l_jqdt.png" tppabs=" New_images/l_jqdt.png"
											width="144" height="65" /></td>
									</tr>
									<tr>
										<td class="left_titile">
											<ul>
												<!--<li><a href="NewList?type=1">旅游攻略</a></li>-->
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
								src="New_images/l_22.png" tppabs=" New_images/l_22.png"
								width="172" height="194" /></td>
						</tr>
						<tr>
							<td height="300">&nbsp;</td>
						</tr>
					</table>
				</td>
				<td valign="top" width="792">
					<table width="100%" border="0" cellspacing="0" cellpadding="0">
						<tr>
							<td height="55" valign="top"
								style="background:url(New_images/l_03.png) no-repeat bottom">
								<table width="100%" border="0" cellspacing="0" cellpadding="0">
									<tr>
										<td width="443" height="55" class="right_title"></td>
										<td width="349" align="right" class="adress">您现在位置：<a
											href="index.jsp" tppabs=" default.aspx">首页</a>&nbsp;>&nbsp;
											<span id="itmeName" style="color:#825c1e;"></span>
										</td>
									</tr>
								</table>
							</td>
						</tr>
						<tr>
							<td valign="top" class="xw">
								<table id="ctl00_right_NewsList1_list" cellspacing="0"
									cellpadding="0" border="0"
									style="width:100%;border-collapse:collapse;">
									<c:forEach items="${list }" var="m">
										<tr>
											<td>

												<ul class="">
													<li>
														<table cellpadding="0" cellspacing="0" width="90%"
															border="0">
															<tr>
																<td align="left"><a id="pageurl" onclick="openNewsInfo(${m.ID })"
																	title="${m.WZBT }"> ${m.WZBT }</a></td>
																<td align="right">${m.TIME }</td>
															</tr>
														</table> </span></li>
												</ul>
											</td>
										</tr>
									</c:forEach>
								</table> <br /> <!-- AspNetPager V6.0.0 for VS2005  Copyright:2003-2006 Webdiyer (www.webdiyer.com) -->
								<!--记录总数只有一页，AspNetPager已自动隐藏，若需在只有一页数据时显示AspNetPager，请将AlwaysShow属性值设为true！-->
								<!-- AspNetPager V6.0.0 for VS2005 End -->
							</td>
						</tr>

					</table>
				</td>
			</tr>
		</table>
	</div>

	<!--二级右边内容-->
	<!--所有页面下方版权-->
	<%@include file="/MasterPage/Bottom.jspf"%>
	</div>
</body>
</html>
