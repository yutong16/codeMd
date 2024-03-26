import '../css/common.css';
import '../css/about.css'
$(function(){
	var sHtml = '';
	$.ajax({
		url:'http://39.101.217.150:8075/teachers/list',
		data:{
			page:1,
			size:10
		},
		success:function(data){
			var records = data.data.records;
			console.log(  records  )
			$.each(records,function(index,item){
				sHtml+=`<li class='u-clearfix'>
					<div class='u-l lecturer-img'><img src="${item.imgurl}"></div>
					<div class='lecturer-txt'>
						<h2>${item.name}</h2>
						<p class='lecturer-it'>${item.experience}</p>
						<p>${item.content}</p>
					</div>
				</li>`;
			})
			$('#lecturerUl').append( sHtml );
		}
	})
})