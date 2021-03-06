$(function() {
	$(".select3").uedSelect({
		width : 100
	});
	findArticle();
});

function toPage(type) {
	var page = parseInt($("#page").val());
	var limit = parseInt($("#limit").val());
	var total = parseInt($("#total").val());
	var tailPage = Math.ceil(total/limit);
	if(type==1){
		//首页
		$("#page").val(1);
		
	}else if(type==2){
		//上一页
		if(page==1){
			$("#page").val(1);
		}else{
			$("#page").val(page-1);
		}
		
	}else if(type==3){
		//下一页
		if(page==tailPage){
			$("#page").val(tailPage);
		}else{
			$("#page").val(page+1);
		}
		
	}else if(type==4){
		//尾页
		$("#page").val(tailPage);
		
	}else{
		
	}
}

function findArticle(){
	$.ajax({
		url: '/admin/findArticle',
		dataType: 'json',
		type: 'post',
		data: $("#searchForm").serialize(),
		success: function(data){
			insertTable(data.list);
			$("#totalView").html(data.total);
			$("#total").val(data.total);
			$("#pageView").html(data.page);
		},
		error: function(data){}
	});
}

function insertTable(rows){
	var html = '';
	for(var i=0; i<rows.length; i++){
		if(i%2!=0){
			html += '<tr class="odd">'
				 +'<td>'+rows[i].title+'</td>'
				 +'<td>'+rows[i].createDate+'</td>'
				 +'<td>'+rows[i].newTypeName+'</td>'
				 +'<td>'
				 +'<a href="/admin/form/view?id=' + rows[i].id + '" class="tablelink">查看</a>'
				 +'<a href="/admin/form/edit?id=' + rows[i].id + '" class="tablelink"> 编辑</a>'
				 +'<a onclick="deleteArticle(\'' + rows[i].id + '\')" class="tablelink" style="cursor: pointer;"> 删除</a>'
				 +'</td>'
				 +'</tr>';	
		}else{
			html += '<tr>'
				 +'<td>'+rows[i].title+'</td>'
				 +'<td>'+rows[i].createDate+'</td>'
				 +'<td>'+rows[i].newTypeName+'</td>'
				 +'<td>'
				 +'<a href="/admin/form/view?id=' + rows[i].id + '" class="tablelink">查看</a>'
				 +'<a href="/admin/form/edit?id=' + rows[i].id + '" class="tablelink"> 编辑</a>'
				 +'<a onclick="deleteArticle(\'' + rows[i].id + '\')" class="tablelink" style="cursor: pointer;"> 删除</a>'
				 +'</td>'
				 +'</tr>';	
		}
		
	}
	$(".tablelist tbody").html(html);
	
}


function deleteArticle(id){
	$.ajax({
		url: '/admin/deleteArticle',
		type: 'post',
		dataType: 'json',
		data: {id: id},
		success: function(data){
			if(data){
				window.location.href='/admin/right';
			}
		},
		error: function(data){}
	});	
}
