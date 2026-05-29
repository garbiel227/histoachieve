const works = [
  {
    id: "2301-01",
    grade: "2301",
    title: "回顾辉煌岁月：人民日报75载封面故事",
    genre: "数据海报",
    medium: "人民日报",
    topic: "党报史",
    period: "1950-2024",
    thumb: "assets/works/2301/01-renmin-cover.jpg",
    original: "originals/2301/01-renmin-cover.pdf",
    format: "pdf",
    author: "韦晓丽 张冰倩 谷欣遥 焦圣洁",
    summary: "以《人民日报》年度封面为线索，梳理共和国媒介记忆中的人物、议题与视觉演变。",
    tags: ["封面研究", "人物报道"]
  },
  {
    id: "2301-02",
    grade: "2301",
    title: "潮涌大湾区，奋楫正当时",
    subtitle: "《大公报》（2018-2024）关于粤港澳大湾区国家凝聚力构建的报道可视化",
    genre: "数据海报",
    medium: "大公报",
    topic: "国家认同",
    period: "2018-2024",
    thumb: "assets/works/2301/02-gba-takungpao.jpeg",
    original: "originals/2301/02-gba-takungpao.pdf",
    format: "pdf",
    author: "乔文涵 武斯羽 任福琳 王艺羲 徐蕊",
    summary: "聚焦粤港澳大湾区报道，呈现关键词、交通、经贸与区域叙事中的国家凝聚力。",
    tags: ["粤港澳大湾区", "区域传播", "国家凝聚力"]
  },
  {
    id: "2301-03",
    grade: "2301",
    title: "152张摄影照片再现晋察冀边区的百姓生产生活",
    genre: "数据长图",
    medium: "晋察冀画报",
    topic: "性别与社会",
    period: "1942-1948",
    thumb: "assets/works/2301/03-152jinchaji.jpg",
    original: "originals/2301/03-china-women.jpg",
    format: "image",
    author: "黄思思 华丽莹 顾晨希 高诗雅 华子今",
    summary: "通过152张摄影图片，再现战争下的晋察冀边区人民生产、生活状态。",
    tags: ["摄影", "抗战时期", "人物统计"]
  },
  {
    id: "2301-04",
    grade: "2301",
    title: "把酒话桑麻",
    subtitle: "人民日报乡村振兴报道（2017-2024）数据库",
    genre: "数据网页",
    medium: "人民日报",
    topic: "乡土叙事",
    period: "2017-2024",
    thumb: "assets/works/2301/04-bajiuhuasangma.jpg",
    original: "originals/2301/04-bajiuhuasangma.jpg",
    externalUrl: "https://readymag.website/u547873550/5137852/",
    format: "link",
    author: "刘浩志 赵艺凝 黎小漫",
    summary: "人民日报的乡土叙事一览，集结1792条人民日报“乡村振兴”标题数据。该作品曾获第四届中国新闻传播学科数据库建设及可视化大赛特等奖。",
    tags: ["数据网页", "乡村传播", "课程作品"]
  },
  {
    id: "2301-05",
    grade: "2301",
    title: "丈量发展脚步——改革开放以来历代领导人视察轨迹与中国发展脉络",
    genre: "数据海报",
    medium: "人民日报",
    topic: "外交报道",
    period: "1949-2024",
    thumb: "assets/works/2301/05-diplomacy-75.jpg",
    original: "originals/2301/05-diplomacy-75.pdf",
    format: "pdf",
    author: "刘梓桐 马一宁 南碧 姚远",
    summary: "以新中国外交报道为对象，梳理外贸、出访、国际关系等议题的可视化脉络。",
    tags: ["外交史", "国际传播", "数据可视化"]
  },
  {
    id: "2301-06",
    grade: "2301",
    title: "纸上姻缘，岁里红线",
    subtitle: "天津《大公报》征婚广告数据库及可视化",
    genre: "数据长图",
    medium: "大公报",
    topic: "社会生活",
    period: "1902-1937",
    thumb: "assets/works/2301/06-marriage-adverts.jpg",
    original: "originals/2301/06-marriage-adverts.pdf",
    format: "pdf",
    author: "王梦晴 沈睿涵 王凯鑫 汪炘洁 王如冰",
    summary: "从报刊婚恋信息与社会观念的关系入手，呈现纸媒中的婚恋叙事与时代变迁。",
    tags: ["婚恋广告", "社会史", "生活方式"]
  },
  {
    id: "2301-07",
    grade: "2301",
    title: "回顾辉煌岁月",
    subtitle: "人民画报75载封面故事",
    genre: "数据长图",
    medium: "人民画报",
    topic: "新闻史专题",
    period: "1949-2024",
    thumb: "assets/works/2301/07-work.jpg",
    original: "originals/2301/07-work.jpg",
    format: "image",
    author: "陈凤钰 丁奕天 严浩 张尧毓",
    summary: "回顾辉煌岁月，展现《人民画报》封面75年来的相关数据，通过数据可视化展现时代变迁。",
    tags: ["图片作品", "人民画报", "2301"]
  },
  {
    id: "2301-08",
    grade: "2301",
    title: "巾帼释缚",
    subtitle: "延安时期对于党的妇女解放思想的研究——以《中国妇女》（1935-1941）为例",
    genre: "数据长图",
    medium: "中国妇女",
    topic: "新闻史专题",
    period: "1935-1941",
    thumb: "assets/works/2301/08-work.jpg",
    original: "originals/2301/08-work.jpg",
    format: "image",
    author: "李思睿 黄奕昕 黄婷婷 李章怡 杜筱旭",
    summary: "已收录图片版作品，题名、作者与主题说明可在后续整理中补充。",
    tags: ["图片作品", "妇女报刊", "2301"]
  },
  {
    id: "2301-09",
    grade: "2301",
    title: "岂曰无衣？与子同袍",
    subtitle: "《新华日报》（1938-1945）统一战线动员群众可视化分析",
    genre: "数据海报",
    medium: "新华日报",
    topic: "报刊史",
    period: "1938-1945",
    thumb: "assets/works/2301/09-xinhuaribaotongyizhanxian.jpg",
    original: "originals/2301/09-xinhuaribao.pdf",
    format: "pdf",
    author: "张鑫悦 穆思柠 韩敬滢 陈乐乐 王晗清",
    summary: "围绕《新华日报》展开的新闻史可视化作品，当前提供 PDF 原件入口。",
    tags: ["新华日报", "PDF作品", "报刊史"]
  },
  {
    id: "2301-10",
    grade: "2301",
    title: "历史长河中的握手",
    subtitle: "75年来中国的“外交朋友圈”日志（1949-2024）",
    genre: "数据长图",
    medium: "人民日报",
    topic: "新闻史专题",
    period: "1949-2024",
    thumb: "assets/works/2301/10-work.jpg",
    original: "originals/2301/10-work.jpg",
    format: "image",
    author: "张笑雲 张婧 张冉 张少敏 张昕辰",
    summary: "已收录图片版作品，题名、作者与主题说明可在后续整理中补充。",
    tags: ["图片作品", "大国外交", "2301"]
  },
  {
    id: "2301-11",
    grade: "2301",
    title: "吹梦到西洲",
    subtitle: "《人民日报》对西部大开发报道的可视化分析",
    genre: "数据海报",
    medium: "人民日报",
    topic: "区域发展",
    period: "1999-2024",
    thumb: "assets/works/2301/11-chuimengdaoxizhou.jpg",
    original: "originals/2301/11-western-development.pdf",
    format: "pdf",
    author: "赵艺雯 张子涵 张欣彤 张钰婧",
    summary: "以西部大开发相关报道为研究对象，呈现国家战略与区域传播议题。此作品还曾获第四届新视听融合创新创意大赛入围。",
    tags: ["西部大开发", "区域发展", "PDF作品"]
  },
  {
    id: "2301-12",
    grade: "2301",
    title: "高原模范风，拂抗日神州",
    subtitle: "《解放日报》延安时期医务模范报道可视化呈现（1941-1947）",
    genre: "数据海报",
    medium: "解放日报",
    topic: "抗战新闻史",
    period: "1941-1947",
    thumb: "assets/works/2301/12-jiefangribao-medical-models.jpg",
    original: "originals/2301/12-jiefangribao-medical-models.pdf",
    format: "pdf",
    author: "张大磊 李湘 王文坛 周亦楠 钟欣燕",
    summary: "聚焦延安时期医务模范报道，呈现抗战语境中的典型人物与新闻叙事。",
    tags: ["解放日报", "延安时期", "医务模范"]
  },
  { 
    id: "ss-01",
    grade: "硕士研究生",
    title: "做好“经师”成为“人师”",
    subtitle: "方汉奇先生与他的弟子们",
    genre: "数据海报",
    medium: "人物",
    topic: "学者",
    period: "1948-2024",
    thumb: "assets/works/硕士研究生/01-fanghanqidizi.jpeg",
    original: "originals/硕士研究生/01-fanghanqidizi.pdf",
    format: "pdf",
    author: "姚怡文 魏康乐 李柄科 王意帆 刘浩志",
    summary: "方汉奇先生是新中国第一代新闻史学者，也是新中国新闻学重要的奠基人和开拓者。",
    tags: ["大先生", "方汉奇", "新闻史学家"]
  }
];

