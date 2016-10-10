# React Transform Boilerplate

## Installation

```bash
git clone https://github.com/gaearon/react-transform-boilerplate.git
cd react-transform-boilerplate
npm install
npm start
open http://localhost:3000
```

Transforms are enabled for files inside `src` (except `index.js`).

### flex教程

- webkit-font-smoothing: antialiased;反锯齿的，将字体变清晰
- display: flex;flex 布局
  - 设为Flex布局以后，子元素的float、clear和vertical-align属性将失效。
  - display: inline-flex;行内 flex 布局
  - display: -webkit-flex;Webkit内核的浏览器

### 容器属性

  - flex-direction：row | row-reverse | column | column-reverse; 属性决定主轴的方向（即项目的排列方向）。
  - flex-wrap：nowrap （不换行）| wrap （换行）| wrap-reverse（换行，第一行在下方）。;  flex-wrap属性定义，如果一条轴线排不下，如何换行。
  - flex-flow: <flex-direction> || <flex-wrap>;  flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap。
  - justify-content: flex-start | flex-end | center | space-between | space-around;
        属性定义了项目在主轴上的对齐方式。上下居中
        - flex-start（默认值）：左对齐
        - flex-end：右对齐
        - center： 居中
        - space-between：两端对齐，项目之间的间隔都相等。
        - space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。
        - align-items: flex-start | flex-end | center | baseline | stretch;
        - flex-start：交叉轴的起点对齐。
        -  flex-end：交叉轴的终点对齐。
        -  center：交叉轴的中点对齐。
        -  baseline: 项目的第一行文字的基线对齐。
        -  stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。
  - align-content：flex-start | flex-end | center | space-between | space-around | stretch;
      align-content属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。
      - flex-start：与交叉轴的起点对齐。
      - flex-end：与交叉轴的终点对齐。
      - center：与交叉轴的中点对齐。
      - space-between：与交叉轴两端对齐，轴线之间的间隔平均分布。
      - space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。
      - stretch（默认值）：轴线占满整个交叉轴。

### 项目属性
  - order  属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。

  - flex-grow  属性定义项目的放大比例，默认为0，

  - flex-shrink  属性定义了项目的缩小比例，默认为1，

  - flex-basis  属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。

  - flex flex   该属性有两个快捷值：auto (1 1 auto) 和 none (0 0 auto)。属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。

  - align-self align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，         表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。
    该属性可能取6个值，除了auto，其他都与align-items属性完全一致。

### 响应式覆盖属性

```css
@media (min-width:760px) {
  .content-warp{
    flex-direction: row;
  }

}
```
### 用外界的数据来访问
   - 在其他仓库创建你的数据库，用网址建立链接用来后台访问

###  引入marked高亮样式
```js
import hljs from 'highlight.js';
import marked from 'marked';
```
<div>
<h3 style={styles.sh}>一.生活</h3>
<p style={styles.sp}>人到了二十多岁之后，上帝就会给你做减法。拿掉你的一些朋友，拿掉你的一些梦想，甚至夺走你的一些痴狂。<br />
有些人跟你分道扬镳你们或许都不见得会吵架，你们或许也有着彼此的联系方式可不知道该怎么去联系了。<br />
有些人或许已经跟你见过最后一面了，只是你还没发觉。生活其实归根结底就是五个字：珍惜眼前人。</p>
<h3 style={styles.sh}>二.青春</h3>
<p style={styles.sp}>雨季里的我们想让冰冷麻醉自己，不去怀念那年那事那人；<br />
  想让疼痛弥漫全身，忘记那些不得不承担的苦痛；<br />
  想让朋友们不走向远方，依旧像以前那样；想让那些在一起的日子重新来过；<br />
            想让丢失的人回到自己身边展现那不羁的笑容；想让时空隧道来到自己身边，再看一眼那个会笑的自己。<br />
    青春，管他什么花季雨季，我们想要的只不过就是和朋友举杯共饮，谈天说地。<br />

    怀念彼此喝醉时的面红耳赤；怀念我偷偷的告诉你我爱上了一个男孩；怀念我们一起大声歌唱；<br />
    怀念我们时不时跑到火车道上拿着啤酒罐大声欢笑；怀念我们在分别的时候一个比一个适合去演琼瑶剧；<br />
    怀念我们说过的那句“有你在，我什么都不怕，就算世界末日我们也要拿着ipad看电影”；怀念有时候我们笑着笑着就哭了；<br />
    怀念我们总对彼此说，姑娘，自己选的路，跪着也要把它走完；怀念我们彼此拥抱；怀念我们经历过的这个敢于大声说爱喊恨的青涩季节。<br />

    所以说，上帝创造了一个名词--珍惜<br />
    请珍惜，珍惜现在身边的朋友，他们会为了你流泪，那个时候，为她擦去眼泪，拥抱她；<br />
    珍惜现在和家人相处的时光，时光是这个世界上过得最快的东西；珍惜你现在度过的喜、怒、忧、念、思、虑；<br />
    珍惜青春的我们正在演绎着的一场永不谢幕的舞台剧。<br />
    青春里的孩子，你不勇敢，没人替你坚强，就算跌倒也要豪迈的笑。</p>
  <h3 style={styles.sh}>三.誓言</h3>
      <p style={styles.sp}>
        你知道长大意味着什么吗？成长的真实代价是你没有了无理取闹，不负责任的资格。尽管我只是女孩子，但肩上的担子从未减轻过。
        毕业，工作，生活，这些曾经很遥远的东西正在慢慢逼近，
