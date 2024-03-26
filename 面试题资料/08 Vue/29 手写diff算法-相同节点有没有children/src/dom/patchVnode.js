import createElement from './createElement'
export default function patchVnode( oldVnode,newVnode ){

	//判断新节点有没有children 
	if( newVnode.children === undefined ){ //新的没有子节点

		//新节点的文本 和 旧节点的文本内容是不是一样的
		if(  newVnode.text !== oldVnode.text  ){
			oldVnode.elm.innerText = newVnode.text;
		}

	}else{//新的有子节点

		//新的虚拟节点有  ，  旧的虚拟节点有
		if(  oldVnode.children !== undefined && oldVnode.children.length > 0 ){

			//最复杂的情况了 diff核心了
			console.log('新旧都有children');

		}else{//新的虚拟节点有  ，  旧的虚拟节点“没有”

			//把旧节点的内容 清空
			oldVnode.elm.innerHTML = '';
			//遍历新的 子节点 ， 创建dom元素，添加到页面中
			for( let child of newVnode.children ){
				let childDom = createElement(child);
				oldVnode.elm.appendChild(childDom);
			}
		}
	}
}