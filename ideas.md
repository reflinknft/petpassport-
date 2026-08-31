# 毛孩護照 Pet Passport — 前端 DEMO 設計概念

## 三個風格方向（僅記錄，選定其一）

### 方向一：暖陽手帳（Warm Journal）
以奶油白、暖棕與橘色為主的「寵物手帳」質感，像一本翻開的護照。圓潤筆觸、紙感紋理、印章與票券元素，傳遞溫暖、信任與陪伴。
**Probability**: 0.03

### 方向二：霓虹電玩寵物（Cyber Pet Arcade）
深色背景搭配螢光綠與電紫，像素化寵物圖示與遊戲化點數動效，主打年輕族群與遊戲化體驗。
**Probability**: 0.05

### 方向三：極簡北歐獸醫（Nordic Vet Minimal）
冷灰白、鼠尾草綠與深墨字，大量留白與細線框，走專業醫療信賴感。
**Probability**: 0.02

---

## 選定方向：暖陽手帳（Warm Journal）

### Design Movement
日式雜貨手帳 × 護照印章美學（Zakka journal meets passport-stamp aesthetic）。介面像一本為毛孩打造的護照：每一頁都有戳章、票根與手寫溫度。

### Core Principles
1. **寵物優先**：首屏永遠是寵物卡片，不是商城或廣告。
2. **紙感溫度**：奶油白底、柔和紙影、圓角票券，杜絕冰冷玻璃擬態。
3. **印章式回饋**：點數入帳、任務完成、核銷成功都以「戳章」動效呈現。
4. **一頁一任務**：每頁只有一個主要 CTA，降低首次使用負擔。

### Color Philosophy
品牌色取自 LOGO：**深棕 #5C2E0B（可可棕）** 是信任與毛孩毛色；**橘 #F26B1D（暖陽橘）** 是點數與行動的能量。背景使用奶油白 #FFF9F2 與淺杏 #FDF1E3，營造「翻開手帳」的暖感。成功狀態用抹茶綠 #5E8C61，警示用蜂蜜黃 #E8A33D，錯誤用磚紅 #C2503A。

### Layout Paradigm
Mobile-first 390×844 手機殼展示於桌機中央，桌機版另有 1440px 行銷首頁。手機頁面採「不對稱卡片流」：寵物卡橫向滑動、點數卡略微旋轉 1° 像貼紙、任務卡交錯縮排，避免死板的置中網格。

### Signature Elements
1. **戳章（Stamp）**：圓形或橢圓印章圖樣，用於完成狀態與點數入帳。
2. **票券撕線（Ticket perforation）**：票券卡片中間有虛線撕口與半圓缺口。
3. **護照框線（Passport frame）**：虛線邊框與角落裝飾，呼應「護照」主題。

### Interaction Philosophy
互動像翻手帳：按壓回彈（scale 0.97）、卡片入場依序浮現（stagger 60ms）、戳章蓋下時有 200ms 彈性落定。所有動效低於 300ms，尊重 prefers-reduced-motion。

### Animation
- 入場：translateY(12px) + opacity，stagger 60ms，cubic-bezier(0.23,1,0.32,1)。
- 戳章：scale(1.15)→1 + rotate(-6deg)，200ms 彈性。
- Toast／Sheet：底部滑入 250ms ease-out。
- 點數數字：入帳時數字滾動 +300ms。

### Typography System
- 中文：**Noto Sans TC**（400/500/700/900），標題用 900 營造手帳標題感。
- 英文／數字：**Nunito**（600/700/800），圓潤字形呼應品牌圓角。
- 數字點數使用 tabular-nums，確保帳務對齊。

### Brand Essence
毛孩護照是「毛孩的點數護照」：為寵物主把每一次照護、學習與消費，都蓋成一枚值得收藏的戳章。個性：溫暖、可靠、俏皮。

### Brand Voice
語氣像一位細心的寵物保姆，不說教、不診斷。
- 範例一：「照顧毛孩，也累積每一份回饋。」
- 範例二：「這枚戳章，是 Jumi 今天健康的小證明。」

### Wordmark & Logo
沿用已設計的 LOGO：貓耳＋狗耳的寵物頭輪廓，中央橘色點數硬幣含白色小寫 p。網站 favicon 與載入畫面使用同一圖示。

### Signature Brand Color
**暖陽橘 #F26B1D** — 點數、CTA 與戳章的專屬色，一眼即認。

## Style Decisions
- 手機殼在桌機展示時，背景使用奶油白＋淡橘暈染，不使用深色。
- 所有票券卡片必須有撕線與半圓缺口，強化「護照票根」記憶點。
- 點數一律使用「點」，並區分可用／待生效／即將到期三種狀態色。
