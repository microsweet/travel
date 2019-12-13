<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>新乐文化旅游</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	  <script type="text/javascript" src="jquery-easyui-1.3.6/jquery-1.9.1.js"charset="UTF-8"></script>
    <script type="text/javascript" src="jquery-easyui-1.3.6/jquery.easyui.min.js"charset="UTF-8"></script>
  <script type="text/javascript" src="js/bootstrap.min.js"></script>
  	  <link rel="stylesheet" href="css/bootstrap.min.css" type="text/css"></link>
	  <link rel="stylesheet" href="css/home.css" type="text/css"></link>
	  <script type="text/javascript" src="js/home.js"></script>
  <link rel="stylesheet" href="jquery-easyui-1.3.6/themes/default/easyui.css" type="text/css"></link>
  <link rel="stylesheet" href="jquery-easyui-1.3.6/themes/icon.css" type="text/css"></link>
  <script type="text/javascript" src="jquery-easyui-1.3.6/locale/easyui-lang-zh_CN.js"charset="UTF-8"></script>

	  </head>
  
  <body>
      <div data-options="region:'north',title:'',split:false" style="height:150px;background-image:url('images/land/tian.jpg');overflow:hidden">
           <div >
            <img id="logo1" src="images/land/jx.png;"style="height:120px;width:575px;">
           </div>
      </div>
  		<div data-options="region:'center',split:true,title:''" >  
  		   <div id="tob1" style="background-image: url('images/mapview/bg.png');height:50px">
				<ul class="mainNav1">
					
					<li class="menuBtn1">
						<a href="home.jsp;"onmousedown="window.open('jiemian.jsp');">景点地图浏览</a>
					</li>
					<li class="menuBtn1">
						<a href="home.jsp;"onmousedown="window.open('details.jsp?ID=1');">苍岩山</a>
					</li>
					<li class="menuBtn1">
						<a href="home.jsp;"onmousedown="window.open('details.jsp?ID=2');">锦山</a>
					</li>
					<li class="menuBtn1">
						<a href="home.jsp;"onmousedown="window.open('details.jsp?ID=3');">秦皇古驿道</a>
					</li>
					<li class="menuBtn1">
						<a href="home.jsp;"onmousedown="window.open('details.jsp?ID=4');">石头村</a>
					</li>
					<li class="menuBtn1">
						<a href="home.jsp;"onmousedown="window.open('details.jsp?ID=5');">仙台山</a>
					</li>
				</ul>
  		   </div>
  		<div></div>
				<div id="container1">	
					
           	<div id="carousel">
			<div id="myCarousel1" class="carousel slide" >

				<!-- 根据传入的参数（图片数量）值，确定要现实的图片的数量 -->
				<!-- 显示轮播指标 -->
				<ol id="carousel-sign" class="carousel-indicators">
				</ol>


				<!-- 显示轮播图片 -->
				<div class="carousel-inner" id="carousel-inner"></div>
				<!-- 轮播（Carousel）导航，点击切换图片 -->
				<!-- <a class="carousel-control left" href="#myCarousel1"
					data-slide="prev">&lsaquo;</a> <a class="carousel-control right"
					href="#myCarousel1" data-slide="next">&rsaquo;</a> -->

				<a class="carousel-control left" href="#myCarousel1"
					data-slide="prev">&lsaquo;</a> <a class="carousel-control right"
					href="#myCarousel1" data-slide="next">&rsaquo;</a>
			</div>
		</div>
		<div>
		&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp井陉地处冀晋结合部，距省会石家庄30公里，距首都北京300公里。素有“太行八陉之第五陉，天下九塞之第六塞”之称乃冀通衢要冲，历代兵家必争之地。
         井陉名胜古迹众多，境内有驰名中外的国家级风景名胜区苍岩山，黄栌遍野的仙台山，不是香山胜似香山，红叶面积达40多平方公里，素有小泰山之称的挂云山，怪石林立，临其顶，朝日出，午云海，晚彩霞，尽收眼底；
         秦皇古驿道，实属世界罕见，车辙至今尚存。此外，背水古战场、宋代古城、宋金壁画墓群、千佛岩石雕等数不胜数的自然、人文景观构成了风格各异、兼具古今的旅游特色。	
		</div>
		<div>
			<!-- <img id="zhuangshi" src="images/zhuangshi/hua1.jpg"> -->
			<img id="zi" style="height:62px;width:1000px;"src="images/zhuangshi/welcomLHblue.png">
			<!-- <img id="zhuangshi1" src="images/zhuangshi/hua.jpg">-->
		</div>
		<div id="feilei">
					<img id="fenleis1" onclick="jingdian()"  src="images/zhuangshi/fenlei1.jpg">
					<img id="fenleis2" onclick="lianjie()"src="images/zhuangshi/fenlei2.jpg">
		</div>
		<div id="cangyanshan">
		<img id="moreImg" src="images/zhuangshi/lianjiebg-cys.png"/>
			<div>
			   
				 <div id="moreclass_leftlianjie">
                    <ul id="Attractionsleft">
						<li class="cangyanshan"><a href="javascript:void(0)" onclick="cangyanshan()"><img src="images/zhuangshi/cangyanshan.png"border="0"></li>
						<li class="jinshan"><a href="javascript:void(0)" onclick="jinshan()"><img src="images/zhuangshi/jinshan.png"border="0"></li>
						<li class="qinhuangguyidao"><a href="javascript:void(0)" onclick="qinhuangguyidao()"><img src="images/zhuangshi/qinhuangguyidao.png"border="0"></li>
						<li class="shitoucun"><a href="javascript:void(0)" onclick="shitoucun()"><img src="images/zhuangshi/shitoucun.png"border="0"></li>
						<li class="xiantaishan"><a href="javascript:void(0)" onclick="xiantaishan()"><img src="images/zhuangshi/xiantaishan.png"border="0"></li>
						<li class="xiangqing"><a href="javascript:void(0)" onclick="xiangqing()"><img src="images/zhuangshi/xiangqing.png"border="0"></li>
					</ul>
				</div>
			</div>
		</div>
		<div id="jinshan">
		<img id="moreImg" src="images/zhuangshi/lianjiebg-js.png"/>
			<div>
			    
				 <div id="moreclass_leftlianjie">
                    <ul id="Attractionsleft">
						<li class="cangyanshan"><a href="javascript:void(0)" onclick="cangyanshan()"><img src="images/zhuangshi/cangyanshan.png"border="0"></li>
						<li class="jinshan"><a href="javascript:void(0)" onclick="jinshan()"><img src="images/zhuangshi/jinshan.png"border="0"></li>
						<li class="qinhuangguyidao"><a href="javascript:void(0)" onclick="qinhuangguyidao()"><img src="images/zhuangshi/qinhuangguyidao.png"border="0"></li>
						<li class="shitoucun"><a href="javascript:void(0)" onclick="shitoucun()"><img src="images/zhuangshi/shitoucun.png"border="0"></li>
						<li class="xiantaishan"><a href="javascript:void(0)" onclick="xiantaishan()"><img src="images/zhuangshi/xiantaishan.png"border="0"></li>
						<li class="xiangqing"><a href="javascript:void(0)" onclick="xiangqing()"><img src="images/zhuangshi/xiangqing.png"border="0"></li>
					</ul>
				</div>
			</div>
		</div>
		<div id="qinhuangguyidao">
		<img id="moreImg" src="images/zhuangshi/lianjiebg-qhgyd.png"/>
			<div>
			   
				 <div id="moreclass_leftlianjie">
                    <ul id="Attractionsleft">
						<li class="cangyanshan"><a href="javascript:void(0)" onclick="cangyanshan()"><img src="images/zhuangshi/cangyanshan.png"border="0"></li>
						<li class="jinshan"><a href="javascript:void(0)" onclick="jinshan()"><img src="images/zhuangshi/jinshan.png"border="0"></li>
						<li class="qinhuangguyidao"><a href="javascript:void(0)" onclick="qinhuangguyidao()"><img src="images/zhuangshi/qinhuangguyidao.png"border="0"></li>
						<li class="shitoucun"><a href="javascript:void(0)" onclick="shitoucun()"><img src="images/zhuangshi/shitoucun.png"border="0"></li>
						<li class="xiantaishan"><a href="javascript:void(0)" onclick="xiantaishan()"><img src="images/zhuangshi/xiantaishan.png"border="0"></li>
						<li class="xiangqing"><a href="javascript:void(0)" onclick="xiangqing()"><img src="images/zhuangshi/xiangqing.png"border="0"></li>
					</ul>
				</div>
			</div>
		</div>
		<div id="shitoucun">
		<img id="moreImg" src="images/zhuangshi/lianjiebg-stc.png"/>
			<div>
			   
				 <div id="moreclass_leftlianjie">
                    <ul id="Attractionsleft">
						<li class="cangyanshan"><a href="javascript:void(0)" onclick="cangyanshan()"><img src="images/zhuangshi/cangyanshan.png"border="0"></li>
						<li class="jinshan"><a href="javascript:void(0)" onclick="jinshan()"><img src="images/zhuangshi/jinshan.png"border="0"></li>
						<li class="qinhuangguyidao"><a href="javascript:void(0)" onclick="qinhuangguyidao()"><img src="images/zhuangshi/qinhuangguyidao.png"border="0"></li>
						<li class="shitoucun"><a href="javascript:void(0)" onclick="shitoucun()"><img src="images/zhuangshi/shitoucun.png"border="0"></li>
						<li class="xiantaishan"><a href="javascript:void(0)" onclick="xiantaishan()"><img src="images/zhuangshi/xiantaishan.png"border="0"></li>
						<li class="xiangqing"><a href="javascript:void(0)" onclick="xiangqing()"><img src="images/zhuangshi/xiangqing.png"border="0"></li>
					</ul>
				</div>
			</div>
		</div>
		<div id="xiantaishan">
		<img id="moreImg" src="images/zhuangshi/lianjiebg-xts.png"/>
			<div>
			   
				 <div id="moreclass_leftlianjie">
                    <ul id="Attractionsleft">
						<li class="cangyanshan"><a href="javascript:void(0)" onclick="cangyanshan()"><img src="images/zhuangshi/cangyanshan.png"border="0"></li>
						<li class="jinshan"><a href="javascript:void(0)" onclick="jinshan()"><img src="images/zhuangshi/jinshan.png"border="0"></li>
						<li class="qinhuangguyidao"><a href="javascript:void(0)" onclick="qinhuangguyidao()"><img src="images/zhuangshi/qinhuangguyidao.png"border="0"></li>
						<li class="shitoucun"><a href="javascript:void(0)" onclick="shitoucun()"><img src="images/zhuangshi/shitoucun.png"border="0"></li>
						<li class="xiantaishan"><a href="javascript:void(0)" onclick="xiantaishan()"><img src="images/zhuangshi/xiantaishan.png"border="0"></li>
						<li class="xiangqing"><a href="javascript:void(0)" onclick="xiangqing()"><img src="images/zhuangshi/xiangqing.png"border="0"></li>
					</ul>
				</div>
			</div>
		</div>
		<div id="lianjie">
		<img id="moreImg" style="cursor:default;"src="images/zhuangshi/lianjiebg-lianjie.png"/>
			<div>

				<div id="moreclass_rightlianjie">
                          <ul id="moreclass_lianjie">
						        <li class="lj1"><a style="cursor:pointer;" href="javascript:void(0)" onclick="window.open('http://hebeitour.com.cn/')"><img src="images/zhuangshi/lianjie-1.png"border="0"></li>
						        <li class="lj2"><a style="cursor:pointer;" href="javascript:void(0)" onclick="window.open('http://www.sjztour.gov.cn/')"><img src="images/zhuangshi/lianjie-2.png"border="0"></li>
								<li class="lj3"><a style="cursor:pointer;" href="javascript:void(0)" onclick="window.open('http://www.sjzjx.gov.cn/')"><img src="images/zhuangshi/lianjie-3.png"border="0"></li>
								<li class="lj4"><a style="cursor:pointer;" href="javascript:void(0)" onclick="window.open('http://www.cntour2.com/knowledge/more.jsp?class=551')"><img src="images/zhuangshi/lianjie-4.png"border="0"></li>
								<li class="lj5"><a style="cursor:pointer;" href="javascript:void(0)" onclick="window.open('http://www.weather.com.cn/weather/101090102.shtml')"><img src="images/zhuangshi/lianjie-5.png"border="0"></li>
						 </ul>                                       
			</div>
			
		</div>
		
		</div>
		
					
           
           
        </div>			
        
  </body>
</html>
