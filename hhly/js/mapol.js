
var isFullScreen = false;//是否全屏显示



/**
 * 旅游景点数据中的变量
 * 
 * */
var fangfa;
var mIdex;// addmarker里面for循环
var HID;//景点中被选中的ID号
var pageNum;//景点分页
var pageCurrent=1;//当前页
var xmlHttp;//景点查询的请求
var dianjipage;
var nawPage=1;

//定义景点种类的参数，实现转码
var sql1;
var sql2;

//定义获得请求的记录个数
var queryLen;
var queryCount;

//定义获得查询到的景点信息
var idArr=new Array();
var nameArr=new Array();
var smxArr=new Array();
var smyArr=new Array();
var positionArr=new Array();
var codeArr=new Array();
var maintypeArr=new Array();
var subtypeArr= new Array();
var buildingageArr=new Array();
var mainclassArr=new Array();   
var middleclassArr=new Array(); 
var smidArr=new Array();
var pictureArr=new Array();




var idCurrArr=new Array();
var nameCurrArr=new Array();
var smxCurrArr=new Array();
var smyCurrArr=new Array();
var positionCurrArr=new Array();
var codeCurrArr=new Array();
var maintypeCurrArr=new Array();
var subtypeCurrArr= new Array();
var buildingageCurrArr=new Array();
var mainclassCurrArr=new Array();   
var middleclassCurrArr=new Array(); 
var smidCurrArr=new Array();
var pictureCurrArr=new Array();
/**
 * 旅游住宿、餐饮娱乐查询
 * 定义变量
 * */

var xmlHttpPOI;//兴趣点的请求
var timeBuffer;//给xmlHttpPOI初始化完成的缓冲时间，


//定义种类的参数，实现转码
var sql1POI;
var sql2POI;

//定义获得请求的记录个数
var queryLenPOI;//全部记录
var TravelNum;//旅游住宿餐饮娱乐
var TravelNum2;
var CurrentPoiNum;//当前展示的POI数目
var CurrentPage; //当前的页码


//定义获得查询到的旅游住宿餐饮娱乐信息
var smidTravelArr=new Array();
var smxTravelArr=new Array();
var smyTravelArr=new Array();
var mainclassTravelArr=new Array();
var middleclasTravelArr=new Array();
var smallclassTravelArr=new Array();
var nameTravelArr=new Array();
var pictureTravelArr=new Array();
var positionTravelArr=new Array();
var codeTravelArr=new Array();
//获得当前显示的旅游住宿餐饮娱乐信息
var smidTravelCurrArr=new Array();
var smxTravelCurrArr=new Array();
var smyTravelCurrArr=new Array();
var mainclassTravelCurrArr=new Array();
var middleclasTravelCurrArr=new Array();
var smallclassTravelCurrArr=new Array();
var nameTravelCurrArr=new Array();
var pictureTravelCurrArr=new Array();
var positionTravelCurrArr=new Array();
var codeTtravelCurrArr=new Array();
var addressTravelCurrArr=new Array();



function GetXmlHttpObject()
{
	var xmlHttp=null;
	try{
		// Firefox, Opera 8.0+, Safari
		xmlHttp=new XMLHttpRequest();
	}
	catch (e){
		// Internet Explorer
		try
		{
			xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
		}
		catch (e)
		{
			xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
		}
	}
	return xmlHttp;
}

//点击某种类的按钮事件 按大类查询
function addViewMarker(sql,pageIndex){
	
	//sql = "DMMCXX like '%"+sql+"%'";
	sql = "MAINCLASS = '"+sql+"'";
	var url = configuration.ServerIp+configuration.SfsServerInterface+"?filter="+sql+"&request=GETFEATURE&page=1&rp=999";
		$.ajax({
			type:'get',//可选get
			url:encodeURI(url),//这里是接收数据的PHP程序
			dataType:'json',//服务器返回的数据类型 可选XML ,Json jsonp script html text等
			success:function(msg){
				var rows = msg.rows
				request(rows);
				

			}
		});
	
	/*
	//创建XMLHttpRequest对象，客户端通过该对象向服务器请求数据。
	xmlHttp=GetXmlHttpObject();
	if(xmlHttp==null)
		{
			alert("您的浏览器不支持Ajax！");
			return;
		}
	
	//实现地物名称的转码;不转码，搜索值和数据库的值对应不起来，会产生异常，找不到数据
	fangfa=addViewMarker;
	sql2=sql;
	sql1 = escape(encodeURIComponent(sql));
	
	// 请求地址
	var requestUrl=ServerIP+SfsServerInterface+"&PageSize=350&PageIndex="+pageIndex+"&Filter=MAINCLASS='"+sql1+"'&key="+Serverkey;
	//http://192.168.2.134:6070/servicemanager/sfsproxy/1591?REQUEST=Filter&VERSION=1.0.0&FID=1786&PageSize=10&PageIndex=1&Filter=SMID>5&key=98bff9a15f50623d032944c799106cfc
	
	// Ajax 跨域发送请求，增加代理
	var proxy = ApplicationID+"WebRoot/js/proxy/httpproxy.jsp";
	var reg=/&/gi;
	var url=proxy+"?requestmethod=get&url="+requestUrl.replace(reg,":::");

     request(requestUrl,function(){alert("exception");});*/


}
//点击某种类的按钮事件  按中类查询
/*// function addViewMarker1(sql,pageIndex){
	
	//创建XMLHttpRequest对象，客户端通过该对象向服务器请求数据。
	xmlHttp=GetXmlHttpObject();
	if(xmlHttp==null)
		{
			alert("您的浏览器不支持Ajax！");
			return;
		}
	
	//实现地物名称的转码;不转码，搜索值和数据库的值对应不起来，会产生异常，找不到数据
	fangfa=addViewMarker1;
	sql2=sql;
	sql1 = escape(encodeURIComponent(sql));
	
	// 请求地址
	var requestUrl=ServerIP+SfsServerInterface+"&PageSize=350&PageIndex="+pageIndex+"&Filter=MIDDLECLAS='"+sql1+"'&key="+Serverkey;
	// Ajax 跨域发送请求，增加代理
	var proxy = ApplicationID+"WebRoot/js/proxy/httpproxy.jsp";
	var reg=/&/gi;
	var url=proxy+"?requestmethod=get&url="+requestUrl.replace(reg,":::");

     request(requestUrl,function(){alert("exception");});


}
//	
*///从数据库中查询
function addViewMarker2(sql,pageIndex){
	/*sql = "MAINCLASS = '"+sql+"'";
	var url = configuration.ServerIp+configuration.SfsServerInterface+"?filter="+sql+"&request=GETFEATURE&page=1&rp=999";
		$.ajax({
			type:'get',//可选get
			url:encodeURI(url),//这里是接收数据的PHP程序
			dataType:'json',//服务器返回的数据类型 可选XML ,Json jsonp script html text等
			success:function(msg){
				var rows = msg.rows
				request2(rows);

			}
		});*/
	
	fangfa=addViewMarker2;
	var aj = $
	.ajax({
		url : "SceneryServlet.qwe",
		type : "post",
		dataType : 'json',
		data : {
			
		},
		// 获取数据库中的数据，动态显示在页面上
		success : function(data) {
		    request2(data,function(){alert("exception");});
		}});

	
  


}