const els = {
  grid: document.querySelector("#workGrid"),
  classGrid: document.querySelector("#classGrid"),
  search: document.querySelector("#searchInput"),
  searchSubmit: document.querySelector(".search-submit"),
  grade: document.querySelector("#gradeFilter"),
  genre: document.querySelector("#genreFilter"),
  medium: document.querySelector("#mediumFilter"),
  topic: document.querySelector("#topicFilter"),
  resultLine: document.querySelector(".result-line"),
  resultCount: document.querySelector("#resultCount"),
  reset: document.querySelector("#resetFilters"),
  statsBand: document.querySelector(".stats-band"),
  totalCount: document.querySelector("#totalCount"),
  gradeCount: document.querySelector("#gradeCount"),
  genreCount: document.querySelector("#genreCount"),
  viewer: document.querySelector("#viewer"),
  closeViewer: document.querySelector("#closeViewer"),
  viewerGrade: document.querySelector("#viewerGrade"),
  viewerTitle: document.querySelector("#viewerTitle"),
  viewerDesc: document.querySelector("#viewerDesc"),
  viewerTags: document.querySelector("#viewerTags"),
  viewerFrame: document.querySelector("#viewerFrame"),
  openOriginal: document.querySelector("#openOriginal")
};

const filters = [els.grade, els.genre, els.medium, els.topic];
let cardObserver;
let cardsRevealArmed = false;
let scrollRevealWatcherStarted = false;

