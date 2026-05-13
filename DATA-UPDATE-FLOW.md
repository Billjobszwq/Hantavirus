# 数据获取与更新流程（全球发布版）

本流程目标：
- 保证公开页面数据可追溯
- 降低误报风险
- 让后续更新可重复、可审计

## 0) 更新原则（先定义范围）
1. 主看板只统计 `MV Hondius` 事件链病例。
2. 疑似“非同一事件链”的媒体病例（如以色列东欧旅行相关个案）放入 `watchlist`，不并入主统计。
3. 主统计口径优先：`WHO -> CDC/ECDC -> 国家卫生机构 -> AP/Reuters/AFP`。

## 1) 环境检查
```bash
opencli --version
opencli daemon status
opencli profile list
```

若 `opencli` 浏览器类命令卡住，先执行：
```bash
opencli daemon restart
opencli profile use 57a5zus5
```

说明：
- 本项目已验证 `opencli v1.7.18` 可用。
- 若 profile 未连接，脚本会自动降级为无 profile 模式执行 opencli 可用命令（如 `google news`）。
- `opencli-reuters` 可能仍依赖 profile，失败会在原始快照里记录错误字段，不会中断全流程。

## 2) 抓取原始数据（建议双通道）
### A. 官方页面抓取（opencli）
```bash
opencli --profile 57a5zus5 web read --url "https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON600" --stdout true -f md --wait 2
opencli --profile 57a5zus5 web read --url "https://www.cdc.gov/han/php/notices/han00528.html" --stdout true -f md --wait 2
opencli --profile 57a5zus5 reuters search "hantavirus cruise ship" --limit 10 -f json
```

### B. 聚合检索（Tavily + opencli news）
```bash
TAVILY_API_KEY=你的key ./refresh-outbreak-raw-data.sh
```

说明：
- 脚本会将原始结果写入：
  - `raw-sources/latest/`（最新快照）
  - `raw-sources/history/<时间>-<哈希>/`（历史快照）
  - `raw-sources/manifest.json`（快照索引，作为“原始数据数据库”）
- 社交平台补充抓取：
  - `opencli-reddit-hondius.json`
  - `opencli-twitter-hondius.json`（若执行失败会保留错误对象，便于追踪适配器状态）
- 外部站点口径快照：
  - `external-benchmarks.json`（Elisey ArcGIS点位与 Hantaflow signals 对照）

抓取后执行自动重算：
```bash
node scripts/recompute-dashboard-data.js
```
该脚本会自动重算并写回：
- `outbreak-data.js` 的 `summary`
- `meta.lastUpdatedAt / lastUpdatedDate`
- `meta.externalBenchmarks` 数值
- `series.global`（按各国时间序列汇总）
- `observation` 与 `countries[].observed` 的联动一致性
- 在 CI 中可设置 `SKIP_OPENCLI=1`，仅用 Tavily 更新原始快照。
- 可通过 `RAW_HISTORY_KEEP` 控制历史保留数量（默认 120 份）：
  ```bash
  TAVILY_API_KEY=你的key RAW_HISTORY_KEEP=200 ./refresh-outbreak-raw-data.sh
  ```

## 3) 人工校对清单（必须做）
每次更新前，逐条核对：
1. 最新总量：`总病例、确诊、可能、死亡`。
2. 新增指标：`被观测者` 国家总量是否与省/州级可量化明细一致。
3. 国家维度：是否出现新增国家、死亡变化、病例状态变更（可能 -> 确诊）。
4. 时间线：新增事件日期是否晚于现有最大日期。
5. 事件范围：新增病例是否属于 `MV Hondius` 事件链。
6. 外部对照：`external-benchmarks.json` 是否能解释与外部追踪器的统计差异（点位/信号 vs 病例）。

## 4) 更新文件
通常改两个核心文件：
- `outbreak-data.js`（数据）
- `index.html`（展示逻辑，通常不需每次改）

地图省州边界版本升级时，同时更新：
- `geo/admin1-cn-us-ru.geojson`
- `geo/admin1-cn-us-ru.js`

`outbreak-data.js` 需要同步更新：
- `summary`
- `countries`
- `timeline`
- `series.global / series.byCountry`
- `observation.countries / observation.regionBreakdown`（中/美/俄省州明细）
- `news`
- `sources`
- 若是异源信息：`watchlist`

关键联动：
- “国家汇总表”的备注列来自 `countries[].notes`。
- “核验备注与待跟踪”来自 `watchlist[]`。
- 只要 `outbreak-data.js` 更新，这两个模块会自动更新，不需要单独改页面模板。

## 5) 发布前校验（强制）
```bash
node validate-outbreak-data.js
```

通过标准：
- 汇总与国家加总一致
- `summary.observed` 与国家加总一致
- 时间序列单调不下降
- `confirmedDeaths <= confirmed`
- `series.observed` 与省/州量化明细一致
- 各国最终值与时间序列末值一致
- `timeline/news/watchlist` 的来源引用都能在 `sources` 中找到
- `countries.notes` 与 `watchlist` 中英文字段完整

## 6) 本地预览
直接打开：
- `index.html`

检查重点：
1. “确诊 vs 累计死亡（确诊）”折线图是否逻辑一致（死亡不应大于确诊）。
2. 大洲筛选是否支持：全球、欧洲、北美、亚洲、非洲、南美、大洋洲。
3. 无病例大洲是否显示为 0 曲线。

## 7) 推送并自动发布
```bash
git add outbreak-data.js index.html hantavirus-outbreak-tracker-v2.html DATA-UPDATE-FLOW.md
git commit -m "Update outbreak dashboard data"
git push origin main
```

GitHub Actions 会自动部署到 Pages。

## 8) 高风险变更策略（建议）
当出现“总量变化 > 2”或“新增死亡”时：
1. 先在 `news` 增加来源链接与时间。
2. 暂缓合并，做二次交叉校验（WHO + 至少一家国家机构或AP/Reuters）。
3. 校验通过后再推送主分支。

## 9) 自动化增量更新（GitHub Actions）
- 工作流文件：`.github/workflows/scheduled-data-refresh.yml`
- 触发方式：
  - 定时：每 6 小时
  - 手动：Actions 面板点击 `Run workflow`
- 需要配置仓库 Secret：
  - `TAVILY_API_KEY`
- 自动流程：
  1. 执行 `refresh-outbreak-raw-data.sh`
  2. 执行 `node scripts/recompute-dashboard-data.js` 自动重算看板数据
  3. 更新 `raw-sources/latest`、`raw-sources/history`、`raw-sources/manifest.json` 与 `outbreak-data.js`
  4. 运行 `node validate-outbreak-data.js`
  5. 若有变更则自动提交并推送到 `main`
  6. 推送后触发 Pages 工作流自动发布网页