function ViewFuzzyquery(sql,pageIndex){
	
	sql = "DMMCXX like '%"+sql+"%'";
	var url = configuration.ServerIp+configuration.SfsServerInterface+"?filter="+sql+"&request=GETFEATURE&page=1&rp=999";
		$.ajax({
			type:'get',//可选get
			url:encodeURI(url),//这里是接收数据的PHP程序
			dataType:'json',//服务器返回的数据类型 可选XML ,Json jsonp script html text等
			success:function(msg){
				var rows = msg.rows
				request(rows);
				

			}
		});
		
	/*
	//创建XMLHttpRequest对象，客户端通过该对象向服务器请求数据。
	xmlHttp=GetXmlHttpObject();
	if(xmlHttp==null)
		{
			alert("您的浏览器不支持Ajax！");
			return;
		}
	
	//实现地物名称的转码
	fangfa=ViewFuzzyquery;
		sql2=sql;
	sql1 = escape(encodeURI("DMMCXX like '%"+sql+"%'"));
	// 请求地址
	var requestUrl=ServerIP+SfsServerInterface+"&PageSize=350&PageIndex="+pageIndex+"&Filter="+sql1+"&key="+Serverkey;
	
	request(requestUrl,function(){alert("exception");});*/

	
}


function getDomDocument()
{
	// IE
	var xmlDom=null;
	if(window.ActiveXObject)
	{
		xmlDom=new ActiveXObject("Microsoft.XMLDOM");
	}
	// 非IE
	else
	{
		xmlDom=document.implementation.createDocument("","",null);
	}
	return xmlDom;
}
function loadXML(xmlFile) {
	var xmlDoc;
	if (window.ActiveXObject) {
		xmlDoc = new ActiveXObject('Microsoft.XMLDOM');// IE浏览器
		xmlDoc.async = false;
		xmlDoc.load(xmlFile);
	} else if (isFirefox = navigator.userAgent.indexOf("Firefox") > 0) { // 火狐浏览器
		// else if (document.implementation &&
		// document.implementation.createDocument) {//这里主要是对谷歌浏览器进行处理
		xmlDoc = document.implementation.createDocument('', '', null);
		xmlDoc.load(xmlFile);
	} else { // 谷歌浏览器
		var xmlhttp = new window.XMLHttpRequest();
		xmlhttp.open("GET", xmlFile, false);
		xmlhttp.send(null);
		if (xmlhttp.readyState == 4) {
			xmlDoc = xmlhttp.responseXML.documentElement;
		}
	}
	return xmlDoc;
}
//回调函数
function request(msg) {
	
	/*new net.ContentLoader(url, function() {
		var result = this.ajaxObj.responseText;
		var xmlDom = BrowserAdepter.loadXML(result);*/
	
		//ininArray();
		
	        nameArr.length=0;        
			smxArr.length=0;         
			smyArr.length=0;         
			smidArr.length=0;        
			mainclassArr.length=0;   
			middleclassArr.length=0;
			positionArr.length=0;
			pictureArr.length=0;
			
		//var page=xmlDom.selectNodes("//FeatureList");
		

		
		var records;
		//var fields = xmlDom.selectNodes("//Fields");
		map.removeAllPopup();
		markers.clearMarkers();
		
		queryLen=msg.length;
		
		TravelNum=0;
			//pageCurrent=1;	
		if (queryLen > 0) {
			
			for ( var i = 0; i < queryLen; i++) {
				
				//var fields = records[i].selectNodes("//Fields");
				//var id = fields[i].selectSingleNode("ID").text;
				var smid = msg[i].SMID;
				var smx = msg[i].SMX;
				var smy = msg[i].SMY;
				var name = msg[i].NAME;
				var mainclass = msg[i].MAINCLASS;
				var middleclass= msg[i].MIDDLECLASS;
				var position = msg[i].ADDRESS;
				var picture=msg[i].LSH;	
				nameArr.push(name);
				smxArr.push(smx);
				smyArr.push(smy);
				smidArr.push(smid);
				mainclassArr.push(mainclass);
				middleclassArr.push(middleclass);
				positionArr.push(position);
				pictureArr.push(picture);
				TravelNum++;
				// 记录点标注信息
				
			}
				if(TravelNum>0){	
				
				   // 清空地图中现有的查询结果
					map.removeAllPopup();
					markers.clearMarkers();
					
					// 默认当前显示查询结果中的第一页内容，并进行显示，10个进行一组显示
					if(dianjipage!=null){
						nawPage=dianjipage;
					}
					
					ShowResult(TravelNum,7,nawPage);
		    			    		    	
				}
				else{
					 // alert("您搜索的范围内没有"+"信息，请重新搜索！");
					  $.messager.alert('提示','没有相关信息，请重新搜索！',' ');
				
				}
		}	
		
};
//景点查询 调数据库1
function request2(url) {
	
	
		
	        nameArr.length=0;        
			smxArr.length=0;         
			smyArr.length=0;         
			smidArr.length=0;        
			mainclassArr.length=0;   
			middleclassArr.length=0;
			positionArr.length=0;
			pictureArr.length=0;
			
	var length=url.length;

		map.removeAllPopup();
		markers.clearMarkers();
	
	
		
		TravelNum=0;
	
		if (length> 0) {
			
			for ( var i = 0; i < length; i++) {
				
				
					
				var smid=url[i].ID;
				
				var name=url[i].NAME;
				var smx=url[i].SmX;
				var smy=url[i].SmY;
				var picture=url[i].FILELOCATION;
				var mainclass=url[i].MAINCLASS;
				var position=url[i].ADDRESS;
	
				
				nameArr.push(name);
				smxArr.push(smx);
				smyArr.push(smy);
				smidArr.push(smid);
				positionArr.push(position);
				mainclassArr.push(mainclass);
				pictureArr.push(picture);
		
				TravelNum++;
				// 记录点标注信息
				
			}
				if(TravelNum>0)
		{	
			
			   // 清空地图中现有的查询结果
		    	map.removeAllPopup();
				markers.clearMarkers();
				
				// 默认当前显示查询结果中的第一页内容，并进行显示，7个进行一组显示
				if(dianjipage!=null){
					nawPage=dianjipage;
				}
		    	ShowResult(TravelNum,7,nawPage);
		    			    		    	
		 }
		else
		{
			 // alert("您搜索的范围内没有"+"信息，请重新搜索！");
			  $.messager.alert('提示','没有相关信息，请重新搜索！',' ');
		
		}
		}	
		


};

