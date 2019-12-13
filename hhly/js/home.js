$(function() {
var picNum=6;
	if (picNum != 0) {
		//var files = fileLocation.split(";");// 分割字符串，得到每个图片的路径
		// 图片轮播

		// 添加轮播指标（第一个单独添加，其他循环添加）
		$("#carousel-sign").empty();// 添加元素前首先要清空父元素
		$("#carousel-sign")
		.append(
				"<li data-target='#myCarousel1' data-slide-to='0' class='active'></li>");// 第一个
	// 其它
		for ( var i = 0; i < picNum-1; i++) {
			$("#carousel-sign").append(
					"<li data-target='#myCarousel1' data-slide-to="
							+ (i + 1) + "></li>");
		}

		// 添加轮播图片
		$("#carousel-inner").empty();// 添加元素前首先要清空父元素
		
		$("#carousel-inner")
	.append(
	"<div class='item active'><img class='carousel-inner img-responsive img-rounded' src='images/JXjingdian-img/jx-"+1+".JPG'"
	+ " alt='1'><div class='carousel-caption'>"+1+"</div></div>");
		for ( var i = 1; i < picNum; i++) {
			var j=i+1;
			$("#carousel-inner")
					.append(
							"<div class='item'><img class='carousel-inner img-responsive img-rounded' src='images/JXjingdian-img/jx-"+j+".JPG'"
									+ " alt="+j+"><div class='carousel-caption'>"+j+"</div></div>");

		}
		$('#myCarousel1').carousel({
			  interval: 3000
			});

	} else {
		$("#carousel-sign").empty();// 添加元素前首先要清空父元素
		$("#carousel-sign")
				.append(
						"<li data-target='#myCarousel1' data-slide-to='0' class='active'></li>");

		$("#carousel-inner").empty();// 添加元素前首先要清空父元素
		$("#carousel-inner")
				.append(
						"<div class='item active'><img class='carousel-inner img-responsive img-rounded' src='images/nopicc.jpg' alt='1'><div class='carousel-caption'></div></div>");
		
	}

});
var id=1;
function jingdian(){
	$("#lianjie").hide();
	$("#cangyanshan").show();
	$("#jinshan").hide();
	$("#qinhuangguyidao").hide();
	$("#shitoucun").hide();
	$("#xiantaishan").hide();
	id=1;
}
function lianjie(){
	$("#cangyanshan").hide();
	$("#jinshan").hide();
	$("#qinhuangguyidao").hide();
	$("#shitoucun").hide();
	$("#xiantaishan").hide();
	$("#lianjie").show();
}
function cangyanshan(){
	$("#lianjie").hide();
	$("#cangyanshan").show();
	$("#jinshan").hide();
	$("#qinhuangguyidao").hide();
	$("#shitoucun").hide();
	$("#xiantaishan").hide();
	id=1;
}
function jinshan(){
	$("#lianjie").hide();
	$("#cangyanshan").hide();
	$("#jinshan").show();
	$("#qinhuangguyidao").hide();
	$("#shitoucun").hide();
	$("#xiantaishan").hide();
	id=2;
}
function qinhuangguyidao(){
	$("#lianjie").hide();
	$("#cangyanshan").hide();
	$("#jinshan").hide();
	$("#qinhuangguyidao").show();
	$("#shitoucun").hide();
	$("#xiantaishan").hide();
	id=3;
}
function shitoucun(){
	$("#lianjie").hide();
	$("#cangyanshan").hide();
	$("#jinshan").hide();
	$("#qinhuangguyidao").hide();
	$("#shitoucun").show();
	$("#xiantaishan").hide();
	id=4;
}
function xiantaishan(){
	$("#lianjie").hide();
	$("#cangyanshan").hide();
	$("#jinshan").hide();
	$("#qinhuangguyidao").hide();
	$("#shitoucun").hide();
	$("#xiantaishan").show();
	id=5;
}
function xiangqing(){
	if(id==1){
		window.open('details.jsp?ID=1');
	}
	else if(id==2){
		window.open('details.jsp?ID=2');
	}
	else if(id==3){
		window.open('details.jsp?ID=3');
	}
	else if(id==4){
		window.open('details.jsp?ID=4');
	}
	else if(id==5){
		window.open('details.jsp?ID=5');
	}
}






