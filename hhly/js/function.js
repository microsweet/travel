
var jingxingtravellayout;
$(function(){
jingxingtravellayout=$('#jingxingtravellayout').layout();
 }); 

function toImg(){
	    map.removeLayer(layervec,true);
		map.removeLayer(layervec_a,true);
		map.removeLayer(layerShi,true);
		map.removeLayer(layerShiZhu,true);
		 
		
		
		map.addLayers([layerimg,layerimg_a,layerYing,layerYingZhu]);
		
		
		map.setLayerIndex(markers,7);
		map.setBaseLayer(layerimg);
		/*
		if ( map.layers.length >8&&themeLayer!=null) {
             map.setLayerIndex(themeLayer,7);
				
         }  
	
*/
}
//切换到电子地图
function toDlg(){
	    map.removeLayer(layerimg,true);
		map.removeLayer(layerimg_a,true);
		map.removeLayer(layerYing,true);
	    map.removeLayer(layerYingZhu,true);
	    
	
		map.addLayers([layervec,layervec_a,layerShi,layerShiZhu]);
	
		map.setLayerIndex(markers,7);

		 

		map.setBaseLayer(layervec);
/*

		if ( map.layers.length >8&&themeLayer!=null) {
             map.setLayerIndex(themeLayer,7);
				
         } 
        */

}
function homeBtn(){
	dianjipage=1;
	map.removeAllPopup();
	lineLayer.removeAllFeatures();
	polygonLayer.removeAllFeatures();
	vectorLayer.removeAllFeatures();
	markers.clearMarkers();
	markers1.clearMarkers();
	if(vectorRoundLayer){
		vectorRoundLayer.removeAllFeatures();
	}
	
	
	$("#cityBoxCon").show();
	$("#queryListTb").hide();
	$("#resultPage").hide();
	$("#queryListTbPOI").hide();
	$("#resultPagePOI").hide();
	map.zoomTo(10);
}

function fanhuiBtn(){

	map.removeAllPopup();
	vectorLayer.removeAllFeatures();
	markers1.clearMarkers();
	markers.clearMarkers();
    map.zoomTo(12);
if($("#queryListTbPOI").is(':visible')){
	fangfa(sql2,1);
	$("#queryListTbPOI").hide();
	$("#resultPagePOI").hide();
	
	$("#queryListTb").show();
	$("#resultPage").show();
}
else{
	map.removeAllPopup();
	markers.clearMarkers();
	$("#cityBoxCon").show();
	$("#queryListTb").hide();
	$("#resultPage").hide();
	
	$("#queryListTbPOI").hide();
	$("#resultPagePOI").hide();
}

}

function zoomin(){
	document.getElementById("map").style.cursor="url('images/mapview/cursors/ZoomIn.cur'),auto";
	zoombox= new SuperMap.Control.ZoomBox({keyMask:null,"autoActivate":true},{cursorCSS:"url('images/mapview/cursors/ZoomIn.cur'),auto"});
	//是否将该控件设置为拉框缩小，默认为false，拉框放大
	zoombox.out=false;
	map.addControl(zoombox);//添加控件
	dragPan.deactivate();
}     
	

function zoomout(){
	document.getElementById("map").style.cursor="url('images/mapview/cursors/ZoomOut.cur'),auto";
	zoombox= new SuperMap.Control.ZoomBox({keyMask:null,"autoActivate":true},{cursorCSS:"url('images/mapview/cursors/ZoomOut.cur'),auto"});
	//是否将该控件设置为拉框缩小，默认为false，拉框放大
	zoombox.out=true;
	map.addControl(zoombox);//添加控件
	dragPan.deactivate();
}

function fullScreen(){
	map.setCenter(new SuperMap.LonLat(114.20,38.03),10);
    document.getElementById("map").style.cursor="url('images/mapview/cursors/PanDown.cur'),auto";
	dragPan.activate();
}
function move(){
	document.getElementById("map").style.cursor="url('images/mapview/cursors/Pan.cur'),auto";
	dragPan.activate();
}
function OnSerchOver(obj)
{
	obj.src="images/mapview/toobar/1.png";
}
//鼠标离开时候还原搜索图片
function OnSerchOut(obj)
{
	obj.src="images/mapview/toobar/2.png";
}


