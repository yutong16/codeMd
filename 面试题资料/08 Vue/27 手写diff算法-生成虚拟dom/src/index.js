import h from './dom/h'



let vnode1 = h('div',{},'你好吖');


let vnode2 = h('ul',{},[
	h('li',{},'a'),
	h('li',{},'b'),
	h('li',{},'c'),
	h('li',{},'你把花木兰都沉默')
]);

console.log( vnode2 );