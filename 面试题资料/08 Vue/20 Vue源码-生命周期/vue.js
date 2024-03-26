class Vue{

	constructor( options ){

		if(  typeof options.beforeCreate == 'function' ){
			options.beforeCreate.bind(this)();
		}
		//这是data
		this.$data = options.data;
		if(  typeof options.created == 'function' ){
			options.created.bind(this)();
		}
		if(  typeof options.beforeMount == 'function' ){
			options.beforeMount.bind(this)();
		}
		//这是节点
		this.$el = document.querySelector(options.el);
		//模版解析
		this.compile(  this.$el );
		if(  typeof options.mounted == 'function' ){
			options.mounted.bind(this)();
		}
		
	}

	compile( node ){

		node.childNodes.forEach((item,index)=>{
			//元素节点
			if( item.nodeType == 1 ){
				this.compile(  item );
			}
			//这是文本节点，如果有{{}}就替换成数据
			if( item.nodeType == 3 ){
				//正则匹配{{}}
				let reg = /\{\{(.*?)\}\}/g;
				let text = item.textContent;
				//给节点赋值
				item.textContent = text.replace(reg,(match,vmKey)=>{
					vmKey = vmKey.trim();
					return this.$data[vmKey];
				})
			}

		})

	} 

}