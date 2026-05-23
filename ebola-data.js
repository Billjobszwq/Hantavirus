window.OUTBREAK_DATA = {
  "meta": {
    "outbreakId": "ebola-bundibugyo-drc-uganda-2026",
    "outbreakName": {
      "zh": "刚果（金）与乌干达本迪布焦病毒埃博拉事件",
      "en": "Bundibugyo Ebola Outbreak in DRC and Uganda"
    },
    "lastUpdatedAt": "2026-05-22T23:59:59+08:00",
    "lastUpdatedDate": "2026-05-22",
    "timezone": "Asia/Shanghai",
    "scopeNote": {
      "zh": "本看板以 WHO/CDC/ECDC 公开通报为主；“可能”口径用于承载未实验室确证但已通报的疑似/可能病例总量，后续会随官方复核动态回调。",
      "en": "This dashboard prioritizes WHO/CDC/ECDC bulletins. The 'probable' bucket is used to hold publicly reported non-laboratory-confirmed suspected/probable counts and may be revised as official verification progresses."
    },
    "externalBenchmarks": {
      "checkedAt": "2026-05-23T22:30:20+08:00",
      "items": [
        {
          "id": "who-don602-baseline",
          "name": {
            "zh": "WHO DON602 基线（5月16日）",
            "en": "WHO DON602 baseline (16 May)"
          },
          "url": "https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON602",
          "method": {
            "zh": "按 DON602 文本口径：DRC 246疑似、80死亡；乌干达2确诊（含1死亡）。",
            "en": "Narrative extraction from DON602: DRC 246 suspected and 80 deaths; Uganda 2 confirmed including 1 death."
          },
          "metrics": {
            "confirmed": 10,
            "probable": 246,
            "deaths": 81,
            "reportedDate": "2026-05-16"
          },
          "sourceIds": [
            "who-don602-2026-05-16",
            "who-pheic-2026-05-17"
          ]
        },
        {
          "id": "cdc-situation-2026-05-22",
          "name": {
            "zh": "CDC 情况通报（5月22日）",
            "en": "CDC situation bulletin (22 May)"
          },
          "url": "https://www.cdc.gov/ebola/situation-summary/index.html",
          "method": {
            "zh": "采用 CDC Current Situation（5月22日）总量：744疑似、83确诊、176疑似死亡；其中乌干达2例确诊（含1死亡）。",
            "en": "Uses CDC Current Situation totals dated 22 May: 744 suspected, 83 confirmed, 176 suspected deaths; including 2 confirmed Uganda cases with 1 death."
          },
          "metrics": {
            "suspected": 744,
            "confirmed": 83,
            "suspectedDeaths": 176,
            "ugandaConfirmed": 2,
            "ugandaDeaths": 1,
            "reportedDate": "2026-05-22"
          },
          "sourceIds": [
            "cdc-situation-2026-05-22",
            "who-ihr-temp-rec-2026-05-22"
          ]
        },
        {
          "id": "bnofeed-signal-2026-05-23",
          "name": {
            "zh": "BNOFeed 社交信号（5月23日）",
            "en": "BNOFeed social signal (23 May)"
          },
          "url": "https://x.com/BNOFeed",
          "method": {
            "zh": "BNOFeed 与 Reuters 报道乌干达新增3例（总确诊5）；该信号先纳入待核验，不直接改写 CDC/WHO 主口径总盘。",
            "en": "BNOFeed and Reuters report 3 new Uganda cases (5 total confirmed). This signal is tracked as pending verification and does not overwrite CDC/WHO primary totals yet."
          },
          "metrics": {
            "ugandaConfirmedSignal": 5,
            "reportedCasesSignal": 836,
            "reportedDeathsSignal": 186,
            "reportedDate": "2026-05-23"
          },
          "sourceIds": [
            "bnofeed-x-2026-05-23",
            "reuters-uganda-2026-05-23"
          ]
        }
      ]
    },
    "rawSyncAt": "2026-05-23T22:30:20+08:00",
    "dashboardDataDate": "2026-05-22"
  },
  "summary": {
    "totalReported": 827,
    "confirmed": 83,
    "probable": 744,
    "deaths": 176,
    "confirmedDeaths": 1,
    "probableDeaths": 175,
    "observed": 0
  },
  "continents": [
    {
      "code": "GLOBAL",
      "zh": "全球",
      "en": "Global"
    },
    {
      "code": "EU",
      "zh": "欧洲",
      "en": "Europe"
    },
    {
      "code": "NA",
      "zh": "北美洲",
      "en": "North America"
    },
    {
      "code": "AS",
      "zh": "亚洲",
      "en": "Asia"
    },
    {
      "code": "AF",
      "zh": "非洲",
      "en": "Africa"
    },
    {
      "code": "SA",
      "zh": "南美洲",
      "en": "South America"
    },
    {
      "code": "OC",
      "zh": "大洋洲",
      "en": "Oceania"
    }
  ],
  "countries": [
    {
      "code": "CD",
      "flag": "🇨🇩",
      "countryZh": "刚果民主共和国",
      "countryEn": "Democratic Republic of the Congo",
      "continentCode": "AF",
      "continentZh": "非洲",
      "continentEn": "Africa",
      "lat": -2.8797,
      "lng": 23.656,
      "confirmed": 81,
      "probable": 744,
      "deaths": 175,
      "confirmedDeaths": 0,
      "probableDeaths": 175,
      "lastUpdate": "2026-05-22",
      "notes": {
        "zh": "CDC 5月22日总量口径中，乌干达仍计2例确诊（含1死亡），其余病例按看板分配归入DRC；后续将随 WHO/CDC 国家级细化继续校准。",
        "en": "Under CDC totals dated 22 May, Uganda remains at 2 confirmed cases (including 1 death), with remaining burden allocated to DRC in this dashboard; allocations will be recalibrated as WHO/CDC publish finer country breakdowns."
      },
      "sourceIds": [
        "cdc-situation-2026-05-22",
        "who-ihr-temp-rec-2026-05-22",
        "ecdc-outbreak-2026-05-19"
      ],
      "observed": 0
    },
    {
      "code": "UG",
      "flag": "🇺🇬",
      "countryZh": "乌干达",
      "countryEn": "Uganda",
      "continentCode": "AF",
      "continentZh": "非洲",
      "continentEn": "Africa",
      "lat": 1.3733,
      "lng": 32.2903,
      "confirmed": 2,
      "probable": 0,
      "deaths": 1,
      "confirmedDeaths": 1,
      "probableDeaths": 0,
      "lastUpdate": "2026-05-22",
      "notes": {
        "zh": "官方总盘（CDC 5月22日）仍为2例确诊（含1死亡）；5月23日出现“乌干达新增3例”跨平台信号，已列入待核验。",
        "en": "Official roll-up (CDC 22 May) remains 2 confirmed cases with 1 death; a cross-platform signal on 23 May reports 3 additional Uganda cases and is tracked as pending verification."
      },
      "sourceIds": [
        "cdc-situation-2026-05-22",
        "who-ihr-temp-rec-2026-05-22",
        "reuters-uganda-2026-05-23"
      ],
      "observed": 0
    }
  ],
  "timeline": [
    {
      "date": "2026-05-23",
      "countryCode": "UG",
      "countryZh": "乌干达",
      "countryEn": "Uganda",
      "confirmedDelta": 0,
      "probableDelta": 0,
      "deathsDelta": 0,
      "observedDelta": 0,
      "description": {
        "zh": "Reuters 与 BNOFeed 报道乌干达新增3例（累计5例）信号，当前作为待核验项追踪，暂不改写 CDC/WHO 主口径总盘。",
        "en": "Reuters and BNOFeed report a signal of 3 additional Uganda cases (5 total); tracked as pending verification and not yet used to overwrite CDC/WHO primary totals."
      },
      "sourceIds": [
        "reuters-uganda-2026-05-23",
        "bnofeed-x-2026-05-23"
      ]
    },
    {
      "date": "2026-05-22",
      "countryCode": "MC",
      "countryZh": "多国（DRC/UG）",
      "countryEn": "Multi-country (DRC/UG)",
      "confirmedDelta": 32,
      "probableDelta": 169,
      "deathsDelta": 28,
      "observedDelta": 0,
      "description": {
        "zh": "CDC 5月22日总量更新为744疑似、83确诊、176疑似死亡，并指出新增病例已涉及南基伍。",
        "en": "CDC updated totals on 22 May to 744 suspected, 83 confirmed, and 176 suspected deaths, with newly confirmed spread to Sud-Kivu."
      },
      "sourceIds": [
        "cdc-situation-2026-05-22"
      ]
    },
    {
      "date": "2026-05-21",
      "countryCode": "MC",
      "countryZh": "多国（DRC/UG）",
      "countryEn": "Multi-country (DRC/UG)",
      "confirmedDelta": 17,
      "probableDelta": -66,
      "deathsDelta": 13,
      "observedDelta": 0,
      "description": {
        "zh": "CDC 5月21日口径更新为575疑似、51确诊、148疑似死亡；出现“疑似转确诊+总量回调”的口径再分配。",
        "en": "CDC updated totals on 21 May to 575 suspected, 51 confirmed, and 148 suspected deaths, reflecting recategorization from suspected to confirmed and headline total rebalancing."
      },
      "sourceIds": [
        "cdc-situation-2026-05-21"
      ]
    },
    {
      "date": "2026-05-20",
      "countryCode": "MC",
      "countryZh": "多国（DRC/UG）",
      "countryEn": "Multi-country (DRC/UG)",
      "confirmedDelta": 0,
      "probableDelta": 0,
      "deathsDelta": 0,
      "observedDelta": 0,
      "description": {
        "zh": "CDC在5月20日说明该事件仍快速演变，后续可能继续调整数字。",
        "en": "CDC noted on 20 May that the outbreak remains rapidly evolving and figures may continue to change."
      },
      "sourceIds": [
        "cdc-situation-2026-05-20"
      ]
    },
    {
      "date": "2026-05-19",
      "countryCode": "CD",
      "countryZh": "刚果民主共和国",
      "countryEn": "Democratic Republic of the Congo",
      "confirmedDelta": 24,
      "probableDelta": 395,
      "deathsDelta": 54,
      "observedDelta": 0,
      "description": {
        "zh": "CDC/ECDC公开更新显示病例和死亡快速上修，提示前期存在隐匿传播与补报。",
        "en": "Public CDC/ECDC updates showed rapid upward revision in both cases and deaths, indicating under-detection and retrospective reporting in earlier phases."
      },
      "sourceIds": [
        "cdc-situation-2026-05-20",
        "ecdc-outbreak-2026-05-19"
      ]
    },
    {
      "date": "2026-05-17",
      "countryCode": "MC",
      "countryZh": "多国（DRC/UG）",
      "countryEn": "Multi-country (DRC/UG)",
      "confirmedDelta": 0,
      "probableDelta": 0,
      "deathsDelta": 0,
      "observedDelta": 0,
      "description": {
        "zh": "WHO宣布本事件构成PHEIC（国际关注的突发公共卫生事件）。",
        "en": "WHO determined the event to constitute a PHEIC (Public Health Emergency of International Concern)."
      },
      "sourceIds": [
        "who-pheic-2026-05-17"
      ]
    },
    {
      "date": "2026-05-16",
      "countryCode": "UG",
      "countryZh": "乌干达",
      "countryEn": "Uganda",
      "confirmedDelta": 2,
      "probableDelta": 0,
      "deathsDelta": 1,
      "observedDelta": 0,
      "description": {
        "zh": "乌干达通报2例实验室确诊输入关联病例（含1例死亡），地点在坎帕拉。",
        "en": "Uganda reported two laboratory-confirmed import-associated cases (including one death) in Kampala."
      },
      "sourceIds": [
        "who-pheic-2026-05-17",
        "cdc-han00530-2026-05-19"
      ]
    },
    {
      "date": "2026-05-15",
      "countryCode": "CD",
      "countryZh": "刚果民主共和国",
      "countryEn": "Democratic Republic of the Congo",
      "confirmedDelta": 8,
      "probableDelta": 246,
      "deathsDelta": 80,
      "observedDelta": 0,
      "description": {
        "zh": "DRC官方宣布第17次埃博拉疫情；WHO DON602记录该日通报246例疑似和80例死亡。",
        "en": "DRC officially declared its 17th Ebola outbreak; WHO DON602 recorded 246 suspected cases and 80 deaths as of this date."
      },
      "sourceIds": [
        "who-don602-2026-05-16",
        "who-afro-drc-2026-05-15"
      ]
    }
  ],
  "series": {
    "dates": [
      "2026-05-15",
      "2026-05-16",
      "2026-05-17",
      "2026-05-19",
      "2026-05-20",
      "2026-05-21",
      "2026-05-22",
      "2026-05-23"
    ],
    "global": {
      "confirmed": [
        8,
        10,
        10,
        34,
        34,
        51,
        83,
        83
      ],
      "probable": [
        246,
        246,
        246,
        641,
        641,
        575,
        744,
        744
      ],
      "deaths": [
        80,
        81,
        81,
        135,
        135,
        148,
        176,
        176
      ],
      "confirmedDeaths": [
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ],
      "observed": [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ]
    },
    "byCountry": {
      "CD": {
        "confirmed": [
          8,
          8,
          8,
          32,
          32,
          49,
          81,
          81
        ],
        "probable": [
          246,
          246,
          246,
          641,
          641,
          575,
          744,
          744
        ],
        "deaths": [
          80,
          80,
          80,
          134,
          134,
          147,
          175,
          175
        ],
        "confirmedDeaths": [
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "observed": [
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "UG": {
        "confirmed": [
          0,
          2,
          2,
          2,
          2,
          2,
          2,
          2
        ],
        "probable": [
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "deaths": [
          0,
          1,
          1,
          1,
          1,
          1,
          1,
          1
        ],
        "confirmedDeaths": [
          0,
          1,
          1,
          1,
          1,
          1,
          1,
          1
        ],
        "observed": [
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      }
    }
  },
  "watchlist": [
    {
      "date": "2026-05-23",
      "title": {
        "zh": "乌干达新增3例信号待与官方总盘对齐",
        "en": "Uganda +3 signal pending reconciliation with official roll-up"
      },
      "note": {
        "zh": "Reuters 与 BNOFeed均显示乌干达累计可达5例；需等待 CDC/WHO 后续统一口径。",
        "en": "Reuters and BNOFeed indicate Uganda may have reached 5 confirmed cases; pending CDC/WHO consolidated update."
      },
      "sourceIds": [
        "reuters-uganda-2026-05-23",
        "bnofeed-x-2026-05-23"
      ]
    },
    {
      "date": "2026-05-22",
      "title": {
        "zh": "CDC总量大幅上修且新增南基伍病例",
        "en": "CDC totals revised upward with new Sud-Kivu confirmation"
      },
      "note": {
        "zh": "CDC 5月22日口径升至744疑似、83确诊、176疑似死亡；地区扩散范围扩大。",
        "en": "CDC 22 May totals rose to 744 suspected, 83 confirmed, and 176 suspected deaths, with broader geographic spread."
      },
      "sourceIds": [
        "cdc-situation-2026-05-22"
      ]
    },
    {
      "date": "2026-05-21",
      "title": {
        "zh": "疑似与确诊结构发生再分类",
        "en": "Suspected and confirmed buckets were reclassified"
      },
      "note": {
        "zh": "CDC 5月21日更新显示确诊上升、疑似回调；这类回调会直接影响累计曲线斜率。",
        "en": "CDC 21 May update shows confirmed counts rising while suspected counts were revised downward; this directly changes cumulative trend slopes."
      },
      "sourceIds": [
        "cdc-situation-2026-05-21"
      ]
    },
    {
      "date": "2026-05-19",
      "title": {
        "zh": "北基伍新增报告需持续核验",
        "en": "North Kivu signal requires ongoing verification"
      },
      "note": {
        "zh": "ECDC提到北基伍已出现报告病例；需等待国家/WHO分层数字进一步细化。",
        "en": "ECDC indicates reports from North Kivu; country/WHO stratified counts are still pending finer granularity."
      },
      "sourceIds": [
        "ecdc-outbreak-2026-05-19"
      ]
    }
  ],
  "news": [
    {
      "date": "2026-05-23",
      "title": {
        "zh": "多平台出现乌干达新增病例信号",
        "en": "Multi-platform signal reports additional Uganda cases"
      },
      "summary": {
        "zh": "Reuters 与 BNOFeed均提及乌干达新增3例（累计5例），本看板先列为待核验，不直接覆盖官方总盘。",
        "en": "Reuters and BNOFeed both reported 3 additional Uganda cases (5 total); tracked as pending verification without immediately overriding official roll-up totals."
      },
      "sourceId": "reuters-uganda-2026-05-23"
    },
    {
      "date": "2026-05-22",
      "title": {
        "zh": "CDC：5月22日埃博拉态势更新",
        "en": "CDC: Ebola current situation update (22 May)"
      },
      "summary": {
        "zh": "CDC更新为744疑似、83确诊、176疑似死亡，并记录病例扩展至南基伍。",
        "en": "CDC updated totals to 744 suspected, 83 confirmed, and 176 suspected deaths, noting confirmed spread to Sud-Kivu."
      },
      "sourceId": "cdc-situation-2026-05-22"
    },
    {
      "date": "2026-05-21",
      "title": {
        "zh": "CDC：5月21日埃博拉态势更新",
        "en": "CDC: Ebola current situation update (21 May)"
      },
      "summary": {
        "zh": "CDC更新为575疑似、51确诊、148疑似死亡，并提示数字将持续修订。",
        "en": "CDC updated totals to 575 suspected, 51 confirmed, and 148 suspected deaths, noting that figures remain subject to revision."
      },
      "sourceId": "cdc-situation-2026-05-21"
    },
    {
      "date": "2026-05-20",
      "title": {
        "zh": "CDC：5月20日埃博拉态势更新",
        "en": "CDC: Ebola current situation update (20 May)"
      },
      "summary": {
        "zh": "CDC更新总量为536疑似、105可能、34确诊、134疑似死亡；并强调数据会持续修订。",
        "en": "CDC updated totals to 536 suspected, 105 probable, 34 confirmed, and 134 suspected deaths, emphasizing ongoing revisions."
      },
      "sourceId": "cdc-situation-2026-05-20"
    },
    {
      "date": "2026-05-19",
      "title": {
        "zh": "CDC发布HAN00530临床与公卫提示",
        "en": "CDC issued HAN00530 for clinical/public health preparedness"
      },
      "summary": {
        "zh": "面向医疗与公卫体系发布实验室、生物安全、病例识别和旅行风险管理建议。",
        "en": "Advisory to clinicians and public health systems covering laboratory safety, case recognition, and travel-related risk management."
      },
      "sourceId": "cdc-han00530-2026-05-19"
    },
    {
      "date": "2026-05-19",
      "title": {
        "zh": "ECDC：DRC/UG埃博拉事件页上线并持续更新",
        "en": "ECDC launches continuously updated DRC/UG Ebola event page"
      },
      "summary": {
        "zh": "ECDC评估欧盟/欧洲经济区居民感染风险当前“非常低”，同时持续监测病例增长。",
        "en": "ECDC assesses current infection likelihood for EU/EEA residents as very low while monitoring rapid case growth."
      },
      "sourceId": "ecdc-outbreak-2026-05-19"
    },
    {
      "date": "2026-05-17",
      "title": {
        "zh": "WHO宣布本迪布焦埃博拉事件为PHEIC",
        "en": "WHO declares Bundibugyo Ebola event a PHEIC"
      },
      "summary": {
        "zh": "WHO通报该事件构成国际关注的突发公共卫生事件，但尚不构成“pandemic emergency”。",
        "en": "WHO determined the event is a PHEIC, while not meeting the threshold of a pandemic emergency."
      },
      "sourceId": "who-pheic-2026-05-17"
    },
    {
      "date": "2026-05-16",
      "title": {
        "zh": "WHO DON602：DRC/UG埃博拉事件初始风险评估",
        "en": "WHO DON602: initial risk assessment for DRC/UG Ebola event"
      },
      "summary": {
        "zh": "DON602记录DRC在5月15日通报246疑似、80死亡，乌干达报告输入关联病例。",
        "en": "DON602 recorded 246 suspected cases and 80 deaths in DRC as of 15 May, with import-associated cases reported in Uganda."
      },
      "sourceId": "who-don602-2026-05-16"
    },
    {
      "date": "2026-05-15",
      "title": {
        "zh": "WHO非洲区：DRC确认新一轮埃博拉疫情",
        "en": "WHO AFRO: DRC confirms a new Ebola outbreak"
      },
      "summary": {
        "zh": "刚果（金）确认第17次埃博拉疫情，病毒型别为Bundibugyo。",
        "en": "DRC confirmed its 17th Ebola outbreak, caused by the Bundibugyo species."
      },
      "sourceId": "who-afro-drc-2026-05-15"
    }
  ],
  "sources": [
    {
      "id": "reuters-uganda-2026-05-23",
      "publisher": "Reuters",
      "title": "Uganda confirms three new Ebola cases, bringing total to five",
      "date": "2026-05-23",
      "url": "https://www.reuters.com/business/healthcare-pharmaceuticals/uganda-confirms-three-new-ebola-cases-bringing-total-five-2026-05-23/"
    },
    {
      "id": "bnofeed-x-2026-05-23",
      "publisher": "BNOFeed (X)",
      "title": "Daily Ebola update and Uganda case signal posts",
      "date": "2026-05-23",
      "url": "https://x.com/BNOFeed"
    },
    {
      "id": "who-ihr-temp-rec-2026-05-22",
      "publisher": "WHO",
      "title": "First meeting of the IHR Emergency Committee ... Temporary recommendations",
      "date": "2026-05-22",
      "url": "https://www.who.int/news/item/22-05-2026-first-meeting-of-the-ihr-emergency-committee-regarding-the-epidemic-of-ebola-bundibugyo-virus-disease-in-the-democratic-republic-of-the-congo-and-uganda-2026-temporary-recommendations"
    },
    {
      "id": "cdc-situation-2026-05-22",
      "publisher": "CDC",
      "title": "Ebola Disease: Current Situation",
      "date": "2026-05-22",
      "url": "https://www.cdc.gov/ebola/situation-summary/index.html"
    },
    {
      "id": "cdc-situation-2026-05-21",
      "publisher": "CDC",
      "title": "Ebola Disease: Current Situation",
      "date": "2026-05-21",
      "url": "https://www.cdc.gov/ebola/situation-summary/index.html"
    },
    {
      "id": "cdc-situation-2026-05-20",
      "publisher": "CDC",
      "title": "Ebola Disease: Current Situation",
      "date": "2026-05-20",
      "url": "https://www.cdc.gov/ebola/situation-summary/index.html"
    },
    {
      "id": "cdc-han00530-2026-05-19",
      "publisher": "CDC HAN",
      "title": "CDCHAN-00530 Ebola Disease Outbreak in DRC and Uganda",
      "date": "2026-05-19",
      "url": "https://www.cdc.gov/han/php/notices/han00530.html"
    },
    {
      "id": "ecdc-outbreak-2026-05-19",
      "publisher": "ECDC",
      "title": "Ebola virus disease outbreak in DRC and Uganda, 19 May 2026",
      "date": "2026-05-19",
      "url": "https://www.ecdc.europa.eu/en/ebola-virus-disease-outbreak-democratic-republic-congo-and-uganda-19-may-2026"
    },
    {
      "id": "who-pheic-2026-05-17",
      "publisher": "WHO",
      "title": "Epidemic of Ebola Disease in DRC and Uganda determined a PHEIC",
      "date": "2026-05-17",
      "url": "https://www.who.int/news/item/17-05-2026-epidemic-of-ebola-disease-in-the-democratic-republic-of-the-congo-and-uganda-determined-a-public-health-emergency-of-international-concern"
    },
    {
      "id": "cdc-media-2026-05-17",
      "publisher": "CDC Newsroom",
      "title": "CDC Mobilizes International Response Following Ebola Disease Outbreak in DRC and Uganda",
      "date": "2026-05-17",
      "url": "https://www.cdc.gov/media/releases/2026/cdc-mobilizes-international-ebola-response.html"
    },
    {
      "id": "ecdc-pheic-news-2026-05-17",
      "publisher": "ECDC",
      "title": "WHO declares Ebola outbreak in DRC and Uganda a PHEIC",
      "date": "2026-05-17",
      "url": "https://www.ecdc.europa.eu/en/news-events/who-declares-ebola-outbreak-democratic-republic-congo-and-uganda-public-health"
    },
    {
      "id": "who-don602-2026-05-16",
      "publisher": "WHO",
      "title": "Ebola disease caused by Bundibugyo virus, Democratic Republic of the Congo & Uganda (DON602)",
      "date": "2026-05-16",
      "url": "https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON602"
    },
    {
      "id": "who-afro-drc-2026-05-15",
      "publisher": "WHO AFRO",
      "title": "Democratic Republic of the Congo confirms new Ebola outbreak, WHO scales up support",
      "date": "2026-05-15",
      "url": "https://www.afro.who.int/countries/democratic-republic-of-congo/news/democratic-republic-congo-confirms-new-ebola-outbreak-who-scales-upsupport"
    }
  ],
  "observation": {
    "asOf": "2026-05-22",
    "definition": {
      "zh": "被观测者=公开来源中可量化且可归属到国家/省州级的接触者监测人数。仅提到“在监测”但未给出人数的地区，不并入统计总量。",
      "en": "Observed persons are those under contact monitoring with publicly quantified and country/region-attributable counts. Regions reporting monitoring without numeric disclosure are excluded from totals."
    },
    "statuses": {
      "counted": {
        "zh": "已量化",
        "en": "Quantified"
      },
      "reported_no_count": {
        "zh": "已通报未披露人数",
        "en": "Reported without count"
      },
      "no_reported_monitoring": {
        "zh": "无公开监测人数",
        "en": "No publicly reported monitoring count"
      }
    },
    "countries": [
      {
        "code": "CD",
        "countryZh": "刚果民主共和国",
        "countryEn": "Democratic Republic of the Congo",
        "observed": 0,
        "quantifiedRegionCount": 0,
        "reportedNoCountRegionCount": 2,
        "note": {
          "zh": "重点受影响区域为伊图里与北基伍，公开口径仍未给出可量化“被观测者”总人数。",
          "en": "Key affected areas are Ituri and North Kivu; publicly available bulletins still do not provide a quantified total for monitored contacts."
        },
        "sourceIds": [
          "cdc-situation-2026-05-22",
          "who-ihr-temp-rec-2026-05-22",
          "ecdc-outbreak-2026-05-19"
        ]
      },
      {
        "code": "UG",
        "countryZh": "乌干达",
        "countryEn": "Uganda",
        "observed": 0,
        "quantifiedRegionCount": 0,
        "reportedNoCountRegionCount": 1,
        "note": {
          "zh": "乌干达报告2例输入关联确诊（含1死亡），但公开通报未给出可量化接触者监测人数。",
          "en": "Uganda reports 2 import-associated confirmed cases (including 1 death), but no quantified contact-monitoring total has been publicly released."
        },
        "sourceIds": [
          "cdc-situation-2026-05-22",
          "who-ihr-temp-rec-2026-05-22",
          "reuters-uganda-2026-05-23"
        ]
      }
    ],
    "regionBreakdown": {
      "CD": [
        {
          "regionCode": "CD-IT",
          "regionZh": "伊图里省（Ituri）",
          "regionEn": "Ituri Province",
          "observed": 0,
          "status": "reported_no_count",
          "sourceIds": [
            "who-don602-2026-05-16",
            "cdc-situation-2026-05-20"
          ]
        },
        {
          "regionCode": "CD-NK",
          "regionZh": "北基伍省（North Kivu）",
          "regionEn": "North Kivu Province",
          "observed": 0,
          "status": "reported_no_count",
          "sourceIds": [
            "ecdc-outbreak-2026-05-19"
          ]
        }
      ],
      "UG": [
        {
          "regionCode": "UG-102",
          "regionZh": "坎帕拉（Kampala）",
          "regionEn": "Kampala",
          "observed": 0,
          "status": "reported_no_count",
          "sourceIds": [
            "who-pheic-2026-05-17",
            "cdc-han00530-2026-05-19"
          ]
        }
      ]
    }
  }
};
