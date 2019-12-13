var styleCenterPoint = {
		strokeColor : "yellow",
		strokeOpacity : 1,
		fillColor : "red",
		fillOpacity : 0.3,
		strokeWidth : 2,
		pointRadius : 5
	};
//�ܱ߷�Χ����ʽ
var styleRound = {
		strokeColor : "#fff",
		strokeWidth : 2,
		fillColor : "#6666ff",
		fillOpacity : 0.2
	};
//�뾶��
var roundLine = {
		strokeColor : "#FFFF00",
		strokeDashstyle:"dash",
		strokeOpacity : 1,
		fillOpacity : 0.3,
		strokeWidth : 2,
		pointRadius : 6	
};

var vectorRoundLayer;

//��Բ���ҷ�������
function DescribingCircle(pageIndex, centerPointx, centerPointy){
  	 var strategy = new SuperMap.Strategy.GeoText();
  	    strategy.style = {
  	    		  fontColor:"#333",
  	    		  fontWeight:"bolder",
  	    		  fontSize:"12px",
  	    		  fill: true,
  	    		  fillColor: "#FFFFFF",
  	    		  fillOpacity: 1,
  	    		  stroke: true,
  	    		  strokeColor:"#8B7B8B"
  	    		};
  	if (!vectorRoundLayer) {
  		vectorRoundLayer = new SuperMap.Layer.Vector("round",{strategies:[strategy]});
  		map.addLayer(vectorRoundLayer);
  	} else {
  		vectorRoundLayer.removeAllFeatures();
  	}
  	var centerPoint = new SuperMap.Geometry.Point(parseFloat(centerPointx),parseFloat(centerPointy));//���ĵ�
  	//��Χ��
  	var linearRings = ArithmeticCircle(centerPointx, centerPointy, pageIndex);
  	var centerFeature = new SuperMap.Feature.Vector(centerPoint, null,styleCenterPoint);//���ĵ�
  	sliderP = new SuperMap.Geometry.Point(linearRings.tip.x,linearRings.tip.y);
  	var points = [centerPoint,sliderP];
  	var roadLine = new SuperMap.Geometry.LineString(points);//�뾶��
  	//Բ
  	var region = new SuperMap.Geometry.Polygon([linearRings]);
  	var roundFeature = new SuperMap.Feature.Vector(region, null, styleRound);
  	roundFeature.id = "roundFeature";
  	//�뾶��Ҫ��
  	var roadLineFeature = new SuperMap.Feature.Vector(roadLine, null, roundLine);
  	//�ı�Ҫ��
  	var geotextFeature = new SuperMap.Feature.Vector(linearRings.tip);
  	vectorRoundLayer.addFeatures([ roundFeature,centerFeature,geotextFeature,roadLineFeature]);
  	var dataExtent = region.getBounds();
  	map.zoomToExtent(dataExtent);
	return linearRings.coords;
}

// ��Բ�㷨
  function  ArithmeticCircle(centerPointx, centerPointy, radius) {
  	var point2Ds = [];
  	var countPoints = 40;
  	var earthRadius = 5192038.0;
  	var geoText=null;
  	var returnCoords = '',step=0,sx="",sy="";
  	var mapRadius = Angle(radius / earthRadius);
  	for ( var i = 0; i < 360; i+=(360/countPoints)) {
  		var radians = (i + 1) * Math.PI / 180;
  		var mapX = centerPointx + mapRadius * Math.cos(radians);
  		var mapY = centerPointy + mapRadius * Math.sin(radians);
  		var circlePoint = new SuperMap.Geometry.Point(mapX, mapY);
  		sx =step==0?mapX:sx;
  		sy =step==0?mapY:sy;
  		if(step==countPoints-1){
  			returnCoords += mapX+","+mapY+";"+sx+","+sy;
  		}else{
  			returnCoords += mapX+","+mapY+";";
  		}
  		if(i==0){
  			var textHtml = "<div style='background:url(images/slider.png) no-repeat;width:80px;text-algin:center;'>{0}</div>";
  			var text = radius>1000?(radius/1000)+"km":radius+"m";
  			//textHtml = textHtml.format(textHtml,[text]);
  		    geoText = new SuperMap.Geometry.GeoText(mapX, mapY,text);
  		};
  		step++;
  		point2Ds.push(circlePoint);
  	}
  	var linearRing = new SuperMap.Geometry.LinearRing(point2Ds);
  	linearRing.tip = geoText;
  	linearRing.coords = returnCoords;
  	return linearRing;
  }
  function Angle(d) {
  	return Math.abs(d * 180.0 / Math.PI);
  };