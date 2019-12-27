
/*下拉改变事件*/
function change(a) {
	var i = document.getElementById("wzlx").value;
	if (i == "4") {
		document.getElementById("zb").style.display = "";

	} else {
		document.getElementById("zb").style.display = "none";
	}
}
/*对seect赋值选择项*/
$(function() {
	$(".select1").uedSelect({
		width : 345
	});
	initEditor();
	setIfEdit();
});

function setIfEdit(){
	var type = $("#formType").val();
	if(type=="view"){
		$("#title").attr("disabled", true);
		$("#newType").attr("disabled", true);
		$('#content').summernote('disable');
		$('#viewPicBtn').css('display', 'none');
		
	}else{
		
	}
	
}
$("#usual1 ul").idTabs();

function initEditor(){
	$('#content').summernote({
		  height: 300,                 // set editor height
		  minHeight: null,             // set minimum height of editor
		  maxHeight: null,             // set maximum height of editor
		  focus: true,                  // set focus to editable area after initializing summernote
		  lang: 'zh-CN'
	});
	var notice = $('#notice').val()
	//$('#content').summernote('pasteHTML', notice.substr(3, notice.length-7));
	$('#content').summernote('code', notice);
}

function saveArticle(){
	var id = $('#id').val();
	var title = $("#title").val();
	var newType = $("#newType").val();
	var notice = $("#content").summernote("code");
	var viewPic = $("#viewPic").val();
	$.ajax({
		url: '/admin/saveArticle',
		type: 'post',
		dataType: 'json',
		data: {id: id, title: title, newType: newType,viewPic: viewPic, notice: notice},
		success: function(data){
			if(data){
				window.location.href='/admin/right';
			}
		},
		error: function(data){}
	});
}

function change (obj) {
    if (!obj.files.length) return;
    if (obj.files.length > 1) {
        alert("只允许上传一张图片!");
        return;
    }

    var file = obj.files[0];

    var reader = new FileReader();
    reader.onload = function () {
        var result = this.result;    //data:base64      
        $("#viewPic").val(result);
        $("#viewPicShow").html('<img style="weight: 100px;" src="'+result+'" >')
    };
    reader.readAsDataURL(file);
}