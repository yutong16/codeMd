第一章 面试题基础篇

​		1.1 HTML面试题				

​				面试题：行内元素有哪些？块级元素有哪些？ 空(void)元素有哪些？

```
行内元素：span、img、input...
块级元素：div、footer、header、section、p、h1...h6...
空元素：br、hr...


元素之间的转换问题：
display: inline;  			把某元素转换成了行内元素      ===>不独占一行的，并且不能设置宽高
display: inline-block; 	把某元素转换成了行内块元素		 ===>不独占一行的，可以设置宽高
display: block;					把某元素转换成了块元素			   ===>独占一行，并且可以设置宽高
```

​				面试题：页面导入样式时，使用link和@import有什么区别？

```
区别一：link先有，后有@import（兼容性link比@import兼容）；
区别二：加载顺序差别，浏览器先加载的标签link，后加载@import
```

​				面试题：title与h1的区别、b与strong的区别、i与em的区别？

```
title与h1的区别：

定义：
	title：概括了网站信息，可以告诉搜索引擎或者用户关于这个网站的内容主题是什么
	h1：文章主题内容，告诉蜘蛛我们的网站内容最主要是什么
区别：
	title他是显示在网页标题上、h1是显示在网页内容上
	title比h1添加的重要 (title > h1 ) ==》对于seo的了解
场景：
	网站的logo都是用h1标签包裹的	
```

```
b与strong的区别：

定义：
	b：实体标签，用来给文字加粗的。
	strong：逻辑标签，用来加强字符语气的。
区别：
	b标签只有加粗的样式，没有实际含义。
	strong表示标签内字符比较重要，用以强调的。
题外话：为了符合css3的规范，b尽量少用该用strong就行了。
```

```
i与em的区别：

定义：
	i:实体标签，用来做文字倾斜的。
	em：是逻辑标签，用来强调文字内容的
区别：
	i只是一个倾斜标签，没有实际含义。
	em表示标签内字符重要，用以强调的。
场景：
	i更多的用在字体图标，em术语上（医药，生物）。
```

​				面试题：img标签的title和alt有什么区别？

```
区别一：
	title ： 鼠标移入到图片显示的值
	alt   ： 图片无法加载时显示的值
区别二：
	在seo的层面上，蜘蛛抓取不到图片的内容，所以前端在写img标签的时候为了增加seo效果要加入alt属性来描述这张图是什么内容或者关键词。
```

​				面试题：png、jpg、gif 这些图片格式解释一下，分别什么时候用？

```
png:无损压缩，尺寸体积要比jpg/jpeg的大，适合做小图标。
jpg:采用压缩算法，有一点失真，比png体积要小，适合做中大图片。
gif:一般是做动图的。
webp：同时支持有损或者无损压缩，相同质量的图片，webp具有更小的体积。兼容性不是特别好。
```

​		1.2 CSS面试题

​				面试题：介绍一下CSS的盒子模型

```
CSS的盒子模型有哪些：标准盒子模型、IE盒子模型
CSS的盒子模型区别：
	标准盒子模型：margin、border、padding、content
	IE盒子模型 ：margin、content（ border +  padding  + content ）
通过CSS如何转换盒子模型：
	box-sizing: content-box;	/*标准盒子模型*/
	box-sizing: border-box;	  /*IE盒子模型*/
```

​				面试题：line-height和heigh区别【大厂】

```
line-height是每一行文字的高，如果文字换行则整个盒子高度会增大（行数*行高）。
height是一个死值，就是这个盒子的高度。
```

​				面试题：CSS选择符有哪些？哪些属性可以继承？

```
CSS选择符：
    通配（*）
    id选择器（#）
    类选择器（.）
    标签选择器（div、p、h1...）
    相邻选择器(+)
    后代选择器(ul li)
    子元素选择器（ > ）
    属性选择器(a[href])
    
CSS属性哪些可以继承：
		文字系列：font-size、color、line-height、text-align...
***不可继承属性：border、padding、margin...
```

​				面试题：CSS优先级算法如何计算？

```
优先级比较：!important > 内联样式 > id > class > 标签 > 通配
```

```
CSS权重计算：
第一：内联样式（style）  权重值:1000
第二：id选择器  				 权重值:100
第三：类选择器 				  权重值:10
第四：标签&伪元素选择器   权重值:1
第五：通配、>、+         权重值:0
```

​				面试题：用CSS画一个三角形

```
用边框画（border）,例如：
{
		width: 0;
		height: 0;

		border-left:100px solid transparent;
		border-right:100px solid transparent;
		border-top:100px solid transparent;
		border-bottom:100px solid #ccc;
}
```

​				面试题：一个盒子不给宽度和高度如何水平垂直居中？

##### 方式一：

```
<div class='container'>
	<div class='main'>main</div>
</div>

.container{
		display: flex;
		justify-content: center;
		align-items: center;
		width: 300px;
		height: 300px;
		border:5px solid #ccc;
}
.main{
		background: red;
}
```

##### 方式二：

