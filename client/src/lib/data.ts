/**
 * 毛孩護照 DEMO 假資料層
 * 依據《毛孩點寵物點數平台_前端DEMO功能模組暨頁面規格_V1.0》第九章
 * 全部使用真實感文案，點數單位為「點」
 */

export const ASSETS = {
  logoIcon: "/manus-storage/logo-icon_f1e68a12.png",
  petJumi: "/manus-storage/pet-jumi_ae641b54.png",
  petMochi: "/manus-storage/pet-mochi_33cf73f9.png",
  heroPets: "/manus-storage/hero-pets_dcd4ab81.png",
  rewardGrooming: "/manus-storage/reward-grooming_8cf75630.png",
  rewardHealth: "/manus-storage/reward-health_ce7682af.png",
  rewardSupplies: "/manus-storage/reward-supplies_7608dad6.png",
  storeGrooming: "/manus-storage/store-grooming_668c5dc7.png",
  storeSupplies: "/manus-storage/store-supplies_23714590.png",
  storeVet: "/manus-storage/store-vet_39cba146.png",
  contentSenior: "/manus-storage/content-senior_7bb20f19.png",
  contentCourse: "/manus-storage/content-course_e62b4ef5.png",
  contentNutrition: "/manus-storage/content-nutrition_85b1f6da.png",
};

export interface Pet {
  id: string;
  name: string;
  species: "dog" | "cat";
  breed: string;
  age: number;
  gender: "male" | "female";
  weight: number;
  photo: string;
  completeness: number;
  tags: string[];
}

export interface Task {
  id: string;
  type: "newbie" | "content" | "course" | "visit" | "daily";
  typeLabel: string;
  title: string;
  points: number;
  deadline: string;
  progress: number; // 0-100
  status: "available" | "ongoing" | "pending" | "claimable" | "done";
  description: string;
  steps: string[];
  petCondition?: string;
}

export interface Reward {
  id: string;
  title: string;
  points: number;
  refValue: string;
  image: string;
  category: string;
  merchant: string;
  merchantId: string;
  validDays: number;
  stock: number;
  hot?: boolean;
  nearby?: boolean;
  description: string;
  terms: string[];
}

export interface Merchant {
  id: string;
  name: string;
  branch: string;
  category: string;
  distance: string;
  hours: string;
  phone: string;
  address: string;
  image: string;
  open: boolean;
  services: string[];
}

export interface Transaction {
  id: string;
  title: string;
  points: number; // 正為取得，負為使用
  date: string;
  source: string;
  status: "done" | "pending" | "expiring";
  serial: string;
}

export interface Coupon {
  id: string;
  rewardId: string;
  title: string;
  merchant: string;
  merchantId: string;
  points: number;
  code: string;
  expireDate: string;
  status: "usable" | "used" | "expired";
  image: string;
}

export interface Notification {
  id: string;
  type: "points" | "expire" | "coupon" | "task";
  title: string;
  body: string;
  time: string;
  read: boolean;
}

export const MEMBER = {
  name: "林小毛",
  level: "一般會員",
  memberId: "PP-2026-08131",
  points: 1280,
  expiringPoints: 300,
  expiringDays: 30,
  pendingPoints: 120,
  monthEarned: 350,
  monthUsed: 500,
};

export const PETS: Pet[] = [
  {
    id: "jumi",
    name: "Jumi",
    species: "dog",
    breed: "玩具貴賓",
    age: 15,
    gender: "female",
    weight: 4.2,
    photo: ASSETS.petJumi,
    completeness: 80,
    tags: ["熟齡犬", "心臟保健", "定期健檢"],
  },
  {
    id: "mochi",
    name: "麻糬",
    species: "cat",
    breed: "英國短毛貓",
    age: 3,
    gender: "male",
    weight: 5.1,
    photo: ASSETS.petMochi,
    completeness: 60,
    tags: ["成貓", "化毛照護"],
  },
];

