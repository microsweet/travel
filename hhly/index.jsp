<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>

<!--   <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">-->
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<base href="<%=basePath%>">
<title>新乐市旅游</title>
<meta name="keywords" content=新乐市旅游 />
<meta name="description" content=新乐市旅游 />
<meta name="robots" content="all" />
<meta content="MSHTML 6.00.2900.3268" name="GENERATOR" />
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

<link rel="stylesheet" href="New_css/jquery.slideBox.css" type="text/css"></link>
</head>

<%
	//跳入Servlet读取数据,为了防止一直跳转，所以用if来判断
	if (request.getAttribute("tiao") == null) {

		//跳转，地址为web的那个名字 
		response.sendRedirect("Index?type=all");
	}
%>

<body>
	<div style="text-align:center;width:100%">
		<form>

			<!--头部-->
			<!--最新活动-->
		<style type="text/css">
#tpcbanner {
	position: relative;
	width: 269px;
	text-align: left;
	height: 177px;
	overflow: hidden;
}

#tpcbanner_list img {
	border: 0px;
}

#tpcbanner_bg {
	position: absolute;
	bottom: 0;
	background-color: #000;
	height: 30px;
	filter: Alpha(Opacity =                 30);
	opacity: 0.3;
	z-index: 1000;
	cursor: pointer;
	width: 269px;
}

#tpcbanner_info {
	position: absolute;
	bottom: 0;
	left: 5px;
	height: 22px;
	color: #fff;
	z-index: 1001;
	cursor: pointer
}

#tpcbanner_text {
	position: absolute;
	width: 120px;
	z-index: 1002;
	right: 3px;
	bottom: 3px;
}

#tpcbanner ul {
	position: absolute;
	list-style-type: none;
	filter: Alpha(Opacity =                 80);
	opacity: 0.8;
	border: 1px solid #fff;
	z-index: 1002;
	margin: 0;
	padding: 0;
	bottom: 3px;
	right: 5px;
}

#tpcbanner ul li {
	padding: 0px 8px;
	float: left;
	display: block;
	color: #FFF;
	border: #e5eaff 1px solid;
	background: #6f4f67;
	cursor: pointer
}

#tpcbanner ul li.on {
	background: #900
}

