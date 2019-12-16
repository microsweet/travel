$(document).ready(function(e) {
	$(".select1").uedSelect({
		width : 345
	});
	$(".select2").uedSelect({
		width : 167
	});
	$(".select3").uedSelect({
		width : 100
	});
});

$(document).ready(function() {
	$(".click").click(function() {
		$(".tip").fadeIn(200);
	});

	$(".tiptop a").click(function() {
		$(".tip").fadeOut(200);
	});

	$(".sure").click(function() {
		$(".tip").fadeOut(100);
	});

	$(".cancel").click(function() {
		$(".tip").fadeOut(100);
	});

});
/*对seect赋值选择项*/
$(function() {
	//默认被选中的Option
	var val = $("#select_wzlx").val();
	if (val != null && val != "") {
		$("#wzlx").val(val);
	}
});

function toPage(curPage) {
	window.location = "${pageContext.request.contextPath}/admin/right?curPage="
			+ curPage;
}

$('.tablelist tbody tr:odd').addClass('odd');