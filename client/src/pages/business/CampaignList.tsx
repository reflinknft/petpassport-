import { useLocation } from "wouter";
import { ChevronRight, FileText, Plus } from "lucide-react";
import BrandIcon from "@/components/BrandIcon";

/** 活動列表 */
export default function CampaignList() {
  const [, navigate] = useLocation();

  const campaigns = [
    { id: "c1", name: "熟齡犬鮮食試吃活動", status: "進行中", budget: "50,000", spent: "32,400", completion: 65, start: "2026/08/01", end: "2026/09/30" },
    { id: "c2", name: "春季健檢優惠", status: "待審核", budget: "30,000", spent: "0", completion: 0, start: "2026/09/01", end: "2026/10/31" },
    { id: "c3", name: "新客洗護體驗", status: "已結束", budget: "20,000", spent: "18,500", completion: 100, start: "2026/07/01", end: "2026/08/15" },
  ];

  return (
    <div className="min-h-screen bg-brand-cream">
      <header className="sticky top-0 z-50 bg-brand-cream/90 backdrop-blur border-b border-border/60">
        <div className="max-w-6xl mx-auto px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <BrandIcon className="w-8 h-8" />
            <span className="font-black text-lg text-brand-ink">毛孩護照企業版</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-bold text-brand-sub">
            <button onClick={() => navigate("/business/dashboard")} className="hover:text-brand-purple transition-colors">總覽</button>
            <button onClick={() => navigate("/business/campaigns")} className="text-brand-purple">活動</button>
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
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-black text-brand-ink">活動管理</h1>
          <button onClick={() => navigate("/business/campaigns/new")} className="h-10 px-5 rounded-full bg-brand-purple text-white text-sm font-bold flex items-center gap-2 active:scale-95">
            <Plus size={16} /> 建立活動
          </button>
        </div>

        <div className="mt-6 space-y-3">
          {campaigns.map((c) => (
            <button key={c.id} onClick={() => navigate(`/business/campaigns/${c.id}`)} className="w-full paper-card p-5 flex items-center gap-4 text-left active:scale-[0.98] transition-transform">
              <div className="w-14 h-14 rounded-xl bg-brand-lilac flex items-center justify-center shrink-0">
                <FileText size={24} className="text-brand-purple" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-base font-bold text-brand-ink truncate">{c.name}</p>
                <p className="text-xs text-muted-foreground">{c.start} - {c.end}</p>
                <div className="mt-2 flex items-center gap-4 text-xs">
                  <span className="text-muted-foreground">預算 <span className="font-bold text-brand-ink">{c.budget}</span></span>
                  <span className="text-muted-foreground">已使用 <span className="font-bold text-brand-ink">{c.spent}</span></span>
                  <span className="text-muted-foreground">完成率 <span className="font-bold text-brand-ink">{c.completion}%</span></span>
                </div>
              </div>
              <span className={`px-3 py-1.5 rounded-full text-xs font-bold ${
                c.status === "進行中" ? "bg-brand-mint/15 text-brand-mint" : c.status === "待審核" ? "bg-brand-coral/15 text-brand-coral" : "bg-brand-lilac text-muted-foreground"
              }`}>{c.status}</span>
              <ChevronRight size={18} className="text-muted-foreground" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