function getPointInfo(drawGeometryArgs){
	 drawSPoint.deactivate();
   var  smx = drawGeometryArgs.feature.geometry.components[0].x;
   var smy=drawGeometryArgs.feature.geometry.components[0].y;
   document.getElementById('_smx').value=smx;  
   document.getElementById('_smy').value=smy;
   document.getElementById('_smx').readOnly = true ;
   document.getElementById('_smy').readOnly = true ;
 
  
   
   
	
}
/*选择点*/
function setMark() {
	drawSPoint.deactivate()
	drawSPoint.activate();
}

//距离测量
function measuredistance(){
	clearfeatures();
	drawLine.activate();
}
function measurearea(){
	clearfeatures();
	drawPolygon.activate();
}
//绘完触发事件
function drawCompletedline(drawGeometryArgs) {
	//停止画面控制
	drawLine.deactivate();
	//获得图层几何对象
	var geometry = drawGeometryArgs.feature.geometry,
	measureParam = new SuperMap.REST.MeasureParameters(geometry), /* MeasureParameters：量算参数类。 客户端要量算的地物间的距离或某个区域的面积*/
	myMeasuerService = new SuperMap.REST.MeasureService(urlrest); //量算服务类，该类负责将量算参数传递到服务端，并获取服务端返回的量算结果

	myMeasuerService.events.on({ "processCompleted":measureCompletedline});
	//对MeasureService类型进行判断和赋值，当判断出是LineString时设置MeasureMode.DISTANCE，否则是MeasureMode.AREA

	myMeasuerService.measureMode = SuperMap.REST.MeasureMode.DISTANCE;
    
	myMeasuerService.processAsync(measureParam); //processAsync负责将客户端的量算参数传递到服务端。
	}

