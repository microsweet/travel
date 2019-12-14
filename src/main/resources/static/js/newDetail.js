var type;
var localUrl;
$(function() {
	var thisURL = document.URL;
	localUrl = thisURL.split('?')[0];
	var num = thisURL.indexOf("&");
	if (num > 0) {
		var getval = thisURL.split('&')[1];
		type = getval.split("=")[1];
		var itemName = "";
		if (type == 0) {
			itmeName = "新乐市文化";
		} else if (type == 4) {
			itmeName = "景点介绍";
		} else {
			itmeName = "未知位置";
		}

		var end = localUrl.lastIndexOf("\/");
		localUrl = localUrl.substring(0, end);

		var html = '<a href="' + localUrl + '/NewList?type=' + type + '">'
				+ itmeName + '</a>'
		$("#itmeName").html("&nbsp;>&nbsp;" + html);
	}

})