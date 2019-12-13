//loadmap.js

var map, layervec, markers, markers1, linelayer, shuLayer, select, vectorLayer, bt = false;
var drawSPoint,graphLayer;
var urlrest = "http://192.168.2.135:8090/services/iserver/Tile-1220/rest/maps/ShiLiangTu";
var urlShi = "http://192.168.2.135:8090/dfc/services/ogc/wmts/ShiLiangTu";
var urlShiZhu = "http://192.168.2.135:8090/dfc/services/ogc/wmts/ShiLiangTuZhuJi";
var urlYing = "http://192.168.2.135:8090/dfc/services/ogc/wmts/YingXiangTu";
var urlYingZhu = "http://192.168.2.135:8090/dfc/services/ogc/wmts/YingXiangTuZhuJi";
var url1 = "http://t0.tianditu.com/vec_c/wmts";
var url2 = "http://t0.tianditu.com/cva_c/wmts";
var url3 = "http://t0.tianditu.com/img_c/wmts";
var url4 = "http://t0.tianditu.com/cia_c/wmts";

//var ServerIP = "http://192.168.2.135:6070"; // 服务器端IP地址
var ServerIP = "http://192.168.2.135:8090"; // 服务器端IP地址
var SfsServerInterface = "/servicemanager/sfsproxy/1595?REQUEST=Filter&VERSION=1.0.0&FID=1786";// SFS服务filter调用信息
var SfsGetFeature = "/servicemanager/sfsproxy/1591?REQUEST=Filter&VERSION=1.0.0&FID=1786";// SFS服务中getfeature调用
// 服务接口
var ApplicationID = "http://192.168.2.135:8090";// 应用端IP
var Serverkey = "98bff9a15f50623d032944c799106cfc";
var BufferServer = "/services/spatialanalyst/bufferanalystservice?";
//var key = "c1e7b8ef52c3db3f984c397893538f8e";// 153对应的key
style = {
	strokeColor : "#304DBE",
	strokeWidth : 2,
	pointerEvents : "visiblePainted",
	fillColor : "#304DBE",
	fillOpacity : 0.8
};
function init() {

	var matrixIds = [];
	for ( var i = 0; i < 22; ++i) {
		matrixIds[i] = {
			identifier : i
		};
	}
	;
	// 当前图层的分辨率数组信息,和matrixIds一样，需要用户从wmts服务获取并明确设置,resolutions数组和matrixIds数组长度相同
	var resolutions = [ 1.40625, 0.7031249999999999936115128777990292,
			0.3515624999999999968057564388995146,
			0.1757812499999999984028782194497573,
			0.08789062500000014886216906166869328,
			0.04394531250000007443108453083434663,
			0.02197265625000000728339627502841039,
			0.01098632812500001860777113270858666,
			0.005493164062500009303885566354293329,
			0.002746582031250001658728184138270372,
			0.001373291015625000829364092069135186,
			0.0006866455078124989180747465151294470,
			0.0003433227539062494590373732575647235,
			0.0001716613769531250288401465326699910,
			0.00008583068847656251442007326633499548,
			0.00004291534423828140687076658511131235,
			0.00002145767211914064357109131177813033,
			0.00001072883605957030681947266069468370,
			0.000005364418029785168375809325541723313,
			0.000002682209014892578201475464693109072,
			0.000001341104507446289100737732346554536 ];
	// 1.40625,
	// 新建线矢量图层
	lineLayer = new SuperMap.Layer.Vector("lineLayer");
	// lineLayer.events.on({"layerInitialized":addLayer});
	lineLayer.style = style;
	// 新建面矢量图层
	polygonLayer = new SuperMap.Layer.Vector("polygonLayer");
	polygonLayer.style = style;
	// polygonLayer.events.on({"layerInitialized":addLayer});
	drawLine = new SuperMap.Control.DrawFeature(lineLayer,
			SuperMap.Handler.Path, {
				multi : true
			});

	drawPolygon = new SuperMap.Control.DrawFeature(polygonLayer,
			SuperMap.Handler.Polygon);
	/*点*/
	graphLayer = new SuperMap.Layer.Vector("graphLayer");
	
	drawSPoint = new SuperMap.Control.DrawFeature(graphLayer,
			SuperMap.Handler.Point,{ multi: true});
	
	/*
	 * 注册featureadded事件,触发drawCompleted()方法 例如注册"loadstart"事件的单独监听 events.on({
	 * "loadstart": loadStartListener });
	 */
	drawSPoint.events.on({
		"featureadded" : getPointInfo
	});
	
	drawLine.events.on({
		"featureadded" : drawCompletedline
	});// 事件在function.js中
	drawPolygon.events.on({
		"featureadded" : drawCompletedarea
	});// //事件在function.js中
	layerpolygon = new SuperMap.Layer.TiledDynamicRESTLayer("polygon", urlrest,
			{
				transparent : true,
				cacheEnabled : true
			}, {
				maxResolution : "auto"
			});
	layerline = new SuperMap.Layer.TiledDynamicRESTLayer("line", urlrest, {
		transparent : true,
		cacheEnabled : true
	}, {
		maxResolution : "auto"
	});
	
	layerpoint = new SuperMap.Layer.TiledDynamicRESTLayer("point", urlrest, {
		transparent : true,
		cacheEnabled : true
	}, {
		maxResolution : "auto"
	});
	// 创建地图控件

	map = new SuperMap.Map('map', {
		controls : [ new SuperMap.Control.Navigation({

			dragPanOptions : { // 传给 DragPan 控件的属性
				enableKinetic : true
			// 设置使用拖拽动画，默认为false
			},
			autoActivate : true, // 添加到地图的控件是否自动生效，默认为true
			documentDrag : true, // 允许拖拽地图，使地图能够平移到视图窗口外。默认为false
			handleRightClicks : true, // 是否响应右键点击，默认为false
			zoomBoxEnabled : false, // 是否允许用户绘制缩放框，默认为true
			// zoomWheelEnabled:false, //是否允许用户滑动鼠标滚轴缩放地图，默认为true
			pinchZoomOptions : { // 传给 PinchZoom 控件的属性
				autoActivate : true
			// 将该类添加到地图上时，自动激活该控件，默认为true
			}
		}),

		drawLine, drawPolygon ,drawSPoint]
	});
	
	
	
	
	dragPan = new SuperMap.Control.DragPan();
	// 当该属性为true，拖拽地图时，鼠标移动到地图可视区域外依然有效。默认为false
	dragPan.documentDrag = true;
	// 设置是否使用拖拽动画。默认为false，不使用动画
	dragPan.enableKinetic = true;
	// 执行动画的间隔，默认为10，单位是毫秒
	dragPan.kineticInterval = 20;
	map.addControl(dragPan);

	// 创建分块动态REST图层，});该图层显示iserver 7C 服务发布的地图,
	// 其中"world"为图层名称，url图层的服务地址，{transparent: true}设置到url的可选参数

	map.numZoomLevels = 20;
	map.allOverlays = true;
	// 比例尺
	var panzoombar = new SuperMap.Control.PanZoomBar(
			{
				forceFixedZoonLevel : false,
				showSlider : true,
				levelsDesc : {
					levels : [/* 1,4,8,12 */],
					imageSources : [/*
									 * 'iserver/theme/images/zoom_country.png',
									 * 'iserver/theme/images/zoom_province.png',
									 * 'iserver/theme/images/zoom_city.png',
									 * 'iserver/theme/images/zoom_street.png'
									 */]
				}
			});

	map.addControl(panzoombar, new SuperMap.Pixel(20, 0));
	map.addControl(new SuperMap.Control.ScaleLine());

	layerShi = new SuperMap.Layer.WMTS({
		name : "ShiLiangTu",
		url : urlShi,
		layer : "ShiLiangTu",
		style : "default",
		matrixSet : "CustomCRS4326ScaleShiLiangTu",
		format : "image/png",
		resolutions : resolutions,
		matrixIds : matrixIds,
		opacity : 1,
		requestEncoding : "KVP"
	});
	// layerShi.type="WMTSLayer";
	// layerShi.events.on({ "layerInitialized":addLayer });

	layerShiZhu = new SuperMap.Layer.WMTS({
		name : "ShiLiangTuZhuJi",
		url : urlShiZhu,
		layer : "ShiLiangTuZhuJi",
		style : "default",
		matrixSet : "CustomCRS4326ScaleShiLiangTuZhuJi",
		format : "image/png",
		resolutions : resolutions,
		matrixIds : matrixIds,
		opacity : 1,
		requestEncoding : "KVP"
	});

	layerYing = new SuperMap.Layer.WMTS({
		name : "YingXiangTu",
		url : urlYing,
		layer : "YingXiangTu",
		style : "default",
		matrixSet : "CustomCRS4326ScaleYingXiangTu",
		format : "image/png",
		resolutions : resolutions,
		matrixIds : matrixIds,
		opacity : 1,
		requestEncoding : "KVP"
	});
	// layerYing.type="WMTSLayer";
	// layerYing.events.on({ "layerInitialized":addLayer});

	layerYingZhu = new SuperMap.Layer.WMTS({
		name : "YingXiangTuZhuJi",
		url : urlYingZhu,
		layer : "YingXiangTuZhuJi",
		style : "default",
		matrixSet : "CustomCRS4326ScaleYingXiangTuZhuJi",
		format : "image/png",
		resolutions : resolutions,
		matrixIds : matrixIds,
		opacity : 1,
		requestEncoding : "KVP"
	});

	layervec = new SuperMap.Layer.WMTS({
		name : "矢量图",
		url : url1,
		layer : "vec",
		style : "default",
		matrixSet : "c",
		format : "tiles",
		resolutions : resolutions,
		matrixIds : matrixIds,
		opacity : 1,
		requestEncoding : "KVP"

	});

	layervec_a = new SuperMap.Layer.WMTS({
		name : "矢量图注记",
		url : url2,
		layer : "cva",
		style : "default",
		matrixSet : "c",
		format : "tiles",
		resolutions : resolutions,
		matrixIds : matrixIds,
		opacity : 1,
		requestEncoding : "KVP"

	});
	layerimg = new SuperMap.Layer.WMTS({
		name : "影像图",
		url : url3,
		layer : "img",
		style : "default",
		matrixSet : "c",
		format : "tiles",
		resolutions : resolutions,
		matrixIds : matrixIds,
		opacity : 1,
		requestEncoding : "KVP"

	});
	layerimg_a = new SuperMap.Layer.WMTS({
		name : "影像图注记",
		url : url4,
		layer : "cia",
		style : "default",
		matrixSet : "c",
		format : "tiles",
		resolutions : resolutions,
		matrixIds : matrixIds,
		opacity : 1,
		requestEncoding : "KVP"

	});

	markers = new SuperMap.Layer.Markers("Markers");
	markers1 = new SuperMap.Layer.Markers("Markers1");
	// map.addLayer(markers);

	vectorLayer = new SuperMap.Layer.Vector("queryKong");
	// select = new SuperMap.Control.SelectFeature(vectorLayer, {onSelect:
	// onFeatureSelect, onUnselect: onFeatureUnselect, repeat:true});
	// map.addControl(select);
	markerLayer = new SuperMap.Layer.Markers("Markers");
	// markerLayer.events.on({"layerInitialized":addLayer});

	shuLayer = new SuperMap.Layer.Vector("shuLayer");

	layerShi.isBaseLayer = true;
	layerYing.isBaseLayer = true;

	map.addLayers([ layervec, layervec_a, layerShi, layerShiZhu, markers,
			vectorLayer, markers1, layerpolygon, layerline, lineLayer,
			polygonLayer,graphLayer,layerpoint ]);

	map.setCenter(new SuperMap.LonLat(114.20, 38.03), 10);

}

/* 注册鼠标点击事件 */

/* end */
