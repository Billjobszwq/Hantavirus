# Hantavirus 项目手册（快速版）

## 1. 项目目标
- 展示 2026 汉坦病毒（安第斯病毒）事件链（MV Hondius）全球确诊追踪。
- 提供地图、国家汇总、时间维度、趋势图、大洲对比、新闻流水、核验待跟踪。
- 新增“被观测者”口径，支持中/美/俄省州级明细与筛选。
- 地图采用双层渲染：中/美/俄省州级涂色，其他国家保持国家级涂色，并叠加 MV Hondius 航线。
- 支持中英文切换、白天/黑夜模式、自动化数据抓取与发布。

## 2. 关键文件
- 页面：`index.html`
- 页面副本：`hantavirus-outbreak-tracker-v2.html`
- 省州边界：`geo/admin1-cn-us-ru.geojson` 与 `geo/admin1-cn-us-ru.js`
- 主数据：`outbreak-data.js`
- 数据校验：`validate-outbreak-data.js`
- 原始抓取脚本：`refresh-outbreak-raw-data.sh`
- 外部口径快照脚本：`scripts/fetch-external-benchmarks.js`
- 看板自动重算脚本：`scripts/recompute-dashboard-data.js`
- 原始数据索引脚本：`scripts/update-raw-manifest.js`
- 发布工作流：`.github/workflows/deploy-pages.yml`
- 定时更新工作流：`.github/workflows/scheduled-data-refresh.yml`
- 原始数据“数据库索引”：`raw-sources/manifest.json`
- 社交信号快照：`raw-sources/latest/opencli-reddit-hondius.json`、`raw-sources/latest/opencli-twitter-hondius.json`
- 外部对照快照：`raw-sources/latest/external-benchmarks.json`

## 3. 本地使用
### 3.1 本地预览
直接打开：`index.html`

### 3.2 本地校验（发布前必须）
```bash
node validate-outbreak-data.js
```

### 3.3 手动抓取原始数据
```bash
TAVILY_API_KEY=你的key ./refresh-outbreak-raw-data.sh
```
可选参数：
- `SKIP_OPENCLI=1`：CI/无 opencli 场景使用
- `RAW_HISTORY_KEEP=180`：控制历史快照保留份数

### 3.4 手动重算看板数据（可选）
```bash
node scripts/recompute-dashboard-data.js
```
说明：
- 定时工作流会自动执行该步骤，通常无需你本地手动执行。
- 仅在你进行“结构性大改”（例如新增字段、改口径）时，才建议本地改完后再手动提交。

## 4. 数据更新规则（必须遵守）
- 主看板只统计 MV Hondius 事件链。
- 非同一事件链信息进入 `watchlist`，不并入主统计。
- 更新 `outbreak-data.js` 时，至少同步检查：
  - `summary`
  - `countries`
  - `timeline`
  - `series.global / series.byCountry`
  - `observation.countries / observation.regionBreakdown`
  - `news`
  - `sources`
  - `watchlist`（如有异源事件）

## 5. GitHub 发布信息
- 仓库：`https://github.com/Billjobszwq/Hantavirus`
- 页面：`https://billjobszwq.github.io/Hantavirus/`
- 原始数据索引：`https://billjobszwq.github.io/Hantavirus/raw-sources/manifest.json`

## 6. 自动化工作流
### 6.1 Pages 发布
- 工作流：`Deploy static tracker to GitHub Pages`
- 触发：push 到 `main` 或手动触发

### 6.2 定时增量更新
- 工作流：`Scheduled raw data refresh`
- 触发：每 6 小时 + 手动触发
- 流程：抓取 -> 自动重算 `outbreak-data.js` -> 校验 -> 提交增量 -> 直接部署 Pages

## 7. 仓库 Secrets / 设置
- Secret 必填：`TAVILY_API_KEY`
- Actions 权限：`Read and write permissions`
- Pages 构建方式：`GitHub Actions`

## 8. 常见故障快速处理
### 8.1 opencli 报错或卡住
```bash
opencli daemon restart
opencli profile use 57a5zus5
opencli --profile 57a5zus5 google news "hantavirus MV Hondius" --limit 3 --lang en --region US -f json
```

若 profile 未连接，脚本会自动降级为无 profile 模式执行可用 opencli 命令。

### 8.2 校验失败
先执行：
```bash
node validate-outbreak-data.js
```
按报错修复数据结构、来源引用、累计逻辑后再发布。

### 8.3 页面未更新
- 检查 Actions 最近运行是否成功。
- 检查 `raw-sources/manifest.json` 的 `generatedAt` 是否更新。
- 强制刷新浏览器缓存后重试。

## 9. 维护清单（分模式）
### 9.1 默认模式（自动更新）
1. 不需要本地定时操作，云端每 6 小时自动执行抓取、重算、校验、发布。
2. 每天只需检查 Actions 最近一次 `Scheduled raw data refresh` 是否为 `success`。
3. 若失败，手动触发一次同名工作流（`workflow_dispatch`）并查看日志。

### 9.2 大改模式（本地介入）
1. 本地改代码或改口径（结构性更新）。
2. 运行 `node validate-outbreak-data.js`。
3. 本地预览页面（地图、省州叠层、图表、表格）。
4. 确认无误后提交并推送 `main`。
5. 观察 Pages 部署成功后再对外说明已更新。

## 10. 本地与云端分轨策略（已生效）
1. 云端先行版本：`main` 分支，持续自动更新并对外发布。
2. 本地改造版本：可在本地分支持续迭代，不推送到 `main` 就不会影响线上自动更新。
3. 合并原则：只有“结构性大改”或你明确要求发布时，才把本地改造合并进 `main`。
4. 这保证了线上稳定运行与本地实验并行，不互相阻塞。

## 11. 当前状态快照（2026-05-13 16:00 CST）
1. 代码同步状态：本地 `main` 与 `origin/main` 一致（HEAD=`41ed789`）。
2. 自动重算状态：`Scheduled raw data refresh` 最新手动触发运行成功（Run ID `25786305311`）。
3. 页面部署状态：`Deploy static tracker to GitHub Pages` 成功。
4. 省州图层状态：线上 `geo/admin1-cn-us-ru.js` 返回 `HTTP 200`（已排除早前 404 问题）。
5. 最新数据时间：线上 `outbreak-data.js` 显示 `lastUpdatedAt=2026-05-13T16:00:43+08:00`，`checkedAt=2026-05-13T16:00:41+08:00`。

## 12. 自动更新覆盖矩阵（排障用）
### 12.1 已自动更新
1. `meta.lastUpdatedAt / lastUpdatedDate`
2. `meta.externalBenchmarks`（Elisey/Hantaflow 对照数）
3. `summary`（由 `countries` + `observation` 联动重算）
4. `series.global`（由各国序列汇总重算）
5. 两张折线图的时间轴（`series.dates` 自动对齐 `timeline` + `lastUpdatedDate`）
6. `raw-sources/latest` 与 `raw-sources/history` 快照

### 12.2 当前仍需人工维护（不会随定时抓取自动改）
1. `countries` 中确诊/可能/死亡及说明文本
2. `timeline` 事件明细与增量
3. `series.byCountry` 历史轨迹细节（最终点会校正，但新增历史事件仍需人工录入）
4. `news` 新闻流水文案
5. `watchlist` 核验备注文案
6. `sources` 来源清单条目本身
7. `observation.regionBreakdown` 省州级明细（新增国家/省州与状态描述）