```
<div class='container'>
	<div class='main'>main</div>
</div>

.container{
		position: relative;
		width: 300px;
		height: 300px;
		border:5px solid #ccc;
}
.main{
		position: absolute;
		left:50%;
		top:50%;
		background: red;
		transform: translate(-50%,-50%);
}
```

​				面试题：display有哪些值？说明他们的作用。

```
none     			隐藏元素
block    			把某某元素转换成块元素
inline   			把某某元素转换成内联元素
inline-block 	把某某元素转换成行内块元素
```

​				面试题：对BFC规范(块级格式化上下文：block formatting context)的理解？

```
BFC就是页面上一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。

1. 了解BFC ： 块级格式化上下文。
2. BFC的原则：如果一个元素具有BFC，那么内部元素再怎么弄，都不会影响到外面的元素。
3. 如何触发BFC：
		float的值非none
		overflow的值非visible
		display的值为：inline-block、table-cell...
		position的值为:absoute、fixed
```

​				面试题：清除浮动有哪些方式？

```
1. 触发BFC
2. 多创建一个盒子，添加样式：clear: both;
3. after方式
	ul:after{
			content: '';
			display: block;
			clear: both;
	}
```

​				面试题：在网页中的应该使用奇数还是偶数的字体？为什么呢？

```
偶数 : 让文字在浏览器上表现更好看。

另外说明：ui给前端一般设计图都是偶数的，这样不管是布局也好，转换px也好，方便一点。
```

​				面试题：position有哪些值？分别是根据什么定位的？

```
static [默认]  没有定位
fixed  固定定位，相对于浏览器窗口进行定位。
relative  相对于自身定位，不脱离文档流。
absolute	相对于第一个有relative的父元素，脱离文档流。


relative和absolute区别
1. relative不脱离文档流 、absolute脱离文档流
2. relative相对于自身 、 absolute相对于第一个有relative的父元素
3. relative如果有left、right、top、bottom ==》left、top
	 absolute如果有left、right、top、bottom ==》left、right、top、bottom
```

​				面试题：写一个左中右布局占满屏幕，其中左、右俩块固定宽200，中间自适应宽，要求先加载中间块，请写出结构及样式。

```
双飞翼
```

​				面试题：什么是CSS reset？

```
reset.css   		是一个css文件，用来重置css样式的。
normalize.css 	为了增强跨浏览器渲染的一致性，一个CSS 重置样式库。
```

​				面试题：css sprite是什么,有什么优缺点

```
1. 是什么
	把多个小图标合并成一张大图片。
2. 优缺点
	优点：减少了http请求的次数，提升了性能。
	缺点：维护比较差（例如图片位置进行修改或者内容宽高修改）
```

​				面试题：display: none;与visibility: hidden;的区别

```
1. 占用位置的区别
display: none; 				是不占用位置的
visibility: hidden;   虽然隐藏了，但是占用位置

2. 重绘和回流的问题

visibility: hidden; 、 display: none;  产生重绘
display: none;     还会产生一次回流

产生回流一定会造成重绘，但是重绘不一定会造成回流。

产生回流的情况：改变元素的位置(left、top...)、显示隐藏元素....
产生重绘的情况：样式改变、换皮肤
```

​				面试题：opacity 和 rgba区别

```
共同性：实现透明效果

1. opacity 取值范围0到1之间，0表示完全透明，1表示不透明
2. rgba   R表示红色，G表示绿色，B表示蓝色，取值可以在正整数或者百分数。A表示透明度取值0到1之间

区别：继承的区别
opacity会继承父元素的opacity属性，而RGBA设置的元素的后代元素不会继承不透明属性。
```

​		1.3 JavaScript基础面试题

​				面试题：延迟加载JS有哪些方式？

```
延迟加载：async、defer
		例如：<script defer type="text/javascript" src='script.js'></script>
		
defer : 等html全部解析完成，才会执行js代码，顺次执行js脚本。
async : async是和html解析同步的（一起的），不是顺次执行js脚本（谁先加载完谁先执行）。
```

​				面试题：JS数据类型有哪些？

```
基本类型：string、number、boolean、undefined、null、symbol、bigint
引用类型：object

NaN是一个数值类型，但是不是一个具体的数字。
```

​				面试题：JS数据类型考题	

##### 考题一：

```
console.log( true + 1 );     			//2
console.log( 'name'+true );  			//nametrue
console.log( undefined + 1 ); 		//NaN
console.log( typeof undefined ); //undefined
```

##### 考题二：

```  
console.log( typeof(NaN) );       //number
console.log( typeof(null) );      //object
```

​				面试题：null和undefined的区别

```
1. 作者在设计js的都是先设计的null（为什么设计了null：最初设计js的时候借鉴了java的语言）
2. null会被隐式转换成0，很不容易发现错误。
3. 先有null后有undefined，出来undefined是为了填补之前的坑。

具体区别：JavaScript的最初版本是这样区分的：null是一个表示"无"的对象（空对象指针），转为数值时为0；undefined是一个表示"无"的原始值，转为数值时为NaN。
```

​				面试题：==和===有什么不同？

