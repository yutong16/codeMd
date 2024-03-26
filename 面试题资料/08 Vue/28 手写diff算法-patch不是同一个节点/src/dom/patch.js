//oldVnode ===> 旧虚拟节点
//newVnode ===> 新虚拟节点
import vnode from './vnode';
import createElement from './createElement'
export default function( oldVnode , newVnode ){

	//如果oldVnode 没有sel ，就证明是非虚拟节点 ( 就让他变成虚拟节点 )
	if(  oldVnode.sel == undefined  ){
		oldVnode = vnode(
			oldVnode.tagName.toLowerCase(), //sel
			{},//data
			[],
			undefined,
			oldVnode
		)
	}

	//判断 旧的虚拟节点  和  新的虚拟节点   是不是同一个节点
	if(  oldVnode.sel === newVnode.sel  ){
		//判断就条件就复杂了（很多了）

		
	}else{//不是同一个节点，那么就暴力删除旧的节点，创建插入新的节点。
		//把新的虚拟节点 创建为 dom节点
		let newVnodeElm = createElement(  newVnode );
		//获取旧的虚拟节点 .elm 就是真正节点
		let oldVnodeElm = oldVnode.elm;
		//创建新的节点
		if(  newVnodeElm  ){
			oldVnodeElm.parentNode.insertBefore(newVnodeElm ,oldVnodeElm);
		}
		//删除旧节点
		oldVnodeElm.parentNode.removeChild( oldVnodeElm );
	}
}