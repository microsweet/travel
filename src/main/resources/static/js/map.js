var map, img, layer, village, yingxiangUrl, shiliangUrl, cunjie 


function init() {
	console.log(yingxiangUrl)
	// 初始化地图
	map = new SuperMap.Map("map", {
		controls : [ new SuperMap.Control.Navigation(),
					 new SuperMap.Control.LayerSwitcher(),
					 new SuperMap.Control.PanZoomBar() ],
		allOverlays : true
	});
	map.addControl(new SuperMap.Control.MousePosition());
	// 初始化图层
	img = new SuperMap.Layer.TiledDynamicRESTLayer("影像图", yingxiangUrl,
			null, {
				maxResolution : "auto"
			});
	// 监听图层信息加载完成事件
	img.events.on({
		"layerInitialized" : function() {
			layer = new SuperMap.Layer.TiledDynamicRESTLayer("矢量图", shiliangUrl
				, null, {
				maxResolution : "auto",
				visibility: false
			});
			layer.events.on({
				"layerInitialized" : function() {
					village = new SuperMap.Layer.TiledDynamicRESTLayer("村界",
							cunjieUrl, {
								transparent : true
							}, {
								maxResolution : "auto"
							});
					village.events.on({
						"layerInitialized" : addLayers
					});
				}
			})
		}
	});

}
// 异步加载图层
function addLayers() {
	map.addLayers([ img, layer, village ]);
	// 显示地图范围
	map.setCenter(new SuperMap.LonLat(116.71542, 38.04022), 3);
}

jQuery(function($) {
	yingxiangUrl = $("#yingxiang").val();
	shiliangUrl = $("#shiliang").val();
	cunjieUrl = $("#cunjie").val();
	
	init();
});