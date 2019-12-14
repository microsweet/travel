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
 


  <script type="text/javascript" src="iserver/libs/SuperMap.Include.js"></script>
  <script type="text/javascript" src="iserver/libs/SuperMap-7.1-11831.js"></script>
  <script type="text/javascript" src="jquery-easyui-1.3.6/jquery-1.9.1.js"charset="UTF-8"></script>
    <script type="text/javascript" src="jquery-easyui-1.3.6/jquery.easyui.min.js"charset="UTF-8"></script>
	<script type="text/javascript" src="js/config/config.js"></script>
	<script type="text/javascript" src="js/Toolkit.js"></script>
    <script type="text/javascript" src="js/ajaxhelper.js"></script>
<script type="text/javascript" src="js/browseradepter.js"></script>

  <script type="text/javascript" src="js/loadmap.js"charset="utf-8"></script>
  <!--  <script type="text/javascript" src="js/tuceng.js"charset="utf-8"></script>-->
  <script type="text/javascript" src="js/mapol.js"charset="utf-8"></script>
  <script type="text/javascript" src="js/function.js"charset="utf-8"></script>


  <link rel="stylesheet" href="jquery-easyui-1.3.6/themes/default/easyui.css" type="text/css"></link>
  <link rel="stylesheet" href="jquery-easyui-1.3.6/themes/icon.css" type="text/css"></link>
  <link rel="stylesheet" href="css/land.css" type="text/css"></link>
  <script type="text/javascript" src="jquery-easyui-1.3.6/locale/easyui-lang-zh_CN.js"charset="UTF-8"></script>
  <link rel="stylesheet" href="css/frame.css" type="text/css"></link>


</head>
  
  
<body id="jingxingtravellayout"onload="init()">
      <div data-options="region:'north',title:'',split:false" style="height:100px;background-image:url('images/land/banner.png');overflow:hidden">
       <a id="logo" style="float:left;background-image: url('images/land/xx.png');height:84px;width:495px;"></a>
      </div>

      <div data-options="region:'west',title:'导航',split:true"style="width:310px;overflow:hidden;fit:true;">
                   <div id="homepage">
                       <img onclick="homeBtn()"src="jquery-easyui-1.3.6/themes/icons/home.png" />
                   </div>
                   <div id="fanhui">
                    <img  onclick="fanhuiBtn()"src="jquery-easyui-1.3.6/themes/icons/back.png" />
                   </div>
                  <div id="naviContent" style="fit:true;">
							<ul id="cityBoxCon">					   
							    <li class="viewhref"><a href="javascript:void(0)" onclick="addViewMarker2('景点','1')"><img 
							         src="images/mapview/dhimg/jingdian.png"border="0"><br>重点<br>景区介绍 </a></li>								
				                <li class="viewhref"><a href="javascript:void(0)" onclick="addViewMarker('旅游住宿',1)"><img
								     src="images/mapview/dhimg/binguan1.png"border="0"><br>旅游住宿</a></li>
								<li class="viewhref"><a href="javascript:void(0)" onclick="addViewMarker('餐饮娱乐',1)"><img
										src="images/mapview/dhimg/canyin.png"border="0"><br>餐饮娱乐 </a></li>
								<li class="viewhref"><a href="javascript:void(0)" onclick="addViewMarker('金融保险',1)"><img
										src="images/mapview/dhimg/yinang.png"border="0"><br>金融保险</a></li>
								<li class="viewhref"><a href="javascript:void(0)" onclick="addViewMarker('交通运输',1)"><img
										src="images/mapview/dhimg/yiliao.png"border="0"><br>交通运输</a></li>
								<li class="viewhref"><a href="javascript:void(0)" onclick="addViewMarker('公共设施',1)"><img
										src="images/mapview/dhimg/xiuxianyule.png"border="0"><br>公共设施 </a></li>
								<li class="viewhref"><a href="javascript:void(0)" onclick="addViewMarker('商业服务业',1)"><img
										src="images/mapview/dhimg/jiayouzhan.png"border="0"><br>商业服务业</a></li>
								<li class="viewhref"><a href="javascript:void(0)" onclick="addViewMarker('邮政电信',1)"><img
										src="images/mapview/dhimg/tingchecang.png"border="0"><br>邮政电信</a></li>
								<li class="viewhref"><a href="javascript:void(0)" onclick="addViewMarker('政府及民间组织',1)"><img
										src="images/mapview/dhimg/guwan.png"border="0"><br>政府及民间组织</a></li>
								<li class="viewhref"><a href="javascript:void(0)" onclick="addViewMarker('生活服务',1)"><img
										src="images/mapview/dhimg/tongxin.png"border="0"><br>生活服务 </a></li>
																		
								
                           </ul>
                   </div>
                  
      </div>

      <div data-options="region:'center',split:true,title:'地图'"> 
              <div class="easyui-layout" style="width:100%;height:100%;">
                <div  id="map"style="width:100%;height:100%;fit:true">
                
                     <div id="mapDiv"style="fit:true;"> </div>
					<div id="mapImg"style="cursor:pointer" onclick="toImg()"></div>
					<div id="mapDlg"style="cursor:pointer" onclick="toDlg()"></div>
                </div>
             </div>
       
           <div id="toolbarMenu">
            <img id="Zoomin" style="cursor:pointer;vertical-align:middle" onclick="zoomin()" src="images/mapview/toobar/zoomin.gif"/>
            <img id="Zoomout" style="cursor:pointer;vertical-align:middle" onclick="zoomout()" src="images/mapview/toobar/zoomout.gif" />
            <img id="Fullscreen" style="cursor:pointer;vertical-align:middle" onclick="fullScreen()" src="images/mapview/toobar/fullscreen.gif" />
            <img id="Move" style="cursor:pointer;vertical-align:middle"onclick="move()" src="images/mapview/toobar/move.gif" />   
            <img id="Measuredistance" style="cursor:pointer;vertical-align:middle"onclick="measuredistance()" src="images/mapview/toobar/measuredistance.gif" />  
            <img id="Measurearea" style="cursor:pointer;vertical-align:middle"onclick="measurearea()" src="images/mapview/toobar/measurearea.gif" /> 
            <img id="ClearFeatures" style="cursor:pointer;vertical-align:middle"onclick="clearfeatures()" src="images/mapview/toobar/clear.gif" /> 
            </div>
            <input id="SearchBox" onkeydown="getKey(event)" type="text"style="position: absolute;top:4px;right:100px;">
            <img id="SearchButton" onmouseover="OnSerchOver(this)" onmouseout="OnSerchOut(this)" onclick="OnSearchButton()" src="images/mapview/toobar/2.png"style="position: absolute;cursor:pointer;top:4px;right:20px;" />  
 
          </div>			
        
</body>
</html>

