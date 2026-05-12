# GitHub 公网发布（含持续更新）

## 当前入口文件
- 页面：`index.html`
- 数据：`outbreak-data.js`
- 数据校验：`validate-outbreak-data.js`
- 更新流程：`DATA-UPDATE-FLOW.md`
- Pages工作流：`.github/workflows/deploy-pages.yml`
- 定时增量工作流：`.github/workflows/scheduled-data-refresh.yml`
- 原始数据数据库索引：`raw-sources/manifest.json`

## 首次发布
1. 新建 GitHub 仓库并推送本目录代码（默认分支 `main`）。
2. 默认分支使用 `main`。
3. 仓库设置 `Settings -> Pages -> Build and deployment` 选择 `GitHub Actions`。
4. 仓库设置 `Settings -> Secrets and variables -> Actions` 新增：
   - `TAVILY_API_KEY`
5. 仓库设置 `Settings -> Actions -> General -> Workflow permissions` 选择 `Read and write permissions`（用于定时工作流自动提交增量快照）。
6. 推送后自动触发部署。
7. 访问：`https://<用户名>.github.io/<仓库名>/`

## 每次更新
1. 按 `DATA-UPDATE-FLOW.md` 抓取并核对数据。
2. 更新 `outbreak-data.js`。
3. 本地校验：
   ```bash
   node validate-outbreak-data.js
   ```
4. 推送 `main`，Pages 自动更新。

## 公网可访问的数据入口
- 页面：`https://<用户名>.github.io/<仓库名>/`
- 主数据：`https://<用户名>.github.io/<仓库名>/outbreak-data.js`
- 原始数据索引（数据库）：`https://<用户名>.github.io/<仓库名>/raw-sources/manifest.json`
- 最新原始快照目录：`https://<用户名>.github.io/<仓库名>/raw-sources/latest/`

## 自动化增量更新（原始数据数据库）
1. 定时工作流每 6 小时执行一次：
   - 拉取 Tavily 原始数据
   - 写入 `raw-sources/latest` 与 `raw-sources/history`
   - 更新 `raw-sources/manifest.json`
2. 若检测到变化，工作流会自动 commit + push。
3. push 到 `main` 后，Pages 工作流自动发布网页。
4. 若 60 天无仓库活动，GitHub 可能自动停用定时任务；需要在 Actions 页面手动重新启用。

## 为什么不会把错误数据直接发到公网
- `validate-outbreak-data.js` 会拦截常见错误：
  - 汇总与国家加总不一致
  - 累计序列倒退
  - `累计死亡（确诊）` 大于 `累计确诊`
  - 国家末值与时间序列末值不一致

建议：把 `node validate-outbreak-data.js` 加入提交前钩子或CI检查，未通过不允许发布。

## 建议上线核查清单
1. Actions 中 `Deploy static tracker to GitHub Pages` 成功。
2. Actions 中 `Scheduled raw data refresh` 可手动触发成功。
3. 公网地址可访问，`outbreak-data.js` 与 `index.html` 加载正常。
4. 中英文切换、白天/黑夜模式、地图与当日汇总等高逻辑正常。