```
==  :  比较的是值
		
		string == number || boolean || number ....都会隐式转换
		通过valueOf转换（valueOf() 方法通常由 JavaScript 在后台自动调用，并不显式地出现在代码中。）

=== ： 除了比较值，还比较类型
```

​				面试题：JS微任务和宏任务

```
1. js是单线程的语言。
2. js代码执行流程：同步执行完==》事件循环
	同步的任务都执行完了，才会执行事件循环的内容
	进入事件循环：请求、定时器、事件....
3. 事件循环中包含：【微任务、宏任务】
微任务：promise.then
宏任务：setTimeout..

要执行宏任务的前提是清空了所有的微任务

流程：同步==》事件循环【微任务和宏任务】==》微任务==》宏任务=》微任务...

```

​				面试题：JS作用域考题

```
1. 除了函数外，js是没有块级作用域。
2. 作用域链：内部可以访问外部的变量，但是外部不能访问内部的变量。
	 注意：如果内部有，优先查找到内部，如果内部没有就查找外部的。
3. 注意声明变量是用var还是没有写（window.）
4. 注意：js有变量提升的机制【变量悬挂声明】
5. 优先级：声明变量 > 声明普通函数 > 参数 > 变量提升
```

面试的时候怎么看：

```
1. 本层作用域有没有此变量【注意变量提升】
2. 注意：js除了函数外没有块级作用域
3. 普通声明函数是不看写函数的时候顺序
```

##### 考题一：

```
function c(){
	var b = 1;
	function a(){
		console.log( b );
		var b = 2;
		console.log( b );
	}
	a();
	console.log( b );
}
c();
```

##### 考题二：

```
var name = 'a';
(function(){
	if( typeof name == 'undefined' ){
		var name = 'b';
		console.log('111'+name);
	}else{
		console.log('222'+name);
	}
})()
```

##### 考题三：

```
function fun( a ){
	var a = 10;
	function a(){}
	console.log( a );
}
fun( 100 );
```

​				面试题：JS对象考题

JS对象注意点：

```
1. 对象是通过new操作符构建出来的，所以对象之间不想等(除了引用外)；
2. 对象注意：引用类型(共同一个地址)；
3. 对象的key都是字符串类型；
4. 对象如何找属性|方法；
	查找规则：先在对象本身找 ===> 构造函数中找 ===> 对象原型中找 ===> 构造函数原型中找 ===> 对象上一层原型查找
```

##### 考题一：

```
 [1,2,3] === [1,2,3]   //false
```

##### 考题二：

```
var obj1 = {
	a:'hellow'
}
var obj2 = obj1;
obj2.a = 'world';
console.log(obj1); 	//{a:world}
(function(){
	console.log(a); 	//undefined
	var a = 1;
})();
```

##### 考题三：

```
var a = {}
var b = {
	key:'a'
}
var c = {
	key:'c'
}

a[b] = '123';
a[c] = '456';

console.log( a[b] ); // 456
```

​				面试题：JS作用域+this指向+原型的考题

##### 考题一：

```
function Foo(){
	getName = function(){console.log(1)} //注意是全局的window.
	return this;
}

Foo.getName = function(){console.log(2)}
Foo.prototype.getName = function(){console.log(3)}
var getName = function(){console.log(4)}
function getName(){
	console.log(5)
}

Foo.getName();    //2
getName(); 		  //4
Foo().getName();  //1
getName();		  //1
new Foo().getName();//3
```

##### 考题二：

```
var o = {
	a:10,
	b:{
		a:2,
		fn:function(){
			console.log( this.a ); // 2
			console.log( this );   //代表b对象
		}
	}
}
o.b.fn();
```

##### 考题三：

```
window.name = 'ByteDance';
function A(){
	this.name = 123;
}
A.prototype.getA = function(){
	console.log( this );
	return this.name + 1;
}
let a = new A();
let funcA = a.getA;
funcA();  //this代表window
```

##### 考题四：

```
var length = 10;
function fn(){
	return this.length + 1;
}
var obj = {
	length:5,
	test1:function(){
		return fn();
	}
}
obj.test2 = fn;
console.log( obj.test1() ); 							//1
console.log( fn()===obj.test2() ); 				//false
console.log( obj.test1() == obj.test2() ); //false
```

​				面试题：JS判断变量是不是数组，你能写出哪些方法？

##### 方式一：isArray

```
var arr = [1,2,3];
console.log( Array.isArray( arr ) );
```

##### 方式二：instanceof  【可写,可不写】

```
var arr = [1,2,3];
console.log( arr instanceof Array );
```

##### 方式三：原型prototype

```
var arr = [1,2,3];
console.log( Object.prototype.toString.call(arr).indexOf('Array') > -1 );
```

#### 方式四：isPrototypeOf()

```
var arr = [1,2,3];
console.log(  Array.prototype.isPrototypeOf(arr) )
```

#### 方式五：constructor

```
var arr = [1,2,3];
console.log(  arr.constructor.toString().indexOf('Array') > -1 )
```

​				面试题：slice是干嘛的、splice是否会改变原数组

