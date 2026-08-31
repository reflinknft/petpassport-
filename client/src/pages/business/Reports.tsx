import { useLocation } from "wouter";
import { BarChart3, ChevronRight, Download, FileText } from "lucide-react";
import BrandIcon from "@/components/BrandIcon";

/** 成效報表 */
export default function Reports() {
  const [, navigate] = useLocation();

  const reports = [
    { id: "r1", name: "活動總覽", desc: "預算、曝光、參加、提交、通過、領券、核銷、成交", icon: BarChart3 },
    { id: "r2", name: "受眾輪廓", desc: "物種、年齡、地區、需求標籤（彙總）", icon: FileText },
    { id: "r3", name: "任務品質", desc: "完成率、駁回率、補件率、完成時間、作弊率", icon: FileText },
    { id: "r4", name: "派樣", desc: "申請、合格、出貨、領取、回饋、購買、回購", icon: FileText },
    { id: "r5", name: "歸因", desc: "來源、推廣夥伴、內容、門店、優惠券與轉換視窗", icon: FileText },
    { id: "r6", name: "成本", desc: "CPM、CPC、CPS、CPV、CPA", icon: FileText },
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
            <button onClick={() => navigate("/business/reports")} className="text-brand-purple">報表</button>
            <button onClick={() => navigate("/business/settings")} className="hover:text-brand-purple transition-colors">設定</button>
          </nav>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-brand-purple flex items-center justify-center text-white text-sm font-bold">企</div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-8 py-8">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-black text-brand-ink">成效報表</h1>
          <button className="h-10 px-5 rounded-full bg-brand-purple text-white text-sm font-bold flex items-center gap-2 active:scale-95">
            <Download size={16} /> 匯出
          </button>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4">
          {reports.map((r) => (
            <button key={r.id} className="paper-card p-5 text-left active:scale-[0.98] transition-transform">
              <div className="w-12 h-12 rounded-xl bg-brand-lilac flex items-center justify-center">
                <r.icon size={22} className="text-brand-purple" />
              </div>
              <p className="mt-3 font-bold text-brand-ink">{r.name}</p>
              <p className="mt-1 text-xs text-muted-foreground">{r.desc}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
