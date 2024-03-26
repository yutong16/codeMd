import '../css/swiper-bundle.min.css';
import '../css/common.css';
import '../css/curriculum.css';
$(function(){
	var sCurriculum = '';
	//请求课程列表数据
	$.ajax({
		url:"http://39.101.217.150:8075/course/list",
		data:{
			page:1,
			size:12
		},
		success:function(data){
			var records = data.data.records;
			console.log( records );
			$.each(records,function(index,item){
				sCurriculum+=`<div class="swiper-slide">
					<h2 class='title'>${item.name}</h2>
					<p class="explain">${item.contentName}</p>
					<p class='author'>讲师：${item.teacher}</p>
					<p class='time'>课程时间：${item.courseTime}</p>
					<p class='introduce'>${item.courseContent}</p>
					<a href='${item.courseUrl}' target='_blank'>
						<div class='study'></div>
					</a>
				</div>`;
			})
			$('#swiperWrapper').append(sCurriculum);
			//swiper部分
			var swiper = new Swiper('.swiper-container', {
				loop:true,
				slidesPerView: 4,
				spaceBetween: 30,
				effect : 'coverflow',
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
				},
			});
		}
	})
})