```
1. slice是来截取的
	参数可以写slice(3)、slice(1,3)、slice(-3)
	返回的是一个新的数组
2. splice 功能有：插入、删除、替换
	返回：删除的元素
	该方法会改变原数组
```

​				面试题：JS数组去重

##### 方式一：new set

```
var arr1 = [1,2,3,2,4,1];
function unique(arr){
	return [...new Set(arr)]
}
console.log(  unique(arr1) );
```

##### 方式二：indexOf

```
var arr2 = [1,2,3,2,4,1];
function unique( arr ){
	var brr = [];
	for( var i=0;i<arr.length;i++){
		if(  brr.indexOf(arr[i]) == -1 ){
			brr.push( arr[i] );
		}
	}
	return brr;
}
console.log( unique(arr2) );
```

##### 方式三：sort

```
var arr3 = [1,2,3,2,4,1];
function unique( arr ){
	arr = arr.sort();
	var brr = [];
	for(var i=0;i<arr.length;i++){
		if( arr[i] !== arr[i-1]){
			brr.push( arr[i] );
		}
	}
	return brr;
}
console.log( unique(arr3) );
```

​				面试题：找出多维数组最大值

```
function fnArr(arr){
	var newArr = [];
	arr.forEach((item,index)=>{
		newArr.push( Math.max(...item)  )
	})
	return newArr;
}
console.log(fnArr([
	[4,5,1,3],
	[13,27,18,26],
	[32,35,37,39],
	[1000,1001,857,1]
]));
```

​				面试题：给字符串新增方法实现功能

给字符串对象定义一个addPrefix函数，当传入一个字符串str时，它会返回新的带有指定前缀的字符串，例如：

console.log( 'world'.addPrefix('hello') )  控制台会输出helloworld

```
解答：
String.prototype.addPrefix = function(str){
	return str  + this;
}
console.log( 'world'.addPrefix('hello') )
```

​				面试题：找出字符串出现最多次数的字符以及次数

```
var str = 'aaabbbbbccddddddddddx';
var obj = {};
for(var i=0;i<str.length;i++){
	var char = str.charAt(i);
	if( obj[char] ){
		obj[char]++;
	}else{
		obj[char] = 1;
	}
}
console.log( obj );
//统计出来最大值
var max = 0;
for( var key in obj ){
	if( max < obj[key] ){
		max = obj[key];
	}
}
//拿最大值去对比
for( var key in obj ){
	if( obj[key] == max ){
		console.log('最多的字符是'+key);
		console.log('出现的次数是'+max);
	}
}
```

​				面试题：new操作符具体做了什么

```
1. 创建了一个空的对象
2. 将空对象的原型，指向于构造函数的原型
3. 将空对象作为构造函数的上下文（改变this指向）
4. 对构造函数有返回值的处理判断
```

```
function Fun( age,name ){
	this.age = age;
	this.name = name;
}
function create( fn , ...args ){
	//1. 创建了一个空的对象
	var obj = {}; //var obj = Object.create({})
	//2. 将空对象的原型，指向于构造函数的原型
	Object.setPrototypeOf(obj,fn.prototype);
	//3. 将空对象作为构造函数的上下文（改变this指向）
	var result = fn.apply(obj,args);
	//4. 对构造函数有返回值的处理判断
	return result instanceof Object ? result : obj;
}
console.log( create(Fun,18,'张三')   )
```

​				面试题：闭包

```
1. 闭包是什么
	闭包是一个函数加上到创建函数的作用域的连接，闭包“关闭”了函数的自由变量。
2. 闭包可以解决什么问题【闭包的优点】
	2.1 内部函数可以访问到外部函数的局部变量
	2.2 闭包可以解决的问题
			var lis = document.getElementsByTagName('li');
      for(var i=0;i<lis.length;i++){
        (function(i){
          lis[i].onclick = function(){
            alert(i);
          }
        })(i)
      }
3. 闭包的缺点
	3.1 变量会驻留在内存中，造成内存损耗问题。
				解决：把闭包的函数设置为null
  3.2 内存泄漏【ie】 ==> 可说可不说，如果说一定要提到ie
```

​				面试题：原型链

```
1. 原型可以解决什么问题
	对象共享属性和共享方法
2. 谁有原型
函数拥有：prototype
对象拥有：__proto__
3. 对象查找属性或者方法的顺序
	先在对象本身查找 --> 构造函数中查找 --> 对象的原型 --> 构造函数的原型中 --> 当前原型的原型中查找
4. 原型链
	4.1 是什么？：就是把原型串联起来
	4.2 原型链的最顶端是null
```

​				面试题： JS继承有哪些方式

##### 方式一：ES6

```
class Parent{
	constructor(){
		this.age = 18;
	}
}

class Child extends Parent{
	constructor(){
		super();
		this.name = '张三';
	}
}
let o1 = new Child();
console.log( o1,o1.name,o1.age );
```

##### 方式二：原型链继承

