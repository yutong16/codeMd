import '../css/swiper-bundle.min.css';
import '../css/animate.css'
import '../css/common.css'
import '../css/style.css'

$(function(){

	var sBanner='',
		sPlanList='',
		sPlanPage1='',
		sPlanPage2='';
	
	//请求banner的数据
	$.ajax({
		url:'http://39.101.217.150:8075/banner/list',
		type:'POST',
		success:function(data){
			var datas = data.data;
			$.each(datas,function(index,item){
				sBanner += `<div class="swiper-slide">
					<img src="${item.url}">
				</div>`
			})
			$('#swiperWrapper').append(sBanner);
			//swiper代码
			var mySwiper = new Swiper ('.swiper-container', {
				loop: true, // 循环模式选项
				effect : 'cube',//切换效果
			});
		}
	})
	
	//请求开班计划数据
	$.ajax({
		url:'http://39.101.217.150:8075/classplan/list',
		data:{
			page:1,
			size:3
		},
		success:function(data){
			var records = data.data.records;
			$.each(records,function(index,item){
				sPlanList+=`<li>
					<div><img src="${item.imgurl}"></div>
					<h3>${item.name}</h3>
					<p class='crowd'>${item.mainName}</p>
					<p class='time'>开班时间：${item.classTime}</p>
					<div class='consultation'><a href="javascript:;">立即抢座</a></div>
				</li>`;
			})
			$('#planList').append(sPlanList);
		}
	})
	
	//请求企业项目 page1
	$.ajax({
		url:'http://39.101.217.150:8075/apps/list',
		data:{
			page:1,
			size:3
		},
		success:function(data){
			var records = data.data.records
			$.each(records,function(index,item){
				sPlanPage1+=`<li>
					<a href='${item.appurl}' target='_blank'>
						<div><img src="${item.imgurl}"></div>
						<h3>${item.appName}</h3>
						<div class='plan-original'>
							<span class='original'>原创</span>
							<i class='icon i0'></i>
							<span>${item.appTime}</span>
						</div>
					</a>	
				</li>`;
			})
			$('#planPage1').append(sPlanPage1);
		}
	})
	
	//请求企业项目 page2
	$.ajax({
		url:'http://39.101.217.150:8075/apps/list',
		data:{
			page:2,
			size:3
		},
		success:function(data){
			var records = data.data.records
			$.each(records,function(index,item){
				sPlanPage2+=`<li>
					<a href='${item.appurl}' target='_blank'>
						<div><img src="${item.imgurl}"></div>
						<h3>${item.appName}</h3>
						<div class='plan-original'>
							<span class='original'>原创</span>
							<i class='icon i0'></i>
							<span>${item.appTime}</span>
						</div>
					</a>	
				</li>`;
			})
			$('#planPage2').append(sPlanPage2);
		}
	})
	
	//点击版权声明弹出，弹出层
	$("#copyright").click(function(){
		$('#myModal').popup();
	})
	
})