function drawCompletedarea(drawGeometryArgs) {
	//停止画面控制

	drawPolygon.deactivate();
	//获得图层几何对象
	var geometry = drawGeometryArgs.feature.geometry,
	measureParam = new SuperMap.REST.MeasureParameters(geometry), /* MeasureParameters：量算参数类。 客户端要量算的地物间的距离或某个区域的面积*/
	myMeasuerService = new SuperMap.REST.MeasureService(urlrest); //量算服务类，该类负责将量算参数传递到服务端，并获取服务端返回的量算结果
	myMeasuerService.events.on({ "processCompleted": measureCompletedarea });

	//对MeasureService类型进行判断和赋值，当判断出是LineString时设置MeasureMode.DISTANCE，否则是MeasureMode.AREA

	myMeasuerService.measureMode = SuperMap.REST.MeasureMode.AREA;

	myMeasuerService.processAsync(measureParam); //processAsync负责将客户端的量算参数传递到服务端。
	}


	//测距结束调用事件
	function measureCompletedline(measureEventArgs) {
	var distance = measureEventArgs.result.distance;
	var unit = measureEventArgs.result.unit;
	alert("量算结果:"+distance + "米");
	}
	function measureCompletedarea(measureEventArgs) {
		var area = measureEventArgs.result.area,
		unit = measureEventArgs.result.unit;
		alert("量算结果:"+ area + "平方米");
		}
	//移除图层要素
	function deactiveAll(){
		drawLine.deactivate();
		drawPolygon.deactivate();

		}

   function clearfeatures(){
	deactiveAll();
	lineLayer.removeAllFeatures();
	polygonLayer.removeAllFeatures();
	graphLayer.removeAllFeatures();
	}
   
   
   //弹框显示信息
   var infowin,popup;
   function closeInfoWin(){
   	if(infowin){
   		try{
   			infowin.hide();
   			infowin.destroy();
   		}
   			catch(e){};
   		}
   }

   //缩放至函数
   function flyto(X,Y,jibie){
		map.setCenter(new SuperMap.LonLat(X,Y),jibie);	
	}
   
   
   //
   
   function openInfoWindowziliantravel(X,Y)
   {	closeInfoWin();
   	var markNum=smidTravelCurrArr.length;	
   	
   	if(markNum>0)	{
   		
   		for(var i=0; i<markNum; i++)
   		{	// 从旅游住宿餐饮娱乐兴趣点中获得当前显示的信息
       	   var name=nameTravelCurrArr[i];
       		var position=positionTravelCurrArr[i];
       		var picture=pictureTravelCurrArr[i];
       		var smxx=smxTravelCurrArr[i];
   			var smyy=smyTravelCurrArr[i];
   			var mainclass=mainclassTravelCurrArr[i];
   			var name=nameTravelCurrArr[i];
   			if(X==smxx&&Y==smyy)
   				{
   					closeInfoWin();
   					
   				// 根据景点信息编写弹出信息框中的DIV代码
   					var content = "<div id='markInfoDlg'></br>"+
   				 "<div>"+
    				"<h1  class='nametou'>"+name+"</h1>"+	
    				
      			"</div>"+
       			
   				/* "<div id='markInfoImg'>"+
        			"<img src='images/CZPOI/"+picture+"-"+1+".jpg' width='120' height='80' />"+
        			"</div>"+*/
        			"<div id='markInfo'>"+
        			
           				"<a class='markText'><b>类别：</b></a>"+
           				"<a class='markTextSub'>"+mainclass+"</a>"+"<br />"+						
           			"<a class='markText'><b>位置：</b></a>"+	
           				  "<a class='markTextSub'>"+position+"</a>"+"<br />"+	
           				  "</div>"+
   			"<div id='markHyperLink'>"+
   			"<a class='hyperlinksText' onclick=\"HotelandCateringInquiries('旅游住宿',9999,"+smxx+","+smyy+","+"'"+picture+"'"+","+"'"+name+"'"+","+"'"+mainclass+"'"+","+"'"+position+"'"
   			+")"+"\">&nbsp&nbsp宾馆酒店&nbsp</a>"+
   			"<a class='hyperlinksText' onclick=\"HotelandCateringInquiries('金融保险',9999,"+smxx+","+smyy+","+"'"+picture+"'"+","+"'"+name+"'"+","+"'"+mainclass+"'"+","+"'"+position+"'"
   			+")"+"\">&nbsp&nbsp银行&nbsp&nbsp</a>"+
   			"<a class='hyperlinksText' onclick=\"HotelandCateringInquiries('餐饮娱乐',9999,"+smxx+","+smyy+","+"'"+picture+"'"+","+"'"+name+"'"+","+"'"+mainclass+"'"+","+"'"+position+"'"
   			+")"+"\">&nbsp餐饮&nbsp&nbsp</a>"+"<br/>"+

   			"<a class='hyperlinksTextBlow'\><b>&nbsp&nbsp&nbsp搜索半径：</b>"+
   			"<input type='text' id='distance' value='500'/>"+
   			"<a class='hyperlinksTextBlow'\> 米"+
   		        "</div>"+
   			"</div>";
   							// 弹出消息框
   					popup = new SuperMap.Popup.FramedCloud("popwin",new SuperMap.LonLat(smxx,smyy),null,content,null,true,null,true);
   				   infowin=popup;popup.autoSize=true;
   				   map.addPopup(popup);
   				  
   				}
   			
   		}   
   }}
   
   function openInfoWintravel(marker) 
   {	closeInfoWin();
   	var marker = this;
   	var lonlat = marker.getLonLat();
   	
   	// 根据景点信息编写弹出信息框中的DIV代码
   	var content = "<div id='markInfoDlgmak'></br>"+
    "<div>"+
	"<h1  class='nametou'>"+marker.name+"</h1>"+	
	
	"</div>"+
  	"<div id='markInfoImgmak'>"+
   			"<img src='../images/"+marker.picture+".JPG' width='120' height='80' />"+
   			"</div>"+
   			"<div id='markInfomak'>"+

   				"<a class='markText'><b>类别：</b></a>"+
   				"<a class='markTextSub'>"+marker.mainclass+"</a>"+"<br />"+						
   			"<a class='markText'><b>位置：</b></a>"+	
   				  "<a class='markTextSub'>"+marker.position+"</a>"+"<br />"+	
   				  "</div>"+
   			"<div id='markHyperLinkmak'>"+	
   			"<a class='hyperlinksText' onclick=\"HotelandCateringInquiries('宾馆/酒店/住宿',9999,"+marker.x+","+marker.y+","+"'"+marker.picture+"'"+","+"'"+marker.name+"'"+","+"'"+marker.mainclass+"'"+","+"'"+marker.position+"'"
   			+")"+"\">&nbsp&nbsp宾馆酒店&nbsp</a>"+
   			"<a class='hyperlinksText' onclick=\"HotelandCateringInquiries('金融保险',9999,"+marker.x+","+marker.y+","+"'"+marker.picture+"'"+","+"'"+marker.name+"'"+","+"'"+marker.mainclass+"'"+","+"'"+marker.position+"'"
   			+")"+"\">&nbsp&nbsp银行&nbsp&nbsp</a>"+
   			"<a class='hyperlinksText' onclick=\"HotelandCateringInquiries('餐饮',9999,"+marker.x+","+marker.y+","+"'"+marker.picture+"'"+","+"'"+marker.name+"'"+","+"'"+marker.mainclass+"'"+","+"'"+marker.position+"'"
   			+")"+"\">&nbsp餐饮&nbsp&nbsp</a>"+"<br/>"+

   			"<a class='hyperlinksTextBlow'\><b>&nbsp&nbsp&nbsp搜索半径：</b>"+
   			"<input type='text' id='distance' value='500'/>"+
   			"<a class='hyperlinksTextBlow'\> 米"+
   			"</div>"+
   			"</div>";
   	// 弹出消息框
   	popup = new SuperMap.Popup.FramedCloud("popwin",new SuperMap.LonLat(lonlat.lon,lonlat.lat),null,content,null,true);
   	popup.autoSize=true;
   	infowin = popup;
      map.addPopup(popup);
   } 
   
   function changeMarkermap(marker)
   {  
      var marker=this;
   	var index=0;
   	var querytr=$("#queryListTb tr");
   	for(i=0;i<markers.markers.length;i++)
   	{	
   		markers.markers[i].icon.imageDiv.lastChild.src="images/mapview/marker/"+(i+1)+".png";
   	querytr[i].children[1].children[0].children[0].children[0].src="images/mapview/marker/"+(i+1)+".png";
   	 }
   	marker.icon.imageDiv.lastChild.src="images/mapview/marker/bp"+marker.order+".png";
   	querytr[marker.order-1].children[1].children[0].children[0].children[0].src="images/mapview/marker/p"+marker.order+".jpg";
   	
   }

   function changeMarkermapPOI(marker)
   {  
      var marker=this;
   	var index=0;
   	var querytr=$("#queryListTbPOI tr");
   	for(i=0;i<markers.markers.length;i++)
   	{	
   		markers.markers[i].icon.imageDiv.lastChild.src="images/mapview/marker/"+(i+1)+".png";
   	querytr[i].children[1].children[0].children[0].children[0].src="images/mapview/marker/"+(i+1)+".png";
   	 }
   	marker.icon.imageDiv.lastChild.src="images/mapview/marker/bp"+marker.order+".png";
   	querytr[marker.order-1].children[1].children[0].children[0].children[0].src="images/mapview/marker/p"+marker.order+".jpg";
   	
   }

 //-------------------------二级兴趣点点击弹窗-------------------------------------------------------------------------------------------
   function openInfoWindowzuocePOI(X,Y)
   {	closeInfoWin();
   	var markNum=smidTravelCurrArr.length;	
   	
   	if(markNum>0)	{
   		
   		for(var i=0; i<markNum; i++)
   		{	// 从旅游住宿餐饮娱乐兴趣点中获得当前显示的信息
       	   var name=nameTravelCurrArr[i];
       		var position=positionTravelCurrArr[i];
       		var picture=pictureTravelCurrArr[i];
       		var smxx=smxTravelCurrArr[i];
   			var smyy=smyTravelCurrArr[i];
   			var mainclass=mainclassTravelCurrArr[i];
   			var name=nameTravelCurrArr[i];
   			if(X==smxx&&Y==smyy)
   				{
   					closeInfoWin();
   					
   				// 根据景点信息编写弹出信息框中的DIV代码
   					var content = "<div id='markInfoDlgpoi'></br>"+
   				 "<div>"+
 				"<h1  class='nametou'>"+name+"</h1>"+	
 				
   			"</div>"+
   				 "<div id='markInfoImgPOI'>"+
        			"<img src='../images/"+picture+".JPG' width='120' height='80' />"+
        			"</div>"+
        			"<div id='markInfoPOI'>"+		

        		    "<a class='markTextPOI'><b>大类：</b></a>"+
        		   	"<a class='markTextSubPOI'>"+mainclass+"</a>"+"<br />"+						
        		   "<a class='markTextPOI'><b>位置：</b></a>"+	
        		      "<a class='markTextSubPOI'>"+position+"</a>"+"<br />"+
           				  "</div>"+
   			
   			"</div>";
   							// 弹出消息框
   					popup = new SuperMap.Popup.FramedCloud("popwin",new SuperMap.LonLat(smxx,smyy),null,content,null,true,null,true);
   				   infowin=popup;popup.autoSize=true;
   				   map.addPopup(popup);
   				  
   				}
   			
   		}   
   }}
   
   
   function openInfoWindowPOI(marker) 
   {
   	closeInfoWin();
   	var marker = this;
   	var lonlat = marker.getLonLat();
   	
   	// 根据景点信息编写弹出信息框中的DIV代码
   	var content = "<div id='markInfoDlgPOImak'></br>"+
    "<div>"+
	"<h1  class='nametou'>"+marker.name+"</h1>"+	
	
	"</div>"+
   	"<div id='markInfoImgPOImak'>"
   +"<img src='../images/"+marker.picture+".JPG' width='120' height='80' />"	+
   "</div>"+
   "<div id='markInfoPOImak'>"+

    "<a class='markTextPOI'><b>大类：</b></a>"+
   	"<a class='markTextSubPOI'>"+marker.mainclass+"</a>"+"<br />"+						

   "<a class='markTextPOI'><b>位置：</b></a>"+	
      "<a class='markTextSubPOI'>"+marker.position+"</a>"+"<br />"+
   "</div>"+
   "</div>";
   	
   	// 弹出消息框
   	 popup = new SuperMap.Popup.FramedCloud("popwin",new SuperMap.LonLat(lonlat.lon,lonlat.lat),null,content,null,true);
   	 popup.autoSize=true;
      	  popup.maxSize=new SuperMap.Size(450,300);
   	 infowin = popup;
      map.addPopup(popup);

   	
   }
   //分页封装代码
   function fenPages(pageid,pageClick)
   {
   	var resuil=document.getElementById(pageid);		
   		var as = resuil.getElementsByTagName('a'); 
   		 
   		 for(var i=0; i<as.length; i++){ 
   			//as[i].style.color=(i+1)==pageClick?'#F00':'#06C'; 
   			as[i].style.fontSize='12';
   			as[i].style.fontWeight='500';			
   			
   		  }
   		  as[pageClick].style.fontSize='15';
   		   as[pageClick].style.fontWeight='600';		   
   		  
   }
   /**
    * search的模糊查询
    */
   //查询按钮点击
   function OnSearchButton()
   {
   	//获得文本框内模糊搜索的字段FuzzyField
   	var FuzzyField=document.getElementById("SearchBox").value;
   	if(FuzzyField!="")
   		{
   			ViewFuzzyquery(FuzzyField,1);
   		}
   	else{
   		//alert("请输入正确的查询信息！");
   		$.messager.alert('提示','请输入正确的查询信息！','');
   	}	
   }
   function getKey(event)
   {	
   	if(event.keyCode==13)
   	{ 
   		OnSearchButton();
   	} 

   }
   
   
   
   
   
   
   
   
   
   
   
