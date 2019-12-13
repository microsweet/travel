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
  <meta http-equiv="content-type" content="text/html;">
  <title>新乐文化旅游</title>
 
  <script type="text/javascript" src="jquery-easyui-1.3.6/jquery-1.9.1.js"charset="UTF-8"></script>
    <script type="text/javascript" src="jquery-easyui-1.3.6/jquery.easyui.min.js"charset="UTF-8"></script>
  <script type="text/javascript" src="js/function.js"charset="utf-8"></script>
  <script type="text/javascript" src="js/ajaxhelper.js"></script>
  <script type="text/javascript" src="js/browseradepter.js"></script>
  <script type="text/javascript" src="js/details.js"></script>
  <script type="text/javascript" src="js/bootstrap.min.js"></script>
  
  <link rel="stylesheet" href="jquery-easyui-1.3.6/themes/default/easyui.css" type="text/css"></link>
  <link rel="stylesheet" href="jquery-easyui-1.3.6/themes/icon.css" type="text/css"></link>
  <link rel="stylesheet" href="css/bootstrap.min.css" type="text/css"></link>
  <link rel="stylesheet" href="css/details.css" type="text/css"></link>
  <link rel="stylesheet" href="css/land.css" type="text/css"></link>
  <link rel="stylesheet" href="css/home.css" type="text/css"></link>
  <script type="text/javascript" src="jquery-easyui-1.3.6/locale/easyui-lang-zh_CN.js"charset="UTF-8"></script>
  <link rel="stylesheet" href="css/frame.css" type="text/css"></link>

</head>
  
  
<body id="jingxingtravellayout">
     <!--  <div data-options="region:'north',title:'',split:false" style="height:100px;background-image:url('');overflow:hidden">
            
      </div>
 -->
      <div data-options="region:'center',split:true,title:''" >   
 
				
				
			     
			      
					<div id="containerHolder">
						<div id="container">
						 
						 <div id="viewName">
						<span><img src="images/land/logo.jpg" /></span>
						<h1></h1>
						 </div>
		<div class="navbar">
			<div class="navbar-inner">


				<ul class="mainNav">

					<li class="menuBtn">
								<a  href="javascript:void(0)"onclick="document.getElementById('introduction1').scrollIntoView();">交通指南</a>
					</li>
					<li class="menuBtn">
							<a href="javascript:void(0)"onclick="document.getElementById('introduction2').scrollIntoView();">景点简介</a>
					</li>
					<li class="menuBtn">
							<a  href="javascript:void(0)"onclick="document.getElementById('introduction3').scrollIntoView();">主要景点</a>
					</li>
					<li class="menuBtn">
							<a href="javascript:void(0)"onclick="document.getElementById('introduction4').scrollIntoView();">其他</a>
					</li>
					

				</ul>



			</div>
			<!-- /.container-fluid -->
		</div>
					<div></div>
					
					
           	<div id="carousel">
			<div id="myCarousel" class="carousel slide" >

				<!-- 根据传入的参数（图片数量）值，确定要现实的图片的数量 -->
				<!-- 显示轮播指标 -->
				<ol id="carousel-sign" class="carousel-indicators">
				</ol>


				<!-- 显示轮播图片 -->
				<div class="carousel-inner" id="carousel-inner"></div>
				<!-- 轮播（Carousel）导航，点击切换图片 -->
				<!-- <a class="carousel-control left" href="#myCarousel"
					data-slide="prev">&lsaquo;</a> <a class="carousel-control right"
					href="#myCarousel" data-slide="next">&rsaquo;</a> -->

				<a class="carousel-control left" href="#myCarousel"
					data-slide="prev">&lsaquo;</a> <a class="carousel-control right"
					href="#myCarousel" data-slide="next">&rsaquo;</a>
			</div>
		</div>
					
							
							<div id="evaluateBox">						
							 				     
		                          <div id="evaluateBoxSub1">
		                          <br> <br>  井陉概述:<br><br>
		                          </div>
		                          <div id="evaluateBoxSub2">
		                              &nbsp&nbsp&nbsp&nbsp井陉县位于河北省西部边陲，冀晋结合部，太行山东麓，北邻平山县，
		                              东部和东南部与鹿泉、元氏、赞皇三县毗连，西部和西南部同山西省盂县、平定、昔阳三县接壤。井陉素有“太行八陉之第五陉，
		                              天下九塞之第六塞”之称乃冀通衢要冲，历代兵家必争之地，是冀晋陕三省物资交流集散地，年交易额高达10亿元，是华北西部军事、经济、文化重镇，
		                              驰名中外的韩信背水之战，著名的百团大战，井陉都是主战场。“井陉拉花”在中国举办的秧歌大赛中获四项大奖，并荣获国家级最高奖—群星奖金奖，
		                              被文化部命名为“中国民间艺术之乡”。
		                          </div>
		                     </div>
							<div id="introductionBox"><h2 style="background-image: url('images/land/sss11.jpg')">&nbsp&nbsp交通指南</h2>
							                            <div id="introduction1"></div>
							                         <h2 style="background-image: url('images/land/sss11.jpg')">&nbsp&nbsp景点简介</h2>
							                             <div id="introduction2"></div>
							                         <h2 style="background-image: url('images/land/sss11.jpg')">&nbsp&nbsp主要景点</h2>
							                             <div id="introduction3"></div>
							                         <h2 style="background-image: url('images/land/sss11.jpg')">&nbsp&nbsp其他</h2>
							                             <div id="introduction4"></div>
							</div>
						</div>
					</div>
				
			</div>
               
      
  </body>
</html>

