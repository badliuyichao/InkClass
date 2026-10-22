/* ============================================================
   2026 新版统编教材 · 五年级上册 第七单元（自然之趣）
   课文：20 古诗词三首（山居秋暝/枫桥夜泊/早春呈水部张十八员外）
        21 第一场雪（峻青，新增）/ 22 白鹭（郭沫若，由第一单元移入）
   习作：我最喜爱的季节 / 语文园地：渔歌子
   ============================================================ */
window.UNIT58 = window.UNIT58 || {};
/* —— 第七单元过关自测题库（每课 5 题，a 为正确选项索引）—— */
var QUIZ_GSC3=[
 {q:"1. 《山居秋暝》的作者是？",opts:["张继","王维","韩愈"],a:1},
 {q:"2. “竹喧归浣女，莲动下渔舟”用了什么写法？",opts:["夸张","比喻","侧面描写"],a:2},
 {q:"3. 《枫桥夜泊》中“夜半钟声”来自哪座寺？",opts:["寒山寺","灵隐寺","净慈寺"],a:0},
 {q:"4. “江枫渔火对愁眠”的“愁”写出诗人怎样的心情？",opts:["丰收的喜悦","旅途的孤独与思乡之愁","隐居的闲适"],a:1},
 {q:"5. “草色遥看近却无”写出了早春怎样的特点？",opts:["小草刚刚发芽、似有似无","春草长得茂盛","柳绿花红的盛春景象"],a:0}
];
var QUIZ_XUE=[
 {q:"1. 《第一场雪》的作者是？",opts:["峻青","老舍","郭沫若"],a:0},
 {q:"2. 课文按什么顺序写第一场雪？",opts:["地点转换的顺序","时间顺序：雪前—雪中—雪后","由人及景的顺序"],a:1},
 {q:"3. “毛茸茸、亮晶晶的银条儿”写的是什么？",opts:["树枝上挂着的积雪","地里的麦苗","天上的白云"],a:0},
 {q:"4. “冬天麦盖三层被，来年枕着馒头睡”是？",opts:["一句古诗","一句农谚，预示来年丰收","一个谜语"],a:1},
 {q:"5. 作者写“瑞雪兆丰年”表达了什么？",opts:["对冬天的寒冷感到害怕","对城市生活的怀念","对瑞雪的喜悦和对来年丰收的期盼"],a:2}
];
var QUIZ_BAILU=[
 {q:"1. 《白鹭》的作者是？",opts:["许地山","冯骥才","郭沫若"],a:2},
 {q:"2. 课文开头说“白鹭是一首”？",opts:["悠扬的歌","精巧的诗","淡雅的画"],a:1},
 {q:"3. 下面哪一项不是课文写白鹭的画面？",opts:["黄昏空中低飞","清水田里站着钓鱼","夜里在树上筑巢"],a:2},
 {q:"4. “增之一分则嫌长，减之一分则嫌短”强调什么？",opts:["白鹭飞得很高","白鹭叫声动听","白鹭色素、身段的适宜"],a:2},
 {q:"5. 结尾与开头“精巧的诗”是什么关系？",opts:["首尾呼应，从“精巧的诗”深化为“韵在骨子里的散文诗”","意思完全相反","前后没有关系"],a:0}
];
UNIT58.u7 = {
unit:{
 key:"unit7", num:"第七单元", title:"四时景物皆成趣", emoji:"🍂",
 color:"var(--green)", light:"var(--green-l)",
 grad:"linear-gradient(135deg,#4E9F3D,#0F9E8C)",
 goal:"语文要素：运用多种方法品味课文语言，记录阅读感受；学习景物描写中的静态与动态",
 intro:"这个单元带你“看风景”：王维的山、张继的钟声、韩愈的早春小雨、峻青的第一场雪、郭沫若的白鹭。同一片天地，五种笔法——<b>诗中有画，文中有声</b>。读的时候，别忘了把喜欢的句子抄下来，写下你的感受。",
 chips:[
  {n:"🖼️ 诗中有画",d:"王维的诗像一幅画：月照松林、泉流石上，动静相衬。"},
  {n:"🔔 以声写静",d:"“夜半钟声到客船”——一声钟响，夜的静和人的愁都出来了。"},
  {n:"❄️ 动态与静态",d:"雪落是动，雪后是静；银条落下的瞬间又是动——动静结合，画面才活。"},
  {n:"🕊️ 散文诗",d:"《白鹭》用散文的句子写出诗的韵味，一句“精巧的诗”定下全文基调。"}
 ],
 lessons:[
  {key:"gushici3",num:"第20课",title:"古诗词三首",emoji:"📜",color:"var(--green)",light:"var(--green-l)",
   desc:"山居秋暝、枫桥夜泊、早春——三种心境，三种风景。",goal:"品味语言：动静结合、以景写情",img:"images/u7_moon.jpg",credit:"图：Pexels 免费图库（真实照片·夜空中的圆月）"},
  {key:"xue",num:"第21课",title:"第一场雪",emoji:"❄️",color:"var(--blue)",light:"var(--blue-l)",
   desc:"从雪前到雪后，再到“瑞雪兆丰年”的联想。",goal:"景物描写：动态、静态与联想",img:"images/u7_snow.jpg",credit:"图：Pexels 免费图库（真实照片·大雪后的村庄）"},
  {key:"bailu7",num:"第22课",title:"白鹭",emoji:"🕊️",color:"var(--teal)",light:"var(--teal-l)",
   desc:"白鹭是一首精巧的诗，一首韵在骨子里的散文诗。",goal:"散文诗：三幅画面，首尾呼应",img:"images/egret.jpg",credit:"图：Pexels 免费图库（真实照片·白鹭）"},
  {key:"yuan7Di",num:"习作·园地",title:"我最喜爱的季节",emoji:"✍️",color:"var(--orange)",light:"var(--orange-l)",
   desc:"写一个季节，写出它独有的颜色、声音和味道。",goal:"习作：写景抒情 + 日积月累《渔歌子》",img:"images/u7_autumn.jpg",credit:"图：Pexels 免费图库（真实照片·铺满落叶的小路）",isWriting:true}
 ],
 table:[
  ["三篇课文","《古诗词三首》用诗写山林、秋夜与早春；《第一场雪》写雪前、雪中、雪后的景象与联想；《白鹭》用散文诗写白鹭的美"],
  ["习作","我最喜爱的季节：抓住季节特有的景物，运用动静结合、五感描写，写出自己的感受"],
  ["语文园地","交流平台：品味语言的方法（抓关键词、想画面、比一比、读出节奏）；日积月累背诵张志和《渔歌子》"],
  ["能力目标","能读出景物的静态与动态；能摘抄、批注喜欢的句子并写出感受"],
  ["教材变化","本单元《长相思》换为《早春呈水部张十八员外》，《四季之美》《鸟的天堂》《月迹》换为《第一场雪》《白鹭》"]
 ],
 sources:[
  "统编版（人民教育出版社）《语文》五年级上册 第七单元（2026年秋季新版）",
  "王维《山居秋暝》、张继《枫桥夜泊》、韩愈《早春呈水部张十八员外》",
  "峻青《第一场雪》（1962年写于胶东半岛）",
  "郭沫若《白鹭》（原载1942年，后收入散文集）",
  "2026年秋季新版教材调整说明：本单元删去《长相思》《四季之美》《鸟的天堂》《月迹》，新增《早春呈水部张十八员外》《第一场雪》，并将《白鹭》由第一单元移入"
 ]},

jiangjie:{
 gushici3:function(L){return "<div class='tabpane show' data-tab='jiangjie'>"+
  "<div class='card' style='background:linear-gradient(135deg,#FDF3E3,#FFFDF8)'><h3>🚩 本课学习任务流（诗中有画，读出动静与情感）</h3>"+
  "<div class='taskflow'>"+
  "<div class='tflow' onclick='showPack(\"gushici3\")'>📖<br>读前资料包<small>先看 3 张诗人卡再读诗</small></div>"+
  "<div class='tflow' onclick='document.getElementById(\"gushici3-src\").scrollIntoView({behavior:\"smooth\"})'>📚<br>读中查资料<small>读诗时点黄色标签</small></div>"+
  "<div class='tflow' onclick='openXilianbi(\"gushici3\")'>✍️<br>小练笔<small>把一句诗改写成一段画面</small></div>"+
  "<div class='tflow' onclick='switchTab(\"guoguan\")'>🎯<br>过关自测<small>5 道题检验</small></div>"+
  "</div>"+
  "<div style='margin-top:10px;text-align:right'><button class='srcbtn' id='jjModeBtn' onclick='toggleJjMode()'>🔄 切换为：复习模式</button></div></div>"+
  "<div class='card' style='border:2px solid #D9C9A8'><h3>🧾 三首诗必背（默写一个字都不能错）</h3>"+
  "<p style='font-size:16px;line-height:2.1;text-align:center;font-family:\"KaiTi\",serif;margin:10px 0'>"+
  "<b>山居秋暝</b>　［唐］王维<br>空山新雨后，天气晚来秋。<br>明月松间照，清泉石上流。<br>竹喧归浣女，莲动下渔舟。<br>随意春芳歇，王孙自可留。</p>"+
  "<p style='font-size:16px;line-height:2.1;text-align:center;font-family:\"KaiTi\",serif;margin:10px 0'>"+
  "<b>枫桥夜泊</b>　［唐］张继<br>月落乌啼霜满天，江枫渔火对愁眠。<br>姑苏城外寒山寺，夜半钟声到客船。</p>"+
  "<p style='font-size:16px;line-height:2.1;text-align:center;font-family:\"KaiTi\",serif;margin:10px 0'>"+
  "<b>早春呈水部张十八员外</b>　［唐］韩愈<br>天街小雨润如酥，草色遥看近却无。<br>最是一年春好处，绝胜烟柳满皇都。</p>"+
  "<table class='ovtable'><tr><td><b>✅ 默写易错字</b></td><td>暝（日字旁）、浣（三点水）、歇（右边是“欠”）、蘇/酥（“酥”是酉字旁）、皇都（不要写成“黄都”）</td></tr></table></div>"+
  "<div class='card'><h3>🎯 三首诗“一表读懂”</h3>"+
  "<table class='ovtable'><thead><tr><th style='width:100px'>诗</th><th>季节/时间</th><th>画面</th><th>情感</th></tr></thead>"+
  "<tr><td><b>山居秋暝</b></td><td>初秋傍晚，雨后</td><td>明月、松林、清泉、竹林、浣女、莲叶、渔舟</td><td>喜爱山林、向往隐居</td></tr>"+
  "<tr><td><b>枫桥夜泊</b></td><td>深秋半夜</td><td>月落、乌啼、霜天、江枫、渔火、寒山寺、钟声</td><td>旅途寂寞、思乡之愁</td></tr>"+
  "<tr><td><b>早春</b></td><td>早春小雨</td><td>天街细雨、远看有近看无的草色</td><td>赞美早春、珍惜新生</td></tr></table></div>"+
  "<div class='card'><h3>🖼️ 诗里诗外：从“寒山寺”说起</h3>"+
  "<figure class='pic'><img src='images/u7_temple.jpg' alt='山林中的中式古寺'><figcaption>山林中的中式古寺。读“姑苏城外寒山寺，夜半钟声到客船”，想象钟声穿过夜色、抵达江上客船的画面。 <span class='picsrc'>图源：Pexels 免费图库（真实照片）</span></figcaption></figure><p style='font-size:14px;color:var(--muted)'>王维的山林、张继的秋夜、韩愈的早春——三首诗，三种打开季节的方式。</p></div>"+
  "<div class='card'><h3>📖 逐首精讲</h3>"+
  "<div class='timeline'>"+
  "<div class='tl'><b>《山居秋暝》· 诗中有画</b><br>首联点明时间地点：“空山”“新雨”“晚来秋”。颔联写静景：明月照松、清泉流石，一“照”一“流”，静中有动。颈联写动景：竹林喧响是浣女归来，莲叶摇动是渔舟顺流——<b>未见其人，先闻其声</b>，这是侧面描写。尾联抒怀：春天的花谢了就谢了吧，这山中足够我留下——用《楚辞》“王孙兮归来”的典故<b>反其意</b>而用，表达隐居之志。</div>"+
  "<div class='tl'><b>《枫桥夜泊》· 以声写愁</b><br>“月落”“乌啼”“霜满天”三个意象叠加，写出夜的清冷；“江枫”“渔火”一暗一明，对照出旅人的孤独。“对愁眠”的“对”字最妙——不是睡不着，是“愁”陪着“我”睡。最后一句“夜半钟声到客船”，一声钟响，把静夜、客愁、寺院、江水全串起来了。</div>"+
  "<div class='tl'><b>《早春》· 观察之妙</b><br>“润如酥”写小雨的细、滑、润；“草色遥看近却无”是全诗最绝的一句——远看有一片淡淡的绿，走近了却看不见。这是早春独有的景象，也只有真正蹲下来看过草的人写得出来。后两句直接赞美：这才是一年中最好的春色，远胜过满城烟柳。</div>"+
  "<div class='tl'><b>三首诗的“共同点”</b><br>都写景，都抒情；都不是直说“我很喜欢/我很难过”，而是把情感藏进景物里——这叫<b>借景抒情</b>。考试问“表达了什么感情”，一定要先答“通过写……的景物”，再答“表达了……的感情”。</div>"+
  "</div></div>"+
  "<div class='card'><h3>✍️ 写法借鉴：古诗里的三种“镜头”</h3>"+
  "<table class='ovtable'><thead><tr><th style='width:120px'>手法</th><th>诗句</th><th style='width:200px'>你的作文怎么用</th></tr></thead>"+
  "<tr><td><b>动静结合</b></td><td>明月松间照（静），清泉石上流（动）</td><td>写校园：树影不动，风吹叶动；教室安静，笔尖沙沙</td></tr>"+
  "<tr><td><b>以声写静</b></td><td>夜半钟声到客船</td><td>写夜晚：远处一声狗吠，反而显得夜更静</td></tr>"+
  "<tr><td><b>侧面描写</b></td><td>竹喧归浣女，莲动下渔舟</td><td>写人：不写人，写他带来的声音和变化</td></tr></table></div>"+
  "<div class='card'><h3>📚 课后习题·参考答案</h3>"+
  "<div class='acc open' onclick='this.classList.toggle(\"open\")'><button class='head'><span class='idx'>题1</span>《山居秋暝》中哪些是静景，哪些是动景？<span class='arrow'>▸</span></button><div class='body'>✅ <b>参考答案：</b>静景：空山、新雨、明月、松林、清泉、石头；动景：清泉流淌、竹林喧响、莲叶摇动、渔舟下行。动静结合，画面既有宁静又有生气。</div></div>"+
  "<div class='acc' onclick='this.classList.toggle(\"open\")'><button class='head'><span class='idx'>题2</span>“草色遥看近却无”写出了早春怎样的特点？<span class='arrow'>▸</span></button><div class='body'>✅ <b>参考答案：</b>写出早春小草刚发芽时稀疏、细小、似有似无的特点。远看是一片淡淡的绿意，走近却看不清——说明春意刚刚萌发，充满生机，也表现诗人观察的细致。</div></div>"+
  "<div class='acc' onclick='this.classList.toggle(\"open\")'><button class='head'><span class='idx'>题3</span>《枫桥夜泊》表达了诗人怎样的感情？<span class='arrow'>▸</span></button><div class='body'>✅ <b>参考答案：</b>通过月落、乌啼、霜天、江枫、渔火、夜半钟声等景物，营造清冷寂寞的氛围，表达诗人旅途中的孤独、愁绪与思乡之情。</div></div></div>"+
  "<div class='card'><h3>👤 诗人小传</h3>"+
  "<div class='kv'><div><b>王维</b><br>唐代诗人、画家，被称为“诗佛”。苏轼说他“诗中有画，画中有诗”。晚年隐居辋川，写了很多山水田园诗。</div>"+
  "<div><b>张继</b><br>唐代诗人，一生留下的诗不多，却凭一首《枫桥夜泊》名垂千古。寒山寺也因此诗闻名中外。</div>"+
  "<div><b>韩愈</b><br>唐代文学家，“唐宋八大家”之首。这首诗写给他好友张籍（排行十八，任水部员外郎），所以叫“水部张十八员外”。</div></div>"+
  "<div class='tipbox fun'>🤔 你知道吗？《枫桥夜泊》让寒山寺成了“网红打卡地”。每年除夕，都有成千上万人去寒山寺听钟声——一首诗，火了一座寺，火了一千多年。</div></div>"+
  "<div class='card'><h3>🎯 考点导航 · 先看考什么，再去深入</h3>"+
  "<p style='font-size:13px;color:var(--muted)'>这张表不再重复讲解——只回答两件事：考试考什么题型？想深入时点右侧按钮直达对应精讲。</p>"+
  "<table class='ovtable'><thead><tr><th style='width:132px'>重点内容</th><th>常考怎么考</th><th style='width:86px'>直达</th></tr></thead>"+
  "<tr><td><b>⭐《山居秋暝》</b></td><td><b>动静结合</b>：“明月松间照”是静、“清泉石上流”是动；也考“竹喧归浣女”的侧面描写</td><td><button class='srcbtn' onclick='jumpJj(\"gushici3-tl-1\")'>看精讲</button></td></tr>"+
  "<tr><td><b>⭐《枫桥夜泊》</b></td><td><b>以声写静＋情感题</b>：“夜半钟声到客船”的“到”字妙处；借景抒情表达旅途愁思</td><td><button class='srcbtn' onclick='jumpJj(\"gushici3-tl-2\")'>看精讲</button></td></tr>"+
  "<tr><td><b>⭐《早春》</b></td><td><b>名句赏析＋默写</b>：“草色遥看近却无”为什么传神；“润如酥”写小雨的细润</td><td><button class='srcbtn' onclick='jumpJj(\"gushici3-tl-3\")'>看精讲</button></td></tr>"+
  "</table></div>"+
  "<div class='card' id='gushici3-src'><h3>📄 课文原文 · 三首诗全文（直读版）</h3>"+
  "<div class='readtext'>"+
  "<div style='margin:8px 0;padding:10px 14px;background:rgba(255,248,239,.6);border-radius:12px;line-height:2'><b>山居秋暝</b> <span style='font-size:13px;color:var(--muted)'>［唐］王维</span><br>空山新雨后，天气晚来秋。<br>明月松间照，清泉石上流。<br>竹喧归浣女，莲动下渔舟。<br>随意春芳歇，王孙自可留。</div>"+
  "<button class='srcbtn' onclick='showCard(\"gsc1\")'>📚 查资料 · “空山”不空</button>"+
  "<div style='margin:8px 0;padding:10px 14px;background:rgba(255,248,239,.6);border-radius:12px;line-height:2'><b>枫桥夜泊</b> <span style='font-size:13px;color:var(--muted)'>［唐］张继</span><br>月落乌啼霜满天，江枫渔火对愁眠。<br>姑苏城外寒山寺，夜半钟声到客船。</div>"+
  "<button class='srcbtn' onclick='showCard(\"gsc2\")'>📚 查资料 · 夜半的钟声</button>"+
  "<div style='margin:8px 0;padding:10px 14px;background:rgba(255,248,239,.6);border-radius:12px;line-height:2'><b>早春呈水部张十八员外</b> <span style='font-size:13px;color:var(--muted)'>［唐］韩愈</span><br>天街小雨润如酥，草色遥看近却无。<br>最是一年春好处，绝胜烟柳满皇都。</div>"+
  "<button class='srcbtn' onclick='showCard(\"gsc3\")'>📚 查资料 · 这首诗写给谁</button>"+
  "<p style='font-size:12.5px;color:var(--muted)'>默写易错字：暝（日字旁）、浣（三点水）、歇（右边是“欠”）、酥（酉字旁）、皇都（不要写成“黄都”）。</p>"+
  "</div></div>"+
  "<div class='card'><h3>🔍 精读深挖：一字一句读出画与声</h3>"+
  "<div class='timeline'>"+
  "<div class='tl' id='gushici3-tl-1'><b>⭐《山居秋暝》· 一静一动，诗中有画</b>"+
  "<div class='jl-yuan'><span class='jl-lab'>原句</span>明月松间照，清泉石上流。</div>"+
  "<div class='jl-ask'>❓ 先想一想：这两句写的都是雨后的山，为什么一“照”一“流”就让人难忘？</div>"+
  "<ul class='jl-ju'><li><b>上句是静</b>——月光洒在松林间，画面安宁清冷。</li>"+
  "<li><b>下句是动</b>——清泉流过石头，山里有了声音。</li>"+
  "<li><b>以动衬静</b>——泉声越清亮，越显出山的幽静；一静一动，画面就活了。</li></ul>"+
  "<div class='jl-take'>💡 一句话：写景先分清“哪些在动、哪些没动”——动静相衬，画面才立体。</div>"+
  "<div class='jl-kao'>📝 考法：<b>动静结合</b>——指出哪句静、哪句动，再答“画面既有宁静又有生气”。</div></div>"+
  "<div class='tl' id='gushici3-tl-2'><b>⭐《枫桥夜泊》· 一声钟响，以声写静</b>"+
  "<div class='jl-yuan'><span class='jl-lab'>原句</span>月落乌啼霜满天，江枫渔火对愁眠。</div>"+
  "<div class='jl-ask'>❓ 先想一想：“对愁眠”的“对”字，是不是“陪”的意思？</div>"+
  "<ul class='jl-ju'><li><b>三个意象叠加</b>——月落、乌啼、霜满天，把夜的清冷一层层压下来。</li>"+
  "<li><b>“对”字最妙</b>——不是睡不着，是“愁”陪着“我”睡；江枫暗、渔火明，一对照就孤独。</li>"+
  "<li><b>以声写静</b>——结尾一声钟响，反而把静夜和客愁全衬托出来了。</li></ul>"+
  "<div class='jl-take'>💡 一句话：不直说“我很愁”，让月、霜、钟声替诗人说。</div>"+
  "<div class='jl-kao'>📝 考法：<b>借景抒情</b>——先答“通过写月落、霜天、钟声等景物”，再答“表达旅途的孤独愁绪与思乡之情”。</div></div>"+
  "<div class='tl' id='gushici3-tl-3'><b>⭐《早春》· 远看有近看无的观察之妙</b>"+
  "<div class='jl-yuan'><span class='jl-lab'>原句</span>天街小雨润如酥，草色遥看近却无。</div>"+
  "<div class='jl-ask'>❓ 先想一想：为什么草色“遥看”有、“近看”却无？你见过这种景象吗？</div>"+
  "<ul class='jl-ju'><li><b>“润如酥”</b>——把细雨比作酥油，写出雨的细、滑、润。</li>"+
  "<li><b>似有似无</b>——远看是一片淡淡的绿，走近却找不到，因为草芽刚冒头。</li>"+
  "<li><b>只有早春才有</b>——这是春天“刚刚开始”的瞬间，所以才说“最是一年春好处”。</li></ul>"+
  "<div class='jl-take'>💡 一句话：写“刚刚开始”的东西，比写“繁盛”的东西更需要眼睛。</div>"+
  "<div class='jl-kao'>📝 考法：<b>名句赏析</b>——答“写出早春小草稀疏、细小、似有似无的特点，表现春意萌动和诗人观察之细”。</div></div>"+
  "</div></div>"+
  "<div class='card'><h3>✍️ 小练笔：把一句诗改写成一段画面</h3>"+
  "<p style='font-size:13.5px;color:var(--muted)'>选一句你最喜欢的诗（如“明月松间照，清泉石上流”），用现代文把画面写出来：有什么颜色？有什么声音？哪些是静的、哪些是动的？写 50~100 字。</p>"+
  "<textarea id='xilianbi-gushici3' class='xltextarea' rows='4' placeholder='写在这里，点保存会自动记住…'></textarea>"+
  "<div style='margin-top:8px;display:flex;gap:10px;align-items:center'><button class='tflow' style='max-width:180px' onclick='saveXilianbi(\"gushici3\")'>💾 保存</button><span id='xlsave-gushici3' style='font-size:12.5px;color:#3C9E5C;font-weight:700'></span></div></div>"+
  "</div>";},

 xue:function(L){return "<div class='tabpane show' data-tab='jiangjie'>"+
  "<div class='card' style='background:linear-gradient(135deg,#FDF3E3,#FFFDF8)'><h3>🚩 本课学习任务流（读出雪景的动态、静态与联想）</h3>"+
  "<div class='taskflow'>"+
  "<div class='tflow' onclick='showPack(\"xue\")'>📖<br>读前资料包<small>先看 3 张背景卡再读课文</small></div>"+
  "<div class='tflow' onclick='document.getElementById(\"xue-src\").scrollIntoView({behavior:\"smooth\"})'>📚<br>读中查资料<small>读原文时点黄色标签</small></div>"+
  "<div class='tflow' onclick='openXilianbi(\"xue\")'>✍️<br>小练笔<small>写你眼中某个季节的一个瞬间</small></div>"+
  "<div class='tflow' onclick='switchTab(\"guoguan\")'>🎯<br>过关自测<small>5 道题检验</small></div>"+
  "</div>"+
  "<div style='margin-top:10px;text-align:right'><button class='srcbtn' id='jjModeBtn' onclick='toggleJjMode()'>🔄 切换为：复习模式</button></div></div>"+
  "<div class='card' style='border:2px solid #D9C9A8'><h3>🧾 本课必背内容（考试就考这些，先逐项过关）</h3>"+
  "<table class='ovtable'>"+
  "<tr><td><b>✅ 结构</b></td><td><b>雪前</b>（寒流南下、铅色阴云、凛冽寒风）→ <b>雪中</b>（纷纷扬扬、彤云密布、簌簌下落、枯枝压断）→ <b>雪后</b>（粉妆玉砌、银条、雪球、彩虹、孩子玩雪）→ <b>联想</b>（瑞雪兆丰年）→ <b>点题</b>。</td></tr>"+
  "<tr><td><b>✅ 必背词句</b></td><td>“粉妆玉砌”“毛茸茸亮晶晶的银条儿”“蓬松松沉甸甸的雪球儿”“玉屑似的雪末儿”“五光十色的彩虹”“瑞雪兆丰年”。</td></tr>"+
  "<tr><td><b>✅ 必背谚语</b></td><td>“冬天麦盖三层被，来年枕着馒头睡。”——雪像棉被，保护麦苗，预示丰收。</td></tr>"+
  "<tr><td><b>✅ 必背中心</b></td><td>通过描写胶东半岛第一场雪的景象，表达作者对<b>瑞雪的喜悦</b>和对<b>来年丰收的期盼</b>。</td></tr>"+
  "</table></div>"+
  "<div class='card'><h3>🎯 段落速查（按“雪前—雪中—雪后—联想”切）</h3>"+
  "<table class='ovtable'><thead><tr><th style='width:110px'>部分</th><th>写了什么</th><th style='width:150px'>写法</th></tr></thead>"+
  "<tr><td><b>雪前</b></td><td>寒流南下、天气骤冷、铅色阴云、凛冽寒风</td><td>铺垫、渲染气氛</td></tr>"+
  "<tr><td><b>雪中</b></td><td>小雨转大雪、雪花飘落、地上变白、夜里簌簌、枯枝压断</td><td>动态描写、以声写静</td></tr>"+
  "<tr><td><b>雪后</b></td><td>天晴日出、粉妆玉砌、银条、雪球、彩虹、孩子玩雪</td><td>静态描写、色彩描写</td></tr>"+
  "<tr><td><b>联想</b></td><td>瑞雪兆丰年、麦子的棉被、来年丰收</td><td>由景及理、引用谚语</td></tr></table></div>"+
  "<div class='card'><h3>🖼️ 看图读雪：这就是“银条儿”和“雪球儿”</h3>"+
  "<figure class='pic'><img src='images/u7_snowtree.jpg' alt='树枝上挂满积雪'><figcaption>雪后，树枝上挂满积雪——像不像课文里的“毛茸茸、亮晶晶的银条儿”和“蓬松松、沉甸甸的雪球儿”？ <span class='picsrc'>图源：Pexels 免费图库（真实照片）</span></figcaption></figure><p style='font-size:14px;color:var(--muted)'>找到图里“静”的部分，再想象风吹落雪的瞬间——动静一结合，画面就活了。</p></div>"+
  "<div class='card'><h3>📄 课文精彩片段（背诵用）</h3>"+
  "<p style='margin:8px 0'>“大雪整整下了一夜。早晨，天放晴了，太阳出来了。推开门一看，嗬！好大的雪啊！山川、树木、房屋，全部罩上了一层厚厚的雪，万里江山变成了<b>粉妆玉砌</b>的世界。”</p>"+
  "<p style='margin:8px 0'>“落光叶子的柳树上，挂满了<b>毛茸茸、亮晶晶的银条儿</b>；冬夏常青的松树和柏树，堆满了<b>蓬松松、沉甸甸的雪球</b>。一阵风吹来，树枝轻轻地摇晃，银条儿和雪球儿簌簌地落下来，<b>玉屑似的雪末儿</b>随风飘扬，映着清晨的阳光，显出一道道<b>五光十色的彩虹</b>。”</p>"+
  "<p style='margin:8px 0'>“俗话说，‘瑞雪兆丰年。’这并不是迷信，有着充分的科学根据。寒冬大雪可以冻死一部分越冬的害虫；雪水渗进土层深处，又能供应庄稼生长的需要。”</p></div>"+
  "<div class='card'><h3>📖 逐段精讲：一场雪，四种写法</h3>"+
  "<div class='timeline'>"+
  "<div class='tl'><b>① 雪前 · 铺垫</b><br>先写寒流消息，再写天气骤变：铅色阴云、凛冽寒风。山雨欲来风满楼——雪还没下，气氛已经压下来了。</div>"+
  "<div class='tl'><b>② 雪中 · 动态</b><br>“伴着一阵儿小雨”→ 大片雪花 → 地上白了 → 夜里簌簌 → 枯枝压断。由小到大，由视觉到听觉，雪越下越厚。</div>"+
  "<div class='tl'><b>③ 雪后 · 静态 + 色彩</b><br>“粉妆玉砌”是总写；“银条”“雪球”是分写；风吹落雪、彩虹出现，静中又有动。白、银、五光十色，颜色一层层加上去。</div>"+
  "<div class='tl'><b>④ 联想 · 由景及理</b><br>从雪写到“瑞雪兆丰年”，引用谚语“冬天麦盖三层被”，把自然景象和农事、丰收连起来——文章一下子有了“厚度”。</div>"+
  "<div class='tl'><b>写法小结</b><br>写景作文的黄金结构：<b>景前铺垫 → 景中细描 → 景后联想</b>。只写“景”，文章是薄的；加上“联想”，文章就厚了。</div>"+
  "</div></div>"+
  "<div class='card'><h3>✍️ 写法借鉴：把雪写“活”的四招</h3>"+
  "<table class='ovtable'><thead><tr><th style='width:110px'>招法</th><th>课文例子</th><th style='width:190px'>你的作文怎么用</th></tr></thead>"+
  "<tr><td><b>叠词</b></td><td>纷纷扬扬、毛茸茸、亮晶晶、蓬松松、沉甸甸</td><td>写雨：淅淅沥沥、滴滴答答；写风：呼呼、嗖嗖</td></tr>"+
  "<tr><td><b>色彩</b></td><td>铅色、白、银、五光十色</td><td>写秋天：金黄、火红、墨绿，一种主色 + 点缀色</td></tr>"+
  "<tr><td><b>声音</b></td><td>簌簌、咯吱、咯吱咯吱</td><td>写校园：铃声、读书声、脚步声</td></tr>"+
  "<tr><td><b>联想</b></td><td>瑞雪兆丰年、麦子的棉被</td><td>写春雨：想到“春雨贵如油”；写落叶：想到“落红不是无情物”</td></tr></table></div>"+
  "<div class='card'><h3>📚 课后习题·参考答案</h3>"+
  "<div class='acc open' onclick='this.classList.toggle(\"open\")'><button class='head'><span class='idx'>题1</span>课文按什么顺序写第一场雪？<span class='arrow'>▸</span></button><div class='body'>✅ <b>参考答案：</b>按时间顺序（雪前—雪中—雪后），先写雪前天气变化，再写大雪纷飞，最后写雪后美景，并由雪后景象联想到“瑞雪兆丰年”。</div></div>"+
  "<div class='acc' onclick='this.classList.toggle(\"open\")'><button class='head'><span class='idx'>题2</span>“粉妆玉砌”是什么意思？写出了什么？<span class='arrow'>▸</span></button><div class='body'>✅ <b>参考答案：</b>意思是用白粉装饰、用白玉砌成，形容雪后一片洁白的景象。写出雪之大、雪后世界之纯净美丽，也透出作者的惊喜与喜爱。</div></div>"+
  "<div class='acc' onclick='this.classList.toggle(\"open\")'><button class='head'><span class='idx'>题3</span>为什么说“瑞雪兆丰年”有科学根据？<span class='arrow'>▸</span></button><div class='body'>✅ <b>参考答案：</b>①寒冬大雪能冻死一部分越冬害虫；②雪融化后渗进土层，为庄稼提供水分；③雪像“棉被”覆盖麦苗，保温防冻。所以及时的大雪预示来年丰收。</div></div></div>"+
  "<div class='card'><h3>👤 作者与背景：峻青</h3>"+
  "<div class='kv'><div><b>👤 作者</b><br>峻青（1922—2019），原名孙俊卿，山东海阳人，当代作家。参加过抗日战争、解放战争，代表作《黎明的河边》《秋色赋》。</div>"+
  "<div><b>🖋️ 背景</b><br>这篇散文写于1962年冬，地点是胶东半岛农村。当时我国连续几年遭受自然灾害，粮棉歉收，人们格外盼望丰收——所以一场大雪，才让人那样喜悦。</div></div>"+
  "<div class='tipbox story'>📖 峻青写景，最爱写“光”和“色”。雪后的彩虹、玉屑似的雪末、映着阳光的银条——他像摄影师一样，抓的是光线下最美的那一秒。</div>"+
  "<div class='tipbox tip'>⚡ <b>本课阅读提醒：</b>读“雪后”那一段，试着闭眼想象颜色：白、银、五光十色——把颜色按顺序数出来，你就读懂了一半。</div></div>"+
  "<div class='card'><h3>🎯 考点导航 · 先看考什么，再去深入</h3>"+
  "<p style='font-size:13px;color:var(--muted)'>这张表不再重复讲解——只回答两件事：考试考什么题型？想深入时点右侧按钮直达对应精讲。</p>"+
  "<table class='ovtable'><thead><tr><th style='width:132px'>重点内容</th><th>常考怎么考</th><th style='width:86px'>直达</th></tr></thead>"+
  "<tr><td><b>⭐ 雪后静态</b></td><td><b>静态描写＋色彩</b>：“粉妆玉砌”的意思；“银条儿”“雪球儿”写出雪后世界的洁白与宁静</td><td><button class='srcbtn' onclick='jumpJj(\"xue-tl-1\")'>看精讲</button></td></tr>"+
  "<tr><td><b>⭐ 雪中动态</b></td><td><b>动态描写＋叠词</b>：风吹银条落下、玉屑似的雪末儿——叠词让雪有了质感、光泽和声音</td><td><button class='srcbtn' onclick='jumpJj(\"xue-tl-2\")'>看精讲</button></td></tr>"+
  "<tr><td><b>⭐ 瑞雪兆丰年</b></td><td><b>联想的作用</b>：由景及理，科学根据三条；引用农谚表达对丰收的期盼</td><td><button class='srcbtn' onclick='jumpJj(\"xue-tl-3\")'>看精讲</button></td></tr>"+
  "</table></div>"+
  "<div class='card' id='xue-src'><h3>📄 课文原文 · 精彩片段（直读版）</h3>"+
  "<div class='readtext'>"+
  "<p style='margin:8px 0;padding:10px 14px;background:rgba(255,248,239,.6);border-radius:12px;line-height:2'>大雪整整下了一夜。早晨，天放晴了，太阳出来了。推开门一看，嗬！好大的雪啊！山川、树木、房屋，全部罩上了一层厚厚的雪，万里江山变成了粉妆玉砌的世界。</p>"+
  "<button class='srcbtn' onclick='showCard(\"xu1\")'>📚 查资料 · “粉妆玉砌”与雪后的安静</button>"+
  "<p style='margin:8px 0;padding:10px 14px;background:rgba(255,248,239,.6);border-radius:12px;line-height:2'>落光叶子的柳树上，挂满了毛茸茸、亮晶晶的银条儿；冬夏常青的松树和柏树，堆满了蓬松松、沉甸甸的雪球。一阵风吹来，树枝轻轻地摇晃，银条儿和雪球儿簌簌地落下来，玉屑似的雪末儿随风飘扬，映着清晨的阳光，显出一道道五光十色的彩虹。</p>"+
  "<button class='srcbtn' onclick='showCard(\"xu2\")'>📚 查资料 · 叠词：把雪写“活”的秘诀</button>"+
  "<p style='margin:8px 0;padding:10px 14px;background:rgba(255,248,239,.6);border-radius:12px;line-height:2'>俗话说，“瑞雪兆丰年。”这并不是迷信，有着充分的科学根据。寒冬大雪可以冻死一部分越冬的害虫；雪水渗进土层深处，又能供应庄稼生长的需要。</p>"+
  "<button class='srcbtn' onclick='showCard(\"xu3\")'>📚 查资料 · “瑞雪兆丰年”的科学根据</button>"+
  "<p style='margin:10px 0 0;font-size:12.5px;color:var(--muted)'>——课文精彩片段节选，段落顺序与课文一致；完整原文请对照课本朗读。</p>"+
  "</div></div>"+
  "<div class='card'><h3>🔍 精读深挖：一场雪，静与动各半</h3>"+
  "<div class='timeline'>"+
  "<div class='tl' id='xue-tl-1'><b>⭐ 静态＋色彩 · 粉妆玉砌的世界</b>"+
  "<div class='jl-yuan'><span class='jl-lab'>原句</span>落光叶子的柳树上，挂满了毛茸茸、亮晶晶的银条儿；冬夏常青的松树和柏树，堆满了蓬松松、沉甸甸的雪球。</div>"+
  "<div class='jl-ask'>❓ 先想一想：这一句里，树枝在动吗？作者为什么先写“挂满”“堆满”？</div>"+
  "<ul class='jl-ju'><li><b>先立住静态</b>——柳树“挂满”银条、松柏“堆满”雪球，一幅不动的雪后画。</li>"+
  "<li><b>色彩分层</b>——白（雪）、银（条）、绿（松柏），颜色一层层加上去。</li>"+
  "<li><b>叠词给质感</b>——毛茸茸、亮晶晶、蓬松松、沉甸甸：看得见光泽，摸得出分量。</li></ul>"+
  "<div class='jl-take'>💡 一句话：写雪后先写“静”和“色”——底色铺好了，动态才有地方落。</div>"+
  "<div class='jl-kao'>📝 考法：<b>静态描写赏析</b>——点出叠词与色彩，答“写出雪后世界洁白、宁静、美丽，透出作者的惊喜与喜爱”。</div></div>"+
  "<div class='tl' id='xue-tl-2'><b>⭐ 动态描写 · 风一吹，雪就“活”了</b>"+
  "<div class='jl-yuan'><span class='jl-lab'>原句</span>一阵风吹来，树枝轻轻地摇晃，银条儿和雪球儿簌簌地落下来，玉屑似的雪末儿随风飘扬，映着清晨的阳光，显出一道道五光十色的彩虹。</div>"+
  "<div class='jl-ask'>❓ 先想一想：刚才还静着的雪，被哪几个词“吹动”了？</div>"+
  "<ul class='jl-ju'><li><b>动作链</b>——摇晃、落下、飘扬：雪从树枝到空中，动起来有先有后。</li>"+
  "<li><b>以声衬静</b>——“簌簌”是雪落的声音，声音越轻，雪后世界越静。</li>"+
  "<li><b>光让动变美</b>——“玉屑”“五光十色的彩虹”：阳光一照，落雪就有了颜色。</li></ul>"+
  "<div class='jl-take'>💡 一句话：静景是画，动景是戏——风吹落雪的那一秒，就是课文最亮的镜头。</div>"+
  "<div class='jl-kao'>📝 考法：<b>动态描写赏析</b>——找出动词和叠词，答“动静结合，画面既有宁静又有生气”。</div></div>"+
  "<div class='tl' id='xue-tl-3'><b>⭐ 联想 · 由景及理“瑞雪兆丰年”</b>"+
  "<div class='jl-yuan'><span class='jl-lab'>原句</span>俗话说，“瑞雪兆丰年。”这并不是迷信，有着充分的科学根据。</div>"+
  "<div class='jl-ask'>❓ 先想一想：雪景已经写完了，为什么还要写“丰收”？</div>"+
  "<ul class='jl-ju'><li><b>科学根据三条</b>——大雪冻死越冬害虫；雪水渗进土层供庄稼生长；积雪像棉被保护麦苗。</li>"+
  "<li><b>由景及理</b>——从“看到的雪”想到“来年的丰收”，文章一下子有了厚度。</li>"+
  "<li><b>情感落点</b>——喜悦的不只是雪景，更是对来年丰收的期盼——这和 1962 年的背景有关。</li></ul>"+
  "<div class='jl-take'>💡 一句话：只写“景”，文章是薄的；加上“联想”，文章就厚了。</div>"+
  "<div class='jl-kao'>📝 考法：<b>结尾作用</b>——答“由写景转入联想，深化主题，表达对瑞雪的喜悦和对来年丰收的期盼”。</div></div>"+
  "</div></div>"+
  "<div class='card'><h3>✍️ 小练笔：写你眼中某个季节的一个瞬间</h3>"+
  "<p style='font-size:13.5px;color:var(--muted)'>像峻青那样，抓住一个瞬间：雪落下来、叶打着旋儿、雨点敲窗……用上两三个叠词，写出它的动态，再加一点颜色或声音。写 50~100 字。</p>"+
  "<textarea id='xilianbi-xue' class='xltextarea' rows='4' placeholder='写在这里，点保存会自动记住…'></textarea>"+
  "<div style='margin-top:8px;display:flex;gap:10px;align-items:center'><button class='tflow' style='max-width:180px' onclick='saveXilianbi(\"xue\")'>💾 保存</button><span id='xlsave-xue' style='font-size:12.5px;color:#3C9E5C;font-weight:700'></span></div></div>"+
  "</div>";},

 bailu7:function(L){return "<div class='tabpane show' data-tab='jiangjie'>"+
  "<div class='card' style='background:linear-gradient(135deg,#FDF3E3,#FFFDF8)'><h3>🚩 本课学习任务流（读出散文诗的精巧与韵味）</h3>"+
  "<div class='taskflow'>"+
  "<div class='tflow' onclick='showPack(\"bailu7\")'>📖<br>读前资料包<small>先看 3 张背景卡再读课文</small></div>"+
  "<div class='tflow' onclick='document.getElementById(\"bailu7-src\").scrollIntoView({behavior:\"smooth\"})'>📚<br>读中查资料<small>读原文时点黄色标签</small></div>"+
  "<div class='tflow' onclick='openXilianbi(\"bailu7\")'>✍️<br>小练笔<small>用动态描写写一种鸟或晨昏景色</small></div>"+
  "<div class='tflow' onclick='switchTab(\"guoguan\")'>🎯<br>过关自测<small>5 道题检验</small></div>"+
  "</div>"+
  "<div style='margin-top:10px;text-align:right'><button class='srcbtn' id='jjModeBtn' onclick='toggleJjMode()'>🔄 切换为：复习模式</button></div></div>"+
  "<div class='card' style='border:2px solid #D9C9A8'><h3>🧾 本课必背内容（考试就考这些，先逐项过关）</h3>"+
  "<table class='ovtable'>"+
  "<tr><td><b>✅ 必背首尾句</b></td><td>开头：“白鹭是一首<b>精巧的诗</b>。”结尾：“白鹭实在是一首诗，一首<b>韵在骨子里的散文诗</b>。”——首尾呼应，定下全文基调。</td></tr>"+
  "<tr><td><b>✅ 必背外形句</b></td><td>“增之一分则嫌长，减之一分则嫌短，素之一忽则嫌白，黛之一忽则嫌黑。”——化用宋玉《登徒子好色赋》，写“适宜”到了极致。</td></tr>"+
  "<tr><td><b>✅ 三幅画面</b></td><td>①清水田里站着钓鱼（水田钓鱼图）②晴天的清晨孤独站立于小树绝顶（枝头闲立图）③黄昏的空中低飞（空中低飞图）。</td></tr>"+
  "<tr><td><b>✅ 必背中心</b></td><td>通过描写白鹭的外形和三幅画面，赞美白鹭<b>精巧、自然、含蓄</b>的美，表达对平凡之美的喜爱与赞美。</td></tr>"+
  "</table></div>"+
  "<div class='card'><h3>🖼️ 看图找画面：白鹭的“水田钓鱼图”</h3>"+
  "<figure class='pic'><img src='images/u7_egret2.jpg' alt='浅水中的白鹭'><figcaption>浅水中的白鹭。这正是课文里“清水田里，时有一只两只白鹭站着钓鱼”的画面——它一动不动，像在钓鱼，其实是在等鱼。 <span class='picsrc'>图源：Pexels 免费图库（真实照片）</span></figcaption></figure><p style='font-size:14px;color:var(--muted)'>再看它的颜色：雪白的蓑毛、铁色的长喙、青色的脚——“色素的配合，身段的大小，一切都很适宜”。</p></div>"+
  "<div class='card'><h3>🎯 三幅画面速查（考试常考“概括画面”）</h3>"+
  "<table class='ovtable'><thead><tr><th style='width:150px'>画面</th><th>关键句</th><th style='width:130px'>美在哪里</th></tr></thead>"+
  "<tr><td><b>水田钓鱼图</b></td><td>“在清水田里，时有一只两只白鹭站着钓鱼，整个的田便成了一幅嵌在玻璃框里的画。”</td><td>静中有动，田园之美</td></tr>"+
  "<tr><td><b>枝头闲立图</b></td><td>“晴天的清晨，每每看见它孤独地站立于小树的绝顶，看来像是不安稳，而它却很悠然。”</td><td>孤独而悠然，气质之美</td></tr>"+
  "<tr><td><b>空中低飞图</b></td><td>“黄昏的空中偶见白鹭的低飞，更是乡居生活中的一种恩惠。”</td><td>轻盈灵动，生命之美</td></tr></table></div>"+
  "<div class='card'><h3>📄 课文精要（背诵 + 仿写用）</h3>"+
  "<p style='margin:8px 0'>“色素的配合，身段的大小，一切都很适宜。白鹤太大而嫌生硬，即使如粉红的朱鹭或灰色的苍鹭，也觉得大了一些，而且太不寻常了。然而白鹭却因为它的常见，而被人忘却了它的美。”</p>"+
  "<p style='margin:8px 0'>“那雪白的蓑毛，那全身的流线型结构，那铁色的长喙，那青色的脚，增之一分则嫌长，减之一分则嫌短，素之一忽则嫌白，黛之一忽则嫌黑。”</p>"+
  "<p style='margin:8px 0'>“或许有人会感到美中不足，白鹭不会唱歌。但是白鹭本身不就是一首很优美的歌吗？——不，歌未免太铿锵了。”</p></div>"+
  "<div class='card'><h3>📖 逐段精讲：一首“散文诗”是怎么写的</h3>"+
  "<div class='timeline'>"+
  "<div class='tl'><b>① 开篇定调</b><br>不说“白鹭很美”，而说“白鹭是一首精巧的诗”。一个比喻，把全文的“调子”定在“诗”上——后面所有描写，都在证明这句话。</div>"+
  "<div class='tl'><b>② 对比写“适宜”</b><br>先拿白鹤、朱鹭、苍鹭来比：它们“太大”“太生硬”“太不寻常”。白鹭不大不小、不浓不淡，美在“刚刚好”。</div>"+
  "<div class='tl'><b>③ 外形写“精巧”</b><br>蓑毛、流线型结构、长喙、青脚——四个短语，像四笔速写。“增之一分……减之一分……”用夸张的排比，把“适宜”写到极致。</div>"+
  "<div class='tl'><b>④ 三幅画面</b><br>水田钓鱼、枝头闲立、空中低飞。三幅画面由近到远、由静到动，像三幅水墨小品，最后落到“乡居生活中的一种恩惠”。</div>"+
  "<div class='tl'><b>⑤ 结尾升华</b><br>先说“白鹭不会唱歌”，又说“白鹭本身就是一首歌”，再否定“歌太铿锵”，最后落到“散文诗”。层层转折，把白鹭的美推向“韵在骨子里”。</div>"+
  "</div></div>"+
  "<div class='card'><h3>✍️ 写法借鉴：散文诗的三个“秘密”</h3>"+
  "<table class='ovtable'><thead><tr><th style='width:120px'>秘密</th><th>课文怎么用</th><th style='width:190px'>你的作文怎么用</th></tr></thead>"+
  "<tr><td><b>一句定调</b></td><td>“白鹭是一首精巧的诗”</td><td>开头用一个比喻定调：“老家的小院是一本翻旧的书”</td></tr>"+
  "<tr><td><b>对比衬托</b></td><td>白鹤、朱鹭、苍鹭对比白鹭</td><td>写人：用别人的喧闹衬托他的安静</td></tr>"+
  "<tr><td><b>画面组合</b></td><td>三幅画面，一静一动一远</td><td>写景：选三个不同时间的画面，别只写一个</td></tr></table></div>"+
  "<div class='card'><h3>📚 课后习题·参考答案</h3>"+
  "<div class='acc open' onclick='this.classList.toggle(\"open\")'><button class='head'><span class='idx'>题1</span>为什么说“白鹭是一首精巧的诗”？<span class='arrow'>▸</span></button><div class='body'>✅ <b>参考答案：</b>①外形精巧：色素配合、身段大小都很适宜；②画面优美：水田钓鱼、枝头闲立、空中低飞，像三幅画；③韵味含蓄：不张扬、不喧闹，美在骨子里。所以说它像一首精巧的诗。</div></div>"+
  "<div class='acc' onclick='this.classList.toggle(\"open\")'><button class='head'><span class='idx'>题2</span>课文写了白鹭的哪几幅画面？<span class='arrow'>▸</span></button><div class='body'>✅ <b>参考答案：</b>①清水田里站着钓鱼；②晴天清晨孤独站立于小树绝顶；③黄昏空中低飞。三幅画面由静到动，写出白鹭不同状态下的美。</div></div>"+
  "<div class='acc' onclick='this.classList.toggle(\"open\")'><button class='head'><span class='idx'>题3</span>开头和结尾有什么关系？<span class='arrow'>▸</span></button><div class='body'>✅ <b>参考答案：</b>首尾呼应。开头说“白鹭是一首精巧的诗”，结尾说“白鹭实在是一首诗，一首韵在骨子里的散文诗”，结尾深化开头，从“精巧的诗”升到“散文诗”，结构完整，情感更深。</div></div></div>"+
  "<div class='card'><h3>👤 作者与背景：郭沫若</h3>"+
  "<div class='kv'><div><b>👤 作者</b><br>郭沫若（1892—1978），四川乐山人，作家、诗人、历史学家。代表作《女神》《屈原》，是新中国文学的重要人物。</div>"+
  "<div><b>🖋️ 背景</b><br>《白鹭》写于1942年，当时正值抗战，作者在重庆。文章写得安静、克制，在对白鹭的赞美里，藏着对平静美好生活的向往。</div></div>"+
  "<div class='tipbox fun'>🤔 你知道吗？白鹭在古人诗里经常出现：“两个黄鹂鸣翠柳，一行白鹭上青天”“西塞山前白鹭飞”。白鹭几乎是中国田园诗的“标配”。</div>"+
  "<div class='tipbox tip'>⚡ <b>本课阅读提醒：</b>读的时候注意句子的“长短”——长句舒缓，短句轻快，这正是“散文诗”的节奏。</div></div>"+
  "<div class='card'><h3>🎯 考点导航 · 先看考什么，再去深入</h3>"+
  "<p style='font-size:13px;color:var(--muted)'>这张表不再重复讲解——只回答两件事：考试考什么题型？想深入时点右侧按钮直达对应精讲。</p>"+
  "<table class='ovtable'><thead><tr><th style='width:132px'>重点内容</th><th>常考怎么考</th><th style='width:86px'>直达</th></tr></thead>"+
  "<tr><td><b>⭐ 首尾呼应</b></td><td><b>“一句定调”＋结尾升华</b>：开头“精巧的诗”，结尾“韵在骨子里的散文诗”——常考“开头结尾的关系”</td><td><button class='srcbtn' onclick='jumpJj(\"bailu7-tl-1\")'>看精讲</button></td></tr>"+
  "<tr><td><b>⭐ 对比衬托</b></td><td><b>白鹤、朱鹭、苍鹭</b>：用别人的“太大、太生硬”，衬出白鹭的“适宜”；也考“增之一分”的排比夸张</td><td><button class='srcbtn' onclick='jumpJj(\"bailu7-tl-2\")'>看精讲</button></td></tr>"+
  "<tr><td><b>⭐ 三幅画面</b></td><td><b>概括画面＋好处</b>：水田钓鱼、枝头闲立、空中低飞——由静到动，“恩惠”一词的含义</td><td><button class='srcbtn' onclick='jumpJj(\"bailu7-tl-3\")'>看精讲</button></td></tr>"+
  "</table></div>"+
  "<div class='card' id='bailu7-src'><h3>📄 课文原文 · 精彩片段（直读版）</h3>"+
  "<div class='readtext'>"+
  "<p style='margin:8px 0;padding:10px 14px;background:rgba(255,248,239,.6);border-radius:12px;line-height:2'>色素的配合，身段的大小，一切都很适宜。白鹤太大而嫌生硬，即使如粉红的朱鹭或灰色的苍鹭，也觉得大了一些，而且太不寻常了。然而白鹭却因为它的常见，而被人忘却了它的美。</p>"+
  "<button class='srcbtn' onclick='showCard(\"bl1\")'>📚 查资料 · 对比衬托：白鹤、朱鹭、苍鹭</button>"+
  "<p style='margin:8px 0;padding:10px 14px;background:rgba(255,248,239,.6);border-radius:12px;line-height:2'>那雪白的蓑毛，那全身的流线型结构，那铁色的长喙，那青色的脚，增之一分则嫌长，减之一分则嫌短，素之一忽则嫌白，黛之一忽则嫌黑。</p>"+
  "<button class='srcbtn' onclick='showCard(\"bl2\")'>📚 查资料 · “增之一分”从哪里来</button>"+
  "<p style='margin:8px 0;padding:10px 14px;background:rgba(255,248,239,.6);border-radius:12px;line-height:2'>或许有人会感到美中不足，白鹭不会唱歌。但是白鹭本身不就是一首很优美的歌吗？——不，歌未免太铿锵了。</p>"+
  "<button class='srcbtn' onclick='showCard(\"bl3\")'>📚 查资料 · 白鹭会唱歌吗</button>"+
  "<p style='margin:10px 0 0;font-size:12.5px;color:var(--muted)'>——课文精彩片段节选，段落顺序与课文一致；完整原文请对照课本朗读。</p>"+
  "</div></div>"+
  "<div class='card'><h3>🔍 精读深挖：一首“散文诗”是怎么写的</h3>"+
  "<div class='timeline'>"+
  "<div class='tl' id='bailu7-tl-1'><b>⭐ 一句定调 · 首尾呼应</b>"+
  "<div class='jl-yuan'><span class='jl-lab'>原句</span>白鹭是一首精巧的诗。</div>"+
  "<div class='jl-ask'>❓ 先想一想：不说“白鹭很美”，偏说它是“一首诗”，妙在哪里？</div>"+
  "<ul class='jl-ju'><li><b>比喻定调</b>——一个比喻把全文的“调子”定在“诗”上，后面所有描写都在证明这句话。</li>"+
  "<li><b>首尾呼应</b>——结尾“白鹭实在是一首诗，一首韵在骨子里的散文诗”，从“精巧”升到“韵在骨子里”。</li>"+
  "<li><b>结构完整</b>——开头是“谜面”，结尾是“谜底”，情感一层比一层深。</li></ul>"+
  "<div class='jl-take'>💡 一句话：开头一句话定调，结尾一句话升调——这就是散文诗的骨架。</div>"+
  "<div class='jl-kao'>📝 考法：<b>开头结尾的关系</b>——答“首尾呼应，结尾深化开头，从‘精巧的诗’升到‘韵在骨子里的散文诗’”。</div></div>"+
  "<div class='tl' id='bailu7-tl-2'><b>⭐ 对比衬托 · 美在“刚刚好”</b>"+
  "<div class='jl-yuan'><span class='jl-lab'>原句</span>白鹤太大而嫌生硬，即使如粉红的朱鹭或灰色的苍鹭，也觉得大了一些，而且太不寻常了。</div>"+
  "<div class='jl-ask'>❓ 先想一想：写白鹭，为什么先写三种别的鸟？</div>"+
  "<ul class='jl-ju'><li><b>用“过”衬“刚好”</b>——白鹤太大、朱鹭苍鹭太大太不寻常，反衬白鹭不大不小、不浓不淡。</li>"+
  "<li><b>为“忘却”作铺垫</b>——白鹭因为常见而被人忘却它的美，对比之后这句才站得住。</li>"+
  "<li><b>“增之一分”再补一刀</b>——排比加夸张，把“适宜”写到极致：多一分少一分都不行。</li></ul>"+
  "<div class='jl-take'>💡 一句话：不直接夸，先摆出“别人都不行”——白鹭的“刚刚好”就立起来了。</div>"+
  "<div class='jl-kao'>📝 考法：<b>对比衬托的作用</b>——答“反衬白鹭身段、色素的适宜”；“增之一分”句另考排比、夸张手法（化用宋玉《登徒子好色赋》）。</div></div>"+
  "<div class='tl' id='bailu7-tl-3'><b>⭐ 空中低飞 · 乡居生活的“恩惠”</b>"+
  "<div class='jl-yuan'><span class='jl-lab'>原句</span>黄昏的空中偶见白鹭的低飞，更是乡居生活中的一种恩惠。</div>"+
  "<div class='jl-ask'>❓ 先想一想：看见一只鸟低飞，为什么用得上“恩惠”这么重的词？</div>"+
  "<ul class='jl-ju'><li><b>三幅画面的最后一幅</b>——水田钓鱼（静）、枝头闲立（孤）、空中低飞（动），由静到动收束。</li>"+
  "<li><b>“恩惠”的含义</b>——白鹭把黄昏的天空当作画布，是它让平凡的乡居生活变得美、值得。</li>"+
  "<li><b>美是常见却被忽略的</b>——呼应前文“因为常见，而被人忘却了它的美”。</li></ul>"+
  "<div class='jl-take'>💡 一句话：最美的东西往往常见——“恩惠”是说：它一直在把美送给你。</div>"+
  "<div class='jl-kao'>📝 考法：<b>概括三幅画面＋词语理解</b>——水田钓鱼、枝头闲立、空中低飞；“恩惠”答“白鹭的低飞给乡居生活增添了美，让平凡日子有了诗意”。</div></div>"+
  "</div></div>"+
  "<div class='card'><h3>✍️ 小练笔：用动态描写写一种鸟（或晨昏景色）</h3>"+
  "<p style='font-size:13.5px;color:var(--muted)'>像郭沫若那样：先用一句话定调（如“麻雀是小区里最小的吵闹家”），再写一个动态瞬间——它落枝、起飞、掠过水面的那一秒。写 50~100 字。</p>"+
  "<textarea id='xilianbi-bailu7' class='xltextarea' rows='4' placeholder='写在这里，点保存会自动记住…'></textarea>"+
  "<div style='margin-top:8px;display:flex;gap:10px;align-items:center'><button class='tflow' style='max-width:180px' onclick='saveXilianbi(\"bailu7\")'>💾 保存</button><span id='xlsave-bailu7' style='font-size:12.5px;color:#3C9E5C;font-weight:700'></span></div></div>"+
  "</div>";},

 yuan7Di:function(L){return "<div class='tabpane show' data-tab='jiangjie'>"+
  "<div class='card'><h3>✍️ 审题：写“季节”，不是写“一天”</h3>"+
  "<table class='ovtable'><thead><tr><th style='width:130px'>审题要点</th><th>怎么做</th></tr></thead>"+
  "<tr><td><b>写什么</b></td><td>春、夏、秋、冬任选一个，写它独有的景物和感受</td></tr>"+
  "<tr><td><b>抓住特点</b></td><td>春天写“新”，夏天写“盛”，秋天写“收”，冬天写“静”</td></tr>"+
  "<tr><td><b>避免流水账</b></td><td>不要“春天来了，小草绿了，花开了，燕子回来了”一路报菜名</td></tr>"+
  "<tr><td><b>核心要求</b></td><td>动静结合 + 五感描写 + 自己的感受</td></tr></table>"+
  "<div class='tipbox exam'>📝 <b>一句话：</b>写季节，要写出“只有这个季节才有的那一个瞬间”。</div></div>"+
  "<div class='card'><h3>🖋️ 写作支架：四段写活一个季节</h3>"+
  "<table class='ovtable'><thead><tr><th style='width:100px'>段落</th><th>写什么</th><th style='width:180px'>示例</th></tr></thead>"+
  "<tr><td><b>开头</b></td><td>用一句话定调，点出季节</td><td>“秋天是从第一片落叶开始的。”</td></tr>"+
  "<tr><td><b>中间一</b></td><td>一个清晨/黄昏的画面（静景）</td><td>“晨雾里，银杏叶像一把把小扇子，静静地铺了一地。”</td></tr>"+
  "<tr><td><b>中间二</b></td><td>一个动态场景（人/动物/风）</td><td>“风一吹，叶子打着旋儿往下落，孩子们追着踩。”</td></tr>"+
  "<tr><td><b>结尾</b></td><td>写感受，呼应开头</td><td>“秋天不说话，却把整个院子染成了金色。”</td></tr></table></div>"+
  "<div class='card'><h3>🖼️ 看图写秋：范文同款画面</h3>"+
  "<figure class='pic'><img src='images/u7_autumn.jpg' alt='铺满落叶的小路'><figcaption>铺满落叶的小路。范文写的就是这样的秋天——你也可以写自己放学路上的那棵树、那条路。 <span class='picsrc'>图源：Pexels 免费图库（真实照片）</span></figcaption></figure><p style='font-size:14px;color:var(--muted)'>写之前先问自己三个问题：这个季节有什么颜色？有什么声音？你最喜欢它的哪一个瞬间？</p></div>"+
  "<div class='card'><h3>📄 范文（两篇，点击展开）</h3>"+
  "<div class='acc open' onclick='this.classList.toggle(\"open\")'><button class='head'><span class='idx'>范1</span>《我最喜爱的季节——秋天》（约430字）<span class='arrow'>▸</span></button><div class='body'>秋天是从第一片落叶开始的。<br>那天早上，我推开院门，看见银杏树下铺了薄薄一层金黄。叶子像一把把小扇子，边缘卷着，静静地躺着，谁也没惊动谁。晨雾还没散，阳光透过雾照下来，每一片叶子都镶了一圈淡淡的光。<br>中午，风来了。风一吹，树上的叶子就哗啦啦地响，一片、两片、十几片，打着旋儿往下落。我和弟弟追着叶子跑，踩得满地“咔嚓咔嚓”。奶奶在门口喊：“别踩！留着晒干了当书签！”我们笑着停下来，一人捡了一片最完整的，夹进课本里。<br>傍晚，院子安静下来。柿子挂在枝头，像一个个小灯笼；墙角的菊花开了，黄的、白的，挤在一起。奶奶把晒了一天的玉米收进筐里，玉米粒在筐里“哗啦啦”地滚，像下了一场小雨。<br>晚上，我躺在床上，还能闻到窗外桂花的甜香。秋天不说话，却把整个院子染成了金色。<br>✏️ <b>点评：</b>以“第一片落叶”开头定调✓；早（静）—午（动）—晚（静）三段，动静结合✓；五感齐全（色、声、香、触）✓；结尾含蓄✓。约430字。</div></div>"+
  "<div class='acc' onclick='this.classList.toggle(\"open\")'><button class='head'><span class='idx'>范2</span>《我最喜爱的季节——冬天》（约420字）<span class='arrow'>▸</span></button><div class='body'>有人说冬天是灰的，我却觉得冬天是白的、暖的。<br>下雪那天，先是细小的雪粒，打在窗玻璃上沙沙响。不一会儿，雪片大起来，像撕碎的棉花，纷纷扬扬地往下落。我趴在窗台上数，数到一百就数不清了——它们落得太快，像有人在天上抖被子。<br>第二天一早，世界全白了。屋顶戴着白帽子，树枝挂满银条，连晾衣绳上都串着一排小冰晶。我踩进院子，雪没到脚踝，“咯吱”一声，身后留下一串深深的脚印。我和爸爸堆雪人，用胡萝卜当鼻子，用两颗黑豆当眼睛。妈妈从屋里端出热腾腾的饺子，热气一冒出来，就在冷空气里变成一团白雾。<br>最暖的是晚上。窗外雪还在下，屋里灯是黄的，奶奶把热水袋塞进我被窝。我缩在被子里听雪——雪是有声音的，很轻，像有人在很远的地方说话。<br>冬天很冷，可它把一家人围在了一盏灯下。<br>✏️ <b>点评：</b>反常识开头（“冬天是白的、暖的”）✓；雪前—雪后—夜晚，层次清楚✓；“咯吱”“热气”“雪声”多感官描写✓；结尾升华“暖”✓。约420字。</div></div></div>"+
  "<div class='card'><h3>🌟 素材与词库</h3>"+
  "<div class='kv'><div><b>🌸 春</b><br>嫩绿、鹅黄、细雨如丝、柳芽、燕子、泥土的腥甜</div>"+
  "<div><b>☀️ 夏</b><br>浓绿、蝉鸣、烈日、暴雨、西瓜、蒲扇、汗珠</div>"+
  "<div><b>🍁 秋</b><br>金黄、火红、桂香、稻浪、雁阵、柿子、落叶</div>"+
  "<div><b>❄️ 冬</b><br>雪白、银条、冰晶、寒风、热气、棉被、炉火</div></div>"+
  "<table class='ovtable' style='margin-top:10px'><thead><tr><th style='width:130px'>自查项</th><th>达标标准</th></tr></thead>"+
  "<tr><td>有没有画面</td><td>至少一个能“看见”的场景，有颜色、有光线</td></tr>"+
  "<tr><td>有没有声音</td><td>至少一处声音描写（风声、雨声、脚步声）</td></tr>"+
  "<tr><td>有没有动静</td><td>静景 + 动景交替，不能全是“静静地”</td></tr>"+
  "<tr><td>有没有感受</td><td>结尾写出自己的心情，但不要喊口号</td></tr></table></div>"+
  "</div>";}
},

kaodian:{
 gushici3:function(L){return "<div class='tabpane' data-tab='kaodian'><div class='card'><h3>📌 《古诗词三首》考点讲解（点击展开每一条）</h3><div id='kaodian-acc-gushici3'></div></div>"+
  "<div class='card'><h3>🔎 古诗答题“三看”</h3>"+
  "<div class='timeline'><div class='tl'><b>看题目</b><br>题目常透露时间、地点、事件，如“山居”“夜泊”“早春”。</div>"+
  "<div class='tl'><b>看意象</b><br>月、霜、钟声→冷、愁；新雨、清泉、明月→静、美。</div>"+
  "<div class='tl'><b>看诗眼</b><br>《枫桥夜泊》的诗眼是“愁”，《早春》的诗眼是“最是”。</div></div></div></div>";},

 xue:function(L){return "<div class='tabpane' data-tab='kaodian'><div class='card'><h3>📌 《第一场雪》考点讲解（点击展开每一条）</h3><div id='kaodian-acc-xue'></div></div>"+
  "<div class='card'><h3>🔎 动态描写 vs 静态描写</h3>"+
  "<table class='ovtable'><thead><tr><th style='width:100px'>类型</th><th>课文例子</th><th>效果</th></tr></thead>"+
  "<tr><td><b>动态</b></td><td>雪花飘落、枯枝压断、银条落下、孩子玩雪</td><td>有生气、有变化</td></tr>"+
  "<tr><td><b>静态</b></td><td>粉妆玉砌的世界、挂满雪花的树</td><td>宁静、纯净</td></tr></table>"+
  "<div class='tipbox exam'>📝 动静结合的作用：让画面既安静又有生气，避免呆板。</div></div></div>";},

 bailu7:function(L){return "<div class='tabpane' data-tab='kaodian'><div class='card'><h3>📌 《白鹭》考点讲解（点击展开每一条）</h3><div id='kaodian-acc-bailu7'></div></div>"+
  "<div class='card'><h3>🔎 散文诗的特点</h3>"+
  "<ul class='tight'><li>有散文的自由句式，不分行、不押韵；</li><li>有诗的意境和节奏，语言凝练、有画面；</li><li>常用比喻、排比、反复，情感含蓄；</li><li>《白鹭》就是典型的散文诗：句式自由，却句句有诗味。</li></ul></div></div>";},

 yuan7Di:function(L){return "<div class='tabpane' data-tab='kaodian'><div class='card'><h3>📌 习作《我最喜爱的季节》评分要点（点击展开）</h3><div id='kaodian-acc-yuan7Di'></div></div>"+
  "<div class='card'><h3>📝 写景作文常见问题</h3>"+
  "<table class='ovtable'><thead><tr><th style='width:150px'>问题</th><th>改法</th></tr></thead>"+
  "<tr><td>全是“很美很美”</td><td>换成具体颜色、声音、动作</td></tr>"+
  "<tr><td>像“报菜名”</td><td>只选 2~3 个场景，写深写透</td></tr>"+
  "<tr><td>没有“我”</td><td>加入自己的动作和感受（我踩、我闻、我想）</td></tr>"+
  "<tr><td>结尾喊口号</td><td>用一句话、一个画面收尾</td></tr></table></div></div>";}
},

kaodianData:{
 gushici3:[
  {t:"《山居秋暝》中“明月松间照，清泉石上流”好在哪里？",b:"✅ ①<b>动静结合</b>：明月照松是静景，清泉流石是动景；②<b>画面感强</b>：月光、松林、清泉、石头，色彩清冷、层次分明；③<b>以动衬静</b>：泉声更显出山的幽静；④语言凝练，一“照”一“流”，把光和声都写活了。"},
  {t:"“竹喧归浣女，莲动下渔舟”用了什么写法？",b:"✅ 用了<b>侧面描写（间接描写）</b>：先写竹林喧响、莲叶摇动，再让读者知道是浣女归来、渔舟下行——未见其人，先闻其声、先见其动，画面更有情趣，也显出山村的生机。"},
  {t:"《枫桥夜泊》表达了诗人怎样的感情？从哪些景物看出来？",b:"✅ 表达旅途中的<b>孤独、愁绪与思乡之情</b>。景物：月落（夜将尽）、乌啼（凄清）、霜满天（寒冷）、江枫（暗）、渔火（孤）、寒山寺钟声（悠远）。这些意象共同营造清冷寂寞的氛围。"},
  {t:"“夜半钟声到客船”中的“到”字有什么妙处？",b:"✅ “到”字把钟声写活了：钟声不是“传来”，而是主动“来到”客船，仿佛专为安慰旅人而来。一声钟响，以声写静，更显夜的深沉和人的孤寂。"},
  {t:"“草色遥看近却无”写出了早春什么特点？",b:"✅ 写出早春小草刚萌发时<b>稀疏、细小、似有似无</b>的特点：远看有淡淡绿意，近看却看不清。既表现春意的萌动，也见诗人观察之细。这句是全诗最传神的地方。"},
  {t:"《早春呈水部张十八员外》后两句表达了什么？",b:"✅ 直抒胸臆：早春才是一年中最好的时节，远远胜过满城烟柳的暮春。表达诗人对<b>早春新生之美</b>的喜爱与赞美，也暗含“最珍贵的是刚刚开始”的人生意味。"}
 ],
 xue:[
  {t:"课文按什么顺序写雪？请划分层次。",b:"✅ 按<b>时间顺序</b>：①雪前（寒流南下、天气骤冷、铅色阴云、凛冽寒风）；②雪中（小雨转大雪、雪花飘落、夜里簌簌、枯枝压断）；③雪后（天晴日出、粉妆玉砌、银条雪球、孩子玩雪）；④联想（瑞雪兆丰年）。"},
  {t:"“粉妆玉砌”写出了雪后怎样的景象？",b:"✅ 用白粉装饰、白玉砌成，形容雪后天地一片洁白纯净。既写出雪之大、之厚，也写出雪后世界的宁静美丽，透出作者的惊喜与赞美。"},
  {t:"课文中的动态描写和静态描写各有哪些？",b:"✅ 动态：雪花纷纷扬扬飘落、枯枝被压断、风吹银条雪球落下、孩子堆雪人掷雪球；静态：粉妆玉砌的世界、挂满银条的柳树、堆满雪球的松柏。动静结合，画面既静美又有生气。"},
  {t:"“瑞雪兆丰年”有科学根据吗？",b:"✅ 有。①大雪能冻死越冬害虫；②雪水融化渗入土层，为庄稼提供水分；③积雪像棉被，保护麦苗不受冻。所以及时的大雪预示来年丰收，这不是迷信。"},
  {t:"课文结尾写“瑞雪兆丰年”有什么作用？",b:"✅ ①由写景转入联想，深化主题；②把自然景象与农事、丰收联系起来，表达对来年丰收的期盼；③引用谚语，语言通俗生动；④使文章不止于“景”，更有“情”和“理”。"}
 ],
 bailu7:[
  {t:"为什么说“白鹭是一首精巧的诗”？",b:"✅ ①外形精巧：色素配合、身段大小都适宜；②画面优美：水田钓鱼、枝头闲立、空中低飞，像三幅画；③韵味含蓄：不喧闹、不张扬，美在骨子里。用“诗”作比，概括了白鹭美的特质。"},
  {t:"课文写了白鹭的哪几幅画面？分别美在哪里？",b:"✅ ①清水田里站着钓鱼——田园静美；②晴天清晨孤独站立小树绝顶——悠然孤傲；③黄昏空中低飞——轻盈灵动。三幅画面由静到动，写出白鹭不同状态下的美。"},
  {t:"“增之一分则嫌长，减之一分则嫌短”用了什么手法？",b:"✅ 用了<b>排比和夸张</b>，化用宋玉《登徒子好色赋》的句式，强调白鹭的身段、颜色“恰到好处”，多一分少一分都不行，把“适宜”写到极致，语言富有节奏感。"},
  {t:"开头和结尾是什么关系？有什么好处？",b:"✅ <b>首尾呼应</b>。开头“白鹭是一首精巧的诗”，结尾“白鹭实在是一首诗，一首韵在骨子里的散文诗”，结尾深化开头，从“精巧”升到“韵在骨子里”，结构完整，情感更深。"},
  {t:"课文为什么先写白鹤、朱鹭、苍鹭？",b:"✅ 用<b>对比衬托</b>：白鹤太大生硬，朱鹭、苍鹭太大且不寻常，反衬白鹭大小适宜、平凡而美。也为下文“因为常见而被人忘却它的美”作铺垫。"}
 ],
 yuan7Di:[
  {t:"写季节，怎样抓住特点？",b:"✅ 每个季节选 2~3 个“只有这个季节才有”的景象：春的新芽与细雨、夏的蝉鸣与暴雨、秋的落叶与桂香、冬的雪与炉火。再选一个具体时间（清晨/黄昏/雪后）写深。"},
  {t:"怎样做到动静结合？",b:"✅ 先写静景（树、房子、雪地），再写动景（风吹、叶落、人跑），或反过来。静景给画面“底色”，动景给画面“呼吸”。"},
  {t:"写景作文怎样写出“我”的感受？",b:"✅ 不用“我很喜欢”直说，而写“我”的动作和身体感受：我踩、我闻、我伸手接、我缩了缩脖子。感受藏在动作里，才自然。"},
  {t:"开头和结尾怎么写才不俗？",b:"✅ 开头用一个“信号”切入：“秋天是从第一片落叶开始的”“雪是夜里来的”。结尾回到这个信号，或用一个画面收束：“秋天不说话，却把院子染成了金色。”"}
 ]
},

tuozhan:{
 gushici3:function(L){return "<div class='tabpane' data-tab='tuozhan'>"+
  "<div class='card'><h3>🌟 王维与“诗中有画”</h3>"+
  "<p>王维是唐代少有的“全能型”艺术家：诗写得好，画也画得好，还精通音乐。苏轼评价他：“味摩诘之诗，诗中有画；观摩诘之画，画中有诗。”</p>"+
  "<div class='timeline'><div class='tl'><b>辋川别业</b><br>王维晚年隐居陕西蓝田辋川，写《辋川集》二十首，《山居秋暝》就是其中的代表作。</div>"+
  "<div class='tl'><b>“空山”不空</b><br>“空山”不是没有东西，而是没有人声的喧闹。山里有月、有松、有泉、有竹、有莲、有渔舟——空的是心，不是景。</div></div>"+
  "<div class='tipbox fun'>🤔 你知道吗？王维晚年信佛，诗里常有一种“静”气。读《山居秋暝》，不妨把声音关掉，只看画面——你会发现它真的像一幅画。</div></div>"+
  "<div class='card'><h3>🔔 一首诗，一座寺</h3>"+
  "<p>《枫桥夜泊》让苏州寒山寺名扬天下。寒山寺始建于南朝，因唐代诗僧寒山曾住于此而得名。每年除夕，寒山寺都会敲响“新年钟声”，吸引大批游客。</p>"+
  "<div class='imgrow'><figure class='pic'><img src='images/u7_roof.jpg' alt='中式寺庙屋檐'><figcaption>中式寺庙的屋檐。飞檐翘角下，就是“夜半钟声”响起的地方。<span class='picsrc'>图源：Pexels 免费图库（真实照片）</span></figcaption></figure></div>"+
  "<div class='kv'><div><b>🌉 枫桥</b><br>位于苏州古运河边，与寒山寺相邻。诗中“江枫”一说是枫桥与江村桥的合称。</div>"+
  "<div><b>🔔 夜半钟声</b><br>唐代寺院有“半夜敲钟”的习惯，叫“无常钟”。张继听到的，正是这种钟声。</div></div></div>"+
  "<div class='card'><h3>🌱 韩愈的“早春”眼光</h3>"+
  "<p>写早春的诗很多，韩愈这一首最特别：他不写花开，不写柳绿，只写“草色遥看近却无”——写的是春天“刚刚开始”的那一瞬间。这种眼光，比写满园春色更难。</p>"+
  "<div class='card'><h3>🎬 背景视频 · 爱上古诗：枫桥夜泊</h3>"+
  "<div class='bili-frame'><iframe src='https://player.bilibili.com/player.html?bvid=BV1724y1178v&page=1&danmaku=0&autoplay=0&high_quality=1' scrolling='no' frameborder='no' allowfullscreen='true' loading='lazy'></iframe></div>"+
  "<p class='vnote'>📺 【爱上古诗】枫桥夜泊——张继 · UP主：棋天大圣下凡 · 时长 5分31秒 · <a class='blink' href='https://www.bilibili.com/video/BV1724y1178v' target='_blank' rel='noopener'>在B站打开 ↗</a> · <a class='blink landlink'>⛶ 横屏看</a></p>"+
  "<div class='tipbox tip'>⚡ “落榜那夜的失眠，成就了千古名篇”。这一集把《枫桥夜泊》的背景讲得清清楚楚，还带着把诗读了一遍。</div></div>" +
  "<div class='tipbox exam'>📝 写作启示：写“开始”比写“盛景”更动人。写春天，不妨写“第一棵冒出头的草”；写友情，不妨写“第一次一起回家”。</div></div></div>";},

 xue:function(L){return "<div class='tabpane' data-tab='tuozhan'>"+
  "<div class='card'><h3>🌟 1962年的那场雪</h3>"+
  "<p>《第一场雪》写于1962年冬，地点是山东胶东半岛农村。当时我国刚经历连续几年的自然灾害，粮食紧缺，人们格外盼望丰收。所以这场雪在作者眼里，不只是景，更是“希望”。</p>"+
  "<div class='timeline'><div class='tl'><b>为什么是“胶东半岛”</b><br>峻青是山东海阳人，胶东半岛是他的故乡。他写雪，写的其实是故乡的冬天。</div>"+
  "<div class='tl'><b>“瑞雪”为什么让人高兴</b><br>冬小麦需要雪覆盖过冬，雪水又能缓解春旱。对农民来说，一场及时的大雪，就是来年饭碗的保障。</div></div>"+
  "<div class='tipbox fun'>🤔 你知道吗？“冬天麦盖三层被，来年枕着馒头睡”是一句流传很广的农谚。“三层被”指三场大雪，“枕着馒头睡”是夸张说法，形容粮食多得吃不完。</div></div>"+
  "<div class='card'><h3>❄️ 雪的科学：一片雪花有几瓣？</h3>"+
  "<div class='kv'><div><b>❄️ 六瓣</b><br>雪花的基本形状是六角形，因为水分子结冰时按六方晶格排列。</div>"+
  "<div><b>🌡️ 温度决定形状</b><br>-5℃左右多针状，-15℃左右多片状，温度不同，雪花“长相”不同。</div>"+
  "<div><b>🤫 雪为什么安静</b><br>新雪内部有很多空隙，能吸收声音，所以雪后世界格外安静。</div></div>"+
  "<figure class='pic'><img src='images/u7_snowflake.jpg' alt='雪花特写'><figcaption>放大后的雪花：天然的六角形结构，世界上没有两片完全相同的雪花。<span class='picsrc'>图源：Pexels 免费图库（真实照片）</span></figcaption></figure>"+
  "<div class='tipbox tip'>⚡ <b>跨学科链接：</b>科学课上学“水的三态变化”，正好可以解释课文里“雪→水→水汽”的过程。</div></div>"+
  "<div class='card'><h3>📚 延伸阅读</h3>"+
  "<div class='card'><h3>🎬 背景视频 · 雪是怎么形成的</h3>"+
  "<div class='bili-frame'><iframe src='https://player.bilibili.com/player.html?bvid=BV1Eem1BCEhw&page=1&danmaku=0&autoplay=0&high_quality=1' scrolling='no' frameborder='no' allowfullscreen='true' loading='lazy'></iframe></div>"+
  "<p class='vnote'>📺 雪是怎么形成的？【斑马百科·天气与气候】 · UP主：斑马百科 · 时长 3分12秒 · <a class='blink' href='https://www.bilibili.com/video/BV1Eem1BCEhw' target='_blank' rel='noopener'>在B站打开 ↗</a> · <a class='blink landlink'>⛶ 横屏看</a></p>"+
  "<div class='tipbox tip'>⚡ 课文写雪景写得美，这个视频讲雪从哪儿来——云里的冰晶怎么长大、为什么雪花是六角的。科学视角看雪，另有一番趣味。</div></div>" +
  "<ul class='tight'><li>峻青《秋色赋》——同样是写景名篇，可以对比“秋”与“冬”的写法。</li><li>老舍《济南的冬天》——写雪后小山，语言温柔。</li><li>鲁迅《雪》——写南方的雪与北方的雪，意境深沉。</li></ul></div></div>";},

 bailu7:function(L){return "<div class='tabpane' data-tab='tuozhan'>"+
  "<div class='card'><h3>🌟 白鹭：从诗里飞来的鸟</h3>"+
  "<p>白鹭是中国古诗里的“常客”：“两个黄鹂鸣翠柳，一行白鹭上青天”（杜甫）、“西塞山前白鹭飞，桃花流水鳜鱼肥”（张志和）、“漠漠水田飞白鹭，阴阴夏木啭黄鹂”（王维）。</p>"+
  "<div class='imgrow'><figure class='pic'><img src='images/u7_egret3.jpg' alt='低飞的白鹭'><figcaption>低飞的白鹭——“黄昏的空中偶见白鹭的低飞，更是乡居生活中的一种恩惠”。<span class='picsrc'>图源：Pexels 免费图库（真实照片）</span></figcaption></figure><figure class='pic'><img src='images/u7_egret4.jpg' alt='水边的一群白鹭'><figcaption>水边的一群白鹭。白鹭常成群活动在水田、溪流边，是中国田园诗的“标配”。<span class='picsrc'>图源：Pexels 免费图库（真实照片）</span></figcaption></figure></div>"+
  "<div class='timeline'><div class='tl'><b>为什么诗人爱写白鹭</b><br>白鹭通体雪白、身形修长、姿态悠然，天生适合入画；它常出现在水田、溪边，自带田园气息。</div>"+
  "<div class='tl'><b>白鹭不是“鹤”</b><br>白鹭属鹭科，体型比丹顶鹤小得多；它捕鱼时一动不动站很久，靠的是“等”，不是“追”。</div></div>"+
  "<div class='tipbox fun'>🤔 你知道吗？白鹭繁殖期会长出长长的“饰羽”，像披了一件婚纱。清末曾因羽毛贸易被大量捕杀，后来才受到保护。</div></div>"+
  "<div class='card'><h3>🖋️ 郭沫若的“散文诗”</h3>"+
  "<p>郭沫若早年写《女神》，诗句奔放如火山；晚年写《白鹭》，却安静得像一幅水墨。同一位作家，两种风格——这说明“文如其人”不如“文随情变”。</p>"+
  "<div class='kv'><div><b>📘 《女神》</b><br>1921年出版，中国现代文学史上最重要的诗集之一，充满破坏与创造的激情。</div>"+
  "<div><b>🕊️ 《白鹭》</b><br>1942年写于重庆，语言克制、意境清淡，是“散文诗”的代表作。</div></div></div>"+
  "<div class='card'><h3>📚 延伸阅读</h3>"+
  "<div class='card'><h3>🎬 背景视频 · 白鹭原声影像</h3>"+
  "<div class='bili-frame'><iframe src='https://player.bilibili.com/player.html?bvid=BV1nQ4y127w8&page=1&danmaku=0&autoplay=0&high_quality=1' scrolling='no' frameborder='no' allowfullscreen='true' loading='lazy'></iframe></div>"+
  "<p class='vnote'>📺 原声纯享版：站枝白鹭！ · UP主：中国观鸟行 · 时长 4分18秒 · <a class='blink' href='https://www.bilibili.com/video/BV1nQ4y127w8' target='_blank' rel='noopener'>在B站打开 ↗</a> · <a class='blink landlink'>⛶ 横屏看</a></p>"+
  "<div class='tipbox tip'>⚡ 真实镜头里的白鹭：站枝、理羽、展翅——课文里“水田钓鱼图”“枝头低望图”都能在这里找到原型。</div></div>" +
  "<ul class='tight'><li>郭沫若《石榴》——同样是状物散文，可对比写法。</li><li>朱自清《春》——写景散文的经典，看怎么把春天写“活”。</li><li>《唐诗三百首》中的白鹭诗——找三首读一读，做一张“白鹭诗卡”。</li></ul></div></div>";},

 yuan7Di:function(L){return "<div class='tabpane' data-tab='tuozhan'>"+
  "<div class='card'><h3>🕰️ 日积月累：《渔歌子》</h3>"+
  "<p style='font-size:17px;line-height:2;text-align:center;font-family:\"KaiTi\",serif'>西塞山前白鹭飞，桃花流水鳜鱼肥。<br>青箬笠，绿蓑衣，斜风细雨不须归。</p>"+
  "<p style='text-align:center;color:var(--muted);font-size:13.5px'>唐 · 张志和</p>"+
  "<table class='ovtable'><thead><tr><th style='width:120px'>词句</th><th>意思</th></tr></thead>"+
  "<tr><td><b>西塞山</b></td><td>在今浙江湖州，一说在湖北</td></tr>"+
  "<tr><td><b>鳜鱼</b></td><td>一种肉质鲜美的淡水鱼</td></tr>"+
  "<tr><td><b>箬笠</b></td><td>用竹篾和箬叶编的斗笠</td></tr>"+
  "<tr><td><b>蓑衣</b></td><td>用草或棕编的雨衣</td></tr>"+
  "<tr><td><b>不须归</b></td><td>不必回去</td></tr></table>"+
  "<div class='tipbox exam'>📝 <b>画面：</b>白鹭、桃花、流水、鳜鱼、青笠、绿蓑、斜风细雨——七种景物，七种颜色，像一幅江南春汛图。最后一句“不须归”，写出渔翁的悠闲自在。</div></div>"+
  "<div class='card'><h3>🎨 写景词库（按感官分类）</h3>"+
  "<table class='ovtable'><thead><tr><th style='width:100px'>感官</th><th>词语</th></tr></thead>"+
  "<tr><td><b>看</b></td><td>嫩绿、鹅黄、火红、雪白、斑驳、朦胧、摇曳、铺满</td></tr>"+
  "<tr><td><b>听</b></td><td>簌簌、淅沥、哗啦、啾啾、嗡嗡、咯吱、沙沙</td></tr>"+
  "<tr><td><b>闻</b></td><td>清香、甜香、腥甜、泥土味、草木味、烟火气</td></tr>"+
  "<tr><td><b>触</b></td><td>冰凉、湿润、柔软、粗糙、刺骨、暖烘烘</td></tr></table>"+
  "<div class='tipbox fun'>🤔 小练习：闭眼回忆你最喜欢的一个季节瞬间，用“看到—听到—闻到—感觉到”四句话写下来，就是一段好文字。</div></div></div>";}
},

jichu:{
 gushici3:[
  ["会写字（注音+组词）","暝 míng（日暮、山居秋暝）、浣 huàn（浣女、浣纱）、歇 xiē（歇息、停歇）、泊 bó（停泊、夜泊）、愁 chóu（忧愁、愁眠）、寺 sì（寺庙、寒山寺）、酥 sū（酥油、润如酥）、愈 yù（韩愈、痊愈）"],
  ["易读错","暝 míng（不读 míng 以外的音）；浣 huàn；泊 bó（不读 pō）；酥 sū"],
  ["多音字","泊：bó（停泊）／pō（湖泊）；参：cān（参加）／shēn（人参）；落：luò（月落）／là（落下）"],
  ["近义词","空山—深山；悠然—悠闲；遥看—远望；绝胜—远远胜过"],
  ["反义词","空—满；新—旧；愁—喜"],
  ["易错提醒","“暝”是日字旁，指天色将晚；“浣”是三点水；“歇”右边是“欠”；“酥”是酉字旁"]
 ],
 xue:[
  ["会写字（注音+组词）","骤 zhòu（骤然、急骤）、凛 lǐn（凛冽、凛然）、冽 liè（凛冽）、彤 tóng（彤云、红彤彤）、簌 sù（簌簌）、瑞 ruì（瑞雪、祥瑞）、兆 zhào（兆头、预兆）、谚 yàn（谚语、农谚）、枕 zhěn（枕头、枕着）"],
  ["会认字","冽 liè、彤 tóng、簌 sù、砌 qì（粉妆玉砌）"],
  ["多音字","降：jiàng（降落）／xiáng（投降）；供：gōng（供应）／gòng（供品）；薄：báo（薄雪）／bó（薄弱）"],
  ["近义词","骤然—突然；凛冽—刺骨；寂静—安静；征兆—预兆"],
  ["反义词","寒冷—温暖；寂静—喧闹；丰收—歉收"],
  ["易错提醒","“凛冽”都是两点水；“彤”右边是三撇；“簌”是竹字头；“瑞”是王字旁"]
 ],
 bailu7:[
  ["会写字（注音+组词）","宜 yí（适宜、相宜）、鹤 hè（白鹤、丹顶鹤）、嫌 xián（嫌弃、讨人嫌）、朱 zhū（朱红、朱鹭）、嵌 qiàn（镶嵌）、框 kuàng（镜框）、匣 xiá（镜匣）、哨 shào（放哨）、恩 ēn（恩惠）、韵 yùn（韵味）"],
  ["会认字","鹭 lù（白鹭）、黛 dài（黛色）、嗜 shì（嗜好）"],
  ["多音字","好：hǎo（好处）／hào（爱好）；分：fēn（一分）／fèn（分量）"],
  ["近义词","精巧—精致；适宜—适合；悠然—悠闲；恩惠—恩泽"],
  ["反义词","生硬—自然；常见—罕见；忘却—铭记；精巧—粗劣"],
  ["易错提醒","“嫌”是女字旁；“嵌”上小下大；“匣”读 xiá 不读 jiá；“韵”右边是“匀”"]
 ],
 yuan7Di:[
  ["本单元词语积累","粉妆玉砌、纷纷扬扬、毛茸茸、亮晶晶、蓬松松、沉甸甸、五光十色、悠然、适宜、精巧"],
  ["《渔歌子》易错字","鳜鱼（“鳜”是鱼字旁）、箬笠（竹字头）、蓑衣（草字头）、斜风细雨"],
  ["写景常用词","摇曳、斑驳、朦胧、簌簌、淅沥、铺满、弥漫"],
  ["写作提醒","一个季节只写 2~3 个场景；动静结合；用五感；结尾含蓄"]
 ]
},
zige:{
 gushici3:[["暝","míng","山居秋暝·日暮"],["浣","huàn","浣女·浣纱"],["歇","xiē","停歇·歇息"],["泊","bó","停泊·夜泊"],["愁","chóu","忧愁·愁眠"],["寺","sì","寺庙·寒山寺"],["酥","sū","酥油·润如酥"],["愈","yù","韩愈·痊愈"]],
 xue:[["骤","zhòu","骤然·急骤"],["凛","lǐn","凛冽·凛然"],["冽","liè","凛冽"],["彤","tóng","彤云·红彤彤"],["簌","sù","簌簌"],["瑞","ruì","瑞雪·祥瑞"],["兆","zhào","预兆·兆头"],["谚","yàn","谚语·农谚"]],
 bailu7:[["宜","yí","适宜·相宜"],["鹤","hè","白鹤·丹顶鹤"],["嫌","xián","嫌弃·讨人嫌"],["朱","zhū","朱红·朱鹭"],["嵌","qiàn","镶嵌·嵌入"],["框","kuàng","镜框·木框"],["匣","xiá","镜匣·匣子"],["哨","shào","放哨·哨兵"],["恩","ēn","恩情·恩惠"],["韵","yùn","韵味·韵母"]],
 yuan7Di:[["景","jǐng","景色·风景"],["季","jì","季节·四季"],["飘","piāo","飘落·飘动"],["染","rǎn","染色·渲染"],["笼","lǒng","笼罩·笼统"],["拂","fú","吹拂·拂过"],["醉","zuì","陶醉·沉醉"]]
},
ciyu:{
 gushici3:[["暝","傍晚，天色将晚。"],["浣女","洗衣服的女子。"],["春芳","春天的花草。"],["歇","尽，消散。"],["王孙","原指贵族子弟，这里指诗人自己。"],["愁眠","因忧愁而难以入睡。"],["遥看","远远地看。"],["酥","酥油，这里形容小雨滋润。"],["绝胜","远远胜过。"]],
 xue:[["骤然","突然，忽然。"],["凛冽","寒冷刺骨。"],["彤云","下雪前密布的暗红色云层。"],["簌簌","形容雪花落下的声音。"],["粉妆玉砌","用白粉装饰、白玉砌成，形容雪后洁白。"],["瑞雪","及时的好雪，预示丰收。"],["兆","预兆，事先显出的迹象。"]],
 bailu7:[["精巧","精致巧妙。"],["适宜","合适，相宜。"],["悠然","悠闲自在的样子。"],["嗜好","特殊的爱好。"],["恩惠","给予的好处。"],["铿锵","形容声音响亮有力。"],["散文诗","兼有散文自由形式和诗歌意境的一种文体。"]],
 yuan7Di:[["季节","一年中按气候划分的时段。"],["摇曳","摇荡。"],["斑驳","一种颜色中夹杂别的颜色。"],["朦胧","看不分明。"],["陶醉","很满意地沉浸在某种境界中。"]]
},

src:{
 gushici3_before:[
  ["🖋️ 卡片一 · 三位诗人","王维，唐代诗人、画家，被称为“诗佛”，苏轼说他“诗中有画，画中有诗”，晚年隐居辋川写山水田园诗。张继，唐代诗人，一生留下的诗不多，却凭一首《枫桥夜泊》名垂千古。韩愈，唐代文学家，“唐宋八大家”之首——这首《早春》是他写给好友张籍（排行十八，任水部员外郎）的。"],
  ["🍃 卡片二 · 三种打开季节的方式","《山居秋暝》写初秋傍晚雨后的山林：明月、松林、清泉；《枫桥夜泊》写深秋半夜的江上：月落、乌啼、霜天、钟声；《早春》写早春小雨中的长安街道：远看有、近看无的草色。三首诗，三种心境，三种风景。"],
  ["🎭 卡片三 · 借景抒情","三首诗的共同点：都写景，都抒情；都不是直说“我很喜欢/我很难过”，而是把情感藏进景物里——这叫借景抒情。考试问“表达了什么感情”，一定要先答“通过写……的景物”，再答“表达了……的感情”。"]],
 gsc1:["⛰️ “空山”不空","“空山”不是没有东西，而是没有人声的喧闹：山里有月、有松、有泉、有竹、有莲、有渔舟——空的是心，不是景。颈联“竹喧归浣女，莲动下渔舟”是侧面描写：先听见竹林喧响、看见莲叶摇动，才知道浣女归来、渔舟下行——未见其人，先闻其声。"],
 gsc2:["🔔 夜半的钟声","唐代寺院有“半夜敲钟”的习惯，叫“无常钟”，张继听到的正是这种钟声。寒山寺始建于南朝，因唐代诗僧寒山曾住于此而得名——《枫桥夜泊》让它名扬天下，每年除夕还有成千上万人去听“新年钟声”。一声钟响，以声写静，把夜的静和人的愁都衬托出来了。"],
 gsc3:["✉️ 这首诗写给谁","《早春呈水部张十八员外》是韩愈写给好友张籍的：张籍排行十八，任水部员外郎，所以题目这么长。“润如酥”写小雨的细、滑、润；“草色遥看近却无”是全诗最绝的一句——远看有一片淡淡的绿，走近了却看不见。这是早春独有的景象，也只有真正蹲下来看过草的人写得出来。"],
 xue_before:[
  ["🖋️ 卡片一 · 作者峻青","峻青（1922—2019），原名孙俊卿，山东海阳人，当代作家，参加过抗日战争、解放战争，代表作《黎明的河边》《秋色赋》。他写景最爱写“光”和“色”——雪后的彩虹、玉屑似的雪末、映着阳光的银条，都像摄影师抓拍的画面。"],
  ["❄️ 卡片二 · 1962 年的那场雪","《第一场雪》写于 1962 年冬，地点是胶东半岛农村——峻青的故乡。当时我国连续几年遭受自然灾害，粮棉歉收，人们格外盼望丰收。所以这场雪在作者眼里不只是景，更是“希望”。"],
  ["🌾 卡片三 · 农谚里的智慧","“冬天麦盖三层被，来年枕着馒头睡”——“三层被”指几场大雪，“枕着馒头睡”是夸张说法，形容粮食多得吃不完。农谚是农民长期观察天气与庄稼关系的经验总结。课文引用它，把自然景象和丰收连了起来。"]],
 xu1:["🤫 “粉妆玉砌”与雪后的安静","“粉妆玉砌”是用白粉装饰、白玉砌成，形容雪后天地一片洁白。雪后为什么格外安静？新雪内部有很多空隙，能吸收声音——所以世界像被按了静音键，只剩踩雪的“咯吱”声。雪花本身是六角形的，因为水分子结冰时按六方晶格排列。"],
 xu2:["✨ 叠词：把雪写“活”的秘诀","毛茸茸、亮晶晶、蓬松松、沉甸甸、簌簌——课文一口气用了这么多叠词：摸得出质感、看得出光泽、听得到声音。你写雨、写风时也可以用：淅淅沥沥、滴滴答答、呼呼、嗖嗖。再配一点色彩（铅色、白、银、五光十色），雪就“活”了。"],
 xu3:["🌾 “瑞雪兆丰年”的科学根据","这不是迷信，有三条科学根据：①寒冬大雪能冻死一部分越冬的害虫；②雪水渗进土层深处，能供应庄稼生长的需要；③积雪像棉被盖住麦苗，保温防冻。所以及时的大雪预示来年丰收——课文由景及理，文章因此有了“厚度”。"],
 bailu7_before:[
  ["🖋️ 卡片一 · 作者郭沫若","郭沫若（1892—1978），四川乐山人，作家、诗人、历史学家，代表作《女神》《屈原》。早年写《女神》，诗句奔放如火山；1942 年写《白鹭》，却安静得像一幅水墨——同一位作家，两种风格。"],
  ["🕊️ 卡片二 · 一篇“散文诗”","《白鹭》写于 1942 年抗战时期，作者在重庆。文章写得安静、克制，在对白鹭的赞美里，藏着对平静美好生活的向往。它也是“散文诗”这种文体的代表作：有散文的自由句式，不分行、不押韵，却句句有诗的意境和节奏。"],
  ["🏞️ 卡片三 · 古诗里的白鹭","白鹭是中国古诗里的“常客”：“两个黄鹂鸣翠柳，一行白鹭上青天”（杜甫）、“西塞山前白鹭飞，桃花流水鳜鱼肥”（张志和）、“漠漠水田飞白鹭，阴阴夏木啭黄鹂”（王维）——白鹭几乎是中国田园诗的“标配”。"]],
 bl1:["⚖️ 对比衬托：白鹤、朱鹭、苍鹭","先拿白鹤、朱鹭、苍鹭来比：它们“太大”“太生硬”“太不寻常”。白鹭不大不小、不浓不淡，美在“刚刚好”——用别人的“过”，衬出白鹭的“适宜”。这叫对比衬托。白鹭属鹭科，比丹顶鹤小得多；它捕鱼时一动不动站很久，靠的是“等”，不是“追”。"],
 bl2:["📐 “增之一分”从哪里来","“增之一分则嫌长，减之一分则嫌短……”化用宋玉《登徒子好色赋》的句式，用排比加夸张把“适宜”写到极致：多一分少一分都不行。四个短语——雪白的蓑毛、流线型结构、铁色的长喙、青色的脚——像四笔速写，白鹭的精巧就这样“量”了出来。"],
 bl3:["🎵 白鹭会唱歌吗","“或许有人会感到美中不足，白鹭不会唱歌。但是白鹭本身不就是一首很优美的歌吗？——不，歌未免太铿锵了。”先承认“不足”，再翻上来赞美，再否定“歌”，最后落到“韵在骨子里的散文诗”——层层转折，把白鹭的美推向含蓄：不张扬、不喧闹，美在骨子里。"]
},

guoguan:{
 gushici3:function(L){return "<div class='tabpane' data-tab='guoguan'>"+
  "<div class='card' style='border:2px solid #D9C9A8'><h3>🎯 过关自测 · 古诗词三首</h3>"+
  "<p style='font-size:13px;color:var(--muted)'>5 道题检验本课掌握情况，单选每题 1 分，交卷后自动保存成绩。</p>"+
  "<div id='quizBox'></div></div></div>"}
 ,xue:function(L){return "<div class='tabpane' data-tab='guoguan'>"+
  "<div class='card' style='border:2px solid #D9C9A8'><h3>🎯 过关自测 · 第一场雪</h3>"+
  "<p style='font-size:13px;color:var(--muted)'>5 道题检验本课掌握情况，单选每题 1 分，交卷后自动保存成绩。</p>"+
  "<div id='quizBox'></div></div></div>"}
 ,bailu7:function(L){return "<div class='tabpane' data-tab='guoguan'>"+
  "<div class='card' style='border:2px solid #D9C9A8'><h3>🎯 过关自测 · 白鹭</h3>"+
  "<p style='font-size:13px;color:var(--muted)'>5 道题检验本课掌握情况，单选每题 1 分，交卷后自动保存成绩。</p>"+
  "<div id='quizBox'></div></div></div>"}
},

quizzes:{gushici3:QUIZ_GSC3,xue:QUIZ_XUE,bailu7:QUIZ_BAILU}
};
