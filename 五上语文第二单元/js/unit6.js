/* ============================================================
   2026 新版统编教材 · 五年级上册 第六单元（父母之爱）
   课文：17 慈母情深 / 18 父爱之舟 / 19* 航天员写给孩子的信
   口语交际：父母之爱 / 习作：我想对您说 / 语文园地：游子吟
   ============================================================ */
window.UNIT58 = window.UNIT58 || {};
/* —— 第六单元过关自测题库（每课 5 题，a 为正确选项索引）—— */
var QUIZ_CIMU=[
 {q:"1. 《慈母情深》的作者是？",opts:["梁晓声","吴冠中","孟郊"],a:0},
 {q:"2. “龟裂的手指”中“龟裂”的读音是？",opts:["guī liè","jūn liè","guì liè"],a:1},
 {q:"3. 四个“立刻”反复出现，有什么作用？",opts:["写母亲动作熟练、心情愉快","写出母亲争分夺秒、极度辛劳，反衬母爱无私","写车间里大家都手忙脚乱"],a:1},
 {q:"4. 母亲把“揉得皱皱的毛票”“塞”给“我”，说明什么？",opts:["母亲想赶快打发“我”走","母亲毫不犹豫地支持“我”读书","这些毛票不值钱"],a:1},
 {q:"5. “我鼻子一酸，攥着钱跑了出去”，原因是？",opts:["车间里的气味太刺鼻","第一次真正看见母亲的辛苦，又心疼又愧疚","发现买的书太贵了"],a:1}
];
var QUIZ_FUAI=[
 {q:"1. 《父爱之舟》全文的线索是？",opts:["一条弯弯的小河","姑爹的小渔船","一辆破旧的马车"],a:1},
 {q:"2. 课文围绕父亲写了多少个场景？",opts:["三件","五件","七件"],a:2},
 {q:"3. 逛庙会时，父亲和“我”各吃了什么？",opts:["给“我”买热豆腐脑，自己吃凉粽子","自己吃热豆腐脑，“我”吃凉粽子","两个人一起分一碗豆腐脑"],a:0},
 {q:"4. 结尾“醒来，枕边一片湿”好在哪里？",opts:["直接写出“我”很伤心","用细节含蓄表达对父亲的思念，照应开头写“梦”","说明睡觉出了很多汗"],a:1},
 {q:"5. 用平凡小事写出深沉父爱的写法叫？",opts:["以小见大","夸张对比","借景抒情"],a:0}
];
var QUIZ_HTY=[
 {q:"1. 这封信的作者是？",opts:["刘洋——中国首位进入太空的女航天员","陈冬","蔡旭哲"],a:0},
 {q:"2. 这封信写于何时、何地？",opts:["2022年6月1日 · 酒泉卫星发射中心问天阁","2012年6月 · 太空之中","2026年6月1日 · 北京"],a:0},
 {q:"3. “你们是妈妈的铠甲，也是妈妈的软肋”中“铠甲”比喻什么？",opts:["孩子给了妈妈勇气和力量","孩子是妈妈的负担","军人穿的防护服"],a:0},
 {q:"4. “临危忘身，受命忘家”表现了什么？",opts:["军人的职责与担当","妈妈不爱自己的孩子","太空生活很危险"],a:0},
 {q:"5. 结尾“等着妈妈拥抱完星辰大海再来拥抱你们”表达了什么？",opts:["完成任务就回家的深情与期待","妈妈再也不回来了","星辰大海非常美丽"],a:0}
];
UNIT58.u6 = {
unit:{
 key:"unit6", num:"第六单元", title:"舐犊情深，纸短情长", emoji:"💌",
 color:"var(--orange)", light:"var(--orange-l)",
 grad:"linear-gradient(135deg,#E8890C,#D9534F)",
 goal:"语文要素：体会作者描写的场景、细节中蕴含的感情；用恰当的语言表达自己的看法和感受",
 intro:"这个单元写的都是“父母之爱”，但没有一篇是喊口号的：母亲的爱藏在<b>震耳欲聋的缝纫车间</b>里，父亲的爱藏在<b>一只小渔船</b>上，航天员妈妈的爱藏在<b>一封出征前的信</b>里。读这个单元，要学会从<b>场景和细节</b>里“看见”感情。",
 chips:[
  {n:"🎬 场景",d:"一个场景就是一幅画：闷热的车间、拥挤的渔船、深夜的灯下——感情就藏在这些画面里。"},
  {n:"🔍 细节",d:"一个动作、一句话、一个眼神，往往比十句“我爱你”更有力量。"},
  {n:"🔁 反复",d:"同一个词反复出现（如四个“立刻”），是在给感情“加重音”。"},
  {n:"✉️ 书信体",d:"第二人称“你/你们”，像面对面说话，最容易把心里话说明白。"}
 ],
 lessons:[
  {key:"cimu",num:"第17课",title:"慈母情深",emoji:"🧵",color:"var(--red)",light:"var(--red-l)",
   desc:"一元五角钱，一位母亲，一间震耳欲聋的车间。",goal:"场景与细节：从环境中读出母爱",img:"images/u6_sewing.jpg",credit:"图：Pexels 免费图库（真实照片·老式缝纫机前的双手）"},
  {key:"fuai",num:"第18课",title:"父爱之舟",emoji:"🛶",color:"var(--teal)",light:"var(--teal-l)",
   desc:"一只小渔船，载着父亲沉默而深沉的爱。",goal:"以小见大：用平凡小事写深情",img:"images/u6_boat.jpg",credit:"图：Pexels 免费图库（真实照片·江南水乡的小船）"},
  {key:"hty",num:"第19课",title:"航天员写给孩子的信",emoji:"🚀",color:"var(--blue)",light:"var(--blue-l)",
   desc:"出征前夜，一位母亲写下的家书。",goal:"书信体：在取舍中读懂家国与亲情",img:"images/u6_rocket.jpg",credit:"图：Pexels 免费图库（真实照片·火箭发射升空）"},
  {key:"yuan6Di",num:"习作·园地",title:"我想对您说",emoji:"✍️",color:"var(--purple)",light:"var(--purple-l)",
   desc:"把平时说不出口的话，写成一封信。",goal:"习作：用书信体表达真情 + 日积月累《游子吟》",img:"images/u6_letter.jpg",credit:"图：Pexels 免费图库（真实照片·手写的信）",isWriting:true}
 ],
 table:[
  ["三篇课文","《慈母情深》在贫困与艰辛中写母爱；《父爱之舟》以一只小船串起父爱的点滴；《航天员写给孩子的信》在“小家”与“国家”的取舍中写母爱"],
  ["口语交际","父母之爱：能结合具体事例谈看法，学会换位思考、回应不同意见"],
  ["习作","我想对您说：用书信体，把最想说的话写具体，做到真情实感、细节支撑"],
  ["语文园地","交流平台总结“从场景和细节中体会感情”；日积月累背诵孟郊《游子吟》"],
  ["能力目标","能从场景、细节中体会情感；能写一封格式正确、感情真挚的书信"]
 ],
 sources:[
  "统编版（人民教育出版社）《语文》五年级上册 第六单元（2026年秋季新版）",
  "梁晓声《母亲》（《慈母情深》节选自该作品）",
  "吴冠中散文《父爱之舟》",
  "刘洋《航天员写给孩子的信》（2022年6月1日写于酒泉卫星发射中心问天阁）",
  "2026年秋季新版教材调整说明：本单元删去《“精彩极了”和“糟糕透了”》，新增《航天员写给孩子的信》；日积月累改为孟郊《游子吟》"
 ]},

jiangjie:{
 cimu:function(L){return "<div class='tabpane show' data-tab='jiangjie'>"+
  "<div class='card' style='background:linear-gradient(135deg,#FDF3E3,#FFFDF8)'><h3>🚩 本课学习任务流（从场景与细节里，读懂慈母情深）</h3>"+
  "<div class='taskflow'>"+
  "<div class='tflow' onclick='showPack(\"cimu\")'>📖<br>读前资料包<small>先看 3 张背景卡再读课文</small></div>"+
  "<div class='tflow' onclick='document.getElementById(\"cimu-src\").scrollIntoView({behavior:\"smooth\"})'>📚<br>读中查资料<small>读原文时点黄色标签</small></div>"+
  "<div class='tflow' onclick='openXilianbi(\"cimu\")'>✍️<br>小练笔<small>抓一个细节写母亲或父亲</small></div>"+
  "<div class='tflow' onclick='switchTab(\"guoguan\")'>🎯<br>过关自测<small>5 道题检验</small></div>"+
  "</div>"+
  "<div style='margin-top:10px;text-align:right'><button class='srcbtn' id='jjModeBtn' onclick='toggleJjMode()'>🔄 切换为：复习模式</button></div></div>"+
  "<div class='card' style='border:2px solid #D9C9A8'><h3>🧾 本课必背内容（考试就考这些，先逐项过关）</h3>"+
  "<table class='ovtable'>"+
  "<tr><td><b>✅ 故事主线</b></td><td>“我”想买长篇小说《青年近卫军》→ 到母亲做工的车间要钱 → 看见母亲在恶劣环境中辛苦工作 → 母亲毫不犹豫给钱 → “我”买了水果罐头 → 母亲数落后又凑钱给“我”买书。</td></tr>"+
  "<tr><td><b>✅ 必背细节</b></td><td>七八十台缝纫机“震耳欲聋”；酷暑、闷热、口罩；母亲<b>龟裂</b>的手指；四个“<b>立刻</b>”；“我<b>鼻子一酸</b>”；“<b>攥</b>着钱跑了出去”。</td></tr>"+
  "<tr><td><b>✅ 必背中心</b></td><td>通过“我”向母亲要钱买书的经历，歌颂母亲<b>无私、深沉的爱</b>，表达“我”对母亲的<b>感激、敬爱</b>，以及用成长回报母亲的决心。</td></tr>"+
  "<tr><td><b>✅ 题目理解</b></td><td>“慈母情深”的“深”体现在：①家境贫困仍支持“我”读书；②工作艰辛却毫不犹豫给钱；③被“我”买罐头气到，仍再凑钱买书。</td></tr>"+
  "</table></div>"+
  "<div class='card'><h3>🎯 精读段落速查（先抓这几段！）</h3>"+
  "<table class='ovtable'><thead><tr><th style='width:160px'>段落</th><th>写了什么</th><th style='width:150px'>常考怎么考</th></tr></thead>"+
  "<tr><td><b>⭐ 车间环境</b></td><td>“七八十台破缝纫机一行行排列着，七八十个都不算年轻的女人忙碌在自己的缝纫机旁……震耳欲聋。”</td><td>环境描写的作用</td></tr>"+
  "<tr><td><b>⭐ 母亲的外貌</b></td><td>“极其瘦弱的脊背弯曲着，头凑到缝纫机板上”“龟裂的手指”——一个“凑”字写出专注与辛劳。</td><td>细节描写、人物形象</td></tr>"+
  "<tr><td><b>⭐ 四个“立刻”</b></td><td>“立刻又坐了下去，立刻又弯曲了背，立刻又将头俯在缝纫机板上了，立刻又陷入了忙碌。”</td><td>反复的作用、人物品质</td></tr>"+
  "<tr><td><b>⭐ 给钱</b></td><td>母亲“掏出一卷揉得皱皱的毛票，用龟裂的手指数着”，同事劝阻，母亲却“塞”给“我”。</td><td>动作描写、对比</td></tr>"+
  "<tr><td><b>⭐ “鼻子一酸”</b></td><td>“我”第一次发现母亲如此瘦小、如此辛苦，心里又疼又愧。</td><td>心理描写、情感变化</td></tr></table></div>"+
  "<div class='card'><h3>🖼️ 看图走近母亲的车间</h3>"+
  "<figure class='pic'><img src='images/u6_sewing2.jpg' alt='缝纫机上的双手'><figcaption>缝纫机上的双手。想象一下：七八十台这样的机器一起响，是什么声音、什么味道、多闷热？ <span class='picsrc'>图源：Pexels 免费图库（真实照片）</span></figcaption></figure><p style='font-size:14px;color:var(--muted)'>把图片里的细节“搬”进课文——母亲就坐在这声音和闷热里，一坐就是一整天。</p></div>"+
  "<div class='card'><h3>📄 关键语句摘录（对照精讲用）</h3>"+
  "<p style='margin:8px 0'><b>环境：</b>“我穿过一排排缝纫机，走到那个角落，看见一个极其瘦弱的脊背弯曲着，头凑到缝纫机板上。周围几只灯泡烤着我的脸。”</p>"+
  "<p style='margin:8px 0'><b>反复：</b>“母亲说完，立刻又坐了下去，立刻又弯曲了背，立刻又将头俯在缝纫机板上了，立刻又陷入了忙碌。”</p>"+
  "<p style='margin:8px 0'><b>给钱：</b>“母亲掏衣兜，掏出一卷揉得皱皱的毛票，用龟裂的手指数着。……母亲却已将钱塞在我手心里了，大声对那个女人说：‘我挺高兴他爱看书的！’”</p>"+
  "<p style='margin:8px 0'><b>结尾：</b>“那天，我用那一元五角钱给母亲买了一听水果罐头。……母亲说完，又给我凑足了买《青年近卫军》的钱。我想，我没有权利用那钱再买任何别的东西，无论为我自己还是为母亲。”</p></div>"+
  "<div class='card'><h3>📖 逐段精讲：母爱藏在三个“镜头”里</h3>"+
  "<div class='timeline'>"+
  "<div class='tl'><b>镜头一 · 走进车间（环境）</b><br>“震耳欲聋”写声音，“酷暑”“闷热”写温度，“七八十台破缝纫机”写拥挤。环境越恶劣，母亲越辛苦，母爱就越重——这叫<b>环境烘托</b>。</div>"+
  "<div class='tl'><b>镜头二 · 看见母亲（细节）</b><br>“极其瘦弱的脊背弯曲着”“头凑到缝纫机板上”“龟裂的手指”。“凑”是不敢直腰，“龟裂”是长期劳作。没有一个“爱”字，却处处让人心疼。</div>"+
  "<div class='tl'><b>镜头三 · 给钱买书（对比）</b><br>同事劝阻：“你供他们吃，供他们穿，供他们上学，还供他们看闲书哇！”母亲却“塞”钱过来：“我挺高兴他爱看书的！”——别人的不理解，反衬出母亲的远见与深情。</div>"+
  "<div class='tl'><b>四个“立刻”（反复）</b><br>给完钱，母亲没有片刻停留，立刻回到缝纫机前。四个“立刻”像四个快镜头，写出她连喘口气的时间都舍不得——钱来得太不容易，爱却给得太干脆。</div>"+
  "<div class='tl'><b>“鼻子一酸”与“攥”（心理 + 动作）</b><br>“我”第一次真正“看见”母亲：瘦小、疲惫、手指龟裂。于是“鼻子一酸”，“攥”着钱跑出去——这一个“攥”字，攥住的是心疼、愧疚和决心。</div>"+
  "<div class='tl'><b>结尾 · 成长</b><br>“我”用钱买了罐头，母亲数落之后又凑钱买书。最后一句“我没有权利用那钱再买任何别的东西”——“我”懂事了，母爱结出了果。</div>"+
  "</div></div>"+
  "<div class='card'><h3>✍️ 写法借鉴：不喊“爱”，却让人落泪</h3>"+
  "<table class='ovtable'><thead><tr><th style='width:120px'>写法</th><th>课文怎么用</th><th style='width:190px'>你的作文怎么用</th></tr></thead>"+
  "<tr><td><b>环境烘托</b></td><td>震耳欲聋、闷热、拥挤的车间</td><td>写父母辛苦，先写他们的工作环境（噪音、高温、油烟）</td></tr>"+
  "<tr><td><b>细节放大</b></td><td>龟裂的手指、揉皱的毛票、弯曲的脊背</td><td>写一个“小得不能再小”的细节，别写“他很辛苦”</td></tr>"+
  "<tr><td><b>反复</b></td><td>四个“立刻”</td><td>写一个人忙碌，可以连用三个“又”或“还在”</td></tr>"+
  "<tr><td><b>对比反衬</b></td><td>同事劝阻 vs 母亲支持</td><td>用别人的话，反衬你要写的人</td></tr></table>"+
  "<div class='tipbox exam'>📝 <b>答题公式（环境描写作用）：</b>交代……的环境 + 表现人物……的处境/品质 + 烘托……的情感 + 推动情节。</div></div>"+
  "<div class='card'><h3>📚 课后习题·参考答案</h3>"+
  "<div class='acc open' onclick='this.classList.toggle(\"open\")'><button class='head'><span class='idx'>题1</span>课文写了母亲的哪些事？哪件事最让你感动？<span class='arrow'>▸</span></button><div class='body'>✅ <b>参考答案：</b>写了“我”到车间要钱、母亲给钱、“我”买罐头、母亲再凑钱四件事。最感动的是母亲在震耳欲聋的车间里辛苦工作，却毫不犹豫把揉皱的毛票塞给“我”买书——她自己舍不得花一分钱，却舍得为“我”的成长花钱。</div></div>"+
  "<div class='acc' onclick='this.classList.toggle(\"open\")'><button class='head'><span class='idx'>题2</span>“立刻”反复出现四次，有什么表达效果？<span class='arrow'>▸</span></button><div class='body'>✅ <b>参考答案：</b>四个“立刻”构成反复，写出母亲给完钱后马上投入工作的连续动作，表现她<b>争分夺秒、极度辛劳</b>；也说明这一元五角钱来之不易，反衬母爱的深沉与无私；节奏急促，读来令人心疼。</div></div>"+
  "<div class='acc' onclick='this.classList.toggle(\"open\")'><button class='head'><span class='idx'>题3</span>“我鼻子一酸，攥着钱跑了出去……”此时“我”在想什么？<span class='arrow'>▸</span></button><div class='body'>✅ <b>参考答案：</b>示例：“原来母亲每天就是在这样的地方、这样的声音里干活，她的手都裂成这样了……这一元五角钱，是她熬了多少个日夜换来的。我怎么能拿它去买闲书呢？”——心疼、愧疚、感激交织。</div></div></div>"+
  "<div class='card'><h3>👤 作者与背景：梁晓声与《母亲》</h3>"+
  "<div class='kv'><div><b>👤 作者</b><br>梁晓声，1949年生于黑龙江哈尔滨，当代作家，代表作《今夜有暴风雪》《人世间》。他多次写自己的母亲，说母亲是他“文学的第一位老师”。</div>"+
  "<div><b>🖋️ 背景</b><br>《慈母情深》节选自梁晓声的散文《母亲》，写的是上世纪六十年代初的事。那时物资匮乏，一元五角钱对一个工人家庭来说不是小数目——这也是“我”要钱时“犹豫”的原因。</div></div>"+
  "<div class='tipbox story'>📖 梁晓声回忆，母亲在街道小厂做工，车间里几十台缝纫机同时响，“像下暴雨”。他第一次去车间找母亲，被那声音震住了——课文里“震耳欲聋”四个字，就是他真实的记忆。</div>"+
  "<div class='tipbox tip'>⚡ <b>本课阅读提醒：</b>读的时候圈出所有“动词”和“数字”，你会发现母爱不是抽象的，它长在“凑、塞、掏、攥”这些动作里。</div></div>"+
  "<div class='card'><h3>🎯 考点导航 · 先看考什么，再去深入</h3>"+
  "<p style='font-size:13px;color:var(--muted)'>这张表不再重复讲解——只回答两件事：考试考什么题型？想深入时点右侧按钮直达对应精讲。</p>"+
  "<table class='ovtable'><thead><tr><th style='width:132px'>重点内容</th><th>常考怎么考</th><th style='width:86px'>直达</th></tr></thead>"+
  "<tr><td><b>⭐ 车间场景</b></td><td><b>环境描写的作用</b>：交代背景 + 表现母亲艰辛 + 烘托母爱 + 推动情节（“我”因此“鼻子一酸”）</td><td><button class='srcbtn' onclick='jumpJj(\"cimu-tl-1\")'>看精讲</button></td></tr>"+
  "<tr><td><b>⭐ 四个“立刻”</b></td><td><b>反复的作用</b>：写出争分夺秒、极度辛劳，反衬母爱无私；也考“坐、弯、俯、陷”动词链</td><td><button class='srcbtn' onclick='jumpJj(\"cimu-tl-2\")'>看精讲</button></td></tr>"+
  "<tr><td><b>⭐ 给钱细节</b></td><td><b>动作细节赏析</b>：掏、数、塞、攥——细节里读出无私与深情，常连考“鼻子一酸”的心理变化</td><td><button class='srcbtn' onclick='jumpJj(\"cimu-tl-3\")'>看精讲</button></td></tr>"+
  "</table></div>"+
  "<div class='card' id='cimu-src'><h3>📄 课文原文 · 节选（直读版）</h3>"+
  "<div class='readtext'>"+
  "<p style='margin:8px 0;padding:10px 14px;background:rgba(255,248,239,.6);border-radius:12px;line-height:2'>我穿过一排排缝纫机，走到那个角落，看见一个极其瘦弱的脊背弯曲着，头凑到缝纫机板上。周围几只灯泡烤着我的脸。</p>"+
  "<button class='srcbtn' onclick='showCard(\"cimu1\")'>📚 查资料 · 震耳欲聋的车间</button>"+
  "<p style='margin:8px 0;padding:10px 14px;background:rgba(255,248,239,.6);border-radius:12px;line-height:2'>母亲说完，立刻又坐了下去，立刻又弯曲了背，立刻又将头俯在缝纫机板上了，立刻又陷入了忙碌。</p>"+
  "<button class='srcbtn' onclick='showCard(\"cimu2\")'>📚 查资料 · 四个“立刻”</button>"+
  "<p style='margin:8px 0;padding:10px 14px;background:rgba(255,248,239,.6);border-radius:12px;line-height:2'>母亲掏衣兜，掏出一卷揉得皱皱的毛票，用龟裂的手指数着。……母亲却已将钱塞在我手心里了，大声对那个女人说：‘我挺高兴他爱看书的！’</p>"+
  "<button class='srcbtn' onclick='showCard(\"cimu3\")'>📚 查资料 · 揉皱的毛票与龟裂的手指</button>"+
  "<p style='margin:8px 0;padding:10px 14px;background:rgba(255,248,239,.6);border-radius:12px;line-height:2'>那天，我用那一元五角钱给母亲买了一听水果罐头。……母亲说完，又给我凑足了买《青年近卫军》的钱。我想，我没有权利用那钱再买任何别的东西，无论为我自己还是为母亲。</p>"+
  "<p style='margin:10px 0 0;font-size:12.5px;color:var(--muted)'>——课文关键语句节选，段落顺序与课文一致；完整原文请对照课本朗读。</p>"+
  "</div></div>"+
  "<div class='card'><h3>🔍 精读深挖：场景、细节里的母爱</h3>"+
  "<div class='timeline'>"+
  "<div class='tl' id='cimu-tl-1'><b>⭐ 场景描写 · 震耳欲聋的车间</b>"+
  "<div class='jl-yuan'><span class='jl-lab'>原句</span>我穿过一排排缝纫机，走到那个角落，看见一个极其瘦弱的脊背弯曲着，头凑到缝纫机板上。周围几只灯泡烤着我的脸。</div>"+
  "<div class='jl-ask'>❓ 先想一想：作者为什么先写声音、温度和人数，再写母亲？</div>"+
  "<ul class='jl-ju'><li><b>“七八十台”与“震耳欲聋”</b>——先给耳朵一击：母亲每天就在这样的噪音里干活。</li>"+
  "<li><b>“灯泡烤着我的脸”</b>——再给皮肤一击：酷暑、闷热，环境越恶劣，母亲越辛苦。</li>"+
  "<li><b>环境烘托</b>——场景写得越苦，后面母亲毫不犹豫给钱就越动人。</li></ul>"+
  "<div class='jl-take'>💡 一句话：先写场景，再写人——环境越苦，母爱越重。</div>"+
  "<div class='jl-kao'>📝 考法：<b>环境描写的作用</b>——交代背景 + 表现人物处境 + 烘托情感 + 推动情节。</div></div>"+
  "<div class='tl' id='cimu-tl-2'><b>⭐ 反复 · 四个“立刻”</b>"+
  "<div class='jl-yuan'><span class='jl-lab'>原句</span>母亲说完，立刻又坐了下去，立刻又弯曲了背，立刻又将头俯在缝纫机板上了，立刻又陷入了忙碌。</div>"+
  "<div class='jl-ask'>❓ 先想一想：为什么连用四个“立刻”，只用一个不行吗？</div>"+
  "<ul class='jl-ju'><li><b>像四个快镜头</b>——坐、弯、俯、陷，动作一个接一个，连喘口气的时间都没有。</li>"+
  "<li><b>反复＝加重音</b>——强调母亲争分夺秒：这一元五角钱是一针一线熬出来的。</li>"+
  "<li><b>节奏急促</b>——读起来让人心疼，母爱的分量全在这个节奏里。</li></ul>"+
  "<div class='jl-take'>💡 一句话：钱来之不易，爱给得干脆——四个“立刻”两头都写到了。</div>"+
  "<div class='jl-kao'>📝 考法：<b>反复的作用</b>——写出连续动作、表现极度辛劳、反衬母爱无私。</div></div>"+
  "<div class='tl' id='cimu-tl-3'><b>⭐ 细节描写 · 皱皱的毛票与龟裂的手指</b>"+
  "<div class='jl-yuan'><span class='jl-lab'>原句</span>母亲掏衣兜，掏出一卷揉得皱皱的毛票，用龟裂的手指数着。……母亲却已将钱塞在我手心里了，大声对那个女人说：‘我挺高兴他爱看书的！’</div>"+
  "<div class='jl-ask'>❓ 先想一想：“皱皱的”“龟裂的”“塞”这三个细节，分别藏着什么？</div>"+
  "<ul class='jl-ju'><li><b>揉得皱皱的毛票</b>——零钱小而旧，是被一张张攒出来、捏过无数遍的。</li>"+
  "<li><b>龟裂的手指</b>——长期劳作的印记；用这样的手“数着”钱，数的是艰辛。</li>"+
  "<li><b>一个“塞”字</b>——毫不犹豫、生怕“我”反悔；同同事的劝阻形成对比，母亲的远见与深情就立起来了。</li></ul>"+
  "<div class='jl-take'>💡 一句话：不写一个“爱”字，爱全在“掏、数、塞”三个动作里。</div>"+
  "<div class='jl-kao'>📝 考法：<b>动作/细节描写赏析</b>——点出动作 + 分析处境 + 落到情感（无私、深沉）。</div></div>"+
  "</div></div>"+
  "<div class='card'><h3>✍️ 小练笔：抓一个细节写“我的母亲/父亲”</h3>"+
  "<p style='font-size:13.5px;color:var(--muted)'>像梁晓声那样，不喊“爱”，只抓一个细节：一个动作（塞、攥、掖、擦），或一句口头禅，写 50~100 字，让读到的人自己心里一酸。</p>"+
  "<textarea id='xilianbi-cimu' class='xltextarea' rows='4' placeholder='写在这里，点保存会自动记住…'></textarea>"+
  "<div style='margin-top:8px;display:flex;gap:10px;align-items:center'><button class='tflow' style='max-width:180px' onclick='saveXilianbi(\"cimu\")'>💾 保存</button><span id='xlsave-cimu' style='font-size:12.5px;color:#3C9E5C;font-weight:700'></span></div></div>"+
  "</div>";},

 fuai:function(L){return "<div class='tabpane show' data-tab='jiangjie'>"+
  "<div class='card' style='background:linear-gradient(135deg,#FDF3E3,#FFFDF8)'><h3>🚩 本课学习任务流（从平凡小事里，读出深沉父爱）</h3>"+
  "<div class='taskflow'>"+
  "<div class='tflow' onclick='showPack(\"fuai\")'>📖<br>读前资料包<small>先看 3 张背景卡再读课文</small></div>"+
  "<div class='tflow' onclick='document.getElementById(\"fuai-src\").scrollIntoView({behavior:\"smooth\"})'>📚<br>读中查资料<small>读原文时点黄色标签</small></div>"+
  "<div class='tflow' onclick='openXilianbi(\"fuai\")'>✍️<br>小练笔<small>写一个“第一次”里藏着的爱</small></div>"+
  "<div class='tflow' onclick='switchTab(\"guoguan\")'>🎯<br>过关自测<small>5 道题检验</small></div>"+
  "</div>"+
  "<div style='margin-top:10px;text-align:right'><button class='srcbtn' id='jjModeBtn' onclick='toggleJjMode()'>🔄 切换为：复习模式</button></div></div>"+
  "<div class='card' style='border:2px solid #D9C9A8'><h3>🧾 本课必背内容（考试就考这些，先逐项过关）</h3>"+
  "<table class='ovtable'>"+
  "<tr><td><b>✅ 线索</b></td><td><b>姑爹的小渔船</b>——全文以“舟”为线索，串起父亲为“我”做的件件小事。“舟”既是交通工具，也是父爱的象征。</td></tr>"+
  "<tr><td><b>✅ 七个场景</b></td><td>①卖茧子给“我”买枇杷 ②住客栈被臭虫咬，父亲想换房 ③逛庙会给“我”买热豆腐脑 ④雨雪天背“我”上学 ⑤为“我”凑学费 ⑥摇船送“我”报考、上学 ⑦在船上为“我”缝补棉被。</td></tr>"+
  "<tr><td><b>✅ 必背结尾</b></td><td>“醒来，枕边一片湿。”——梦醒后泪水打湿枕头，含蓄写出对父亲深深的怀念。</td></tr>"+
  "<tr><td><b>✅ 必背中心</b></td><td>通过回忆父亲为“我”做的平凡小事，表现<b>父爱深沉、朴实、无言</b>，表达对父亲的<b>感激与怀念</b>。</td></tr>"+
  "</table></div>"+
  "<div class='card'><h3>🎯 场景速查表（考试常考“概括场景”）</h3>"+
  "<table class='ovtable'><thead><tr><th style='width:150px'>场景</th><th>关键细节</th><th style='width:130px'>表现了什么</th></tr></thead>"+
  "<tr><td><b>卖茧买枇杷</b></td><td>父亲卖茧子，给“我”买枇杷吃</td><td>宁可自己省，也要让孩子尝甜</td></tr>"+
  "<tr><td><b>客栈换房</b></td><td>“我”被臭虫咬，父亲想加钱换好房间</td><td>心疼孩子，哪怕多花钱</td></tr>"+
  "<tr><td><b>庙会豆腐脑</b></td><td>父亲给“我”买热豆腐脑，自己吃凉粽子</td><td>把好的都留给孩子</td></tr>"+
  "<tr><td><b>雨雪背上学</b></td><td>父亲背“我”过泥泞的路</td><td>再苦再累也要供孩子读书</td></tr>"+
  "<tr><td><b>凑学费</b></td><td>父亲东拼西凑，把钱“汗津津”地递给“我”</td><td>读书是全家的希望</td></tr>"+
  "<tr><td><b>摇船送考</b></td><td>父亲摇船送“我”去报考、上学</td><td>默默支持，从不言苦</td></tr>"+
  "<tr><td><b>船上缝被</b></td><td>父亲在船上为“我”缝补棉被</td><td>粗手做细活，爱在针脚里</td></tr></table></div>"+
  "<div class='card'><h3>🖼️ 看图找“舟”：父亲的船</h3>"+
  "<figure class='pic'><img src='images/u6_boat2.jpg' alt='江南水乡摇橹的小木船'><figcaption>江南水乡摇橹的小木船。父亲就是摇着这样的小船，送“我”上学、报考，在船上为“我”缝补棉被。 <span class='picsrc'>图源：Pexels 免费图库（真实照片）</span></figcaption></figure><p style='font-size:14px;color:var(--muted)'>一只小船，载着生计，也载着孩子的未来——这就是题目里“父爱之舟”的分量。</p></div>"+
  "<div class='card'><h3>📄 关键语句摘录（对照精讲用）</h3>"+
  "<p style='margin:8px 0'><b>点题：</b>“我什么时候能够再看到我儿时的梦呢？……醒来，枕边一片湿。”</p>"+
  "<p style='margin:8px 0'><b>细节：</b>“父亲送我到学校，替我铺好床，他回家时，我偷偷哭了。这是我第一次真正心酸的哭，与在家里撒娇的哭、发脾气的哭、打架的哭都大不一样。”</p>"+
  "<p style='margin:8px 0'><b>线索：</b>“父亲和我都坐在这只小船上……船上载着我们的希望。”</p></div>"+
  "<div class='card'><h3>📖 逐层精讲：为什么用“舟”作题</h3>"+
  "<div class='timeline'>"+
  "<div class='tl'><b>开头 · 梦</b><br>文章从“梦”写起，梦里有父亲、有小船。梦是回忆的入口，也是情感的出口——首尾都写梦，结构完整。</div>"+
  "<div class='tl'><b>中间 · 七件小事</b><br>没有惊天动地的大事，全是吃、住、行、学的小事。正因为小，才真实；正因为天天发生，才容易被忽略。作者把它们一件件拾起来，父爱就有了形状。</div>"+
  "<div class='tl'><b>详略 · 有轻有重</b><br>“逛庙会”“雨雪背上学”“船上缝被”写得细，其他场景一笔带过。详略得当，文章才不流水账。</div>"+
  "<div class='tl'><b>线索 · 小舟</b><br>小船贯穿全文：父亲摇船送“我”上学、送“我”报考、在船上缝被子。船是贫穷家境的写照，也是父亲托举“我”走出乡村的“舟”。</div>"+
  "<div class='tl'><b>结尾 · 枕边一片湿</b><br>不说“我想念父亲”，只说醒来枕头湿了。含蓄，却比直说更动人——这是“以景结情”“以细节收束”的高手写法。</div>"+
  "</div></div>"+
  "<div class='card'><h3>✍️ 写法借鉴：以小见大，以舟载情</h3>"+
  "<table class='ovtable'><thead><tr><th style='width:120px'>写法</th><th>课文怎么用</th><th style='width:190px'>你的作文怎么用</th></tr></thead>"+
  "<tr><td><b>以小见大</b></td><td>七个生活小事，写出深沉父爱</td><td>写“爸爸的电动车”“妈妈的旧围裙”，从一件物品切入</td></tr>"+
  "<tr><td><b>一线串珠</b></td><td>小舟串起所有场景</td><td>用一个物品/地点作线索，把几件事串起来</td></tr>"+
  "<tr><td><b>详略结合</b></td><td>庙会、背上学、缝被详写</td><td>挑两件最动人的详写，其余一句带过</td></tr>"+
  "<tr><td><b>含蓄收尾</b></td><td>“醒来，枕边一片湿”</td><td>用动作、景物收尾，别直接写“我很感动”</td></tr></table></div>"+
  "<div class='card'><h3>📚 课后习题·参考答案</h3>"+
  "<div class='acc open' onclick='this.classList.toggle(\"open\")'><button class='head'><span class='idx'>题1</span>课文写了父亲的哪些事？哪些写得详细？<span class='arrow'>▸</span></button><div class='body'>✅ <b>参考答案：</b>写了卖茧买枇杷、客栈换房、庙会买豆腐脑、雨雪背上学、凑学费、摇船送考、船上缝被七件事。详写的是逛庙会、雨雪背上学、船上缝被，因为这些事最能体现父爱的细腻与深沉。</div></div>"+
  "<div class='acc' onclick='this.classList.toggle(\"open\")'><button class='head'><span class='idx'>题2</span>为什么以“父爱之舟”为题？<span class='arrow'>▸</span></button><div class='body'>✅ <b>参考答案：</b>①“舟”是全文线索，串起父亲送“我”上学、报考等场景；②小船象征父亲，默默承载、托举“我”前行；③以“舟”喻父爱，含蓄形象，点明中心。</div></div>"+
  "<div class='acc' onclick='this.classList.toggle(\"open\")'><button class='head'><span class='idx'>题3</span>结尾“醒来，枕边一片湿”好在哪里？<span class='arrow'>▸</span></button><div class='body'>✅ <b>参考答案：</b>不直接抒情，用“枕边一片湿”这一细节写出梦醒后流泪，含蓄地表达对父亲深深的思念与感激；照应开头的“梦”，首尾呼应，余味悠长。</div></div></div>"+
  "<div class='card'><h3>👤 作者与背景：画家吴冠中</h3>"+
  "<div class='kv'><div><b>👤 作者</b><br>吴冠中（1919—2010），江苏宜兴人，著名画家、美术教育家，也是散文家。他画江南水乡，也写江南水乡——文字里常常带着画面的光影。</div>"+
  "<div><b>🖋️ 背景</b><br>吴冠中出身农家，父亲靠卖茧、种田供他读书。他后来回忆：父亲“不识字，却懂得读书的重要”。这篇散文写于晚年，是回忆，也是致敬。</div></div>"+
  "<div class='tipbox story'>📖 吴冠中笔下的江南，总是白墙黑瓦、小桥流水。读《父爱之舟》时留意那些“颜色”和“光线”——这是画家的眼睛在写作。</div>"+
  "<div class='tipbox tip'>⚡ <b>本课阅读提醒：</b>把七件事列成一张表，横着看是“事”，竖着看是“爱”——父爱就藏在“吃、住、行、学”这些最普通的地方。</div></div>"+
  "<div class='card'><h3>🎯 考点导航 · 先看考什么，再去深入</h3>"+
  "<p style='font-size:13px;color:var(--muted)'>这张表不再重复讲解——只回答两件事：考试考什么题型？想深入时点右侧按钮直达对应精讲。</p>"+
  "<table class='ovtable'><thead><tr><th style='width:132px'>重点内容</th><th>常考怎么考</th><th style='width:86px'>直达</th></tr></thead>"+
  "<tr><td><b>⭐ 小渔船线索</b></td><td><b>线索的作用</b>：串起七个场景，象征父亲默默承载；常考“为什么以‘父爱之舟’为题”</td><td><button class='srcbtn' onclick='jumpJj(\"fuai-tl-1\")'>看精讲</button></td></tr>"+
  "<tr><td><b>⭐ 七个场景</b></td><td><b>概括场景 + 以小见大</b>：卖茧买枇杷、庙会豆腐脑、雨雪背上学、船上缝被……小事写深情</td><td><button class='srcbtn' onclick='jumpJj(\"fuai-tl-2\")'>看精讲</button></td></tr>"+
  "<tr><td><b>⭐ “枕边一片湿”</b></td><td><b>含蓄结尾赏析</b>：用细节写流泪，照应开头写“梦”，首尾呼应</td><td><button class='srcbtn' onclick='jumpJj(\"fuai-tl-3\")'>看精讲</button></td></tr>"+
  "</table></div>"+
  "<div class='card' id='fuai-src'><h3>📄 课文原文 · 节选（直读版）</h3>"+
  "<div class='readtext'>"+
  "<p style='margin:8px 0;padding:10px 14px;background:rgba(255,248,239,.6);border-radius:12px;line-height:2'>父亲和我都坐在这只小船上……船上载着我们的希望。</p>"+
  "<button class='srcbtn' onclick='showCard(\"fuai1\")'>📚 查资料 · 姑爹的小渔船</button>"+
  "<p style='margin:8px 0;padding:10px 14px;background:rgba(255,248,239,.6);border-radius:12px;line-height:2'>父亲送我到学校，替我铺好床，他回家时，我偷偷哭了。这是我第一次真正心酸的哭，与在家里撒娇的哭、发脾气的哭、打架的哭都大不一样。</p>"+
  "<button class='srcbtn' onclick='showCard(\"fuai2\")'>📚 查资料 · 第一次“心酸的哭”</button>"+
  "<p style='margin:8px 0;padding:10px 14px;background:rgba(255,248,239,.6);border-radius:12px;line-height:2'>我什么时候能够再看到我儿时的梦呢？……醒来，枕边一片湿。</p>"+
  "<button class='srcbtn' onclick='showCard(\"fuai3\")'>📚 查资料 · “枕边一片湿”的含蓄</button>"+
  "<p style='margin:10px 0 0;font-size:12.5px;color:var(--muted)'>——课文关键语句节选，顺序与课文一致；完整原文请对照课本朗读。</p>"+
  "</div></div>"+
  "<div class='card'><h3>🔍 精读深挖：一只小舟，载起全部父爱</h3>"+
  "<div class='timeline'>"+
  "<div class='tl' id='fuai-tl-1'><b>⭐ 线索 · 以舟载情</b>"+
  "<div class='jl-yuan'><span class='jl-lab'>原句</span>父亲和我都坐在这只小船上……船上载着我们的希望。</div>"+
  "<div class='jl-ask'>❓ 先想一想：小船在文中出现了多少次？它运过什么、送过谁？</div>"+
  "<ul class='jl-ju'><li><b>一线串珠</b>——摇船送“我”上学、送“我”报考、在船上缝棉被，小船把零散的小事串成一条线。</li>"+
  "<li><b>象征父亲</b>——小船默默承载一家人的生计，也默默托举“我”走出乡村。</li>"+
  "<li><b>点题</b>——“父爱之舟”的“舟”既是交通工具，更是父爱的象征。</li></ul>"+
  "<div class='jl-take'>💡 一句话：船载着生计，也载着孩子的未来——这就是题目的分量。</div>"+
  "<div class='jl-kao'>📝 考法：<b>线索题</b>——找反复出现的事物 + 答三步作用（串材料、象征人物、点题深化）。</div></div>"+
  "<div class='tl' id='fuai-tl-2'><b>⭐ 心理细节 · 第一次“心酸的哭”</b>"+
  "<div class='jl-yuan'><span class='jl-lab'>原句</span>这是我第一次真正心酸的哭，与在家里撒娇的哭、发脾气的哭、打架的哭都大不一样。</div>"+
  "<div class='jl-ask'>❓ 先想一想：同样是哭，为什么这次“大不一样”？</div>"+
  "<ul class='jl-ju'><li><b>三种哭作陪衬</b>——撒娇、发脾气、打架的哭都是“要”的哭；这次是“懂”的哭。</li>"+
  "<li><b>一个“第一次”</b>——孩子第一次体会到父亲谋生的艰难和爱得深沉，这是成长的标志。</li>"+
  "<li><b>以小见大</b>——替“我”铺好床这样一个平凡动作，胜过千言万语。</li></ul>"+
  "<div class='jl-take'>💡 一句话：小事写透，感情自现——父爱藏在“铺床”这样的细节里。</div>"+
  "<div class='jl-kao'>📝 考法：<b>场景概括 + 以小见大</b>——先概括七件事，再答“小事为何动人”（真实、日常、反差）。</div></div>"+
  "<div class='tl' id='fuai-tl-3'><b>⭐ 含蓄收尾 · “醒来，枕边一片湿”</b>"+
  "<div class='jl-yuan'><span class='jl-lab'>原句</span>我什么时候能够再看到我儿时的梦呢？……醒来，枕边一片湿。</div>"+
  "<div class='jl-ask'>❓ 先想一想：作者为什么不直接写“我很想念父亲”？</div>"+
  "<ul class='jl-ju'><li><b>细节代替抒情</b>——不说想念，只写枕头湿了；泪水自己会说话。</li>"+
  "<li><b>首尾呼应</b>——开头从“梦”写起，结尾从梦中醒来，结构完整。</li>"+
  "<li><b>留白</b>——话说一半，余味更长，这是“以细节收束”的高手写法。</li></ul>"+
  "<div class='jl-take'>💡 一句话：不说“我想你”，只说“枕边一片湿”——含蓄，却更动人。</div>"+
  "<div class='jl-kao'>📝 考法：<b>结尾赏析</b>——细节含蓄 + 首尾呼应 + 表达对父亲深深的怀念与感激。</div></div>"+
  "</div></div>"+
  "<div class='card'><h3>✍️ 小练笔：写一个“第一次”里藏着的爱</h3>"+
  "<p style='font-size:13.5px;color:var(--muted)'>像吴冠中那样，写你的一个“第一次”：第一次独自回家、第一次发现爸爸变老了、第一次给妈妈做饭……用动作和细节收尾，别直接说“我很感动”。写 50~100 字。</p>"+
  "<textarea id='xilianbi-fuai' class='xltextarea' rows='4' placeholder='写在这里，点保存会自动记住…'></textarea>"+
  "<div style='margin-top:8px;display:flex;gap:10px;align-items:center'><button class='tflow' style='max-width:180px' onclick='saveXilianbi(\"fuai\")'>💾 保存</button><span id='xlsave-fuai' style='font-size:12.5px;color:#3C9E5C;font-weight:700'></span></div></div>"+
  "</div>";},

 hty:function(L){return "<div class='tabpane show' data-tab='jiangjie'>"+
  "<div class='card' style='background:linear-gradient(135deg,#FDF3E3,#FFFDF8)'><h3>🚩 本课学习任务流（从一封家书里，读懂铠甲与软肋）</h3>"+
  "<div class='taskflow'>"+
  "<div class='tflow' onclick='showPack(\"hty\")'>📖<br>读前资料包<small>先看 3 张背景卡再读课文</small></div>"+
  "<div class='tflow' onclick='document.getElementById(\"hty-src\").scrollIntoView({behavior:\"smooth\"})'>📚<br>读中查资料<small>读原文时点黄色标签</small></div>"+
  "<div class='tflow' onclick='openXilianbi(\"hty\")'>✍️<br>小练笔<small>写在批评或表扬里长大的瞬间</small></div>"+
  "<div class='tflow' onclick='switchTab(\"guoguan\")'>🎯<br>过关自测<small>5 道题检验</small></div>"+
  "</div>"+
  "<div style='margin-top:10px;text-align:right'><button class='srcbtn' id='jjModeBtn' onclick='toggleJjMode()'>🔄 切换为：复习模式</button></div></div>"+
  "<div class='card' style='border:2px solid #D9C9A8'><h3>🧾 本课必背内容（考试就考这些，先逐项过关）</h3>"+
  "<table class='ovtable'>"+
  "<tr><td><b>✅ 基本信息</b></td><td>作者<b>刘洋</b>（中国首位进入太空的女航天员）；写于<b>2022年6月1日</b>；地点<b>酒泉卫星发射中心问天阁</b>；背景是即将执行<b>神舟十四号</b>载人飞行任务，要离开孩子半年。</td></tr>"+
  "<tr><td><b>✅ 书信格式</b></td><td>称呼（亲爱的孩子们）→ 正文 → 结尾祝福 → 署名（爱你的妈妈）→ 日期。缺一不可。</td></tr>"+
  "<tr><td><b>✅ 必背名句</b></td><td>“你们是妈妈的<b>铠甲</b>，也是妈妈的<b>软肋</b>。”“<b>临危忘身，受命忘家</b>，这是军人的职责。”“等着妈妈<b>拥抱完星辰大海</b>再来拥抱你们！”</td></tr>"+
  "<tr><td><b>✅ 情感层次</b></td><td>不舍 → 解释（妈妈也是军人）→ 约定（凯旋接机、太空建房子、拍照片、写祝福）→ 嘱托（照顾爷爷奶奶、姥姥姥爷）→ 期望（有梦想、不惧困难）→ 深情收束。</td></tr>"+
  "</table></div>"+
  "<div class='card'><h3>🎯 结构速查：一封家书的“情感地图”</h3>"+
  "<table class='ovtable'><thead><tr><th style='width:110px'>段落</th><th>内容</th><th style='width:150px'>情感</th></tr></thead>"+
  "<tr><td><b>开头</b></td><td>交代写信的时间、地点、原因（不能陪孩子过六一）</td><td>歉疚、不舍</td></tr>"+
  "<tr><td><b>中间一</b></td><td>解释为什么拒绝孩子送行：怕牵挂、怕哭</td><td>柔软、克制</td></tr>"+
  "<tr><td><b>中间二</b></td><td>“我是妈妈，也是一名军人”——职责与亲情的取舍</td><td>坚定、自豪</td></tr>"+
  "<tr><td><b>中间三</b></td><td>与孩子的约定：建太空房子、拍照片、写祝福</td><td>温柔、期待</td></tr>"+
  "<tr><td><b>中间四</b></td><td>嘱托：照顾爷爷奶奶、多给姥姥姥爷打电话</td><td>牵挂、信任</td></tr>"+
  "<tr><td><b>结尾</b></td><td>“人生一定要有梦想”“等着妈妈拥抱完星辰大海再来拥抱你们”</td><td>鼓励、深情</td></tr></table></div>"+
  "<div class='card'><h3>🖼️ 看图理解“出征”</h3>"+
  "<figure class='pic'><img src='images/u6_rocket.jpg' alt='火箭发射升空'><figcaption>火箭发射升空（资料图）。2022年6月5日，神舟十四号载人飞船发射，刘洋第二次飞向太空，这一去就是半年。 <span class='picsrc'>图源：Pexels 免费图库（真实照片）</span></figcaption></figure><p style='font-size:14px;color:var(--muted)'>火箭升空的背后，是“临危忘身，受命忘家”的军人职责，也是一位妈妈忍住的不舍。</p></div>"+
  "<div class='card'><h3>📄 关键语句摘录（对照精讲用）</h3>"+
  "<p style='margin:8px 0'><b>不舍：</b>“每次想起你们，妈妈心中就像阳光融化巧克力般甜蜜温暖；每次想起你们，妈妈心中就会泛起阵阵幸福的涟漪。”</p>"+
  "<p style='margin:8px 0'><b>取舍：</b>“你们是妈妈的铠甲，也是妈妈的软肋。我是妈妈，也是一名军人。那一刻妈妈是要出征，临危忘身，受命忘家，这是军人的职责。”</p>"+
  "<p style='margin:8px 0'><b>约定：</b>“妈妈答应你们，要好好完成任务，在太空建一座大大的房子，装进无数人的梦想……”</p>"+
  "<p style='margin:8px 0'><b>结尾：</b>“纸短情长，太多太多的话浓缩成一个‘爱’字……等着妈妈拥抱完星辰大海再来拥抱你们！”</p></div>"+
  "<div class='card'><h3>📖 逐层精讲：一封信用了哪些“写法”</h3>"+
  "<div class='timeline'>"+
  "<div class='tl'><b>① 第二人称，像面对面说话</b><br>全篇用“你们”，读者仿佛就是那两个孩子。第二人称让书信更亲切，也更容易把心里话说明白。</div>"+
  "<div class='tl'><b>② 比喻：铠甲与软肋</b><br>“铠甲”是保护，“软肋”是牵挂。一句话写出母亲的两面：因为爱你们，我变得勇敢；也因为爱你们，我变得脆弱。</div>"+
  "<div class='tl'><b>③ 对比：妈妈 vs 军人</b><br>“我是妈妈，也是一名军人。”两个身份并列，把“小家”与“国家”放在一起——不是不要孩子，而是把爱分了一部分给使命。</div>"+
  "<div class='tl'><b>④ 排比：三个“妈妈答应你们”</b><br>建太空房子、拍照片、写祝福，三个承诺排比而下，语气温柔又坚定，把“离别”写成了“约定”。</div>"+
  "<div class='tl'><b>⑤ 细节：嘱托家务</b><br>照顾爷爷奶奶、给姥姥姥爷打电话——不是空话，是具体的、可执行的爱。细节让信有了温度。</div>"+
  "<div class='tl'><b>⑥ 结尾：纸短情长</b><br>“纸短情长”四个字收束全文，再用“拥抱完星辰大海再来拥抱你们”作结，把航天员的浪漫和母亲的深情合二为一。</div>"+
  "</div></div>"+
  "<div class='card'><h3>✍️ 写法借鉴：书信怎么写才不“假”</h3>"+
  "<table class='ovtable'><thead><tr><th style='width:120px'>要点</th><th>这封信怎么做</th><th style='width:190px'>你写信时怎么做</th></tr></thead>"+
  "<tr><td><b>说具体事</b></td><td>不能陪过六一、拒绝送行、太空建房子</td><td>写一件具体的事，别只说“我爱你”</td></tr>"+
  "<tr><td><b>说真心话</b></td><td>“我怕我忍不住会哭”</td><td>把自己的害怕、愧疚、感谢写出来</td></tr>"+
  "<tr><td><b>有细节</b></td><td>爷爷奶奶身体不好、姥姥姥爷想念</td><td>写对方的习惯、口头禅、为你做过的小事</td></tr>"+
  "<tr><td><b>有呼应</b></td><td>开头“不能陪你们”，结尾“再来拥抱你们”</td><td>结尾回应开头，信才完整</td></tr></table></div>"+
  "<div class='card'><h3>📚 课后习题·参考答案</h3>"+
  "<div class='acc open' onclick='this.classList.toggle(\"open\")'><button class='head'><span class='idx'>题1</span>这封信写了哪些内容？试着列个小标题。<span class='arrow'>▸</span></button><div class='body'>✅ <b>参考答案：</b>①不能陪你们过六一（写信缘由）；②为什么不让你们送行（不舍与克制）；③我是妈妈也是军人（职责与取舍）；④我们的约定（太空建房子、拍照片、写祝福）；⑤对你们的嘱托（照顾家人）；⑥对你们的期望（有梦想、不惧困难）。</div></div>"+
  "<div class='acc' onclick='this.classList.toggle(\"open\")'><button class='head'><span class='idx'>题2</span>“你们是妈妈的铠甲，也是妈妈的软肋”怎么理解？<span class='arrow'>▸</span></button><div class='body'>✅ <b>参考答案：</b>“铠甲”比喻孩子给了妈妈勇气和力量，让她敢于出征；“软肋”比喻孩子是妈妈最放不下的牵挂，一想就心软。这句话写出母爱的两面：既让人坚强，也让人柔软。</div></div>"+
  "<div class='acc' onclick='this.classList.toggle(\"open\")'><button class='head'><span class='idx'>题3</span>这封信为什么能打动那么多人？<span class='arrow'>▸</span></button><div class='body'>✅ <b>参考答案：</b>①真实：写的是出征前的真情实感；②具体：有约定、有嘱托、有细节；③有大爱：把母子之爱和家国之责放在一起，让人看到“妈妈”和“军人”两副肩膀；④语言温柔而有力量。</div></div></div>"+
  "<div class='card'><h3>👤 背景：刘洋与神舟十四号</h3>"+
  "<div class='kv'><div><b>🚀 刘洋</b><br>1978年生于河南林州。2012年执行神舟九号任务，成为中国首位进入太空的女航天员；2022年执行神舟十四号任务，在太空驻留半年。</div>"+
  "<div><b>🛰️ 神舟十四号</b><br>2022年6月5日发射，乘组陈冬、刘洋、蔡旭哲。任务期间完成中国空间站“T”字基本构型组装建造。</div></div>"+
  "<div class='tipbox story'>📖 在太空的183天里，刘洋每天叠一颗纸星星，写下一句祝福，放进玻璃瓶。183天，183颗星星——她说，这些祝福不只是给自己的孩子，也是给祖国所有的孩子。</div>"+
  "<div class='tipbox fun'>🤔 你知道吗？这封信2022年儿童节写于酒泉，2026年秋季正式编入五年级上册语文教材——从“一封家书”变成了“一篇课文”。</div>"+
  "<div class='tipbox tip'>⚡ <b>本课阅读提醒：</b>这是略读课文，不用逐字精讲，重点读出“情感的变化”和“书信的格式”。</div></div>"+
  "<div class='card'><h3>🎯 考点导航 · 先看考什么，再去深入</h3>"+
  "<p style='font-size:13px;color:var(--muted)'>这张表不再重复讲解——只回答两件事：考试考什么题型？想深入时点右侧按钮直达对应精讲。</p>"+
  "<table class='ovtable'><thead><tr><th style='width:132px'>重点内容</th><th>常考怎么考</th><th style='width:86px'>直达</th></tr></thead>"+
  "<tr><td><b>⭐ 铠甲与软肋</b></td><td><b>比喻理解</b>：铠甲＝孩子给妈妈力量，软肋＝孩子是妈妈最深的牵挂——写出母爱的两面</td><td><button class='srcbtn' onclick='jumpJj(\"hty-tl-1\")'>看精讲</button></td></tr>"+
  "<tr><td><b>⭐ 三个约定</b></td><td><b>排比与细节</b>：建太空房子、拍照片、写祝福——把“离别”写成“约定”</td><td><button class='srcbtn' onclick='jumpJj(\"hty-tl-2\")'>看精讲</button></td></tr>"+
  "<tr><td><b>⭐ 纸短情长</b></td><td><b>结尾抒情</b>：一个“爱”字收束全文，“拥抱完星辰大海再来拥抱你们”深情作结</td><td><button class='srcbtn' onclick='jumpJj(\"hty-tl-3\")'>看精讲</button></td></tr>"+
  "</table></div>"+
  "<div class='card' id='hty-src'><h3>📄 课文原文 · 节选（直读版）</h3>"+
  "<div class='readtext'>"+
  "<p style='margin:8px 0;padding:10px 14px;background:rgba(255,248,239,.6);border-radius:12px;line-height:2'>每次想起你们，妈妈心中就像阳光融化巧克力般甜蜜温暖；每次想起你们，妈妈心中就会泛起阵阵幸福的涟漪。</p>"+
  "<button class='srcbtn' onclick='showCard(\"hty1\")'>📚 查资料 · 比喻里的想念</button>"+
  "<p style='margin:8px 0;padding:10px 14px;background:rgba(255,248,239,.6);border-radius:12px;line-height:2'>你们是妈妈的铠甲，也是妈妈的软肋。我是妈妈，也是一名军人。那一刻妈妈是要出征，临危忘身，受命忘家，这是军人的职责。</p>"+
  "<button class='srcbtn' onclick='showCard(\"hty2\")'>📚 查资料 · 铠甲与软肋</button>"+
  "<p style='margin:8px 0;padding:10px 14px;background:rgba(255,248,239,.6);border-radius:12px;line-height:2'>妈妈答应你们，要好好完成任务，在太空建一座大大的房子，装进无数人的梦想……纸短情长，太多太多的话浓缩成一个‘爱’字……等着妈妈拥抱完星辰大海再来拥抱你们！</p>"+
  "<button class='srcbtn' onclick='showCard(\"hty3\")'>📚 查资料 · 183颗纸星星</button>"+
  "<p style='margin:10px 0 0;font-size:12.5px;color:var(--muted)'>——课文关键语句节选，顺序与课文一致；完整原文请对照课本朗读。</p>"+
  "</div></div>"+
  "<div class='card'><h3>🔍 精读深挖：一封家书的写法</h3>"+
  "<div class='timeline'>"+
  "<div class='tl' id='hty-tl-1'><b>⭐ 比喻 · 铠甲与软肋</b>"+
  "<div class='jl-yuan'><span class='jl-lab'>原句</span>你们是妈妈的铠甲，也是妈妈的软肋。</div>"+
  "<div class='jl-ask'>❓ 先想一想：孩子怎么能同时是“保护”和“牵挂”？</div>"+
  "<ul class='jl-ju'><li><b>铠甲是保护</b>——因为爱孩子，妈妈变得勇敢，敢于出征、敢于面对风险。</li>"+
  "<li><b>软肋是牵挂</b>——也是最放不下的地方，一想就心软、就流泪。</li>"+
  "<li><b>一句话两面</b>——既坚强又柔软，这正是母爱的完整模样。</li></ul>"+
  "<div class='jl-take'>💡 一句话：因为爱你们，我无所畏惧；也因为爱你们，我步步牵挂。</div>"+
  "<div class='jl-kao'>📝 考法：<b>比喻理解</b>——分别解释两个喻体，再合起来答“母爱的两面：坚强与柔软”。</div></div>"+
  "<div class='tl' id='hty-tl-2'><b>⭐ 排比与细节 · 把“离别”写成“约定”</b>"+
  "<div class='jl-yuan'><span class='jl-lab'>原句</span>妈妈答应你们，要好好完成任务，在太空建一座大大的房子，装进无数人的梦想……</div>"+
  "<div class='jl-ask'>❓ 先想一想：说“我要走了”和说“我答应你们”，哪种说法让人更好受？</div>"+
  "<ul class='jl-ju'><li><b>三个约定排比而下</b>——建太空房子、拍照片、写祝福，语气温柔又坚定。</li>"+
  "<li><b>化不舍为期待</b>——把“离别”改写成“约定”，孩子就有了盼头。</li>"+
  "<li><b>细节有温度</b>——嘱托照顾爷爷奶奶、给姥姥姥爷打电话，是具体可执行的爱。</li></ul>"+
  "<div class='jl-take'>💡 一句话：不写“舍不得”，写“等着我”——约定比眼泪更有力量。</div>"+
  "<div class='jl-kao'>📝 考法：<b>内容概括 + 写法分析</b>——列小标题（缘由、取舍、约定、嘱托、期望），答排比的作用。</div></div>"+
  "<div class='tl' id='hty-tl-3'><b>⭐ 结尾 · 纸短情长</b>"+
  "<div class='jl-yuan'><span class='jl-lab'>原句</span>纸短情长，太多太多的话浓缩成一个‘爱’字……等着妈妈拥抱完星辰大海再来拥抱你们！</div>"+
  "<div class='jl-ask'>❓ 先想一想：千言万语为什么最后只剩一个“爱”字？</div>"+
  "<ul class='jl-ju'><li><b>“纸短情长”收束全文</b>——话说不完，就用最重的字收住。</li>"+
  "<li><b>航天员的浪漫</b>——“星辰大海”既是任务，也是给孩子的童话。</li>"+
  "<li><b>首尾呼应</b>——开头“不能陪你们过六一”，结尾“再来拥抱你们”，一封信完整落地。</li></ul>"+
  "<div class='jl-take'>💡 一句话：把使命和母爱写进同一句话——这是这封信最动人的地方。</div>"+
  "<div class='jl-kao'>📝 考法：<b>结尾赏析 + 情感题</b>——引用原句 + 说明原因；也常考书信格式六要素。</div></div>"+
  "</div></div>"+
  "<div class='card'><h3>✍️ 小练笔：写在批评或表扬里长大的一个瞬间</h3>"+
  "<p style='font-size:13.5px;color:var(--muted)'>刘洋把“不舍”写成了“约定”。你也可以把一次批评或表扬写成一个成长的瞬间：当时发生了什么？谁说了什么话？你心里怎么想？现在怎么明白的？写 50~100 字。</p>"+
  "<textarea id='xilianbi-hty' class='xltextarea' rows='4' placeholder='写在这里，点保存会自动记住…'></textarea>"+
  "<div style='margin-top:8px;display:flex;gap:10px;align-items:center'><button class='tflow' style='max-width:180px' onclick='saveXilianbi(\"hty\")'>💾 保存</button><span id='xlsave-hty' style='font-size:12.5px;color:#3C9E5C;font-weight:700'></span></div></div>"+
  "</div>";},

 yuan6Di:function(L){return "<div class='tabpane show' data-tab='jiangjie'>"+
  "<div class='card'><h3>✍️ 审题：这是一封“书信”，不是一篇“作文”</h3>"+
  "<table class='ovtable'><thead><tr><th style='width:130px'>审题要点</th><th>怎么做</th></tr></thead>"+
  "<tr><td><b>写给谁</b></td><td>爸爸、妈妈、爷爷、奶奶、老师……选一个你最想说话的人</td></tr>"+
  "<tr><td><b>写什么</b></td><td>感谢、道歉、建议、心里话——选一个“一直想说却没说出口”的</td></tr>"+
  "<tr><td><b>怎么写</b></td><td>书信格式 + 第二人称 + 具体事例 + 真情实感</td></tr>"+
  "<tr><td><b>常见跑题</b></td><td>写成“我的妈妈”介绍文——重点不是介绍她，而是“我想对她说”</td></tr></table>"+
  "<div class='tipbox exam'>📝 <b>格式口诀：</b>称呼顶格加冒号，问候另起空两格；正文分段说清楚，祝语另起写整齐；署名日期靠右下，先名后日别写错。</div></div>"+
  "<div class='card'><h3>🖼️ 看图写信：把心里话放进口袋</h3>"+
  "<figure class='pic'><img src='images/u6_letter.jpg' alt='泛黄的信纸'><figcaption>泛黄的信纸。书信是“把心里话写给对方”——不用面对面，落笔反而更勇敢。 <span class='picsrc'>图源：Pexels 免费图库（真实照片）</span></figcaption></figure><p style='font-size:14px;color:var(--muted)'>想一想：你最想把信写给谁？先在心里说出那句最难开口的话，文章就有了灵魂。</p></div>"+
  "<div class='card'><h3>🖋️ 写作支架：四段写成一封好信</h3>"+
  "<table class='ovtable'><thead><tr><th style='width:100px'>段落</th><th>写什么</th><th style='width:190px'>示例开头</th></tr></thead>"+
  "<tr><td><b>称呼+问候</b></td><td>亲爱的妈妈：您好！</td><td>——</td></tr>"+
  "<tr><td><b>第一段</b></td><td>说写信的原因（一件具体的事）</td><td>“今天整理书包，我翻出了您给我缝的那个笔袋……”</td></tr>"+
  "<tr><td><b>第二段</b></td><td>把事说细：当时的情景、你的心理</td><td>“那天雨很大，您把伞全往我这边斜……”</td></tr>"+
  "<tr><td><b>第三段</b></td><td>说出心里话：感谢/道歉/建议</td><td>“以前我总觉得您唠叨，现在才明白……”</td></tr>"+
  "<tr><td><b>第四段</b></td><td>表达祝愿，呼应开头</td><td>“愿您少加点班，多睡一会儿。”</td></tr></table>"+
  "<div class='tipbox tip'>⚡ 一封信只写“一件事 + 一份情”就够了。事太多，情就散了。</div></div>"+
  "<div class='card'><h3>📄 范文（两篇，点击展开）</h3>"+
  "<div class='acc open' onclick='this.classList.toggle(\"open\")'><button class='head'><span class='idx'>范1</span>《妈妈，我想对您说》（感恩型，约430字）<span class='arrow'>▸</span></button><div class='body'>亲爱的妈妈：<br>　　您好！<br>　　今天写这封信，是想跟您说一声“对不起”，也想说一声“谢谢”。<br>　　上周三晚上，您加班到十点才回家，一进门就问我作业写完没有。我不耐烦地回了一句：“烦不烦啊！”您愣了一下，什么也没说，转身进了厨房。后来我偷偷看见，您一边热饭一边揉眼睛。那一刻，我心里像被针扎了一下。<br>　　其实我知道，您每天早上六点就起床给我做早饭，晚上回来还要检查我的作业。上次我发烧，您一夜没睡，隔一会儿就摸摸我的额头。第二天您照常去上班，眼睛下面一圈青黑。这些我都记得，只是当时不肯说。<br>　　妈妈，我长大了，以后您下班回来，我给您倒杯热水；您累了，我帮您捶捶背。我不敢保证再也不惹您生气，但我保证，下次一定好好说话。<br>　　祝您身体健康，少加班，多休息！<br>　　　　　　　　　　　　　　　　　　您的女儿　××<br>　　　　　　　　　　　　　　　　　　2026年10月19日<br>✏️ <b>点评：</b>格式完整✓；一件事（顶嘴）+ 一个细节（揉眼睛）✓；道歉+感谢+行动承诺，情感真实✓。约430字。</div></div>"+
  "<div class='acc' onclick='this.classList.toggle(\"open\")'><button class='head'><span class='idx'>范2</span>《爸爸，我想对您说》（建议型，约420字）<span class='arrow'>▸</span></button><div class='body'>亲爱的爸爸：<br>　　您好！<br>　　有件事我憋了很久，今天想跟您说说——您能不能少抽点烟？<br>　　上周日，我在客厅写作业，您坐在阳台上抽烟。烟味顺着门缝飘进来，我呛得直咳嗽。我抬头看您，您正低着头刷手机，烟灰缸里已经堆了七八个烟头。那一刻，我忽然有点难过：您总说要陪我久一点，可烟却在偷偷“偷走”您的时间。<br>　　我在书上看到，长期吸烟会伤害肺，还会让家里人跟着吸“二手烟”。爷爷去年住院，医生也说要戒烟。爸爸，我知道您工作压力大，抽烟是您放松的方式。要不我们换个办法？您想抽烟的时候，我陪您下楼走一圈，或者您教我下盘棋。<br>　　您是我心里最厉害的人。我希望您健健康康的，将来还能陪我去看海、去爬山。<br>　　祝您身体健康，工作顺利！<br>　　　　　　　　　　　　　　　　　　您的儿子　××<br>　　　　　　　　　　　　　　　　　　2026年10月19日<br>✏️ <b>点评：</b>建议型书信的典范：先说事实（烟头、咳嗽），再说理由（健康、二手烟），最后给替代方案（散步、下棋）——有理有据，不伤感情。约420字。</div></div></div>"+
  "<div class='card'><h3>🌟 素材与词库</h3>"+
  "<div class='kv'><div><b>💗 情感词</b><br>心疼、愧疚、感激、牵挂、唠叨、操劳、默默、陪伴</div>"+
  "<div><b>👀 细节词</b><br>揉眼睛、捶背、掖被角、斜伞、热饭、缝补、攥着</div>"+
  "<div><b>✉️ 书信用语</b><br>见字如面、纸短情长、展信佳、此致敬礼、祝您安康</div>"+
  "<div><b>🎯 开头方式</b><br>从一件物品、一个瞬间、一句没说完的话写起</div></div>"+
  "<table class='ovtable' style='margin-top:10px'><thead><tr><th style='width:130px'>自查项</th><th>达标标准</th></tr></thead>"+
  "<tr><td>格式</td><td>称呼、问候、正文、祝语、署名、日期，六项齐全</td></tr>"+
  "<tr><td>人称</td><td>全篇用“您/你”，不混用“他/她”</td></tr>"+
  "<tr><td>事例</td><td>至少一件具体的事，有动作、有对话</td></tr>"+
  "<tr><td>真情</td><td>不喊口号，写自己真实的感受</td></tr></table></div>"+
  "</div>";}
},

kaodian:{
 cimu:function(L){return "<div class='tabpane' data-tab='kaodian'><div class='card'><h3>📌 《慈母情深》考点讲解（点击展开每一条）</h3><div id='kaodian-acc-cimu'></div></div>"+
  "<div class='card'><h3>🔎 环境描写的作用（必考模板）</h3>"+
  "<table class='ovtable'><thead><tr><th style='width:120px'>作用</th><th>课文对应</th></tr></thead>"+
  "<tr><td><b>交代背景</b></td><td>交代母亲工作的环境：街道小厂、缝纫车间</td></tr>"+
  "<tr><td><b>表现人物</b></td><td>震耳欲聋、闷热、拥挤——表现母亲工作艰辛、挣钱不易</td></tr>"+
  "<tr><td><b>烘托情感</b></td><td>环境越苦，母爱越重，越让人心疼</td></tr>"+
  "<tr><td><b>推动情节</b></td><td>“我”亲眼看见母亲的工作，才有了“鼻子一酸”的转变</td></tr></table></div></div>";},

 fuai:function(L){return "<div class='tabpane' data-tab='kaodian'><div class='card'><h3>📌 《父爱之舟》考点讲解（点击展开每一条）</h3><div id='kaodian-acc-fuai'></div></div>"+
  "<div class='card'><h3>🔎 “线索”怎么找、怎么答</h3>"+
  "<div class='timeline'><div class='tl'><b>找线索</b><br>看哪个事物/地点在文中反复出现——本文是“姑爹的小渔船”。</div>"+
  "<div class='tl'><b>答作用</b><br>①串联材料，使结构完整；②象征人物/情感；③点明题目，深化中心。</div></div></div></div>";},

 hty:function(L){return "<div class='tabpane' data-tab='kaodian'><div class='card'><h3>📌 《航天员写给孩子的信》考点讲解（点击展开每一条）</h3><div id='kaodian-acc-hty'></div></div>"+
  "<div class='card'><h3>✉️ 书信格式六要素</h3>"+
  "<table class='ovtable'><thead><tr><th style='width:90px'>要素</th><th>位置</th><th>注意</th></tr></thead>"+
  "<tr><td>称呼</td><td>第一行顶格</td><td>后加冒号</td></tr>"+
  "<tr><td>问候</td><td>第二行空两格</td><td>如“您好！”</td></tr>"+
  "<tr><td>正文</td><td>另起空两格</td><td>可分几段</td></tr>"+
  "<tr><td>祝语</td><td>正文后另起</td><td>“此致”空两格，“敬礼”顶格</td></tr>"+
  "<tr><td>署名</td><td>右下方</td><td>自称+姓名</td></tr>"+
  "<tr><td>日期</td><td>署名下方</td><td>年月日</td></tr></table></div></div>";},

 yuan6Di:function(L){return "<div class='tabpane' data-tab='kaodian'><div class='card'><h3>📌 习作《我想对您说》评分要点（点击展开）</h3><div id='kaodian-acc-yuan6Di'></div></div>"+
  "<div class='card'><h3>📝 三类书信题的写法</h3>"+
  "<table class='ovtable'><thead><tr><th style='width:110px'>类型</th><th>结构</th></tr></thead>"+
  "<tr><td><b>感恩型</b></td><td>一件具体的事 → 当时的感受 → 现在的理解 → 感谢与承诺</td></tr>"+
  "<tr><td><b>道歉型</b></td><td>冲突经过 → 自己的心理 → 对方的反应 → 道歉与改正</td></tr>"+
  "<tr><td><b>建议型</b></td><td>事实（现象）→ 危害/理由 → 具体建议 → 祝愿</td></tr></table></div></div>";}
},

kaodianData:{
 cimu:[
  {t:"课文中的环境描写有什么作用？",b:"✅ ①交代母亲工作的环境——街道小厂、七八十台缝纫机、酷暑闷热；②表现母亲<b>工作艰辛、挣钱不易</b>；③烘托母爱的深沉——环境越苦，母亲仍支持“我”读书就越感人；④推动情节，“我”因此“鼻子一酸”，发生心理转变。<br>📝 模板：交代背景 + 表现人物 + 烘托情感 + 推动情节。"},
  {t:"四个“立刻”反复出现，有什么作用？",b:"✅ ①写出母亲给完钱后<b>马上投入工作</b>的连续动作，表现她争分夺秒、极度辛劳；②说明这一元五角钱来之不易，反衬母爱的无私；③反复形成急促的节奏，让读者感受到生活的沉重与母爱的分量。"},
  {t:"“我鼻子一酸，攥着钱跑了出去……”这句话好在哪里？",b:"✅ ①“鼻子一酸”是<b>心理描写</b>，写出“我”第一次真正看见母亲的辛苦，心疼又愧疚；②“攥”是<b>动作描写</b>，写出把钱握得很紧，珍惜这来之不易的钱；③一句话把感激、心疼、决心都写出来了，比直接说“我很感动”更有力量。"},
  {t:"题目“慈母情深”的“深”表现在哪里？",b:"✅ ①家境贫困，仍支持“我”读“闲书”；②工作极其辛苦，给钱却毫不犹豫；③“我”买了罐头，她数落后仍再凑钱买书；④她的话“我挺高兴他爱看书的”，说明她看重的是孩子的成长，而不只是钱。"},
  {t:"课文为什么用“我”的视角来写？",b:"✅ 用第一人称“我”来写，真实、亲切，读者跟着“我”的眼睛一步步看见母亲的辛苦，情感变化（不耐烦—震动—心疼—愧疚—懂事）也更自然可信。"},
  {t:"“母亲说完，立刻又坐了下去……”一句中的“坐、弯、俯、陷入”四个动词有什么表达效果？",b:"✅ 四个动词构成连续的动作链，像四个快镜头，写出母亲动作的<b>熟练、急促、不停歇</b>；也暗示她连多说一句话、多喘一口气的时间都没有，突出其辛劳。"}
 ],
 fuai:[
  {t:"课文的线索是什么？有什么作用？",b:"✅ 线索是<b>姑爹的小渔船</b>。作用：①串起父亲送“我”上学、报考、缝被等场景，使文章结构完整；②小船象征父亲，默默承载、托举“我”走出乡村；③以“舟”喻父爱，点明题目，深化中心。"},
  {t:"课文写了哪几个场景？请简要概括。",b:"✅ ①卖茧子给“我”买枇杷；②住客栈被臭虫咬，父亲想换房；③逛庙会给“我”买热豆腐脑；④雨雪天背“我”上学；⑤为“我”凑学费；⑥摇船送“我”报考、上学；⑦在船上为“我”缝补棉被。"},
  {t:"为什么这些“小事”能表现父爱？",b:"✅ 父爱不像母爱那样外露，它藏在吃、住、行、学这些日常小事里。作者用<b>以小见大</b>的手法，把容易被忽略的细节拾起来：一口枇杷、一碗豆腐脑、一次背扶、一串针脚——正因其小，才真实；正因其平常，才动人。"},
  {t:"结尾“醒来，枕边一片湿”有什么好处？",b:"✅ ①用细节写流泪，含蓄地表达对父亲的思念与感激；②照应开头写“梦”，首尾呼应；③不直说“我想父亲”，留白，余味更长。"},
  {t:"课文为什么详写“逛庙会”“雨雪背上学”“船上缝被”？",b:"✅ 这三件事最能体现父爱的细腻与深沉：庙会上一碗热豆腐脑与父亲自己吃的凉粽子形成对比；雨雪天背“我”写出父亲的身体付出；缝补棉被是“粗手做细活”，最见深情。详略得当，中心才突出。"}
 ],
 hty:[
  {t:"这封信主要写了哪些内容？",b:"✅ ①不能陪孩子过六一的歉疚；②解释不让送行的原因；③“我是妈妈，也是军人”的身份取舍；④与孩子的三个约定（太空建房子、拍照片、写祝福）；⑤对孩子的嘱托（照顾爷爷奶奶、给姥姥姥爷打电话）；⑥对孩子的期望（有梦想、不惧困难）。"},
  {t:"“你们是妈妈的铠甲，也是妈妈的软肋”怎么理解？",b:"✅ “铠甲”比喻孩子给了妈妈勇气和力量，让她能勇敢出征；“软肋”比喻孩子是妈妈最放不下的牵挂。这句话写出母爱的两面：既让人坚强，也让人柔软，语言凝练，情感真挚。"},
  {t:"这封信哪些地方最打动你？为什么？",b:"✅ 示例：最打动我的是“我怕我忍不住会哭”。一位要飞向太空的航天员，在提到孩子时也会害怕流泪，这种“强”与“软”的对比特别真实。答题时要<b>引用原句 + 说明原因</b>。"},
  {t:"书信体有什么特点？这封信体现了哪些？",b:"✅ 特点：①有固定格式（称呼、问候、正文、祝语、署名、日期）；②用第二人称，亲切自然；③情感真实，像面对面说话。这封信格式完整，全篇用“你们”，还用了比喻、排比，把心里话写得具体又动人。"},
  {t:"这封信为什么能入选语文教材？",b:"✅ ①内容真实，情感真挚；②既有母子之爱，又有家国情怀，能引导学生理解“小家”与“国家”的关系；③书信体裁典型，适合学习书信写作；④语言温柔有力量，适合朗读。"}
 ],
 yuan6Di:[
  {t:"书信的格式包括哪些部分？",b:"✅ 称呼（顶格+冒号）、问候（空两格）、正文（另起空两格，可分分段）、祝语（“此致”空两格，“敬礼”顶格）、署名（右下方）、日期（署名下方）。"},
  {t:"写“我想对您说”，怎样避免写成“介绍我的妈妈”？",b:"✅ 始终围绕“我想对您说”来写：每段都要有“对你说”的对象感，多用“您”，多写“我想”“我希望”“我记得”。介绍外貌、职业只是背景，重点是说心里话。"},
  {t:"怎样把“感谢”写得具体？",b:"✅ ①写一件具体的事（时间、地点、经过）；②写一个细节（动作、表情、一句话）；③写当时的心理和现在的理解；④写一句具体的承诺。四步下来，“感谢”就有了重量。"},
  {t:"建议型书信怎样写才不伤感情？",b:"✅ ①先肯定对方的好；②用事实说话，不用指责的语气；③说清理由（健康、安全、家庭）；④给出可执行的替代方案；⑤结尾表达关心和祝愿。"}
 ]
},

tuozhan:{
 cimu:function(L){return "<div class='tabpane' data-tab='tuozhan'>"+
  "<div class='card'><h3>🌟 一元五角钱，在那个年代有多重？</h3>"+
  "<div class='kv'><div><b>💰 购买力</b><br>上世纪六十年代初，一元五角钱可以买十几斤大米，或一家人几天的菜钱。对一个月工资只有几十元的工人家庭来说，这是一笔要“算着花”的钱。</div>"+
  "<div><b>📖 《青年近卫军》</b><br>苏联作家法捷耶夫的长篇小说，写青年在地下抵抗法西斯的故事。在当时，这样一本“闲书”并不便宜，也难怪母亲会犹豫——但她还是给了。</div>"+
  "<div><b>🏭 街道小厂</b><br>母亲做工的地方叫“街道小厂”，设备简陋、噪音大、工资低，是那个年代许多城市家庭的真实写照。</div></div>"+
  "<div class='tipbox fun'>🤔 你知道吗？梁晓声后来说，他写《母亲》时常常写着写着就哭了。他笔下的母亲，不只是他自己的母亲，也是那一代中国母亲的缩影。</div></div>"+
  "<div class='card'><h3>📚 延伸阅读：梁晓声笔下的母亲</h3>"+
  "<p>《母亲》是梁晓声的散文集，里面还有《母亲养蜗牛》《母亲与书》等篇目。读一读会发现：他写母亲，几乎从不写“伟大”，只写“手脚”——写她怎样干活、怎样省钱、怎样把好东西留给孩子。</p>"+
  "<div class='tipbox tip'>⚡ <b>对比阅读：</b>把《慈母情深》和《父爱之舟》放在一起读——一个写母亲“给钱买书”，一个写父亲“摇船送学”，同样是爱，表达方式完全不同。</div></div>"+
  "<div class='card'><h3>🎬 怎么把“场景”读出来</h3>"+
  "<div class='timeline'><div class='tl'><b>听声音</b><br>“震耳欲聋”——读这四个字时，想象七八十台缝纫机同时响。</div>"+
  "<div class='tl'><b>看温度</b><br>“酷暑”“闷热”“灯泡烤着脸”——读出那种喘不过气的热。</div>"+
  "<div class='card'><h3>🎬 背景视频 · 对话梁晓声</h3>"+
  "<div class='bili-frame'><iframe src='https://player.bilibili.com/player.html?bvid=BV1JY4y1C7TK&page=1&danmaku=0&autoplay=0&high_quality=1' scrolling='no' frameborder='no' allowfullscreen='true' loading='lazy'></iframe></div>"+
  "<p class='vnote'>📺 【对话梁晓声】一个把母亲写进语文教科书的硬核男人 · UP主：先锋读书会 · 时长 7分46秒 · <a class='blink' href='https://www.bilibili.com/video/BV1JY4y1C7TK' target='_blank' rel='noopener'>在B站打开 ↗</a> · <a class='blink landlink'>⛶ 横屏看</a></p>"+
  "<div class='tipbox tip'>⚡ 作者本人出镜讲他的母亲——“我特别感谢我有一个会讲故事的母亲”。听他亲口说，课文里的场景就活了。</div></div>" +
  "<div class='tl'><b>看手</b><br>“龟裂的手指”“揉得皱皱的毛票”——细节比形容词更有说服力。</div></div></div></div>";},

 fuai:function(L){return "<div class='tabpane' data-tab='tuozhan'>"+
  "<div class='card'><h3>🌟 画家吴冠中的“水乡”</h3>"+
  "<p>吴冠中1919年生于江苏宜兴，江南水乡的白墙黑瓦、小桥流水，是他画了一辈子的题材。他晚年的画作《周庄》《双燕》等，用极简的线条和色块，把水乡画成了“诗”。</p>"+
  "<div class='timeline'><div class='tl'><b>画家的眼睛</b><br>读《父爱之舟》时留意颜色与光线：雪、船、棉被、庙会的热气——这些都是“画面”。</div>"+
  "<div class='tl'><b>画家的手</b><br>父亲在船上缝棉被，粗手做细活；吴冠中后来画江南，也常用细线画屋檐、画船篷——细腻，是他俩的共同点。</div></div>"+
  "<div class='tipbox fun'>🤔 你知道吗？吴冠中曾说：“我一生只做了一件事——画江南。”而《父爱之舟》里的江南，是他文字版的“故乡”。</div></div>"+
  "<div class='card'><h3>🛶 小渔船：贫穷人家的“校车”</h3>"+
  "<p>在江南水乡，船是最常见的交通工具。对吴冠中一家来说，姑爹的小渔船既是下田、赶集的工具，也是送孩子上学、报考的“校车”。一只船，载着一家人的生计，也载着一个孩子的未来。</p>"+
  "<div class='kv'><div><b>🚣 摇船</b><br>用橹或桨划水，一天只能走几十里，父亲却一趟趟地送。</div>"+
  "<div><b>🧵 缝被</b><br>船上的棉被破了，父亲就着船头的灯补——粗手做细活，最见深情。</div></div></div>"+
  "<div class='card'><h3>📚 延伸阅读</h3>"+
  "<div class='card'><h3>🎬 背景视频 · 十分钟了解吴冠中</h3>"+
  "<div class='bili-frame'><iframe src='https://player.bilibili.com/player.html?bvid=BV1hpD8YTE2E&page=1&danmaku=0&autoplay=0&high_quality=1' scrolling='no' frameborder='no' allowfullscreen='true' loading='lazy'></iframe></div>"+
  "<p class='vnote'>📺 十分钟带你了解吴冠中的一生 · UP主：dodelight · 时长 6分13秒 · <a class='blink' href='https://www.bilibili.com/video/BV1hpD8YTE2E' target='_blank' rel='noopener'>在B站打开 ↗</a> · <a class='blink landlink'>⛶ 横屏看</a></p>"+
  "<div class='tipbox tip'>⚡ 课文结尾说“我什么时候能用手中的笔把那只小船画出来就好了”——看完画家的一生，你就知道这句话的分量。</div></div>" +
  "<ul class='tight'><li>吴冠中散文集《我负丹青》——看他怎么把画面写成文字。</li><li>朱自清《背影》——同样是写父爱，同样是“以小见大”的经典。</li><li>龙应台《目送》——写父母与子女的离别，可以和本单元对照读。</li></ul></div></div>";},

 hty:function(L){return "<div class='tabpane' data-tab='tuozhan'>"+
  "<div class='card'><h3>🚀 刘洋：十年两度飞天</h3>"+
  "<figure class='pic'><img src='images/u6_space.jpg' alt='航天员在太空出舱行走'><figcaption>航天员在太空出舱行走（NASA 资料照片）。舱外没有空气、温差极大，每一步都要系着“生命之绳”。<span class='picsrc'>图源：Pexels（NASA 公开图片）</span></figcaption></figure>"+
  "<div class='timeline'><div class='card'><h3>🚀 刘洋：十年两度飞天</h3>"+
  "<div class='timeline'>"+
  "<div class='tl'><b>2012年6月 · 神舟九号</b><br>刘洋与景海鹏、刘旺执行神舟九号任务，完成与天宫一号的载人交会对接，成为中国首位进入太空的女航天员。</div>"+
  "<div class='tl'><b>2022年6月5日 · 神舟十四号</b><br>刘洋与陈冬、蔡旭哲再次出征，在太空驻留半年，参与中国空间站“T”字构型建造。</div>"+
  "<div class='tl'><b>183颗星星</b><br>在轨183天，她每天叠一颗纸星星、写一句祝福，装进玻璃瓶，说要送给祖国所有的孩子。</div>"+
  "<div class='tl'><b>2026年秋 · 走进课本</b><br>这封写于2022年儿童节的家书，被编入统编版五年级上册第六单元。</div></div>"+
  "<div class='tipbox fun'>🤔 你知道吗？航天员在太空每天能看到16次日出——空间站每90分钟绕地球一圈。刘洋说，最想让孩子看的，就是这颗蓝色的星球。</div></div>"+
  "<div class='card'><h3>🛰️ 中国空间站：太空里的“家”</h3>"+
  "<div class='kv'><div><b>🏠 天和核心舱</b><br>2021年发射，是空间站的管理和控制中心，也是航天员生活的主要场所。</div>"+
  "<div><b>🧪 问天、梦天实验舱</b><br>2022年相继对接，形成“T”字构型，可开展大量科学实验。</div>"+
  "<div><b>👩‍🚀 太空课堂</b><br>航天员多次进行“天宫课堂”授课，演示水球、陀螺、泡腾片等实验，全国学生同步观看。</div></div>"+
  "<div class='tipbox tip'>⚡ <b>跨学科链接：</b>为什么太空中水会变成球？为什么航天员要绑着睡？这些问题都可以在“天宫课堂”里找到答案。</div></div>"+
  "<div class='card'><h3>📚 书信里的“家国”</h3>"+
  "<p>中国历史上有很多著名的家书：诸葛亮的《诫子书》、曾国藩家书、傅雷家书，还有革命先烈的绝笔信。它们有一个共同点——<b>纸短情长</b>：篇幅不长，却把做人的道理、家国的责任，一字一句留给了后人。</p>"+
  "<div class='card'><h3>🎬 背景视频 · 航天员的太空生活</h3>"+
  "<div class='bili-frame'><iframe src='https://player.bilibili.com/player.html?bvid=BV1Ey4y1M7DH&page=1&danmaku=0&autoplay=0&high_quality=1' scrolling='no' frameborder='no' allowfullscreen='true' loading='lazy'></iframe></div>"+
  "<p class='vnote'>📺 揭秘！航天员们在太空是怎么生活的？ · UP主：中国青年报 · 时长 3分16秒 · <a class='blink' href='https://www.bilibili.com/video/BV1Ey4y1M7DH' target='_blank' rel='noopener'>在B站打开 ↗</a> · <a class='blink landlink'>⛶ 横屏看</a></p>"+
  "<div class='tipbox tip'>⚡ 刘洋信里写的太空生活，镜头里是真的：睡觉要绑进睡袋、水会飘成球……边看边对照课文里的描写。</div></div>" +
  "<div class='tipbox exam'>📝 读这封信，不妨想一想：如果让你给十年后的自己写一封信，你会写什么？</div></div></div></div></div>";},

 yuan6Di:function(L){return "<div class='tabpane' data-tab='tuozhan'>"+
  "<div class='card'><h3>🕰️ 日积月累：《游子吟》</h3>"+
  "<p style='font-size:17px;line-height:2;text-align:center;font-family:\"KaiTi\",serif'>慈母手中线，游子身上衣。<br>临行密密缝，意恐迟迟归。<br>谁言寸草心，报得三春晖。</p>"+
  "<p style='text-align:center;color:var(--muted);font-size:13.5px'>唐 · 孟郊</p>"+
  "<table class='ovtable'><thead><tr><th style='width:110px'>词句</th><th>意思</th></tr></thead>"+
  "<tr><td><b>游子</b></td><td>离家远行的人</td></tr>"+
  "<tr><td><b>意恐</b></td><td>担心</td></tr>"+
  "<tr><td><b>寸草心</b></td><td>小草的心意，比喻子女微薄的心意</td></tr>"+
  "<tr><td><b>三春晖</b></td><td>春天的阳光，比喻母爱</td></tr></table>"+
  "<div class='tipbox exam'>📝 <b>名句理解：</b>“谁言寸草心，报得三春晖”——谁说小草那点心意，能报答得了春天阳光般的母爱呢？用反问和比喻，写出母爱的深厚与子女的感激。</div></div>"+
  "<div class='card'><h3>✉️ 书信模板（可直接套用）</h3>"+
  "<pre style='background:#2B2B33;color:#E8E8E8;border-radius:10px;padding:14px;font-size:13px;line-height:1.7;overflow-x:auto'>亲爱的××：\n　　您好！\n　　（第一段：写一件具体的事，说明为什么写这封信）\n　　（第二段：把事说细，写当时的场景、动作、你的心理）\n　　（第三段：说出心里话——感谢/道歉/建议）\n　　（第四段：表达祝愿，呼应开头）\n　　祝您身体健康，万事如意！\n\n　　　　　　　　　　　　　　您的××　×××\n　　　　　　　　　　　　　　2026年×月×日</pre>"+
  "<div class='tipbox fun'>🤔 小技巧：写完信，把它读给家人听。如果读到某一句你自己都想哭，那封信就写成功了。</div></div></div>";}
},

jichu:{
 cimu:[
  ["会写字（注音+组词）","辞 cí（辞退、推辞）、抑 yì（压抑、抑郁）、碌 lù（忙碌、劳碌）、权 quán（权利、权力）、龟 jūn（龟裂）、械 xiè（机械、器械）、脊 jǐ（脊背、脊梁）、酸 suān（心酸、鼻酸）、噪 zào（噪音、嘈杂）、竟 jìng（竟然、毕竟）"],
  ["会认字","魄 pò（气魄）、颓 tuí（颓废）、龟 jūn（龟裂）、攥 zuàn（攥着）"],
  ["多音字","龟：jūn（龟裂）／guī（乌龟）；塞：sāi（塞给）／sài（边塞）／sè（堵塞）；供：gōng（供给）／gòng（供品）"],
  ["近义词","疲惫—疲劳；忙碌—繁忙；数落—责备；毫不犹豫—毫不迟疑"],
  ["反义词","忙碌—清闲；瘦弱—强壮；犹豫—果断；龟裂—光滑"],
  ["易错提醒","“龟裂”读 jūn 不读 guī；“攥”是提手旁，读 zuàn；“脊”上面是“脊”字头，别少写点；“酸”是酉字旁"]
 ],
 fuai:[
  ["会写字（注音+组词）","茧 jiǎn（蚕茧、茧子）、栈 zhàn（客栈、栈桥）、冤 yuān（冤枉、冤家）、枉 wǎng（冤枉、枉然）、恍 huǎng（恍惚、恍然）、惚 hū（恍惚）、跷 qiāo（跷脚、高跷）、僻 pì（偏僻、僻静）、攥 zuàn（攥着）、嘲 cháo（嘲笑、嘲讽）、枕 zhěn（枕头、枕边）、蚕 cán（蚕丝、养蚕）、考 kǎo（报考、考试）、疼 téng（心疼、疼痛）、兼 jiān（兼职、兼顾）、钉 dīng（钉子、钉扣子）"],
  ["会认字","茧 jiǎn、栈 zhàn、冤 yuān、枉 wǎng、惚 hū、跷 qiāo、僻 pì、攥 zuàn、嘲 cháo"],
  ["多音字","钉：dīng（钉子）／dìng（钉扣子）；背：bēi（背着）／bèi（后背）；缝：féng（缝补）／fèng（门缝）"],
  ["近义词","偏僻—偏远；恍惚—迷糊；嘲笑—讥笑；心酸—辛酸"],
  ["反义词","偏僻—繁华；嘲笑—赞扬；心酸—甜蜜；恍惚—清醒"],
  ["易错提醒","“茧”是草字头；“栈”是木字旁；“恍”“惚”都是竖心旁；“攥”与“攥”同音，注意提手旁"]
 ],
 hty:[
  ["重点词语（含注音）","问天阁（wèn tiān gé）、铠甲（kǎi jiǎ）、软肋（ruǎn lèi）、涟漪（lián yī）、星辰（xīng chén）、凯旋（kǎi xuán）、嘱托（zhǔ tuō）、奔赴（bēn fù）、浩瀚（hào hàn）"],
  ["易读错","涟漪 lián yī（不读 lián yí）；铠 kǎi；肋 lèi；赴 fù；瀚 hàn"],
  ["近义词","牵挂—挂念；不舍—留恋；嘱托—嘱咐；凯旋—胜利归来"],
  ["反义词","牵挂—放心；浩瀚—狭小；坚定—动摇"],
  ["书信用语","见字如面、纸短情长、此致敬礼、祝您安康、展信佳"],
  ["易错提醒","“凯”左边是“几”，右边是“岂”；“赴”是走字底；“瀚”是三点水，别写成“翰”"]
 ],
 yuan6Di:[
  ["本单元词语积累","疲惫、忙碌、龟裂、攥着、偏僻、恍惚、嘲笑、心酸、牵挂、铠甲、软肋、凯旋、嘱托"],
  ["书信格式术语","称呼、问候、正文、祝语、署名、日期"],
  ["《游子吟》易错字","游子、临行、密密缝、意恐、寸草心、三春晖（“晖”是日字旁，别写成“辉”）"],
  ["情感词","感激、愧疚、心疼、牵挂、怀念、敬爱"],
  ["写作提醒","书信要有对象感；一件事写透，别写成流水账；结尾用祝愿呼应开头"]
 ]
},
zige:{
 cimu:[["辞","cí","辞退·推辞"],["抑","yì","压抑·抑郁"],["碌","lù","忙碌·劳碌"],["权","quán","权利·权力"],["械","xiè","机械·器械"],["脊","jǐ","脊背·脊梁"],["酸","suān","心酸·鼻酸"],["噪","zào","噪音·嘈杂"],["竟","jìng","竟然·毕竟"]],
 fuai:[["茧","jiǎn","蚕茧·茧子"],["栈","zhàn","客栈·栈桥"],["冤","yuān","冤枉·冤家"],["枉","wǎng","冤枉·枉然"],["恍","huǎng","恍惚·恍然"],["惚","hū","恍惚"],["跷","qiāo","高跷·跷脚"],["僻","pì","偏僻·僻静"],["攥","zuàn","攥着·攥紧"],["嘲","cháo","嘲笑·嘲讽"],["枕","zhěn","枕头·枕边"],["蚕","cán","蚕丝·养蚕"],["兼","jiān","兼职·兼顾"],["钉","dīng","钉子·钉扣子"]],
 hty:[["铠","kǎi","铠甲·铁铠"],["肋","lèi","软肋·肋骨"],["涟","lián","涟漪"],["漪","yī","涟漪"],["赴","fù","奔赴·赴约"],["瀚","hàn","浩瀚·瀚海"],["嘱","zhǔ","嘱托·嘱咐"]],
 yuan6Di:[["信","xìn","书信·写信"],["封","fēng","信封·一封"],["祝","zhù","祝福·祝愿"],["愿","yuàn","愿望·心愿"],["诉","sù","倾诉·诉说"],["谅","liàng","原谅·谅解"],["歉","qiàn","道歉·抱歉"]]
},
ciyu:{
 cimu:[["震耳欲聋","耳朵都快震聋了，形容声音很大。"],["龟裂","皮肤因干燥或寒冷而裂开。"],["数落","列举过失而责备。"],["毫不犹豫","一点儿也不迟疑。"],["忙碌","忙着做各种事情。"]],
 fuai:[["客栈","旧时供旅客住宿的店铺。"],["恍惚","神志不清，精神不集中。"],["偏僻","离城市或中心区远，交通不便。"],["心酸","心里悲痛。"],["攥","用手紧紧握住。"]],
 hty:[["问天阁","酒泉卫星发射中心航天员出征前所在的地方。"],["铠甲","古代军人打仗时穿的护身服装，这里比喻保护自己的力量。"],["软肋","肋骨中最脆弱的部分，比喻最容易被触动的地方。"],["涟漪","细小的波纹。"],["凯旋","战胜归来。"]],
 yuan6Di:[["倾诉","把心里的话全部说出来。"],["谅解","了解实情后原谅或消除意见。"],["祝愿","表示良好愿望。"],["此致","书信结尾用语，表示到此为止。"],["敬礼","书信祝语，表示尊敬。"]]
},

src:{
 cimu_before:[
  ["🖋️ 卡片一 · 作者梁晓声","梁晓声，1949年生于黑龙江哈尔滨，当代作家，代表作《今夜有暴风雪》《人世间》。他多次写自己的母亲，说母亲是他“文学的第一位老师”。《慈母情深》就节选自他的散文《母亲》。"],
  ["💰 卡片二 · 那个年代的“一元五角”","故事发生在上世纪六十年代初：物资匮乏，一元五角钱可以买十几斤大米，对一个月工资只有几十元的工人家庭来说，是一笔要“算着花”的钱。母亲在街道小厂做工——设备简陋、噪音大、工资低，是那个年代许多城市家庭的真实写照。"],
  ["📖 卡片三 · 从《母亲》到课本","梁晓声回忆，母亲在街道小厂做工，车间里几十台缝纫机同时响，“像下暴雨”。他第一次去车间找母亲，被那声音震住了——课文里“震耳欲聋”四个字，就是他真实的记忆。他后来说，写《母亲》时常常写着写着就哭了：他笔下的母亲，也是那一代中国母亲的缩影。"]],
 cimu1:["🔊 震耳欲聋的车间","“震耳欲聋”写声音，“酷暑”“闷热”写温度，“七八十台破缝纫机”写拥挤。母亲就坐在这声音和闷热里，一坐就是一整天。这叫环境烘托：环境写得越苦，母亲越辛苦，母爱就越重——也才有了后面“我”的“鼻子一酸”。"],
 cimu2:["🔁 四个“立刻”为什么连用","四个“立刻”像四个快镜头：坐下去、弯下背、俯下头、陷入忙碌——母亲给完钱，没有片刻停留。反复是在给感情“加重音”：钱来得太不容易，爱却给得太干脆。答题记三步：写出连续动作 → 表现极度辛劳 → 反衬母爱无私。"],
 cimu3:["🤲 揉皱的毛票与龟裂的手指","“揉得皱皱的毛票”是被一张张攒出来、捏过无数遍的零钱；“龟裂”是皮肤因干燥寒冷裂开口子，是长期劳作的印记。一个“塞”字写出毫不犹豫——自己舍不得花一分钱，却舍得为孩子的成长花钱。同事劝阻与母亲支持形成对比，更反衬出母亲的远见与深情。"],
 fuai_before:[
  ["🎨 卡片一 · 画家吴冠中","吴冠中（1919—2010），江苏宜兴人，著名画家、美术教育家，也是散文家。他画江南水乡，也写江南水乡——文字里常常带着画面的光影。晚年的画作《周庄》《双燕》，用极简的线条把水乡画成了“诗”。"],
  ["🖋️ 卡片二 · 不识字却懂读书的父亲","吴冠中出身农家，父亲靠卖茧、种田供他读书。他后来回忆：父亲“不识字，却懂得读书的重要”。这篇散文写于晚年——不是写某一个瞬间，而是把一辈子的父爱一件一件拾回来，是回忆，也是致敬。"],
  ["🛶 卡片三 · 江南水乡的“校车”","在水乡，船是最常见的交通工具。对吴冠中一家来说，姑爹的小渔船既是下田、赶集的工具，也是送孩子上学、报考的“校车”——一只船，载着一家人的生计，也载着一个孩子的未来。"]],
 fuai1:["🛶 姑爹的小渔船","全文以“舟”为线索：父亲摇船送“我”上学、送“我”报考、在船上为“我”缝补棉被。小船既是贫穷家境的写照，也是父亲默默承载、托举“我”走出乡村的“舟”——这就是题目“父爱之舟”的分量。"],
 fuai2:["😢 第一次“心酸的哭”","撒娇的哭、发脾气的哭、打架的哭，都是“要”的哭；这一次是“懂”的哭——“我”第一次体会到父亲谋生的艰难和爱得深沉。一个“第一次”，写出孩子的成长。"],
 fuai3:["🌊 “醒来，枕边一片湿”","不直接说“我想念父亲”，只写醒来枕头湿了——用细节写流泪，含蓄地表达深深的思念与感激；又照应开头写“梦”，首尾呼应，余味悠长。这是“以细节收束”的高手写法。"],
 hty_before:[
  ["🚀 卡片一 · 刘洋是谁","刘洋，1978年生于河南林州。2012年执行神舟九号任务，成为中国首位进入太空的女航天员；2022年执行神舟十四号任务，在太空驻留半年。"],
  ["🛰️ 卡片二 · 这封信写在哪里","2022年6月1日，儿童节，酒泉卫星发射中心问天阁。几天后的6月5日，神舟十四号载人飞船发射（乘组：陈冬、刘洋、蔡旭哲），刘洋第二次飞向太空，这一去就是半年——她将错过孩子的节日和整个夏天的陪伴，于是在出征前写下这封家书。"],
  ["⭐ 卡片三 · 183颗纸星星","神舟十四号任务期间，刘洋每天叠一颗纸星星、写一句祝福，放进玻璃瓶——183天，183颗星星。她说，这些祝福不只是给自己的孩子，也是给祖国所有的孩子。2026年秋季，这封儿童节的家书被编入统编版五年级上册第六单元。"]],
 hty1:["🍬 比喻里的想念","“阳光融化巧克力般甜蜜温暖”——用孩子熟悉的甜，写母亲的想念：一想起你们，心里就又暖又软。全篇用第二人称“你们”，像面对面说话，这是书信最亲切的地方。"],
 hty2:["🛡️ 铠甲与软肋","“铠甲”是保护：孩子给了妈妈勇气和力量，让她敢于出征；“软肋”是牵挂：孩子是妈妈最放不下的惦念。一句话写出母爱的两面——既让人坚强，也让人柔软。"],
 hty3:["⭐ 183颗纸星星","在太空的183天里，刘洋每天叠一颗纸星星、写下一句祝福，放进玻璃瓶。183天，183颗星星——她说，这些祝福不只是给自己的孩子，也是给祖国所有的孩子。"]
},

guoguan:{
 cimu:function(L){return "<div class='tabpane' data-tab='guoguan'>"+
  "<div class='card' style='border:2px solid #D9C9A8'><h3>🎯 过关自测 · 慈母情深</h3>"+
  "<p style='font-size:13px;color:var(--muted)'>5 道题检验本课掌握情况，单选每题 1 分，交卷后自动保存成绩。</p>"+
  "<div id='quizBox'></div></div></div>"}
 ,fuai:function(L){return "<div class='tabpane' data-tab='guoguan'>"+
  "<div class='card' style='border:2px solid #D9C9A8'><h3>🎯 过关自测 · 父爱之舟</h3>"+
  "<p style='font-size:13px;color:var(--muted)'>5 道题检验本课掌握情况，单选每题 1 分，交卷后自动保存成绩。</p>"+
  "<div id='quizBox'></div></div></div>"}
 ,hty:function(L){return "<div class='tabpane' data-tab='guoguan'>"+
  "<div class='card' style='border:2px solid #D9C9A8'><h3>🎯 过关自测 · 航天员写给孩子的信</h3>"+
  "<p style='font-size:13px;color:var(--muted)'>5 道题检验本课掌握情况，单选每题 1 分，交卷后自动保存成绩。</p>"+
  "<div id='quizBox'></div></div></div>"}
},

quizzes:{cimu:QUIZ_CIMU,fuai:QUIZ_FUAI,hty:QUIZ_HTY}
};
