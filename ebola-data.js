window.OUTBREAK_DATA = {
  "meta": {
    "outbreakId": "ebola-bundibugyo-drc-uganda-2026",
    "outbreakName": {
      "zh": "刚果（金）与乌干达本迪布焦病毒埃博拉事件",
      "en": "Bundibugyo Ebola Outbreak in DRC and Uganda"
    },
    "lastUpdatedAt": "2026-05-30T23:59:59+08:00",
    "lastUpdatedDate": "2026-05-30",
    "timezone": "Asia/Shanghai",
    "scopeNote": {
      "zh": "本看板以 WHO/CDC/ECDC 公开通报为主；“可能”口径用于承载未实验室确证但已通报的疑似/可能病例总量，后续会随官方复核动态回调。",
      "en": "This dashboard prioritizes WHO/CDC/ECDC bulletins. The 'probable' bucket is used to hold publicly reported non-laboratory-confirmed suspected/probable counts and may be revised as official verification progresses."
    },
    "externalBenchmarks": {
      "checkedAt": "2026-05-31T21:10:26+08:00",
      "items": [
        {
          "id": "who-don602-baseline",
          "name": {
            "zh": "WHO DON602 基线（5月16日）",
            "en": "WHO DON602 baseline (16 May)"
          },
          "url": "https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON602",
          "method": {
            "zh": "DON602初始口径：DRC 246疑似、80疑似死亡；乌干达2例输入关联确诊（含1死亡）。",
            "en": "DON602 baseline: DRC 246 suspected and 80 suspected deaths; Uganda 2 import-associated confirmed cases including 1 death."
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
          "id": "who-don605-2026-05-29",
          "name": {
            "zh": "WHO DON605（5月29日）",
            "en": "WHO DON605 (29 May)"
          },
          "url": "https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON605",
          "method": {
            "zh": "DON605口径：DRC 125确诊（17确诊死亡）+906疑似（223疑似死亡）；乌干达9确诊（1死亡）。",
            "en": "DON605 reports DRC 125 confirmed (17 confirmed deaths) + 906 suspected (223 suspected deaths), and Uganda 9 confirmed (1 death)."
          },
          "metrics": {
            "drcConfirmed": 125,
            "drcConfirmedDeaths": 17,
            "drcSuspected": 906,
            "drcSuspectedDeaths": 223,
            "ugandaConfirmed": 9,
            "ugandaConfirmedDeaths": 1,
            "reportedDate": "2026-05-29"
          },
          "sourceIds": [
            "who-don605-2026-05-29"
          ]
        },
        {
          "id": "cdc-situation-2026-05-30",
          "name": {
            "zh": "CDC 情况通报（5月30日）",
            "en": "CDC situation bulletin (30 May)"
          },
          "url": "https://www.cdc.gov/ebola/situation-summary/index.html",
          "method": {
            "zh": "CDC 5月30日更新为“分层口径”：DRC 210确诊/17确诊死亡/349疑似；乌干达9确诊/1确诊死亡/1可能病例/1可能死亡。",
            "en": "CDC 30 May update uses stratified categories: DRC 210 confirmed / 17 confirmed deaths / 349 suspected; Uganda 9 confirmed / 1 confirmed death / 1 probable case / 1 probable death."
          },
          "metrics": {
            "drcConfirmed": 210,
            "drcConfirmedDeaths": 17,
            "drcSuspected": 349,
            "drcSuspectedDeaths": 0,
            "ugandaConfirmed": 9,
            "ugandaConfirmedDeaths": 1,
            "ugandaProbable": 1,
            "ugandaProbableDeaths": 1,
            "globalConfirmed": 219,
            "globalProbableLike": 350,
            "globalDeaths": 19,
            "reportedDate": "2026-05-30"
          },
          "sourceIds": [
            "cdc-situation-2026-05-30",
            "ecdc-outbreak-2026-05-29"
          ]
        },
        {
          "id": "ecdc-europe-risk-2026-05-29",
          "name": {
            "zh": "ECDC欧洲风险评估（5月29日）",
            "en": "ECDC Europe risk assessment (29 May)"
          },
          "url": "https://www.ecdc.europa.eu/en/ebola-virus-disease-outbreak-democratic-republic-congo-and-uganda",
          "method": {
            "zh": "ECDC更新：EU/EEA居民感染风险仍为“非常低”，未见欧洲本地传播证据。",
            "en": "ECDC update: infection likelihood for EU/EEA residents remains “very low”, with no evidence of sustained local transmission in Europe."
          },
          "metrics": {
            "euRisk": "very low",
            "lastUpdated": "2026-05-29"
          },
          "sourceIds": [
            "ecdc-outbreak-2026-05-29"
          ]
        },
        {
          "id": "x-europe-signal-2026-05-31",
          "name": {
            "zh": "X欧洲传播信号（5月31日）",
            "en": "X Europe spread signals (31 May)"
          },
          "url": "https://x.com/search?q=%28ebola%20OR%20bundibugyo%29%20%28Europe%20OR%20european%20OR%20Germany%20OR%20France%20OR%20Italy%20OR%20Spain%20OR%20UK%29%20%28spread%20OR%20imported%20OR%20cases%29&src=typed_query&f=live",
          "method": {
            "zh": "X平台有欧洲传播讨论噪声，作为信号流保留，不直接进入确诊盘。",
            "en": "X contains noisy discussions on spread into Europe; tracked as signals and not directly ingested into confirmed totals."
          },
          "metrics": {
            "signalStream": true,
            "reportedDate": "2026-05-31"
          },
          "sourceIds": [
            "opencli-x-ebola-europe-spread-2026-05-31",
            "ecdc-outbreak-2026-05-29"
          ]
        }
      ]
    },
    "rawSyncAt": "2026-05-31T21:10:26+08:00",
    "dashboardDataDate": "2026-05-30"
  },
  "summary": {
    "totalReported": 569,
    "confirmed": 219,
    "probable": 350,
    "deaths": 19,
    "confirmedDeaths": 18,
    "probableDeaths": 1,
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
      "confirmed": 210,
      "probable": 349,
      "deaths": 17,
      "confirmedDeaths": 17,
      "probableDeaths": 0,
      "lastUpdate": "2026-05-30",
      "notes": {
        "zh": "CDC 5月30日按分层口径通报：DRC 210确诊（17确诊死亡）+349疑似；并说明5月29日对疑似池做了去重/排除。",
        "en": "CDC 30 May stratified report: DRC 210 confirmed (17 confirmed deaths) + 349 suspected; noting 29 May de-duplication/rule-out cleanup for suspected counts."
      },
      "sourceIds": [
        "cdc-situation-2026-05-30",
        "who-don605-2026-05-29",
        "ecdc-outbreak-2026-05-29"
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
      "confirmed": 9,
      "probable": 1,
      "deaths": 2,
      "confirmedDeaths": 1,
      "probableDeaths": 1,
      "lastUpdate": "2026-05-30",
      "notes": {
        "zh": "CDC 5月30日：乌干达9确诊、1确诊死亡，并新增1例可能病例和1例可能死亡。",
        "en": "CDC 30 May: Uganda reports 9 confirmed cases and 1 confirmed death, plus 1 probable case and 1 probable death."
      },
      "sourceIds": [
        "cdc-situation-2026-05-30",
        "who-don605-2026-05-29",
        "ecdc-outbreak-2026-05-29"
      ],
      "observed": 0
    }
  ],
  "timeline": [
    {
      "date": "2026-05-30",
      "countryCode": "MC",
      "countryZh": "多国（DRC/UG）",
      "countryEn": "Multi-country (DRC/UG)",
      "confirmedDelta": 91,
      "probableDelta": -727,
      "deathsDelta": -245,
      "observedDelta": 0,
      "description": {
        "zh": "CDC 5月30日采用新分层口径并同步回溯清洗疑似池，导致“疑似/疑似死亡”从历史高位回落。",
        "en": "CDC 30 May switched to a revised stratified counting basis with retrospective suspect-pool cleanup, causing suspected/suspected-death totals to drop from prior highs."
      },
      "sourceIds": [
        "cdc-situation-2026-05-30"
      ]
    },
    {
      "date": "2026-05-29",
      "countryCode": "MC",
      "countryZh": "欧洲风险评估",
      "countryEn": "Europe risk assessment",
      "confirmedDelta": 0,
      "probableDelta": 0,
      "deathsDelta": 0,
      "observedDelta": 0,
      "description": {
        "zh": "ECDC维持EU/EEA风险“非常低”，未见欧洲本地持续传播证据。",
        "en": "ECDC maintains a \"very low\" EU/EEA risk assessment with no evidence of sustained local transmission in Europe."
      },
      "sourceIds": [
        "ecdc-outbreak-2026-05-29"
      ]
    },
    {
      "date": "2026-05-27",
      "countryCode": "MC",
      "countryZh": "多国（DRC/UG）",
      "countryEn": "Multi-country (DRC/UG)",
      "confirmedDelta": 16,
      "probableDelta": 171,
      "deathsDelta": 30,
      "observedDelta": 0,
      "description": {
        "zh": "CDC 5月27日更新：DRC 1,077疑似、121确诊、246疑似死亡、17确诊死亡；乌干达7确诊、1确诊死亡。",
        "en": "CDC 27 May update: DRC 1,077 suspected, 121 confirmed, 246 suspected deaths, and 17 confirmed deaths; Uganda 7 confirmed and 1 confirmed death."
      },
      "sourceIds": [
        "cdc-situation-2026-05-27"
      ]
    },
    {
      "date": "2026-05-27",
      "countryCode": "MC",
      "countryZh": "欧洲风险评估",
      "countryEn": "Europe risk assessment",
      "confirmedDelta": 0,
      "probableDelta": 0,
      "deathsDelta": 0,
      "observedDelta": 0,
      "description": {
        "zh": "ECDC评估EU/EEA居民感染风险仍为“非常低”；欧洲相关输入信号持续监测。",
        "en": "ECDC assesses infection likelihood for EU/EEA residents as still \"very low\"; Europe-related importation signals remain under monitoring."
      },
      "sourceIds": [
        "ecdc-outbreak-2026-05-27"
      ]
    },
    {
      "date": "2026-05-25",
      "countryCode": "MC",
      "countryZh": "多国（DRC/UG）",
      "countryEn": "Multi-country (DRC/UG)",
      "confirmedDelta": 24,
      "probableDelta": 160,
      "deathsDelta": 48,
      "observedDelta": 0,
      "description": {
        "zh": "CDC 5月25日更新：DRC 906疑似、105确诊、223疑似死亡、10确诊死亡；乌干达7确诊、1确诊死亡。",
        "en": "CDC 25 May update: DRC 906 suspected, 105 confirmed, 223 suspected deaths, and 10 confirmed deaths; Uganda 7 confirmed cases and 1 confirmed death."
      },
      "sourceIds": [
        "cdc-situation-2026-05-25",
        "ap-uganda-seven-2026-05-25"
      ]
    },
    {
      "date": "2026-05-23",
      "countryCode": "MC",
      "countryZh": "多国（DRC/UG）",
      "countryEn": "Multi-country (DRC/UG)",
      "confirmedDelta": 5,
      "probableDelta": 2,
      "deathsDelta": 10,
      "observedDelta": 0,
      "description": {
        "zh": "CDC 5月23日更新：DRC 746疑似、83确诊、176疑似死亡、9确诊死亡；乌干达5确诊、1确诊死亡。",
        "en": "CDC 23 May update: DRC 746 suspected, 83 confirmed, 176 suspected deaths, and 9 confirmed deaths; Uganda 5 confirmed cases and 1 confirmed death."
      },
      "sourceIds": [
        "cdc-situation-2026-05-23",
        "reuters-uganda-2026-05-23"
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
      "2026-05-23",
      "2026-05-25",
      "2026-05-27",
      "2026-05-30"
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
        88,
        112,
        128,
        219
      ],
      "probable": [
        246,
        246,
        246,
        641,
        641,
        575,
        744,
        746,
        906,
        1077,
        350
      ],
      "deaths": [
        80,
        81,
        81,
        135,
        135,
        148,
        176,
        186,
        234,
        264,
        19
      ],
      "confirmedDeaths": [
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        10,
        11,
        18,
        18
      ],
      "observed": [
        0,
        0,
        0,
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
          83,
          105,
          121,
          210
        ],
        "probable": [
          246,
          246,
          246,
          641,
          641,
          575,
          744,
          746,
          906,
          1077,
          349
        ],
        "deaths": [
          80,
          80,
          80,
          134,
          134,
          147,
          175,
          185,
          233,
          263,
          17
        ],
        "confirmedDeaths": [
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          9,
          10,
          17,
          17
        ],
        "observed": [
          0,
          0,
          0,
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
          5,
          7,
          7,
          9
        ],
        "probable": [
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          1
        ],
        "deaths": [
          0,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          2
        ],
        "confirmedDeaths": [
          0,
          1,
          1,
          1,
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
      "date": "2026-05-31",
      "title": {
        "zh": "X重点监测：欧洲传播讨论与官方口径分离",
        "en": "X priority monitor: separate Europe spread chatter from official counts"
      },
      "note": {
        "zh": "X平台“欧洲传播”讨论量高，但ECDC仍评估风险非常低；看板继续执行“信号流≠确诊盘”。",
        "en": "X chatter about spread in Europe is elevated, while ECDC still assesses risk as very low; dashboard keeps strict separation between signal streams and confirmed totals."
      },
      "sourceIds": [
        "opencli-x-ebola-europe-spread-2026-05-31",
        "ecdc-outbreak-2026-05-29"
      ]
    },
    {
      "date": "2026-05-30",
      "title": {
        "zh": "CDC回溯清洗后，疑似池与死亡口径显著回落",
        "en": "CDC retrospective cleanup sharply reduced suspect/death buckets"
      },
      "note": {
        "zh": "5月30日口径将大量历史疑似/疑似死亡移出当前池；曲线回落属于“口径修订”而非疫情突然逆转。",
        "en": "On 30 May, many historical suspected/suspected-death entries were removed from current pools; the downward step reflects methodology revision, not a sudden epidemiological reversal."
      },
      "sourceIds": [
        "cdc-situation-2026-05-30"
      ]
    },
    {
      "date": "2026-05-28",
      "title": {
        "zh": "X聚焦：埃博拉“欧洲传播”信号去噪",
        "en": "X focus: de-noising \"Ebola spread in Europe\" signals"
      },
      "note": {
        "zh": "X平台欧洲传播讨论显著升温，但ECDC对EU/EEA居民风险评估仍为“非常低”；看板继续并行追踪社交信号与官方评估。",
        "en": "X chatter on \"Ebola spreading in Europe\" has intensified, while ECDC still rates risk to EU/EEA residents as very low; the dashboard tracks both streams in parallel."
      },
      "sourceIds": [
        "opencli-x-ebola-europe-spread-2026-05-28",
        "ecdc-outbreak-2026-05-27"
      ]
    },
    {
      "date": "2026-05-27",
      "title": {
        "zh": "CDC口径继续上修至5月27日",
        "en": "CDC totals revised upward through 27 May"
      },
      "note": {
        "zh": "全球确诊升至128、累计死亡升至264；重点仍在DRC，乌干达维持7例。",
        "en": "Global confirmed rose to 128 and deaths to 264; burden remains concentrated in DRC while Uganda remains at 7 cases."
      },
      "sourceIds": [
        "cdc-situation-2026-05-27"
      ]
    },
    {
      "date": "2026-05-25",
      "title": {
        "zh": "CDC口径继续上修，乌干达升至7例",
        "en": "CDC totals revised upward, Uganda rises to 7 cases"
      },
      "note": {
        "zh": "与5月23日相比，全球确诊升至112、死亡升至234；乌干达从5例增至7例。",
        "en": "Compared with 23 May, global confirmed increased to 112 and deaths to 234; Uganda increased from 5 to 7 cases."
      },
      "sourceIds": [
        "cdc-situation-2026-05-25",
        "ap-uganda-seven-2026-05-25"
      ]
    },
    {
      "date": "2026-05-23",
      "title": {
        "zh": "乌干达新增病例已进入官方口径",
        "en": "Uganda case increase has entered official roll-up"
      },
      "note": {
        "zh": "此前BNOFeed/Reuters信号中的“乌干达累计5例”已被CDC 5月23日通报吸收确认。",
        "en": "The earlier BNOFeed/Reuters signal of 5 cumulative Uganda cases is now reflected in the CDC 23 May official update."
      },
      "sourceIds": [
        "cdc-situation-2026-05-23",
        "bnofeed-x-2026-05-23",
        "reuters-uganda-2026-05-23"
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
      "date": "2026-05-30",
      "title": {
        "zh": "CDC：5月30日埃博拉分层口径更新",
        "en": "CDC: 30 May stratified Ebola update"
      },
      "summary": {
        "zh": "CDC更新为DRC 210确诊/349疑似，乌干达9确诊+1可能病例；并说明疑似池经回溯清洗后回落。",
        "en": "CDC updated to DRC 210 confirmed/349 suspected and Uganda 9 confirmed + 1 probable case, noting retrospective cleanup of suspect pools."
      },
      "sourceId": "cdc-situation-2026-05-30"
    },
    {
      "date": "2026-05-29",
      "title": {
        "zh": "ECDC：欧洲居民感染风险仍“非常低”",
        "en": "ECDC: Infection risk for Europe remains \"very low\""
      },
      "summary": {
        "zh": "ECDC 5月29日更新维持低风险评估，并未报告欧洲本地持续传播。",
        "en": "ECDC 29 May update maintains a very low risk assessment and does not report sustained local transmission in Europe."
      },
      "sourceId": "ecdc-outbreak-2026-05-29"
    },
    {
      "date": "2026-05-27",
      "title": {
        "zh": "CDC：5月27日埃博拉态势更新",
        "en": "CDC: Ebola current situation update (27 May)"
      },
      "summary": {
        "zh": "CDC更新到DRC 1,077疑似、121确诊、246疑似死亡、17确诊死亡；乌干达7确诊、1确诊死亡。",
        "en": "CDC updated to DRC 1,077 suspected, 121 confirmed, 246 suspected deaths, and 17 confirmed deaths; Uganda 7 confirmed and 1 confirmed death."
      },
      "sourceId": "cdc-situation-2026-05-27"
    },
    {
      "date": "2026-05-27",
      "title": {
        "zh": "ECDC：欧洲风险仍为“非常低”",
        "en": "ECDC: Risk to Europe remains \"very low\""
      },
      "summary": {
        "zh": "ECDC 5月27日更新强调EU/EEA感染风险仍然非常低，并持续关注输入相关信号。",
        "en": "ECDC 27 May update emphasizes infection risk for EU/EEA residents remains very low while importation-related signals are monitored."
      },
      "sourceId": "ecdc-outbreak-2026-05-27"
    },
    {
      "date": "2026-05-25",
      "title": {
        "zh": "CDC：5月25日埃博拉态势更新",
        "en": "CDC: Ebola current situation update (25 May)"
      },
      "summary": {
        "zh": "CDC更新到DRC 906疑似、105确诊、223疑似死亡、10确诊死亡；乌干达7确诊、1确诊死亡。",
        "en": "CDC updated to DRC 906 suspected, 105 confirmed, 223 suspected deaths, and 10 confirmed deaths; Uganda 7 confirmed and 1 confirmed death."
      },
      "sourceId": "cdc-situation-2026-05-25"
    },
    {
      "date": "2026-05-25",
      "title": {
        "zh": "AP：乌干达新增病例升至7例",
        "en": "AP: Uganda infections rise to 7 cases"
      },
      "summary": {
        "zh": "乌干达卫生部门通报新增2例，累计7例，均与DRC输入链相关。",
        "en": "Ugandan authorities reported 2 additional cases, bringing the total to 7, all linked to the DRC importation chain."
      },
      "sourceId": "ap-uganda-seven-2026-05-25"
    },
    {
      "date": "2026-05-23",
      "title": {
        "zh": "CDC：5月23日埃博拉态势更新",
        "en": "CDC: Ebola current situation update (23 May)"
      },
      "summary": {
        "zh": "CDC更新DRC与乌干达合并口径：全球确诊升至88，累计死亡升至186；乌干达确诊升至5。",
        "en": "CDC updated DRC+Uganda totals: global confirmed rose to 88, cumulative deaths to 186, and Uganda confirmed cases rose to 5."
      },
      "sourceId": "cdc-situation-2026-05-23"
    },
    {
      "date": "2026-05-23",
      "title": {
        "zh": "Reuters：乌干达新增3例确诊",
        "en": "Reuters: Uganda confirms 3 new cases"
      },
      "summary": {
        "zh": "Reuters报道乌干达新增3例后累计5例，该信息随后与CDC同日口径一致。",
        "en": "Reuters reported 3 additional Uganda cases bringing total to 5, later aligned with CDC same-day totals."
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
      "id": "opencli-x-ebola-europe-spread-2026-05-31",
      "publisher": "X / Curated Search",
      "title": "X signal stream: Ebola spread in Europe discussions",
      "date": "2026-05-31",
      "url": "https://x.com/search?q=%28ebola%20OR%20bundibugyo%29%20%28Europe%20OR%20european%20OR%20Germany%20OR%20France%20OR%20Italy%20OR%20Spain%20OR%20UK%29%20%28spread%20OR%20imported%20OR%20cases%29&src=typed_query&f=live"
    },
    {
      "id": "cdc-situation-2026-05-30",
      "publisher": "CDC",
      "title": "Ebola Disease: Current Situation",
      "date": "2026-05-30",
      "url": "https://www.cdc.gov/ebola/situation-summary/index.html"
    },
    {
      "id": "who-don605-2026-05-29",
      "publisher": "WHO",
      "title": "Ebola disease caused by Bundibugyo virus, Democratic Republic of the Congo & Uganda (DON605)",
      "date": "2026-05-29",
      "url": "https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON605"
    },
    {
      "id": "ecdc-outbreak-2026-05-29",
      "publisher": "ECDC",
      "title": "Ebola disease outbreak in the Democratic Republic of the Congo and Uganda (updated 29 May)",
      "date": "2026-05-29",
      "url": "https://www.ecdc.europa.eu/en/ebola-virus-disease-outbreak-democratic-republic-congo-and-uganda"
    },
    {
      "id": "opencli-x-ebola-europe-spread-2026-05-28",
      "publisher": "X / Curated Search",
      "title": "X signal stream: Ebola spread in Europe discussions",
      "date": "2026-05-28",
      "url": "https://x.com/search?q=%28ebola%20OR%20bundibugyo%29%20%28Europe%20OR%20european%20OR%20Germany%20OR%20France%20OR%20Italy%20OR%20Spain%20OR%20UK%29%20%28spread%20OR%20imported%20OR%20cases%29&src=typed_query&f=live"
    },
    {
      "id": "cdc-situation-2026-05-27",
      "publisher": "CDC",
      "title": "Ebola Disease: Current Situation",
      "date": "2026-05-27",
      "url": "https://www.cdc.gov/ebola/situation-summary/index.html"
    },
    {
      "id": "ecdc-outbreak-2026-05-27",
      "publisher": "ECDC",
      "title": "Ebola disease outbreak in the Democratic Republic of the Congo and Uganda (updated 27 May 16:45)",
      "date": "2026-05-27",
      "url": "https://www.ecdc.europa.eu/en/ebola-virus-disease-outbreak-democratic-republic-congo-and-uganda"
    },
    {
      "id": "cdc-situation-2026-05-25",
      "publisher": "CDC",
      "title": "Ebola Disease: Current Situation",
      "date": "2026-05-25",
      "url": "https://www.cdc.gov/ebola/situation-summary/index.html"
    },
    {
      "id": "ap-uganda-seven-2026-05-25",
      "publisher": "Associated Press",
      "title": "Ugandan health officials report new Ebola virus infections, bringing cases to 7",
      "date": "2026-05-25",
      "url": "https://apnews.com/article/8630b816e3f40f950fd90e44b0b3395c"
    },
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
      "title": "BNOFeed posts on Uganda case increase and Ebola daily totals",
      "date": "2026-05-23",
      "url": "https://x.com/BNOFeed"
    },
    {
      "id": "cdc-situation-2026-05-23",
      "publisher": "CDC",
      "title": "Ebola Disease: Current Situation",
      "date": "2026-05-23",
      "url": "https://www.cdc.gov/ebola/situation-summary/index.html"
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
      "id": "who-don603-2026-05-21",
      "publisher": "WHO",
      "title": "Ebola disease caused by Bundibugyo virus – Democratic Republic of the Congo (DON603)",
      "date": "2026-05-21",
      "url": "https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON603"
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
    "asOf": "2026-05-30",
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
          "cdc-situation-2026-05-30",
          "who-don605-2026-05-29",
          "ecdc-outbreak-2026-05-29"
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
          "cdc-situation-2026-05-30",
          "who-don605-2026-05-29",
          "ecdc-outbreak-2026-05-29"
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