function ShowResult(AllNum,PageCount,nawPage)
{
	// 设置当前显示的内容
	setView(AllNum,PageCount,nawPage);
	
	// 控制视图栏中查询结果图标显示
	addfenMarker();
	// 控制左侧列表显示
	queryResult(AllNum,PageCount,nawPage);
}
function setView(AllNum,SeparatePageNum,nawPage)
{
	// 获得当前显示的兴趣点的个数
	// 如果总的记录使得当前页数满SeparatePageNum时
 if(AllNum>=SeparatePageNum*nawPage)
 {
 	CurrentNum=SeparatePageNum;
 }
 // 如果总的记录使得当前页数不满CurrentPoiNum时
 if(AllNum<SeparatePageNum*nawPage)
 {
 	CurrentNum=AllNum-(SeparatePageNum*(nawPage-1));
 }
 
	// 清空当前显示的旅游住宿餐饮娱乐信息序列
  smidTravelCurrArr.length=0;
  smxTravelCurrArr.length=0;
  smyTravelCurrArr.length=0;
  mainclassTravelCurrArr.length=0;
  middleclasTravelCurrArr.length=0;
  nameTravelCurrArr.length=0;
  positionTravelCurrArr.length=0;

pictureTravelCurrArr.length=0;
	    // 对当前显示页面的信息进行赋值
	    	for(var i=0; i<CurrentNum; i++)
			{				
				// 从旅游住宿餐饮娱乐兴趣点中获得当前显示的信息
				var smid = smidArr[SeparatePageNum*(nawPage-1)+i];			
				var smx = smxArr[SeparatePageNum*(nawPage-1)+i];
				var smy = smyArr[SeparatePageNum*(nawPage-1)+i];
				var mainclass=mainclassArr[SeparatePageNum*(nawPage-1)+i];
				var name=nameArr[SeparatePageNum*(nawPage-1)+i];
				var position=positionArr[SeparatePageNum*(nawPage-1)+i];
				var picture=pictureArr[SeparatePageNum*(nawPage-1)+i];
				smidTravelCurrArr.push(smid);
				smxTravelCurrArr.push(smx);
				smyTravelCurrArr.push(smy);
				mainclassTravelCurrArr.push(mainclass);
				nameTravelCurrArr.push(name);
				positionTravelCurrArr.push(position);
				pictureTravelCurrArr.push(picture);
			}
	   
}

/**
 * 在附近找，旅游住宿、餐饮娱乐查询
 * sql为大类类别（旅游住宿或餐饮娱乐）
 * pageIndex为返回XML的页面个数
 * X,Y,R分别为搜索的中心点和半径
 */
