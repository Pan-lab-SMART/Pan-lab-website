---
title: Join Us
nav:
  order: 6
  tooltip: Career opportunities
---

<div class="lang-toggle" style="text-align:right; margin-bottom: 2rem; font-size: 0.9rem;">
  <span class="lang-label" data-lang="en" style="cursor:pointer; padding:4px 10px; border-radius:4px; background:var(--primary); color:var(--background); font-weight:600;">EN</span>
  <span class="lang-label" data-lang="cn" style="cursor:pointer; padding:4px 10px; border-radius:4px; background:var(--light-gray); color:var(--text); font-weight:400;">中文</span>
</div>

<script>
(function(){
  function setLang(lang) {
    document.querySelectorAll('[data-lang]').forEach(function(el) {
      var show = el.getAttribute('data-lang') === lang;
      el.style.display = show ? '' : 'none';
    });
    document.querySelectorAll('.lang-label').forEach(function(el) {
      var isActive = el.getAttribute('data-lang') === lang;
      el.style.background = isActive ? 'var(--primary)' : 'var(--light-gray)';
      el.style.color = isActive ? 'var(--background)' : 'var(--text)';
      el.style.fontWeight = isActive ? '600' : '400';
    });
    localStorage.setItem('panlab-lang', lang);
  }
  document.querySelectorAll('.lang-label').forEach(function(btn) {
    btn.addEventListener('click', function() {
      setLang(this.getAttribute('data-lang'));
    });
  });
  var saved = localStorage.getItem('panlab-lang') || 'en';
  setLang(saved);
})();
</script>

<!-- ========== ENGLISH VERSION ========== -->
<div data-lang="en" markdown="1">

# <i class="icon fa-solid fa-user-plus"></i> Join Us

The Pan Lab at Shenzhen Medical Academy of Research and Translation (SMART) is currently recruiting postdoctoral researchers and research assistants.

{% include section.html %}

## About the PI

**Dr. Xiaojing Pan**

Our research group employs structural biology, biochemistry, physiology, and medicinal chemistry to investigate the working mechanisms of membrane proteins related to neurodevelopment and related diseases, as well as to perform drug screening and structure-informed optimization.

Dr. Xiaojing Pan has long been dedicated to the structural and mechanistic study of membrane proteins, with extensive experience. She has published **5 first/co-first author papers in Science**, and **8 co-corresponding author papers** in journals such as PNAS and Nature Communications.

Our group fosters a supportive research environment with individualized mentorship. We warmly invite motivated young researchers to explore the world of science with us.

{% include section.html %}

## Open Positions

{% include section.html %}

### 01 Postdoctoral Researcher (1 position)

**Responsibilities**

1. Conduct independent research under the guidance of the PI;
2. Independently or collaboratively apply for domestic and international research grants;
3. Assist in supervising PhD students and research assistants.

**Requirements**

1. PhD degree from a first-class domestic or international research institution;
2. Background in neuroscience, with experience in electrophysiology (brain slice recordings, single-cell recordings, single-channel recordings, etc.), learning and memory behavioral assays in mice. Priority given to candidates with strong independent research capability and a record of first-author or corresponding-author publications;
3. Proficient in oral and written academic communication in English;
4. Strong communication and teamwork skills, with excellent academic ethics.

**Benefits**

1. Competitive salary and benefits, negotiable based on qualifications and achievements;
2. World-class research environment, sufficient funding support, and excellent training opportunities;
3. Support for applying to national talent programs and research grants (China Postdoctoral Science Foundation, NSFC, etc.);
4. Support for provincial/municipal postdoctoral support programs (e.g., Guangdong Provincial Overseas Postdoctoral Talent Program, Shenzhen Postdoctoral On-station Living Allowance — subject to latest provincial/city policies);
5. Support for applying to SMART's Special Postdoctoral Funding Program. Awardees receive additional living allowances on top of base salary and government subsidies;
6. Annual health check-up and other benefits;
7. Talent housing or apartments available for eligible candidates;
8. Postdoctoral researchers may voluntarily choose to settle in Shenzhen; spouses and minor children may relocate with the researcher.

{% include section.html %}

### 02 Research Assistant (1 position)

**Responsibilities**

1. Complete assigned research tasks;
2. Qualified candidates may conduct independent research under the guidance of the PI.

**Requirements**

1. Master's degree or above, with a background in neuroscience, including electrophysiology (brain slice, single-cell, or single-channel recordings), or learning/memory behavioral assays in mice. Priority given to candidates with extensive lab experience;
2. Responsible, skilled, with strong teamwork and communication abilities;
3. Good English reading and writing skills.

**Benefits**

1. Competitive salary and benefits based on SMART's compensation system;
2. Outstanding performers may be recommended for graduate study programs.

{% include section.html %}

## Application Materials & Submission

### Materials

1. Complete personal CV in Chinese or English (PDF), including educational background, research experience and achievements, key technical skills, awards, research interests, and career goals;
2. Scanned copies of degree certificates and diploma verification reports;
3. Representative work (full texts of publications, patents, and books);
4. For postdoctoral applicants: please ask 2-3 referees to send recommendation letters directly to panxjlab@smart.org.cn (please indicate referee information in your email);
5. Other materials demonstrating research and work capabilities (e.g., award certificates, professional skill certificates, professional title certificates).

