/**
 * API 模擬層：為後端串接預留介面
 * 目前回傳假資料，未來替換為真實 fetch 呼叫
 */

import { AMBASSADOR, BRAND_TASKS, CONTENTS, COUPONS, COURSES, DAILY_TASKS, HEALTH_REMINDERS, MEMBER, MERCHANTS, NOTIFICATIONS, PETS, POINTS_RULES, REFERRALS, REWARDS, TASKS, TRANSACTIONS } from "./data";

const delay = (ms = 300) => new Promise((r) => setTimeout(r, ms));

export const api = {
  // 會員
  getMember: async () => { await delay(); return MEMBER; },
  getPoints: async () => { await delay(); return MEMBER.points; },

  // 寵物
  getPets: async () => { await delay(); return PETS; },
  getPet: async (id: string) => { await delay(); return PETS.find((p) => p.id === id); },

  // 任務
  getTasks: async () => { await delay(); return TASKS; },
  getTask: async (id: string) => { await delay(); return TASKS.find((t) => t.id === id); },
  getDailyTasks: async () => { await delay(); return DAILY_TASKS; },
  getBrandTasks: async () => { await delay(); return BRAND_TASKS; },

  // 權益
  getRewards: async () => { await delay(); return REWARDS; },
  getReward: async (id: string) => { await delay(); return REWARDS.find((r) => r.id === id); },

  // 票券
  getCoupons: async () => { await delay(); return COUPONS; },

  // 商家
  getMerchants: async () => { await delay(); return MERCHANTS; },
  getMerchant: async (id: string) => { await delay(); return MERCHANTS.find((m) => m.id === id); },

  // 交易
  getTransactions: async () => { await delay(); return TRANSACTIONS; },

  // 內容
  getContents: async () => { await delay(); return CONTENTS; },
  getCourses: async () => { await delay(); return COURSES; },

  // 通知
  getNotifications: async () => { await delay(); return NOTIFICATIONS; },

  // 健康提醒
  getHealthReminders: async () => { await delay(); return HEALTH_REMINDERS; },

  // 點數規則
  getPointsRules: async () => { await delay(); return POINTS_RULES; },

  // 大使推薦
  getReferrals: async () => { await delay(); return REFERRALS; },

  // 大使資料
  getAmbassador: async () => { await delay(); return AMBASSADOR; },
};
