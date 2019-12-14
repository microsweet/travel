function markPOI() {
	pan();
    map.events.on({"click":addPOIHandler});
}
function addPOIHandler(arg,geometry){
    clientX = arg.clientX;
    clientY = arg.clientY;
    //获取浏览器页面的宽度和高度
    var clientWidth = document.body.clientWidth;
    var clientHeight = document.body.clientHeight;
    //获取地图的高度和宽度
    var mapWidth = map.size.w;
    var mapHeight = map.size.h;
    //当前point的经纬度坐标=传入坐标-(当前页面高度-地图的高度)
    var px = new SuperMap.Pixel(clientX-(clientWidth-mapWidth),clientY-(clientHeight-mapHeight));
    var point = map.getLonLatFromPixel(px);
    var x = clientX-(clientWidth-mapWidth);
    var y = clientY-(clientHeight-mapHeight);
    map.events.unregister("click",map,addPOIHandler);
    addPOI(x,y);
}

function addPOI(x,y)
{ //获取鼠标位置
    var my_mouse = document.getElementById("SuperMap.Control.MousePosition_52");
    var num = my_mouse.innerHTML.split(',');
    var infomation=num[0].trim()+","+num[1].trim();
    var infowinHtml="";
    infowinHtml += '<table class="altrowstable">';
    infowinHtml += '<tr><td class="evenrowcolor">标注名称：</td>';
    infowinHtml += '<td calss="oddrowcolor"><input type="text" id="markerName" value=""></td></tr>';
    infowinHtml += '<tr><td colspan="2" align="center"><input type="button" value="保&nbsp;存" onclick=addMarkerCompleted("'+
    infomation+'") ></td></tr></table>';
    //*********************
    //点击后pop弹窗
    addPoiPopup = new SuperMap.Popup.FramedCloud("popwin",new SuperMap.LonLat(num[0],num[1]),null,infowinHtml,null,true);
    map.addPopup(addPoiPopup,true);
}