```
function Parent(){
	this.age = 20;
}
function Child(){
	this.name = '张三'
}
Child.prototype = new Parent();
let o2 = new Child();
console.log( o2,o2.name,o2.age );
```

##### 方式三：借用构造函数继承

```
function Parent(){
	this.age = 22;
}
function Child(){
	this.name = '张三'
	Parent.call(this);
}
let o3 = new Child();
console.log( o3,o3.name,o3.age );
```

##### 方式四：组合式继承

```
function Parent(){
	this.age = 100;
}
function Child(){
	Parent.call(this);
	this.name = '张三'
}
Child.prototype = new Parent();
let o4 = new Child();
console.log( o4,o4.name,o4.age );
```

​				面试题：说一下call、apply、bind区别

##### 共同点：功能一致

```
可以改变this指向

语法： 函数.call()、函数.apply()、函数.bind()
```

##### 区别：

```
1. call、apply可以立即执行。bind不会立即执行，因为bind返回的是一个函数需要加入()执行。
2. 参数不同：apply第二个参数是数组。call和bind有多个参数需要挨个写。
```

##### 场景：

```
1. 用apply的情况
var arr1 = [1,2,4,5,7,3,321];
console.log( Math.max.apply(null,arr1) )

2. 用bind的情况
var btn = document.getElementById('btn');
var h1s = document.getElementById('h1s');
btn.onclick = function(){
	console.log( this.id );
}.bind(h1s)
```

​				面试题：sort背后原理是什么？

```
V8 引擎 sort 函数只给出了两种排序 InsertionSort 和 QuickSort，数量小于10的数组使用 InsertionSort，比10大的数组则使用 QuickSort。

之前的版本是：插入排序和快排，现在是冒泡

原理实现链接：https://github.com/v8/v8/blob/ad82a40509c5b5b4680d4299c8f08d6c6d31af3c/src/js/array.js

***710行代码开始***
```

​				面试题：深拷贝和浅拷贝

```
共同点：复制

1. 浅拷贝：只复制引用，而未复制真正的值。
var arr1 = ['a','b','c','d'];
var arr2 = arr1;

var obj1 = {a:1,b:2}
var obj2 = Object.assign(obj1);

2. 深拷贝：是复制真正的值 （不同引用）
var obj3 = {
	a:1,
	b:2
}
var obj4 = JSON.parse(JSON.stringify( obj3 ));

//递归的形式
function copyObj( obj ){
	if(  Array.isArray(obj)  ){
		var newObj = [];
	}else{
		var newObj = {};
	}
	for( var key in obj ){
		if( typeof obj[key] == 'object' ){
			newObj[key] = copyObj(obj[key]);
		}else{
			newObj[key] = obj[key];
		}
	}
	return newObj;
}
console.log(  copyObj(obj5)  );
```

​				面试题：localStorage、sessionStorage、cookie的区别

```
公共点：在客户端存放数据
区别：
1. 数据存放有效期
		sessionStorage : 仅在当前浏览器窗口关闭之前有效。【关闭浏览器就没了】
		localStorage   : 始终有效，窗口或者浏览器关闭也一直保存，所以叫持久化存储。
		cookie				 : 只在设置的cookie过期时间之前有效，即使窗口或者浏览器关闭也有效。
2. localStorage、sessionStorage不可以设置过期时间
	 cookie 有过期时间，可以设置过期（把时间调整到之前的时间，就过期了）
3. 存储大小的限制
	cookie存储量不能超过4k
	localStorage、sessionStorage不能超过5M
	
	****根据不同的浏览器存储的大小是不同的。
```

​		1.4 H5/C3面试题	

​				面试题：什么是语义化标签

```
1. 易读性和维护性更好。
2. seo成分会更好，蜘蛛抓取更好。
3. IE8不兼容HTML5标签的。解决：可以通过html5shiv.js去处理。
```

​				面试题：::before 和 :after中双冒号和单冒号 有什么区别？解释一下这2个伪元素的作用。

```
1. 区别
	:是伪类、::伪元素  ===》是为了做区分

2.是什么？作用
	元素before之前 、 元素after之后
	作用：清除浮动、样式布局上也有作用
```

​				面试题：如何关闭IOS键盘首字母自动大写

```
<input type="text" autocapitalize='off'>
```

​				面试题：怎么让Chrome支持小于12px 的文字？

```
Chrome默认字体大小是：16px
**每个浏览器默认字体大小可能都不一样

<style type="text/css">
div{
	font-size:10px;
}
div span{
	display: inline-block;
	-webkit-transform:scale(1.6);
}
</style>
```

​				面试题：rem和em区别

```
相对于font-size

em针对于父元素的font-size
rem针对于根(html)元素的font-size
```

​				面试题：ios系统中元素被触摸时产生的半透明灰色遮罩怎么去掉

```
<style>
	a,button,input,textarea{
		-webkit-tap-highlight-color: rgba(0,0,0,0);
	}
</style>
```

​				面试题：webkit表单输入框placeholder的颜色值能改变吗？

```
<style type="text/css">
	input::-webkit-input-placeholder{
		color:red;
	}
</style>
```