#tpcbanner_list a {
	position: absolute;
}
</style>
		<script type="text/javascript">
			var t = n = 0, count;
			var t1 = n1 = 0, count1;
			$(document)
					.ready(
							function() {
								count = $("#tpcbanner_list a").length;
								count1 = $("#tpbanner_list a").length;
								$("#tpcbanner_list a:not(:first-child)").hide();

								$("#tpbanner_list a:not(:first-child)").hide();

								$("#tpcbanner_info").html(
										$("#tpcbanner_list a:first-child")
												.find("img").attr('alt'));

								$("#tpbanner_info").html(
										$("#tpbanner_list a:first-child").find(
												"img").attr('alt'));

								$("#tpcbanner_info")
										.click(
												function() {
													window
															.open(
																	$(
																			"#tpcbanner_list a:first-child")
																			.attr(
																					'href'),
																	"_blank")
												});

								$("#tpbanner_info")
										.click(
												function() {
													window
															.open(
																	$(
																			"#tpbanner_list a:first-child")
																			.attr(
																					'href'),
																	"_blank")
												});

								$("#tpcbanner li")
										.click(
												function() {
													var i = $(this).text() - 1;//获取Li元素内的值，即1，2，3，4
													n = i;
													if (i >= count)
														return;
													$("#tpcbanner_info")
															.html(
																	$(
																			"#tpcbanner_list a")
																			.eq(
																					i)
																			.find(
																					"img")
																			.attr(
																					'alt'));
													$("#tpcbanner_info")
															.unbind()
															.click(
																	function() {
																		window
																				.open(
																						$(
																								"#tpcbanner_list a")
																								.eq(
																										i)
																								.attr(
																										'href'),
																						"_blank")
																	})
													$("#tpcbanner_list a")
															.filter(":visible")
															.fadeOut(500)
															.parent()
															.children().eq(i)
															.fadeIn(1000);
													document
															.getElementById("tpcbanner").style.background = "";
													$(this).toggleClass("on");
													$(this)
															.siblings()
															.removeAttr("class");
												});
								$("#tpbanner li")
										.click(
												function() {
													var i = $(this).text() - 1;//获取Li元素内的值，即1，2，3，4
													n1 = i;
													if (i >= count1)
														return;
													$("#tpbanner_info")
															.html(
																	$(
																			"#tpbanner_list a")
																			.eq(
																					i)
																			.find(
																					"img")
																			.attr(
																					'alt'));
													$("#tpbanner_info")
															.unbind()
															.click(
																	function() {
																		window
																				.open(
																						$(
																								"#tpbanner_list a")
																								.eq(
																										i)
																								.attr(
																										'href'),
																						"_blank")
																	})
													$("#tpbanner_list a")
															.filter(":visible")
															.fadeOut(500)
															.parent()
															.children().eq(i)
															.fadeIn(1000);
													document
															.getElementById("tpbanner").style.background = "";
													$(this).toggleClass("on");
													$(this)
															.siblings()
															.removeAttr("class");
												});
								t1 = setInterval("showAuto()", 3000);
								$("#tpbanner").hover(function() {
									clearInterval(t1)
								}, function() {
									t1 = setInterval("showAuto1()", 4000);
								});
								t = setInterval("showAuto()", 3000);
								$("#tpcbanner").hover(function() {
									clearInterval(t)
								}, function() {
									t = setInterval("showAuto()", 4000);
								});
							})
			function showAuto1() {
				n1 = n1 >= (count1 - 1) ? 0 : ++n1;

				$("#tpbanner li").eq(n1).trigger('click');
			}
			function showAuto() {
				n = n >= (count - 1) ? 0 : ++n;

				$("#tpcbanner li").eq(n).trigger('click');
			}
		</script>
		
			<div class="head">
				<%@include file="/MasterPage/Top.html"%>
			</div>

			<!--首页中间内容-->

			<div class="part_1">
				<table width="100%" border="0" cellspacing="0" cellpadding="0">
					<tr>
						<td height="250" width="325" valign="top">
							<table width="100%" border="0" cellspacing="0" cellpadding="0">
								<tr>
									<td width="194" height="60"><img
										src="New_images/index_04.png" width="134" height="48" />
									</td>
									<td width="130" height="60" align="center">
								<!-- 	<a
										href="news.aspx-type=jqdt&s_sort=58.htm"> <img
											src="New_images/index_06.png" width="53" height="19" /> </a> -->
									</td>
								</tr>
								<tr>
									<td height="190" colspan="2" valign="top" align="center"
										style="background: url(New_images/index_08.png) no-repeat right top;
                                text-align: center; padding-top: 5px; padding-left:28px;"
										class="t_w">


										<div id="tpcbanner">
											<div id="tpcbanner_bg"></div>
											<!--标题背景-->
											<div id="tpcbanner_info"></div>
											<!--标题-->

											<ul>

												<li class="on">1</li>
												<li class="on">2</li>
												<li class="on">3</li>

											</ul>
											<div id="tpcbanner_list">
												<a href="New_Details?ID=191" target="_blank">
													<img src="New_PostImage/a.jpg" width="269px"
													height="177px" title="伏羲台"
													alt="伏羲台" />
												</a>
												<a href="New_Details?ID=189" target="_blank">
													<img src="New_PostImage/b.jpg" width="269px"
													height="177px" title="人祖庙"
													alt="人祖庙" />
												</a>
												<a href="New_Details?ID=190" target="_blank">
													<img src="New_PostImage/c.jpg" width="269px"
													height="177px" title="美术学院"
													alt="美术学院" />
												</a>

											</div>
										</div></td>
								</tr>
							</table></td>
						<td width="415" height="260" valign="top">
							<table width="100%" border="0" cellspacing="0" cellpadding="0">
								<tr>
									<td width="330" height="60"><img
										src="New_images/index_03.png" width="134" height="48" />
									</td>
									<td height="60"><a href="NewList?type=0"> <img
											src="New_images/index_06.png" width="53" height="19" /> </a>
									</td>
								</tr>
								<tr>
									<td height="170" colspan="2" align="left" valign="top"
										class="news" style="border-bottom: 1px dotted #999999">
										<!--景区动态-->
										<table id="ctl00_Index_nlist_list" cellspacing="0"
											cellpadding="0" border="0"
											style="width:100%;border-collapse:collapse;">
											<c:forEach items="${list_jqdt }" var="m">
												<tr>
													<td>
														<ul class="">
															<li>
																<table cellpadding="0" cellspacing="0" width="90%"
																	border="0" class="fontcss">
																	<tr>
																		<td align="left"><a
																			href="New_Details?ID=${m.ID }" title=" ${m.WZBT }">
																				${m.WZBT } </a>
																		</td>
																		<td align="right">${m.TIME }</td>
																	</tr>
																</table> </span>
															</li>
														</ul></td>
												</tr>
											</c:forEach>

										</table> <br /></td>
								</tr>
							</table></td>
						<td width="262" height="260" align="right"><img
							src="New_images/index_42.png"  width="254" height="258"
							usemap="#Map" /> <map name="Map" id="Map">
								<area shape="rect" coords="21,25,129,56" href="../../hhmap/index.html"
									target="_blank" />
							</map></td>
					</tr>
				</table>
			</div>
			<div class="part_2">
				<table width="100%" border="0" cellspacing="0" cellpadding="0">
					<tr>
						<td width="100%" height="217" valign="top"
							style="background: url(New_images/index_55.png) no-repeat">
							<table width="100%" border="0" cellspacing="0" cellpadding="0">
								<tr>
									<td width="170" rowspan="2" align="center" class="di"><img
										src="New_images/1.jpg" alt="" width="122" height="83" />
									</td>
									<td height="174" class="dcjj">
										<p class="fontcss">
											<!--${_jianjie }-->
									新乐位于石家庄市北部，总面积525平方公里，总人口51.7万；城市建成区面积13平方公里，市区人口14万。辖8镇3乡1个街道，160个行政村、10个居委会。2009年列为省财政直管县（市）。新乐交通区位十分优越，南距省会石家庄30公里，北距首都北京200公里，东距天津港280公里，距石家庄国际机场零距离。境内有京广、神黄、京石客运专线三条铁路，京港澳、新元、石忻（规划中）三条高速公路，107国道和203、204省道三条高等级公路，周边40公里半径范围内有京昆、石黄、石津、青银、保阜和西柏坡等六条高速公路，具备独特的航空、铁路、公路多式联合运输条件。是国家主体功能区规划的重点开发区域。 
										</p></td>
								</tr>
								<tr>
									<td height="49" align="right"><a href="about.jsp"
										class="fontcss">【详细介绍】</a>
									</td>
								</tr>
							</table></td>
						<!--   <td align="center" valign="top" background="New_images/index_06.jpg"  width="340">
                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                            <td width="50" height="180" align="left">
                            </td>
                            <td width="299" align="center" class="vedio">
                         <script type="text/javascript">var swf_width=260;var swf_height=164;var texts='井陉视频';var files='http://www.doutuan.com/Advertisement/Video/Data/201318114838109.flv';document.write('<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0" width="'+ swf_width +'" height="'+ swf_height +'">');document.write('<param name="movie" value="flash/vcastr22.swf"/*tpa=http://www.doutuan.com/flash/vcastr22.swf*/><param name="quality" value="high">');document.write('<param name="menu" value="false"><param name="allowFullScreen" value="true" />');document.write('<param name="FlashVars" value="vcastr_file='+files+'&vcastr_title='+texts+'">');document.write('<embed src="flash/vcastr22.swf"/*tpa=http://www.doutuan.com/flash/vcastr22.swf*/ allowFullScreen="true" FlashVars="vcastr_file='+files+'&vcastr_title='+texts+'" menu="false" quality="high" width="'+ swf_width +'" height="'+ swf_height +'" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" />'); document.write('</object>'); </script>
                              
                           
                        
                            </td>
                        </tr>
                        <tr>
                            <td height="37" colspan="2" align="right" style="padding-right: 20px;">
                                <a href="Newlist.jsp" class="fontcss" >【更多视频】</a></td>
                        </tr>
                    </table>
                </td> -->
					</tr>
				</table>
			</div>
			<!--
			<div class="part_3">
				<table width="100%" border="0" cellspacing="0" cellpadding="0">
					<tr>
						<td width="100%" height="217" valign="top"
							style="background: url(New_images/index_64.png) no-repeat">
							<table width="100%" border="0" cellspacing="0" cellpadding="0">
								<tr>
									<td width="170" rowspan="2" align="center" class="di"><img
										src="New_images/11.jpg" alt="" width="122" height="83" />
									</td>
									<td height="174" align="left" valign="top" class="news">-->
									<!--旅游攻略-->
									<!--
										<table id="ctl00_Index_NewsList1_list" cellspacing="0"
											cellpadding="0" border="0"
											style="width:100%;border-collapse:collapse;">
											<c:forEach items="${list_lygl }" var="s1">
												<tr>
													<td>

														<ul class="">
															<li>
																<table cellpadding="0" cellspacing="0" width="90%"
																	border="0" class="fontcss">
																	<tr>
																		<td align="left"><a
																			href="New_Details?ID=${s1.ID }" title=" ${s1.WZBT }">
																				${s1.WZBT } </a>
																		</td>
																		<td align="right">${s1.TIME}</td>
																	</tr>
																</table></li>
														</ul></td>
												</tr>
											</c:forEach>

										</table> <br /></td>
								</tr>
							</table></td>
						<!-- 
					<td align="center" valign="top" width="340">
						<table width="100%" border="0" cellspacing="0" cellpadding="0">
							<tr>
								<td height="54" align="center" valign="bottom"><a
									href="yyfw.aspx-type=yyfw.htm"> <img
										src="New_images/index_23-27.png" width="255" height="42" /> </a>
								</td>
							</tr>
							<tr>
								<td height="54" align="center" valign="bottom"><a
									href="yyfw.aspx-type=yyfw.htm"> <img
										src="New_images/index_23-25.png" width="255" height="42" /> </a>
								</td>
							</tr>
							<tr>
								<td height="54" align="center" valign="bottom"><a
									href="ckly.aspx.htm"> <img src="New_images/index_23-26.png"
										width="255" height="42" /> </a></td>
							</tr>
							<tr>
								<td height="54" align="center" valign="bottom"><a
									href="news.aspx-type=jqdt&s_sort=56.htm"> <img
										src="New_images/index_66.png" width="255" height="42" /> </a></td>
							</tr>
						</table>
					</td>
					</tr>
				</table>
			</div>