function unique(key) {
  return [...new Set(works.map((work) => work[key]).filter(Boolean))].sort((a, b) => a.localeCompare(b, "zh-CN"));
}

function populateSelect(select, label, values) {
  select.innerHTML = `<option value="">全部${label}</option>${values.map((value) => `<option value="${value}">${value}</option>`).join("")}`;
}

function updateFilterLabels() {
  filters.forEach((select) => {
    const labelText = select.value || select.closest("label").dataset.defaultLabel;
    select.closest("label").querySelector("span").textContent = labelText;
  });
}

function fullTitle(work) {
  return work.subtitle ? `${work.title}：${work.subtitle}` : work.title;
}

function textIndex(work) {
  return [work.title, work.subtitle, work.author, work.grade, work.genre, work.medium, work.topic, work.period, work.summary, ...work.tags]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
}

function getFilteredWorks() {
  const keyword = els.search.value.trim().toLowerCase();
  return works.filter((work) => {
    const matchesKeyword = !keyword || textIndex(work).includes(keyword);
    return (
      matchesKeyword &&
      (!els.grade.value || work.grade === els.grade.value) &&
      (!els.genre.value || work.genre === els.genre.value) &&
      (!els.medium.value || work.medium === els.medium.value) &&
      (!els.topic.value || work.topic === els.topic.value)
    );
  });
}

function renderThumb(work) {
  if (work.thumb) {
    return `<img src="${work.thumb}" alt="${work.title}作品预览" loading="lazy">`;
  }

  const label = work.format === "link" ? "LINK" : "PDF";
  const note = work.format === "link" ? "外部链接待替换" : "点击查看原件";
  return `<div class="placeholder"><strong>${label}</strong><span>${work.medium}<br>${note}</span></div>`;
}

function renderCards(list) {
  els.resultCount.textContent = `共找到 ${list.length} 件作品`;
  if (!list.length) {
    els.grid.innerHTML = `<article class="work-card"><div class="work-body"><h3>没有匹配作品</h3><p>换一个关键词或重置筛选试试？</p></div></article>`;
    prepareCardReveal();
    return;
  }

  els.grid.innerHTML = list.map((work) => {
    const canOpen = work.original || work.externalUrl;
    const actionText = work.format === "link" ? "打开链接" : "查看作品";
    return `
      <article class="work-card" data-id="${work.id}">
        <div class="thumb">${renderThumb(work)}</div>
        <div class="work-body">
          <div class="meta-line">
            <span>${work.grade} 班</span>
            <span>${work.genre}</span>
            <span>${work.period}</span>
          </div>
          <h3>${fullTitle(work)}</h3>
          ${work.author ? `<p class="author-line">${work.author}</p>` : ""}
          <p>${work.summary}</p>
          <div class="tag-row">${work.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
          <div class="card-actions">
            <button class="button primary" type="button" data-open="${work.id}" ${canOpen ? "" : 'aria-disabled="true"'}>${canOpen ? actionText : "链接待替换"}</button>
          </div>
        </div>
      </article>
    `;
  }).join("");
  prepareCardReveal();
}

function renderClasses() {
  const grades = unique("grade");
  els.classGrid.innerHTML = grades.map((grade) => {
    const count = works.filter((work) => work.grade === grade).length;
    const genres = [...new Set(works.filter((work) => work.grade === grade).map((work) => work.genre))].join("、");
    return `<article class="class-card"><strong>${grade}</strong><span>${count} 件作品已入库</span><span>${genres}</span></article>`;
  }).join("");
}

