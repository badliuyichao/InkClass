/* ============================================================
   2026 新版统编教材 · 五年级上册 第五单元（说明文 / 习作单元）
   课文：15 太阳 / 16 金字塔 / 习作例文（鲸、风向袋的制作）/ 习作：介绍一种事物
   ============================================================ */
/* ---------------- 过关自测题库（第五单元） ---------------- */
var QUIZ_TAIYANG=[
 {q:"1. 《太阳》一文介绍了太阳的哪三个特点？",opts:["远、大、热","高、圆、亮","近、暖、小"],a:0},
 {q:"2. “一百三十万个地球的体积才能抵得上一个太阳”运用了什么说明方法？",opts:["打比方","作比较＋列数字","分类别"],a:1},
 {q:"3. “太阳离我们约有一亿五千万千米远”中的“约”能删去吗？",opts:["能，句子更简洁","不能，“约”表示估计，体现说明文语言的准确性","能，删去后数字更精确"],a:1},
 {q:"4. 课文开头写“后羿射日”的神话，作用是什么？",opts:["证明天上真的有十个太阳","激发阅读兴趣，自然引出说明对象","和课文内容没有关系"],a:1},
 {q:"5. “一句话，没有太阳，就没有我们这个美丽可爱的世界。”这句话的作用是？",opts:["引出下文","承上启下","总结全文，点明中心"],a:2}
];
var QUIZ_JINZITA=[
 {q:"1. 《金字塔夕照》的文体是？",opts:["散文","说明文","神话故事"],a:0},
 {q:"2. 《不可思议的金字塔》属于哪类文本？",opts:["连续性叙事文本","非连续性文本","议论文"],a:1},
 {q:"3. 胡夫金字塔高约多少米？",opts:["约146米","约230米","约450米"],a:0},
 {q:"4. 读非连续性文本，下面哪种方法最有效？",opts:["从头到尾逐字背诵","先看标题，再读图表数据，接着看批注，最后图文对照","只看图片不读文字"],a:1},
 {q:"5. “塔身由约230万块石头砌成，每块石头平均重2.5吨”中，数字的作用是？",opts:["把话说长","让说明准确、有说服力，突出工程浩大","让文章更有感情"],a:1}
];
window.UNIT58 = window.UNIT58 || {};
UNIT58.u5 = {
unit:{
 key:"unit5", num:"第五单元", title:"说明有法，万物有理", emoji:"🔍",
 color:"var(--teal)", light:"var(--teal-l)",
 grad:"linear-gradient(135deg,#0F9E8C,#2F80C3)",
 goal:"语文要素：阅读简单的说明性文章，了解基本的说明方法；搜集资料，用恰当的说明方法介绍一种事物",
 intro:"这个单元是<b>习作单元</b>：先读两篇说明文，学会“把事物说明白”的四件法宝——列数字、作比较、举例子、打比方；再动手介绍一种你熟悉的事物。说明文不靠抒情取胜，靠的是<b>准确、清楚、有条理</b>。",
 chips:[
  {n:"📏 列数字",d:"用具体数字说明，如“约一亿五千万千米”“一百三十万个地球”，准确可信。"},
  {n:"🔍 作比较",d:"拿熟悉的事物比一比，如“一百三十万个地球才能抵得上一个太阳”，特点立刻凸显。"},
  {n:"🧩 举例子",d:"举出真实例子佐证，如“煤炭是由远古时代的植物埋在地层底下变成的”。"},
  {n:"🎨 打比方",d:"用比喻帮助说明，如“太阳会发光，会发热，是个大火球”，形象易懂。"},
  {n:"📄 非连续性文本",d:"由图表、数据、批注、说明文字组合而成的文本，要“图文对照、提取信息”。"}
 ],
 lessons:[
  {key:"taiyang",num:"第15课",title:"太阳",emoji:"🌞",color:"var(--orange)",light:"var(--orange-l)",
   desc:"远、大、热三大特点，四样说明方法一次学全。",goal:"说明方法：列数字、作比较、举例子、打比方",img:"images/u5_sun2.jpg",credit:"图：Pexels 免费图库（真实照片·阳光穿过云层）"},
  {key:"jinzita",num:"第16课",title:"金字塔",emoji:"🔺",color:"var(--teal)",light:"var(--teal-l)",
   desc:"一篇散文 + 一篇非连续性文本，两种读法对照学。",goal:"非连续性文本：图文对照，提取信息",img:"images/u5_pyramid.jpg",credit:"图：Pexels 免费图库（真实照片·吉萨金字塔群）"},
  {key:"yuan5Di",num:"习作·园地",title:"介绍一种事物",emoji:"✍️",color:"var(--purple)",light:"var(--purple-l)",
   desc:"选一样熟悉的事物，用说明方法把它说明白。",goal:"习作：介绍一种事物 + 说明方法综合运用",img:"images/u5_backpack.jpg",credit:"图：Pexels 免费图库（真实照片·挂成一排的书包）",isWriting:true}
 ],
 table:[
  ["两篇课文","《太阳》用列数字、作比较、举例子、打比方说明太阳远、大、热及其与人类的关系；《金字塔》用散文与非连续性文本两种形式介绍金字塔"],
  ["习作例文","《鲸》按体型、进化、种类、进食、呼吸、睡觉、生长逐层说明；《风向袋的制作》按“准备材料—制作步骤—使用方法”说明"],
  ["习作","介绍一种事物：先确定介绍对象，再列提纲、选说明方法，做到特点清楚、条理分明、语言准确"],
  ["语文园地","交流平台总结说明方法；词句段运用体会“约”“差不多”等词语的准确性（本单元无日积月累）"],
  ["能力目标","能辨认并说出四种常见说明方法的作用；能写一篇400字以上的说明性文章"]
 ],
 sources:[
  "统编版（人民教育出版社）《语文》五年级上册 第五单元（2026年秋季新版）",
  "《太阳》为小学语文传统说明文课文，数据引自课文原文",
  "穆青《金字塔夕照》、《不可思议的金字塔》（非连续性文本）",
  "2026年秋季新版教材调整说明：本单元删去《松鼠》，新增原五年级下册课文《金字塔》"
 ]},

/* ---------------- 知识讲解 ---------------- */
jiangjie:{
 taiyang:function(L){return "<div class='tabpane show' data-tab='jiangjie'>"+
  "<div class='card' style='background:linear-gradient(135deg,#FDF3E3,#FFFDF8)'><h3>🚩 本课学习任务流（抓住说明方法，读懂事物特点）</h3>"+
  "<div class='taskflow'>"+
  "<div class='tflow' onclick='showPack(\"taiyang\")'>📖<br>读前资料包<small>先看 3 张说明文入门卡</small></div>"+
  "<div class='tflow' onclick='document.getElementById(\"taiyang-src\").scrollIntoView({behavior:\"smooth\"})'>📚<br>读中查资料<small>读原文时点黄色标签</small></div>"+
  "<div class='tflow' onclick='openXilianbi(\"taiyang\")'>✍️<br>小练笔<small>用列数字或作比较介绍身边事物</small></div>"+
  "<div class='tflow' onclick='switchTab(\"guoguan\")'>🎯<br>过关自测<small>5 道题检验</small></div>"+
  "</div>"+
  "<div style='margin-top:10px;text-align:right'><button class='srcbtn' id='jjModeBtn' onclick='toggleJjMode()'>🔄 切换为：复习模式</button></div></div>"+
  "<div class='card' style='border:2px solid #D9C9A8'><h3>🧾 本课必背内容（考试就考这些，先逐项过关）</h3>"+
  "<p style='font-size:13px;color:var(--muted)'>说明文的“必背”不是背整篇，而是背<b>特点 + 数字 + 说明方法 + 中心句</b>这四样。</p>"+
  "<table class='ovtable'>"+
  "<tr><td><b>✅ 太阳三大特点</b></td><td><b>远</b>：离我们约有一亿五千万千米；<b>大</b>：一百三十万个地球的体积才能抵得上一个太阳；<b>热</b>：表面温度约六千摄氏度，中心温度是表面温度的二千五百倍。</td></tr>"+
  "<tr><td><b>✅ 必背说明方法</b></td><td>列数字（一亿五千万千米、六千摄氏度）、作比较（一百三十万个地球）、举例子（煤炭、云雨雪风）、打比方（是个大火球）。</td></tr>"+
  "<tr><td><b>✅ 必背中心句</b></td><td>“一句话，<b>没有太阳，就没有我们这个美丽可爱的世界</b>。”——全文总结句，考试常考作用。</td></tr>"+
  "<tr><td><b>✅ 必背四大关系</b></td><td>①动植物生长靠太阳 ②煤炭由远古植物变成 ③云、雨、雪、风靠太阳 ④太阳光能杀菌防病。</td></tr>"+
  "</table></div>"+
  "<div class='card'><h3>🎯 精读段落速查（先抓这几段！）</h3>"+
  "<table class='ovtable'><thead><tr><th style='width:150px'>段落</th><th>写了什么</th><th style='width:150px'>常考怎么考</th><th style='width:86px'>直达</th></tr></thead>"+
  "<tr><td><b>⭐ 第1段 · 后羿射日</b></td><td>用传说开篇：“古时候，天上有十个太阳……”引出说明对象。</td><td>开头作用（激发兴趣）</td><td></td></tr>"+
  "<tr><td><b>⭐ 第2段 · 远</b></td><td>一亿五千万千米；步行要走三千五百年，坐飞机也要飞二十几年。</td><td>列数字+举例子的作用</td><td><button class='srcbtn' onclick='jumpJj(\"taiyang-tl-1\")'>看精讲</button></td></tr>"+
  "<tr><td><b>⭐ 第3段 · 大</b></td><td>“一百三十万个地球的体积才能抵得上一个太阳”——作比较+列数字。</td><td>作比较的作用</td><td><button class='srcbtn' onclick='jumpJj(\"taiyang-tl-2\")'>看精讲</button></td></tr>"+
  "<tr><td><b>⭐ 第4段 · 热</b></td><td>大火球；表面六千摄氏度；中心温度是表面的二千五百倍。</td><td>打比方、列数字</td><td><button class='srcbtn' onclick='jumpJj(\"taiyang-tl-3\")'>看精讲</button></td></tr>"+
  "<tr><td><b>⭐ 第5-7段 · 关系</b></td><td>动植物、煤炭、云雨雪风、杀菌——从“自然”到“人类生活”层层说明。</td><td>概括说明要点</td><td></td></tr>"+
  "<tr><td><b>⭐ 第8段 · 总结</b></td><td>“没有太阳，就没有我们这个美丽可爱的世界。”</td><td>中心句作用、体会语言</td><td></td></tr></table></div>"+
  "<div id='jichuAnchor'></div>"+
  "<div class='card' id='taiyang-src'><h3>📄 课文原文 · 关键段落（直读版）</h3>"+
  "<div class='readtext'>"+
  "<div style='margin:8px 0;padding:10px 14px;background:rgba(255,248,239,.6);border-radius:12px;line-height:2'><b>第1段 · 传说引入</b>：古时候，天上有十个太阳……</div>"+
  "<button class='srcbtn' onclick='showCard(\"taiyang3\")'>📚 查资料 · 传说引用的作用</button>"+
  "<div style='margin:8px 0;padding:10px 14px;background:rgba(255,248,239,.6);border-radius:12px;line-height:2'><b>第2段 · 远</b>：其实，太阳离我们约有一亿五千万千米远。到太阳上去，如果步行，日夜不停地走，差不多要走三千五百年；就是坐飞机，也要飞二十几年。这么远，箭哪能射得到呢？</div>"+
  "<button class='srcbtn' onclick='showCard(\"taiyang1\")'>📚 查资料 · 列数字的作用</button>"+
  "<div style='margin:8px 0;padding:10px 14px;background:rgba(255,248,239,.6);border-radius:12px;line-height:2'><b>第3段 · 大</b>：我们看到太阳，觉得它并不大，实际上它大得很，一百三十万个地球的体积才能抵得上一个太阳。因为太阳离地球太远了，所以看上去只有一个盘子那么大。</div>"+
  "<button class='srcbtn' onclick='showCard(\"taiyang2\")'>📚 查资料 · 作比较的作用</button>"+
  "<div style='margin:8px 0;padding:10px 14px;background:rgba(255,248,239,.6);border-radius:12px;line-height:2'><b>第4段 · 热</b>：太阳会发光，会发热，是个大火球。太阳的温度很高，表面温度有六千摄氏度，就是钢铁碰到它，也会变成汽；中心温度估计是表面温度的二千五百倍。</div>"+
  "<div style='margin:8px 0;padding:10px 14px;background:rgba(255,248,239,.6);border-radius:12px;line-height:2'><b>第8段 · 总结</b>：太阳虽然离我们很远很远，但是它和我们的关系非常密切。……一句话，没有太阳，就没有我们这个美丽可爱的世界。</div>"+
  "<p style='font-size:12.5px;color:var(--muted)'>以上是课文关键段落摘录；带〔说明方法〕标注的版本见下方“课文关键段”卡片，两相对照着读。</p>"+
  "</div></div>"+
  "<div class='card'><h3>🖼️ 先看一眼：课文里的“大火球”</h3>"+
  "<figure class='pic'><img src='images/u5_sun2.jpg' alt='阳光穿过云层照向大地'><figcaption>阳光穿过云层。课文里说太阳“会发光，会发热，是个大火球”——先记住它的样子，再去看数字。 <span class='picsrc'>图源：Pexels 免费图库（真实照片）</span></figcaption></figure><p style='font-size:14px;color:var(--muted)'>看图想一想：白天它照亮天空，夜晚它照不到的那一面就是黑夜。第 5~7 段讲的“云、雨、雪、风”，都和它有关。</p></div>"+
  "<div class='card'><h3>📄 课文关键段（说明方法标注版）</h3>"+
  "<p style='font-size:13px;color:var(--muted)'>下面摘录课文最关键的几段，方括号里标出说明方法，对照着读，考试一眼就能认出来。</p>"+
  "<p style='margin:8px 0'><b>第2段（远）：</b>其实，太阳离我们<b>约有一亿五千万千米</b>〔列数字〕。到太阳上去，如果步行，日夜不停地走，<b>差不多要走三千五百年</b>〔举例子〕；就是坐飞机，也要飞二十几年。这么远，箭哪能射得到呢？</p>"+
  "<p style='margin:8px 0'><b>第3段（大）：</b>我们看到太阳，觉得它并不大，实际上它大得很，<b>一百三十万个地球的体积才能抵得上一个太阳</b>〔作比较+列数字〕。因为太阳离地球太远了，所以看上去只有一个盘子那么大。</p>"+
  "<p style='margin:8px 0'><b>第4段（热）：</b>太阳会发光，会发热，是个<b>大火球</b>〔打比方〕。太阳的温度很高，<b>表面温度有六千摄氏度</b>〔列数字〕，就是钢铁碰到它，也会变成汽；<b>中心温度估计是表面温度的二千五百倍</b>。</p>"+
  "<p style='margin:8px 0'><b>第8段（总结）：</b>太阳虽然离我们很远很远，但是它和我们的关系非常密切。……一句话，<b>没有太阳，就没有我们这个美丽可爱的世界</b>。</p></div>"+
  "<div class='card'><h3>📖 逐段精讲：一篇说明文是怎么“搭起来”的</h3>"+
  "<div class='timeline'>"+
  "<div class='tl'><b>第1段 · 传说引入</b><br>后羿射日的故事人人爱听，用它开头，读者一下子被吸引；但传说不是科学，所以第2段马上用数据“纠正”——这正是说明文常用的“故事引入 + 科学说明”结构。</div>"+
  "<div class='tl'><b>第2-4段 · 说清“太阳是什么样”</b><br>远、大、热三个特点，一段一个，每段都用数字、比较、举例、比方把抽象的“大”变成能感知的东西：三千五百年、二十几年、一百三十万个地球——这就是说明方法的价值。</div>"+
  "<div class='tl'><b>第5-7段 · 说清“太阳有什么用”</b><br>先写动植物生长，再写煤炭形成，然后写云雨雪风，最后写杀菌。四层关系由自然到人类，层层推进，回答“为什么说关系密切”。</div>"+
  "<div class='tl'><b>第8段 · 总结全文</b><br>用“一句话”收束，把前面所有内容压成一句斩钉截铁的判断：没有太阳，就没有我们这个美丽可爱的世界。这是全文的<b>中心句</b>，也是情感的落点。</div>"+
  "<div class='tl'><b>写法小结</b><br>全文结构：<b>传说引入 → 特点（远/大/热）→ 关系（动植物/煤炭/气候/健康）→ 总结</b>。说明文最讲究“顺序”，顺序一乱，读者就糊涂。</div>"+
  "</div></div>"+
  "<div class='card'><h3>🔍 富精讲：说明方法逐句咀嚼</h3>"+
  "<div class='timeline'>"+
  "<div class='tl' id='taiyang-tl-1'><b>⭐ 列数字 · 让“远”有了刻度</b>"+
  "<div class='jl-yuan'><span class='jl-lab'>原句</span>其实，太阳离我们约有一亿五千万千米远。到太阳上去，如果步行，日夜不停地走，差不多要走三千五百年；就是坐飞机，也要飞二十几年。</div>"+
  "<div class='jl-ask'>❓ 先想一想：只说“太阳离我们很远”，和说“步行要走三千五百年”，哪个更让你吃惊？为什么？</div>"+
  "<ul class='jl-ju'><li><b>一亿五千万千米</b>——主数据一锤定音，太阳的“远”被写成一个确切的刻度。</li>"+
  "<li><b>三千五百年、二十几年</b>——用步行、坐飞机两笔“换算”，把读不懂的大数变成能感受的时间。</li>"+
  "<li><b>“约”“差不多”</b>——数字前留有余地，表示不是精确测量值，不能删，体现说明文语言的准确。</li></ul>"+
  "<div class='jl-take'>💡 一句话：列数字让抽象的“远”变得准确可信——数字＋换算，读者才有感觉。</div>"+
  "<div class='jl-kao'>📝 考法：问“列数字（举例）的作用”，答<b>用具体数字准确说明太阳离地球远的特点</b>；“约”“差不多”能不能删——不能，体现语言的准确性。</div></div>"+
  "<div class='tl' id='taiyang-tl-2'><b>⭐ 作比较 · 让“大”有了参照</b>"+
  "<div class='jl-yuan'><span class='jl-lab'>原句</span>我们看到太阳，觉得它并不大，实际上它大得很，一百三十万个地球的体积才能抵得上一个太阳。</div>"+
  "<div class='jl-ask'>❓ 先想一想：地球已经是我们心中“很大”的东西了，为什么要拿它来和太阳比？</div>"+
  "<ul class='jl-ju'><li><b>先破后立</b>——“觉得它并不大”是读者的错觉，“实际上它大得很”猛一转折，注意力立刻被抓住。</li>"+
  "<li><b>作比较＋列数字</b>——地球是大家最熟悉的，一百三十万个地球才抵得上一个太阳，“大”立刻有了参照物。</li>"+
  "<li><b>盘子那么大</b>——再拿“看上去只有一个盘子那么大”收尾，解释错觉的由来（离得太远），说理完整。</li></ul>"+
  "<div class='jl-take'>💡 一句话：拿熟悉的比陌生的——“一百三十万个地球”让太阳的大不用猜。</div>"+
  "<div class='jl-kao'>📝 考法：问“作比较的作用”，用公式<b>方法＋比较对象＋突出特点＋效果</b>：把太阳和地球作比较，突出太阳体积巨大，使说明直观、印象深刻。</div></div>"+
  "<div class='tl' id='taiyang-tl-3'><b>⭐ 打比方 · 让“热”有了画面</b>"+
  "<div class='jl-yuan'><span class='jl-lab'>原句</span>太阳会发光，会发热，是个大火球。太阳的温度很高，表面温度有六千摄氏度，就是钢铁碰到它，也会变成汽；中心温度估计是表面温度的二千五百倍。</div>"+
  "<div class='jl-ask'>❓ 先想一想：“大火球”和“六千摄氏度”，一个管画面，一个管精确——它们各管什么？</div>"+
  "<ul class='jl-ju'><li><b>大火球</b>——打比方：一句话给出太阳的形状、颜色和滚烫的印象，画面感十足。</li>"+
  "<li><b>六千摄氏度</b>——列数字：把“热”落到确切的刻度上，火球的“火”有了证据。</li>"+
  "<li><b>钢铁变成汽、二千五百倍</b>——举例＋数字：连钢铁都化成汽，中心还是表面的二千五百倍，“热”写到头了。</li></ul>"+
  "<div class='jl-take'>💡 一句话：打比方管“像什么”，列数字管“是多少”——两种方法接力，特点才立得住。</div>"+
  "<div class='jl-kao'>📝 考法：辨认“是个大火球”为<b>打比方</b>；“六千摄氏度”“二千五百倍”为<b>列数字</b>；常考两种方法<b>结合使用</b>的好处——既形象又准确。</div></div>"+
  "</div></div>"+
  "<div class='card'><h3>✍️ 写法借鉴：四种说明方法，作文里怎么用</h3>"+
  "<table class='ovtable'><thead><tr><th style='width:110px'>说明方法</th><th>课文里怎么用</th><th style='width:200px'>你写作文怎么用</th></tr></thead>"+
  "<tr><td><b>列数字</b></td><td>一亿五千万千米、六千摄氏度、二千五百倍</td><td>写书包：“长约40厘米，宽28厘米，装满书约有5千克重。”</td></tr>"+
  "<tr><td><b>作比较</b></td><td>一百三十万个地球才抵得上一个太阳</td><td>写鲸：“一头成年蓝鲸的体重，相当于三十多头大象。”</td></tr>"+
  "<tr><td><b>举例子</b></td><td>煤炭由远古植物变成；云雨雪风都离不开太阳</td><td>写文具：“比如尺子上的刻度，就是用来量长度的。”</td></tr>"+
  "<tr><td><b>打比方</b></td><td>太阳是个大火球</td><td>写地球：“地球像一颗蓝色的水晶球，裹着一层薄薄的空气。”</td></tr></table>"+
  "<div class='tipbox exam'>📝 <b>答题公式：</b>说明方法 + 具体内容 + 作用。<br>例：“一百三十万个地球的体积才能抵得上一个太阳”运用了<b>作比较和列数字</b>，把太阳与地球作比较，用具体数字突出太阳<b>体积大</b>的特点，让读者感受更直观。</div></div>"+
  "<div class='card'><h3>📚 课后习题·参考答案</h3>"+
  "<div class='acc open' onclick='this.classList.toggle(\"open\")'><button class='head'><span class='idx'>题1</span>课文从哪几个方面介绍了太阳？<span class='arrow'>▸</span></button><div class='body'>✅ <b>参考答案：</b>两个方面。①太阳的特点：远、大、热；②太阳与人类的关系：影响动植物生长、形成煤炭、形成云雨雪风、杀菌防病。</div></div>"+
  "<div class='acc' onclick='this.classList.toggle(\"open\")'><button class='head'><span class='idx'>题2</span>读句子，体会加点词语的好处：“太阳离我们<b>约</b>有一亿五千万千米远。”<span class='arrow'>▸</span></button><div class='body'>✅ <b>参考答案：</b>“约”表示大概、估计，说明一亿五千万千米不是精确测量值。去掉后就变成确切数字，与事实不符。“约”体现了说明文语言的<b>准确性、科学性</b>。</div></div>"+
  "<div class='acc' onclick='this.classList.toggle(\"open\")'><button class='head'><span class='idx'>题3</span>“一句话，没有太阳，就没有我们这个美丽可爱的世界。”这句话在文中起什么作用？<span class='arrow'>▸</span></button><div class='body'>✅ <b>参考答案：</b>内容上，总结全文，强调太阳与人类关系密切；结构上，收束全文、点明中心；表达上，用双重否定加强语气，给人留下深刻印象。</div></div></div>"+
  "<div class='card'><h3>👤 文体与背景：说明文是什么</h3>"+
  "<div class='kv'><div><b>📘 文体</b><br>《太阳》是一篇<b>科普说明文</b>（科学小品）。它不靠情节和抒情，而用准确的数字、清晰的顺序、恰当的说明方法，把科学知识讲明白。</div>"+
  "<div><b>🌞 数据来源</b><br>课文中的太阳数据是科学界长期观测的结果：日地平均距离约1.496亿千米，太阳表面温度约5500℃，核心温度约1500万℃。课文取整为“一亿五千万千米”“六千摄氏度”，是为了让小学生好读好记。</div></div>"+
  "<div class='tipbox story'>📖 后羿射日是神话，不是科学。神话用想象解释世界，说明文用数据和观察解释世界——同一个太阳，两种讲法，各有各的美。</div>"+
  "<div class='tipbox tip'>⚡ <b>单元学习提醒：</b>本单元是习作单元，读课文时随时问自己一句：“这个说明方法，我介绍事物时能不能用？”</div></div>"+
  "<div class='card'><h3>✍️ 小练笔：用列数字或作比较介绍一样身边的事物（写两三句）</h3>"+
  "<p style='font-size:13.5px;color:var(--muted)'>挑一样你熟悉的东西——书包、文具盒、家里的小狗、校门口的那棵树，用上“约……”“相当于……”这样的句式，写两三句。写完读给同桌听，让他猜猜你写的是哪一样。</p>"+
  "<textarea id='xilianbi-taiyang' class='xltextarea' rows='4' placeholder='写在这里，点保存会自动记住…'></textarea>"+
  "<div style='margin-top:8px;display:flex;gap:10px;align-items:center'><button class='tflow' style='max-width:180px' onclick='saveXilianbi(\"taiyang\")'>💾 保存</button><span id='xlsave-taiyang' style='font-size:12.5px;color:#3C9E5C;font-weight:700'></span></div></div>"+
  "</div>";},

 jinzita:function(L){return "<div class='tabpane show' data-tab='jiangjie'>"+
  "<div class='card' style='background:linear-gradient(135deg,#FDF3E3,#FFFDF8)'><h3>🚩 本课学习任务流（图文对照，学会两种读法）</h3>"+
  "<div class='taskflow'>"+
  "<div class='tflow' onclick='showPack(\"jinzita\")'>📖<br>读前资料包<small>先看 3 张背景卡再读课文</small></div>"+
  "<div class='tflow' onclick='document.getElementById(\"jinzita-src\").scrollIntoView({behavior:\"smooth\"})'>📚<br>读中查资料<small>读原文时点黄色标签</small></div>"+
  "<div class='tflow' onclick='openXilianbi(\"jinzita\")'>✍️<br>小练笔<small>用一句话＋一个数据写建筑</small></div>"+
  "<div class='tflow' onclick='switchTab(\"guoguan\")'>🎯<br>过关自测<small>5 道题检验</small></div>"+
  "</div>"+
  "<div style='margin-top:10px;text-align:right'><button class='srcbtn' id='jjModeBtn' onclick='toggleJjMode()'>🔄 切换为：复习模式</button></div></div>"+
  "<div class='card' style='border:2px solid #D9C9A8'><h3>🧾 本课必背内容（考试就考这些，先逐项过关）</h3>"+
  "<table class='ovtable'>"+
  "<tr><td><b>✅ 两篇文本</b></td><td>《金字塔夕照》——穆青的<b>散文</b>，写夕阳下金字塔的金色画面与感受；《不可思议的金金字塔》——<b>非连续性文本</b>，由说明文字、数据、批注、图示组成。</td></tr>"+
  "<tr><td><b>✅ 关键数据</b></td><td>胡夫金字塔高<b>约146米</b>，底座每边长<b>约230米</b>，由<b>约230万块</b>石头砌成，每块平均重<b>2.5吨</b>。</td></tr>"+
  "<tr><td><b>✅ 必背结论</b></td><td>金字塔是古埃及法老的陵墓；<b>古代世界七大奇迹中，唯一保存下来的就是金字塔</b>。</td></tr>"+
  "<tr><td><b>✅ 阅读方法</b></td><td>读非连续性文本要：看标题→看图表数据→读批注→图文对照→提取信息、提出问题。</td></tr>"+
  "</table></div>"+
  "<div class='card'><h3>🎯 两篇文本对照速查（这是本课最特别的考法）</h3>"+
  "<table class='ovtable'><thead><tr><th style='width:110px'>对比项</th><th>《金字塔夕照》</th><th>《不可思议的金字塔》</th></tr></thead>"+
  "<tr><td><b>文体</b></td><td>散文（游记）</td><td>非连续性文本（说明性）</td></tr>"+
  "<tr><td><b>表达方式</b></td><td>描写 + 抒情，语言优美</td><td>说明 + 数据，语言准确</td></tr>"+
  "<tr><td><b>主要内容</b></td><td>夕阳下金字塔的金色景象，以及作者的联想与赞叹</td><td>金字塔的位置、规模、建造、未解之谜</td></tr>"+
  "<tr><td><b>写作目的</b></td><td>让人“看见美、被打动”</td><td>让人“获取信息、弄明白”</td></tr>"+
  "<tr><td><b>怎么读</b></td><td>读出画面、读出情感</td><td>圈数据、画批注、提问题</td></tr></table>"+
  "<div class='tipbox exam'>📝 <b>常考问法：</b>“两篇文章都写金字塔，有什么不同？”——按<b>文体、表达方式、内容、目的</b>四点答，一条一分。</div></div>"+
  "<div class='card'><h3>🎯 考点导航 · 先看考什么，再去深入</h3>"+
  "<p style='font-size:13px;color:var(--muted)'>这张表只回答两件事：考试考什么题型？想深入时点右侧按钮直达对应精讲。</p>"+
  "<table class='ovtable'><thead><tr><th style='width:132px'>重点内容</th><th>常考怎么考</th><th style='width:86px'>直达</th></tr></thead>"+
  "<tr><td><b>⭐《金字塔夕照》· 金色画面</b></td><td><b>景物描写赏析</b>：连用五个“金色”统一画面；散文以描写、抒情为主，让人“看见美、被打动”</td><td><button class='srcbtn' onclick='jumpJj(\"jinzita-tl-1\")'>看精讲</button></td></tr>"+
  "<tr><td><b>⭐《不可思议的金字塔》· 数据说明</b></td><td><b>列数字的作用</b>：约146米、约230米、约230万块、2.5吨——数据让“不可思议”有了尺度</td><td><button class='srcbtn' onclick='jumpJj(\"jinzita-tl-2\")'>看精讲</button></td></tr>"+
  "<tr><td><b>⭐ “约”与批注 · 语言准确性</b></td><td><b>“约”“据估计”能否删去</b>：不能，体现说明文语言的准确性；批注的作用——补充背景、降低难度</td><td><button class='srcbtn' onclick='jumpJj(\"jinzita-tl-3\")'>看精讲</button></td></tr>"+
  "</table></div>"+
  "<div id='jichuAnchor'></div>"+
  "<div class='card' id='jinzita-src'><h3>📄 课文原文 · 关键语句（直读版）</h3>"+
  "<div class='readtext'>"+
  "<div style='margin:8px 0;padding:10px 14px;background:rgba(255,248,239,.6);border-radius:12px;line-height:2'><b>《金字塔夕照》开头</b>：九月的开罗是金色的。在金色的夕阳下，金色的田野，金色的沙漠，连尼罗河的河水也泛着金光；而那古老的金字塔啊，简直像是用纯金铸成的。</div>"+
  "<button class='srcbtn' onclick='showCard(\"jinzita1\")'>📚 查资料 · 五个“金色”的作用</button>"+
  "<div style='margin:8px 0;padding:10px 14px;background:rgba(255,248,239,.6);border-radius:12px;line-height:2'><b>《不可思议的金字塔》· 数据</b>：胡夫金字塔高约146米，底座每边长约230米。塔身由约230万块石头砌成，每块石头平均重2.5吨。据估计，建成这座金字塔大约用了10万人，历时30年。</div>"+
  "<button class='srcbtn' onclick='showCard(\"jinzita2\")'>📚 查资料 · 数据说明的作用</button>"+
  "<div style='margin:8px 0;padding:10px 14px;background:rgba(255,248,239,.6);border-radius:12px;line-height:2'><b>批注示例</b>：尼罗河是埃及的母亲河。／金字塔位于尼罗河西岸。／古代世界七大奇迹中，唯一保存下来的是金字塔。</div>"+
  "<button class='srcbtn' onclick='showCard(\"jinzita3\")'>📚 查资料 · 数据要“约”，批注来帮忙</button>"+
  "<p style='font-size:12.5px;color:var(--muted)'>非连续性文本不必从头读到尾：先看标题和数据，再回头读文字，效率更高。</p>"+
  "</div></div>"+
  "<div class='card'><h3>🖼️ 先看一眼：课文里的金字塔</h3>"+
  "<figure class='pic'><img src='images/u5_pyramid.jpg' alt='埃及吉萨金字塔群'><figcaption>埃及吉萨的金字塔群。对照课文数据感受它有多大：高约 146 米，相当于把 30 多层楼摞在一起。 <span class='picsrc'>图源：Pexels 免费图库（真实照片）</span></figcaption></figure><p style='font-size:14px;color:var(--muted)'>《金字塔夕照》写的就是夕阳下的它们——散文给你画面，非连续性文本给你数据，两篇合起来才是完整的金字塔。</p></div>"+
  "<div class='card'><h3>📄 关键语句摘录（对照精讲用）</h3>"+
  "<p style='margin:8px 0'><b>《金字塔夕照》开头：</b>“九月的开罗是金色的。在金色的夕阳下，金色的田野，金色的沙漠，连尼罗河的河水也泛着金光；而那古老的金字塔啊，简直像是用纯金铸成的。”</p>"+
  "<p style='margin:8px 0'><b>《不可思议的金字塔》关键信息：</b>“胡夫金字塔高约146米，底座每边长约230米。”“塔身由约230万块石头砌成，每块石头平均重2.5吨。”“据估计，建成这座金字塔大约用了10万人，历时30年。”</p>"+
  "<p style='margin:8px 0'><b>批注示例：</b>“尼罗河是埃及的母亲河”“金字塔位于尼罗河西岸”“古代世界七大奇迹中，唯一保存下来的是金字塔”。</p></div>"+
  "<div class='card'><h3>📖 逐部分精讲：一篇课文，两种读法</h3>"+
  "<div class='timeline'>"+
  "<div class='tl'><b>第一部分 · 金色画卷</b><br>穆青连用五个“金色”：夕阳、田野、沙漠、尼罗河、金字塔，把整个开罗染成金色。这不是堆砌，而是用同一个颜色把画面“统一”起来，让人一眼看见金字塔的辉煌。</div>"+
  "<div class='tl'><b>第二部分 · 联想与赞叹</b><br>由眼前的金字塔想到古埃及人、想到“不可思议”，情感从“看见”走向“震撼”。散文的功夫，在于把景物和心里的话揉在一起。</div>"+
  "<div class='tl'><b>第三部分 · 数据说明</b><br>146米、230米、230万块、2.5吨——四个数字一摆，金字塔的“大”立刻有了尺度：一层楼约3米，146米相当于近50层楼高。</div>"+
  "<div class='tl'><b>第四部分 · 建造之谜</b><br>没有起重机、没有卡车，古埃及人怎么把2.5吨的石头运上去？课文没有给答案，而是留下问题——非连续性文本常常“只给信息，不给结论”，等着你去查、去想。</div>"+
  "<div class='tl'><b>阅读策略小结</b><br>读散文，跟着“画面 + 情感”走；读非连续性文本，跟着“标题—图表—数据—批注”走。两种读法都要会，这就是本课真正的考点。</div>"+
  "</div></div>"+
  "<div class='card'><h3>🔍 富精讲：两种笔法逐句咀嚼</h3>"+
  "<div class='timeline'>"+
  "<div class='tl' id='jinzita-tl-1'><b>⭐《金字塔夕照》· 五个“金色”染出一张画</b>"+
  "<div class='jl-yuan'><span class='jl-lab'>原句</span>九月的开罗是金色的。在金色的夕阳下，金色的田野，金色的沙漠，连尼罗河的河水也泛着金光；而那古老的金字塔啊，简直像是用纯金铸成的。</div>"+
  "<div class='jl-ask'>❓ 先想一想：作者为什么不用别的颜色，偏偏抓住“金色”反复说？</div>"+
  "<ul class='jl-ju'><li><b>一个主色调统到底</b>——夕阳、田野、沙漠、河水、金字塔全染成金色，画面浑然一体。</li>"+
  "<li><b>“简直像是用纯金铸成”</b>——比喻收尾，把画面推向高潮：金字塔和夕阳融成一色。</li>"+
  "<li><b>散文的读法</b>——不先抠数据，先读画面、读情感：作者在赞叹，你也跟着赞叹。</li></ul>"+
  "<div class='jl-take'>💡 一句话：抓住主色调反复渲染——散文的画面就是这样“染”出来的。</div>"+
  "<div class='jl-kao'>📝 考法：<b>景物描写赏析</b>——连用五个“金色”，写出夕阳下金字塔的辉煌壮美，抒发作者的赞叹之情。</div></div>"+
  "<div class='tl' id='jinzita-tl-2'><b>⭐《不可思议的金字塔》· 四个数字立起一座塔</b>"+
  "<div class='jl-yuan'><span class='jl-lab'>原句</span>胡夫金字塔高约146米，底座每边长约230米。塔身由约230万块石头砌成，每块石头平均重2.5吨。</div>"+
  "<div class='jl-ask'>❓ 先想一想：不用数字，只说“金字塔非常大”，你能想象它有多大吗？</div>"+
  "<ul class='jl-ju'><li><b>高、边长、块数、单重</b>——四个角度各给一个数，规模、用料、工程量全部量化。</li>"+
  "<li><b>换算帮忙</b>——一层楼约3米，146米相当于近50层楼高；2.5吨差不多是一头小象的重量。</li>"+
  "<li><b>数字的分工</b>——列数字负责“准”，换算负责“懂”，合起来才叫“把事物说明白”。</li></ul>"+
  "<div class='jl-take'>💡 一句话：数字让“不可思议”有了尺度——会读数据，才会读说明文。</div>"+
  "<div class='jl-kao'>📝 考法：<b>列数字的作用</b>——用具体数据准确说明金字塔规模宏大、工程浩大，使读者感受直观、有说服力。</div></div>"+
  "<div class='tl' id='jinzita-tl-3'><b>⭐ “约”与批注 · 说明文的严谨和体贴</b>"+
  "<div class='jl-yuan'><span class='jl-lab'>原句</span>据估计，建成这座金字塔大约用了10万人，历时30年。</div>"+
  "<div class='jl-ask'>❓ 先想一想：为什么每个数字前面都带着“约”“据估计”“大约”？</div>"+
  "<ul class='jl-ju'><li><b>留有余地</b>——金字塔建于约4500年前，没有精确记录，“约”“据估计”表示这是推算值，不能说死。</li>"+
  "<li><b>删不得</b>——去掉“约”就变成确切数字，与事实不符，说明文语言的准确性就没了。</li>"+
  "<li><b>批注来帮忙</b>——“尼罗河是埃及的母亲河”这类批注补充背景：数据给结论，批注给拐杖。</li></ul>"+
  "<div class='jl-take'>💡 一句话：数字带“约”是严谨，旁边配批注是体贴——这就是非连续性文本的读法。</div>"+
  "<div class='jl-kao'>📝 考法：<b>“约”“据估计”能否删去</b>——不能，体现说明文语言的准确性；<b>批注的作用</b>——补充背景知识，帮助理解难点。</div></div>"+
  "</div></div>"+
  "<div class='card'><h3>✍️ 写法借鉴：说明 + 描写，两种笔法</h3>"+
  "<table class='ovtable'><thead><tr><th style='width:110px'>笔法</th><th>课文例子</th><th style='width:190px'>你的作文怎么用</th></tr></thead>"+
  "<tr><td><b>数据说明</b></td><td>高约146米，底座每边长约230米</td><td>介绍建筑：先给长、宽、高、层数，读者马上有概念</td></tr>"+
  "<tr><td><b>换算说明</b></td><td>146米≈50层楼高；2.5吨≈一头小象的重量</td><td>把陌生数字换成熟悉事物，读者才“有感”</td></tr>"+
  "<tr><td><b>画面描写</b></td><td>“金色的田野，金色的沙漠，连尼罗河的河水也泛着金光”</td><td>介绍景物时，用一个主色调串起全段</td></tr>"+
  "<tr><td><b>留下问题</b></td><td>金字塔怎么建成的？至今是谜</td><td>结尾提一个值得思考的问题，文章更有余味</td></tr></table></div>"+
  "<div class='card'><h3>📚 课后习题·参考答案</h3>"+
  "<div class='acc open' onclick='this.classList.toggle(\"open\")'><button class='head'><span class='idx'>题1</span>两篇文本分别介绍了金字塔的什么？<span class='arrow'>▸</span></button><div class='body'>✅ <b>参考答案：</b>《金字塔夕照》描写夕阳下金字塔的金色景象，抒发赞叹之情；《不可思议的金字塔》用数据和批注介绍金字塔的规模、建造与未解之谜。</div></div>"+
  "<div class='acc' onclick='this.classList.toggle(\"open\")'><button class='head'><span class='idx'>题2</span>“不可思议”表现在哪些地方？<span class='arrow'>▸</span></button><div class='body'>✅ <b>参考答案：</b>①规模惊人：高约146米、底座边长约230米；②工程浩大：约230万块石头，每块平均2.5吨；③建造艰难：没有现代机械，却砌得严丝合缝；④至今仍有未解之谜。</div></div>"+
  "<div class='acc' onclick='this.classList.toggle(\"open\")'><button class='head'><span class='idx'>题3</span>读非连续性文本，你用了哪些方法？<span class='arrow'>▸</span></button><div class='body'>✅ <b>参考答案：</b>先看标题明确对象，再读图表和数据提取关键信息，接着看批注理解难点，最后图文对照、把信息连起来，并提出自己的问题。</div></div></div>"+
  "<div class='card'><h3>👤 背景：金字塔与2026新版教材</h3>"+
  "<div class='kv'><div><b>🔺 金字塔是什么</b><br>金字塔是古埃及法老的陵墓，现存约80座，最大的是胡夫金字塔，位于尼罗河西岸的吉萨。它建于约4500年前，是古代世界七大奇迹中唯一保存至今的。</div>"+
  "<div><b>📚 教材变化</b><br>2026年秋季新版教材中，本单元删去《松鼠》，新增原五年级下册课文《金字塔》。编者的意图是让你接触<b>非连续性文本</b>——这也是生活中最常见的阅读材料（说明书、图表、新闻数据图）。</div></div>"+
  "<div class='tipbox fun'>🤔 你知道吗？胡夫金字塔由约230万块石头砌成，如果把这些石头排成一列，长度可以绕地球赤道大半圈。4500年前的工匠，靠的是斜坡、滚木和人力的组合——至今仍是考古学家的研究热点。</div>"+
  "<div class='tipbox tip'>⚡ <b>本课阅读提醒：</b>非连续性文本不用“从头读到尾”，可以先看标题和数据，再回头读文字，效率更高。</div></div>"+
  "<div class='card'><h3>✍️ 小练笔：用一句话＋一个数据介绍你熟悉的一处建筑</h3>"+
  "<p style='font-size:13.5px;color:var(--muted)'>学校的教学楼、小区的大门、你住的那栋楼——先一句话说清它是什么、在哪，再给一个数据（高约几层、长约多少步）。像《不可思议的金字塔》一样，让数字替你说话。</p>"+
  "<textarea id='xilianbi-jinzita' class='xltextarea' rows='4' placeholder='写在这里，点保存会自动记住…'></textarea>"+
  "<div style='margin-top:8px;display:flex;gap:10px;align-items:center'><button class='tflow' style='max-width:180px' onclick='saveXilianbi(\"jinzita\")'>💾 保存</button><span id='xlsave-jinzita' style='font-size:12.5px;color:#3C9E5C;font-weight:700'></span></div></div>"+
  "</div>";},

 yuan5Di:function(L){return "<div class='tabpane show' data-tab='jiangjie'>"+
  "<div class='card'><h3>✍️ 审题：这次要写“说明文”，不是“记事作文”</h3>"+
  "<table class='ovtable'><thead><tr><th style='width:130px'>审题要点</th><th>怎么做</th></tr></thead>"+
  "<tr><td><b>写什么</b></td><td>一种动物、一种植物、一种物品、一道美食，或者一个制作过程（如“怎样做水果沙拉”）</td></tr>"+
  "<tr><td><b>写给谁</b></td><td>写给“不了解它的人”，所以要把对方不知道的说清楚</td></tr>"+
  "<tr><td><b>核心要求</b></td><td>特点清楚、条理分明、说明方法恰当、语言准确</td></tr>"+
  "<tr><td><b>常见跑题</b></td><td>写成“我和小狗的故事”——那是记叙文；说明文要写“小狗的品种、外形、习性、喂养方法”</td></tr></table>"+
  "<div class='tipbox exam'>📝 <b>一句话记住：</b>记叙文讲“发生了什么”，说明文讲“它是什么样的”。</div></div>"+
  "<div class='card'><h3>🖼️ 看图说话：从“书包”开始</h3>"+
  "<figure class='pic'><img src='images/u5_backpack.jpg' alt='挂成一排的彩色书包'><figcaption>挂成一排的彩色书包。介绍它们，你会先说什么？颜色、大小、构造、用途——这就是说明文的顺序。 <span class='picsrc'>图源：Pexels 免费图库（真实照片）</span></figcaption></figure><p style='font-size:14px;color:var(--muted)'>试着口头说一段：挑其中一只，用上“列数字 + 打比方”，说给家人听。</p></div>"+
  "<div class='card'><h3>🖋️ 写作支架：四步搭好一篇说明文</h3>"+
  "<div class='timeline'>"+
  "<div class='tl'><b>第一步 · 选对象</b><br>选你真正熟悉、能说出细节的事物。越熟悉，越有话可说；越具体，越不容易写成“百科抄写”。</div>"+
  "<div class='tl'><b>第二步 · 列提纲</b><br>按“外形—习性/构造—用途/吃法—注意事项”分四段，每段一个中心。提纲列好，文章就成功了一半。</div>"+
  "<div class='tl'><b>第三步 · 配方法</b><br>每段至少用一种说明方法：数字（多长、多重）、比较（相当于几个什么）、举例（比如……）、比方（像……一样）。</div>"+
  "<div class='tl'><b>第四步 · 查语言</b><br>把“特别特别大”改成“长约40厘米”；把“好像”改成“约”；把“我觉得”删掉——说明文要少抒情、多事实。</div>"+
  "</div>"+
  "<table class='ovtable' style='margin-top:10px'><thead><tr><th style='width:110px'>段落</th><th>写什么</th><th style='width:170px'>建议说明方法</th></tr></thead>"+
  "<tr><td><b>开头</b></td><td>点明介绍对象，一句话概括它最突出的特点</td><td>作比较 / 打比方</td></tr>"+
  "<tr><td><b>中间一</b></td><td>外形（大小、颜色、形状、构造）</td><td>列数字、摹状貌</td></tr>"+
  "<tr><td><b>中间二</b></td><td>习性 / 功能 / 制作步骤</td><td>举例子、分类别</td></tr>"+
  "<tr><td><b>结尾</b></td><td>用途、价值或一句提醒</td><td>作比较、总结</td></tr></table></div>"+
  "<div class='card'><h3>📚 习作例文怎么用（《鲸》《风向袋的制作》）</h3>"+
  "<table class='ovtable'><thead><tr><th style='width:180px'>例文</th><th>结构</th><th>可借鉴处</th></tr></thead>"+
  "<tr><td><b>《鲸》</b></td><td>体型→进化→种类→进食→呼吸→睡觉→生长</td><td>一段一个方面，层次极清楚；大量列数字、作比较、举例子</td></tr>"+
  "<tr><td><b>《风向袋的制作》</b></td><td>准备材料→制作步骤→使用方法</td><td>用“先、接着、然后、最后”把过程写有序；步骤不漏、动词准确</td></tr></table>"+
  "<div class='tipbox tip'>⚡ 例文不是让你抄，是让你“照着骨架长自己的肉”。选一篇最像你选题的例文，把它的段落顺序换成你的内容。</div></div>"+
  "<div class='card'><h3>📄 范文（两篇，点击展开）</h3>"+
  "<div class='acc open' onclick='this.classList.toggle(\"open\")'><button class='head'><span class='idx'>范1</span>《我的书包》（物品类，约430字）<span class='arrow'>▸</span></button><div class='body'>我的书包是一只“深蓝色的大肚子”，每天陪我上学放学。它长约40厘米，宽28厘米，厚18厘米，装满书本后大约有5千克重，相当于两瓶大号矿泉水。<br>书包分三层。最外面一层是“文具区”，有两个小口袋，一个放笔袋，一个放水杯；中间一层是“课本区”，能装下语文、数学、英语等七八本书；最里面一层是“作业区”，专门放当天要交的本子。三层各有各的岗位，从不“串门”。<br>它的背带很宽，里面填着海绵，背起来像有两只看不见的手托着肩膀。书包背面还有两条透气的网垫，夏天背久了也不会闷出汗。最贴心的是侧面的小挂钩——雨伞挂在那里，双手就能空出来系鞋带。<br>这个书包已经陪了我两年，边角磨得发白，拉链却一次也没坏。它不会说话，却把我的每一天都装得整整齐齐。<br>✏️ <b>点评：</b>外形（数字）→构造（分类）→功能（举例）→结尾，四段清楚；用了列数字、作比较、打比方，语言准确又不失亲切。约430字。</div></div>"+
  "<div class='acc' onclick='this.classList.toggle(\"open\")'><button class='head'><span class='idx'>范2</span>《怎样做水果沙拉》（制作类，约420字）<span class='arrow'>▸</span></button><div class='body'>做一份三人份的水果沙拉，只需要十五分钟。先准备材料：苹果一个、香蕉两根、圣女果十颗、酸奶一盒（约200克），再准备一把水果刀、一个玻璃碗和一把勺子。<br>第一步，处理水果。苹果洗净去皮，切成两厘米见方的小块；香蕉剥皮，切成约一厘米厚的圆片；圣女果洗净，对半切开。切好的苹果要立刻放进淡盐水里泡一分钟，这样它就不会“脸红”——氧化变黑。<br>第二步，装碗。先把苹果块铺在碗底，再放香蕉片，最后把圣女果摆在最上面。三层颜色由浅到深，像一座小小的“水果塔”。<br>第三步，淋酸奶。把酸奶从中间慢慢倒下去，让它自己流开，不要用力搅拌，否则水果会被搅烂。<br>最后，放进冰箱冷藏十分钟，口感更清凉。端上桌时，可以撒几粒葡萄干做点缀。这样一份沙拉，酸甜清爽，三个人吃刚刚好。<br>✏️ <b>点评：</b>材料（数量）+步骤（先、接着、最后）+提醒（为什么泡盐水），过程清楚、动词准确，还顺手用了一个打比方。约420字。</div></div></div>"+
  "<div class='card'><h3>🌟 素材与词库</h3>"+
  "<div class='kv'><div><b>📐 尺寸词</b><br>长约、宽约、高约、直径约、厚约、重约</div>"+
  "<div><b>🔗 顺序词</b><br>先、接着、然后、随后、最后、首先、其次</div>"+
  "<div><b>🎨 状态词</b><br>光滑、粗糙、柔软、坚硬、透明、半透明、毛茸茸</div>"+
  "<div><b>⚖️ 比较词</b><br>相当于、抵得上、比……还……、是……的几倍</div></div>"+
  "<table class='ovtable' style='margin-top:10px'><thead><tr><th style='width:130px'>自查项</th><th>达标标准</th></tr></thead>"+
  "<tr><td>有没有中心</td><td>每段只讲一个方面，不东拉西扯</td></tr>"+
  "<tr><td>有没有方法</td><td>至少用上三种说明方法，且用得准确</td></tr>"+
  "<tr><td>有没有顺序</td><td>外形→构造→功能，或材料→步骤→用法</td></tr>"+
  "<tr><td>语言准不准</td><td>数字有“约”，不夸大；少用“超级”“特别”</td></tr></table></div>"+
  "</div>";}
},

/* ---------------- 考点说明 ---------------- */
kaodian:{
 taiyang:function(L){return "<div class='tabpane' data-tab='kaodian'><div class='card'><h3>📌 《太阳》考点讲解（点击展开每一条）</h3><div id='kaodian-acc-taiyang'></div></div>"+
  "<div class='card'><h3>🔎 四种说明方法一眼辨认</h3>"+
  "<table class='ovtable'><thead><tr><th style='width:100px'>方法</th><th>标志</th><th>课文例句</th></tr></thead>"+
  "<tr><td><b>列数字</b></td><td>出现具体数字</td><td>约有一亿五千万千米；六千摄氏度</td></tr>"+
  "<tr><td><b>作比较</b></td><td>“比”“相当于”“抵得上”</td><td>一百三十万个地球的体积才能抵得上一个太阳</td></tr>"+
  "<tr><td><b>举例子</b></td><td>“比如”“例如”或举出实例</td><td>煤炭是由远古时代的植物埋在地层底下变成的</td></tr>"+
  "<tr><td><b>打比方</b></td><td>“像”“好像”“是”</td><td>太阳会发光，会发热，是个大火球</td></tr></table></div></div>";},

 jinzita:function(L){return "<div class='tabpane' data-tab='kaodian'><div class='card'><h3>📌 《金字塔》考点讲解（点击展开每一条）</h3><div id='kaodian-acc-jinzita'></div></div>"+
  "<div class='card'><h3>🔎 非连续性文本阅读四步法</h3>"+
  "<div class='timeline'><div class='tl'><b>① 看标题</b><br>先弄清“这篇材料在讲什么”，别急着读正文。</div>"+
  "<div class='tl'><b>② 读图表</b><br>数据、图示往往藏着最关键的信息，先圈出来。</div>"+
  "<div class='tl'><b>③ 看批注</b><br>批注是编者给的“提示牌”，帮你理解难点。</div>"+
  "<div class='tl'><b>④ 提问题</b><br>读完问自己“我还想知道什么”，这是开放性题的得分点。</div></div></div></div>";},

 yuan5Di:function(L){return "<div class='tabpane' data-tab='kaodian'><div class='card'><h3>📌 习作《介绍一种事物》评分要点（点击展开）</h3><div id='kaodian-acc-yuan5Di'></div></div>"+
  "<div class='card'><h3>📝 三类常见题型的答题模板</h3>"+
  "<table class='ovtable'><thead><tr><th style='width:140px'>题型</th><th>模板</th></tr></thead>"+
  "<tr><td><b>判断说明方法</b></td><td>这句话运用了（ ）的说明方法，写出了（事物）的（特点），使说明更（准确/直观/具体）。</td></tr>"+
  "<tr><td><b>词语能否删去</b></td><td>不能删。“约”表示估计，说明……；删去后变成确切数字，与事实不符，体现不了说明文语言的准确性。</td></tr>"+
  "<tr><td><b>比较两篇文本</b></td><td>从文体、表达方式、内容、写作目的四方面分条作答。</td></tr></table></div></div>";}
},

kaodianData:{
 taiyang:[
  {t:"太阳有哪三个特点？分别用什么说明方法？",b:"✅ <b>远</b>：约一亿五千万千米，用列数字、举例子（步行三千五百年、坐飞机二十几年）；<b>大</b>：一百三十万个地球才抵得上，用作比较、列数字；<b>热</b>：表面约六千摄氏度、中心是表面的二千五百倍，用列数字、打比方（大火球）。"},
  {t:"“一百三十万个地球的体积才能抵得上一个太阳”用了什么说明方法？有什么作用？",b:"✅ 运用<b>作比较和列数字</b>。把太阳与地球作比较，用“一百三十万个”这一具体数字，突出太阳<b>体积巨大</b>的特点，使读者感受直观、印象深刻。<br>📝 答题公式：方法 + 比较对象 + 突出特点 + 效果。"},
  {t:"“太阳离我们约有一亿五千万千米远”中的“约”能不能删去？为什么？",b:"✅ <b>不能删。</b>“约”表示大概、估计，说明这个距离不是精确测量值。删去后就成了确切数字，与事实不符。“约”体现了说明文语言的<b>准确性和科学性</b>。<br>📝 类似词还有：差不多、大约、左右、估计、主要。"},
  {t:"课文开头为什么要写后羿射日的神话？",b:"✅ ①内容上，用大家熟悉的神话引出说明对象——太阳；②表达上，故事有趣，能<b>激发读者阅读兴趣</b>；③结构上，与后文科学数据形成对比，自然过渡到“太阳其实离我们很远”。"},
  {t:"“没有太阳，就没有我们这个美丽可爱的世界”这句话有什么作用？",b:"✅ 内容上总结全文，强调太阳与人类关系密切；结构上收束全文、点明中心；表达上用<b>双重否定</b>加强语气，突出太阳的重要性，给读者留下深刻印象。"},
  {t:"课文从哪几个方面写太阳与人类的关系？",b:"✅ 四个方面：①影响动植物生长，为人类提供食物；②远古植物埋在地下变成煤炭，间接提供能源；③形成云、雨、雪、风，影响气候；④太阳光能杀菌，预防疾病。"}
 ],
 jinzita:[
  {t:"《金字塔夕照》和《不可思议的金字塔》有什么不同？",b:"✅ 从四方面答：①<b>文体</b>：前者是散文，后者是非连续性文本；②<b>表达方式</b>：前者以描写、抒情为主，后者以说明为主；③<b>内容</b>：前者写夕阳下的金色景象和感受，后者介绍规模、建造与谜团；④<b>目的</b>：前者让人感受美，后者让人获取信息。"},
  {t:"“不可思议”表现在哪里？请分条概括。",b:"✅ ①规模大：高约146米，底座每边长约230米；②用料多：约230万块石头，每块平均重2.5吨；③建造难：没有现代机械却砌得严丝合缝；④谜团多：如何运输、如何垒高，至今没有定论。"},
  {t:"读非连续性文本，怎样才能又快又准地提取信息？",b:"✅ 四步：看标题明确对象→读图表数据圈关键→看批注理解难点→图文对照、整合信息。答题时尽量<b>用原文数据</b>，不要凭印象写。"},
  {t:"课文中的数据和批注分别起什么作用？",b:"✅ 数据让说明<b>准确、有说服力</b>（146米、230万块、2.5吨）；批注帮读者<b>补充背景、降低难度</b>（如“尼罗河是埃及的母亲河”），二者配合，让非连续性文本既好读又信息密集。"},
  {t:"如果请你再给金字塔补充一条资料，你会补什么？",b:"✅ 开放性题，言之有理即可。示例：补充“金字塔外墙原本覆盖着白色石灰岩，阳光下会反光”，或“狮身人面像就在胡夫金字塔旁”，或“金字塔内有一条向上的大走廊”。答“是什么 + 有什么用”最完整。"}
 ],
 yuan5Di:[
  {t:"说明文和记叙文有什么区别？",b:"✅ 目的不同：记叙文讲“发生了什么”，靠情节和情感打动人；说明文讲“它是什么样的”，靠事实和方法把事物说明白。表达不同：记叙文多用描写、抒情；说明文多用说明，语言准确、客观。"},
  {t:"怎样把一种事物“说明白”？",b:"✅ 四件事：①抓住特点（选最突出的2~3点）；②安排顺序（外形→构造→功能，或材料→步骤→用法）；③用对方法（列数字、作比较、举例子、打比方）；④语言准确（数字加“约”，少用夸张词）。"},
  {t:"写制作类说明文，怎样把步骤写清楚？",b:"✅ ①按真实顺序写，用“先、接着、然后、最后”串联；②每步写清“做什么 + 怎么做 + 注意事项”；③动词要准（切、削、倒、搅拌、冷藏）；④材料要写数量和规格（如“酸奶200克”）。"},
  {t:"说明文的开头可以怎么写？",b:"✅ 三种好用的开头：①设问式（“你见过会‘走路’的种子吗？”）；②比较式（“它只有鸡蛋那么大，却能把一头牛绊倒”）；③直陈式（“今天我要介绍的，是我家那台用了八年的电饭煲”）。"}
 ]
},

/* ---------------- 背景拓展 ---------------- */
tuozhan:{
 taiyang:function(L){return "<div class='tabpane' data-tab='tuozhan'>"+
  "<div class='card'><h3>🌟 太阳的“硬核”档案</h3><div class='timeline'>"+
  "<div class='tl'><b>阳光要走8分20秒</b><br>太阳光到地球约1.5亿千米，光速每秒30万千米，也要走8分20秒。你看到的阳光，其实是8分钟前从太阳出发的。</div>"+
  "<div class='tl'><b>太阳的能量从哪来</b><br>太阳核心温度约1500万摄氏度，氢原子在这里发生<b>核聚变</b>，变成氦，同时释放巨大能量。每一秒钟，太阳要把约400万吨物质转化成能量。</div>"+
  "<div class='tl'><b>太阳的“寿命”</b><br>太阳大约46亿岁，还可以再“燃烧”约50亿年。它现在正处在最稳定的中年时期。</div>"+
  "<div class='tl'><b>太阳也不太平</b><br>太阳表面有黑子、耀斑、日冕物质抛射。强烈的太阳活动会干扰卫星、通信和电网，所以科学家要天天“看太阳”。</div></div>"+
  "<div class='tipbox fun'>🤔 你知道吗？我们看到的太阳其实是“白色”的，因为地球大气散射，才显得偏黄。宇航员在太空看太阳，是一个刺眼的白球。</div></div>"+
  "<div class='card'><h3>📚 神话与科学：同一个太阳，两种讲法</h3>"+
  "<table class='ovtable'><thead><tr><th style='width:120px'>角度</th><th>后羿射日</th><th>《太阳》</th></tr></thead>"+
  "<tr><td><b>怎么解释</b></td><td>想象：十个太阳是天帝的儿子，被射下九个</td><td>观察与数据：太阳距地球约1.5亿千米</td></tr>"+
  "<tr><td><b>作用</b></td><td>表达先民战胜旱灾的愿望</td><td>传递科学知识</td></tr>"+
  "<tr><td><b>语言</b></td><td>夸张、神奇</td><td>准确、客观</td></tr></table>"+
  "<p style='margin-top:8px'>读神话，读的是想象力；读说明文，读的是证据。两种能力都要有——这正是语文课既讲神话又讲科学的原因。</p></div>"+
  "<div class='card'><h3>🔬 跨学科：太阳能怎么变成电</h3>"+
  "<div class='kv'><div><b>☀️ 光→电</b><br>太阳能电池板里的硅片，被光照射后产生电流，这叫“光伏效应”。</div>"+
  "<div><b>🔥 光→热→电</b><br>用镜面把阳光聚到一点，加热水产生蒸汽，推动汽轮机发电，叫“光热发电”。</div>"+
  "<div><b>🏠 生活里的太阳</b><br>太阳能热水器、太阳能路灯、计算器上的小电池板，都是太阳能的“日常用法”。</div></div>"+
  "<div class='card'><h3>🎬 背景视频 · 2分钟认识太阳</h3>"+
  "<div class='bili-frame'><iframe src='https://player.bilibili.com/player.html?bvid=BV1Gw4m1D7CG&page=1&danmaku=0&autoplay=0&high_quality=1' scrolling='no' frameborder='no' allowfullscreen='true' loading='lazy'></iframe></div>"+
  "<p class='vnote'>📺 2分钟科普：太阳是什么？（小学生能听懂版） · UP主：时光水花 · 时长 1分28秒 · <a class='blink' href='https://www.bilibili.com/video/BV1Gw4m1D7CG' target='_blank' rel='noopener'>在B站打开 ↗</a> · <a class='blink landlink'>⛶ 横屏看</a></p>"+
  "<div class='tipbox tip'>⚡ 课文用数字介绍太阳，这个视频用画面介绍它——两个对照着看，太阳的“大、远、热”就更清楚了。</div></div>" +
  "<div class='tipbox tip'>⚡ 中国是全球光伏装机容量最大的国家。你家的屋顶、路灯、甚至充电宝，都可能正在用太阳发的电。</div></div></div>";},

 jinzita:function(L){return "<div class='tabpane' data-tab='tuozhan'>"+
  "<div class='card'><h3>🌟 古代世界七大奇迹，只剩它一个</h3>"+
  "<table class='ovtable'><thead><tr><th style='width:170px'>奇迹</th><th>位置</th><th>现状</th></tr></thead>"+
  "<tr><td>胡夫金字塔</td><td>埃及吉萨</td><td><b>唯一保存至今</b></td></tr>"+
  "<tr><td>巴比伦空中花园</td><td>伊拉克</td><td>已消失，位置成谜</td></tr>"+
  "<tr><td>奥林匹亚宙斯神像</td><td>希腊</td><td>已毁</td></tr>"+
  "<tr><td>以弗所阿尔忒弥斯神庙</td><td>土耳其</td><td>仅剩一根柱子</td></tr>"+
  "<tr><td>哈利卡纳苏斯陵墓</td><td>土耳其</td><td>已毁</td></tr>"+
  "<tr><td>罗德岛太阳神巨像</td><td>希腊</td><td>地震倒塌</td></tr>"+
  "<tr><td>亚历山大灯塔</td><td>埃及</td><td>地震沉入海底</td></tr></table>"+
  "<div class='imgrow'><figure class='pic'><img src='images/u5_sphinx.jpg' alt='狮身人面像与金字塔'><figcaption>狮身人面像与金字塔（吉萨）。它与胡夫金字塔同属吉萨建筑群，已经守望了它四千五百年。 <span class='picsrc'>图源：Pexels 免费图库（真实照片）</span></figcaption></figure></div>"+
  "<div class='tipbox fun'>🤔 你知道吗？七大奇迹是古希腊人列的“旅游清单”，他们当时并不知道金字塔有多古老——金字塔建成时，距他们已有两千多年。</div></div>"+
  "<div class='card'><h3>🏗️ 金字塔是怎么建起来的？三大猜想</h3>"+
  "<div class='timeline'>"+
  "<div class='tl'><b>斜坡说</b><br>用土坡或砖坡把石头一点点往上拉，坡道随塔身升高而延长。这是最主流的猜想。</div>"+
  "<div class='tl'><b>螺旋坡道说</b><br>坡道像盘山公路一样绕塔身盘旋而上，省土方，但转弯处受力难控制。</div>"+
  "<div class='tl'><b>水运说</b><br>近年有学者提出，利用尼罗河泛滥的水道，用浮力把石块“漂”到高处，再配合内部通道提升。</div></div>"+
  "<p style='margin-top:8px'>至今没有定论——这也正是课文说“不可思议”的原因。科学的魅力，有时候不在答案，而在问题。</p></div>"+
  "<div class='card'><h3>🗿 更多“金字塔”</h3>"+
  "<div class='kv'><div><b>🇪🇬 阶梯金字塔</b><br>埃及最早的阶梯金字塔建于约4700年前，是金字塔的“祖爷爷”。</div>"+
  "<div><b>🇲🇽 玛雅金字塔</b><br>墨西哥奇琴伊察的库库尔坎金字塔，四面各91级台阶，加顶部平台正好365级，对应一年365天。</div>"+
  "<div><b>🇨🇳 东方金字塔</b><br>宁夏西夏王陵被称为“东方金字塔”，是西夏帝王的陵墓群。</div></div>"+
  "<div class='card'><h3>🎬 背景视频 · 小学生科普：埃及金字塔</h3>"+
  "<div class='bili-frame'><iframe src='https://player.bilibili.com/player.html?bvid=BV1jb4y1L7m4&page=1&danmaku=0&autoplay=0&high_quality=1' scrolling='no' frameborder='no' allowfullscreen='true' loading='lazy'></iframe></div>"+
  "<p class='vnote'>📺 小学生科普系列006《埃及金字塔》 · UP主：极简星然 · 时长 2分21秒 · <a class='blink' href='https://www.bilibili.com/video/BV1jb4y1L7m4' target='_blank' rel='noopener'>在B站打开 ↗</a> · <a class='blink landlink'>⛶ 横屏看</a></p>"+
  "<div class='tipbox tip'>⚡ 金字塔是怎么建起来的？为什么要建成这个形状？读完《金字塔》再看这个视频，做一次“图文+视频”的对照阅读。</div></div>" +
  "<div class='tipbox tip'>⚡ <b>阅读延伸：</b>找一本《DK儿童百科全书》或纪录片《金字塔》，把课文里的数据与真实资料对照，你会发现说明文的每个数字都有来处。</div></div></div>";},

 yuan5Di:function(L){return "<div class='tabpane' data-tab='tuozhan'>"+
  "<div class='card'><h3>🌟 选题库：30个不容易写空的题目</h3>"+
  "<div class='kv'><div><b>🐾 动物</b><br>我家的小乌龟 / 仓鼠的“粮仓” / 蚂蚁的分工 / 金鱼的记忆</div>"+
  "<div><b>🌿 植物</b><br>多肉为什么不怕旱 / 含羞草的秘密 / 一棵绿萝的繁殖 / 水稻的一生</div>"+
  "<div><b>🎒 物品</b><br>我的书包 / 一支铅笔的旅行 / 保温杯的构造 / 自行车的变速器</div>"+
  "<div><b>🍜 美食</b><br>一碗牛肉面 / 饺子的包法 / 酸奶怎么做 / 天津麻花为什么酥</div>"+
  "<div><b>🔧 制作</b><br>风向袋的制作 / 手工皂 / 纸桥承重 / 自制净水器</div>"+
  "<div><b>🏙️ 地方</b><br>海河上的桥 / 天津之眼 / 我家附近的菜市场 / 校园里的一棵树</div></div></div>"+
  "<div class='card'><h3>📐 数字素材：让说明“有刻度”</h3>"+
  "<table class='ovtable'><thead><tr><th style='width:130px'>对象</th><th>可用数据（示例，写作时请核实）</th></tr></thead>"+
  "<tr><td><b>成年人</b></td><td>身高约1.7米，一步约0.7米，体温约37℃</td></tr>"+
  "<tr><td><b>教室</b></td><td>长约9米，宽约6米，面积约54平方米</td></tr>"+
  "<tr><td><b>一瓶水</b></td><td>500毫升，约0.5千克</td></tr>"+
  "<tr><td><b>地铁</b></td><td>一节车厢长约20米，可载约300人</td></tr></table>"+
  "<div class='tipbox exam'>📝 <b>换算小技巧：</b>把陌生数字换成熟悉事物——“146米”说成“约50层楼高”，“2.5吨”说成“约一头小象的重量”，读者立刻有画面。</div></div>"+
  "<div class='card'><h3>📚 说明文常用句式</h3>"+
  "<ul class='tight'>"+
  "<li><b>列数字：</b>它长约……，重约……，相当于……</li>"+
  "<li><b>作比较：</b>和……相比，它……；……才抵得上一个……</li>"+
  "<li><b>举例子：</b>比如……，就是一个典型的例子。</li>"+
  "<li><b>打比方：</b>它像……一样，……。</li>"+
  "<li><b>分类别：</b>它可以分为三类：一是……，二是……，三是……。</li>"+
  "</ul>"+
  "<div class='tipbox fun'>🤔 小实验：把你自己写的一段说明文读给家人听，如果他听完能复述出三个特点，说明你写清楚了；如果他只记住“很好看”，那就回去改数字。</div></div></div>";}
},

/* ---------------- 基础字词 ---------------- */
jichu:{
 taiyang:[
  ["会写字（注音+组词）","摄 shè（摄氏、摄影）、氏 shì（摄氏度、氏族）、殖 zhí（繁殖、养殖）、粮 liáng（粮食、口粮）、炭 tàn（煤炭、木炭）、区 qū（地区、区别）、杀 shā（杀菌、杀害）、菌 jūn（细菌、病菌）、疗 liáo（治疗、疗养）"],
  ["会认字","摄 shè、殖 zhí、炭 tàn、菌 jūn"],
  ["多音字","差：chà（差不多）／chā（差别）／chāi（出差）；系：xì（关系）／jì（系鞋带）"],
  ["近义词","估计—推测；密切—紧密；繁殖—繁衍；治疗—医治"],
  ["反义词","密切—疏远；温暖—寒冷；光明—黑暗"],
  ["易错提醒","“摄”是提手旁；“菌”是草字头，别写成“茵”；“疗”是病字旁；“炭”下面是“灰”，不是“火”"]
 ],
 jinzita:[
  ["重点词语（含注音）","金字塔（jīn zì tǎ）、陵墓（líng mù）、尼罗河（ní luó hé）、不可思议（bù kě sī yì）、砌成（qì chéng）、吨（dūn）、矗立（chù lì）、熠熠生辉（yì yì shēng huī）"],
  ["易读错","砌 qì（不读 qiè）；吨 dūn；矗 chù；陵 líng；墓 mù"],
  ["近义词","不可思议—难以想象；矗立—耸立；雄伟—宏伟；估计—推测"],
  ["反义词","不可思议—司空见惯；雄伟—矮小；古老—年轻"],
  ["说明方法术语","列数字、作比较、举例子、打比方、分类别、摹状貌"],
  ["易错提醒","“砌”是石字旁；“陵”是左耳刀；“墓”下面是“土”，别写成“幕”"]
 ],
 yuan5Di:[
  ["本单元词语积累","说明、介绍、特点、构造、功能、用途、材料、步骤、数据、比较"],
  ["说明方法术语","列数字、作比较、举例子、打比方、分类别、摹状貌、下定义"],
  ["关联词","不但……而且……；虽然……但是……；因为……所以……；如果……就……"],
  ["易混词","估计（不确定）—确定（肯定）；大约（概数）—恰好（正好）"],
  ["写作提醒","说明文少用“我觉得”“特别特别”；数字前加“约”“左右”；步骤用“先、接着、然后、最后”"]
 ]
},
zige:{
 taiyang:[["摄","shè","摄影·摄氏"],["氏","shì","摄氏·氏族"],["殖","zhí","繁殖·养殖"],["粮","liáng","粮食·口粮"],["炭","tàn","煤炭·木炭"],["区","qū","地区·区别"],["杀","shā","杀菌·杀虫"],["菌","jūn","细菌·病菌"],["疗","liáo","治疗·疗养"]],
 jinzita:[["陵","líng","陵墓·丘陵"],["墓","mù","陵墓·墓碑"],["砌","qì","砌成·砌墙"],["吨","dūn","吨位·一吨"],["矗","chù","矗立·高矗"],["辉","huī","光辉·辉煌"],["埃","āi","埃及·尘埃"]],
 yuan5Di:[["介","jiè","介绍·简介"],["绍","shào","介绍"],["构","gòu","构造·结构"],["造","zào","制造·构造"],["途","tú","用途·途中"],["骤","zhòu","步骤·骤然"],["材","cái","材料·木材"]]
},
ciyu:{
 taiyang:[["摄氏度","温度的单位，符号℃。水在0℃结冰，100℃沸腾。"],["繁殖","生物产生后代，使种群延续。"],["煤炭","古代植物埋在地下，经过漫长年代变化形成的燃料。"],["杀菌","杀死细菌，防止疾病传播。"],["估计","根据已有情况推测、判断。"]],
 jinzita:[["陵墓","帝王或贵族的坟墓。"],["不可思议","原指神秘奥妙，现多指无法想象、难以理解。"],["矗立","高耸地立着。"],["熠熠生辉","形容光彩闪耀的样子。"],["非连续性文本","由图表、数据、批注、说明文字等组合而成、不必按顺序通读的文本。"]],
 yuan5Di:[["说明方法","把事物说明白的方法，如列数字、作比较、举例子、打比方。"],["构造","事物各部分及其组合方式。"],["用途","使用的方面或范围。"],["步骤","做事情的程序、次序。"],["准确","符合事实，没有偏差。"]]
},

/* ---------------- 全套组合扩展（任务流 / SRC 资料卡 / 过关自测） ---------------- */
src:{
 taiyang_before:[
  ["📄 卡片一 · 说明文是什么文体","说明文是一种“讲知识”的文章：不靠情节和抒情，而靠<b>准确、清楚、有条理</b>把事物说明白。它常用的四样法宝是——列数字、作比较、举例子、打比方。读《太阳》之前先记住这四样，读的时候就能一眼认出来。"],
  ["🌞 卡片二 · 太阳的三个特点与数据","课文用数字说话：<b>远</b>——离我们约有一亿五千万千米；<b>大</b>——一百三十万个地球的体积才能抵得上一个太阳；<b>热</b>——表面温度约六千摄氏度，中心温度估计是表面温度的二千五百倍。先把这三个数字记牢，读课文就是“对号入座”。"],
  ["🧰 卡片三 · 说明方法一览","①<b>列数字</b>：约一亿五千万千米、六千摄氏度，准确可信；②<b>作比较</b>：一百三十万个地球才抵得上一个太阳，特点立刻凸显；③<b>举例子</b>：步行三千五百年、坐飞机飞二十几年；④<b>打比方</b>：太阳是个大火球，形象易懂。"]
 ],
 taiyang1:["📏 列数字的作用","“约有一亿五千万千米”“差不多要走三千五百年”——数字一摆，太阳的“远”就不再是空话，而是<b>准确、可信、能想象</b>的。数字是说明文最有力的证据：只说“很远”没人信，说“步行要走三千五百年”人人都能感受到。"],
 taiyang2:["🔍 作比较的作用","我们看到太阳觉得它不大，其实“一百三十万个地球的体积才能抵得上一个太阳”。拿<b>熟悉的地球</b>和<b>陌生的太阳</b>比一比，抽象的“大”立刻有了参照物——作比较的本领，就是把不了解的事物变成我们能想象的东西。"],
 taiyang3:["🏹 传说引用的作用","课文用“后羿射日”的传说开篇：<b>激发阅读兴趣</b>，自然引出说明对象。但传说不是科学——所以下一段马上用数据“纠正”：其实太阳离我们约有一亿五千万千米。故事引入＋科学说明，正是说明文常用的开头结构。"],
 jinzita_before:[
  ["🔺 卡片一 · 金字塔是什么","金字塔是古埃及法老的陵墓，最大的是胡夫金字塔：高<b>约146米</b>，底座每边长<b>约230米</b>，由<b>约230万块</b>石头砌成，每块平均重<b>2.5吨</b>。它是古代世界七大奇迹中<b>唯一保存至今</b>的一个。"],
  ["📚 卡片二 · 一课两篇，两种文体","本课由两篇组成：穆青的<b>《金字塔夕照》</b>是散文，写夕阳下的金色画面与感受；<b>《不可思议的金字塔》</b>是非连续性文本，用数据、批注介绍金字塔的规模与谜团。一篇给你“美”，一篇给你“知”，两种读法都要学。"],
  ["🗺️ 卡片三 · 非连续性文本怎么读","四步：①看标题，弄清讲什么；②读图表数据，圈出关键信息；③看批注，理解难点；④图文对照，整合信息、提出问题。批注如“尼罗河是埃及的母亲河”，是编者给你的“提示牌”。"]
 ],
 jinzita1:["✨ 五个“金色”的作用","夕阳、田野、沙漠、尼罗河、金字塔——穆青连用五个“金色”，把整个开罗染成一片金。这不是重复，而是用同一个主色调<b>把画面统一起来</b>，让人一眼看见金字塔在夕阳下的辉煌。散文写景的秘密：抓住主色调，反复渲染。"],
 jinzita2:["📐 数据说明的作用","146米、230米、230万块、2.5吨——四个数字一摆，金字塔的“大”立刻有了尺度。一层楼约3米，146米相当于近50层楼高。把陌生数字<b>换算</b>成熟悉的事物，读者才有“感觉”——这正是说明文中数字的妙用。"],
 jinzita3:["📝 数据要“约”，批注来帮忙","“约146米”“据估计……大约用了10万人”——数字前加“约”“据估计”，表示这是测量和推算值，体现说明文语言的<b>准确性</b>。旁边的批注如“尼罗河是埃及的母亲河”，帮读者<b>补充背景、降低难度</b>——数据给结论，批注给拐杖。"]
},
guoguan:{
 taiyang:function(L){return "<div class='tabpane' data-tab='guoguan'>"+
  "<div class='card' style='border:2px solid #D9C9A8'><h3>🎯 过关自测 · 太阳</h3>"+
  "<p style='font-size:13px;color:var(--muted)'>5 道题检验本课掌握情况，单选每题 1 分，交卷后自动保存成绩。</p>"+
  "<div id='quizBox'></div></div></div>";}
 ,jinzita:function(L){return "<div class='tabpane' data-tab='guoguan'>"+
  "<div class='card' style='border:2px solid #D9C9A8'><h3>🎯 过关自测 · 金字塔</h3>"+
  "<p style='font-size:13px;color:var(--muted)'>5 道题检验本课掌握情况，单选每题 1 分，交卷后自动保存成绩。</p>"+
  "<div id='quizBox'></div></div></div>";}
},
quizzes:{ taiyang:QUIZ_TAIYANG, jinzita:QUIZ_JINZITA }
};
