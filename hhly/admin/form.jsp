<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>

<!--   <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html xmlns="http://www.w3.org/1999/xhtml">
-->
<!doctype html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>无标题文档</title>
<!-- 弹出模态窗口 -->
<script src="http://libs.baidu.com/jquery/1.9.1/jquery.min.js"></script>
<script src="layer/layer.js"></script>
<!-- end -->
<link href="css/style.css" rel="stylesheet" type="text/css" />
<link href="css/select.css" rel="stylesheet" type="text/css" />
<!--  <script type="text/javascript" src="js/jquery.js"></script> -->

<script type="text/javascript" src="js/jquery.idTabs.min.js"></script>
<script type="text/javascript" src="js/select-ui.min.js"></script>


<link rel="stylesheet" href="themes/default/default.css" />
<link rel="stylesheet" href="plugins/code/prettify.css" />
<script charset="utf-8" src="kindeditor.js"></script>
<script charset="utf-8" src="lang/zh_CN.js"></script>
<script charset="utf-8" src="plugins/code/prettify.js"></script>
<script>
	KindEditor.ready(function(K) {
		var editor1 = K.create('textarea[name="content1"]', {
			cssPath : '../admin/plugins/code/prettify.css',
			uploadJson : '../admin/jsp/upload_json.jsp',
			fileManagerJson : '../admin/jsp/file_manager_json.jsp',
			allowFileManager : true,
			afterCreate : function() {
				var self = this;
				K.ctrl(document, 13, function() {
					self.sync();
					document.forms['example'].submit();
				});
				K.ctrl(self.edit.doc, 13, function() {
					self.sync();
					document.forms['example'].submit();rsd
				});
			}
		});
		prettyPrint();
	});
</script>

<script type="text/javascript">
	/*下拉改变事件*/
	function change(a) {
		var i = document.getElementById("wzlx").value;
		if (i == "4") {
			document.getElementById("zb").style.display = "";

		} else {
			document.getElementById("zb").style.display = "none";
		}
	}
	/*对seect赋值选择项*/
	$(function() {
		//默认被选中的Option
		var val = $("#select_Msa").val();
		if (val != null && val != "") {
			$("#wzlx").val(val);
		}
		if(val=="4")
		{document.getElementById("zb").style.display = "";}
	});
</script>
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
</script>
</head>

<body>

	<form action="form?type=add" method="post">
		<div class="place">
			<span>位置：</span>
			<ul class="placeul">
				<li><a href="#">首页</a></li>
				<li><a href="#">发布信息</a></li>
			</ul>
		</div>

		<div class="formbody">


			<div id="usual1" class="usual">


				<div id="tab1" class="tabson">

					<div class="formtext">
						Hi，<b>admin</b>，欢迎您使用信息发布功能！
					</div>

					<ul class="forminfo">
						<li><label>文章标题<b>*</b> </label><input id="wzbt" name="wzbt"
							type="text" class="dfinput" value="${_wzbt }"
							style="width:518px;" /> <font
							style="font-weight:bold;font-style:italic;" color=red>*填写文章标题</font>
						</li>
						<li><label>文章类型<b>*</b> </label>


							<div class="vocation">
								<select id="wzlx" name="wzlx" class="select1"
									onChange="change(this.value)">
									<option value="0">新乐市文化</option>
									<option value="1">旅游攻略</option>
									<option value="2">交通指南</option>
									<option value="3">游客须知</option>
									<option value="4">周边景区</option>
									<option value="5">新乐市简介</option>
									<input type="hidden" id="select_Msa" value="${quantity}" />
								</select>

							</div>
						</li>



						<div id="zb" name="zb" style="display:none;">
							<li><label>坐标位置 X:<b>*</b> </label> <input id="_smx"
								name="_smx" type="text" class="scinput" value="${_x }"
								style="width:518px;" readonly="readonly" /> <a
								style="color:#FF0000;font-weight:bold;" href="javascript:;"
								id="parentIframe"> &nbsp;&nbsp;获取景点位置 </a> <script>
									$('#parentIframe').on('click', function() {
										layer.open({
											type : 2,
											title : '获取景点位置',
											maxmin : true,
											shadeClose : true, //点击遮罩关闭层
											area : [ '800px', '520px' ],
											content : '../GetXY.jsp'
										});
									});
								</script> <br></li>
							<li><label>坐标位置 Y:<b>*</b> </label> <input id="_smy"
								name="_smy" type="text" class="scinput" value="${_y }"
								style="width:518px;" readonly="readonly" />
							</li>
							<li><label>景点地址:<b>*</b> </label> <input id=_ars name="_ars"
								type="text" class="scinput" value="${_address }"
								style="width:518px;" />
							</li>

						</div>


						<li><label>文章内容<b>*</b> </label> <textarea id="content1"
								class="textinput" name="content1" cols="100" rows="8"
								style="width:700px;height:350px;visibility:hidden;">${_jianjie }</textarea>
						</li>
						<li><label>&nbsp;</label><input name="" type="submit"
							class="btn" value="马上发布" "/> &nbsp;&nbsp;<font
							style="font-weight:bold;font-style:italic;" color=red>
								${Ms }</font><input type="hidden" id="getID" name="getID" value=${ID }>
						</li>

					</ul>

				</div>
			</div>

			<script type="text/javascript">
				$("#usual1 ul").idTabs();
			</script>

			<script type="text/javascript">
				$('.tablelist tbody tr:odd').addClass('odd');
			</script>
		</div>
		<!-- 弹出层 -->

		<!-- end -->
	</form>
</body>

</html>
