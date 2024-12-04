import{_ as a,c as e,ae as d,o as r}from"./chunks/framework.gNInh0IH.js";const l="/docs/assets/a127be94ec03ff7569a296bfaef2c5e0.image.DiWwwVpY.webp",u=JSON.parse('{"title":"相机(webgl)","description":"","frontmatter":{},"headers":[],"relativePath":"study/webgl/相机.md","filePath":"study/webgl/相机.md","lastUpdated":1731858933000}'),o={name:"study/webgl/相机.md"};function p(i,t,h,n,s,c){return r(),e("div",null,t[0]||(t[0]=[d('<h1 id="相机-webgl" tabindex="-1">相机(webgl) <a class="header-anchor" href="#相机-webgl" aria-label="Permalink to &quot;相机(webgl)&quot;">​</a></h1><p>相机分为两种: 1. 正交相机; 2. 透视相机;</p><p>正交相机中物体没有近大远小的关系; 透视相机可以展示出物体的近大远小的关系.</p><p>屏幕坐标系指的是: canvas坐标系</p><p>三维空间中的物体 =&gt; 全部做投影(根据相机)=&gt; 相机视椎体映射到裁剪空间(判断物体是否在裁剪空间内)=&gt; 裁剪空间映射到屏幕中</p><p>相机视椎体映射到裁剪空间: 这一步是相机的投影矩阵（Projection Matrix）的作用。它会将相机的视椎体映射到裁剪空间内的规范化设备坐标。</p><p>裁剪空间到屏幕空间：这个过程是由渲染器（Renderer）自动完成的。在渲染过程中，Three.js会将裁剪空间坐标映射到设备视口（Viewport）的范围内，最终得到屏幕像素坐标。</p><p>:::info{title=&quot;相关信息&quot;} 4x4矩阵可以表示三维物体在坐标系中的缩放,平移,旋转等变化.</p><p>数学中的矩阵常用行主序；行主序是竖着表示xyzw；</p><p>行主序:</p><table tabindex="0"><thead><tr><th>1</th><th>0</th><th>0</th><th>1</th></tr></thead><tbody><tr><td>0</td><td>1</td><td>0</td><td>1</td></tr><tr><td>0</td><td>1</td><td>1</td><td>2</td></tr><tr><td>0</td><td>0</td><td>0</td><td>1</td></tr></tbody></table><p>表示为：</p><table tabindex="0"><thead><tr><th>x+1</th></tr></thead><tbody><tr><td>y+1</td></tr><tr><td>z+2</td></tr><tr><td>1</td></tr></tbody></table><p>threeJS中常用列主序； :::</p><h2 id="基本概念" tabindex="-1">基本概念 <a class="header-anchor" href="#基本概念" aria-label="Permalink to &quot;基本概念&quot;">​</a></h2><h3 id="_1-视锥体" tabindex="-1">1. 视锥体 <a class="header-anchor" href="#_1-视锥体" aria-label="Permalink to &quot;1. 视锥体&quot;">​</a></h3><p>视锥体是指的相机的可视区域.不同相机有不同的可视区域;</p><p>正交相机的视锥体是一个长方体, 可由近裁剪面,远裁剪面(近裁剪平面和远裁剪平面距离摄像机的远近)以及左右上下共六个面构成.</p><p>透视相机的视锥体是一个类金字塔的形状, 可由近裁剪面, 远裁剪面(近裁剪平面和远裁剪平面距离摄像机的远近),Field of View(简称FOV)决定视锥体竖直方向的张开角度</p><h3 id="_2-裁剪空间" tabindex="-1">2. 裁剪空间 <a class="header-anchor" href="#_2-裁剪空间" aria-label="Permalink to &quot;2. 裁剪空间&quot;">​</a></h3><p>裁剪空间是指方便地对渲染图元进行裁剪所设置的一个标准正方体空间.完全位于这块空间内部的图元将会被保留，完全位于这块空间外部的图元将会被剔除，而与这块空间边界相交的图元就会被裁剪.</p><p>为什么是正方体空间, 是为了方便进行计算与适配不同分辨率的设备.裁剪空间是一个四维的坐标空间，用来表示图形对象的几何信息，包括顶点位置和大小等。 裁剪空间中的坐标通常是规范化设备坐标（Normalized Device Coordinates，NDC），其范围是[-1, 1]。</p><p>通常为了方便裁剪, 一般会将整个视图进行投影矩阵的变换; 不同的相机对应不同的投影矩阵.</p><p>:::note{title=&quot;注&quot;} webgl 中裁剪空间是左手坐标系(与右手坐标系的z轴相反)</p><ol><li>x轴上-1的位置对应canvas画布的左边界，1的位置对应canvas 画布的右边界</li><li>y轴上-1的位置对应canvas画布的下边界，1的位置对应canvas 画布的上边界</li><li>z轴上-1的位置朝向屏幕外部，1的位置朝向屏幕内部，如下图：</li></ol><p><img src="'+l+'" alt="image.png"> :::</p><h3 id="_3-投影矩阵" tabindex="-1">3. 投影矩阵 <a class="header-anchor" href="#_3-投影矩阵" aria-label="Permalink to &quot;3. 投影矩阵&quot;">​</a></h3><p>正交相机使用正交投影矩阵将正交相机的视锥体投影变换到裁剪空间中, 方便判断物体是否进行裁剪.</p><p>透视相机使用透视投影矩阵将透视相机的视锥体投影变换到裁剪空间中, 方便判断物体是否进行裁剪.</p><h3 id="_4-视图矩阵" tabindex="-1">4. 视图矩阵 <a class="header-anchor" href="#_4-视图矩阵" aria-label="Permalink to &quot;4. 视图矩阵&quot;">​</a></h3><p>视图矩阵主要是控制相机的控制, 以此可以控制视锥体的位置.</p><p>视图矩阵是用于确定相机角度和位置的矩阵。有三个值需要关注:</p><ol><li>视点：相机的位置</li><li>视线方向：相机所看的方向</li><li>上方向：相机绕视线转动的方向</li></ol><p>:::tip{title=&quot;提示&quot;} 物体在三维空间中的具体位置:</p><p>顶点在裁剪空间中的位置=投影矩阵 _ 视图矩阵 _ 模型矩阵 * 顶点的初始点位 :::</p>',35)]))}const _=a(o,[["render",p]]);export{u as __pageData,_ as default};