export const TASKS: Task[] = [
  {
    id: "t1",
    type: "newbie",
    typeLabel: "新手任務",
    title: "建立第一筆寵物檔案",
    points: 100,
    deadline: "不限期",
    progress: 100,
    status: "done",
    description: "完成寵物基本資料建檔，即可獲得新手見面禮 100 點。",
    steps: ["填寫寵物名字與物種", "補充品種、生日與體重", "上傳一張可愛照片"],
  },
  {
    id: "t2",
    type: "content",
    typeLabel: "內容任務",
    title: "閱讀熟齡犬照護文章",
    points: 20,
    deadline: "2026/09/15",
    progress: 0,
    status: "available",
    description: "前往 HEHO Pet 閱讀《熟齡犬的日常照護指南》，回站後完成驗證即可獲得 20 點。",
    steps: ["點擊前往 HEHO Pet 文章", "完整閱讀文章內容", "回到本頁完成驗證"],
    petCondition: "適用 7 歲以上犬貓",
  },
  {
    id: "t3",
    type: "course",
    typeLabel: "課程任務",
    title: "完成基礎照護課程",
    points: 100,
    deadline: "2026/09/30",
    progress: 40,
    status: "ongoing",
    description: "在 Teachify 完成《新手飼主必學的基礎照護》課程，預估 25 分鐘。",
    steps: ["前往 Teachify 課程頁", "完成三個單元與測驗", "系統驗證後自動入點"],
  },
  {
    id: "t4",
    type: "visit",
    typeLabel: "到店任務",
    title: "首次到店洗護體驗",
    points: 80,
    deadline: "2026/10/31",
    progress: 0,
    status: "available",
    description: "到合作洗護門店完成首次服務，由店家掃碼核銷後獲得 80 點。",
    steps: ["預約合作洗護門店", "到店出示會員 QR", "完成服務後自動入點"],
  },
  {
    id: "t5",
    type: "daily",
    typeLabel: "每日任務",
    title: "今日照護打卡",
    points: 5,
    deadline: "今日 23:59",
    progress: 0,
    status: "claimable",
    description: "記錄 Jumi 今日的飲食與精神狀態，完成每日照護打卡。",
    steps: ["填寫今日飲食狀況", "記錄精神與活動力", "提交打卡"],
  },
];

export const REWARDS: Reward[] = [
  {
    id: "r1",
    title: "洗護折抵券",
    points: 500,
    refValue: "參考價值 NT$600",
    image: ASSETS.rewardGrooming,
    category: "洗護美容",
    merchant: "毛茸茸洗護沙龍",
    merchantId: "m1",
    validDays: 60,
    stock: 32,
    hot: true,
    nearby: true,
    description: "適用全身洗護、基礎美容套餐，可折抵 NT$600。",
    terms: ["每隻寵物每次限用一張", "需提前一日預約", "不與店內其他優惠併用"],
  },
  {
    id: "r2",
    title: "健康檢查加值券",
    points: 800,
    refValue: "參考價值 NT$1,000",
    image: ASSETS.rewardHealth,
    category: "醫療保健",
    merchant: "安心動物醫院",
    merchantId: "m3",
    validDays: 90,
    stock: 15,
    hot: true,
    description: "適用熟齡犬貓基礎健檢套餐加值項目。",
    terms: ["需提前預約健檢時段", "適用 7 歲以上犬貓", "本券不具醫療診斷效力"],
  },
  {
    id: "r3",
    title: "寵物用品 95 折券",
    points: 300,
    refValue: "參考價值 依消費金額",
    image: ASSETS.rewardSupplies,
    category: "用品零食",
    merchant: "paw 選品寵物用品",
    merchantId: "m2",
    validDays: 30,
    stock: 88,
    nearby: true,
    description: "全店用品與零食享 95 折，特價品除外。",
    terms: ["特價品與處方飼料不適用", "每筆消費限用一張"],
  },
];

export const MERCHANTS: Merchant[] = [
  {
    id: "m1",
    name: "毛茸茸洗護沙龍",
    branch: "台北大安店",
    category: "洗護美容",
    distance: "1.2 km",
    hours: "10:00–20:00",
    phone: "02-2700-1234",
    address: "台北市大安區忠孝東路四段 100 號",
    image: ASSETS.storeGrooming,
    open: true,
    services: ["全身洗護", "基礎美容", "SPA 護理"],
  },
  {
    id: "m2",
    name: "paw 選品寵物用品",
    branch: "新北板橋店",
    category: "用品零食",
    distance: "3.5 km",
    hours: "11:00–21:30",
    phone: "02-2250-5678",
    address: "新北市板橋區文化路一段 200 號",
    image: ASSETS.storeSupplies,
    open: true,
    services: ["用品零售", "鮮食吧", "自助洗"],
  },
  {
    id: "m3",
    name: "安心動物醫院",
    branch: "台北信義院",
    category: "醫療保健",
    distance: "2.1 km",
    hours: "09:00–21:00",
    phone: "02-2720-9012",
    address: "台北市信義區松仁路 50 號",
    image: ASSETS.storeVet,
    open: false,
    services: ["一般門診", "健康檢查", "疫苗施打"],
  },
];

export const TRANSACTIONS: Transaction[] = [
  { id: "tx1", title: "新手任務｜建立寵物檔案", points: 100, date: "2026/08/20", source: "任務中心", status: "done", serial: "TXN-20260820-001" },
  { id: "tx2", title: "內容任務｜熟齡照護文章", points: 20, date: "2026/08/22", source: "HEHO Pet", status: "done", serial: "TXN-20260822-014" },
  { id: "tx3", title: "兌換｜洗護折抵券", points: -500, date: "2026/08/25", source: "權益中心", status: "done", serial: "TXN-20260825-006" },
  { id: "tx4", title: "活動補發｜夏日毛孩節", points: 50, date: "2026/08/28", source: "營運補發", status: "done", serial: "TXN-20260828-003" },
  { id: "tx5", title: "課程任務｜基礎照護課", points: 100, date: "待生效", source: "Teachify", status: "pending", serial: "TXN-PENDING-002" },
];