### How to Apply

Please send your application materials as PDF attachments to **panxjlab@smart.org.cn** (email subject: "Application for Postdoctoral/Research Assistant — Name — Major"). We will arrange interviews as soon as possible after reviewing your materials.

{%
  include button.html
  type="email"
  text="panxjlab@smart.org.cn"
  link="panxjlab@smart.org.cn"
%}

{% include section.html %}

### Additional Information

1. All application materials will be kept strictly confidential. Salary is negotiable;
2. This recruitment information remains valid until positions are filled.

{% include section.html dark=true %}

{%
  include button.html
  link="contact"
  text="Contact Us"
  icon="fa-solid fa-envelope"
  style="bare"
%}

</div>

<!-- ========== CHINESE VERSION ========== -->
<div data-lang="cn" style="display:none;" markdown="1">

# <i class="icon fa-solid fa-user-plus"></i> 加入我们

深圳医学科学院潘孝敬课题组现面向社会公开招聘博士后、科研助理。

{% include section.html %}

## 课题组长简介

**潘孝敬 博士**

课题组主要以结构生物学、生物化学、生理学和药物化学为实验手段，致力于研究神经发育和相关疾病的膜蛋白的工作机理，并针对其进行药物筛选和基于结构信息的优化。

潘孝敬博士长期专注于膜蛋白的结构与机理研究，具有丰富的经验，目前以第一/共一作者身份发表 Science 论文 5 篇，以共通讯作者身份发表 PNAS、Nature Communications 等 9 篇。

课题组会营造良好的科研氛围，因材施教，诚邀有志青年一起探索科研世界。

{% include section.html %}

## 招聘岗位

{% include section.html %}

### 01 博士后（1名）

**岗位职责**

1. 在课题组长指导下开展独立研究工作；
2. 独立或协助合作申请国内外科研项目；
3. 协助指导博士生和科研助理的科研工作。

**岗位要求**

1. 国内外知名高校或研究院所博士学位；
2. 神经科学方向，有电生理（脑片记录、单细胞记录、单通道记录等）、小鼠学习记忆行为学实验经验者优先；具有较强的独立科研能力，以第一作者或通讯作者身份发表过文章者优先；
3. 熟练掌握英语口头和书面学术交流；
4. 良好的沟通协调能力与团队合作精神，学术道德规范。

**福利待遇**

1. 有竞争力的薪酬待遇，根据个人资历和研究成就面议；
2. 世界一流的研究环境，充足的经费支持，优质的培训机会；
3. 支持申报国家人才计划和科研项目（中国博士后科学基金、国家自然科学基金等）；
4. 支持申报省、市博士后支持计划（如广东省海外博士后人才支持计划、深圳市在站博士后生活补贴等，以最新省、市政策为准）；
5. 支持申报深圳医学科学院特殊博士后资助计划，获资助者在基本薪酬和政府补贴基础上额外享受生活补贴；
6. 每年定期体检及其他福利；
7. 符合条件者可申请人才房或公寓；
8. 博士后研究人员可自愿选择落户深圳，未成年子女可随迁。

{% include section.html %}

### 02 科研助理（1名）

**岗位职责**

1. 完成分配的科研任务；
2. 表现优异者可推荐参加研究生学习项目。

**岗位要求**

1. 硕士及以上学历，神经科学方向，有电生理（脑片、单细胞或单通道记录）或小鼠学习记忆行为学实验经验者优先；具有丰富实验经验者优先；
2. 责任心强，实验技能熟练，有良好的团队合作和沟通能力；
3. 良好的中英文阅读和写作能力。

**福利待遇**

1. 根据深圳医学科学院薪酬制度提供有竞争力的薪酬待遇；
2. 表现优异者可推荐参加研究生学习项目。

{% include section.html %}

## 申请材料与提交

### 材料

1. 个人中英文简历（PDF），包含教育背景、科研经历和成果、关键实验技能、获奖情况、研究兴趣和职业规划；
2. 学历学位证书及学历认证报告扫描件；
3. 代表性成果（发表论文全文、专利、著作等）；
4. 博士后申请者：请邀请2-3位推荐人直接将推荐信发送至 panxjlab@smart.org.cn（请在邮件中注明推荐人信息）；
5. 其他能证明科研及工作能力的材料（如获奖证书、专业技能证书、职称证书等）。

### 联系方式

请将申请材料以 PDF 格式发送至 **panxjlab@smart.org.cn**（邮件主题："申请博士后/科研助理—姓名—专业"）。我们将在审核材料后尽快安排面试。

{%
  include button.html
  type="email"
  text="panxjlab@smart.org.cn"
  link="panxjlab@smart.org.cn"
%}

{% include section.html %}

### 其他说明

1. 所有申请材料将严格保密，薪酬面议；
2. 本招聘信息在岗位招满前有效。

{% include section.html dark=true %}

{%
  include button.html
  link="contact"
  text="联系我们"
  icon="fa-solid fa-envelope"
  style="bare"
%}

</div>
