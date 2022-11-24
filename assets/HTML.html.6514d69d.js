import{_ as t,r as l,o as e,c as p,b as a,d as n,e as o,a as i}from"./app.74a5dc6f.js";const c={},u=i(`<h1 id="html" tabindex="-1"><a class="header-anchor" href="#html" aria-hidden="true">#</a> HTML</h1><h1 id="一、html" tabindex="-1"><a class="header-anchor" href="#一、html" aria-hidden="true">#</a> <strong>一、HTML</strong></h1><p><strong><strong>1. src和href的区别</strong></strong></p><p>src和href都是用来引用外部的资源，它们的区别如下：</p><ul><li>src： 表示对资源的引用，它指向的内容会嵌入到当前标签所在的位置。src会将其指向的资源下载并应⽤到⽂档内，如请求js脚本。当浏览器解析到该元素时，会暂停其他资源的下载和处理，直到将该资源加载、编译、执⾏完毕，所以⼀般js脚本会放在页面底部。</li><li>href： 表示超文本引用，它指向一些网络资源，建立和当前元素或本文档的链接关系。当浏览器识别到它他指向的⽂件时，就会并⾏下载资源，不会停⽌对当前⽂档的处理。 常用在a、link等标签上。</li></ul><p><strong><strong>2. 对HTML语义化的理解</strong></strong></p><p>语义化是指根据内容的结构化（内容语义化），选择合适的标签（代码语义化）。通俗来讲就是用正确的标签做正确的事情。</p><p>语义化的优点如下：</p><ul><li>对机器友好，带有语义的文字表现力丰富，更适合搜索引擎的爬虫爬取有效信息，有利于SEO。除此之外，语义类还支持读屏软件，根据文章可以自动生成目录；</li><li>对开发者友好，使用语义类标签增强了可读性，结构更加清晰，开发者能清晰的看出网页的结构，便于团队的开发与维护。</li></ul><p>常见的语义化标签：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>header</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>header</span><span class="token punctuation">&gt;</span></span>  头部
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nav</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nav</span><span class="token punctuation">&gt;</span></span>  导航栏
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">&gt;</span></span>  区块（有语义化的div）
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">&gt;</span></span>  主要区域
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>article</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>article</span><span class="token punctuation">&gt;</span></span>  主要内容
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aside</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>aside</span><span class="token punctuation">&gt;</span></span>  侧边栏
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>footer</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>footer</span><span class="token punctuation">&gt;</span></span>  底部

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>3. DOCTYPE(⽂档类型) 的作⽤</strong></strong></p><p>DOCTYPE是HTML5中一种标准通用标记语言的文档类型声明，它的目的是告诉浏览器（解析器）应该以什么样（html或xhtml）的文档类型定义来解析文档，不同的渲染模式会影响浏览器对 CSS 代码甚⾄ JavaScript 脚本的解析。它必须声明在HTML⽂档的第⼀⾏。</p><p>浏览器渲染页面的两种模式（可通过document.compatMode获取，比如，语雀官网的文档类型是CSS1Compat）：</p><ul><li>CSS1Compat：标准模式（Strick mode），默认模式，浏览器使用W3C的标准解析渲染页面。在标准模式中，浏览器以其支持的最高标准呈现页面。</li><li>BackCompat：怪异模式(混杂模式)(Quick mode)，浏览器使用自己的怪异模式解析渲染页面。在怪异模式中，页面以一种比较宽松的向后兼容的方式显示。</li></ul><p><strong><strong>4. script标签中defer和async的区别</strong></strong></p><p>如果没有defer或async属性，浏览器会立即加载并执行相应的脚本。它不会等待后续加载的文档元素，读取到就会开始加载和执行，这样就阻塞了后续文档的加载。</p><p>下图可以直观的看出三者之间的区别:</p><p>其中蓝色代表js脚本网络加载时间，红色代表js脚本执行时间，绿色代表html解析。</p><p>defer 和 async属性都是去异步加载外部的JS脚本文件，它们都不会阻塞页面的解析，其区别如下：</p><ul><li>执行顺序： 多个带async属性的标签，不能保证加载的顺序；多个带defer属性的标签，按照加载顺序执行；</li><li>脚本是否并行执行：async属性，表示后续文档的加载和执行与js脚本的加载和执行是并行进行的，即异步执行；defer属性，加载后续文档的过程和js脚本的加载(此时仅加载不执行)是并行进行的(异步)，js脚本需要等到文档所有元素解析完成之后才执行，DOMContentLoaded事件触发执行之前。</li></ul><p><strong><strong>5. 常⽤的meta标签有哪些</strong></strong></p><blockquote><p>meta 标签由 name 和 content 属性定义，用来描述网页文档的属性，比如网页的作者，网页描述，关键词等，除了HTTP标准固定了一些name作为大家使用的共识，开发者还可以自定义name。</p></blockquote><p>常用的meta标签：</p><p>（1）charset，用来描述HTML文档的编码类型：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>复制代码</p><p><strong>（2） keywords，页面关键词：</strong></p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>keywords<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>关键词<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>复制代码</p><p><strong>（3）description，页面描述：</strong></p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>description<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>页面描述内容<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>复制代码</p><p><strong>（4）refresh，页面重定向和刷新：</strong></p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>refresh<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>0;url=<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>复制代码</p><p><strong>（5）viewport，适配移动端，可以控制视口的大小和比例：</strong></p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1, maximum-scale=1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>复制代码</p><p>其中，content 参数有以下几种：</p><ul><li>width viewport ：宽度(数值/device-width)</li><li>height viewport ：高度(数值/device-height)</li><li>initial-scale ：初始缩放比例</li><li>maximum-scale ：最大缩放比例</li><li>minimum-scale ：最小缩放比例</li><li>user-scalable ：是否允许用户缩放(yes/no）</li></ul><p><strong>（6）搜索引擎索引方式：</strong></p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>robots<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>index,follow<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其中，content 参数有以下几种：</p><ul><li>all：文件将被检索，且页面上的链接可以被查询；</li><li>none：文件将不被检索，且页面上的链接不可以被查询；</li><li>index：文件将被检索；</li><li>follow：页面上的链接可以被查询；</li><li>noindex：文件将不被检索；</li><li>nofollow：页面上的链接不可以被查询。</li></ul><p><strong><strong>6. HTML5有哪些更新</strong></strong></p><p><strong>1. 语义化标签</strong></p><ul><li>header：定义文档的页眉（头部）；</li><li>nav：定义导航链接的部分；</li><li>footer：定义文档或节的页脚（底部）；</li><li>article：定义文章内容；</li><li>section：定义文档中的节（section、区段）；</li><li>aside：定义其所处内容之外的内容（侧边）；</li></ul><p><strong>2. 媒体标签</strong></p><p><strong>（1） audio：音频</strong></p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>audio</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span><span class="token punctuation">&#39;</span></span> <span class="token attr-name">controls</span> <span class="token attr-name">autoplay</span> <span class="token attr-name">loop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>true<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>audio</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>属性：</p><ul><li>controls 控制面板</li><li>autoplay 自动播放</li><li>loop=‘true’ 循环播放</li></ul><p><strong>（2）video视频</strong></p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>video</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span><span class="token punctuation">&#39;</span></span> <span class="token attr-name">poster</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>imgs/aa.jpg<span class="token punctuation">&#39;</span></span> <span class="token attr-name">controls</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>video</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>属性：</p><ul><li>poster：指定视频还没有完全下载完毕，或者用户还没有点击播放前显示的封面。默认显示当前视频文件的第一针画面，当然通过poster也可以自己指定。</li><li>controls 控制面板</li><li>width</li><li>height</li></ul><p><strong>（3）source标签</strong></p><p>因为浏览器对视频格式支持程度不一样，为了能够兼容不同的浏览器，可以通过source来指定视频源。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>video</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>aa.flv<span class="token punctuation">&#39;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>video/flv<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>source</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>aa.mp4<span class="token punctuation">&#39;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>video/mp4<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>source</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>video</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>3. 表单</strong></p><p>表单类型：</p><ul><li>email ：能够验证当前输入的邮箱地址是否合法</li><li>url ： 验证URL</li><li>number ： 只能输入数字，其他输入不了，而且自带上下增大减小箭头，max属性可以设置为最大值，min可以设置为最小值，value为默认值。</li><li>search ： 输入框后面会给提供一个小叉，可以删除输入的内容，更加人性化。</li><li>range ： 可以提供给一个范围，其中可以设置max和min以及value，其中value属性可以设置为默认值</li><li>color ： 提供了一个颜色拾取器</li><li>time ： 时分秒</li><li>data ： 日期选择年月日</li><li>datatime ： 时间和日期(目前只有Safari支持)</li><li>datatime-local ：日期时间控件</li><li>week ：周控件</li><li>month：月控件</li></ul><p>表单属性：</p><ul><li>placeholder ：提示信息</li><li>autofocus ：自动获取焦点</li><li>autocomplete=“on” 或者 autocomplete=“off” 使用这个属性需要有两个前提： <ul><li>表单必须提交过</li><li>必须有name属性。</li></ul></li><li>required：要求输入框不能为空，必须有值才能够提交。</li><li>pattern=&quot; &quot; 里面写入想要的正则模式，例如手机号patte=&quot;^(+86)?\\d{10}$&quot;</li><li>multiple：可以选择多个文件或者多个邮箱</li><li>form=&quot; form表单的ID&quot;</li></ul><p>表单事件：</p><ul><li>oninput 每当input里的输入框内容发生变化都会触发此事件。</li><li>oninvalid 当验证不通过时触发此事件。</li></ul><p><strong>4. 进度条、度量器</strong></p><ul><li>progress标签：用来表示任务的进度（IE、Safari不支持），max用来表示任务的进度，value表示已完成多少</li><li>meter属性：用来显示剩余容量或剩余库存（IE、Safari不支持）</li><li>high/low：规定被视作高/低的范围</li><li>max/min：规定最大/小值</li><li>value：规定当前度量值</li></ul><p>设置规则：<code>min &lt; low &lt; high &lt; max</code></p><p><strong>5.DOM查询操作</strong></p><ul><li>document.querySelector()</li><li>document.querySelectorAll()</li></ul><p>它们选择的对象可以是标签，可以是类(需要加点)，可以是ID(需要加#)</p><p><strong>6. Web存储</strong></p><p>HTML5 提供了两种在客户端存储数据的新方法：</p><ul><li>localStorage - 没有时间限制的数据存储</li><li>sessionStorage - 针对一个 session 的数据存储</li></ul><p><strong>7. 其他</strong></p><p>拖放：拖放是一种常见的特性，即抓取对象以后拖到另一个位置。设置元素可拖放：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">draggable</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>画布（canvas ）： canvas 元素使用 JavaScript 在网页上绘制图像。画布是一个矩形区域，可以控制其每一像素。canvas 拥有多种绘制路径、矩形、圆形、字符以及添加图像的方法。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>canvas</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>myCanvas<span class="token punctuation">&quot;</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>200<span class="token punctuation">&quot;</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>100<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>canvas</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>SVG：SVG 指可伸缩矢量图形，用于定义用于网络的基于矢量的图形，使用 XML 格式定义图形，图像在放大或改变尺寸的情况下其图形质量不会有损失，它是万维网联盟的标准</p><p>地理定位：Geolocation（地理定位）用于定位用户的位置。</p><p>总结：</p><ul><li>（1）新增语义化标签：nav、header、footer、aside、section、article</li><li>（2）音频、视频标签：audio、video</li><li>（3）数据存储：localStorage、sessionStorage</li><li>（4）canvas（画布）、Geolocation（地理定位）、websocket（通信协议）</li><li>（5）input标签新增属性：placeholder、autocomplete、autofocus、required</li><li>（6）history API：go、forward、back、pushstate</li></ul><p>移除的元素有：</p><ul><li>纯表现的元素：basefont，big，center，font, s，strike，tt，u;</li><li>对可用性产生负面影响的元素：frame，frameset，noframes；</li></ul><p><strong><strong>7. img的srcset属性的作⽤？</strong></strong></p><p>响应式页面中经常用到根据屏幕密度设置不同的图片。这时就用到了 img 标签的srcset属性。srcset属性用于设置不同屏幕密度下，img 会自动加载不同的图片。用法如下：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>image-128.png<span class="token punctuation">&quot;</span></span> <span class="token attr-name">srcset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>image-256.png 2x<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用上面的代码，就能实现在屏幕密度为1x的情况下加载image-128.png, 屏幕密度为2x时加载image-256.png。</p><p>按照上面的实现，不同的屏幕密度都要设置图片地址，目前的屏幕密度有1x,2x,3x,4x四种，如果每一个图片都设置4张图片，加载就会很慢。所以就有了新的srcset标准。代码如下：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>image-128.png<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">srcset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>image-128.png 128w, image-256.png 256w, image-512.png 512w<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">sizes</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>(max-width: 360px) 340px, 128px<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中srcset指定图片的地址和对应的图片质量。sizes用来设置图片的尺寸零界点。对于 srcset 中的 w 单位，可以理解成图片质量。如果可视区域小于这个质量的值，就可以使用。浏览器会自动选择一个最小的可用图片。</p><p>sizes语法如下：</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code>sizes<span class="token operator">=</span><span class="token string">&quot;[media query] [length], [media query] [length] ... &quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>sizes就是指默认显示128px, 如果视区宽度大于360px, 则显示340px。</p><p><strong><strong>8. 行内元素有哪些？块级元素有哪些？ 空(void)元素有那些？</strong></strong></p><ul><li>行内元素有：a b span img input select strong；</li><li>块级元素有：div ul ol li dl dt dd h1 h2 h3 h4 h5 h6 p；</li><li>空元素，即没有内容的HTML元素。空元素是在开始标签中关闭的，也就是空元素没有闭合标签： <ul><li>常见的有：<code>&lt;br&gt;</code>、<code>&lt;hr&gt;</code>、<code>&lt;img&gt;</code>、<code>&lt;input&gt;</code>、<code>&lt;link&gt;</code>、<code>&lt;meta&gt;</code>；</li><li>鲜见的有：<code>&lt;area&gt;</code>、<code>&lt;base&gt;</code>、<code>&lt;col&gt;</code>、<code>&lt;colgroup&gt;</code>、<code>&lt;command&gt;</code>、<code>&lt;embed&gt;</code>、<code>&lt;keygen&gt;</code>、<code>&lt;param&gt;</code>、<code>&lt;source&gt;</code>、<code>&lt;track&gt;</code>、<code>&lt;wbr&gt;</code>。</li></ul></li></ul><p><strong><strong>9. 说一下 web worker</strong></strong></p><p>在 HTML 页面中，如果在执行脚本时，页面的状态是不可相应的，直到脚本执行完成后，页面才变成可相应。web worker 是运行在后台的 js，独立于其他脚本，不会影响页面的性能。 并且通过 postMessage 将结果回传到主线程。这样在进行复杂操作的时候，就不会阻塞主线程了。</p><p>如何创建 web worker：</p><ul><li>检测浏览器对于 web worker 的支持性</li><li>创建 web worker 文件（js，回传函数等）</li><li>创建 web worker 对象</li></ul><p><strong><strong>10. HTML5的离线储存怎么使用，它的工作原理是什么</strong></strong></p><p>离线存储指的是：在用户没有与因特网连接时，可以正常访问站点或应用，在用户与因特网连接时，更新用户机器上的缓存文件。</p><ul><li>*原理：**HTML5的离线存储是基于一个新建的 .appcache 文件的缓存机制(不是存储技术)，通过这个文件上的解析清单离线存储资源，这些资源就会像cookie一样被存储了下来。之后当网络在处于离线状态下时，浏览器会通过被离线存储的数据进行页面展示</li></ul><p>使用方法：</p><p>（1）创建一个和 html 同名的 manifest 文件，然后在页面头部加入 manifest 属性：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span> <span class="token attr-name">manifest</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>index.manifest<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>（2）在 cache.manifest 文件中编写需要离线存储的资源：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>CACHE MANIFEST
#v0.11
CACHE:
js/app.js
css/style.css
NETWORK:
resourse/logo.png
FALLBACK:
/ /offline.html

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>CACHE: 表示需要离线存储的资源列表，由于包含 manifest 文件的页面将被自动离线存储，所以不需要把页面自身也列出来。</li><li>NETWORK: 表示在它下面列出来的资源只有在在线的情况下才能访问，他们不会被离线存储，所以在离线情况下无法使用这些资源。不过，如果在 CACHE 和 NETWORK 中有一个相同的资源，那么这个资源还是会被离线存储，也就是说 CACHE 的优先级更高。</li><li>FALLBACK: 表示如果访问第一个资源失败，那么就使用第二个资源来替换他，比如上面这个文件表示的就是如果访问根目录下任何一个资源失败了，那么就去访问 offline.html 。</li></ul><p><strong>（3）在离线状态时，操作 window.applicationCache 进行离线缓存的操作。</strong></p><p>如何更新缓存：</p><ul><li>（1）更新 manifest 文件</li><li>（2）通过 javascript 操作</li><li>（3）清除浏览器缓存</li></ul><p>注意事项：</p><ul><li>（1）浏览器对缓存数据的容量限制可能不太一样（某些浏览器设置的限制是每个站点 5MB）。</li><li>（2）如果 manifest 文件，或者内部列举的某一个文件不能正常下载，整个更新过程都将失败，浏览器继续全部使用老的缓存。</li><li>（3）引用 manifest 的 html 必须与 manifest 文件同源，在同一个域下。</li><li>（4）FALLBACK 中的资源必须和 manifest 文件同源。</li><li>（5）当一个资源被缓存后，该浏览器直接请求这个绝对路径也会访问缓存中的资源。</li><li>（6）站点中的其他页面即使没有设置 manifest 属性，请求的资源如果在缓存中也从缓存中访问。</li><li>（7）当 manifest 文件发生改变时，资源请求本身也会触发更新。</li></ul><p><strong><strong>11. 浏览器是如何对 HTML5 的离线储存资源进行管理和加载？</strong></strong></p><p>在线的情况下，浏览器发现 html 头部有 manifest 属性，它会请求 manifest 文件，如果是第一次访问页面 ，那么浏览器就会根据 manifest 文件的内容下载相应的资源并且进行离线存储。如果已经访问过页面并且资源已经进行离线存储了，那么浏览器就会使用离线的资源加载页面，然后浏览器会对比新的 manifest 文件与旧的 manifest 文件，如果文件没有发生改变，就不做任何操作，如果文件改变了，就会重新下载文件中的资源并进行离线存储。</p><p>离线的情况下，浏览器会直接使用离线存储的资源。</p><p><strong><strong>12. title与h1的区别、b与strong的区别、i与em的区别？</strong></strong></p><ul><li>strong标签有语义，是起到加重语气的效果，而b标签是没有的，b标签只是一个简单加粗标签。b标签之间的字符都设为粗体，strong标签加强字符的语气都是通过粗体来实现的，而搜索引擎更侧重strong标签。</li><li>title属性没有明确意义只表示是个标题，H1则表示层次明确的标题，对页面信息的抓取有很大的影响</li><li>i内容展示为斜体，em表示强调的文本</li></ul><p><strong><strong>13. iframe 有那些优点和缺点？</strong></strong></p><p>iframe 元素会创建包含另外一个文档的内联框架（即行内框架）。</p><p>优点：</p><ul><li>用来加载速度较慢的内容（如广告）</li><li>可以使脚本可以并行下载</li><li>可以实现跨子域通信</li></ul><p>缺点：</p><ul><li>iframe 会阻塞主页面的 onload 事件</li><li>无法被一些搜索引擎索识别</li><li>会产生很多页面，不容易管理</li></ul><p><strong><strong>14. label 的作用是什么？如何使用？</strong></strong></p><p>label标签来定义表单控件的关系：当用户选择label标签时，浏览器会自动将焦点转到和label标签相关的表单控件上。</p><p>使用方法1：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mobile<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Number:<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>labe</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mobile<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用方法2：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">&gt;</span></span>Date:<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong><strong>15. Canvas和SVG的区别</strong></strong></p><p><strong>（1）SVG：</strong></p><p>SVG可缩放矢量图形（Scalable Vector Graphics）是基于可扩展标记语言XML描述的2D图形的语言，SVG基于XML就意味着SVG DOM中的每个元素都是可用的，可以为某个元素附加Javascript事件处理器。在 SVG 中，每个被绘制的图形均被视为对象。如果 SVG 对象的属性发生变化，那么浏览器能够自动重现图形。</p><p>其特点如下：</p><ul><li>不依赖分辨率</li><li>支持事件处理器</li><li>最适合带有大型渲染区域的应用程序（比如谷歌地图）</li><li>复杂度高会减慢渲染速度（任何过度使用 DOM 的应用都不快）</li><li>不适合游戏应用</li></ul><p><strong>（2）Canvas：</strong></p><p>Canvas是画布，通过Javascript来绘制2D图形，是逐像素进行渲染的。其位置发生改变，就会重新进行绘制。</p><p>其特点如下：</p><ul><li>依赖分辨率</li><li>不支持事件处理器</li><li>弱的文本渲染能力</li><li>能够以 .png 或 .jpg 格式保存结果图像</li><li>最适合图像密集型的游戏，其中的许多对象会被频繁重绘</li></ul><p>注：矢量图，也称为面向对象的图像或绘图图像，在数学上定义为一系列由线连接的点。矢量文件中的图形元素称为对象。每个对象都是一个自成一体的实体，它具有颜色、形状、轮廓、大小和屏幕位置等属性。</p><p><strong><strong>16. head 标签有什么作用，其中什么标签必不可少？</strong></strong></p><p>标签用于定义文档的头部，它是所有头部元素的容器。 中的元素可以引用脚本、指示浏览器在哪里找到样式表、提供元信息等。</p><p>文档的头部描述了文档的各种属性和信息，包括文档的标题、在 Web 中的位置以及和其他文档的关系等。绝大多数文档头部包含的数据都不会真正作为内容显示给读者。</p><p>下面这些标签可用在 head 部分：<code>&lt;base&gt;</code>, <code>&lt;link&gt;</code>, <code>&lt;meta&gt;</code>, <code>&lt;script&gt;</code>, <code>&lt;style&gt;</code>, <code>&lt;title&gt;</code>。</p><p>其中 <code>&lt;title&gt;</code> 定义文档的标题，它是 head 部分中唯一必需的元素。</p><p>**<strong>17. 文档声明（Doctype）和<code>&lt;!Doctype html&gt;</code>有何作用? 严格模式与混杂模式如何区分？它们有何意义?</strong></p><p>文档声明的作用： 文档声明是为了告诉浏览器，当前HTML文档使用什么版本的HTML来写的，这样浏览器才能按照声明的版本来正确的解析。</p><p><code>&lt;!doctype html&gt;</code>的作用：<code>&lt;!doctype html&gt;</code> 的作用就是让浏览器进入标准模式，使用最新的 HTML5 标准来解析渲染页面；如果不写，浏览器就会进入混杂模式，我们需要避免此类情况发生。</p><p>严格模式与混杂模式的区分：</p><ul><li>严格模式： 又称为标准模式，指浏览器按照W3C标准解析代码；</li><li>混杂模式： 又称怪异模式、兼容模式，是指浏览器用自己的方式解析代码。混杂模式通常模拟老式浏览器的行为，以防止老站点无法工作；</li></ul><p>区分：网页中的DTD，直接影响到使用的是严格模式还是浏览模式，可以说DTD的使用与这两种方式的区别息息相关。</p><ul><li>如果文档包含严格的DOCTYPE ，那么它一般以严格模式呈现（严格 DTD ——严格模式）；</li><li>包含过渡 DTD 和 URI 的 DOCTYPE ，也以严格模式呈现，但有过渡 DTD 而没有 URI （统一资源标识符，就是声明最后的地址）会导致页面以混杂模式呈现（有 URI 的过渡 DTD ——严格模式；没有 URI 的过渡 DTD ——混杂模式）；</li><li>DOCTYPE 不存在或形式不正确会导致文档以混杂模式呈现（DTD不存在或者格式不正确——混杂模式）；</li><li>HTML5 没有 DTD ，因此也就没有严格模式与混杂模式的区别，HTML5 有相对宽松的 法，实现时，已经尽可能大的实现了向后兼容(HTML5 没有严格和混杂之分)。</li></ul><p>总之，严格模式让各个浏览器统一执行一套规范兼容模式保证了旧网站的正常运行。</p><p><strong><strong>18. 浏览器乱码的原因是什么？如何解决？</strong></strong></p><p><strong>产生乱码的原因：</strong></p><ul><li>网页源代码是gbk的编码，而内容中的中文字是utf-8编码的，这样浏览器打开即会出现html乱码，反之也会出现乱码；</li><li>html网页编码是gbk，而程序从数据库中调出呈现是utf-8编码的内容也会造成编码乱码；</li><li>浏览器不能自动检测网页编码，造成网页乱码。</li></ul><p><strong>解决办法：</strong></p><ul><li>使用软件编辑HTML网页内容；</li><li>如果网页设置编码是gbk，而数据库储存数据编码格式是UTF-8，此时需要程序查询数据库数据显示数据前进程序转码；</li><li>如果浏览器浏览时候出现网页乱码，在浏览器中找到转换编码的菜单进行转换。</li></ul><p><strong><strong>19. 渐进增强和优雅降级之间的区别</strong></strong></p><ul><li>（1）渐进增强（progressive enhancement）：主要是针对低版本的浏览器进行页面重构，保证基本的功能情况下，再针对高级浏览器进行效果、交互等方面的改进和追加功能，以达到更好的用户体验。</li><li>（2）优雅降级 graceful degradation： 一开始就构建完整的功能，然后再针对低版本的浏览器进行兼容。</li></ul><p><strong>两者区别：</strong></p><ul><li>优雅降级是从复杂的现状开始的，并试图减少用户体验的供给；而渐进增强是从一个非常基础的，能够起作用的版本开始的，并在此基础上不断扩充，以适应未来环境的需要；</li><li>降级（功能衰竭）意味着往回看，而渐进增强则意味着往前看，同时保证其根基处于安全地带。</li><li>“优雅降级”观点认为应该针对那些最高级、最完善的浏览器来设计网站。而将那些被认为“过时”或有功能缺失的浏览器下的测试工作安排在开发周期的最后阶段，并把测试对象限定为主流浏览器（如 IE、Mozilla 等）的前一个版本。 在这种设计范例下，旧版的浏览器被认为仅能提供“简陋却无妨 (poor, but passable)” 的浏览体验。可以做一些小的调整来适应某个特定的浏览器。但由于它们并非我们所关注的焦点，因此除了修复较大的错误之外，其它的差异将被直接忽略。</li><li>“渐进增强”观点则认为应关注于内容本身。内容是建立网站的诱因，有的网站展示它，有的则收集它，有的寻求，有的操作，还有的网站甚至会包含以上的种种，但相同点是它们全都涉及到内容。这使得“渐进增强”成为一种更为合理的设计范例。这也是它立即被 Yahoo 所采纳并用以构建其“分级式浏览器支持 (Graded Browser Support)”策略的原因所在。</li></ul><p><strong><strong>20. 说一下 HTML5 drag API</strong></strong></p><ul><li>dragstart：事件主体是被拖放元素，在开始拖放被拖放元素时触发。</li><li>darg：事件主体是被拖放元素，在正在拖放被拖放元素时触发。</li><li>dragenter：事件主体是目标元素，在被拖放元素进入某元素时触发。</li><li>dragover：事件主体是目标元素，在被拖放在某元素内移动时触发。</li><li>dragleave：事件主体是目标元素，在被拖放元素移出目标元素是触发。</li><li>drop：事件主体是目标元素，在目标元素完全接受被拖放元素时触发。</li><li>dragend：事件主体是被拖放元素，在整个拖放操作结束时触发。</li></ul>`,168),r={href:"https://juejin.cn/post/6905294475539513352",target:"_blank",rel:"noopener noreferrer"};function d(g,k){const s=l("ExternalLinkIcon");return e(),p("div",null,[u,a("p",null,[n("本文参考："),a("a",r,[n("高频前端面试题汇总之HTML篇"),o(s)])])])}const v=t(c,[["render",d],["__file","HTML.html.vue"]]);export{v as default};