import { useState } from "react";
import { ChevronRight, Search, Ticket } from "lucide-react";
import { useLocation } from "wouter";
import TopBar from "@/components/TopBar";
import { RewardCard } from "@/components/cards";
import { useDemo } from "@/contexts/DemoContext";
import { REWARDS } from "@/lib/data";

const CATS = ["全部", "洗護美容", "醫療保健", "用品零食"] as const;

/** P21 權益首頁 */
export default function RewardHome() {
  const [, navigate] = useLocation();
  const { points } = useDemo();
  const [cat, setCat] = useState<(typeof CATS)[number]>("全部");
  const list = REWARDS.filter((r) => cat === "全部" || r.category === cat);

  return (
    <div className="min-h-full bg-brand-cream flex flex-col">
      <TopBar title="權益中心" showBell />
      <div className="flex-1 pb-6">
        {/* 點數餘額條 */}
        <div className="px-5 pt-4">
          <button onClick={() => navigate("/wallet")} className="w-full paper-card p-4 flex items-center justify-between active:scale-[0.98] transition-transform journal-enter">
            <div>
              <p className="text-[11px] text-muted-foreground">目前可用點數</p>
              <p className="text-2xl font-black text-brand-ink tabular">{points.toLocaleString()} <span className="text-sm font-bold text-muted-foreground">點</span></p>
            </div>
            <span className="text-xs font-bold text-brand-purple flex items-center">去賺點 <ChevronRight size={14} /></span>
          </button>
        </div>

        {/* 搜尋 */}
        <div className="px-5 pt-4">
          <div className="paper-card flex items-center gap-2 px-4 h-11">
            <Search size={16} className="text-muted-foreground" />
            <input placeholder="搜尋權益、商家或分類" className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground/60" />
          </div>
        </div>

        {/* 分類 */}
        <div className="px-5 pt-4 flex gap-2 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {CATS.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`px-4 h-9 rounded-full text-sm font-bold whitespace-nowrap transition-all active:scale-95 ${
                cat === c ? "bg-brand-purple text-white" : "bg-white text-muted-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* 我的票券入口 */}
        <div className="px-5 pt-4">
          <button onClick={() => navigate("/coupons")} className="w-full passport-frame p-4 flex items-center gap-3 bg-white/60 active:scale-[0.98] transition-transform">
            <div className="w-10 h-10 rounded-xl bg-brand-purple/15 flex items-center justify-center shrink-0">
              <Ticket size={18} className="text-brand-purple" />
            </div>
            <div className="text-left">
              <p className="text-sm font-bold text-brand-ink">我的票券</p>
              <p className="text-[11px] text-muted-foreground">1 張可使用 · 到店出示 QR 核銷</p>
            </div>
            <ChevronRight size={16} className="ml-auto text-muted-foreground" />
          </button>
        </div>

        {/* 權益列表 */}
        <div className="px-5 pt-5">
          <h2 className="font-black text-brand-ink">{cat === "全部" ? "熱門權益" : cat}</h2>
          <div className="mt-3 grid grid-cols-2 gap-3">
            {list.map((r, i) => (
              <RewardCard key={r.id} reward={r} index={i} />
            ))}
          </div>
          {list.length === 0 && <p className="py-12 text-center text-sm text-muted-foreground">此分類目前沒有權益</p>}
        </div>
      </div>
    </div>
  );
}