​				面试题：禁止ios长按时触发系统的菜单，禁止ios&android长按时下载图片

```
禁止ios 长按时触发系统的菜单，禁止ios&android长按时下载图片
html,body{
	touch-callout: none;
	-webkit-touch-callout: none;
	
	user-select:none;
	-webkit-user-select:none;
}
```

​				面试题：禁止ios和android用户选中文字

```
html,body{
	user-select:none;
	-webkit-user-select:none;
}
```

​				面试题：自适应

```
淘宝无限适配【移动端】：淘宝无限适配 + 布局单位使用rem
```

​				面试题：响应式

```
1. 是什么？
	一个URL可以响应多端
2. 语法结构
	@media only screen and (max-width: 1000px){
		ul li:last-child{
			display: none;
		}
	}

	only : 可以排除不支持媒体查询的浏览器
	screen ： 设备类型
	max-width | max-height
	min-width | min-height 
3. 响应式图片【性能优化】
	<picture>
		<source srcset="1.jpg" media='(min-width:1000px)'>
		<source srcset="2.jpg" media='(min-width:700px)'>
		<img srcset="3.jpg">
	</picture>
```

布局方案

```
一、什么情况下采用响应式布局
	
	数据不是特别多，用户量不是特别大，纯展示类的项目适合响应式布局
	
	例如：公司的官网、专题页面
	
	特别追求性能的项目，不太适合响应式，因为如果添加了很多的响应式就会造成加载速度变慢。

二、pc + 移动端应该做什么样的布局方案
	注意：访问量还可以或者比较大，类似于淘宝网。
	
	pc是一套，会加入一点点响应式。
	移动端是一套，会使用自适应的布局方式。

三、pc的设计图

	ui：1980
	笔记本电脑：1280
	ui图的宽度和电脑的宽度不对应该怎么办？
		1. 把ui图进行等比缩放，缩放成和电脑一样的尺寸
		2. 换1980的电脑
		
四、移动端的设计图

	宽度：750
	因为750设计图/2就是375，正好是iphone6的尺寸，我们要把iphone6的尺寸做为基准点。
```

第二章 面试题进阶篇

​		2.1 ES6面试题

​				面试题：var、let、const区别

```
var、let、const 共同点都是可以声明变量的

区别一：
	var 具有变量提升的机制
	let和const没有变量提升的机制
区别二：
	var 可以多次声明同一个变量
	let和const不可以多次声明同一个变量
区别三：
	var、let声明变量的
	const声明常量
	
	var和let声明的变量可以再次赋值，但是const不可以再次赋值了。
区别四：
	var声明的变量没有自身作用域
	let和const声明的变量有自身的作用域
```

​				面试题：作用域考题

考题一：let和const没有变量提升性

```
console.log( str );//undefined
var str = '你好';

console.log( num );//报错
let num = 10;
```

考题二：

```
function demo(){
	var n = 2;
	if( true ){
		var n = 1;
	}
	console.log( n );//1
}
demo();


function demo(){
	let n = 2;
	if( true ){
		let n = 1;
	}
	console.log( n );//2
}
demo();
```

考题三：可以修改

```
const obj = {
	a:1
}
obj.a = 11111;
console.log( obj )

const arr = ['a','b','c'];
arr[0]= 'aaaaa';
console.log( arr );
```

​				面试题：将下列对象进行合并

方式一：Object.assign

```
const a = {a:1,b:4};
const b = {b:2,c:3};

let obj1 = Object.assign(a,b);
console.log( obj1 );
```

方式二：...

```
let obj2 = {...a,...b};
console.log( obj2 );
```

方式三：自己封装方法

```
function extend( target,  source ){
	for(var key in source){
		target[key] = source[key];
	}
	return target;
}
console.log( extend(a,b) );
```

​				面试题：箭头函数和普通函数有什么区别？

```
1. this指向的问题
	箭头函数中的this只在箭头函数定义时就决定的，而且不可修改的（call、apply、bind）
	****箭头函数的this指向定义时候、外层第一个普通函数的this
2. 箭头函数不能new（不能当作构造函数）
3. 箭头函数prototype
4. 箭头函数arguments
```

​				面试题：Promise有几种状态

```
有三种状态：
pending（进行中）
fulfilled（已成功）
rejected（已失败）
```

​				面试题：find和filter的区别

```
区别一：返回的内容不同
	filter 返回是新数组
	find   返回具体的内容
区别二：
	find ：匹配到第一个即返回
	filter ： 返回整体（没一个匹配到的都返回）
```

​				面试题：some和every的区别

```
some  ==》 如果有一项匹配则返回true
every ==》 全部匹配才会返回true
```

​		2.2 webpack面试题

​				面试题：webpack插件

​		2.3 Git面试题

​				面试题：git常用命令

​				面试题：解决冲突

​				面试题：GitFlow

第三章 面试题框架篇

​		3.1 Vue面试题

​				面试题：Vue2.x 生命周期