//获得搜索半径，向服务器发送请求
function HotelandCateringInquiries(sql,pageIndex,X,Y,picture1,name1,mainclass1,position1)
{
	// 获得搜索半径
	var RText=document.getElementById("distance").value;
	var coords = DescribingCircle(RText,X,Y);
	var sql1 = "MAINCLASS = '"+sql+"'";
	var url = configuration.ServerIp+configuration.SfsServerInterface+"?filter="+sql1+"&bounds="+coords+"&request=GETFEATURE&page=1&rp=999";
		$.ajax({
			type:'get',//可选get
			url:encodeURI(url),//这里是接收数据的PHP程序
			dataType:'json',//服务器返回的数据类型 可选XML ,Json jsonp script html text等
			success:function(msg){
				var rows = msg.rows
				request1(rows,sql,X,Y,picture1,name1,mainclass1,position1);
				requestbuffer(rows);
			}
		});
	
	/*
	var R=parseInt(RText,10);
	
	if (R<0||R==0)
	{
		//alert("搜索距离输入错误，请输入正确的搜索距离");
		$.messager.alert('提示','搜索距离输入错误，请输入正确的搜索距离',' ');
		return;
	}
	if (R>1000)
	{
		//alert("搜索范围太大，搜索距离应小于1000米");
		$.messager.alert('提示','搜索范围太大，搜索距离应小于1000米',' ');
		return;
	}
	// 将直线距离大致换算成经纬度距离
	//R=R/83132;
	R=R/111012.43339254;
	// 创建XMLHttpRequest 对象，客户端通过该对象向服务器请求数据。
	xmlHttpPoi=GetXmlHttpObject();
	if (xmlHttpPoi==null)
	{
		alert ("您的浏览器不支持 AJAX!");
		return;
	} 
	
	//sql1=encodeURL(encodeURL(sql1));	
	// 请求地址
	var requestUrl= ServerIP+SfsServerInterface+"&PageSize="+pageIndex+"&PageIndex=1"+"&COORDS="+X+","+Y+"|"+R+"&key="+Serverkey;               
	request1(sql,requestUrl,function(){alert("exception");},X,Y,picture1,name1,mainclass1,position1);
	var requestBufferUrl=ServerIP+BufferServer+"shape="+X+","+Y+"&leftDistance="+R+"&rightDistance="+R+"&endType=ROUND&semicircleLineSegment=20";
	requestbuffer(requestBufferUrl,function(){alert("exception");});*/

}



function addfenMarker()
{	
	var markNum=smidTravelCurrArr.length;
		if(markNum>0)	{
			for(var i=0; i<markNum; i++)
			{
				number = i + 1;				

				var size = new SuperMap.Size(19,27);
				var offset = new SuperMap.Pixel(-(size.w/2), -size.h);
				var icon = new SuperMap.Icon("images/mapview/marker/"+ number + ".png", size, offset);
				
				var marker=new SuperMap.Marker(new SuperMap.LonLat(smxTravelCurrArr[i] * 1,smyTravelCurrArr[i] * 1),icon);
				marker.x=smxTravelCurrArr[i];
				marker.y=smyTravelCurrArr[i];
				marker.mainclass=mainclassTravelCurrArr[i];
				marker.name=nameTravelCurrArr[i];
				marker.position=positionTravelCurrArr[i];
				marker.picture=pictureTravelCurrArr[i];
				marker.icon=icon;
				marker.order=i+1;
				markers.addMarker(marker,icon);
				
				marker.events.on({
				   "click":openInfoWintravel,
				   "mouseover":changeMarkermap,
				   "scope": marker
				});	
				
			}
		
		}
		
	
}
//二级查询中心点
function addMarker123(x,y,picture1,name1,mainclass1,position1){
	map.removeAllPopup();
	markers1.clearMarkers();
	var size = new SuperMap.Size(19,27);
	var offset = new SuperMap.Pixel(-(size.w/2), -size.h);
	var icon = new SuperMap.Icon("images/mapview/marker/moke.png", size, offset);
	var marker=new SuperMap.Marker(new SuperMap.LonLat(x * 1,y * 1),icon);
	marker.x=x;
	marker.y=y;
	marker.name=name1;
	marker.position=position1;
	marker.mainclass=mainclass1;
	marker.picture=picture1;

	markers1.addMarker(marker,icon);
	marker.events.on({
		   "click":openInfoWintravel,
		   "scope": marker
		});	
}
//根据获得的旅游住宿、餐饮娱乐数据在地图中增加mark
function addPOIMarker()
{	
	map.removeAllPopup();
	markers.clearMarkers();
	var markNum=smidTravelCurrArr.length;	
	
	if(markNum>0)	{
		
		for(var i=0; i<markNum; i++)
		{
		number = i + 1;	
		var size = new SuperMap.Size(19,27);
		var offset = new SuperMap.Pixel(-(size.w/2), -size.h);
		
		var icon = new SuperMap.Icon("images/mapview/marker/"+ number + ".png", size, offset);
		var marker=new SuperMap.Marker(new SuperMap.LonLat(smxTravelCurrArr[i] * 1,smyTravelCurrArr[i] * 1),icon);
		marker.x=smxTravelCurrArr[i];
		marker.y=smyTravelCurrArr[i];
		marker.name=nameTravelCurrArr[i];
		marker.position=positionTravelCurrArr[i];
		marker.mainclass=mainclassTravelCurrArr[i];
		marker.smallclass=smallclassTravelCurrArr[i];
		marker.picture=pictureTravelCurrArr[i];
		marker.icon=icon;
		marker.order=i+1;
		markers.addMarker(marker,icon);
		marker.events.on({
		   "click":openInfoWindowPOI,
		   "mouseover":changeMarkermapPOI,
		   "scope": marker
		});	
	}
	
	}
	
}




