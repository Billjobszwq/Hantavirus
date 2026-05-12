# Hantavirus 项目手册（快速版）

## 1. 项目目标
- 展示 2026 汉坦病毒（安第斯病毒）事件链（MV Hondius）全球确诊追踪。
- 提供地图、国家汇总、时间维度、趋势图、大洲对比、新闻流水、核验待跟踪。
- 支持中英文切换、白天/黑夜模式、自动化数据抓取与发布。

## 2. 关键文件
- 页面：`index.html`
- 页面副本：`hantavirus-outbreak-tracker-v2.html`
- 主数据：`outbreak-data.js`
- 数据校验：`validate-outbreak-data.js`
- 原始抓取脚本：`refresh-outbreak-raw-data.sh`
- 原始数据索引脚本：`scripts/update-raw-manifest.js`
- 发布工作流：`.github/workflows/deploy-pages.yml`
- 定时更新工作流：`.github/workflows/scheduled-data-refresh.yml`
- 原始数据“数据库索引”：`raw-sources/manifest.json`

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

## 4. 数据更新规则（必须遵守）
- 主看板只统计 MV Hondius 事件链。
- 非同一事件链信息进入 `watchlist`，不并入主统计。
- 更新 `outbreak-data.js` 时，至少同步检查：
  - `summary`
  - `countries`
  - `timeline`
  - `series.global / series.byCountry`
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
- 流程：抓取 -> 校验 -> 提交增量 -> 直接部署 Pages

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

## 9. 维护清单（每次更新照做）
1. 抓取原始数据（脚本）。
2. 按口径更新 `outbreak-data.js`。
3. 运行 `node validate-outbreak-data.js`。
4. 本地看图表与表格逻辑。
5. 提交并推送 `main`。
6. 确认 Pages 链接可访问。
