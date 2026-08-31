import { useLocation } from "wouter";
import { ChevronRight, Gift, Package } from "lucide-react";
import BrandIcon from "@/components/BrandIcon";

/** 精準派樣 */
export default function Sampling() {
  const [, navigate] = useLocation();

  const samples = [
    { id: "s1", name: "熟齡犬鮮食試用包", sku: "SKU-001", stock: "500", applied: "320", approved: "280", shipped: "250" },
    { id: "s2", name: "貓咪零食試吃組", sku: "SKU-002", stock: "300", applied: "180", approved: "150", shipped: "120" },
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
            <button onClick={() => navigate("/business/audiences")} className="hover:text-brand-purple transition-colors">受眾</button>
            <button onClick={() => navigate("/business/sampling")} className="text-brand-purple">派樣</button>
            <button onClick={() => navigate("/business/reports")} className="hover:text-brand-purple transition-colors">報表</button>
            <button onClick={() => navigate("/business/settings")} className="hover:text-brand-purple transition-colors">設定</button>
          </nav>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-brand-purple flex items-center justify-center text-white text-sm font-bold">企</div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-8 py-8">
        <h1 className="text-2xl font-black text-brand-ink">精準派樣</h1>

        <div className="mt-6 space-y-3">
          {samples.map((s) => (
            <div key={s.id} className="paper-card p-4 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand-lilac flex items-center justify-center shrink-0">
                <Package size={20} className="text-brand-purple" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-brand-ink">{s.name}</p>
                <p className="text-[11px] text-muted-foreground">{s.sku} · 庫存 {s.stock}</p>
              </div>
              <div className="text-right text-xs">
                <p className="text-muted-foreground">申請 {s.applied} · 通過 {s.approved} · 出貨 {s.shipped}</p>
              </div>
              <ChevronRight size={16} className="text-muted-foreground" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
