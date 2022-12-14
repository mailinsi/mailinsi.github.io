import{_ as t,r as l,o as d,c as s,b as e,d as n,e as a,a as r}from"./app.74a5dc6f.js";const o="/assets/Untitled.8a75acff.png",c="/assets/Untitled1.97d92b4c.png",v={},u=r(`<h1 id="dom-bom" tabindex="-1"><a class="header-anchor" href="#dom-bom" aria-hidden="true">#</a> DOM &amp; BOM</h1><h1 id="javascript-dom和bom、节点" tabindex="-1"><a class="header-anchor" href="#javascript-dom和bom、节点" aria-hidden="true">#</a> <strong>JavaScript DOM和BOM、节点</strong></h1><h1 id="一、javascript组成" tabindex="-1"><a class="header-anchor" href="#一、javascript组成" aria-hidden="true">#</a> <strong>一、Javascript组成</strong></h1><p><strong>Javascript组成</strong></p><p>JavaScript的实现包括以下3个部分：</p><ul><li>ECMAScript(核心)：描述了JS的语法和基本对象。</li><li>文档对象模型 （DOM）：处理网页内容的方法和接口。</li><li>浏览器对象模型（BOM）：与浏览器交互的方法和接口。</li></ul><p>JavaScript 有三部分构成，ECMAScript，DOM和BOM，根据宿主（浏览器）的不同，具体的表现形式也不尽相同，ie和其他的浏览器风格迥异,IE 扩展了 BOM，加入了 ActiveXObject 类，可以通过 JavaScript 实例化 ActiveX 对象</p><ul><li><ol><li>DOM 是 W3C 的标准； [所有浏览器公共遵守的标准]</li></ol></li><li><ol start="2"><li>BOM 是 各个浏览器厂商根据 DOM在各自浏览器上的实现;[表现为不同浏览器定义有差别,实现方式不同]</li></ol></li><li><ol start="3"><li>window 是 BOM 对象，而非 js 对象；javacsript是通过访问BOM（Browser Object Model）对象来访问、控制、修改客户端(浏览器)</li></ol></li></ul><p><strong>ECMAScript扩展知识：</strong></p><ul><li>① ECMAScript是一个标准，JS只是它的一个实现，其他实现包括ActionScript。</li><li>② “ECMAScript可以为不同种类的宿主环境提供核心的脚本编程能力……”，即ECMAScript不与具体的宿主环境相绑定，如JS的宿主环境是浏览器，AS的宿主环境是Flash。</li><li>③ECMAScript描述了以下内容：语法、类型、语句、关键字、保留字、运算符、对象。</li></ul><p><strong>DOM, DOCUMENT, BOM, WINDOW 区别</strong></p><ul><li>DOM 是为了操作文档出现的 API，document 是其的一个对象；</li><li>BOM 是为了操作浏览器出现的 API，window 是其的一个对象。</li></ul><p>BOM是浏览器对象模型，DOM是文档对象模型，前者是对浏览器本身进行操作，而后者是对浏览器（可看成容器）内的内容进行操作</p><p>归DOM管的：</p><p>E区（就是你说的document啦。由web开发人员呕心沥血写出来的一个文件夹，里面有index.html，CSS和JS什么鬼的，部署在服务器上，我们可以通过浏览器的地址栏输入URL然后回车将这个document加载到本地，浏览，右键查看源代码等。</p><p>归BOM管的：</p><ul><li>A区（浏览器的标签页，地址栏，搜索栏，书签栏，窗口放大还原关闭按钮，菜单栏等等）</li><li>B区（浏览器的右键菜单）</li><li>C区（document加载时的状态栏，显示http状态码等）</li><li>D区（滚动条scroll bar）</li></ul><p><strong><strong>DOM</strong></strong></p><blockquote><p>DOM 全称是 Document Object Model，也就是文档对象模型。是针对XML的基于树的API。描述了处理网页内容的方法和接口，是HTML和XML的API，DOM把整个页面规划成由节点层级构成的文档。</p></blockquote><p>这个DOM定义了一个HTMLDocument和HTMLElement做为这种实现的基础,就是说为了能以编程的方法操作这个 HTML 的内容（比如添加某些元素、修改元素的内容、删除某些元素），我们把这个 HTML 看做一个对象树（DOM树），它本身和里面的所有东西比如 <code>&lt;div&gt;&lt;/div&gt;</code>这些标签都看做一个对象，每个对象都叫做一个节点（node），节点可以理解为 DOM 中所有 Object 的父类。</p><p>DOM 有什么用？就是为了操作 HTML 中的元素，比如说我们要通过 JS 把这个网页的标题改了，直接这样就可以了：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>document.title = &#39;how to make love&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这个 API 使得在网页被下载到浏览器之后改变网页的内容成为可能。</p><p><strong><strong>document</strong></strong></p><p>当浏览器下载到一个网页，通常是 HTML，这个 HTML 就叫 document（当然，这也是 DOM 树中的一个 node），从上图可以看到，document 通常是整个 DOM 树的根节点。这个 document 包含了标题（document.title）、URL（document.URL）等属性，可以直接在 JS 中访问到。</p><p>在一个浏览器窗口中可能有多个 document，例如，通过 iframe 加载的页面，每一个都是一个 document。</p><p>在 JS 中，可以通过 document 访问其子节点（其实任何节点都可以），如</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>document.body;document.getElementById(&#39;xxx&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong><strong>BOM</strong></strong></p><blockquote><p>BOM 是 Browser Object Model，浏览器对象模型。</p></blockquote><p>刚才说过 DOM 是为了操作文档出现的接口，那 BOM 顾名思义其实就是为了控制浏览器的行为而出现的接口。</p><p>浏览器可以做什么呢？比如跳转到另一个页面、前进、后退等等，程序还可能需要获取屏幕的大小之类的参数。</p><p>所以 BOM 就是为了解决这些事情出现的接口。比如我们要让浏览器跳转到另一个页面，只需要</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>location.href = &quot;http://www.xxxx.com&quot;;这个 location 就是 BOM 里的一个对象。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>由于BOM的window包含了document，因此可以直接使用window对象的document属性，通过document属性就可以访问、检索、修改XHTML文档内容与结构。因为document对象又是DOM（Document Object Model）模型的根节点。</p><p>可以说，BOM包含了DOM(对象)，浏览器提供出来给予访问的是BOM对象，从BOM对象再访问到DOM对象，从而js可以操作浏览器以及浏览器读取到的文档。</p><p><strong><strong>window</strong></strong></p><p>window 也是 BOM 的一个对象，除去编程意义上的“兜底对象”之外，通过这个对象可以获取窗口位置、确定窗口大小、弹出对话框等等。例如我要关闭当前窗口：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>window.close();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="二、dom" tabindex="-1"><a class="header-anchor" href="#二、dom" aria-hidden="true">#</a> <strong>二、DOM</strong></h1><p><strong><strong>DOM事件</strong></strong></p><p>DOM同时两种事件模型：冒泡型事件和捕获型事件</p><p>冒泡型事件：事件按照从最特定的事件目标到最不特定的事件目标的顺序触发</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;body οnclick=&quot;handleClick()&quot;&gt;
    &lt;div οnclick=&quot;handleClick()&quot;&gt;Click Me&lt;/div&gt;
&lt;/body&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>触发的顺序是：div、body、html(IE 6.0和Mozilla 1.0)、document、window(Mozilla 1.0)</p><p>捕获型事件：与冒泡事件相反的过程，事件从最不精确的对象开始触发，然后到最精确</p><p>上面例子触发的顺序是：document、div</p><p>DOM事件模型最独特的性质是，文本节点也触发事件(在IE中不会)。</p><p><strong>1）事件处理函数/监听函数</strong></p><p>在JavaScript中：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var oDiv = document.getElementById(&quot;div1&quot;);
oDiv.onclick = function(){ //onclick只能用小写
    alert(&quot;Clicked!&quot;);
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var elem =document.getElementById(“id”)
elem.οnmοuseοver=handleMouseOver  //handleMouseOver  是函数名
function handleMouseOve(e){...}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在HTML中：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div οnclick=&quot;javascript: alert(&quot;Clicked!&quot;)&quot;&gt;&lt;/div&gt; //onclick大小写任意
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>扩展:</p><p>IE事件处理程序attachEvent()和detachEvent()</p><p>在IE中，每个元素和window对象都有两个方法：attachEvent()和detachEvent()，这两个方法接受两个相同的参数，事件处理程序名称和事件处理程序函数，如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[object].attachEvent(&quot;name_of_event_handler&quot;,&quot;function_to_attach&quot;)
[object].detachEvent(&quot;name_of_event_handler&quot;,&quot;function_to_remove&quot;)
var fnClick = function(){
    alert(&quot;Clicked!&quot;);
}
oDiv.attachEvent(&quot;onclick&quot;, fnClick); //添加事件处理函数
oDiv.attachEvent(&quot;onclick&quot;, fnClickAnother); // 可以添加多个事件处理函数
oDiv.detachEvent(&quot;onclick&quot;, fnClick); //移除事件处理函数

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在使用attachEvent()方法的情况下，事件处理程序会在全局作用域中运行，因此this等于window。</p><p><strong>2）跨浏览器的事件处理程序</strong></p><p>addHandler()和removeHandler()</p><p>addHandler()方法属于一个叫EventUntil()的对象，这两个方法均接受三个相同的参数，要操作的元素，事件名称和事件处理程序函数。</p><p><strong>3）事件处理器</strong></p><p>执行JavaScript 代码的程序在事件发生时会对事件做出响应。为了响应一个特定事件</p><p>而被执行的代码称为事件处理器。</p><p>在HTML标签中使用事件处理器的语法是：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;HTML标签 事件处理器=&quot;JavaScript代码&#39;&#39;&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>4）事件处理程序</strong></p><p>事件就是用户或浏览器自身执行的某种动作。比如click,mouseup,keydown,mouseover等都是事件的名字。而响应某个事件的函数就叫事件处理程序（事件监听器），事件处理程序以on开头，因此click的事件处理程序就是onclick</p><p><strong>5）DOM 0级事件处理程序</strong></p><p>DOM 0级事件处理程序：把一个函数赋值给一个事件的处理程序属性</p><p>HTML</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;input type=&quot;button&quot; value=&quot;按钮2&quot; id=&quot;ben2&quot;/&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>JS</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var btn2=document.getElementById(&#39;btn2&#39;);获得btn2按钮对象
btn2.onclick      //给btn2添加onclick属性，属性又触发了一个事件处理程序

btn2.οnclick=function(){
}                    //添加匿名函数

btn2.οnclick=null      //删除onclick属性

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>6）DOM 2级事件处理程序</strong></p><p>DOM 2级事件定义了两个方法，用于指定和删除事件处理程序的操作。addEventListener()和removeEventListener()</p><p>addEventListener()和removeEventListener()</p><p>在DOM中，addEventListener()和removeEventListener()用来分配和移除事件处理函数，与IE不同的是，这些方法需要三个参数：事件名称，要分配的函数和处理函数是用于冒泡阶段(false)还是捕获阶段(true)，默认为冒泡阶段false</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[object].addEventListener(&quot;name_of_event&quot;,fnhander,bcapture)
[object].removeEventListener(&quot;name_of_event&quot;,fnhander,bcapture)
var fnClick = function(){
    alert(&quot;Clicked!&quot;);
}
oDiv.addEventListener(&quot;onclick&quot;, fnClick, false); //添加事件处理函数
oDiv.addEventListener(&quot;onclick&quot;, fnClickAnother, false); // 与IE一样，可以添加多个事件处理函数
oDiv.removeEventListener(&quot;onclick&quot;, fnClick, false); //移除事件处理函数

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果使用addEventListener()将事件处理函数加入到捕获阶段，则必须在removeEventListener()中指明是捕获阶段，才能正确地将这个事件处理函数删除</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>oDiv.onclick = fnClick;
oDiv.onclick = fnClickAnother; //使用直接赋值，后续的事件处理函数会覆盖前面的处理函数
oDiv.onclick = fnClick;
oDiv.addEventListener(&quot;onclick&quot;, fnClickAnother, false); //会按顺序进行调用，不会覆盖

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>7）事件类型</strong></p><ul><li>鼠标事件：click、dbclick、mousedown、mouseup、mouseover、mouseout、mousemove</li><li>键盘事件：keydown、keypress、keyup</li><li>HTML事件：load、unload、abort、error、select、change、submit、reset、resize、scroll、focus、blur</li></ul><p>Window 事件属性(没加蓝的都是h 5新事件)</p><p>针对 window 对象触发的事件（应用到 标签）：</p><p>属性</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>onafterprint    文档打印之后运行的脚本。
onbeforeprint 文档打印之前运行的脚本。
onbeforeunload 文档卸载之前运行的脚本。
onerror 在错误发生时运行的脚本。
onhaschange 当文档已改变时运行的脚本。
onload 页面结束加载之后触发。
onmessage 在消息被触发时运行的脚本。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以使用调用 postMessage ()向主线程发送消息,在某些场景下，业务调用方可能需要主动跟定位组件通信,可以通过html5 postMessage的方式主动与定位组件发起通信</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>onoffline 当文档离线时运行的脚本。
ononline 当文档上线时运行的脚本。
onpagehide 当窗口隐藏时运行的脚本。
onpageshow 当窗口成为可见时运行的脚本。
onpopstate 当窗口历史记录改变时运行的脚本。
onredo 当文档执行撤销（redo）时运行的脚本。
onresize 当浏览器窗口被调整大小时触发。
onstorage 在 Web Storage 区域更新后运行的脚本。
onundo 在文档执行 undo 时运行的脚本。
onunload 一旦页面已下载时触发（或者浏览器窗口已被关闭）。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Form 事件</p><p>由 HTML 表单内的动作触发的事件（应用到几乎所有 HTML 元素，但最常用在 form 元素中）：</p><p>属性</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>onblur 元素失去焦点时运行的脚本。
onchange在元素值被改变时运行的脚本。
oncontextmenu 当上下文菜单被触发时运行的脚本。
onfocus 当元素失去焦点时运行的脚本。
onformchange 在表单改变时运行的脚本。
onforminput 当表单获得用户输入时运行的脚本。
oninput 当元素获得用户输入时运行的脚本。
oninvalid 当元素无效时运行的脚本。
onreset 当表单中的重置按钮被点击时触发。HTML5 中不支持。
onselect 在元素中文本被选中后触发。
onsubmit 在提交表单时触发。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Event对象</p><p>Event对象的常用属性</p><p>名称 说明 返回 type 事件的名称如mouseover 字符串 target 事件指向的元素 HTMLElement 获得event对象兼容性写法</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>document.οnclick=function(event){
    event = event || window.event;
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>个别事件讲解</p><p>oninput,onpropertychange,onchange的用法</p><p>oninput:</p><p>oninput 事件在用户输入时触发。</p><p>该事件在 &lt;input&gt; 或 &lt;textarea&gt; 元素的值发生改变时触发。</p><p>提示： 该事件类似于 onchange 事件。不同之处在于 oninput 事件在元素值发生变化是立即触发， onchange 在元素失去焦点时触发。另外一点不同是 onchange 事件也可以作用于 &lt;keygen&gt; 和 &lt;select&gt; 元素。</p><p>onchange</p><p>onchange 事件会在域的内容改变时发生。</p><p>onchange 事件也可用于单选框与复选框改变后触发的事件。</p><p>onchange触发事件必须满足两个条件：</p><ul><li>a）当前对象属性改变，并且是由键盘或鼠标事件激发的（脚本触发无效）</li><li>b）当前对象失去焦点(onblur)；</li></ul><p>onpropertychange的话，只要当前对象属性发生改变，都会触发事件，但是它是IE专属的；</p><p>oninput是onpropertychange的非IE浏览器版本，支持firefox和opera等浏览器，但有一点不同，它绑定于对象时，并非该对象所有属性改变都能触发事件，它只在对象value值发生改变时奏效。</p><p>在textarea中，如果想捕获用户的键盘输入，用onkeyup检查事件就可以了，但是onkeyup并不支持复制和粘贴，因此需要动态监测textarea中值的变化，这就需要onpropertychange（用在IE浏览器）和oninput（非IE浏览器）结合在一起使用了。</p><p>移动端 触摸事件</p><p>ontouchstart、ontouchmove、ontouchend、ontouchcancel</p><p>1、Touch事件简介</p><p>pc上的web页面鼠 标会产生onmousedown、onmouseup、onmouseout、onmouseover、onmousemove的事件，但是在移动终端如 iphone、ipod Touch、ipad上的web页面触屏时会产生ontouchstart、ontouchmove、ontouchend、ontouchcancel 事件，分别对应了触屏开始、拖拽及完成触屏事件和取消。</p><ul><li>当按下手指时，触发ontouchstart；</li><li>当移动手指时，触发ontouchmove；</li><li>当移走手指时，触发ontouchend。</li></ul><p>当一些更高级别的事件发生的时候（如电话接入或者弹出信息）会取消当前的touch操作，即触发ontouchcancel。一般会在ontouchcancel时暂停游戏、存档等操作。</p><p>2、Touch事件与Mouse事件的出发关系</p><p>在触屏操作后，手指提起的一刹那（即发生ontouchend后），系统会判断接收到事件的element的内容是否被改变，如果内容被改变，接下来的事 件都不会触发，如果没有改变，会按照mousedown，mouseup，click的顺序触发事件。特别需要提到的是，只有再触发一个触屏事件时，才会 触发上一个事件的mouseout事件。</p><h1 id="三、bom-浏览器对象模型" tabindex="-1"><a class="header-anchor" href="#三、bom-浏览器对象模型" aria-hidden="true">#</a> <strong>三、BOM (浏览器对象模型)</strong></h1><p>BOM和DOM的结构关系示意图</p><ul><li>BOM的核心是Window，而Window对象又具有双重角色，它既是通过js访问浏览器窗口的一个接口，又是一个Global（全局）对象。这意味着在网页中定义的任何对象，变量和函数，都以window作为其global对象。</li><li>Window对象包含属性：document、location、navigator、screen、history、frames</li><li>Document根节点包含子节点：forms、location、anchors、images、links</li></ul><p>从window.document已然可以看出，DOM的最根本的对象是BOM的window对象的子对象。</p><p>区别：DOM描述了处理网页内容的方法和接口，BOM描述了与浏览器进行交互的方法和接口</p><p><strong><strong>Window对象</strong></strong></p><ul><li>Window 对象是 JavaScript 层级中的顶层对象。</li><li>Window 对象代表一个浏览器窗口或一个框架。</li><li>Window 对象会在 &lt;body&gt; 或 &lt;frameset&gt; 每次出现时被自动创建。</li></ul><p><strong>1）对象属性</strong></p><p>成员对象属性</p><ul><li>window //窗户自身, window=window.self 可使用全局属性 window访问Window对象</li><li>document 对 Document 对象的只读引用。请参阅 Document 对象。</li><li>history 对 History 对象的只读引用。请参数 History 对象。</li><li>location 用于窗口或框架的 Location 对象。请参阅 Location 对象。</li><li>screen 对 Screen 对象的只读引用。请参数 Screen 对象。</li><li>navigator 对 Navigator 对象的只读引用。请参数 Navigator 对象。</li><li>external.AddFavorite(&quot;地址&quot;,&quot;标题&quot; ) //把网站新增到保藏夹</li></ul><p>基本属性 属性 描述 closed 返回窗口是否已被关闭。 defaultStatus 设置或返回窗口状态栏中的默认文本。 innerheight 返回窗口的文档显示区的高度。 innerwidth 返回窗口的文档显示区的宽度。 length 设置或返回窗口中的框架数量。 name 设置或返回窗口的名称。 opener 返回对创建此窗口的窗口的引用。 outerheight 返回窗口的外部高度。 outerwidth 返回窗口的外部宽度。 pageXOffset 设置或返回当前页面相对于窗口显示区左上角的 X 位置。 pageYOffset 设置或返回当前页面相对于窗口显示区左上角的 Y 位置。 parent 返回父窗口。 self 返回对当前窗口的引用。等价于 Window 属性。 window window 属性等价于 self 属性，它包含了对窗口自身的引用。 status 设置窗口状态栏的文本。 top 返回最顶层的先辈窗口。 screenLeft screenTop screenX screenY</p><p>只读整数。声明了窗口的左上角在屏幕上的的 x 坐标和 y 坐标。IE、Safari 和 Opera 支持 screenLeft 和 screenTop，而 Firefox 和 Safari 支持 screenX 和 screenY。</p><p><strong>2）对象方法</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>window.close(); //关闭窗口
window.alert(&quot;message&quot;); //弹出一个具有OK按钮的系统消息框，显示指定的文本
window.confirm(&quot;Are you sure?&quot;); //弹出一个具有OK和Cancel按钮的询问对话框，返回一个布尔值
window.prompt(&quot;What&#39;s your name?&quot;, &quot;Default&quot;); //提示用户输入信息，接受两个参数，即要显示给用户的文本和文本框中的默认值，将文本框中的值作为函数值返回
window.status //可以使状态栏的文本暂时改变
window.defaultStatus //默认的状态栏信息，可在用户离开当前页面前一直改变文本
window.setTimeout(&quot;alert(&#39;xxx&#39;)&quot;, 1000); //设置在指定的毫秒数后执行指定的代码，接受2个参数，要执行的代码和等待的毫秒数
window.clearTimeout(&quot;ID&quot;); //取消还未执行的暂停，将暂停ID传递给它
window.setInterval(function, 1000); //无限次地每隔指定的时间段重复一次指定的代码，参数同setTimeout()一样
window.clearInterval(&quot;ID&quot;); //取消时间间隔，将间隔ID传递给它
window.history.go(-1); //访问浏览器窗口的历史，负数为后退，正数为前进
window.history.back(); //同上
window.history.forward(); //同上
window.history.length //可以查看历史中的页面数
clearInterval() 取消由 setInterval() 设置的 timeout。
clearTimeout() 取消由 setTimeout() 方法设置的 timeout。
createPopup() 创建一个 pop-up 窗口。
moveBy() 可相对窗口的当前坐标把它移动指定的像素。
moveTo() 把窗口的左上角移动到一个指定的坐标。
open() 打开一个新的浏览器窗口或查找一个已命名的窗口。
print() 打印当前窗口的内容。
resizeBy() 按照指定的像素调整窗口的大小。
resizeTo() 把窗口的大小调整到指定的宽度和高度。
scrollBy() 按照指定的像素值来滚动内容。
scrollTo() 把内容滚动到指定的坐标。
setInterval() 按照指定的周期（以毫秒计）来调用函数或计算表达式。
setTimeout(方法,秒数) 在指定的毫秒数后调用函数或计算表达式。
timeOutEvent = setTimeout(&quot;longPress(&#39;&quot; + obj + &quot;&#39;)&quot;,1500);定时器传参数

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>扩展</strong></p><ul><li>① 如果文档包含框架（frame 或 iframe 标签），浏览器会为 HTML 文档创建一个 window 对象，并为每个框架创建一个额外的 window 对象。</li><li>② window.frames 返回窗口中所有命名的框架</li><li>③parent是父窗口（如果窗口是顶级窗口，那么parent==self==top） <ul><li>top是最顶级父窗口（有的窗口中套了好几层frameset或者iframe）</li><li>self是当前窗口（等价window）</li><li>opener是用open方法打开当前窗口的那个窗口</li></ul></li><li>④与消息框有关的方法：alert(String)、confirm(String)、prompt(String)</li><li>⑤两种定时器：setTimeout(code,latency) 和 setInterval(code,period)</li></ul><p>注：setTimeout只执行一次code，如果要多次调用，可以让code自身再次调用setTimeout()；setInteval()会不停地调用code，直到clearInterval()被调用。</p><p><strong><strong>History对象</strong></strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>window.history.length //浏览过的页面数
history.back() //在浏览历史里后退一步
history.forward() //在浏览历史里前进一步
history.go(i) //到汗青详细登记单的第i位
//i&gt;0进步,i&lt;0撤退退却

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>Screen对象</strong></strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>screen对象：用于获取某些关于用户屏幕的信息，也可用window.screen引用它
window.screen.width //屏幕宽度
window.screen.height //屏幕高度
window.screen.colorDepth //屏幕颜色深度
window.screen.availWidth //可用宽度(除去任务栏的高度)
window.screen.availHeight //可用高度(除去任务栏的高度)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>Navigator对象</strong></strong></p><p>navigator\`对象：包含大量有关Web浏览器的信息，在检测浏览器及操作系统上非常有用</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>window.navigator.appCodeName //浏览器代码名
window.navigator.appName //浏览器步伐名
window.navigator.appMinorVersion //浏览器补钉版本
window.navigator.cpuClass //cpu类型 x86
window.navigator.platform //操作体系类型 win32
window.navigator.plugins
window.navigator.opsProfile
window.navigator.userProfile
window.navigator.systemLanguage //客户体系语言 zh-cn简体中文
window.navigator.userLanguage //用户语言,同上
window.navigator.appVersion //浏览器版本(包括 体系版本)
window.navigator.userAgent//用户代理头的字符串表示
window.navigator.onLine //用户否在线
window.navigator.cookieEnabled //浏览器是否撑持cookie
window.navigator.mimeTypes

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>Location对象</strong></strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>location对象：表示载入窗口的URL，也可用window.location引用它
location.href //当前载入页面的完整URL，如http://www.somewhere.com/pictures/index.htm
location.portocol //URL中使用的协议，即双斜杠之前的部分，如http
location.host //服务器的名字，如www.wrox.com
location.hostname //通常等于host，有时会省略前面的www
location.port //URL声明的请求的端口，默认情况下，大多数URL没有端口信息，如8080
location.pathname //URL中主机名后的部分，如/pictures/index.htm
location.search //执行GET请求的URL中的问号后的部分，又称查询字符串，如?param=xxxx
location.hash //如果URL包含#，返回该符号之后的内容，如#anchor1
location.assign(&quot;http:www.baidu.com&quot;); //同location.href，新地址都会被加到浏览器的历史栈中
location.replace(&quot;http:www.baidu.com&quot;); //同assign()，但新地址不会被加到浏览器的历史栈中，不能通过back和forward访问
location.reload(true | false); //重新载入当前页面，为false时从浏览器缓存中重载，为true时从服务器端重载，默认为false
document.location.reload(URL) //打开新的网页

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>Document对象</strong></strong></p><ul><li>HtmlDocument 为 Internet Explorer 的文档对象提供托管包装，该文档对象也称为 HTML 文档对象模型 (DOM)。您可以通过 WebBrowser 控件的 Document 属性获取 HtmlDocument 的实例。</li><li>HTMLDocument 接口对 DOM Document 接口进行了扩展，定义 HTML 专用的属性和方法。</li><li>HTML 文档中的 HTML 标记可以相互嵌套。因此，HtmlDocument 表示一个文档树，其子级是 HtmlElement 类的实例。下面的代码示例演示一个简单的 HTML 文件。</li><li>HtmlDocument 表示 HTML 标记内的整个文档。BODY、DIV、FORM 和 SPAN 标记各由一个单独的 HtmlElement 对象表示。</li></ul><p><strong>1）对象属性</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>document.body//提供对 &lt;body&gt; 元素的直接访问。对于定义了框架集的文档，该属性引用最外层的 &lt;frameset&gt;。
document.cookie 返回与当前文档有关的所有 cookie。
document.title //返回文档标题等价于HTML的title标签
document.domain 返回当前文档的域名。
document.URL //设置URL属性从而在同一窗口打开另一网页
document.referrer 返回载入当前文档的文档的 URL。
document.lastModified 返回文档被最后修改的日期和时间。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2）常用对象方法</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>document.write() //动态向页面写入内容
document.writeln() 等同于 write() 方法，不同的是在每个表达式之后写一个换行符。
document.createElement(&lt;Tag&gt;) //用指定标签类型创建一个新的element对象)
document.getElementById(ID) //获得指定ID值的对象
document.getElementsByName(Name) //获得指定Name值的对象
document.getElementsByTagName() 返回带有指定标签名的对象集合。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>3）body-主体子对象</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>document.body //指定文档主体的开始和结束等价于body&gt;/body&gt;
document.body.bgColor //设置或获取对象后面的背景颜色
document.body.link //未点击过的链接颜色
document.body.alink //激活链接(焦点在此链接上)的颜色
document.body.vlink //已点击过的链接颜色
document.body.text //文本色
document.body.innerText //设置body&gt;…/body&gt;之间的文本
document.body.innerHTML //设置body&gt;…/body&gt;之间的HTML代码
document.body.topMargin //页面上边距
document.body.leftMargin //页面左边距
document.body.rightMargin //页面右边距
document.body.bottomMargin //页面下边距
document.body.background //背景图片
document.body.appendChild(oTag) //动态生成一个HTML对象
Document子对象HTMLElement对象详解

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>HTML DOM 节点</strong></p><p>在 HTML DOM （文档对象模型）中，每个部分都是节点：</p><ul><li>1.文档本身是文档节点</li><li>2.所有 HTML 元素是元素节点</li><li>3.所有 HTML 属性是属性节点</li><li>4.HTML 元素内的文本是文本节点</li><li>5.注释是注释节点</li></ul><p><strong>Element 对象</strong></p><ul><li>在 HTML DOM 中，Element 对象表示 HTML 元素。</li><li>Element 对象可以拥有类型为元素节点、文本节点、注释节点的子节点。</li><li>NodeList 对象表示节点列表，比如 HTML 元素的子节点集合。</li></ul><p>元素也可以拥有属性。属性是属性节点</p><p>获取</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>document.getElementById(ID) //获得指定ID值的对象
document.getElementsByName(Name) //获得指定Name值的对象
getElementsByTagName() 返回带有指定标签名的对象集合。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>属性和方法</strong></p><p>方法里有a,b的参数仅仅是为了加深说明,其他元素没有a,b不代表是无参方法</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Element.add(&lt;class&gt;)给元素添加指定的类
element.accessKey 设置或返回元素的快捷键。
element.appendChild() 向元素添加新的子节点，作为最后一个子节点。
element.attributes 返回元素属性的集合。
element.childNodes 返回元素子节点的 NodeList。
element.className 设置或返回元素的 class 属性。
element.clientHeight 返回元素的可见高度。
element.clientWidth 返回元素的可见宽度。
element.cloneNode() 克隆元素。
element.compareDocumentPosition() 比较两个元素的文档位置。
element.contentEditable 设置或返回元素的文本方向。
element.dir 设置或返回元素的文本方向。
element.firstChild 返回元素的首个子。
element.getAttribute() 返回元素节点的指定属性值。
element.getAttributeNode() 返回指定的属性节点。
element.getElementsByTagName() 返回拥有指定标签名的所有子元素的集合。
element.getFeature() 返回实现了指定特性的 API 的某个对象。
element.getUserData() 返回关联元素上键的对象。
Element.hidden获取或设置hidden属性的存在状态
element.hasAttribute() 如果元素拥有指定属性，则返回true，否则返回 false。
element.hasAttributes() 如果元素拥有属性，则返回 true，否则返回 false。
element.hasChildNodes() 如果元素拥有子节点，则返回 true，否则 false。
element.id 设置或返回元素的 id。
element.innerHTML 设置或返回元素的内容。
element.insertBefore(&lt;a&gt;,&lt;b&gt;) 在指定的已有的子节点之前插入新节点。A插到b前
element.isContentEditable 设置或返回元素的内容。
element.isDefaultNamespace() 如果指定的 namespaceURI 是默认的，则返回 true，否则返回 false。
element.isEqualNode(&lt;a&gt;) 检查a元素是否与当前元素相等。
element.isSameNode(a) 检查指定元素是否就是当前元素.
element.isSupported() 如果元素支持指定特性，则返回 true。
element.lang 设置或返回元素的语言代码。
element.lastChild 返回元素的最后一个子元素。
element.namespaceURI 返回元素的 namespace URI。
element.nextSibling 返回当前元素之后的兄弟元素
element.nodeName 返回元素的名称。
element.nodeType 返回元素的节点类型。
element.nodeValue 设置或返回元素值。
element.normalize() 合并元素中相邻的文本节点，并移除空的文本节点。
element.offsetHeight 返回元素的高度。
element.offsetWidth 返回元素的宽度。
element.offsetLeft 返回元素的水平偏移位置。
element.offsetParent 返回元素的偏移容器。
element.offsetTop 返回元素的垂直偏移位置。
element.ownerDocument 返回元素的根元素（文档对象）。
element.parentNode 返回元素的父节点。
element.previousSibling 返回当前元素之前的兄弟元素
Element.remove(&lt;class&gt;) 从元素移除指定的类
element.removeAttribute() 从元素中移除指定属性。
element.removeAttributeNode() 移除指定的属性节点，并返回被移除的节点。
element.removeChild(a) 从元素中移除子节点。
element.replaceChild(a,b) 替换元素中的子节点。
element.scrollHeight 返回元素的整体高度。
element.scrollLeft 返回元素左边缘与视图之间的距离。
element.scrollTop 返回元素上边缘与视图之间的距离。
element.scrollWidth 返回元素的整体宽度。
element.setAttribute() 把指定属性设置或更改为指定值。
element.setAttributeNode() 设置或更改指定属性节点。
element.setIdAttribute()
element.setIdAttributeNode()
element.setUserData() 把对象关联到元素上的键。
element.style 设置或返回元素的 style 属性。
Element.toggle(&lt;class&gt;)如果类不存在就添加它存在就移除它
element.tabIndex 设置或返回元素的 tab 键控制次序。
element.tagName 返回元素的标签名。
element.textContent 设置或返回节点及其后代的文本内容。
element.title 设置或返回元素的 title 属性。
element.toString() 把元素转换为字符串。
nodelist.item() 返回 NodeList 中位于指定下标的节点。
nodelist.length 返回 NodeList 中的节点数。
contentWindow 属性    如果文档里有iframe属性利用此属性可以返回iframe的内容

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>事件监听方法单讲</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>element.addEventListener(event, function, useCapture)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>参数 描述 event 必须。字符串，指定事件名。 注意: 不要使用 &quot;on&quot; 前缀。 例如，使用 &quot;click&quot; ,而不是使用 &quot;onclick&quot;。 提示： 所有 HTML DOM 事件，可以查看我们完整的 HTML DOM Event 对象参考手册。 function 必须。指定要事件触发时执行的函数。 当事件对象会作为第一个参数传入函数。 事件对象的类型取决于特定的事件。例如， &quot;click&quot; 事件属于 MouseEvent(鼠标事件) 对象。 useCapture 可选。布尔值，指定事件是否在捕获或冒泡阶段执行。 可能值: true - 事件句柄在捕获阶段执行 false- false- 默认。事件句柄在冒泡阶段执行 Table 对象详解 Table 对象集合 集合 描述 cells[] 返回包含表格中所有单元格的一个数组。 rows[] 返回包含表格中所有行的一个数组。 tBodies[] 返回包含表格中所有 tbody 的一个数组。 rows 集合返回表格中所有行（TableRow 对象）的一个数组，该集合包括 &lt;thead&gt;、&lt;tfoot&gt; 和 &lt;tbody&gt; 中定义的所有行</p><p>TableRow 对象代表一个 HTML 表格行。</p><p>在 HTML 文档中 &lt;tr&gt; 标签每出现一次，一个 TableRow 对象就会被创建。</p><p>cells 集合返回表格中所有 &lt;td&gt; 或 &lt;th&gt; 元素。</p><p><strong>TableCell 对象</strong></p><p>TableCell 对象代表一个 HTML 表格单元格。</p><p>在一个 HTML 文档中 &lt;td&gt; 标签每出现一次，一个 TableCell 对象就会被创建</p><p><strong>Table 对象方法</strong></p><table><thead><tr><th>方法</th><th>描述</th></tr></thead><tbody><tr><td>createCaption()</td><td>为表格创建一个 caption 元素。</td></tr><tr><td>createTFoot()</td><td>在表格中创建一个空的 tFoot 元素。</td></tr><tr><td>createTHead()</td><td>在表格中创建一个空的 tHead 元素。</td></tr><tr><td>deleteCaption()</td><td>从表格删除 caption 元素以及其内容。</td></tr><tr><td>deleteRow()</td><td>从表格删除 tFoot 元素及其内容。</td></tr><tr><td>deleteTFoot()</td><td>从表格删除一行。</td></tr><tr><td>deleteTHead()</td><td>从表格删除 tHead 元素及其内容。</td></tr><tr><td>insertRow()</td><td>在表格中插入一个新行。</td></tr></tbody></table><h1 id="四、节点" tabindex="-1"><a class="header-anchor" href="#四、节点" aria-hidden="true">#</a> <strong>四、节点</strong></h1><p><strong><strong>常见节点操作</strong></strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>createElement() 创建元素节点。
appendChild() 把新的子节点添加到指定节点。
insertBefore(新的子节点,指定的子节点) 在指定的子节点前面插入新的子节点。
replaceChild() 替换子节点。
removeChild() 删除子节点。

createAttribute() 创建属性节点。
setAttribute() 把指定属性设置或修改为指定的值。
getAttribute() 返回指定的属性值。
removeAttribute() 删除属性节点.

createTextNode() 创建文本节点。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>获取节点</strong></strong></p><p><strong>1.获取第一个孩子</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>标准下： 元素.firstElementChild
非标准下： 元素.firstChild

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2.兼容下写法：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var list=document.getElementById(“list”)
var fist=list.firstElementChild||list.firstChild
console.log(fist)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>3.获取最后一个子节点</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>元素.lastElementChild
元素.lastchild

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>4.获取上一个兄弟节点</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>元素.previousElementSibling
元素.previousSibling

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>5.获取下一个兄弟节点</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>元素.nextElementSibling
元素.nextSibling

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>6.获取父节点</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>元素.parentNode 没有兼容性
元素.parentNode.parentNode

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>区分offsetParent和parentNode的区别</p><p><strong>7.获取子节点</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>元素.childNodes 返回子节点集合
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong><strong>文档对象模型(DOM)</strong></strong></p><p><strong>DOM节点树模型（以HTML DOM树为例）</strong></p><ul><li>DOM模型将整个文档（XML文档和HTML文档）看成一个树形结构，</li><li>在DOM中，HTML文档的层次结构被表示为一个树形结构。并用document对象表示该文档，树的每个子节点表示HTML文档中的不同内容。</li><li>每个载入浏览器的 HTML 文档都会成为 Document 对象,Document是探索DOM的入口,利用全局变量document可以访问Document对象</li></ul><p><strong><strong>认识DOM</strong></strong></p><p>先看下面代码</p><p>将HTML代码分解为DOM节点层次图:</p><p>DOM通过创建树来表示文档，描述了处理网页内容的方法和接口，从而使开发者对文档的内容和结构具有空前的控制力，用DOM API可以轻松地删除、添加和替换节点。</p><p><strong>1）节点类型</strong></p><p>DOM规定文档中的每个成分都是一个节点（Node）,HTML文档可以说由节点构成的集合，DOM节点有:</p><table><thead><tr><th>类型</th><th>描述</th></tr></thead><tbody><tr><td>元素节点（Element）</td><td>上图中&lt;html&gt;、&lt;body&gt;、&lt;p&gt;等都是元素节点，即标签。</td></tr><tr><td>文本节点（Text）</td><td>向用户展示的内容，如&lt;li&gt;...&lt;/li&gt;中的JavaScript、DOM、CSS等文本。.</td></tr><tr><td>属性节点（Attr）</td><td>元素属性，元素才有属性,如&lt;a&gt;标签的链接属性href=&quot;http://www.baidu.com&quot;。</td></tr></tbody></table><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;p class=&quot;strong&quot;&gt;&lt;/p&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table><thead><tr><th>属性</th><th>描述</th></tr></thead><tbody><tr><td>nodeName</td><td>元素节点、属性节点、文本节点分别返回元素的名称、属性的名称和#text的字符串。</td></tr><tr><td>nodeType</td><td>元素节点、属性节点、文本节点的nodeType值分别为1、2、3.</td></tr><tr><td>nodeValue</td><td>元素节点、属性节点、文本节点的返回值分别为null、属性值和文本节点内容。</td></tr></tbody></table><p><strong><strong>DOM常见操作</strong></strong></p><p>Node为所有节点的父接口，其定义了一组公共的属性和方法，如下：</p><p><strong>1）获取节点</strong></p><p>① 获取元素节点：通过document对象的三个方法获取</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>document.getElementById(&quot;ID&quot;)
document.getElementByName(&quot;name&quot;)
document.getElementsByTagName(&quot;p&quot;);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>② 获取属性节点：属性节点附属于元素节点，可通过元素节点的getAttributeNode(attrName)方法获取属性节点，也可通过getAttribute(attrName)直接获取属性值。（与之相对的是Element接口的setAttribute(attrName , attrValue)方法，如果属性不存在，则直接添加到元素节点上）</p><p>③ 获取文本节点：文本节点为元素节点的子节点，可通过元素节点（Element接口）提供的childnodes()[index] 方法获得。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>childNodes //NodeList，所有子节点的列表
firstChild //Node，指向在childNodes列表中的第一个节点
lastChild //Node，指向在childNodes列表中的最后一个节点
parentNode //Node，指向父节点
previousSibling /Node，/指向前一个兄弟节点：如果这个节点就是第一个节点，那么该值为 null
nextSibling //Node，指向后一个兄弟节点：如果这个节点就是最后一个节点，那么该值为null
hasChildNodes()\` //Boolean，当childNodes包含一个或多个节点时，返回真值

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2）改变节点</strong></p><ul><li>① 改变属性节点的值：可以通过属性节点的nodeValue直接修改属性值，也可通过元素节点的setAttribute()方法改变。</li><li>② 改变文本节点的值：通过文本节点的nodeValue直接修改。</li></ul><p>在HTML DOM中，获取和改变元素内容最简单方法是使用元素的innerHTML属性（innerText属性返回去掉标签的innerHTML）</p><p>拓展:</p><ul><li>innerText、innerHTML、outerHTML、outerText</li><li>innerText: 表示起始标签和结束标签之间的文本</li><li>innerHTML: 表示元素的所有元素和文本的HTML代码</li></ul><p>如：&lt;div&gt;&lt;b&gt;Hello&lt;/b&gt; world&lt;/div&gt;的innerText为Hello world，innerHTML为Hello world</p><ul><li>outerText: 与前者的区别是替换的是整个目标节点，问题返回和innerText一样的内容</li><li>outerHTML: 与前者的区别是替换的是整个目标节点，返回元素完整的HTML代码，包括元素本身</li></ul><p>一张图了解OUTHTML和innerText、innerHTML：</p><p>改变HTML样式（style属性）：element.style.color =“red”;</p><p><strong>3）删除节点</strong></p><ul><li>① 删除元素节点：要想删除元素节点A，需获得A的父节点B，父节点可通过17.1.1中的方法获得，也可以直接通过A的parentNode属性获得（推荐）。调用B的removeChild(A) 即可删除A节点。</li><li>② 删除属性节点：可通过属性节点所属的元素节点的removeAttribute(attrName)或removeAttributeNode(node)删除。</li><li>③ 清空文本节点：最简单也是最常用的方法就是直接设置文本节点的nameNode属性为空串：textNode.nodeValue = ””。</li></ul><p>混淆点:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;p id=&quot;example&quot; title=&quot;texts&quot;&gt;
    这是一段文本
    &lt;span&gt;&lt;/span&gt;
&lt;/p&gt;

var p = document.getElementById(&#39;example&#39;);
p.nodeValue //null,p是元素节点，所以nodeValue为null
p.getAttributeNode(&#39;id&#39;).nodeValue  //example，这里获取到p的id属性的属性节点，nodeValue就是它的属性值
p.childNodes[0].nodeValue   //这是一段文本,

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>p是含有两个子节点的，插入的文本虽然没有标签，但它依然是一个节点。</p><p>其类型是是文本节点，其nodeValue是就是写入在其中的字符串，包含换行和缩进</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>p.innerHTML//这是一段文本 &lt;span&gt;&lt;/span&gt;&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这里innerHTML返回了p所包含的全部的节点的所包含的各种值了，以字符串的形式。</p><p><strong>4）创建和添加节点</strong></p><ul><li>① 创建节点：通过document对象的createElement(eleName)、createTextNode(nodeValue)方法可分别创建元素节点和文本节点。属性节点也有自己的create方法，但是用的少，直接用元素节点的setAttribute()方法即可添加属性。</li><li>② 添加节点：两个重要的方法：appendChild()和insertBefore()，具体见Node接口中的方法。</li></ul><p>扩展：上面的两个方法都是在已知父节点时用到的，也可以直接在兄弟节点后添加新节点：x.insertBefore(newNode) 和 x.appendChild(newNode) 都可以向 x 后追加一个新的子节点。</p><p><strong>5）替换节点</strong></p><p>主要掌握replaceChild(newNode , oldNode) 替换元素节点。（属性节点和文本节点有更简单的方法）</p><h1 id="思维导图" tabindex="-1"><a class="header-anchor" href="#思维导图" aria-hidden="true">#</a> <strong>思维导图</strong></h1><p><strong><strong>DOM</strong></strong></p><p><img src="`+o+'" alt="Untitled"></p><p><strong><strong>Windowz对象</strong></strong></p><p><img src="'+c+'" alt="Untitled"></p>',243),m={href:"https://blog.csdn.net/qq877507054/article/details/51395830",target:"_blank",rel:"noopener noreferrer"};function p(b,g){const i=l("ExternalLinkIcon");return d(),s("div",null,[u,e("p",null,[n("本文参考："),e("a",m,[n("Javascript之BOM与DOM讲解"),a(i)])])])}const x=t(v,[["render",p],["__file","DOM&BOM.html.vue"]]);export{x as default};
