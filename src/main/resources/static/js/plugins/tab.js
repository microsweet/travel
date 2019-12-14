$(function(){
 var intervalID;
var curLi;
$(".ppzs_f li a").mouseover(function(){
curLi=$(this);
intervalID=setInterval(onMouseOver,250);//鼠标移入的时候有一定的延时才会切换到所在项，防止用户不经意的操作
});
function onMouseOver(){
$(".cur-sub-con").removeClass("cur-sub-con");
$(".sub-con").eq($(".ppzs_f li a").index(curLi)).addClass("cur-sub-con");
$(".cur").removeClass("cur");
curLi.addClass("cur");
}
$(".ppzs_f li a").mouseout(function(){
clearInterval(intervalID);
});

$(".ppzs_f li a").click(function(){//鼠标点击也可以切换
clearInterval(intervalID);
$(".cur-sub-con").removeClass("cur-sub-con");
$(".sub-con").eq($(".ppzs_f li a").index(curLi)).addClass("cur-sub-con");
$(".cur").removeClass("cur");
curLi.addClass("cur");
});

});