import h from './dom/h'
import patch from './dom/patch'



//获取到了真实的dom节点
let container = document.getElementById('container');

//虚拟节点
let vnode1 = h('h1',{},'你好吖');

let vnode2 = h('ul',{},[
	h('li',{},'a'),
	h('li',{},'b'),
	h('li',{},'c'),
	h('li',{},'你把花木兰都沉默')
]);


patch( container,vnode1 );