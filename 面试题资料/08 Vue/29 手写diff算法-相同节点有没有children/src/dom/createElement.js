//vnode 为新节点，就是要创建的节点
export default function createElement( vnode ){
	//创建dom节点
	let domNode = document.createElement( vnode.sel );
	//判断有没有子节点 children 是不是为undefined
	if(  vnode.children == undefined  ){
		domNode.innerText = vnode.text;	
	}else if( Array.isArray(vnode.children) ){//新的节点有children（子节点）
		//说明内部有子节点 ， 需要递归创建节点
		for( let child of vnode.children){
			let childDom = createElement(child);
			domNode.appendChild( childDom );
		}
	}
	//补充elm属性
	vnode.elm = domNode;
	return domNode;
}