import h from './dom/h'
import patch from './dom/patch'


//获取到了真实的dom节点
let container = document.getElementById('container');
//获取到了按钮
let btn = document.getElementById('btn');

//虚拟节点
let vnode1 = h('div',{},[
	h('span',{},'a'),
	h('span',{},'b'),
	h('span',{},'c'),
]);
patch( container,vnode1 );



let vnode2 = h('div',{},[
	h('span',{},'b'),
	h('span',{},'c'),
	h('span',{},'a'),
]);
btn.onclick = function(){
	patch( vnode1,vnode2 );
}

