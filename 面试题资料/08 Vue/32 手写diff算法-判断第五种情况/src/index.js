import h from './dom/h'
import patch from './dom/patch'


//获取到了真实的dom节点
let container = document.getElementById('container');
//获取到了按钮
let btn = document.getElementById('btn');

//虚拟节点
let vnode1 = h('ul',{},[
	h('li',{key:'a'},'a'),
	h('li',{key:'b'},'b'),
	h('li',{key:'c'},'c'),
	h('li',{key:'d'},'d'),
	h('li',{key:'e'},'e'),
]);

patch( container,vnode1 );

let vnode2 = h('ul',{},[
	h('li',{key:'c'},'c'),
	h('li',{key:'b'},'b'),
	h('li',{key:'e'},'e'),
	h('li',{key:'f'},'f'),
	h('li',{key:'a'},'a'),
	h('li',{key:'d'},'d'),
]);


btn.onclick = function(){
	patch( vnode1,vnode2 );
}

