import{_ as e,r as t,o as i,c as o,a as n,b as s,d as l,e as p}from"./app.629164ab.js";const c="/assets/Untitled.8fd9e753.png",r={},u=p(`<h1 id="原型链" tabindex="-1"><a class="header-anchor" href="#原型链" aria-hidden="true">#</a> 原型链</h1><h1 id="javascript箭头函数、构造函数、原型、原型链、继承" tabindex="-1"><a class="header-anchor" href="#javascript箭头函数、构造函数、原型、原型链、继承" aria-hidden="true">#</a> <strong>JavaScript箭头函数、构造函数、原型、原型链、继承</strong></h1><h1 id="一、箭头函数" tabindex="-1"><a class="header-anchor" href="#一、箭头函数" aria-hidden="true">#</a> <strong>一、箭头函数</strong></h1><p><strong><strong>箭头函数</strong></strong></p><blockquote><p>ES6标准新增了一种新的函数：Arrow Function（箭头函数）。箭头函数相当于匿名函数，并且简化了函数定义。</p></blockquote><p>箭头函数表达式没有自己的 this,arguments,super 或 new.target。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>(a, b) =&gt; a - b;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面的箭头函数相当于：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function(a, b){
    return a - b
});

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>完整代码是一个数组排序方法</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var points = [40, 100, 1, 5, 25, 10];
var arr = points.sort((a, b) =&gt; a - b);
console.log(arr);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>箭头函数相当于匿名函数，并且简化了函数定义。箭头函数有两种格式，一种像上面的，只包含一个表达式，连{ ... }和return都省略掉了。还有一种可以包含多条语句，这时候就不能省略{ ... }和return：</p><p><strong><strong>箭头函数作用</strong></strong></p><blockquote><p>引入箭头函数的作用：更简短的函数并且不绑定this</p></blockquote><p><strong>更简短的函数并且不绑定this</strong></p><p>在箭头函数出现之前，每个新定义的函数都有他自己的this值。（在构造函数的情况下是一个新对象，在严格模式的函数调用中为 undefined，如果该函数被作为“对象方法”调用则为基础对象等）。</p><p><strong>通过call、apply调用箭头函数</strong></p><p>由于箭头函数没有自己的this指针，通过call()、apply()方法调用时，第一个参数会被忽略。（箭头函数中若用了this，这个this指向包裹箭头函数的第一个普通函数的 this。）</p><p><strong>不绑定arguments</strong></p><p>大多数情况下，使用剩余参数是相较于arguments对象的更好选择。</p><p><strong>箭头函数不能使用new操作符</strong></p><p>箭头函数不能用作构造器，和 new一起用会抛出错误。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var Foo = () =&gt; {};
var foo = new Foo(); // TypeError: Foo is not a constructor

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>箭头函数没有prototype属性</strong></p><p><strong>箭头函数不能用作生成器</strong></p><p>yield 关键字通常不能在箭头函数中使用（除非是嵌套在允许使用的函数内）。因此，箭头函数不能用作生成器。</p><p><strong>返回对象字面量时</strong></p><p>箭头函数返回简单值时可以简写成：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let sum = ( x, y ) =&gt; x + y
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>but返回对象字面量时不可以这样 var func = () =&gt; {foo: 1} ,需要用圆括号括起来</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var func = () =&gt; ({foo: 1});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="二、原型" tabindex="-1"><a class="header-anchor" href="#二、原型" aria-hidden="true">#</a> <strong>二、原型</strong></h1><p><strong><strong>构造函数和原型</strong></strong></p><p>在典型的 OOP 的语言中（如 Java），都存在类的概念，类就是对象的模板，对象就是类的实例，但在 E56之前，JS 中并没用引入类的概念。</p><p>ES6，全称ECMASript6.0，2015.06发版。但是目前浏览器的 JavaScipt是ES5 版本，大多数高版本的浏览器也支持 ES6，不过只实现了 ES6 的部分特性和功能。</p><p>在ES6之前，对象不是基于类创建的，而是用一种称为构建函数的特殊函数来定义对象和它们的特征,</p><p>创建对象可以通过以下三种方式：</p><ul><li><ol><li>对象字面量</li></ol></li><li><ol start="2"><li>new Object</li></ol></li><li><ol start="3"><li>自定义构造函数</li></ol></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 1.利用 对象字面量 创建对象
var obj1 = {};

// 2.利用 new Object 创建对象
var obj2 = new Object();

// 3.利用 构造函数 创建对象
function Fn(uname, age) {
    this.uname = uname;
    this.age = age;
    this.sing = function(music) {
        console.log(&#39;我会唱&#39; + music)
    }
}
var fn1 = new Fn(&#39;小明&#39;, 8);
fn1.sing(&#39;水手&#39;);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="三、构造函数" tabindex="-1"><a class="header-anchor" href="#三、构造函数" aria-hidden="true">#</a> <strong>三、构造函数</strong></h1><p><strong><strong>什么是构造函数</strong></strong></p><blockquote><p>构造函数是一种特殊的函数，主要用来初始化实例对象，即为对象成员变量赋初始值，它总与new一起使用。我们可以把对象中一些公共的属性和方法抽取出来，然后封装到这个函数里面。</p></blockquote><p><strong>new在执行时会做四件事情：</strong></p><ul><li>1、在内存中创建一个新的空对象</li><li>2、让this指向这个新的对象</li><li>3、执行构造函数里的代码，给这个新对象添加属性和方法</li><li>4、返回这个新对象（所以构造函数里面不需要return）</li></ul><p>JavaScript的构造函数中可以添加一些成员，可以在构造函数本身上添加，也可以在构造函数内部的this上添加。通过这两种方式添加的成员，就分别称为静态成员和实例成员</p><ul><li>静态成员：在构造函数本身上添加的成员称为静态成员，只能由构造函数本身来访问。</li><li>实例成员：在构造函数内部创建的对象成员称为实例成员，只能由实例化的对象来访问。</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function Fn(uname) {
    this.uname = uname;
}
Fn.uname = &#39;Bibo&#39;;
var fn1 = new Fn(&#39;cindy&#39;);
console.log(fn1.uname); // cindy

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>构造函数注意事项</strong></strong></p><ul><li>1.默认函数首字母大写</li><li>2.构造函数并没有显示返回任何东西。new 操作符会自动创建给定的类型并返回他们，当调用构造函数时，new会自动创建this对象，且类型就是构造函数类型。</li><li>3.也可以在构造函数中显示调用return.如果返回的值是一个对象，它会代替新创建的对象实例返回。如果返回的值是一个原始类型，它会被忽略，新创建的实例会被返回。</li><li>4.因为构造函数也是函数，所以可以直接被调用，但是它的返回值为undefine，此时构造函数里面的this对象等于全局this对象。this.name其实就是创建一个全局的变量name。在严格模式下，当你补通过new 调用Person构造函数会出现错误。</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function Person( name){
    this.name =name;
}
var p1=new Person(&#39;John&#39;);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>等同于</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function person(name ){
    Object obj =new Object();
    obj.name =name;
    return obj;
}
var p1= person(&quot;John&quot;);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>5.也可以在构造函数中用Object.defineProperty()方法来帮助我们初始化：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function Person( name){
Object.defineProperty(this, &quot;name&quot;{
    get :function(){
        return name;
    },
    set:function (newName){
    name =newName;
    },
    enumerable :true, //可枚举，默认为false
    configurable:true //可配置
    });
}
var p1=new Person(&#39;John&#39;);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>6.在构造函数中使用原型对象</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//比直接在构造函数中写的效率要高的多
Person.prototype.sayName= function(){
    console.log(this.name);
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>原型 prototype</strong></strong></p><ul><li>prototype 构造函数允许您向对象添加新的属性和方法。</li><li>在构造属性时，所有对象都将被赋予属性及其值，作为默认值。</li><li>在构造方法时，所有对象都可以使用此方法。</li></ul><p>注释：Prototype 是一个全局对象构造器，适用于所有 JavaScript 对象。</p><p><strong><strong>对象原型 <strong>proto</strong></strong></strong></p><blockquote><p>对象都会有一个属性__proto__指向构造函数的prototype原型对象，之所以我们可以使用构造函数prototype原型对象的属性方法，就是因为对象有__proto__原型的存在。</p></blockquote><p><strong><strong>构造函数 constructor</strong></strong></p><blockquote><p>对象原型（<strong>proto</strong>）和构造函数（constructor）原型对象里面都有一个constructor属性，constructor我们称为构造函数，因为它指回构造函数本身。</p></blockquote><p>constructor就是用来记录该对象引用于哪个构造函数，它可以让原型对象重新指向原来的构造函数。</p><h1 id="四、原型链" tabindex="-1"><a class="header-anchor" href="#四、原型链" aria-hidden="true">#</a> <strong>四、原型链</strong></h1><p>在JavaScript中万物都是对象，对象和对象之间也有关系，并不是孤立存在的。对象之间的继承关系，在JavaScript中是通过prototype对象指向父类对象，直到指向Object对象为止，这样就形成了一个原型指向的链条，专业术语称之为原型链。</p><p>举例说明:person → Person → Object ，普通人继承人类，人类继承对象类</p><p>当我们访问对象的一个属性或方法时，它会先在对象自身中寻找，如果有则直接使用，如果没有则会去原型对象中寻找，如果找到则直接使用。如果没有则去原型的原型中寻找,直到找到Object对象的原型，Object对象的原型没有原型，如果在Object原型中依然没有找到，则返回undefined。</p><p>我们可以使用对象的hasOwnProperty()来检查对象自身中是否含有该属性；使用in检查对象中是否含有某个属性时，如果对象中没有但是原型中有，也会返回true</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function Person() {}
Person.prototype.a = 123;
Person.prototype.sayHello = function () {
    alert(&quot;hello&quot;);
};
var person = new Person()
console.log(person.a)//123
console.log(person.hasOwnProperty(&#39;a&#39;));//false
console.log(&#39;a&#39;in person)//true

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>person实例中没有a这个属性，从 person 对象中找不到 a 属性就会从 person 的原型也就是 person.<strong>proto</strong> ，也就是 Person.prototype中查找，很幸运地得到a的值为123。那假如 person.__proto__中也没有该属性，又该如何查找？</p><p>当读取实例的属性时，如果找不到，就会查找与对象关联的原型中的属性，如果还查不到，就去找原型的原型，一直找到最顶层Object为止。Object是JS中所有对象数据类型的基类(最顶层的类)在Object.prototype上没有__proto__这个属性。</p><p>每个函数都有一个prototype属性，这个属性指向函数的原型对象。</p><p>每个对象(除null外)都会有的属性，叫做__proto__，这个属性会指向该对象的原型</p><p>每个原型都有一个constructor属性，指向该原型关联的构造函数。</p><p><img src="`+c+`" alt="Untitled"></p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token comment">// Function 类</span>
<span class="token keyword">class</span> <span class="token class-name">Function</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">uname<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>uname <span class="token operator">=</span> uname<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 利用类创建对象</span>
<span class="token keyword">var</span> fun <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Function</span><span class="token punctuation">(</span><span class="token string">&#39;小明&#39;</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">)</span>
 
<span class="token comment">// 构造函数Fn()</span>
<span class="token keyword">function</span> <span class="token function">Fn</span><span class="token punctuation">(</span><span class="token parameter">uname<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>uname <span class="token operator">=</span> uname<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 对象fn</span>
<span class="token keyword">var</span> fn <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Fn</span><span class="token punctuation">(</span><span class="token string">&#39;小明&#39;</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> fn1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Fn</span><span class="token punctuation">(</span><span class="token string">&#39;小红&#39;</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>fn<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> <span class="token class-name">Fn</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>fun<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> <span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token class-name">Fn</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token class-name">Object</span><span class="token punctuation">.</span>prototype <span class="token operator">===</span> <span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>__proto__<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果我们手动修改了原来的原型对象，给原型对象赋值的是一个对象，则必须手动的利用construtor指回原来的构造函数。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 构造函数Fn()
function Fn(uname, age) {
    this.uname = uname;
    this.age = age;
}

Fn.prototype = {
    constructor: Fn,
    sing: function() {
        console.log(&#39;我会唱歌&#39;);
    },
    sing: function() {
        console.log(&#39;我会唱歌&#39;);
    }
}

// 对象fn
var fn = new Fn(&#39;小明&#39;, 8);
var fn1 = new Fn(&#39;小红&#39;, 7);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,79),d={href:"https://www.jianshu.com/p/f853d6a7b548",target:"_blank",rel:"noopener noreferrer"};function v(m,b){const a=t("ExternalLinkIcon");return i(),o("div",null,[u,n("p",null,[s("本文参考："),n("a",d,[s("JS箭头函数"),l(a)])])])}const k=e(r,[["render",v],["__file","原型链.html.vue"]]);export{k as default};
