function markPOI() {
	pan();
    map.events.on({"click":addPOIHandler});
}
function addPOIHandler(arg,geometry){
    clientX = arg.clientX;
    clientY = arg.clientY;
    //��ȡ�����ҳ��Ŀ�Ⱥ͸߶�
    var clientWidth = document.body.clientWidth;
    var clientHeight = document.body.clientHeight;
    //��ȡ��ͼ�ĸ߶ȺͿ��
    var mapWidth = map.size.w;
    var mapHeight = map.size.h;
    //��ǰpoint�ľ�γ������=��������-(��ǰҳ��߶�-��ͼ�ĸ߶�)
    var px = new SuperMap.Pixel(clientX-(clientWidth-mapWidth),clientY-(clientHeight-mapHeight));
    var point = map.getLonLatFromPixel(px);
    var x = clientX-(clientWidth-mapWidth);
    var y = clientY-(clientHeight-mapHeight);
    map.events.unregister("click",map,addPOIHandler);
    addPOI(x,y);
}

function addPOI(x,y)
{ //��ȡ���λ��
    var my_mouse = document.getElementById("SuperMap.Control.MousePosition_52");
    var num = my_mouse.innerHTML.split(',');
    var infomation=num[0].trim()+","+num[1].trim();
    var infowinHtml="";
    infowinHtml += '<table class="altrowstable">';
    infowinHtml += '<tr><td class="evenrowcolor">��ע���ƣ�</td>';
    infowinHtml += '<td calss="oddrowcolor"><input type="text" id="markerName" value=""></td></tr>';
    infowinHtml += '<tr><td colspan="2" align="center"><input type="button" value="��&nbsp;��" onclick=addMarkerCompleted("'+
    infomation+'") ></td></tr></table>';
    //*********************
    //�����pop����
    addPoiPopup = new SuperMap.Popup.FramedCloud("popwin",new SuperMap.LonLat(num[0],num[1]),null,infowinHtml,null,true);
    map.addPopup(addPoiPopup,true);
}
