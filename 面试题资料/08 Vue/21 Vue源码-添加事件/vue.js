class Vue{

	constructor( options ){

		this.$options = options;

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
				//判断元素节点是否绑定了@click
				if( item.hasAttribute('@click')  ){
					//@click后绑定的属性值
					let vmKey = item.getAttribute('@click').trim();
					item.addEventListener('click',( event )=>{
						this.eventFn = this.$options.methods[vmKey].bind(this);
						this.eventFn(event);
					})
				}
				if( item.childNodes.length > 0  ){
					this.compile(  item );
				}
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