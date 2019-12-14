var jingxingtravellayout;
$(function(){
jingxingtravellayout=$('#jingxingtravellayout').layout();
 }); 






$(function() {
	var args = getQueryStringArgs();
	var id = args["ID"];
	var ContainerHeight=document.body.clientHeight-94;
	$("#container").height(ContainerHeight);
	loadPage(id);
	

});

function getQueryStringArgs() {
	var qs = (location.search.length > 0 ? location.search.substring(1) : ""), args = {}, items = qs.length ? qs
			.split("$")
			: [], item = null, name = null, value = null, i = 0, len = items.length;
	for (i = 0; i < len; i++) {
		item = items[i].split("=");
		name = decodeURIComponent(item[0]);
		value = decodeURIComponent(item[1]);
		if (name.length) {
			args[name] = value;
		}
	} 
	return args;
}


function loadPage(id) {
	var aj = $
			.ajax({
				url : "DetailsServlet.do",
				type : "post",
				dataType : 'json',
				data : {
					ID : id
				},
				// 获取数据库中的数据，动态显示在页面上
				success : function(data) {

					picNum = data.PICNUM;// 获取图片数量
					picture = data.FILELOCATION;// 获取图片存储位置
					htmlShow(data);
					//imgAnimated();
					introductionBox(data);

				}});
}
function htmlShow(data){
	$("#viewName h1").text(data.NAME);

if (picNum != 0) {
	//var files = fileLocation.split(";");// 分割字符串，得到每个图片的路径
	// 图片轮播

	// 添加轮播指标（第一个单独添加，其他循环添加）
	$("#carousel-sign").empty();// 添加元素前首先要清空父元素
	$("#carousel-sign")
	.append(
			"<li data-target='#myCarousel' data-slide-to='0' class='active'></li>");// 第一个
// 其它
	for ( var i = 0; i < picNum-1; i++) {
		$("#carousel-sign").append(
				"<li data-target='#myCarousel' data-slide-to="
						+ (i + 1) + "></li>");
	}

	// 添加轮播图片
	$("#carousel-inner").empty();// 添加元素前首先要清空父元素
	
	$("#carousel-inner")
.append(
"<div class='item active'><img class='carousel-inner img-responsive img-rounded' src='images/JXjingdian-img/"+picture+"-"+1+".jpg'"
+ " alt='1'><div class='carousel-caption'>"+1+"</div></div>");
	for ( var i = 1; i < picNum; i++) {
		var j=i+1;
		$("#carousel-inner")
				.append(
						"<div class='item'><img class='carousel-inner img-responsive img-rounded' src='images/JXjingdian-img/"+picture+"-"+j+".jpg'"
								+ " alt="+j+"><div class='carousel-caption'>"+j+"</div></div>");

	}
	$('#myCarousel').carousel({
		  interval: 2000
		});


} else {
	$("#carousel-sign").empty();// 添加元素前首先要清空父元素
	$("#carousel-sign")
			.append(
					"<li data-target='#myCarousel' data-slide-to='0' class='active'></li>");

	$("#carousel-inner").empty();// 添加元素前首先要清空父元素
	$("#carousel-inner")
			.append(
					"<div class='item active'><img class='carousel-inner img-responsive img-rounded' src='images/nopicc.jpg' alt='1'><div class='carousel-caption'></div></div>");
	
}

}


//显示介绍html
function introductionBox(data){
	$("#introduction2").text(data.BASICSITUATION);
	$("#introduction3").text(data.MAINPOINT);
	$("#introduction1").text(data.TRAFFIC);
	$("#introduction4").text(data.OTHERS);
}

//点击地图菜单时候，链接到地图页面，并搜索到该景点
function mapClick()
{
	var mapUrl="jiemian.jsp?ID="+id;
	window.open( mapUrl);
}