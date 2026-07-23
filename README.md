# EstateMap - 遺產稅試算工具

依據 **民國114年(2025) 最新稅法** 開發的專業遺產稅試算工具。

## 🚀 功能特色

- **最新稅率基礎**：完全符合 2025 年最新公告之各項扣除額與免稅額。
- **即時試算面板**：在輸入資產數據時自動計算預估稅額，提供直覺反饋。
- **資安防護**：整合安全性 ESLint 規則與 `npm audit` 稽核。

## 🛠 開發環境設定

### 前置準備

- [Node.js](https://nodejs.org/) (建議 v18 以上)
- npm

### 安裝步驟

1. 複製本專案：
   ```bash
   git clone https://github.com/lovehinalh-ux/EstateMap.git
   ```
2. 安裝依賴套件：
   ```bash
   npm install
   ```

### 開發指令

- `npm run dev`：啟動本地開發伺服器
- `npm run build`：執行專案打包 (Vite)
- `npm run lint`：執行代碼規範與安全性檢查

## 📦 部署方式

本專案已配置 GitHub Actions 自動化流程。當推送到 `main` 分支時，系統會自動執行 Build 以確保代碼品質。

## ⚠️ 免責聲明

本工具之試算結果僅供參考。實際應納稅額應以稅捐稽徵機關之最終核定為準。如有複雜稅務需求，建議諮詢專業技術人員或會計師。

---
© 2025 Mr. Three 保險工具箱. All rights reserved.

## 關聯工具索引

**入口頁**：[個人保險顧問一頁式名片 (Blue Pro)](https://github.com/lovehinalh-ux/Personal-One-Page-Introduction--Blue-Pro-type)

此工具與以下 8 個工具同屬同一生態系，統一由入口頁串接：

| 工具名稱 | 部署網址 | 功能說明 |
|---------|---------|---------|
| Simple-insurance-introduction-check-list | [insurance-checklist.pages.dev](https://insurance-checklist.pages.dev/) | 保險基礎觀念介紹 + 互動式保單健診清單 |
| ClaimHelper | [claimhelper.pages.dev](https://claimhelper.pages.dev/) | 理賠申請所需文件逐步確認清單 |
| Insurance-Age-Calculator | [insurance-age-calculator.pages.dev](https://insurance-age-calculator.pages.dev/) | 保險年齡快速計算（含實歲／保齡換算） |
| CarClaim-AutoComp-Expert | [carclaim-autocomp-expert.pages.dev](https://carclaim-autocomp-expert.pages.dev/) | 車禍事故自動修繕估價輔助工具 |
| Insurance-Company-List | [insurance-company-list.pages.dev](https://insurance-company-list.pages.dev/) | 各保險公司官網 + 理賠入口連結彙整 |
| EstateMap | [estatemap.pages.dev](https://estatemap.pages.dev/) | 遺產稅試算與圖像化呈現 |
| Inheritance-Overview-Table | [inheritance-overview-table.pages.dev](https://inheritance-overview-table.pages.dev/) | 法定繼承人順序與應繼分系統表 |
| gift-tax-calculators | [gift-tax-calculators.pages.dev](https://gift-tax-calculators.pages.dev/) | 贈與稅試算（含免稅額、累進稅率） |