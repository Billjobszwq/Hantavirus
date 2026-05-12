window.OUTBREAK_DATA = {
  meta: {
    outbreakId: "mv-hondius-andes-hantavirus-2026",
    outbreakName: {
      zh: "MV Hondius 邮轮相关安第斯汉坦病毒事件",
      en: "MV Hondius Andes Hantavirus Cluster"
    },
    lastUpdatedAt: "2026-05-13T01:05:00+08:00",
    lastUpdatedDate: "2026-05-13",
    timezone: "Asia/Shanghai",
    scopeNote: {
      zh: "主看板口径按MV Hondius事件统计：病例按所属国家（国籍）归集；南非等治疗地在备注中体现。",
      en: "Main dashboard scope is limited to the MV Hondius cluster: cases are grouped by affected person's country (nationality); treatment locations such as South Africa are shown in notes."
    }
  },
  summary: {
    totalReported: 11,
    confirmed: 9,
    probable: 2,
    deaths: 3,
    confirmedDeaths: 2,
    probableDeaths: 1
  },
  continents: [
    { code: "GLOBAL", zh: "全球", en: "Global" },
    { code: "EU", zh: "欧洲", en: "Europe" },
    { code: "NA", zh: "北美洲", en: "North America" },
    { code: "AS", zh: "亚洲", en: "Asia" },
    { code: "AF", zh: "非洲", en: "Africa" },
    { code: "SA", zh: "南美洲", en: "South America" },
    { code: "OC", zh: "大洋洲", en: "Oceania" }
  ],
  countries: [
    {
      code: "NL",
      flag: "🇳🇱",
      countryZh: "荷兰",
      countryEn: "Netherlands",
      continentCode: "EU",
      continentZh: "欧洲",
      continentEn: "Europe",
      lat: 52.1326,
      lng: 5.2913,
      confirmed: 2,
      probable: 1,
      deaths: 2,
      confirmedDeaths: 1,
      probableDeaths: 1,
      lastUpdate: "2026-05-11",
      notes: {
        zh: "2例死亡（1例确诊死亡+1例可能死亡）+1例确诊在治（船医）。",
        en: "Two deaths (1 confirmed fatality + 1 probable fatality) plus one confirmed living case (ship doctor)."
      },
      sourceIds: ["afp-2026-05-11", "who-don600-2026-05-08"]
    },
    {
      code: "GB",
      flag: "🇬🇧",
      countryZh: "英国",
      countryEn: "United Kingdom",
      continentCode: "EU",
      continentZh: "欧洲",
      continentEn: "Europe",
      lat: 55.3781,
      lng: -3.436,
      confirmed: 2,
      probable: 1,
      deaths: 0,
      confirmedDeaths: 0,
      probableDeaths: 0,
      lastUpdate: "2026-05-11",
      notes: {
        zh: "2例确诊（1例南非ICU，1例船上向导）+1例可能病例。",
        en: "Two confirmed cases (one in ICU in South Africa, one ship guide) plus one probable case."
      },
      sourceIds: ["afp-2026-05-11", "who-don600-2026-05-08"]
    },
    {
      code: "DE",
      flag: "🇩🇪",
      countryZh: "德国",
      countryEn: "Germany",
      continentCode: "EU",
      continentZh: "欧洲",
      continentEn: "Europe",
      lat: 51.1657,
      lng: 10.4515,
      confirmed: 1,
      probable: 0,
      deaths: 1,
      confirmedDeaths: 1,
      probableDeaths: 0,
      lastUpdate: "2026-05-11",
      notes: {
        zh: "1例死亡，尸检样本后续证实安第斯病毒。",
        en: "One fatal case; post-mortem sample later confirmed Andes virus infection."
      },
      sourceIds: ["afp-2026-05-11", "who-don600-2026-05-08"]
    },
    {
      code: "CH",
      flag: "🇨🇭",
      countryZh: "瑞士",
      countryEn: "Switzerland",
      continentCode: "EU",
      continentZh: "欧洲",
      continentEn: "Europe",
      lat: 46.8182,
      lng: 8.2275,
      confirmed: 1,
      probable: 0,
      deaths: 0,
      confirmedDeaths: 0,
      probableDeaths: 0,
      lastUpdate: "2026-05-11",
      notes: {
        zh: "1例确诊，已隔离治疗。",
        en: "One confirmed case, isolated and treated."
      },
      sourceIds: ["afp-2026-05-11", "who-don600-2026-05-08"]
    },
    {
      code: "FR",
      flag: "🇫🇷",
      countryZh: "法国",
      countryEn: "France",
      continentCode: "EU",
      continentZh: "欧洲",
      continentEn: "Europe",
      lat: 46.2276,
      lng: 2.2137,
      confirmed: 1,
      probable: 0,
      deaths: 0,
      confirmedDeaths: 0,
      probableDeaths: 0,
      lastUpdate: "2026-05-11",
      notes: {
        zh: "回国转运中出现症状并检测阳性。",
        en: "Developed symptoms during repatriation and later tested positive."
      },
      sourceIds: ["afp-2026-05-11", "ap-2026-05-10"]
    },
    {
      code: "US",
      flag: "🇺🇸",
      countryZh: "美国",
      countryEn: "United States",
      continentCode: "NA",
      continentZh: "北美洲",
      continentEn: "North America",
      lat: 39.8283,
      lng: -98.5795,
      confirmed: 1,
      probable: 0,
      deaths: 0,
      confirmedDeaths: 0,
      probableDeaths: 0,
      lastUpdate: "2026-05-10",
      notes: {
        zh: "17名撤离人员中1例轻度PCR阳性。",
        en: "One of 17 repatriated passengers tested mildly PCR-positive."
      },
      sourceIds: ["afp-2026-05-11", "ap-2026-05-10"]
    },
    {
      code: "ES",
      flag: "🇪🇸",
      countryZh: "西班牙",
      countryEn: "Spain",
      continentCode: "EU",
      continentZh: "欧洲",
      continentEn: "Europe",
      lat: 40.4637,
      lng: -3.7492,
      confirmed: 1,
      probable: 0,
      deaths: 0,
      confirmedDeaths: 0,
      probableDeaths: 0,
      lastUpdate: "2026-05-12",
      notes: {
        zh: "1例撤离乘客阳性（马德里军医院隔离）。",
        en: "One evacuated passenger tested positive (quarantined in a Madrid military hospital)."
      },
      sourceIds: ["ap-2026-05-12"]
    }
  ],
  timeline: [
    {
      date: "2026-05-12",
      countryCode: "ES",
      countryZh: "西班牙",
      countryEn: "Spain",
      confirmedDelta: 1,
      probableDelta: 0,
      deathsDelta: 0,
      description: {
        zh: "西班牙新增1例确诊；WHO口径更新为11例（9确诊+2可能），累计死亡3例。",
        en: "Spain added one confirmed case; WHO updated totals to 11 cases (9 confirmed + 2 probable), with 3 deaths."
      },
      sourceIds: ["ap-2026-05-12", "who-speech-2026-05-12"]
    },
    {
      date: "2026-05-11",
      countryCode: "FR",
      countryZh: "法国",
      countryEn: "France",
      confirmedDelta: 1,
      probableDelta: 0,
      deathsDelta: 0,
      description: {
        zh: "法国新增1例确诊病例。",
        en: "France added one confirmed case."
      },
      sourceIds: ["afp-2026-05-11"]
    },
    {
      date: "2026-05-10",
      countryCode: "US",
      countryZh: "美国",
      countryEn: "United States",
      confirmedDelta: 1,
      probableDelta: 0,
      deathsDelta: 0,
      description: {
        zh: "美国撤离乘客中出现1例轻度PCR阳性。",
        en: "One repatriated U.S. passenger tested mildly PCR-positive."
      },
      sourceIds: ["afp-2026-05-11", "ap-2026-05-10"]
    },
    {
      date: "2026-05-08",
      countryCode: "DE",
      countryZh: "德国",
      countryEn: "Germany",
      confirmedDelta: 1,
      probableDelta: 0,
      deathsDelta: 0,
      description: {
        zh: "德国籍死亡病例的尸检样本确认安第斯病毒后，德国口径转为确诊病例。",
        en: "After post-mortem confirmation of Andes virus, the German fatal case was reclassified as confirmed."
      },
      sourceIds: ["who-don600-2026-05-08", "ap-timeline-2026-05-08"]
    },
    {
      date: "2026-05-08",
      countryCode: "WHO",
      countryZh: "多国（WHO）",
      countryEn: "Multi-country (WHO)",
      confirmedDelta: 6,
      probableDelta: 2,
      deathsDelta: 3,
      description: {
        zh: "WHO DON600：截至5月8日累计8例（6确诊+2可能），死亡3例。",
        en: "WHO DON600: cumulative 8 cases as of May 8 (6 confirmed + 2 probable), with 3 deaths."
      },
      sourceIds: ["who-don600-2026-05-08"]
    },
    {
      date: "2026-05-06",
      countryCode: "NL",
      countryZh: "荷兰",
      countryEn: "Netherlands",
      confirmedDelta: 1,
      probableDelta: 0,
      deathsDelta: 0,
      description: {
        zh: "船医病例PCR确诊，后转运至荷兰隔离治疗。",
        en: "Ship doctor case confirmed by PCR and then evacuated to the Netherlands for isolation care."
      },
      sourceIds: ["who-don600-2026-05-08", "afp-2026-05-11"]
    },
    {
      date: "2026-05-06",
      countryCode: "GB",
      countryZh: "英国",
      countryEn: "United Kingdom",
      confirmedDelta: 1,
      probableDelta: 0,
      deathsDelta: 0,
      description: {
        zh: "英国籍船上向导病例PCR确诊。",
        en: "British ship guide case confirmed by PCR."
      },
      sourceIds: ["who-don600-2026-05-08", "afp-2026-05-11"]
    },
    {
      date: "2026-05-05",
      countryCode: "CH",
      countryZh: "瑞士",
      countryEn: "Switzerland",
      confirmedDelta: 1,
      probableDelta: 0,
      deathsDelta: 0,
      description: {
        zh: "瑞士返国乘客确诊阳性。",
        en: "Swiss repatriated passenger confirmed positive."
      },
      sourceIds: ["who-don600-2026-05-08", "afp-2026-05-11"]
    },
    {
      date: "2026-05-04",
      countryCode: "NL",
      countryZh: "荷兰",
      countryEn: "Netherlands",
      confirmedDelta: 1,
      probableDelta: 0,
      deathsDelta: 1,
      description: {
        zh: "荷兰籍女性（病例2）死后PCR确诊。",
        en: "Dutch female patient (Case 2) was posthumously confirmed by PCR."
      },
      sourceIds: ["who-don600-2026-05-08", "ap-timeline-2026-05-08"]
    },
    {
      date: "2026-05-02",
      countryCode: "GB",
      countryZh: "英国",
      countryEn: "United Kingdom",
      confirmedDelta: 1,
      probableDelta: 0,
      deathsDelta: 0,
      description: {
        zh: "英国籍重症病例在南非检测确诊。",
        en: "A critically ill British passenger was laboratory-confirmed in South Africa."
      },
      sourceIds: ["who-don600-2026-05-08", "afp-2026-05-11"]
    },
    {
      date: "2026-05-02",
      countryCode: "DE",
      countryZh: "德国",
      countryEn: "Germany",
      confirmedDelta: 0,
      probableDelta: 0,
      deathsDelta: 1,
      description: {
        zh: "德国籍女性在船上死亡；该死亡在后续实验室结果回报后纳入确诊口径。",
        en: "A German female passenger died onboard; this fatality was moved into confirmed classification after later laboratory results."
      },
      sourceIds: ["who-don600-2026-05-08", "afp-2026-05-11", "ap-timeline-2026-05-08"]
    },
    {
      date: "2026-04-11",
      countryCode: "NL",
      countryZh: "荷兰",
      countryEn: "Netherlands",
      confirmedDelta: 0,
      probableDelta: 1,
      deathsDelta: 1,
      description: {
        zh: "荷兰籍男性（病例1）在船上死亡，未做病原学检测，归为可能病例。",
        en: "A Dutch male (Case 1) died onboard without microbiological testing and was classified as probable."
      },
      sourceIds: ["who-don600-2026-05-08", "afp-2026-05-11", "ap-timeline-2026-05-08"]
    }
  ],
  series: {
    dates: [
      "2026-04-11",
      "2026-05-02",
      "2026-05-04",
      "2026-05-05",
      "2026-05-06",
      "2026-05-08",
      "2026-05-10",
      "2026-05-11",
      "2026-05-12"
    ],
    global: {
      confirmed: [0, 1, 2, 3, 5, 6, 7, 8, 9],
      probable: [1, 1, 1, 1, 1, 2, 2, 2, 2],
      deaths: [1, 2, 3, 3, 3, 3, 3, 3, 3],
      confirmedDeaths: [0, 0, 1, 1, 1, 2, 2, 2, 2]
    },
    byCountry: {
      NL: {
        confirmed: [0, 0, 1, 1, 2, 2, 2, 2, 2],
        probable: [1, 1, 1, 1, 1, 1, 1, 1, 1],
        deaths: [1, 1, 2, 2, 2, 2, 2, 2, 2],
        confirmedDeaths: [0, 0, 1, 1, 1, 1, 1, 1, 1]
      },
      GB: {
        confirmed: [0, 1, 1, 1, 2, 2, 2, 2, 2],
        probable: [0, 0, 0, 0, 0, 1, 1, 1, 1],
        deaths: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        confirmedDeaths: [0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      DE: {
        confirmed: [0, 0, 0, 0, 0, 1, 1, 1, 1],
        probable: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        deaths: [0, 1, 1, 1, 1, 1, 1, 1, 1],
        confirmedDeaths: [0, 0, 0, 0, 0, 1, 1, 1, 1]
      },
      CH: {
        confirmed: [0, 0, 0, 1, 1, 1, 1, 1, 1],
        probable: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        deaths: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        confirmedDeaths: [0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      FR: {
        confirmed: [0, 0, 0, 0, 0, 0, 0, 1, 1],
        probable: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        deaths: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        confirmedDeaths: [0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      US: {
        confirmed: [0, 0, 0, 0, 0, 0, 1, 1, 1],
        probable: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        deaths: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        confirmedDeaths: [0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      ES: {
        confirmed: [0, 0, 0, 0, 0, 0, 0, 0, 1],
        probable: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        deaths: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        confirmedDeaths: [0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    }
  },
  watchlist: [
    {
      date: "2026-05-07",
      title: {
        zh: "以色列媒体报道1例旅行相关汉坦病毒个案（东欧旅行史）",
        en: "Israeli media reported one travel-related hantavirus case (history of travel in Eastern Europe)"
      },
      note: {
        zh: "该个案口径与MV Hondius安第斯病毒聚集事件不同，当前未纳入本看板主统计。",
        en: "This case appears to be outside the MV Hondius Andes-virus cluster definition and is not included in this dashboard's main totals."
      },
      sourceIds: ["jpost-2026-05-07", "toi-2026-05-07"]
    }
  ],
  news: [
    {
      date: "2026-05-12",
      title: {
        zh: "WHO总干事：11例均来自MV Hondius，9例确诊、2例可能",
        en: "WHO DG: All 11 cases are linked to MV Hondius, including 9 confirmed and 2 probable"
      },
      summary: {
        zh: "在马德里简报中，WHO称暂未出现更大规模扩散信号，但未来几周仍可能新增病例。",
        en: "At the Madrid briefing, WHO said there is no sign of a larger outbreak at present, while additional cases remain possible in coming weeks."
      },
      sourceId: "who-speech-2026-05-12"
    },
    {
      date: "2026-05-12",
      title: {
        zh: "AP：西班牙撤离乘客新增1例阳性",
        en: "AP: Spain reports one newly positive evacuated passenger"
      },
      summary: {
        zh: "西班牙卫生部门通报新增病例，WHO同日口径仍为9例实验室确诊。",
        en: "Spanish authorities reported a new case while WHO's same-day count remained at 9 laboratory-confirmed cases."
      },
      sourceId: "ap-2026-05-12"
    },
    {
      date: "2026-05-11",
      title: {
        zh: "AFP：按国籍统计病例，法国和美国出现新增确诊",
        en: "AFP: Nationality-based case roundup with newly confirmed cases in France and the U.S."
      },
      summary: {
        zh: "AFP汇总多国官方通报，列出荷兰、英国、德国、瑞士、法国、美国、西班牙等病例状态。",
        en: "AFP compiled official country updates across the Netherlands, UK, Germany, Switzerland, France, U.S., Spain, and others."
      },
      sourceId: "afp-2026-05-11"
    },
    {
      date: "2026-05-10",
      title: {
        zh: "AP：撤离启动后，美方和法方分别出现新增病例",
        en: "AP: New cases emerged in U.S. and French cohorts after evacuation began"
      },
      summary: {
        zh: "MV Hondius在特内里费岛执行分批撤离，多国包机和医疗系统联动接收。",
        en: "Evacuation operations began in Tenerife, with multiple countries coordinating charter flights and medical intake."
      },
      sourceId: "ap-2026-05-10"
    },
    {
      date: "2026-05-08",
      title: {
        zh: "WHO DON600：发布首轮结构化多国病例清单",
        en: "WHO DON600: First structured multi-country case listing released"
      },
      summary: {
        zh: "截至5月8日，WHO报告8例（6确诊+2可能）和3例死亡，并给出统一病例定义。",
        en: "As of May 8, WHO reported 8 cases (6 confirmed + 2 probable) and 3 deaths, with harmonized case definitions."
      },
      sourceId: "who-don600-2026-05-08"
    },
    {
      date: "2026-05-08",
      title: {
        zh: "CDC HAN00528：美国临床与实验室预警发布",
        en: "CDC HAN00528: U.S. clinical and laboratory advisory published"
      },
      summary: {
        zh: "CDC判断美国公众广泛传播风险极低，但要求医疗系统强化输入病例识别与实验室生物安全。",
        en: "CDC assessed broad U.S. community risk as extremely low while emphasizing imported case recognition and laboratory biosafety."
      },
      sourceId: "cdc-han-2026-05-08"
    },
    {
      date: "2026-05-06",
      title: {
        zh: "ECDC：发布欧洲风险评估",
        en: "ECDC: European risk assessment published"
      },
      summary: {
        zh: "ECDC指出事件快速演变，强调ANDV传播效率低、欧洲无自然宿主背景。",
        en: "ECDC described a fast-evolving event and highlighted low transmission efficiency plus no natural reservoir context in Europe."
      },
      sourceId: "ecdc-2026-05-06"
    },
    {
      date: "2026-05-04",
      title: {
        zh: "WHO DON599：首次对该邮轮聚集事件发出正式通报",
        en: "WHO DON599: First official outbreak notice on this cruise-ship cluster"
      },
      summary: {
        zh: "首次通报口径为7例（2确诊+5疑似）并报告3例死亡。",
        en: "The first notice reported 7 cases (2 confirmed + 5 suspected) and 3 deaths."
      },
      sourceId: "who-don599-2026-05-04"
    }
  ],
  sources: [
    {
      id: "who-speech-2026-05-12",
      publisher: "WHO",
      title: "WHO Director-General's opening remarks at the media briefing on hantavirus – 12 May 2026",
      date: "2026-05-12",
      url: "https://www.who.int/news-room/speeches/item/who-director-general-s-opening-remarks-at-the-media-briefing-on-hantavirus---12-may-2026"
    },
    {
      id: "ap-2026-05-12",
      publisher: "AP",
      title: "Spain reports new hantavirus case in passenger from cruise ship as confirmed infections grow to 9",
      date: "2026-05-12",
      url: "https://apnews.com/article/hantavirus-outbreak-hondius-cruise-ship-ac42357c5c3ae1694a93f1d43ba38bdb"
    },
    {
      id: "afp-2026-05-11",
      publisher: "AFP (republished by Digital Journal)",
      title: "Hantavirus: confirmed cases by nationality",
      date: "2026-05-11",
      url: "https://www.digitaljournal.com/world/hantavirus-confirmed-cases-by-nationality/article"
    },
    {
      id: "ap-2026-05-10",
      publisher: "AP",
      title: "Evacuated cruise ship passenger tests positive for hantavirus as travelers fly home",
      date: "2026-05-10",
      url: "https://apnews.com/article/hantavirus-cruise-ship-hondius-tenerife-1c43c66d2b0555cf946d9e57fc65f1d4"
    },
    {
      id: "who-don600-2026-05-08",
      publisher: "WHO",
      title: "Hantavirus cluster linked to cruise ship travel, Multi-country (DON600)",
      date: "2026-05-08",
      url: "https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON600"
    },
    {
      id: "cdc-han-2026-05-08",
      publisher: "CDC",
      title: "2026 Multi-country Hantavirus Cluster Linked to Cruise Ship (HAN00528)",
      date: "2026-05-08",
      url: "https://www.cdc.gov/han/php/notices/han00528.html"
    },
    {
      id: "ecdc-2026-05-06",
      publisher: "ECDC",
      title: "Hantavirus-associated cluster of illness on a cruise ship: assessment",
      date: "2026-05-06",
      url: "https://www.ecdc.europa.eu/en/publications-data/hantavirus-associated-cluster-illness-cruise-ship-ecdc-assessment-and"
    },
    {
      id: "who-don599-2026-05-04",
      publisher: "WHO",
      title: "Hantavirus cluster linked to cruise ship travel, Multi-country (DON599)",
      date: "2026-05-04",
      url: "https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON599"
    },
    {
      id: "ap-timeline-2026-05-08",
      publisher: "AP",
      title: "A timeline of the cruise ship hantavirus outbreak",
      date: "2026-05-08",
      url: "https://apnews.com/article/hantavirus-cruise-ship-timeline-events-b9eb3985b547758b1e42dbab6ceb3887"
    },
    {
      id: "jpost-2026-05-07",
      publisher: "The Jerusalem Post",
      title: "First hantavirus case diagnosed in Israel after trip to Eastern Europe",
      date: "2026-05-07",
      url: "https://www.jpost.com/israel-news/article-895478"
    },
    {
      id: "toi-2026-05-07",
      publisher: "The Times of Israel",
      title: "Health Ministry reports no current hantavirus cases in Israel",
      date: "2026-05-07",
      url: "https://www.timesofisrael.com/health-ministry-reports-no-current-hantavirus-cases-in-israel/"
    }
  ]
};
