window.OUTBREAK_DATA = {
  "meta": {
    "outbreakId": "mv-hondius-andes-hantavirus-2026",
    "outbreakName": {
      "zh": "MV Hondius 邮轮相关安第斯汉坦病毒事件",
      "en": "MV Hondius Andes Hantavirus Cluster"
    },
    "lastUpdatedAt": "2026-05-28T23:59:59+08:00",
    "lastUpdatedDate": "2026-05-28",
    "timezone": "Asia/Shanghai",
    "scopeNote": {
      "zh": "病例主看板仍按MV Hondius事件链“病例所属国家（国籍）”统计；被观测者口径同时纳入入境医疗检测/隔离观察人数（可量化且可追溯来源）。",
      "en": "The main case dashboard remains nationality-based within the MV Hondius event chain; observed-person metrics additionally include inbound medical testing/isolation monitoring counts when quantifiable and source-traceable."
    },
    "externalBenchmarks": {
      "checkedAt": "2026-07-14T07:10:59+08:00",
      "items": [
        {
          "id": "elisey-arcgis",
          "name": {
            "zh": "Elisey 追踪器（ArcGIS点位）",
            "en": "Elisey tracker (ArcGIS points)"
          },
          "url": "https://eliseyrotar.github.io/hantavirus-tracker/",
          "method": {
            "zh": "按单点状态计数（含MONITORING/UNKNOWN），不是仅确诊病例。",
            "en": "Counts point-status records (including MONITORING/UNKNOWN), not confirmed cases only."
          },
          "metrics": {
            "totalPoints": 107,
            "uniqueLocations": 30,
            "confirmed": 8,
            "deceased": 3,
            "suspected": 7,
            "monitoring": 85,
            "unknown": 4
          },
          "sourceIds": [
            "elisey-arcgis-2026-05-13"
          ]
        },
        {
          "id": "hantaflow-signals",
          "name": {
            "zh": "Hantaflow（Signals流）",
            "en": "Hantaflow (signals feed)"
          },
          "url": "https://hantaflow.com/",
          "method": {
            "zh": "以“signal（通报/新闻提及）”为单位，非病例人数；其方法学明确指出多数国家不等同确诊数。",
            "en": "Uses signals (mentions/updates) as the unit, not patient counts; methodology states most countries are not confirmed-case totals."
          },
          "metrics": {
            "signalsTotal": 245,
            "countriesActive": 8,
            "countriesIndexed": 69,
            "countriesWithSignals30d": 8,
            "signals30dCountrySum": 30,
            "argentinaSignals30d": 12,
            "southAfricaSignals30d": 0
          },
          "sourceIds": [
            "hantaflow-signals-api-2026-05-13",
            "hantaflow-countries-api-2026-05-13",
            "hantaflow-methodology-2026-05-13"
          ]
        }
      ]
    },
    "rawSyncAt": "2026-07-14T07:11:00+08:00",
    "dashboardDataDate": "2026-05-28"
  },
  "summary": {
    "totalReported": 11,
    "confirmed": 9,
    "probable": 2,
    "deaths": 3,
    "confirmedDeaths": 2,
    "probableDeaths": 1,
    "observed": 28
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
      "code": "NL",
      "flag": "🇳🇱",
      "countryZh": "荷兰",
      "countryEn": "Netherlands",
      "continentCode": "EU",
      "continentZh": "欧洲",
      "continentEn": "Europe",
      "lat": 52.1326,
      "lng": 5.2913,
      "confirmed": 2,
      "probable": 1,
      "deaths": 2,
      "confirmedDeaths": 1,
      "probableDeaths": 1,
      "lastUpdate": "2026-05-13",
      "notes": {
        "zh": "2例死亡（1例确诊死亡+1例可能死亡）+1例确诊在治（船医）；另有3名疑似/密接者由佛得角转运至荷兰进行医疗处置与检测，计入入境被观测者。",
        "en": "Two deaths (1 confirmed fatality + 1 probable fatality) plus one confirmed living case (ship doctor); additionally, three suspected/close-contact persons were medically evacuated to the Netherlands from Cabo Verde for care and testing, counted as inbound observed persons."
      },
      "sourceIds": [
        "afp-2026-05-11",
        "who-don600-2026-05-08",
        "who-response-2026-05-07"
      ],
      "observed": 3
    },
    {
      "code": "GB",
      "flag": "🇬🇧",
      "countryZh": "英国",
      "countryEn": "United Kingdom",
      "continentCode": "EU",
      "continentZh": "欧洲",
      "continentEn": "Europe",
      "lat": 55.3781,
      "lng": -3.436,
      "confirmed": 2,
      "probable": 1,
      "deaths": 0,
      "confirmedDeaths": 0,
      "probableDeaths": 0,
      "lastUpdate": "2026-05-11",
      "notes": {
        "zh": "2例确诊（1例南非ICU，1例船上向导）+1例可能病例。",
        "en": "Two confirmed cases (one in ICU in South Africa, one ship guide) plus one probable case."
      },
      "sourceIds": [
        "afp-2026-05-11",
        "who-don600-2026-05-08"
      ],
      "observed": 0
    },
    {
      "code": "DE",
      "flag": "🇩🇪",
      "countryZh": "德国",
      "countryEn": "Germany",
      "continentCode": "EU",
      "continentZh": "欧洲",
      "continentEn": "Europe",
      "lat": 51.1657,
      "lng": 10.4515,
      "confirmed": 1,
      "probable": 0,
      "deaths": 1,
      "confirmedDeaths": 1,
      "probableDeaths": 0,
      "lastUpdate": "2026-05-11",
      "notes": {
        "zh": "1例死亡，尸检样本后续证实安第斯病毒。",
        "en": "One fatal case; post-mortem sample later confirmed Andes virus infection."
      },
      "sourceIds": [
        "afp-2026-05-11",
        "who-don600-2026-05-08"
      ],
      "observed": 0
    },
    {
      "code": "CH",
      "flag": "🇨🇭",
      "countryZh": "瑞士",
      "countryEn": "Switzerland",
      "continentCode": "EU",
      "continentZh": "欧洲",
      "continentEn": "Europe",
      "lat": 46.8182,
      "lng": 8.2275,
      "confirmed": 1,
      "probable": 0,
      "deaths": 0,
      "confirmedDeaths": 0,
      "probableDeaths": 0,
      "lastUpdate": "2026-05-11",
      "notes": {
        "zh": "1例确诊，已隔离治疗。",
        "en": "One confirmed case, isolated and treated."
      },
      "sourceIds": [
        "afp-2026-05-11",
        "who-don600-2026-05-08"
      ],
      "observed": 0
    },
    {
      "code": "FR",
      "flag": "🇫🇷",
      "countryZh": "法国",
      "countryEn": "France",
      "continentCode": "EU",
      "continentZh": "欧洲",
      "continentEn": "Europe",
      "lat": 46.2276,
      "lng": 2.2137,
      "confirmed": 1,
      "probable": 0,
      "deaths": 0,
      "confirmedDeaths": 0,
      "probableDeaths": 0,
      "lastUpdate": "2026-05-11",
      "notes": {
        "zh": "回国转运中出现症状并检测阳性。",
        "en": "Developed symptoms during repatriation and later tested positive."
      },
      "sourceIds": [
        "afp-2026-05-11",
        "ap-2026-05-10"
      ],
      "observed": 0
    },
    {
      "code": "US",
      "flag": "🇺🇸",
      "countryZh": "美国",
      "countryEn": "United States",
      "continentCode": "NA",
      "continentZh": "北美洲",
      "continentEn": "North America",
      "lat": 39.8283,
      "lng": -98.5795,
      "confirmed": 1,
      "probable": 0,
      "deaths": 0,
      "confirmedDeaths": 0,
      "probableDeaths": 0,
      "lastUpdate": "2026-05-13",
      "notes": {
        "zh": "确诊1例；已量化到州级的被观测者21人（NE16、GA2、TX2、AZ1），另有部分州仅报告“在观测”未披露人数。",
        "en": "One confirmed case; 21 observed persons quantified at state level (NE16, GA2, TX2, AZ1), while some states reported monitoring without disclosing counts."
      },
      "sourceIds": [
        "ap-2026-05-13",
        "ap-2026-05-10-us-monitoring",
        "ap-2026-05-07"
      ],
      "observed": 21
    },
    {
      "code": "ES",
      "flag": "🇪🇸",
      "countryZh": "西班牙",
      "countryEn": "Spain",
      "continentCode": "EU",
      "continentZh": "欧洲",
      "continentEn": "Europe",
      "lat": 40.4637,
      "lng": -3.7492,
      "confirmed": 1,
      "probable": 0,
      "deaths": 0,
      "confirmedDeaths": 0,
      "probableDeaths": 0,
      "lastUpdate": "2026-05-12",
      "notes": {
        "zh": "1例撤离乘客阳性（马德里军医院隔离）。",
        "en": "One evacuated passenger tested positive (quarantined in a Madrid military hospital)."
      },
      "sourceIds": [
        "ap-2026-05-12"
      ],
      "observed": 0
    },
    {
      "code": "CN",
      "flag": "🇨🇳",
      "countryZh": "中国",
      "countryEn": "China",
      "continentCode": "AS",
      "continentZh": "亚洲",
      "continentEn": "Asia",
      "lat": 35.8617,
      "lng": 104.1954,
      "confirmed": 0,
      "probable": 0,
      "deaths": 0,
      "confirmedDeaths": 0,
      "probableDeaths": 0,
      "observed": 0,
      "lastUpdate": "2026-05-13",
      "notes": {
        "zh": "公开通报暂无本次事件链相关人类感染病例；省级“被观测者”人数未见官方披露。",
        "en": "No publicly reported human infection linked to this event chain; no province-level observed-person counts have been officially disclosed."
      },
      "sourceIds": [
        "chinanews-2026-05-08",
        "who-speech-2026-05-12"
      ]
    },
    {
      "code": "RU",
      "flag": "🇷🇺",
      "countryZh": "俄罗斯",
      "countryEn": "Russia",
      "continentCode": "EU",
      "continentZh": "欧洲",
      "continentEn": "Europe",
      "lat": 61.524,
      "lng": 105.3188,
      "confirmed": 0,
      "probable": 0,
      "deaths": 0,
      "confirmedDeaths": 0,
      "probableDeaths": 0,
      "observed": 0,
      "lastUpdate": "2026-05-13",
      "notes": {
        "zh": "俄方公开口径称输入性传播风险低，未披露与本事件链相关的分州“被观测者”人数。",
        "en": "Russian public updates indicate low importation risk and no disclosed state-level observed-person counts tied to this event chain."
      },
      "sourceIds": [
        "kommersant-2026-05-12",
        "who-speech-2026-05-12"
      ]
    },
    {
      "code": "ZA",
      "flag": "🇿🇦",
      "countryZh": "南非",
      "countryEn": "South Africa",
      "continentCode": "AF",
      "continentZh": "非洲",
      "continentEn": "Africa",
      "lat": -30.5595,
      "lng": 22.9375,
      "confirmed": 0,
      "probable": 0,
      "deaths": 0,
      "confirmedDeaths": 0,
      "probableDeaths": 0,
      "observed": 2,
      "lastUpdate": "2026-05-13",
      "notes": {
        "zh": "南非卫生部门通报该事件链有2名乘客在南非完成落地检测/医疗处置；按“病例所属国家”口径不并入南非本地确诊，但计入入境被观测者。",
        "en": "South African authorities reported two passengers who underwent on-arrival testing/medical management in South Africa; not counted as domestic cases under nationality-based case scope, but included as inbound observed persons."
      },
      "sourceIds": [
        "za-doh-2026-05-04",
        "ap-2026-05-08-track-dozens",
        "who-don600-2026-05-08"
      ]
    },
    {
      "code": "AR",
      "flag": "🇦🇷",
      "countryZh": "阿根廷",
      "countryEn": "Argentina",
      "continentCode": "SA",
      "continentZh": "南美洲",
      "continentEn": "South America",
      "lat": -38.4161,
      "lng": -63.6167,
      "confirmed": 0,
      "probable": 0,
      "deaths": 0,
      "confirmedDeaths": 0,
      "probableDeaths": 0,
      "observed": 0,
      "lastUpdate": "2026-05-13",
      "notes": {
        "zh": "阿根廷卫生部通报已对航线和在地接触史持续流调；本事件链在阿根廷本地未报告确诊病例。",
        "en": "Argentina’s health ministry reported ongoing epidemiological follow-up of itinerary and local contacts; no confirmed domestic case linked to this event chain has been reported in Argentina."
      },
      "sourceIds": [
        "ar-moh-2026-05-04",
        "who-don600-2026-05-08"
      ]
    },
    {
      "code": "SG",
      "flag": "🇸🇬",
      "countryZh": "新加坡",
      "countryEn": "Singapore",
      "continentCode": "AS",
      "continentZh": "亚洲",
      "continentEn": "Asia",
      "lat": 1.3521,
      "lng": 103.8198,
      "confirmed": 0,
      "probable": 0,
      "deaths": 0,
      "confirmedDeaths": 0,
      "probableDeaths": 0,
      "observed": 2,
      "lastUpdate": "2026-05-13",
      "notes": {
        "zh": "新加坡卫生部门通报2名在圣赫勒拿下船后经南非返新的人员已隔离并检测，计入入境被观测者。",
        "en": "Singapore health authorities reported two individuals who disembarked at St. Helena and returned via South Africa were isolated and tested, counted as inbound observed persons."
      },
      "sourceIds": [
        "ap-2026-05-08-track-dozens"
      ]
    }
  ],
  "timeline": [
    {
      "date": "2026-05-13",
      "countryCode": "US",
      "countryZh": "美国",
      "countryEn": "United States",
      "confirmedDelta": 0,
      "probableDelta": 0,
      "deathsDelta": 0,
      "observedDelta": 18,
      "description": {
        "zh": "美国通报18名人员在专业医疗隔离设施持续观测（NE16、GA2）。",
        "en": "The U.S. reported 18 people under continued observation in specialized medical isolation facilities (NE16, GA2)."
      },
      "sourceIds": [
        "ap-2026-05-13",
        "ap-2026-05-10-us-monitoring"
      ]
    },
    {
      "date": "2026-05-12",
      "countryCode": "ES",
      "countryZh": "西班牙",
      "countryEn": "Spain",
      "confirmedDelta": 1,
      "probableDelta": 0,
      "deathsDelta": 0,
      "description": {
        "zh": "西班牙新增1例确诊；WHO口径更新为11例（9确诊+2可能），累计死亡3例。",
        "en": "Spain added one confirmed case; WHO updated totals to 11 cases (9 confirmed + 2 probable), with 3 deaths."
      },
      "sourceIds": [
        "ap-2026-05-12",
        "who-speech-2026-05-12"
      ],
      "observedDelta": 0
    },
    {
      "date": "2026-05-11",
      "countryCode": "FR",
      "countryZh": "法国",
      "countryEn": "France",
      "confirmedDelta": 1,
      "probableDelta": 0,
      "deathsDelta": 0,
      "description": {
        "zh": "法国新增1例确诊病例。",
        "en": "France added one confirmed case."
      },
      "sourceIds": [
        "afp-2026-05-11"
      ],
      "observedDelta": 0
    },
    {
      "date": "2026-05-10",
      "countryCode": "US",
      "countryZh": "美国",
      "countryEn": "United States",
      "confirmedDelta": 1,
      "probableDelta": 0,
      "deathsDelta": 0,
      "description": {
        "zh": "美国撤离乘客中出现1例轻度PCR阳性。",
        "en": "One repatriated U.S. passenger tested mildly PCR-positive."
      },
      "sourceIds": [
        "afp-2026-05-11",
        "ap-2026-05-10"
      ],
      "observedDelta": 0
    },
    {
      "date": "2026-05-08",
      "countryCode": "WHO",
      "countryZh": "多国（WHO）",
      "countryEn": "Multi-country (WHO)",
      "confirmedDelta": 6,
      "probableDelta": 2,
      "deathsDelta": 3,
      "description": {
        "zh": "WHO DON600：截至5月8日累计8例（6确诊+2可能），死亡3例。",
        "en": "WHO DON600: cumulative 8 cases as of May 8 (6 confirmed + 2 probable), with 3 deaths."
      },
      "sourceIds": [
        "who-don600-2026-05-08"
      ],
      "observedDelta": 0
    },
    {
      "date": "2026-05-08",
      "countryCode": "SG",
      "countryZh": "新加坡",
      "countryEn": "Singapore",
      "confirmedDelta": 0,
      "probableDelta": 0,
      "deathsDelta": 0,
      "observedDelta": 2,
      "description": {
        "zh": "新加坡通报2名经南非返新的相关人员已隔离并检测，纳入入境被观测者。",
        "en": "Singapore reported two related returnees via South Africa were isolated and tested, counted as inbound observed persons."
      },
      "sourceIds": [
        "ap-2026-05-08-track-dozens"
      ]
    },
    {
      "date": "2026-05-08",
      "countryCode": "DE",
      "countryZh": "德国",
      "countryEn": "Germany",
      "confirmedDelta": 1,
      "probableDelta": 0,
      "deathsDelta": 0,
      "description": {
        "zh": "德国籍死亡病例的尸检样本确认安第斯病毒后，德国口径转为确诊病例。",
        "en": "After post-mortem confirmation of Andes virus, the German fatal case was reclassified as confirmed."
      },
      "sourceIds": [
        "who-don600-2026-05-08",
        "ap-timeline-2026-05-08"
      ],
      "observedDelta": 0
    },
    {
      "date": "2026-05-07",
      "countryCode": "US",
      "countryZh": "美国",
      "countryEn": "United States",
      "confirmedDelta": 0,
      "probableDelta": 0,
      "deathsDelta": 0,
      "observedDelta": 3,
      "description": {
        "zh": "美国州级公开信息确认：得州2人、亚利桑那州1人进入主动健康观测。",
        "en": "U.S. state-level updates quantified active observation in Texas (2) and Arizona (1)."
      },
      "sourceIds": [
        "ap-2026-05-07"
      ]
    },
    {
      "date": "2026-05-06",
      "countryCode": "NL",
      "countryZh": "荷兰",
      "countryEn": "Netherlands",
      "confirmedDelta": 0,
      "probableDelta": 0,
      "deathsDelta": 0,
      "observedDelta": 3,
      "description": {
        "zh": "WHO通报3名疑似/密接者由佛得角转运至荷兰接受医疗处置与检测，纳入入境被观测者。",
        "en": "WHO reported three suspected/close-contact persons evacuated from Cabo Verde to the Netherlands for medical care and testing, added as inbound observed persons."
      },
      "sourceIds": [
        "who-response-2026-05-07"
      ]
    },
    {
      "date": "2026-05-06",
      "countryCode": "ZA",
      "countryZh": "南非",
      "countryEn": "South Africa",
      "confirmedDelta": 0,
      "probableDelta": 0,
      "deathsDelta": 0,
      "observedDelta": 2,
      "description": {
        "zh": "南非通报2名来自邮轮事件链的入境乘客完成检测/医疗处置，纳入被观测者。",
        "en": "South Africa reported two inbound passengers linked to the cruise event who underwent testing/medical management, counted as observed persons."
      },
      "sourceIds": [
        "za-doh-2026-05-04",
        "ap-2026-05-08-track-dozens"
      ]
    },
    {
      "date": "2026-05-06",
      "countryCode": "NL",
      "countryZh": "荷兰",
      "countryEn": "Netherlands",
      "confirmedDelta": 1,
      "probableDelta": 0,
      "deathsDelta": 0,
      "description": {
        "zh": "船医病例PCR确诊，后转运至荷兰隔离治疗。",
        "en": "Ship doctor case confirmed by PCR and then evacuated to the Netherlands for isolation care."
      },
      "sourceIds": [
        "who-don600-2026-05-08",
        "afp-2026-05-11"
      ],
      "observedDelta": 0
    },
    {
      "date": "2026-05-06",
      "countryCode": "GB",
      "countryZh": "英国",
      "countryEn": "United Kingdom",
      "confirmedDelta": 1,
      "probableDelta": 0,
      "deathsDelta": 0,
      "description": {
        "zh": "英国籍船上向导病例PCR确诊。",
        "en": "British ship guide case confirmed by PCR."
      },
      "sourceIds": [
        "who-don600-2026-05-08",
        "afp-2026-05-11"
      ],
      "observedDelta": 0
    },
    {
      "date": "2026-05-05",
      "countryCode": "CH",
      "countryZh": "瑞士",
      "countryEn": "Switzerland",
      "confirmedDelta": 1,
      "probableDelta": 0,
      "deathsDelta": 0,
      "description": {
        "zh": "瑞士返国乘客确诊阳性。",
        "en": "Swiss repatriated passenger confirmed positive."
      },
      "sourceIds": [
        "who-don600-2026-05-08",
        "afp-2026-05-11"
      ],
      "observedDelta": 0
    },
    {
      "date": "2026-05-04",
      "countryCode": "NL",
      "countryZh": "荷兰",
      "countryEn": "Netherlands",
      "confirmedDelta": 1,
      "probableDelta": 0,
      "deathsDelta": 1,
      "description": {
        "zh": "荷兰籍女性（病例2）死后PCR确诊。",
        "en": "Dutch female patient (Case 2) was posthumously confirmed by PCR."
      },
      "sourceIds": [
        "who-don600-2026-05-08",
        "ap-timeline-2026-05-08"
      ],
      "observedDelta": 0
    },
    {
      "date": "2026-05-02",
      "countryCode": "GB",
      "countryZh": "英国",
      "countryEn": "United Kingdom",
      "confirmedDelta": 1,
      "probableDelta": 0,
      "deathsDelta": 0,
      "description": {
        "zh": "英国籍重症病例在南非检测确诊。",
        "en": "A critically ill British passenger was laboratory-confirmed in South Africa."
      },
      "sourceIds": [
        "who-don600-2026-05-08",
        "afp-2026-05-11"
      ],
      "observedDelta": 0
    },
    {
      "date": "2026-05-02",
      "countryCode": "DE",
      "countryZh": "德国",
      "countryEn": "Germany",
      "confirmedDelta": 0,
      "probableDelta": 0,
      "deathsDelta": 1,
      "description": {
        "zh": "德国籍女性在船上死亡；该死亡在后续实验室结果回报后纳入确诊口径。",
        "en": "A German female passenger died onboard; this fatality was moved into confirmed classification after later laboratory results."
      },
      "sourceIds": [
        "who-don600-2026-05-08",
        "afp-2026-05-11",
        "ap-timeline-2026-05-08"
      ],
      "observedDelta": 0
    },
    {
      "date": "2026-04-11",
      "countryCode": "NL",
      "countryZh": "荷兰",
      "countryEn": "Netherlands",
      "confirmedDelta": 0,
      "probableDelta": 1,
      "deathsDelta": 1,
      "description": {
        "zh": "荷兰籍男性（病例1）在船上死亡，未做病原学检测，归为可能病例。",
        "en": "A Dutch male (Case 1) died onboard without microbiological testing and was classified as probable."
      },
      "sourceIds": [
        "who-don600-2026-05-08",
        "afp-2026-05-11",
        "ap-timeline-2026-05-08"
      ],
      "observedDelta": 0
    }
  ],
  "series": {
    "dates": [
      "2026-04-11",
      "2026-05-02",
      "2026-05-04",
      "2026-05-05",
      "2026-05-06",
      "2026-05-07",
      "2026-05-08",
      "2026-05-10",
      "2026-05-11",
      "2026-05-12",
      "2026-05-13",
      "2026-05-15",
      "2026-05-28"
    ],
    "global": {
      "confirmed": [
        0,
        1,
        2,
        3,
        5,
        5,
        6,
        7,
        8,
        9,
        9,
        9,
        9
      ],
      "probable": [
        1,
        1,
        1,
        1,
        1,
        1,
        2,
        2,
        2,
        2,
        2,
        2,
        2
      ],
      "deaths": [
        1,
        2,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3
      ],
      "confirmedDeaths": [
        0,
        0,
        1,
        1,
        1,
        1,
        2,
        2,
        2,
        2,
        2,
        2,
        2
      ],
      "observed": [
        0,
        0,
        0,
        0,
        5,
        8,
        10,
        10,
        10,
        10,
        28,
        28,
        28
      ]
    },
    "byCountry": {
      "NL": {
        "confirmed": [
          0,
          0,
          1,
          1,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2
        ],
        "probable": [
          1,
          1,
          1,
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
        "deaths": [
          1,
          1,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2
        ],
        "confirmedDeaths": [
          0,
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
          1,
          1
        ],
        "observed": [
          0,
          0,
          0,
          0,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3
        ]
      },
      "GB": {
        "confirmed": [
          0,
          1,
          1,
          1,
          2,
          2,
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
          1,
          1,
          1,
          1,
          1,
          1,
          1
        ],
        "deaths": [
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
          0,
          0,
          0
        ],
        "confirmedDeaths": [
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
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "DE": {
        "confirmed": [
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1,
          1,
          1,
          1
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
          1,
          1,
          1,
          1,
          1,
          1
        ],
        "confirmedDeaths": [
          0,
          0,
          0,
          0,
          0,
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
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "CH": {
        "confirmed": [
          0,
          0,
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
          0,
          0,
          0
        ],
        "deaths": [
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
          0,
          0,
          0
        ],
        "confirmedDeaths": [
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
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "FR": {
        "confirmed": [
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1,
          1
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
          0,
          0,
          0
        ],
        "deaths": [
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
          0,
          0,
          0
        ],
        "confirmedDeaths": [
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
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "US": {
        "confirmed": [
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1,
          1,
          1
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
          0,
          0,
          0
        ],
        "deaths": [
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
          0,
          0,
          0
        ],
        "confirmedDeaths": [
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
          3,
          3,
          3,
          3,
          3,
          21,
          21,
          21
        ]
      },
      "ES": {
        "confirmed": [
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1
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
          0,
          0,
          0
        ],
        "deaths": [
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
          0,
          0,
          0
        ],
        "confirmedDeaths": [
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
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "CN": {
        "confirmed": [
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
          0,
          0,
          0
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
          0,
          0,
          0
        ],
        "deaths": [
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
          0,
          0,
          0
        ],
        "confirmedDeaths": [
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
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "RU": {
        "confirmed": [
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
          0,
          0,
          0
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
          0,
          0,
          0
        ],
        "deaths": [
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
          0,
          0,
          0
        ],
        "confirmedDeaths": [
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
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "ZA": {
        "confirmed": [
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
          0,
          0,
          0
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
          0,
          0,
          0
        ],
        "deaths": [
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
          0,
          0,
          0
        ],
        "confirmedDeaths": [
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
          0,
          0,
          0
        ],
        "observed": [
          0,
          0,
          0,
          0,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2
        ]
      },
      "AR": {
        "confirmed": [
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
          0,
          0,
          0
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
          0,
          0,
          0
        ],
        "deaths": [
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
          0,
          0,
          0
        ],
        "confirmedDeaths": [
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
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "SG": {
        "confirmed": [
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
          0,
          0,
          0
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
          0,
          0,
          0
        ],
        "deaths": [
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
          0,
          0,
          0
        ],
        "confirmedDeaths": [
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
          2,
          2,
          2,
          2,
          2,
          2,
          2
        ]
      }
    }
  },
  "watchlist": [
    {
      "date": "2026-05-28",
      "title": {
        "zh": "X重点监测：美国汉坦“传播”话题去噪与核验",
        "en": "X priority monitor: de-noising and verification of U.S. hantavirus \"spread\" chatter"
      },
      "note": {
        "zh": "优先跟踪高可信账号与媒体转引；将“啮齿类暴露导致的零散病例”与“人传人传播”严格区分，避免社交媒体误读直接进入病例总盘。",
        "en": "Prioritize high-credibility accounts and media-corroborated posts; strictly separate rodent-exposure sporadic cases from person-to-person transmission to avoid social-media noise entering case totals."
      },
      "sourceIds": [
        "opencli-x-hanta-us-spread-2026-05-28"
      ]
    },
    {
      "date": "2026-05-13",
      "title": {
        "zh": "外部站点差异口径复核（Elisey / Hantaflow）",
        "en": "External tracker scope reconciliation (Elisey / Hantaflow)"
      },
      "note": {
        "zh": "Elisey当前主要按ArcGIS点位状态计数（含大量Monitoring点）；Hantaflow按signals（新闻/通报提及）计数，不等同确诊人数。两者都不应与本看板“MV Hondius事件链确诊/可能病例”直接相加对比。",
        "en": "Elisey currently counts ArcGIS point statuses (including many monitoring points), while Hantaflow counts signals (news/official mentions), not confirmed patients. Neither should be directly added to or compared one-to-one with this dashboard's MV Hondius case totals."
      },
      "sourceIds": [
        "elisey-arcgis-2026-05-13",
        "hantaflow-signals-api-2026-05-13",
        "hantaflow-methodology-2026-05-13"
      ]
    },
    {
      "date": "2026-05-13",
      "title": {
        "zh": "社交平台信号：X 检索适配器异常记录",
        "en": "Social signal: X adapter execution status"
      },
      "note": {
        "zh": "opencli 的 twitter search/tweets/trending 在本次执行出现路由/空结果错误，已使用 opencli web read 对 X 检索页做补充快照，并不直接用于主统计计数。",
        "en": "opencli twitter search/tweets/trending returned routing/empty-result errors in this run; an opencli web-read snapshot of X search was captured as fallback and is not directly used for primary counting."
      },
      "sourceIds": [
        "opencli-x-signal-2026-05-13"
      ]
    },
    {
      "date": "2026-05-13",
      "title": {
        "zh": "社交平台信号：Reddit 监测讨论量高",
        "en": "Social signal: high discussion volume on Reddit monitoring threads"
      },
      "note": {
        "zh": "opencli 抓取显示 r/worldnews、r/ContagionCuriosity、r/Nebraska 等讨论持续增长；其中涉及NE/GA隔离观测与跨国追踪，但仅将官方可核实人数纳入主统计。",
        "en": "Opencli capture shows sustained growth in discussions across r/worldnews, r/ContagionCuriosity, r/Nebraska and others; posts reference NE/GA observation and cross-border tracing, while only officially verifiable counts are included in main totals."
      },
      "sourceIds": [
        "opencli-reddit-signal-2026-05-13"
      ]
    },
    {
      "id": "check-za-ar-2026-05-13",
      "date": "2026-05-13",
      "title": {
        "zh": "南非与阿根廷口径复核",
        "en": "South Africa and Argentina count re-check"
      },
      "note": {
        "zh": "按WHO/国家卫生机构口径复核：本看板按“病例所属国家”统计时，南非与阿根廷确诊均为0；南非记录为医疗处置地（2名患者入境医疗管理）。",
        "en": "Re-checked against WHO and national health sources: under this dashboard’s nationality-based case scope, both South Africa and Argentina remain at 0 confirmed cases; South Africa is recorded as a treatment location (two patients managed in-country)."
      },
      "sourceIds": [
        "za-doh-2026-05-04",
        "ar-moh-2026-05-04",
        "who-don600-2026-05-08"
      ]
    },
    {
      "date": "2026-05-07",
      "title": {
        "zh": "以色列媒体报道1例旅行相关汉坦病毒个案（东欧旅行史）",
        "en": "Israeli media reported one travel-related hantavirus case (history of travel in Eastern Europe)"
      },
      "note": {
        "zh": "该个案口径与MV Hondius安第斯病毒聚集事件不同，当前未纳入本看板主统计。",
        "en": "This case appears to be outside the MV Hondius Andes-virus cluster definition and is not included in this dashboard's main totals."
      },
      "sourceIds": [
        "jpost-2026-05-07",
        "toi-2026-05-07"
      ]
    }
  ],
  "news": [
    {
      "date": "2026-05-28",
      "title": {
        "zh": "X信号：美国汉坦病例与传播讨论升温（待官方持续核验）",
        "en": "X signal: U.S. hantavirus spread discussions rising (ongoing official verification needed)"
      },
      "summary": {
        "zh": "X平台出现大量“美国汉坦传播”讨论，包含部分疑似美国本土病例线索。当前看板将其作为社交信号跟踪，不等同于MV Hondius事件链新增确诊。",
        "en": "X discussions on \"U.S. hantavirus spread\" are increasing, including posts about possible domestic cases. The dashboard tracks this as a social signal and not as new confirmed MV Hondius-chain cases."
      },
      "sourceId": "opencli-x-hanta-us-spread-2026-05-28"
    },
    {
      "date": "2026-05-13",
      "title": {
        "zh": "AP：美国州级“被观测者”人数更新至可量化21人（含设施观测18人）",
        "en": "AP: U.S. state-level observed-person counts updated to a quantified 21 (including 18 in facilities)"
      },
      "summary": {
        "zh": "最新报道给出NE16、GA2的设施观测人数，并可量化到TX2、AZ1的州级主动观测；其余部分州仅披露“在观测”。",
        "en": "Latest reporting quantified facility monitoring in NE16 and GA2, plus state-level active monitoring in TX2 and AZ1; some additional states report monitoring without numeric disclosure."
      },
      "sourceId": "ap-2026-05-13"
    },
    {
      "date": "2026-05-12",
      "title": {
        "zh": "WHO总干事：11例均来自MV Hondius，9例确诊、2例可能",
        "en": "WHO DG: All 11 cases are linked to MV Hondius, including 9 confirmed and 2 probable"
      },
      "summary": {
        "zh": "在马德里简报中，WHO称暂未出现更大规模扩散信号，但未来几周仍可能新增病例。",
        "en": "At the Madrid briefing, WHO said there is no sign of a larger outbreak at present, while additional cases remain possible in coming weeks."
      },
      "sourceId": "who-speech-2026-05-12"
    },
    {
      "date": "2026-05-12",
      "title": {
        "zh": "AP：西班牙撤离乘客新增1例阳性",
        "en": "AP: Spain reports one newly positive evacuated passenger"
      },
      "summary": {
        "zh": "西班牙卫生部门通报新增病例，WHO同日口径仍为9例实验室确诊。",
        "en": "Spanish authorities reported a new case while WHO's same-day count remained at 9 laboratory-confirmed cases."
      },
      "sourceId": "ap-2026-05-12"
    },
    {
      "date": "2026-05-11",
      "title": {
        "zh": "AFP：按国籍统计病例，法国和美国出现新增确诊",
        "en": "AFP: Nationality-based case roundup with newly confirmed cases in France and the U.S."
      },
      "summary": {
        "zh": "AFP汇总多国官方通报，列出荷兰、英国、德国、瑞士、法国、美国、西班牙等病例状态。",
        "en": "AFP compiled official country updates across the Netherlands, UK, Germany, Switzerland, France, U.S., Spain, and others."
      },
      "sourceId": "afp-2026-05-11"
    },
    {
      "date": "2026-05-10",
      "title": {
        "zh": "AP：撤离启动后，美方和法方分别出现新增病例",
        "en": "AP: New cases emerged in U.S. and French cohorts after evacuation began"
      },
      "summary": {
        "zh": "MV Hondius在特内里费岛执行分批撤离，多国包机和医疗系统联动接收。",
        "en": "Evacuation operations began in Tenerife, with multiple countries coordinating charter flights and medical intake."
      },
      "sourceId": "ap-2026-05-10"
    },
    {
      "date": "2026-05-08",
      "title": {
        "zh": "WHO DON600：发布首轮结构化多国病例清单",
        "en": "WHO DON600: First structured multi-country case listing released"
      },
      "summary": {
        "zh": "截至5月8日，WHO报告8例（6确诊+2可能）和3例死亡，并给出统一病例定义。",
        "en": "As of May 8, WHO reported 8 cases (6 confirmed + 2 probable) and 3 deaths, with harmonized case definitions."
      },
      "sourceId": "who-don600-2026-05-08"
    },
    {
      "date": "2026-05-08",
      "title": {
        "zh": "CDC HAN00528：美国临床与实验室预警发布",
        "en": "CDC HAN00528: U.S. clinical and laboratory advisory published"
      },
      "summary": {
        "zh": "CDC判断美国公众广泛传播风险极低，但要求医疗系统强化输入病例识别与实验室生物安全。",
        "en": "CDC assessed broad U.S. community risk as extremely low while emphasizing imported case recognition and laboratory biosafety."
      },
      "sourceId": "cdc-han-2026-05-08"
    },
    {
      "date": "2026-05-06",
      "title": {
        "zh": "ECDC：发布欧洲风险评估",
        "en": "ECDC: European risk assessment published"
      },
      "summary": {
        "zh": "ECDC指出事件快速演变，强调ANDV传播效率低、欧洲无自然宿主背景。",
        "en": "ECDC described a fast-evolving event and highlighted low transmission efficiency plus no natural reservoir context in Europe."
      },
      "sourceId": "ecdc-2026-05-06"
    },
    {
      "date": "2026-05-04",
      "title": {
        "zh": "WHO DON599：首次对该邮轮聚集事件发出正式通报",
        "en": "WHO DON599: First official outbreak notice on this cruise-ship cluster"
      },
      "summary": {
        "zh": "首次通报口径为7例（2确诊+5疑似）并报告3例死亡。",
        "en": "The first notice reported 7 cases (2 confirmed + 5 suspected) and 3 deaths."
      },
      "sourceId": "who-don599-2026-05-04"
    }
  ],
  "sources": [
    {
      "id": "opencli-x-hanta-us-spread-2026-05-28",
      "publisher": "X / Curated Search",
      "title": "X signal watch: U.S. hantavirus spread discussions (non-official signal stream)",
      "date": "2026-05-28",
      "url": "https://x.com/search?q=%28hantavirus%20OR%20%22sin%20nombre%22%29%20%28US%20OR%20%22United%20States%22%20OR%20America%29%20%28outbreak%20OR%20spread%20OR%20cases%29&src=typed_query&f=live"
    },
    {
      "id": "elisey-arcgis-2026-05-13",
      "publisher": "ArcGIS Feature Service (via Elisey tracker)",
      "title": "Tracking_Hantavirus_2026 FeatureServer query endpoint",
      "date": "2026-05-13",
      "url": "https://services1.arcgis.com/wb4Og4gH5mvzQAIV/arcgis/rest/services/Tracking_Hantavirus_2026/FeatureServer/1/query?where=1%3D1&outFields=*&f=geojson&returnGeometry=true&orderByFields=CASE_%20ASC&resultRecordCount=500"
    },
    {
      "id": "hantaflow-signals-api-2026-05-13",
      "publisher": "Hantaflow",
      "title": "Global signals API snapshot",
      "date": "2026-05-13",
      "url": "https://hantaflow.com/api/signals.json"
    },
    {
      "id": "hantaflow-countries-api-2026-05-13",
      "publisher": "Hantaflow",
      "title": "Country summary API snapshot",
      "date": "2026-05-13",
      "url": "https://hantaflow.com/api/countries.json"
    },
    {
      "id": "hantaflow-methodology-2026-05-13",
      "publisher": "Hantaflow",
      "title": "Methodology: signals are not confirmed case counts outside US",
      "date": "2026-05-13",
      "url": "https://hantaflow.com/methodology"
    },
    {
      "id": "ap-2026-05-13",
      "publisher": "AP",
      "title": "One American among 18 under observation after cruise ship outbreak reflects from Nebraska quarantine",
      "date": "2026-05-13",
      "url": "https://apnews.com/article/rosmarin-hantavirus-hondius-ship-quarantine-7b4523ecc33aed0e951533e6e9766f7a"
    },
    {
      "id": "opencli-reddit-signal-2026-05-13",
      "publisher": "Reddit (opencli aggregation)",
      "title": "Reddit social signal snapshot for MV Hondius hantavirus monitoring threads",
      "date": "2026-05-13",
      "url": "https://www.reddit.com/search/?q=MV%20Hondius%20hantavirus"
    },
    {
      "id": "opencli-x-signal-2026-05-13",
      "publisher": "X (opencli web snapshot)",
      "title": "X social signal snapshot for MV Hondius hantavirus search results",
      "date": "2026-05-13",
      "url": "https://x.com/search?q=MV%20Hondius%20hantavirus&src=typed_query&f=live"
    },
    {
      "id": "who-speech-2026-05-12",
      "publisher": "WHO",
      "title": "WHO Director-General's opening remarks at the media briefing on hantavirus – 12 May 2026",
      "date": "2026-05-12",
      "url": "https://www.who.int/news-room/speeches/item/who-director-general-s-opening-remarks-at-the-media-briefing-on-hantavirus---12-may-2026"
    },
    {
      "id": "ap-2026-05-12",
      "publisher": "AP",
      "title": "Spain reports new hantavirus case in passenger from cruise ship as confirmed infections grow to 9",
      "date": "2026-05-12",
      "url": "https://apnews.com/article/hantavirus-outbreak-hondius-cruise-ship-ac42357c5c3ae1694a93f1d43ba38bdb"
    },
    {
      "id": "kommersant-2026-05-12",
      "publisher": "Коммерсантъ",
      "title": "Роспотребнадзор сообщил о низком риске распространения нового хантавируса в России",
      "date": "2026-05-12",
      "url": "https://www.kommersant.ru/doc/8654263"
    },
    {
      "id": "afp-2026-05-11",
      "publisher": "AFP (republished by Digital Journal)",
      "title": "Hantavirus: confirmed cases by nationality",
      "date": "2026-05-11",
      "url": "https://www.digitaljournal.com/world/hantavirus-confirmed-cases-by-nationality/article"
    },
    {
      "id": "ap-2026-05-10",
      "publisher": "AP",
      "title": "Evacuated cruise ship passenger tests positive for hantavirus as travelers fly home",
      "date": "2026-05-10",
      "url": "https://apnews.com/article/hantavirus-cruise-ship-hondius-tenerife-1c43c66d2b0555cf946d9e57fc65f1d4"
    },
    {
      "id": "ap-2026-05-10-us-monitoring",
      "publisher": "AP",
      "title": "Evacuated cruise ship passenger tests positive for hantavirus as travelers fly home",
      "date": "2026-05-10",
      "url": "https://apnews.com/article/hantavirus-outbreak-hondius-cruise-ship-df0e7e1fb9c7fd3e4092be06e684f644"
    },
    {
      "id": "who-don600-2026-05-08",
      "publisher": "WHO",
      "title": "Hantavirus cluster linked to cruise ship travel, Multi-country (DON600)",
      "date": "2026-05-08",
      "url": "https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON600"
    },
    {
      "id": "cdc-han-2026-05-08",
      "publisher": "CDC",
      "title": "2026 Multi-country Hantavirus Cluster Linked to Cruise Ship (HAN00528)",
      "date": "2026-05-08",
      "url": "https://www.cdc.gov/han/php/notices/han00528.html"
    },
    {
      "id": "ap-timeline-2026-05-08",
      "publisher": "AP",
      "title": "A timeline of the cruise ship hantavirus outbreak",
      "date": "2026-05-08",
      "url": "https://apnews.com/article/hantavirus-cruise-ship-timeline-events-b9eb3985b547758b1e42dbab6ceb3887"
    },
    {
      "id": "chinanews-2026-05-08",
      "publisher": "中国新闻网",
      "title": "专家：邮轮安第斯汉坦病毒疫情风险总体可控，中国暂无相关人类感染病例报告",
      "date": "2026-05-08",
      "url": "https://www.chinanews.com.cn/jk/2026/05-08/10617646.shtml"
    },
    {
      "id": "ap-2026-05-08-track-dozens",
      "publisher": "AP",
      "title": "Health officials track dozens who left hantavirus-stricken ship after first fatality",
      "date": "2026-05-08",
      "url": "https://apnews.com/article/9c70878b2ff59d187f1e34c12627cea7"
    },
    {
      "id": "jpost-2026-05-07",
      "publisher": "The Jerusalem Post",
      "title": "First hantavirus case diagnosed in Israel after trip to Eastern Europe",
      "date": "2026-05-07",
      "url": "https://www.jpost.com/israel-news/article-895478"
    },
    {
      "id": "toi-2026-05-07",
      "publisher": "The Times of Israel",
      "title": "Health Ministry reports no current hantavirus cases in Israel",
      "date": "2026-05-07",
      "url": "https://www.timesofisrael.com/health-ministry-reports-no-current-hantavirus-cases-in-israel/"
    },
    {
      "id": "ap-2026-05-07",
      "publisher": "AP",
      "title": "Scientists race to find people who may have been exposed to hantavirus on a cruise ship",
      "date": "2026-05-07",
      "url": "https://apnews.com/article/hantavirus-andes-virus-cruise-ship-rodents-e7e64b81dbee4b21c5301be9e1d945c5"
    },
    {
      "id": "who-response-2026-05-07",
      "publisher": "WHO",
      "title": "WHO's response to hantavirus cases linked to a cruise ship",
      "date": "2026-05-07",
      "url": "https://www.who.int/news/item/07-05-2026-who-s-response-to-hantavirus-cases-linked-to-a-cruise-ship"
    },
    {
      "id": "ecdc-2026-05-06",
      "publisher": "ECDC",
      "title": "Hantavirus-associated cluster of illness on a cruise ship: assessment",
      "date": "2026-05-06",
      "url": "https://www.ecdc.europa.eu/en/publications-data/hantavirus-associated-cluster-illness-cruise-ship-ecdc-assessment-and"
    },
    {
      "id": "who-don599-2026-05-04",
      "publisher": "WHO",
      "title": "Hantavirus cluster linked to cruise ship travel, Multi-country (DON599)",
      "date": "2026-05-04",
      "url": "https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON599"
    },
    {
      "id": "za-doh-2026-05-04",
      "publisher": "South Africa Department of Health",
      "title": "Media Statement: Health Department confirms deaths of international tourists from severe acute respiratory infection",
      "date": "2026-05-04",
      "url": "https://www.health.gov.za/wp-content/uploads/2026/05/Health-Department-confirms-the-deaths-of-international-tourists-from-severe-acute-respiratory-infection-04-May-2026.pdf"
    },
    {
      "id": "ar-moh-2026-05-04",
      "publisher": "Argentina Ministry of Health",
      "title": "Salud monitorea junto a organismos internacionales los casos de hantavirus reportados en el buque MV Hondius",
      "date": "2026-05-04",
      "url": "https://www.argentina.gob.ar/noticias/salud-monitorea-junto-organismos-internacionales-los-casos-de-hantavirus-reportados-en-el"
    }
  ],
  "observation": {
    "asOf": "2026-05-13",
    "definition": {
      "zh": "被观测者=公开来源中可量化且可归属到国家/省州的主动健康监测人数（含医疗机构隔离与居家随访）。仅提到“在观测”但未给出人数的地区，不并入统计总量。",
      "en": "Observed persons are those under active health monitoring with publicly quantified and country/state-attributable counts (including facility isolation and home follow-up). Regions that report monitoring without numeric disclosure are tracked separately and excluded from totals."
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
        "code": "CN",
        "countryZh": "中国",
        "countryEn": "China",
        "observed": 0,
        "quantifiedRegionCount": 0,
        "reportedNoCountRegionCount": 0,
        "note": {
          "zh": "公开信息未见本事件链相关省级被观测者人数披露。",
          "en": "No province-level observed-person counts tied to this event chain are publicly disclosed."
        },
        "sourceIds": [
          "chinanews-2026-05-08",
          "who-speech-2026-05-12"
        ]
      },
      {
        "code": "US",
        "countryZh": "美国",
        "countryEn": "United States",
        "observed": 21,
        "quantifiedRegionCount": 4,
        "reportedNoCountRegionCount": 2,
        "note": {
          "zh": "含州级可量化监测（NE、GA、TX、AZ）；CA、VA等州仅报告“在观测”未披露具体人数。",
          "en": "Includes quantified state-level monitoring (NE, GA, TX, AZ); states such as CA and VA reported monitoring without disclosing counts."
        },
        "sourceIds": [
          "ap-2026-05-13",
          "ap-2026-05-07"
        ]
      },
      {
        "code": "RU",
        "countryZh": "俄罗斯",
        "countryEn": "Russia",
        "observed": 0,
        "quantifiedRegionCount": 0,
        "reportedNoCountRegionCount": 0,
        "note": {
          "zh": "公开信息未见本事件链相关分州被观测者人数披露。",
          "en": "No state-level observed-person counts tied to this event chain are publicly disclosed."
        },
        "sourceIds": [
          "kommersant-2026-05-12",
          "who-speech-2026-05-12"
        ]
      }
    ],
    "regionBreakdown": {
      "CN": [
        {
          "regionCode": "CN-AH",
          "regionZh": "安徽省",
          "regionEn": "Anhui",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "chinanews-2026-05-08"
          ]
        },
        {
          "regionCode": "CN-BJ",
          "regionZh": "北京市",
          "regionEn": "Beijing",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "chinanews-2026-05-08"
          ]
        },
        {
          "regionCode": "CN-CQ",
          "regionZh": "重庆市",
          "regionEn": "Chongqing",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "chinanews-2026-05-08"
          ]
        },
        {
          "regionCode": "CN-FJ",
          "regionZh": "福建省",
          "regionEn": "Fujian",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "chinanews-2026-05-08"
          ]
        },
        {
          "regionCode": "CN-GS",
          "regionZh": "甘肃省",
          "regionEn": "Gansu",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "chinanews-2026-05-08"
          ]
        },
        {
          "regionCode": "CN-GD",
          "regionZh": "广东省",
          "regionEn": "Guangdong",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "chinanews-2026-05-08"
          ]
        },
        {
          "regionCode": "CN-GX",
          "regionZh": "广西壮族自治区",
          "regionEn": "Guangxi",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "chinanews-2026-05-08"
          ]
        },
        {
          "regionCode": "CN-GZ",
          "regionZh": "贵州省",
          "regionEn": "Guizhou",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "chinanews-2026-05-08"
          ]
        },
        {
          "regionCode": "CN-HI",
          "regionZh": "海南省",
          "regionEn": "Hainan",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "chinanews-2026-05-08"
          ]
        },
        {
          "regionCode": "CN-HE",
          "regionZh": "河北省",
          "regionEn": "Hebei",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "chinanews-2026-05-08"
          ]
        },
        {
          "regionCode": "CN-HL",
          "regionZh": "黑龙江省",
          "regionEn": "Heilongjiang",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "chinanews-2026-05-08"
          ]
        },
        {
          "regionCode": "CN-HA",
          "regionZh": "河南省",
          "regionEn": "Henan",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "chinanews-2026-05-08"
          ]
        },
        {
          "regionCode": "CN-HK",
          "regionZh": "香港特别行政区",
          "regionEn": "Hong Kong SAR",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "chinanews-2026-05-08"
          ]
        },
        {
          "regionCode": "CN-HB",
          "regionZh": "湖北省",
          "regionEn": "Hubei",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "chinanews-2026-05-08"
          ]
        },
        {
          "regionCode": "CN-HN",
          "regionZh": "湖南省",
          "regionEn": "Hunan",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "chinanews-2026-05-08"
          ]
        },
        {
          "regionCode": "CN-NM",
          "regionZh": "内蒙古自治区",
          "regionEn": "Inner Mongolia",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "chinanews-2026-05-08"
          ]
        },
        {
          "regionCode": "CN-JS",
          "regionZh": "江苏省",
          "regionEn": "Jiangsu",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "chinanews-2026-05-08"
          ]
        },
        {
          "regionCode": "CN-JX",
          "regionZh": "江西省",
          "regionEn": "Jiangxi",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "chinanews-2026-05-08"
          ]
        },
        {
          "regionCode": "CN-JL",
          "regionZh": "吉林省",
          "regionEn": "Jilin",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "chinanews-2026-05-08"
          ]
        },
        {
          "regionCode": "CN-LN",
          "regionZh": "辽宁省",
          "regionEn": "Liaoning",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "chinanews-2026-05-08"
          ]
        },
        {
          "regionCode": "CN-MO",
          "regionZh": "澳门特别行政区",
          "regionEn": "Macau SAR",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "chinanews-2026-05-08"
          ]
        },
        {
          "regionCode": "CN-NX",
          "regionZh": "宁夏回族自治区",
          "regionEn": "Ningxia",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "chinanews-2026-05-08"
          ]
        },
        {
          "regionCode": "CN-QH",
          "regionZh": "青海省",
          "regionEn": "Qinghai",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "chinanews-2026-05-08"
          ]
        },
        {
          "regionCode": "CN-SN",
          "regionZh": "陕西省",
          "regionEn": "Shaanxi",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "chinanews-2026-05-08"
          ]
        },
        {
          "regionCode": "CN-SD",
          "regionZh": "山东省",
          "regionEn": "Shandong",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "chinanews-2026-05-08"
          ]
        },
        {
          "regionCode": "CN-SH",
          "regionZh": "上海市",
          "regionEn": "Shanghai",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "chinanews-2026-05-08"
          ]
        },
        {
          "regionCode": "CN-SX",
          "regionZh": "山西省",
          "regionEn": "Shanxi",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "chinanews-2026-05-08"
          ]
        },
        {
          "regionCode": "CN-SC",
          "regionZh": "四川省",
          "regionEn": "Sichuan",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "chinanews-2026-05-08"
          ]
        },
        {
          "regionCode": "CN-TW",
          "regionZh": "台湾",
          "regionEn": "Taiwan",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "chinanews-2026-05-08"
          ]
        },
        {
          "regionCode": "CN-TJ",
          "regionZh": "天津市",
          "regionEn": "Tianjin",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "chinanews-2026-05-08"
          ]
        },
        {
          "regionCode": "CN-XZ",
          "regionZh": "西藏自治区",
          "regionEn": "Tibet",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "chinanews-2026-05-08"
          ]
        },
        {
          "regionCode": "CN-XJ",
          "regionZh": "新疆维吾尔自治区",
          "regionEn": "Xinjiang",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "chinanews-2026-05-08"
          ]
        },
        {
          "regionCode": "CN-YN",
          "regionZh": "云南省",
          "regionEn": "Yunnan",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "chinanews-2026-05-08"
          ]
        },
        {
          "regionCode": "CN-ZJ",
          "regionZh": "浙江省",
          "regionEn": "Zhejiang",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "chinanews-2026-05-08"
          ]
        }
      ],
      "US": [
        {
          "regionCode": "US-AL",
          "regionZh": "阿拉巴马州",
          "regionEn": "Alabama",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "ap-2026-05-13"
          ]
        },
        {
          "regionCode": "US-AK",
          "regionZh": "阿拉斯加州",
          "regionEn": "Alaska",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "ap-2026-05-13"
          ]
        },
        {
          "regionCode": "US-AZ",
          "regionZh": "亚利桑那",
          "regionEn": "Arizona",
          "observed": 1,
          "status": "counted",
          "sourceIds": [
            "ap-2026-05-07"
          ]
        },
        {
          "regionCode": "US-AR",
          "regionZh": "阿肯色州",
          "regionEn": "Arkansas",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "ap-2026-05-13"
          ]
        },
        {
          "regionCode": "US-CA",
          "regionZh": "加利福尼亚州",
          "regionEn": "California",
          "observed": 0,
          "status": "reported_no_count",
          "sourceIds": [
            "ap-2026-05-07"
          ]
        },
        {
          "regionCode": "US-CO",
          "regionZh": "科罗拉多州",
          "regionEn": "Colorado",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "ap-2026-05-13"
          ]
        },
        {
          "regionCode": "US-CT",
          "regionZh": "康涅狄格州",
          "regionEn": "Connecticut",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "ap-2026-05-13"
          ]
        },
        {
          "regionCode": "US-DE",
          "regionZh": "特拉华州",
          "regionEn": "Delaware",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "ap-2026-05-13"
          ]
        },
        {
          "regionCode": "US-FL",
          "regionZh": "佛罗里达",
          "regionEn": "Florida",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "ap-2026-05-13"
          ]
        },
        {
          "regionCode": "US-GA",
          "regionZh": "乔治亚州",
          "regionEn": "Georgia",
          "observed": 2,
          "status": "counted",
          "sourceIds": [
            "ap-2026-05-13"
          ]
        },
        {
          "regionCode": "US-HI",
          "regionZh": "夏威夷",
          "regionEn": "Hawaii",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "ap-2026-05-13"
          ]
        },
        {
          "regionCode": "US-ID",
          "regionZh": "爱达荷州",
          "regionEn": "Idaho",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "ap-2026-05-13"
          ]
        },
        {
          "regionCode": "US-IL",
          "regionZh": "伊利诺伊州",
          "regionEn": "Illinois",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "ap-2026-05-13"
          ]
        },
        {
          "regionCode": "US-IN",
          "regionZh": "印第安纳州",
          "regionEn": "Indiana",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "ap-2026-05-13"
          ]
        },
        {
          "regionCode": "US-IA",
          "regionZh": "爱荷华州",
          "regionEn": "Iowa",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "ap-2026-05-13"
          ]
        },
        {
          "regionCode": "US-KS",
          "regionZh": "堪萨斯州",
          "regionEn": "Kansas",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "ap-2026-05-13"
          ]
        },
        {
          "regionCode": "US-KY",
          "regionZh": "肯塔基州",
          "regionEn": "Kentucky",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "ap-2026-05-13"
          ]
        },
        {
          "regionCode": "US-LA",
          "regionZh": "路易斯安那州",
          "regionEn": "Louisiana",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "ap-2026-05-13"
          ]
        },
        {
          "regionCode": "US-ME",
          "regionZh": "缅因州",
          "regionEn": "Maine",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "ap-2026-05-13"
          ]
        },
        {
          "regionCode": "US-MD",
          "regionZh": "马里兰州",
          "regionEn": "Maryland",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "ap-2026-05-13"
          ]
        },
        {
          "regionCode": "US-MA",
          "regionZh": "马萨诸塞州",
          "regionEn": "Massachusetts",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "ap-2026-05-13"
          ]
        },
        {
          "regionCode": "US-MI",
          "regionZh": "密歇根州",
          "regionEn": "Michigan",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "ap-2026-05-13"
          ]
        },
        {
          "regionCode": "US-MN",
          "regionZh": "明尼苏达州",
          "regionEn": "Minnesota",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "ap-2026-05-13"
          ]
        },
        {
          "regionCode": "US-MS",
          "regionZh": "密西西比州",
          "regionEn": "Mississippi",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "ap-2026-05-13"
          ]
        },
        {
          "regionCode": "US-MO",
          "regionZh": "密苏里州",
          "regionEn": "Missouri",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "ap-2026-05-13"
          ]
        },
        {
          "regionCode": "US-MT",
          "regionZh": "蒙大拿",
          "regionEn": "Montana",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "ap-2026-05-13"
          ]
        },
        {
          "regionCode": "US-NE",
          "regionZh": "内布拉斯加州",
          "regionEn": "Nebraska",
          "observed": 16,
          "status": "counted",
          "sourceIds": [
            "ap-2026-05-13",
            "ap-2026-05-10-us-monitoring"
          ]
        },
        {
          "regionCode": "US-NV",
          "regionZh": "内华达州",
          "regionEn": "Nevada",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "ap-2026-05-13"
          ]
        },
        {
          "regionCode": "US-NH",
          "regionZh": "新罕布什尔",
          "regionEn": "New Hampshire",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "ap-2026-05-13"
          ]
        },
        {
          "regionCode": "US-NJ",
          "regionZh": "新泽西州",
          "regionEn": "New Jersey",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "ap-2026-05-13"
          ]
        },
        {
          "regionCode": "US-NM",
          "regionZh": "新墨西哥州",
          "regionEn": "New Mexico",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "ap-2026-05-13"
          ]
        },
        {
          "regionCode": "US-NY",
          "regionZh": "纽约",
          "regionEn": "New York",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "ap-2026-05-13"
          ]
        },
        {
          "regionCode": "US-NC",
          "regionZh": "北卡罗来纳州",
          "regionEn": "North Carolina",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "ap-2026-05-13"
          ]
        },
        {
          "regionCode": "US-ND",
          "regionZh": "北达科他州",
          "regionEn": "North Dakota",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "ap-2026-05-13"
          ]
        },
        {
          "regionCode": "US-OH",
          "regionZh": "俄亥俄州",
          "regionEn": "Ohio",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "ap-2026-05-13"
          ]
        },
        {
          "regionCode": "US-OK",
          "regionZh": "俄克拉荷马州",
          "regionEn": "Oklahoma",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "ap-2026-05-13"
          ]
        },
        {
          "regionCode": "US-OR",
          "regionZh": "俄勒冈州",
          "regionEn": "Oregon",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "ap-2026-05-13"
          ]
        },
        {
          "regionCode": "US-PA",
          "regionZh": "宾夕法尼亚州",
          "regionEn": "Pennsylvania",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "ap-2026-05-13"
          ]
        },
        {
          "regionCode": "US-RI",
          "regionZh": "罗德岛",
          "regionEn": "Rhode Island",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "ap-2026-05-13"
          ]
        },
        {
          "regionCode": "US-SC",
          "regionZh": "南卡罗来纳州",
          "regionEn": "South Carolina",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "ap-2026-05-13"
          ]
        },
        {
          "regionCode": "US-SD",
          "regionZh": "南达科他州",
          "regionEn": "South Dakota",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "ap-2026-05-13"
          ]
        },
        {
          "regionCode": "US-TN",
          "regionZh": "田纳西州",
          "regionEn": "Tennessee",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "ap-2026-05-13"
          ]
        },
        {
          "regionCode": "US-TX",
          "regionZh": "德克萨斯州",
          "regionEn": "Texas",
          "observed": 2,
          "status": "counted",
          "sourceIds": [
            "ap-2026-05-07"
          ]
        },
        {
          "regionCode": "US-UT",
          "regionZh": "犹他州",
          "regionEn": "Utah",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "ap-2026-05-13"
          ]
        },
        {
          "regionCode": "US-VT",
          "regionZh": "佛蒙特",
          "regionEn": "Vermont",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "ap-2026-05-13"
          ]
        },
        {
          "regionCode": "US-VA",
          "regionZh": "弗吉尼亚州",
          "regionEn": "Virginia",
          "observed": 0,
          "status": "reported_no_count",
          "sourceIds": [
            "ap-2026-05-07"
          ]
        },
        {
          "regionCode": "US-WA",
          "regionZh": "华盛顿",
          "regionEn": "Washington",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "ap-2026-05-13"
          ]
        },
        {
          "regionCode": "US-WV",
          "regionZh": "西弗吉尼亚州",
          "regionEn": "West Virginia",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "ap-2026-05-13"
          ]
        },
        {
          "regionCode": "US-WI",
          "regionZh": "威斯康星州",
          "regionEn": "Wisconsin",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "ap-2026-05-13"
          ]
        },
        {
          "regionCode": "US-WY",
          "regionZh": "怀俄明州",
          "regionEn": "Wyoming",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "ap-2026-05-13"
          ]
        }
      ],
      "RU": [
        {
          "regionCode": "RU-AD",
          "regionZh": "阿迪格共和国",
          "regionEn": "Adygea",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "kommersant-2026-05-12"
          ]
        },
        {
          "regionCode": "RU-ALT",
          "regionZh": "阿尔泰",
          "regionEn": "Altai",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "kommersant-2026-05-12"
          ]
        },
        {
          "regionCode": "RU-AL",
          "regionZh": "阿尔泰",
          "regionEn": "Altai",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "kommersant-2026-05-12"
          ]
        },
        {
          "regionCode": "RU-AMU",
          "regionZh": "阿穆尔河",
          "regionEn": "Amur",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "kommersant-2026-05-12"
          ]
        },
        {
          "regionCode": "RU-ARK",
          "regionZh": "阿尔汉格尔斯克",
          "regionEn": "Arkhangelsk",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "kommersant-2026-05-12"
          ]
        },
        {
          "regionCode": "RU-AST",
          "regionZh": "阿斯特拉罕",
          "regionEn": "Astrakhan",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "kommersant-2026-05-12"
          ]
        },
        {
          "regionCode": "RU-BA",
          "regionZh": "巴什科尔托斯坦共和国",
          "regionEn": "Bashkortostan",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "kommersant-2026-05-12"
          ]
        },
        {
          "regionCode": "RU-BEL",
          "regionZh": "别尔哥罗德",
          "regionEn": "Belgorod",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "kommersant-2026-05-12"
          ]
        },
        {
          "regionCode": "RU-BRY",
          "regionZh": "布良斯克",
          "regionEn": "Bryansk",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "kommersant-2026-05-12"
          ]
        },
        {
          "regionCode": "RU-BU",
          "regionZh": "布里亚特共和国",
          "regionEn": "Buryatia",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "kommersant-2026-05-12"
          ]
        },
        {
          "regionCode": "RU-CE",
          "regionZh": "车臣",
          "regionEn": "Chechen",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "kommersant-2026-05-12"
          ]
        },
        {
          "regionCode": "RU-CHE",
          "regionZh": "车里雅宾斯克",
          "regionEn": "Chelyabinsk",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "kommersant-2026-05-12"
          ]
        },
        {
          "regionCode": "RU-CHU",
          "regionZh": "楚科奇",
          "regionEn": "Chukotka",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "kommersant-2026-05-12"
          ]
        },
        {
          "regionCode": "RU-CU",
          "regionZh": "楚瓦什人",
          "regionEn": "Chuvash",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "kommersant-2026-05-12"
          ]
        },
        {
          "regionCode": "RU-DA",
          "regionZh": "达吉斯坦",
          "regionEn": "Dagestan",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "kommersant-2026-05-12"
          ]
        },
        {
          "regionCode": "RU-IN",
          "regionZh": "印古什共和国",
          "regionEn": "Ingushetia",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "kommersant-2026-05-12"
          ]
        },
        {
          "regionCode": "RU-IRK",
          "regionZh": "伊尔库茨克",
          "regionEn": "Irkutsk",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "kommersant-2026-05-12"
          ]
        },
        {
          "regionCode": "RU-IVA",
          "regionZh": "伊万诺沃",
          "regionEn": "Ivanovo",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "kommersant-2026-05-12"
          ]
        },
        {
          "regionCode": "RU-YEV",
          "regionZh": "犹太人",
          "regionEn": "Jewish",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "kommersant-2026-05-12"
          ]
        },
        {
          "regionCode": "RU-KB",
          "regionZh": "卡巴尔达-巴尔卡尔",
          "regionEn": "Kabardino-Balkar",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "kommersant-2026-05-12"
          ]
        },
        {
          "regionCode": "RU-KGD",
          "regionZh": "加里宁格勒",
          "regionEn": "Kaliningrad",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "kommersant-2026-05-12"
          ]
        },
        {
          "regionCode": "RU-KL",
          "regionZh": "卡尔梅克共和国",
          "regionEn": "Kalmykia",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "kommersant-2026-05-12"
          ]
        },
        {
          "regionCode": "RU-KLU",
          "regionZh": "卡卢加",
          "regionEn": "Kaluga",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "kommersant-2026-05-12"
          ]
        },
        {
          "regionCode": "RU-KAM",
          "regionZh": "堪察加半岛",
          "regionEn": "Kamchatka",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "kommersant-2026-05-12"
          ]
        },
        {
          "regionCode": "RU-KC",
          "regionZh": "卡拉恰伊-切尔克斯",
          "regionEn": "Karachay-Cherkess",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "kommersant-2026-05-12"
          ]
        },
        {
          "regionCode": "RU-KR",
          "regionZh": "卡累利阿",
          "regionEn": "Karelia",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "kommersant-2026-05-12"
          ]
        },
        {
          "regionCode": "RU-KEM",
          "regionZh": "克麦罗沃",
          "regionEn": "Kemerovo",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "kommersant-2026-05-12"
          ]
        },
        {
          "regionCode": "RU-KHA",
          "regionZh": "哈巴罗夫斯克",
          "regionEn": "Khabarovsk",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "kommersant-2026-05-12"
          ]
        },
        {
          "regionCode": "RU-KK",
          "regionZh": "哈卡斯",
          "regionEn": "Khakassia",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "kommersant-2026-05-12"
          ]
        },
        {
          "regionCode": "RU-KHM",
          "regionZh": "汉特-曼西",
          "regionEn": "Khanty-Mansi",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "kommersant-2026-05-12"
          ]
        },
        {
          "regionCode": "RU-KIR",
          "regionZh": "基洛夫",
          "regionEn": "Kirov",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "kommersant-2026-05-12"
          ]
        },
        {
          "regionCode": "RU-KO",
          "regionZh": "古見",
          "regionEn": "Komi",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "kommersant-2026-05-12"
          ]
        },
        {
          "regionCode": "RU-KOS",
          "regionZh": "科斯特罗马",
          "regionEn": "Kostroma",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "kommersant-2026-05-12"
          ]
        },
        {
          "regionCode": "RU-KDA",
          "regionZh": "克拉斯诺达尔",
          "regionEn": "Krasnodar",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "kommersant-2026-05-12"
          ]
        },
        {
          "regionCode": "RU-KYA",
          "regionZh": "克拉斯诺亚尔斯克",
          "regionEn": "Krasnoyarsk",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "kommersant-2026-05-12"
          ]
        },
        {
          "regionCode": "RU-KGN",
          "regionZh": "库尔干",
          "regionEn": "Kurgan",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "kommersant-2026-05-12"
          ]
        },
        {
          "regionCode": "RU-KRS",
          "regionZh": "库尔斯克",
          "regionEn": "Kursk",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "kommersant-2026-05-12"
          ]
        },
        {
          "regionCode": "RU-LEN",
          "regionZh": "列宁格勒",
          "regionEn": "Leningrad",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "kommersant-2026-05-12"
          ]
        },
        {
          "regionCode": "RU-LIP",
          "regionZh": "利佩茨克",
          "regionEn": "Lipetsk",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "kommersant-2026-05-12"
          ]
        },
        {
          "regionCode": "RU-MAG",
          "regionZh": "马加丹",
          "regionEn": "Magadan",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "kommersant-2026-05-12"
          ]
        },
        {
          "regionCode": "RU-ME",
          "regionZh": "马里埃尔",
          "regionEn": "Mari El",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "kommersant-2026-05-12"
          ]
        },
        {
          "regionCode": "RU-MO",
          "regionZh": "莫尔多瓦",
          "regionEn": "Mordovia",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "kommersant-2026-05-12"
          ]
        },
        {
          "regionCode": "RU-MOS",
          "regionZh": "莫斯科",
          "regionEn": "Moscow",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "kommersant-2026-05-12"
          ]
        },
        {
          "regionCode": "RU-MOW",
          "regionZh": "莫斯科",
          "regionEn": "Moscow",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "kommersant-2026-05-12"
          ]
        },
        {
          "regionCode": "RU-MUR",
          "regionZh": "摩尔曼斯克",
          "regionEn": "Murmansk",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "kommersant-2026-05-12"
          ]
        },
        {
          "regionCode": "RU-NEN",
          "regionZh": "涅涅茨人",
          "regionEn": "Nenets",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "kommersant-2026-05-12"
          ]
        },
        {
          "regionCode": "RU-NIZ",
          "regionZh": "下诺夫哥罗德",
          "regionEn": "Nizhny Novgorod",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "kommersant-2026-05-12"
          ]
        },
        {
          "regionCode": "RU-SE",
          "regionZh": "北奥塞梯-阿兰共和国",
          "regionEn": "North Ossetia-Alania",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "kommersant-2026-05-12"
          ]
        },
        {
          "regionCode": "RU-NGR",
          "regionZh": "诺夫哥罗德",
          "regionEn": "Novgorod",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "kommersant-2026-05-12"
          ]
        },
        {
          "regionCode": "RU-NVS",
          "regionZh": "新西伯利亚",
          "regionEn": "Novosibirsk",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "kommersant-2026-05-12"
          ]
        },
        {
          "regionCode": "RU-OMS",
          "regionZh": "鄂木斯克",
          "regionEn": "Omsk",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "kommersant-2026-05-12"
          ]
        },
        {
          "regionCode": "RU-ORE",
          "regionZh": "奥伦堡",
          "regionEn": "Orenburg",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "kommersant-2026-05-12"
          ]
        },
        {
          "regionCode": "RU-ORL",
          "regionZh": "奥廖尔",
          "regionEn": "Oryol",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "kommersant-2026-05-12"
          ]
        },
        {
          "regionCode": "RU-PNZ",
          "regionZh": "奔萨",
          "regionEn": "Penza",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "kommersant-2026-05-12"
          ]
        },
        {
          "regionCode": "RU-PER",
          "regionZh": "彼尔姆",
          "regionEn": "Perm",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "kommersant-2026-05-12"
          ]
        },
        {
          "regionCode": "RU-PRI",
          "regionZh": "滨海边疆区",
          "regionEn": "Primorsky",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "kommersant-2026-05-12"
          ]
        },
        {
          "regionCode": "RU-PSK",
          "regionZh": "普斯科夫",
          "regionEn": "Pskov",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "kommersant-2026-05-12"
          ]
        },
        {
          "regionCode": "RU-ROS",
          "regionZh": "罗斯托夫",
          "regionEn": "Rostov",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "kommersant-2026-05-12"
          ]
        },
        {
          "regionCode": "RU-RYA",
          "regionZh": "梁赞",
          "regionEn": "Ryazan",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "kommersant-2026-05-12"
          ]
        },
        {
          "regionCode": "RU-SPE",
          "regionZh": "圣彼得堡",
          "regionEn": "Saint Petersburg",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "kommersant-2026-05-12"
          ]
        },
        {
          "regionCode": "RU-SA",
          "regionZh": "萨哈",
          "regionEn": "Sakha",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "kommersant-2026-05-12"
          ]
        },
        {
          "regionCode": "RU-SAK",
          "regionZh": "萨哈林岛",
          "regionEn": "Sakhalin",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "kommersant-2026-05-12"
          ]
        },
        {
          "regionCode": "RU-SAM",
          "regionZh": "萨马拉",
          "regionEn": "Samara",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "kommersant-2026-05-12"
          ]
        },
        {
          "regionCode": "RU-SAR",
          "regionZh": "萨拉托夫",
          "regionEn": "Saratov",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "kommersant-2026-05-12"
          ]
        },
        {
          "regionCode": "RU-SMO",
          "regionZh": "斯摩棱斯克",
          "regionEn": "Smolensk",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "kommersant-2026-05-12"
          ]
        },
        {
          "regionCode": "RU-STA",
          "regionZh": "斯塔夫罗波尔",
          "regionEn": "Stavropol",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "kommersant-2026-05-12"
          ]
        },
        {
          "regionCode": "RU-SVE",
          "regionZh": "斯维尔德洛夫斯克",
          "regionEn": "Sverdlovsk",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "kommersant-2026-05-12"
          ]
        },
        {
          "regionCode": "RU-TAM",
          "regionZh": "坦波夫",
          "regionEn": "Tambov",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "kommersant-2026-05-12"
          ]
        },
        {
          "regionCode": "RU-TA",
          "regionZh": "鞑靼斯坦",
          "regionEn": "Tatarstan",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "kommersant-2026-05-12"
          ]
        },
        {
          "regionCode": "RU-TOM",
          "regionZh": "托木斯克",
          "regionEn": "Tomsk",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "kommersant-2026-05-12"
          ]
        },
        {
          "regionCode": "RU-TUL",
          "regionZh": "图拉",
          "regionEn": "Tula",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "kommersant-2026-05-12"
          ]
        },
        {
          "regionCode": "RU-TY",
          "regionZh": "图瓦",
          "regionEn": "Tuva",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "kommersant-2026-05-12"
          ]
        },
        {
          "regionCode": "RU-TVE",
          "regionZh": "特维尔",
          "regionEn": "Tver",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "kommersant-2026-05-12"
          ]
        },
        {
          "regionCode": "RU-TYU",
          "regionZh": "秋明",
          "regionEn": "Tyumen",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "kommersant-2026-05-12"
          ]
        },
        {
          "regionCode": "RU-UD",
          "regionZh": "乌德穆尔特",
          "regionEn": "Udmurt",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "kommersant-2026-05-12"
          ]
        },
        {
          "regionCode": "RU-ULY",
          "regionZh": "乌里扬诺夫斯克",
          "regionEn": "Ulyanovsk",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "kommersant-2026-05-12"
          ]
        },
        {
          "regionCode": "RU-VLA",
          "regionZh": "弗拉基米尔",
          "regionEn": "Vladimir",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "kommersant-2026-05-12"
          ]
        },
        {
          "regionCode": "RU-VGG",
          "regionZh": "伏尔加格勒州",
          "regionEn": "Volgograd Oblast",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "kommersant-2026-05-12"
          ]
        },
        {
          "regionCode": "RU-VLG",
          "regionZh": "沃洛格达",
          "regionEn": "Vologda",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "kommersant-2026-05-12"
          ]
        },
        {
          "regionCode": "RU-VOR",
          "regionZh": "沃罗涅日",
          "regionEn": "Voronezh",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "kommersant-2026-05-12"
          ]
        },
        {
          "regionCode": "RU-YAN",
          "regionZh": "亚马尔-涅涅茨",
          "regionEn": "Yamalo-Nenets",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "kommersant-2026-05-12"
          ]
        },
        {
          "regionCode": "RU-YAR",
          "regionZh": "雅罗斯拉夫尔",
          "regionEn": "Yaroslavl",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "kommersant-2026-05-12"
          ]
        },
        {
          "regionCode": "RU-ZAB",
          "regionZh": "外贝加尔地区",
          "regionEn": "Zabaykalsky",
          "observed": 0,
          "status": "no_reported_monitoring",
          "sourceIds": [
            "kommersant-2026-05-12"
          ]
        }
      ]
    }
  }
};