```
1. 有哪些生命周期
系统自带：
  beforeCreate
  created
  beforeMount
  mounted
  beforeUpdate
  updated
  beforeDestroy
  destroyed
2. 一旦进入到页面或者组件，会执行哪些生命周期，顺序。
 beforeCreate
 created
 beforeMount
 mounted
3. 在哪个阶段有$el，在哪个阶段有$data
	beforeCreate 啥也没有
	created  有data没有el
	beforeMount 有data没有el
	mounted 都有
4. 如果加入了keep-alive会多俩个生命周期
	activated、deactivated
5. 如果加入了keep-alive，第一次进入组件会执行哪些生命？
 beforeCreate
 created
 beforeMount
 mounted
 activated
6. 如果加入了keep-alive，第二次或者第N次进入组件会执行哪些生命周期？
只执行一个生命周期：activated
```

​				面试题：谈谈你对keep-alive的了解

```
1. 是什么
vue系统自带的一个组件，功能：是来缓存组件的。===》提升性能
2. 使用场景
就是来缓存组件，提升项目的性能。具体实现比如：首页进入到详情页，如果用户在首页每次点击都是相同的，那么详情页就没必要请求N次了，直接缓存起来就可以了，当然如果点击的不是同一个，那么就直接请求。
```

​				面试题：v-if和v-show区别

```
1. 展示形式不同
v-if是 创建一个dom节点
v-show 是display:none 、 block

2. 使用场景不同
初次加载v-if要比v-show好，页面不会做加载盒子
频繁切换v-show要比v-if好，创建和删除的开销太大了，显示和隐藏开销较小
```

​				面试题：v-if和v-for优先级

```
v-for的优先级要比v-if高
***是在源码中体现的：function genElement
```

​				面试题：ref是什么？

```
来获取dom的
```

​				面试题：nextTick是什么?

```
获取更新后的dom内容
```

​				面试题：scoped原理

```
1. 作用：让样式在本组件中生效，不影响其他组件。
2. 原理：给节点新增自定义属性，然后css根据属性选择器添加样式。
```

​				面试题：Vue中如何做样式穿透

```
stylus样式穿透使用：>>>
sass和less使用：/deep/
通用使用：  :v-deep
```

​				面试题：Vue组件传值

```
父组件-->子组件：

	1. 父组件：
		<user-detail :myName="name" />
    
    export default {
        components: {
            UserDetail
        }
        ......
    }
  2. 在子组件中使用props（可以是数组也可以是对象）接收即可。可以传多个属性。
  	export default {
      props: ['myName']
 		}

子组件-->父组件：

		1. 子组件
      <button @click="changeParentName">改变父组件的name</button>
      export default {
          methods: {
              //子组件的事件
              changeParentName: function() {
                  this.$emit('handleChange', 'Jack')
              }
          }
      }
    2. 父组件
      <child @handleChange="changeName"></child>

      methods: {
          changeName(name) {  
              this.name = name
          }
      }

兄弟组件之间：bus.js
```

​				面试题：computed、methods、watch有什么区别？

```
1. computed vs methods区别
	computed是有缓存的
	methods没有缓存
2. computed vs watch区别
	watch是监听，数据或者路由发生了改变才可以响应（执行）
	computed计算某一个属性的改变，如果某一个值改变了，计算属性会监听到进行返回
	watch是当前监听到数据改变了，才会执行内部代码
```

​				面 试题：props和data优先级谁高？

```
props ===>  methods ===> data ===> computed ===>watch
```

​				面试题：Vuex有哪些属性？

```
state、getters、mutations、actions、modules

state 类似于组件中data，存放数据
getters 类型于组件中computed
mutations 类似于组件中methods
actions 提交mutations的
modules 把以上4个属性再细分，让仓库更好管理
```

​				面试题：Vuex是单向数据流还是双向数据流？

```
Vuex是单向数据流
```

​				面试题：Vuex中的mutaitons和actions区别

```
mutaitons   :  都是同步事物
actions     :  可以包含任意异步操作

***在调试中就看出来
```

​				面试题：Vuex如何做持久化存储

```
Vuex本身不是持久化存储

1. 使用localStorage自己写
2. 使用vuex-persist插件
```

​				面试题：Vue设置代理

###### vue.config.js

```
module.exports = {
  publicPath:'./',
  devServer: {
    proxy: 'http://localhost:3000'
  }
}
```

​				面试题：Vue项目打包上线

```
1. 自测==>修改路由模式
2. 代理不生效，使用ENV
3. 修改路径
```

​				面试题：Vue路由模式

```
路由模式有俩种：history、hash
区别：
	1. 表现形态不同
			history:http://localhost:8080/about
			hash:http://localhost:8080/#/about
	2. 跳转请求
			history : http://localhost:8080/id   ===>发送请求
			hash 	  : 不会发送请求
	3. 打包后前端自测要使用hash，如果使用history会出现空白页
```

​				面试题：介绍一下SPA以及SPA有什么缺点

```
SPA是什么？单页面应用
缺点：
	1. SEO优化不好
	2. 性能不是特别好
```

​				面试题：Vue路径传值

