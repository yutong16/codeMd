import '../css/common.css';
import '../css/student.css';
$(function(){
	var sHtml = '',
		page = 1,
		parentId = '',
		minStr = '',
		maxStr = '';
	function fAjax(pages,minSalary,maxSalary,minAge,maxAge){
		$.ajax({
			url:'http://39.101.217.150:8075/jobs/list',
			data:{
				page:pages,
				size:12,
				salary1:minSalary,
				salary2:maxSalary,
				age1:minAge,
				age2:maxAge
			},
			success:function(data){
				var records = data.data.records;
				if( records.length  ){
					$.each(records,function(index,item){
						sHtml+=`<li class='u-clearfix'>
							<div class='u-l'><img src='${item.imgurl}'></div>
							<ul class='u-l'>
								<li>姓名：${item.name}</li>
								<li>年龄：${item.age}</li>
								<li>学历：${item.education}</li>
								<li>城市：${item.city}</li>
								<li>薪资：${item.salary}k</li>
							</ul>
						</li>`;
					})
					$('#studentList').html( sHtml );
				}
			}
		})
	}
	//页面一加载调用请求数据的函数
	fAjax(page,null,null,null,null);
	
	//滚动条事件
	$(window).scroll(function(){
		if(  fBottom()  ){
			page +=1;
			//触底了,发送请求
			if(parentId=='salary'){
				//发送带薪资的数据请求
				fAjax(page,minStr,maxStr,null,null);
			}else if(parentId=='age'){
				//发送带年龄的数据请求	
				fAjax(page,null,null,minStr,maxStr);
			}else{
				fAjax(page,null,null,null,null);
			}
		}
	})
	//判断是否触底
	function fBottom(){
		//可视区域的高度
		var windowHeight = $(window).height();
		//滚动的距离
		var scrollHeight = $(window).scrollTop();
		//获取到最后一个盒子
		var last = $('#studentList').children('li');
		//最后一条数据的offset.top 
		var lastTop = parseInt(last.eq(last.length-1).offset().top);
		//最后一条数据的高度
		var lastHeight = last.eq(last.length-1).height();
		var totalHeight = lastTop+lastHeight;
		return windowHeight+scrollHeight >= totalHeight?true:false;
	}
	
	//移入移出显示隐藏筛选列表
	$("#salary").hover(function(){
		$(this).find('.hide').show();
	},function(){
		$(this).find('.hide').hide();
	})

	$("#age").hover(function(){
		$(this).find('.hide').show();
	},function(){
		$(this).find('.hide').hide();
	})
	//点击筛选条件，切换数据
	$('.hide').click(function(){
		//得到最小和最大值
		var arr = $(this).text().split('~');
		minStr = parseInt(arr[0]);
		maxStr = parseInt(arr[1]);
		//得到对应的父元素
		parentId = $(this).parent().attr('id');
		//重置page
		page = 1;
		//重置sHtml
		sHtml='';
		//点击的是薪资的筛选条件
		if( parentId=='salary' ){
			fAjax(page,minStr,maxStr,null,null);
		}else{
		//点击的是年龄的筛选条件
			fAjax(page,null,null,minStr,maxStr);
		}
	})
})