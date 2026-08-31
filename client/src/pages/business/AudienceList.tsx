import { useLocation } from "wouter";
import { ChevronRight, Plus, Users } from "lucide-react";
import BrandIcon from "@/components/BrandIcon";

/** 受眾管理 */
export default function AudienceList() {
  const [, navigate] = useLocation();

  const audiences = [
    { id: "a1", name: "熟齡犬飼主", size: "1,240", conditions: "犬 · 7歲以上 · 全台" },
    { id: "a2", name: "貓咪飼主", size: "2,890", conditions: "貓 · 全年齡 · 雙北" },
    { id: "a3", name: "新註冊會員", size: "560", conditions: "30天內註冊 · 已建檔" },
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
            <button onClick={() => navigate("/business/campaigns")} className="hover:text-brand-purple transition-colors">活動</button>
            <button onClick={() => navigate("/business/audiences")} className="text-brand-purple">受眾</button>
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
          <h1 className="text-2xl font-black text-brand-ink">受眾管理</h1>
          <button className="h-10 px-5 rounded-full bg-brand-purple text-white text-sm font-bold flex items-center gap-2 active:scale-95">
            <Plus size={16} /> 建立分群
          </button>
        </div>

        <div className="mt-6 space-y-3">
          {audiences.map((a) => (
            <div key={a.id} className="paper-card p-4 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand-lilac flex items-center justify-center shrink-0">
                <Users size={20} className="text-brand-purple" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-brand-ink">{a.name}</p>
                <p className="text-[11px] text-muted-foreground">{a.conditions}</p>
              </div>
              <span className="text-sm font-black text-brand-purple tabular">{a.size} 人</span>
              <ChevronRight size={16} className="text-muted-foreground" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