export const COUPONS: Coupon[] = [
  {
    id: "c1",
    rewardId: "r1",
    title: "洗護折抵券",
    merchant: "毛茸茸洗護沙龍 台北大安店",
    merchantId: "m1",
    points: 500,
    code: "PP-GR-8K2M-2026",
    expireDate: "2026/10/24",
    status: "usable",
    image: ASSETS.rewardGrooming,
  },
];

export const NOTIFICATIONS: Notification[] = [
  { id: "n1", type: "points", title: "點數入帳", body: "活動補發 50 點已入帳，目前可用 1,280 點。", time: "2 小時前", read: false },
  { id: "n2", type: "expire", title: "點數即將到期", body: "您有 300 點將於 30 天後到期，快去權益中心看看吧。", time: "昨天", read: false },
  { id: "n3", type: "coupon", title: "票券提醒", body: "洗護折抵券將於 10/24 到期，記得預約使用。", time: "3 天前", read: true },
  { id: "n4", type: "task", title: "任務驗證完成", body: "「閱讀熟齡犬照護文章」已驗證，20 點已入帳。", time: "5 天前", read: true },
];

export const CONTENTS = [
  {
    id: "a1",
    source: "HEHO Pet",
    title: "熟齡犬的日常照護指南：從飲食到關節保健",
    image: ASSETS.contentSenior,
    readTime: "6 分鐘",
    points: 20,
  },
  {
    id: "a2",
    source: "HEHO Pet",
    title: "鮮食怎麼搭？毛孩營養均衡的三大原則",
    image: ASSETS.contentNutrition,
    readTime: "4 分鐘",
    points: 15,
  },
];

export const COURSES = [
  {
    id: "co1",
    source: "Teachify",
    title: "新手飼主必學的基礎照護",
    image: ASSETS.contentCourse,
    duration: "25 分鐘",
    points: 100,
  },
];

/** 每日照護任務（場景二） */
export interface DailyTask {
  id: string;
  icon: string;
  title: string;
  points: number;
  done: boolean;
}

export const DAILY_TASKS: DailyTask[] = [
  { id: "d1", icon: "🚶", title: "每日散步 20 分鐘", points: 5, done: true },
  { id: "d2", icon: "💧", title: "補充飲水", points: 3, done: true },
  { id: "d3", icon: "🪥", title: "刷牙", points: 5, done: false },
  { id: "d4", icon: "🖐️", title: "梳毛", points: 3, done: false },
  { id: "d5", icon: "⚖️", title: "記錄體重", points: 5, done: false },
];

/** 品牌贊助任務（場景六） */
export interface BrandTask {
  id: string;
  brand: string;
  title: string;
  points: number;
  deadline: string;
  image: string;
  description: string;
  steps: string[];
  audience: string;
}

export const BRAND_TASKS: BrandTask[] = [
  {
    id: "b1",
    brand: "汪星球鮮食",
    title: "完成品牌問卷，領取試用包",
    points: 50,
    deadline: "2026/09/30",
    image: ASSETS.contentNutrition,
    description: "完成 5 題品牌問卷，即可獲得 50 點，並有機會收到熟齡犬鮮食試用包。",
    steps: ["前往品牌問卷頁", "完成全部 5 題", "提交後系統自動發點"],
    audience: "7 歲以上犬貓飼主",
  },
  {
    id: "b2",
    brand: "毛舒服保健品",
    title: "觀看關節保健介紹影片",
    points: 30,
    deadline: "2026/10/15",
    image: ASSETS.rewardHealth,
    description: "觀看 2 分鐘關節保健介紹影片，完成後獲得 30 點。",
    steps: ["前往影片頁", "完整觀看影片", "回答 1 題確認問題"],
    audience: "熟齡犬飼主",
  },
];

/** 點數規則（場景五） */
export const POINTS_RULES = [
  { behavior: "合作門店消費", rule: "每 100 元 1 點", limit: "依商戶合約" },
  { behavior: "首次到店", rule: "額外 50 點", limit: "每店一次" },
  { behavior: "指定服務體驗", rule: "100–300 點", limit: "活動期間" },
  { behavior: "填寫服務評價", rule: "20 點", limit: "每筆交易一次" },
  { behavior: "推薦好友到店", rule: "100 點", limit: "好友完成消費後" },
];

/** 健康提醒 */
export const HEALTH_REMINDERS = [
  { id: "h1", icon: "💉", title: "疫苗提醒", body: "Jumi 的年度疫苗將於 10 月到期，建議提前預約。", level: "info" },
  { id: "h2", icon: "🦷", title: "口腔照護", body: "已 3 天未完成刷牙任務，記得幫 Jumi 清潔口腔。", level: "warn" },
];