-->
			
			<div class="part_5">
				<table width="100%" border="0" cellspacing="0" cellpadding="0">
					<tr>
						<td height="47" colspan="3"><img
							src="New_images/index_80.png" width="1002" height="47" />
						</td>
					</tr>
					<tr>
						<td width="334" height="100">
							<table width="100%" border="0" cellspacing="0" cellpadding="0">
								<tr>
									<td width="120" height="100" align="center" valign="middle">
										<img src="New_images/index_89.png" width="103" height="81" />
									</td>
									<td height="100" valign="middle" class="fwzn">
										<!--游客须知-->
										<table id="ctl00_Index_NewsList2_list" cellspacing="0"
											cellpadding="0" border="0"
											style="width:100%;border-collapse:collapse;">
											<c:forEach items="${list_ykxz }" var="ykxz">
												<tr>
													<td>

														<ul class="">
															<li>
																<table cellpadding="0" cellspacing="0" width="90%"
																	border="0" class="fontcss">
																	<tr>
																		<td align="left"><a
																			href="New_Details?ID=${ykxz.ID }"
																			title="${ykxz.WZBT }"> ${ykxz.WZBT } </a>
																		</td>

																	</tr>
																</table> </span>
															</li>
														</ul></td>
												</tr>
											</c:forEach>

										</table> <br /></td>
								</tr>
							</table></td>
						<td width="334">
							<table width="100%" border="0" cellspacing="0" cellpadding="0">
								<tr>
									<td width="120" height="100" align="center" valign="middle">
										<img onclick='window.open("../QHmap/webpage/map/map.jsp")' src="New_images/index_86.png" width="103" height="81" />
									</td>
									<td height="100" valign="middle" class="fwzn">
										<!--交通指南-->
										<table id="ctl00_Index_NewsList3_list" cellspacing="0"
											cellpadding="0" border="0"
											style="width:100%;border-collapse:collapse;">
											<c:forEach items="${list_jtzn }" var="s2">
												<tr>
													<td>

														<ul class="">
															<li>
																<table cellpadding="0" cellspacing="0" width="90%"
																	border="0" class="fontcss">
																	<tr>
																		<td align="left"><a
																			href="New_Details?ID=${s2.ID }" title="${s2.WZBT }">${s2.WZBT
																				} </a>
																		</td>

																	</tr>
																</table></li>
														</ul></td>
												</tr>
											</c:forEach>
										</table> <br /></td>
								</tr>
							</table></td>
						<td width="334">
							<table width="100%" border="0" cellspacing="0" cellpadding="0">
								<tr>
									<td width="120" height="100" align="center" valign="middle">
										<img src="New_images/index_83.png" width="103" height="81" />
									</td>
									<td height="100" valign="middle" class="fwzn">
										<!--周边景区-->
										<table id="ctl00_Index_NewsList4_list" cellspacing="0"
											cellpadding="0" border="0"
											style="width:100%;border-collapse:collapse;">
											<c:forEach items="${list_zbjq }" var="jq">
												<tr>
													<td>

														<ul class="">
															<li>
																<table cellpadding="0" cellspacing="0" width="90%"
																	border="0" class="fontcss">
																	<tr>
																		<td align="left"><a
																			href="New_Details?ID=${jq.ID }" title="${jq.WZBT } ">
																				${jq.WZBT } </a>
																		</td>

																	</tr>
																</table> </span>
															</li>
														</ul></td>
												</tr>
											</c:forEach>
										</table> <br /></td>
								</tr>
							</table></td>
					</tr>
				</table>
			</div>


			<!--二级左边导航-->



			<!--二级右边内容-->
			<!--所有页面下方版权-->
			<%@include file="/MasterPage/Bottom.jspf"%>
			<!-- 	 -->
		</form>
	</div>
</body>

</html>