function queryResult(AllNum,PageCount,nawPage){
	
	//var clientHeight=document.body.clientHeight;
	//var naviHeight=clientHeight-160;
	//$("#naviContent").height(naviHeight);
	
	// 清除之前的信息
	$("#queryListTb").remove();			
	$("#resultPage").remove();
	
	// ID为naviContent的DIV中增加表格
	$("#cityBoxCon").hide();

	$("#naviContent").append("<table id='queryListTb'></table>");
	
	$("#queryListTb").append("<tbody></tbody>");
	
	// 对当前显示页面的信息进行赋值
    	for(var i=0; i<CurrentNum; i++)
		{
			// 从旅游住宿餐饮娱乐兴趣点中获得当前显示的信息
    		var name=nameTravelCurrArr[i];
    		var mainclass=mainclassTravelCurrArr[i];
            var position=positionTravelCurrArr[i];
    		var smx=smxTravelCurrArr[i];
			var smy=smyTravelCurrArr[i];
			var ID=smidTravelCurrArr[i];
			var picture=pictureTravelCurrArr[i];
			
		/*	var WinOpendetails_URL=ApplicationID+"/travel/details.jsp?ID="+ID.toString();*/
			var WinOpendetails_URL=ApplicationID+"/travel/New_Details?ID="+ID.toString();
			var WinOpendetails_onclick="window.open('"+WinOpendetails_URL+"')";
			var WinOpendetails= "onclick="+WinOpendetails_onclick;
			
			var FlyTo_onclick="flyto("+smx+","+smy+",15);openInfoWindowziliantravel("+smx+","+smy+");";
			
			var FlyTo="onclick="+FlyTo_onclick;
			// 向表格中增加行tr，和表头信息th
			$("#queryListTb tbody").append("<tr id='item-td-"+i+"'></tr>");
			$("#item-td-"+i).append("<th></th>");	
			/**var dom1="<td><div class='p_title'>" +"<a>"+
	        "<img id='no"+i+"' style='float:left;width:18px;height:26px;'>"+"</a>"+"&nbsp&nbsp<a id='link"+i+"_show' href='javascript:void(0)'"+FlyTo+">"+name+"</a>" +
            "-<a id='zoomTo' href='javascript:void(0)'"+FlyTo+">定位</a>" +
            "</div>" +
            "<div class='p_Img'>"+"<img src='images/mapview/CZPOI/"+code+"' alt=''/>"+"</div>"+
            "<div class='p_add'>"+"地址："+position+"</div>"+
            "</td>";
			
			$("#item-td-"+i).after(dom1);
			
			*/
			
			var dom1="<td ><div class='p_title'>" +"<a>"+"<img id='no"+i+"' style='float:left;width:18px;height:26px;bottom:-10px;'>" +"</a>"+"&nbsp&nbsp"+
			
			
	        "<p class='poiTitle'>" +
	        "<a id='link"+i+"_show' href='javascript:void(0)'>"+name+"</a>" +
	        "-<a id='detail' href='javascript:void(0)'"+WinOpendetails+">详情</a>" +
	        "-<a id='zoomTo' href='javascript:void(0)'"+FlyTo+">定位</a>" +
	        
            "</p></div>" +
           /* "<div class='p_Img'>"+"<img src='images/CZPOI/"+picture+"-"+1+".jpg' style='width:70px;height:80px;' alt=''/>"+"</div>"+*/
            "<div class='p_add'"+FlyTo+">"+"<p>地址："+position+"</p>"+"</div>"+
            "</td>";
			
			var dom2="<td><div class='p_title'>" +"<a>"+"<img id='no"+i+"' style='float:left;width:18px;height:26px;bottom:-10px;'>" +"</a>"+"&nbsp&nbsp"+
	        "<p class='poiTitle'>" +
	        "<a id='link"+i+"_show' href='javascript:void(0)'>"+name+"</a>" +
	        
	        "-<a id='zoomTo' href='javascript:void(0)'"+FlyTo+">定位</a>" +
            "</p></div>" +
          /* "<div class='p_Img'>"+"<img src='images/CZPOI/"+picture+"-"+1+".jpg' style='width:70px;height:80px;' alt=''/>"+"</div>"+*/
            "<div class='p_add'"+FlyTo+">"+"<p>地址："+position+"</p>"+"</div>"+
            "</td>";
			
			if(mainclass!="景点"){
				
				$("#item-td-"+i+" th").after(dom2);
				}
			else{
			$("#item-td-"+i+" th").after(dom1);
			
			}
			
			// 增加每条记录表头信息
			var j=i+1;
			$("#no"+i).attr("src","images/mapview/marker/"+ j + ".png");
		}   
 

	// 进行分页
    	var pager_length = 11;
    	var header_length = tailer_length = 2;
    	var offset = ( pager_length - 1) / 2;
	pageNum=Math.ceil(AllNum/PageCount);
	if(pageNum==1)
		{
		var domResult="<div id='resultPage'><a class='prev' href='javascript:void(0)' onclick='pagePre()'style='display:none'>上一页</a>" +
		"<a class='next' href='javascript:void(0)' onclick='pageNext()' style='display:none'>下一页</a></div>";
		}
	else{
		if(nawPage==1){
			
			var domResult="<div id='resultPage'><a class='prev' href='javascript:void(0)' onclick='pagePre()' style='display:none'>上一页</a>" +
			"<a class='next' href='javascript:void(0)' onclick='pageNext()'>下一页</a></div>";
		}
		else{
			var domResult="<div id='resultPage'><a class='prev' href='javascript:void(0)' onclick='pagePre()'>上一页</a>" +
			"<a class='next' href='javascript:void(0)' onclick='pageNext()'>下一页</a></div>";
		}
		if(nawPage==pageNum){
			var domResult="<div id='resultPage'><a class='prev' href='javascript:void(0)' onclick='pagePre()'>上一页</a>" +
			"<a class='next' href='javascript:void(0)' onclick='pageNext()' style='display:none'>下一页</a></div>";
		}
		
	}
	
	$("#naviContent").append(domResult);	

	
	if(dianjipage!=null){
		for(var i=0;i<pageNum;i++){
			var j=i+1;
			//$(".next").before("<a id='page"+j+"' href='javascript:void(0)' onclick='pageBtn("+j+")'>"+j+" "+"</a>");
		$(".next").before("<a id='page"+j+"' href=\"javascript:pageBtn('"+j+"');\" style=\"font-size:" + (j==dianjipage?"15":"12") +";font-weight:"+(j==dianjipage?"600":"500")+ "\">"+j+"</a> ");
		}
	}
	else{
	for(var i=0;i<pageNum;i++){
		var j=i+1;
		//$(".next").before("<a id='page"+j+"' href='javascript:void(0)' onclick='pageBtn("+j+")'>"+j+" "+"</a>");
	$(".next").before("<a id='page"+j+"' href=\"javascript:pageBtn('"+j+"');\" style=\"font-size:" + (j==1?"15":"12") +";font-weight:"+(j==1?"600":"500")+ "\">"+j+"</a> ");
	}
	}
	// 控制左侧图层显示
	$("#naviContent").show();
	$("#cityBoxCon").hide();
	$("#leibie").hide();
	$("#queryListTb").hide();	
	$("#resultPage").hide();
	$("#queryListTbPOI").hide();	
	$("#resultPagePOI").hide();
	
	$("#queryListTb").show();			
	$("#resultPage").show();
	
	$("#Btn").show();
	$("#shouye").show();
	$("#fanhui").hide();
	queryHover();
}
//鼠标悬停结果列表
function queryHover(){
	var index=0;
	var $querytr=$("#queryListTb tr");
	var len=$querytr.length;
	$("#queryListTb tr").mouseover(function(){
		index=$querytr.index(this)+1;
		$(this).css("background-color","#eeeeee");
		$(this).children("td").children("div").children("a").children("img").attr("src","images/mapview/marker/p"+index+".jpg");
	markers.markers[index-1].icon.imageDiv.lastChild.src="images/mapview/marker/bp"+index+".png";


	
	}).mouseout(function(){
		$(this).css("background-color","white");
		$(this).children("td").children("div").children("a").children("img").attr("src","images/mapview/marker/"+index+".png");
	
	markers.markers[index-1].icon.imageDiv.lastChild.src="images/mapview/marker/"+index+".png";
	
	});
}

