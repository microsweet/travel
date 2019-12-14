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

<title>走进新乐</title>

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
<script type="text/javascript" src="New_js/jquery.slideBox.js"></script>
<script type="text/javascript" src="New_js/jquery.slideBox.min.js"></script>

<link rel="stylesheet" href="New_css/jquery.slideBox.css" type="text/css"></link>
</head>

<body>
	<%--头部 --%>
	<div style="text-align:center;width:100%">
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
											src="New_images/l_zjdc.png" tppabs="  images/l_zjdc.png"
											width="144" height="65" /></td>
									</tr>
									<tr>
										<td class="left_titile">
											<ul>
												<!--<li><a
													href="NewList?type=1">旅游攻略</a>
												</li>-->
												<li><a href="NewList?type=4"
													>周边景区</a></li>
												<li><a href="NewList?type=2"
													>交通指南</a></li>
											</ul>
										</td>
									</tr>
								</table>
							</td>
						</tr>
						<tr>
							<td height="200" align="left" valign="top"><img
								src="New_images/l_22.png" tppabs="  images/l_22.png" width="172"
								height="194" /></td>
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
								style="background:url(images/l_03.png) no-repeat bottom">
								<table width="100%" border="0" cellspacing="0" cellpadding="0">
									<tr>
										<td width="443" height="55" class="right_title">新乐简介</td>
										<td width="349" align="right" class="adress">您现在位置：<a
											href="index.jsp" tppabs="index.jsp">首页</a>&nbsp;>&nbsp;<span id="itmeName" style="color:#825c1e;">走进新乐</span></td>
									</tr>
								</table>
							</td>
						</tr>

						<tr>
							<td align="left" valign="top" class="article" style="line-height:30px;">
								
								<p style="text-indent:2em;">新乐位于石家庄市北部，总面积525平方公里，总人口51.7万；城市建成区面积13平方公里，市区人口14万。辖8镇3乡1个街道，160个行政村、10个居委会。2009年列为省财政直管县（市）。新乐交通区位十分优越，南距省会石家庄30公里，北距首都北京200公里，东距天津港280公里，距石家庄国际机场零距离。境内有京广、神黄、京石客运专线三条铁路，京港澳、新元、石忻（规划中）三条高速公路，107国道和203、204省道三条高等级公路，周边40公里半径范围内有京昆、石黄、石津、青银、保阜和西柏坡等六条高速公路，具备独特的航空、铁路、公路多式联合运输条件。是国家主体功能区规划的重点开发区域。 </p>
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
