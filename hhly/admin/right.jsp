<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>无标题文档</title>
<link href="css/style.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="js/jquery.js"></script>
<link href="css/style.css" rel="stylesheet" type="text/css" />
<link href="css/select.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="js/jquery.js"></script>
<script type="text/javascript" src="js/jquery.idTabs.min.js"></script>
<script type="text/javascript" src="js/select-ui.min.js"></script>
<script type="text/javascript">
	$(document).ready(function(e) {
		$(".select1").uedSelect({
			width : 345
		});
		$(".select2").uedSelect({
			width : 167
		});
		$(".select3").uedSelect({
			width : 100
		});
	});

	$(document).ready(function() {
		$(".click").click(function() {
			$(".tip").fadeIn(200);
		});

		$(".tiptop a").click(function() {
			$(".tip").fadeOut(200);
		});

		$(".sure").click(function() {
			$(".tip").fadeOut(100);
		});

		$(".cancel").click(function() {
			$(".tip").fadeOut(100);
		});

	});
		/*对seect赋值选择项*/
	$(function() {
		//默认被选中的Option
		var val = $("#select_wzlx").val();
		if (val != null && val != "") {
			$("#wzlx").val(val);
		}
	});
</script>
<script type="text/javascript">
	function toPage(curPage) {
		window.location = "${pageContext.request.contextPath}/admin/right?curPage="
				+ curPage;
	}
</script>

</head>


<body>
	<form action="right?type=query" method="post">
		<div class="place">
			<span>位置：</span>
			<ul class="placeul">
				<li><a href="#">首页</a></li>
				<li><a href="#">数据表</a></li>
				<li><a href="#">文章管理</a></li>
			</ul>
		</div>

		<div class="rightinfo">
			<div id="tab2" class="tabson">
				<ul class="seachform" style="margin-left:20px">
					<li><label>文章标题</label><input name="wzbt" id="wzbt"
						type="text" class="scinput" value="${wzbtresult}" /></li>
					<li><label>文章类型</label>
						<div class="vocation">
							<select class="select3" id="wzlx" name="wzlx">
								<option value="">全部</option>
								<option value="0">新乐市文化</option>
								<option value="1">旅游攻略</option>
								<option value="2">交通指南</option>
								<option value="3">游客须知</option>
								<option value="4">周边景区</option>
								<option value="5">新乐市简介</option>
								<input type="hidden" id="select_wzlx" value="${wzlxresult}" />
							</select>

						</div>
					</li>

					<li><label>&nbsp;</label><a href="right?type=query"><input
							name="" type="submit" class="scbtn" value="查询" /> </a></li>
					<ul class="toolbar">
						<li class="click"><a href="form.jsp"><span><img
									src="images/t01.png" /> </span>添加</a>
						</li>
					</ul>
				</ul>


				<table class="tablelist">
					<thead>
						<tr>
							<!--  <th><input name="" type="checkbox" value="" checked="checked" />
						</th> -->
							<th>标题</th>
							<th>发布时间</th>
							<th>文章类型</th>
							<th>操作</th>
						</tr>
					</thead>
					<tbody>
						<c:forEach items="${companys}" var="company">
							<tr>
								<td>${company.WZBT}</td>
								<td>${company.TIME}</td>
								<td><c:choose>

										<c:when test="${company.WZLX==0}">新乐市文化 </c:when>
										<c:when test="${company.WZLX==1}"> 旅游攻略 </c:when>
										<c:when test="${company.WZLX==2}">交通指南</c:when>
										<c:when test="${company.WZLX==3}">  旅游须知 </c:when>
										<c:when test="${company.WZLX==4}"> 周边景区 </c:when>
										<c:when test="${company.WZLX==5}">新乐市简介  </c:when>
										<c:otherwise>其他 </c:otherwise>

									</c:choose></td>
								<td><a href="form?ID=${company.ID}&type=see"
									class="tablelink">查看</a> <a
									href="form?ID=${company.ID}&type=edit" class="tablelink">编辑</a>
									<a href="right?ID=${company.ID}" class="tablelink"> 删除</a></td>
							</tr>
						</c:forEach>
					</tbody>
				</table>
			</div>
			<div class="pagin">
				<div class="message">
					共<i class="blue">${pageBean.recordCnt}</i>条记录，当前显示第&nbsp;<i
						class="blue">${pageBean.curPage}&nbsp;</i>页
				</div>
				<ul class="paginList">
					<li class="paginItem"><a
						href="${pageContext.request.contextPath}/admin/right?type=fist">首页</a>
					</li>
					<li class="paginItem "><a
						href="${pageContext.request.contextPath}/admin/right?curPage=${pageBean.prePage}">上页</a>
					</li>
					<li class="paginItem"><a
						href="javaScript:toPage('${pageBean.nextPage}')">下页</a></li>
					<li class="paginItem"><a
						href="${pageContext.request.contextPath}/admin/right?curPage=${pageBean.pageCnt}">尾页</a>
					</li>

				</ul>
			</div>
			<div class="tip">
				<div class="tiptop">
					<span>提示信息</span><a></a>
				</div>

				<div class="tipinfo">
					<span><img src="images/ticon.png" /> </span>
					<div class="tipright">
						<p>是否确认对信息的修改 ？</p>
						<cite>如果是请点击确定按钮 ，否则请点取消。</cite>
					</div>
				</div>

				<div class="tipbtn">
					<input name="" type="button" class="sure" value="确定" />&nbsp; <input
						name="" type="button" class="cancel" value="取消" />
				</div>

			</div>




		</div>

		<script type="text/javascript">
			$('.tablelist tbody tr:odd').addClass('odd');
		</script>
	</form>
</body>

</html>