//二级查询结果
function request1(msg,sql,X,Y,picture1,name1,mainclass1,position1) {
	//new net.ContentLoader(url, function() {
		//var result = this.ajaxObj.responseText;
	//	var xmlDom = BrowserAdepter.loadXML(result);
		

    	smidTravelArr.length=0;
		smxTravelArr.length=0;
		smyTravelArr.length=0;
		mainclassTravelArr.length=0;
		smallclassTravelArr.length=0;
		positionTravelArr.length=0;
		pictureTravelArr.length=0;
		nameTravelArr.length=0;
		// 判断是否获得了记录
		var page=msg.length;
		try {
			
			queryCount=msg.length;
		

		} 
		catch (e) {
			//alert("没有信息");有问题！！！！!!!!!!!!!!!!!！会执行alert。
		}
		
		//var records = xmlDom.selectNodes("//FeatureMember");
		//var fields = xmlDom.selectNodes("//Fields");		
		queryLen=msg.length;	
		
		
		// 获取XML中旅游住宿、餐饮娱乐节点信息
		TravelNum2=0;//用写if(queryLen>0){}??????
		for(var i=0;i<queryLen; i++)
		{
						
			// 以下需要根据数据的实际字段进行修改
			//var fields = msg[i].selectNodes("//Fields");
			var smid = msg[i].SMID;//?????????????
			var smx = msg[i].SMX;
			var smy = msg[i].SMY;
	
			var maintype=msg[i].MAINCLASS//??????
			var middleclass=msg[i].MIDDLECLASS;
	
	
			var name=msg[i].NAME;
			var picture=msg[i].LSH;	
			var position=msg[i].ADDRESS;
		
					
				// 将记录放入序列中
				smidTravelArr.push(smid);
				smxTravelArr.push(smx);
				smyTravelArr.push(smy);
				mainclassTravelArr.push(maintype);
				positionTravelArr.push(position);
				smallclassTravelArr.push(middleclass);
				
				nameTravelArr.push(name);
				pictureTravelArr.push(picture);				
				TravelNum2++;				
							
		}	
			
			
		// 当搜索到的兴趣点个数大于0时，进行的操作
		if(TravelNum2>0)
		{	
			
			   // 清空地图中现有的查询结果
		    	//oMap.clearAllFeatures();
			//	oMap.closeInfoWindow();
				
				// 默认当前显示查询结果中的第一页内容，并进行显示，10个进行一组显示
		    	CurrentPage=1;
		    	ShowResultPOI(TravelNum2,7,CurrentPage,X,Y,picture1,name1,mainclass1,position1);

						    		    	
		 }
		else
		{
			 // alert("您搜索的范围内没有"+sql+"信息，请重新搜索！");
			  $.messager.alert('提示','您搜索的范围内没有'+sql+'信息，请重新搜索！',' ');
			  ShowResult(TravelNum,7,nawPage);
			  
			vectorLayer.removeAllFeatures();
				
				
				
		}

	/*}, function() {
		if (callback) {
			callback();
		}
	}, null, null,true,'get');*/
};
    
