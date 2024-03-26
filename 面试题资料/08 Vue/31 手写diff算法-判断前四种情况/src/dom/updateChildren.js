import patchVnode from './patchVnode'

//判断倆个虚拟节点是否为同一个节点
function sameVnode( vNode1, vNode2 ){
	return vNode1.key == vNode2.key;
}
//参数一：真实dom节点
//参数二：旧的虚拟节点
//参数三：新的虚拟节点
export default (  parentElm , oldCh , newCh ) => {

	let oldStartIdx = 0; 			//旧前的指针
	let oldEndIdx = oldCh.length-1; //旧后的指针
	let newStartIdx = 0; 			//新前的指针
	let newEndIdx = newCh.length-1; //新后的指针

	let oldStartVnode = oldCh[0];   	//旧前虚拟节点
	let oldEndVnode = oldCh[oldEndIdx]; //旧后虚拟节点
	let newStartVnode = newCh[0];       //新前虚拟节点
	let newEndVnode = newCh[newEndIdx]; //新后虚拟节点

	while( oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx ){

		if( sameVnode( oldStartVnode,newStartVnode )  ){
			//第一种情况：旧前 和 新前
			console.log('1');
			patchVnode( oldStartVnode,newStartVnode );
			if( newStartVnode ) newStartVnode.elm = oldStartVnode?.elm;
			oldStartVnode = oldCh[++oldStartIdx];
			newStartVnode = newCh[++newStartIdx];

		}else if(  sameVnode( oldEndVnode,newEndVnode )  ){
			//第二种情况：旧后 和 新后
			console.log('2');
			patchVnode( oldEndVnode,newEndVnode );
			if( newEndVnode ) newEndVnode.elm = oldEndVnode?.elm;
			oldEndVnode = oldCh[--oldEndIdx];
			newEndVnode = newCh[--newEndIdx];

		}else if(  sameVnode( oldStartVnode,newEndVnode )  ){
			//第三种情况：旧前 和 新后
			console.log('3');
			patchVnode( oldStartVnode,newEndVnode );
			if( newEndVnode ) newEndVnode.elm = oldStartVnode?.elm;
			//把旧前指定的节点移动到旧后指向的节点的后面
			parentElm.insertBefore( oldStartVnode.elm , oldEndVnode.elm.nextSibling  );
			oldStartVnode = oldCh[++oldStartIdx];
			newEndVnode = newCh[--newEndIdx];

		}else if(  sameVnode( oldEndVnode,newStartVnode )  ){
			//第四种情况：旧后 和 新前
			console.log('4');
			patchVnode( oldEndVnode,newStartVnode );
			if( newStartVnode ) newStartVnode.elm = oldEndVnode?.elm;
			//将旧后指定的节点移动到旧前指向的节点的前面
			parentElm.insertBefore( oldEndVnode.elm , oldStartVnode.elm );
			oldEndVnode = oldCh[--oldEndIdx];
			newStartVnode = newCh[++newStartIdx];

		}else{
			//第五种情况：以上都不满足条件 ===》查找

		}
	}
}	