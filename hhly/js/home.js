$(function() {
var picNum=6;
	if (picNum != 0) {
		//var files = fileLocation.split(";");// �ָ��ַ������õ�ÿ��ͼƬ��·��
		// ͼƬ�ֲ�

		// ����ֲ�ָ�꣨��һ��������ӣ�����ѭ����ӣ�
		$("#carousel-sign").empty();// ���Ԫ��ǰ����Ҫ��ո�Ԫ��
		$("#carousel-sign")
		.append(
				"<li data-target='#myCarousel1' data-slide-to='0' class='active'></li>");// ��һ��
	// ����
		for ( var i = 0; i < picNum-1; i++) {
			$("#carousel-sign").append(
					"<li data-target='#myCarousel1' data-slide-to="
							+ (i + 1) + "></li>");
		}

		// ����ֲ�ͼƬ
		$("#carousel-inner").empty();// ���Ԫ��ǰ����Ҫ��ո�Ԫ��
		
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
		$("#carousel-sign").empty();// ���Ԫ��ǰ����Ҫ��ո�Ԫ��
		$("#carousel-sign")
				.append(
						"<li data-target='#myCarousel1' data-slide-to='0' class='active'></li>");

		$("#carousel-inner").empty();// ���Ԫ��ǰ����Ҫ��ո�Ԫ��
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