//显示当前页码的POI查询结果
function ShowResultPOI(AllNum,PageCount,CurrentPage,X,Y,picture1,name1,mainclass1,position1)
{
	// 设置当前显示的内容
	setViewPOI(AllNum,PageCount,CurrentPage);
	
	// 控制视图栏中查询结果图标显示
	addPOIMarker();
	addMarker123(X,Y,picture1,name1,mainclass1,position1);
	// 控制左侧列表显示
	queryResultPOI(AllNum,PageCount,CurrentPage);
}
//设置旅游住宿、餐饮娱乐POI的个数，SeparatePageNum=10个进行一组显示
function setViewPOI(AllNum,SeparatePageNum,CurrentPage)
{
	// 获得当前显示的兴趣点的个数
	// 如果总的记录使得当前页数满SeparatePageNum时
 if(AllNum>=SeparatePageNum*CurrentPage)
 {
 	CurrentPoiNum=SeparatePageNum;
 }
 // 如果总的记录使得当前页数不满CurrentPoiNum时
 if(AllNum<SeparatePageNum*CurrentPage)
 {
 	CurrentPoiNum=AllNum-(SeparatePageNum*(CurrentPage-1));
 }
 
	// 清空当前显示的旅游住宿餐饮娱乐信息序列
	smidTravelCurrArr.length=0;
	smxTravelCurrArr.length=0;
	smyTravelCurrArr.length=0;
	mainclassTravelCurrArr.length=0;
	positionTravelCurrArr.length=0;
	smallclassTravelCurrArr.length=0;
	nameTravelCurrArr.length=0;
	pictureTravelCurrArr.length=0;
	
	    // 对当前显示页面的信息进行赋值
	    	for(var i=0; i<CurrentPoiNum; i++)
			{				
				// 从旅游住宿餐饮娱乐兴趣点中获得当前显示的信息
				var smid = smidTravelArr[SeparatePageNum*(CurrentPage-1)+i];			
				var smx = smxTravelArr[SeparatePageNum*(CurrentPage-1)+i];
				var smy = smyTravelArr[SeparatePageNum*(CurrentPage-1)+i];
				var mainclass=mainclassTravelArr[SeparatePageNum*(CurrentPage-1)+i];
				var position=positionTravelArr[SeparatePageNum*(CurrentPage-1)+i];
				var smallclass=smallclassTravelArr[SeparatePageNum*(CurrentPage-1)+i];
				var name=nameTravelArr[SeparatePageNum*(CurrentPage-1)+i];
		
				var picture=pictureTravelArr[SeparatePageNum*(CurrentPage-1)+i];	
				
				smidTravelCurrArr.push(smid);
				smxTravelCurrArr.push(smx);
				smyTravelCurrArr.push(smy);
				mainclassTravelCurrArr.push(mainclass);
				positionTravelCurrArr.push(position);
				smallclassTravelCurrArr.push(smallclass);
				nameTravelCurrArr.push(name);
				
				pictureTravelCurrArr.push(picture);
			}
	   
}


/**
 * 兴趣点查询结果
 */

// 动态添加左侧查询结果
function queryResultPOI(AllNum,PageCount,CurrentPage){
	
	var clientHeight=document.body.clientHeight;
	var naviHeight=clientHeight-160;
	//$("#naviContent").height(naviHeight);
	
	// 清除之前的信息
	$("#queryListTbPOI").remove();			
	$("#resultPagePOI").remove();
	
	// ID为naviContent的DIV中增加表格
	$("#cityBoxCon").hide();
	$("#queryListTb").hide();
	$("#naviContent").append("<table id='queryListTbPOI'></table>");
	$("#queryListTbPOI").append("<tbody></tbody>");
	
	// 对当前显示页面的信息进行赋值
    	for(var i=0; i<CurrentPoiNum; i++)
		{
			// 从旅游住宿餐饮娱乐兴趣点中获得当前显示的信息
    		var name=nameTravelCurrArr[i];
    		var position=positionTravelCurrArr[i];
    		var picture=pictureTravelCurrArr[i];
    		var smx=smxTravelCurrArr[i];
			var smy=smyTravelCurrArr[i];
			
			var FlyTo_onclick="flyto("+smx+","+smy+",19);openInfoWindowzuocePOI("+smx+","+smy+");";
			var FlyTo="onclick="+FlyTo_onclick;
			// 向表格中增加行tr，和表头信息th
			$("#queryListTbPOI tbody").append("<tr id='item-td-POI-"+i+"'></tr>");
			$("#item-td-POI-"+i).append("<th></th>");			
				
			var dom1="<td><div class='p_title'>" +"<a>"+"<img id='noPOI"+i+"' style='float:left;width:18px;height:26px;bottom:-10px;'>" +"</a>"+"&nbsp&nbsp"+
	        "<p class='poiTitle'>" +
	        "<a id='link"+i+"_show' href='javascript:void(0)'"+FlyTo+">"+name+"</a>" +
            "<a class='detail' href='javascript:void(0)'></a>" +
            "-<a id='zoomTo' href='javascript:void(0)'"+FlyTo+">定位</a>"+
            "</p></div>" +
          // "<div class='p_Img'>"+"<img src='images/CZPOI/"+picture+"-"+1+".jpg 'style='width:70px;height:80px;alt=''/>"+"</div>"+
            "<div class='p_add'"+FlyTo+">"+"<p>地址："+position+"</p>"+"</div>"+
            "</td>";
			
		
			
			$("#item-td-POI-"+i+" th").after(dom1);
			
			// 增加每条记录表头信息
			var j=i+1;
			$("#noPOI"+i).attr("src","images/mapview/marker/"+ j + ".png");
		}   
 
	
	// 进行分页
	pageNum=Math.ceil(AllNum/PageCount);
	if(pageNum==1)
		{
		var domResult="<div id='resultPagePOI'><a class='prevPOI' href='javascript:void(0)' onclick='pagePrePOI()'style='display:none'>上一页</a>" +
		"<a class='nextPOI' href='javascript:void(0)' onclick='pageNextPOI()' style='display:none'>下一页</a></div>";
		}
	else{
		if(CurrentPage==1){
			
			var domResult="<div id='resultPagePOI'><a class='prevPOI' href='javascript:void(0)' onclick='pagePrePOI()' style='display:none'>上一页</a>" +
			"<a class='nextPOI' href='javascript:void(0)' onclick='pageNextPOI()'>下一页</a></div>";
		}
		else{
			var domResult="<div id='resultPagePOI'><a class='prevPOI' href='javascript:void(0)' onclick='pagePrePOI()'>上一页</a>" +
			"<a class='nextPOI' href='javascript:void(0)' onclick='pageNextPOI()'>下一页</a></div>";
		}
		if(CurrentPage==pageNum){
			var domResult="<div id='resultPagePOI'><a class='prevPOI' href='javascript:void(0)' onclick='pagePrePOI()'>上一页</a>" +
			"<a class='nextPOI' href='javascript:void(0)' onclick='pageNextPOI()' style='display:none'>下一页</a></div>";
		}
		
	}
	
	$("#naviContent").append(domResult);	
	for(var i=0;i<pageNum;i++){
		var j=i+1;
		//$(".nextPOI").before("<a id='page"+j+"' href='javascript:void(0)' onclick='pageBtnPOI("+j+")'>"+j+" "+"</a>");
		$(".nextPOI").before("<a id='pageB"+j+"' href=\"javascript:pageBtnPOI('"+j+"');\" style=\"font-size:" + (j==1?"15":"12") +";font-weight:"+(j==1?"600":"500")+ "\">"+j+"</a> ");
		
	}
	
	// 控制左侧图层显示
	$("#cityBoxCon").hide();
	$("#queryListTb").hide();	
	$("#resultPage").hide();
	
	$("#queryListTbPOI").show();			
	$("#resultPagePOI").show();
	//$("#Btn").show();
	$("#shouye").show();
	$("#fanhui").show();
	queryHoverPOI();
}