function updateStats() {
  els.totalCount.textContent = works.length;
  els.gradeCount.textContent = unique("grade").length;
  els.genreCount.textContent = unique("genre").length;
}

function revealStatsOnScroll() {
  if (!els.statsBand) return;

  if (!("IntersectionObserver" in window)) {
    els.statsBand.classList.add("is-visible");
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      if (!entries.some((entry) => entry.isIntersecting)) return;
      els.statsBand.classList.add("is-visible");
      observer.disconnect();
    },
    { threshold: 0.18 }
  );

  observer.observe(els.statsBand);
}

function observeCards() {
  const cards = [...document.querySelectorAll(".work-card")];
  if (!cards.length) return;

  if (!("IntersectionObserver" in window)) {
    els.resultLine.classList.add("is-visible");
    cards.forEach((card) => card.classList.add("is-visible"));
    return;
  }

  if (cardObserver) cardObserver.disconnect();
  els.resultLine.classList.remove("is-visible");
  cardObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        els.resultLine.classList.add("is-visible");
        entry.target.classList.add("is-visible");
        cardObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -10% 0px" }
  );

  cards.forEach((card) => cardObserver.observe(card));
}

function prepareCardReveal() {
  if (cardsRevealArmed || window.scrollY > 8) {
    cardsRevealArmed = true;
    els.resultLine.classList.add("is-visible");
    observeCards();
    return;
  }

  if (scrollRevealWatcherStarted) return;
  scrollRevealWatcherStarted = true;

  const revealAfterScroll = () => {
    if (cardsRevealArmed) return;
    if (window.scrollY <= 0) return;

    cardsRevealArmed = true;
    els.resultLine.classList.add("is-visible");
    observeCards();
    clearInterval(watcher);
  };

  const watcher = setInterval(revealAfterScroll, 120);
  window.addEventListener("scroll", revealAfterScroll, { passive: true });
}

function applyFilters() {
  renderCards(getFilteredWorks());
}

function setViewer(work) {
  els.viewerGrade.textContent = `${work.grade} 班 · ${work.genre} · ${work.medium}`;
  els.viewerTitle.textContent = fullTitle(work);
  els.viewerDesc.textContent = work.summary;
  els.viewerTags.innerHTML = work.tags.map((tag) => `<span class="tag">${tag}</span>`).join("");

  const target = work.externalUrl || work.original;
  els.openOriginal.href = target || "#";
  els.openOriginal.textContent = work.format === "link" ? "打开外部链接" : "打开原件";
  els.openOriginal.setAttribute("aria-disabled", target ? "false" : "true");

  if (work.format === "image" && target) {
    els.viewerFrame.innerHTML = `<img src="${target}" alt="${work.title}完整作品">`;
  } else if (target) {
    els.viewerFrame.innerHTML = `<iframe src="${target}" title="${work.title}原件预览"></iframe>`;
  } else {
    els.viewerFrame.innerHTML = `<div class="placeholder"><strong>LINK</strong><span>此作品链接待替换。请在 script.js 中为 ${work.id} 填入 externalUrl。</span></div>`;
  }

  els.viewer.showModal();
}

document.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-open]");
  if (!trigger || trigger.getAttribute("aria-disabled") === "true") return;
  const work = works.find((item) => item.id === trigger.dataset.open);
  if (work) setViewer(work);
});

els.closeViewer.addEventListener("click", () => els.viewer.close());
els.viewer.addEventListener("click", (event) => {
  if (event.target === els.viewer) els.viewer.close();
});

els.search.addEventListener("input", applyFilters);
els.searchSubmit.addEventListener("click", () => {
  applyFilters();
  document.querySelector("#collection").scrollIntoView({ behavior: "smooth", block: "start" });
});
filters.forEach((select) => select.addEventListener("change", applyFilters));
filters.forEach((select) => {
  select.closest("label").dataset.defaultLabel = select.closest("label").querySelector("span").textContent;
  select.addEventListener("change", updateFilterLabels);
});
els.reset.addEventListener("click", () => {
  els.search.value = "";
  filters.forEach((select) => {
    select.value = "";
  });
  updateFilterLabels();
  applyFilters();
});

populateSelect(els.grade, "年级", unique("grade"));
populateSelect(els.genre, "体裁", unique("genre"));
populateSelect(els.medium, "媒介", unique("medium"));
populateSelect(els.topic, "主题", unique("topic"));
updateFilterLabels();
updateStats();
revealStatsOnScroll();
renderClasses();
applyFilters();
