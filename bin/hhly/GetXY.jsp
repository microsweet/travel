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
<meta http-equiv="content-type" content="text/html;">
<title>景点地图查询</title>
<!-- 弹出模态窗口 -->
<script src="http://libs.baidu.com/jquery/1.9.1/jquery.min.js"></script>
<script src="layer/layer.js"></script>
<!-- end -->


<script type="text/javascript" src="iserver/libs/SuperMap.Include.js"></script>
<script type="text/javascript" src="iserver/libs/SuperMap-7.1-11831.js"></script>
<script type="text/javascript" src="jquery-easyui-1.3.6/jquery-1.9.1.js"
	charset="UTF-8"></script>
<script type="text/javascript"
	src="jquery-easyui-1.3.6/jquery.easyui.min.js" charset="UTF-8"></script>
<script type="text/javascript" src="js/ajaxhelper.js"></script>
<script type="text/javascript" src="js/browseradepter.js"></script>

<script type="text/javascript" src="js/loadmap.js" charset="utf-8"></script>
<!--  <script type="text/javascript" src="js/tuceng.js"charset="utf-8"></script>-->
<script type="text/javascript" src="js/mapol.js" charset="utf-8"></script>
<script type="text/javascript" src="js/function.js" charset="utf-8"></script>


<link rel="stylesheet"
	href="jquery-easyui-1.3.6/themes/default/easyui.css" type="text/css"></link>
<link rel="stylesheet" href="jquery-easyui-1.3.6/themes/icon.css"
	type="text/css"></link>
<link rel="stylesheet" href="css/land.css" type="text/css"></link>
<script type="text/javascript"
	src="jquery-easyui-1.3.6/locale/easyui-lang-zh_CN.js" charset="UTF-8"></script>
<link rel="stylesheet" href="css/frame.css" type="text/css"></link>



</head>


<body id="jingxingtravellayout" onload="init()">
	<div data-options="region:'north',title:'',split:false"
		style="height:50px;overflow:hidden">
		<div style="padding-top:10px;padding-left:5px;">
		<a style="color:#FF0000;font-weight:bold;" >坐标位置：</a>
		<a>x：</a><input id="_smx" name="_smx" />
		<a>y：</a><input id="_smy" name="_smy" />
		<button id="transmit">确定</button>
		</div>
		<script>
			//让层自适应iframe
			$('#add')
					.on(
							'click',
							function() {
								$('body')
										.append(
												'插入很多酱油。插入很多酱油。插入很多酱油。插入很多酱油。插入很多酱油。插入很多酱油。插入很多酱油。');
								parent.layer.iframeAuto(index);
							});
			//在父层弹出一个层
			$('#new').on('click', function() {
				parent.layer.msg('Hi, man', {
					shade : 0.3
				})
			});
			//给父页面传值
			$('#transmit').on('click', function() {
			var x=document.getElementById("_smx").value;
			var y=document.getElementById("_smy").value;
				parent.$('#parentIframe').text('修改景点位置');
				
				parent.$('#_smx').val(x);
				parent.$('#_smy').val(y);
				parent.layer.close(index);
			});
			//关闭iframe
			$('#closeIframe').click(function() {
				var val = $('#name').val();
				if (val === '') {
					parent.layer.msg('请填写标记');
					return;
				}
				parent.layer.msg('您将标记 [ ' + val + ' ] 成功传送给了父窗口');
				parent.layer.close(index);
			});
		</script>
	</div>



	<div data-options="region:'center',split:true,title:'地图'">
		<div class="easyui-layout" style="width:100%;height:100%;">
			<div id="map" style="width:100%;height:100%;fit:true">

				<div id="mapDiv" style="fit:true;"></div>
				<div id="mapImg" style="cursor:pointer" onclick="toImg()"></div>
				<div id="mapDlg" style="cursor:pointer" onclick="toDlg()"></div>
			</div>
		</div>

		<div id="toolbarMenu">
			<img id="Zoomin" style="cursor:pointer;vertical-align:middle"
				onclick="zoomin()" src="images/mapview/toobar/zoomin.gif" /> <img
				id="Zoomout" style="cursor:pointer;vertical-align:middle"
				onclick="zoomout()" src="images/mapview/toobar/zoomout.gif" /> <img
				id="Fullscreen" style="cursor:pointer;vertical-align:middle"
				onclick="fullScreen()" src="images/mapview/toobar/fullscreen.gif" />
			<img id="Move" style="cursor:pointer;vertical-align:middle"
				onclick="move()" src="images/mapview/toobar/move.gif" />
			<img id="ClearFeatures" style="cursor:pointer;vertical-align:middle"
				onclick="clearfeatures()" src="images/mapview/toobar/clear.gif" />
		
				<img id="ClearFeatures" style="cursor:pointer;vertical-align:middle"
				onclick="setMark()" src="images/mapview/toobar/location2.png" />
					<a style="font-size:6;">景点位置</a>
		</div>
		<input id="SearchBox" onkeydown="getKey(event)" type="text"
			style="position: absolute;top:4px;right:100px;"> <img
			id="SearchButton" onmouseover="OnSerchOver(this)"
			onmouseout="OnSerchOut(this)" onclick="OnSearchButton()"
			src="images/mapview/toobar/2.png"
			style="position: absolute;cursor:pointer;top:4px;right:20px;" />

	</div>

</body>
</html>