function pagePre(){
	nawPage=parseInt(nawPage);
	var pagePre=nawPage-1;
	dianjipage=pagePre;
	pageBtn(pagePre);
	
}
//下一页
function pageNext(){
nawPage=parseInt(nawPage);
var pageNext=nawPage+1;
    dianjipage=pageNext;
	pageBtn(pageNext);
	
}
//分页
function pageBtn(pageClick){
	
	if(nawPage!=pageClick){
		dianjipage=pageClick;
		
		map.removeAllPopup();
		markers.clearMarkers();
		nawPage=pageClick;
		ShowResult(TravelNum,7,nawPage);
		fenPages("resultPage",pageClick);
		}
		map.zoomTo(13);
}
// 分页
function pageBtnPOI(pageClick){

		
	if(CurrentPage!=pageClick){	
		//map.removeAllPopup();
		markers.clearMarkers();
		CurrentPage=pageClick;	
		// 设置当前显示的内容
		setViewPOI(TravelNum2,7,CurrentPage);
		
		// 控制视图栏中查询结果图标显示
		addPOIMarker();
		//addMarker123(X,Y,picture1,name1,mainclass1,position1);
		// 控制左侧列表显示
		queryResultPOI(TravelNum2,7,CurrentPage);
		//ShowResultPOI(TravelNum,7,CurrentPage);	
			fenPages("resultPagePOI",pageClick);
		}	
		map.zoomTo(15);
}
// 上一页
function pagePrePOI(){
		CurrentPage=parseInt(CurrentPage);
		var pagePre=CurrentPage-1;
		pageBtnPOI(pagePre);
		
}
// 下一页
function pageNextPOI(){	
	CurrentPage=parseInt(CurrentPage);
	var pageNext=CurrentPage+1; 
		pageBtnPOI(pageNext);
		
}
// 鼠标悬停结果列表
function queryHoverPOI(){
	var index=0;
	var $querytr=$("#queryListTbPOI tr");
	var len=$querytr.length;
	
	$("#queryListTb tr").mouseover(function(){
		index=$querytr.index(this)+1;
		$(this).css("background-color","#eeeeee");
		$(this).children("td").children("div").children("a").children("img").attr("src","images/mapview/marker/p"+index+".jpg");
	markers.markers[index-1].icon.imageDiv.lastChild.src="images/mapview/marker/bp"+index+".png";


	
	}).mouseout(function(){
		$(this).css("background-color","white");
		$(this).children("td").children("div").children("a").children("img").attr("src","images/mapview/marker/"+index+".png");
	
	markers.markers[index-1].icon.imageDiv.lastChild.src="images/mapview/marker/"+index+".png";
	
	});
}
	
	



var style={
		strokeColor: "red",
		strokeWidth: 1,
		pointerEvents: "visiblePainted",
		fillColor: "blue",
		fillOpacity: 0.2
};
function requestbuffer(msg)
{	vectorLayer.removeAllFeatures();
	//new net.ContentLoader(url, function() {
		/*var result = this.ajaxObj.responseText;
		var xmlDom = BrowserAdepter.loadXML(result);		
		var gmlPosList=xmlDom.selectSingleNode("//gml:posList");
		var xyTexts=BrowserAdepter.getText(gmlPosList);*/
		var xys=msg;
		var polygonPoints=[];
		for (var j=0;j<xys.length;j++)
		{
			//var temp=xys[j].split(",");
			var MSX = xys[i].SmX;
			var MSY = xys[i].SmY;
			polygonPoints.push(new SuperMap.Geometry.Point(MSX, MSY));
		}
		
		var linearRings = new SuperMap.Geometry.LinearRing(polygonPoints);
		var region = new SuperMap.Geometry.Polygon([linearRings]);
		region.style=style;
	    var mGeo=[new SuperMap.Feature.Vector(region,null,style)] ;			
		vectorLayer.addFeatures(mGeo);		
		
	/*}, function() {
		if (callback) {
			callback();
		}
	}, null, null,true,'get');*/
}	
