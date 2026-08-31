import { useState } from "react";
import { useLocation } from "wouter";
import { BarChart3, Building2, ChevronRight, Coins, FileText, Plus, Store, Target, Users } from "lucide-react";
import BrandIcon from "@/components/BrandIcon";

/** 企業 Dashboard */
export default function BusinessDashboard() {
  const [, navigate] = useLocation();
  const [period, setPeriod] = useState("30日");

  const kpis = [
    { label: "曝光", value: "12,480", change: "+12%", icon: BarChart3 },
    { label: "參加", value: "3,240", change: "+8%", icon: Users },
    { label: "驗證通過", value: "2,890", change: "+15%", icon: Target },
    { label: "核銷", value: "1,240", change: "+22%", icon: Store },
  ];

  const campaigns = [
    { id: "c1", name: "熟齡犬鮮食試吃活動", status: "進行中", budget: "50,000", spent: "32,400", completion: 65 },
    { id: "c2", name: "春季健檢優惠", status: "待審核", budget: "30,000", spent: "0", completion: 0 },
    { id: "c3", name: "新客洗護體驗", status: "已結束", budget: "20,000", spent: "18,500", completion: 100 },
  ];

  return (
    <div className="min-h-screen bg-brand-cream">
      {/* 頂部導覽 */}
      <header className="sticky top-0 z-50 bg-brand-cream/90 backdrop-blur border-b border-border/60">
        <div className="max-w-6xl mx-auto px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <BrandIcon className="w-8 h-8" />
            <span className="font-black text-lg text-brand-ink">毛孩護照企業版</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-bold text-brand-sub">
            <button onClick={() => navigate("/business/dashboard")} className="text-brand-purple">總覽</button>
            <button onClick={() => navigate("/business/campaigns")} className="hover:text-brand-purple transition-colors">活動</button>
            <button onClick={() => navigate("/business/audiences")} className="hover:text-brand-purple transition-colors">受眾</button>
            <button onClick={() => navigate("/business/reports")} className="hover:text-brand-purple transition-colors">報表</button>
            <button onClick={() => navigate("/business/settings")} className="hover:text-brand-purple transition-colors">設定</button>
          </nav>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-brand-purple flex items-center justify-center text-white text-sm font-bold">企</div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-8 py-8">
        {/* 期間篩選 */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-black text-brand-ink">企業總覽</h1>
          <div className="flex gap-2">
            {["今日", "7日", "30日", "自訂"].map((p) => (
              <button
                key={p}
                onClick={() => setPeriod(p)}
                className={`px-4 h-9 rounded-full text-sm font-bold transition-all active:scale-95 ${
                  period === p ? "bg-brand-purple text-white" : "bg-white text-muted-foreground"
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        {/* KPI 卡片 */}
        <div className="mt-6 grid grid-cols-4 gap-4">
          {kpis.map((k) => (
            <div key={k.label} className="paper-card p-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-lilac flex items-center justify-center">
                  <k.icon size={18} className="text-brand-purple" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{k.label}</p>
                  <p className="text-xl font-black text-brand-ink tabular">{k.value}</p>
                </div>
              </div>
              <p className="mt-2 text-xs text-brand-mint font-bold">{k.change}</p>
            </div>
          ))}
        </div>

        {/* 預算與活動 */}
        <div className="mt-8 grid grid-cols-3 gap-6">
          <div className="col-span-2">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-black text-brand-ink">進行中活動</h2>
              <button onClick={() => navigate("/business/campaigns/new")} className="h-9 px-4 rounded-full bg-brand-purple text-white text-sm font-bold flex items-center gap-2 active:scale-95">
                <Plus size={14} /> 建立活動
              </button>
            </div>
            <div className="mt-4 space-y-3">
              {campaigns.map((c) => (
                <button key={c.id} onClick={() => navigate(`/business/campaigns/${c.id}`)} className="w-full paper-card p-4 flex items-center gap-4 text-left active:scale-[0.98] transition-transform">
                  <div className="w-12 h-12 rounded-xl bg-brand-lilac flex items-center justify-center shrink-0">
                    <FileText size={20} className="text-brand-purple" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-brand-ink truncate">{c.name}</p>
                    <p className="text-[11px] text-muted-foreground">預算 {c.budget} · 已使用 {c.spent}</p>
                  </div>
                  <div className="text-right">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                      c.status === "進行中" ? "bg-brand-mint/15 text-brand-mint" : c.status === "待審核" ? "bg-brand-coral/15 text-brand-coral" : "bg-brand-lilac text-muted-foreground"
                    }`}>{c.status}</span>
                    <p className="mt-1 text-xs text-muted-foreground">{c.completion}%</p>
                  </div>
                  <ChevronRight size={16} className="text-muted-foreground" />
                </button>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-lg font-black text-brand-ink">點數預算</h2>
            <div className="mt-4 paper-card p-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-coral/15 flex items-center justify-center">
                  <Coins size={18} className="text-brand-coral" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">可用預算</p>
                  <p className="text-xl font-black text-brand-ink tabular">17,600 點</p>
                </div>
              </div>
              <div className="mt-4 space-y-2 text-xs">
                <div className="flex justify-between"><span className="text-muted-foreground">已鎖定</span><span className="font-bold text-brand-ink">12,400 點</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">已發放</span><span className="font-bold text-brand-ink">32,400 點</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">已退款</span><span className="font-bold text-brand-ink">0 點</span></div>
              </div>
              <button className="mt-4 w-full h-10 rounded-full bg-brand-purple text-white text-sm font-bold active:scale-[0.97] transition-transform">
                加值預算
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