```
1. 显式
	http://localhost:8080/about?a=1
	1.1 传：this.$router.push({
  			path:'/about',
  			query:{
  				a:1
  			}
  		})
  1.2 接：this.$route.query.a
  
2. 隐式
	http://localhost:8080/about
	2.1 传：this.$router.push({
  			name:'About',
  			params:{
  				a:1
  			}
  		})
  2.2 接：this.$route.params.a
```

​				面试题：路由导航守卫有哪些	

```
全局、路由独享、组件内

1. 全局
	beforeEach、beforeResolve、afterEach
2. 路由独享
	beforeEnter
3. 组件内
	beforeRouteEnter、beforeRouteUpdate、beforeRouteLeave
	
使用场景：判断是否登录，如果登录就next否则就跳转到登录页面
```

​				面试题：Vue动态路由

```
场景：详情页(文章、商品)
router.js配置：
	{
    path: "/list",
    name: "List",
    children:[
      {
        path:"/list/:id",
        name:'Details',
        component: () =>
          import("../views/Details.vue"),
      }
    ],
    component: () =>
      import("../views/List.vue"),
  },
```

​				面试题：双向绑定原理

```
vue数据双向绑定是通过数据劫持结合发布者-订阅者模式的方式来实现的。
通过Object.defineProperty()来实现数据劫持的。

1.实现一个解析器Compile，可以扫描和解析每个节点的相关指令，并根据初始化模板数据以及初始化相应的订阅器。

2.实现一个监听器Observer，用来劫持并监听所有属性，如果有变动的，就通知订阅者。

3.实现一个订阅者Watcher，可以收到属性的变化通知并执行相应的函数，从而更新视图。
```

​				面试题：什么是虚拟DOM

```
其实就是数据，把dom变成数据结构。
```

​				面试题：diff算法

```
利用diff算法可以更多提升dom之间对比的性能（采用虚拟dom数据进行对比）。
```

​				面试题：讲一下MVVM

```
M就是data的model层
V就是view视图层
VM就是理解为v-model原理实现，通过view更新model
```

​		3.2 微信小程序面试题

​				面试题：如何自定义头部？

```
app.json进行配置

"window":{
    "navigationStyle":"custom",
}
```

​				面试题：不校验URL

```
工具==》详情==》本地设置==》不校验合法域名  ： 项目上线前URL一定要请求到（不勾选也可以请求到数据）
```

​		3.3 uni-app面试题

​				面试题：生命周期

```
应用生命周期、页面生命周期、组件生命周期
```

​				面试题：条件编译

```
在工具中，打if出现的条件编译

例如：
<!-- #ifdef H5 -->
  	<h1>这是h5端</h1>
<!-- #endif -->
```

第四章 面试题性能优化篇

​		4.1 加载优化

```
1. http请求
	 能不能减少（能不能合并）
2. 图片的雪碧图
3. script标签位置
4. link标签（css引入）
```

​		4.2 图片优化

```
1. 图片懒加载
2. 响应式图片
3. webp代替其他格式
4. 小图标可以改用字体图标
```

​		4.3 渲染优化

```
1. 减少重绘和回流
2. 改变位置使用transform
3. 动画尽量用requestAnimationFrame，不要用定时器
```

​		4.4 首屏优化

```
1. 长列表
2. 项目的html文件、css文件、图片、js文件压缩打包
```

​		4.5 vue优化

```
1. keep-alive 缓存组件
2. 路由懒加载
3. 内容使用
	v-if和v-show
	computed、watch、methods
4. Object.freeze ：冻结对象
	纯展示类的接口数据，冻结就可以了
5. 使用ui组件按需引入
```

第五章 面试题兼容篇

​		5.1 页面样式兼容

```
1. 在ios键盘中首字母大写的问题?
		<input type="text" autocapitalize='off'>
2. ios日期转换NAN问题
		具体就是，new Date('2020-11-12 00:00:00')在ios中会为NAN
		解决方案：用new Date('2020/11/12 00:00:00')的日期格式，或者写个正则转换
3. 在移动端使用click事件有300ms延迟的问题
	 	禁止双击缩放===》meta:user-scalabel=no
4. 	移动端touch事件有穿透（点透）的问题，怎么解决？
	 	4.1 阻止默认行为 : e.preventDefault();
	 	4.2 fastclick.js
5. 安卓部分版本input的placeholder偏上
		input{
	  		 line-height:normal;
		}
```

第六章 面试题网络请求篇

​		6.1 跨域面试题

```
前端：jsonp、vue的项目可以设置代理（打包后无效。解决：.ENV文件）
后端：CORS
```

​		6.2 http和https的区别？

```
1. 端口不同

	http ：80端口
	https ：443端口
	
2. https比http更加安全
	
	***https就是证书
```

第七章 WEB安全篇

​		7.1 XSS攻击

```
用户输入的文本框，需要替换某些特殊字符（ <> ... ）
```

​		7.2 SQL注入

```
用户输入的文本框中不可以有特殊符号（ 引号、空格 ）
```

​		7.3 接口安全

第八章 其他类面试题

​		8.1 token

​		8.2 SEO