import { useLocation } from "wouter";
import { CheckCircle2, ChevronRight, FileText, XCircle } from "lucide-react";
import BrandIcon from "@/components/BrandIcon";

/** 任務驗證中心 */
export default function VerificationCenter() {
  const [, navigate] = useLocation();

  const submissions = [
    { id: "s1", member: "林小毛", mission: "每日散步打卡", status: "待審核", risk: "低", time: "2026/08/31 14:30" },
    { id: "s2", member: "陳小姐", mission: "閱讀熟齡犬文章", status: "待審核", risk: "中", time: "2026/08/31 13:15" },
    { id: "s3", member: "林先生", mission: "品牌問卷", status: "已通過", risk: "低", time: "2026/08/31 11:20" },
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
            <button onClick={() => navigate("/business/verification")} className="text-brand-purple">驗證</button>
            <button onClick={() => navigate("/business/reports")} className="hover:text-brand-purple transition-colors">報表</button>
            <button onClick={() => navigate("/business/settings")} className="hover:text-brand-purple transition-colors">設定</button>
          </nav>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-brand-purple flex items-center justify-center text-white text-sm font-bold">企</div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-8 py-8">
        <h1 className="text-2xl font-black text-brand-ink">任務驗證中心</h1>

        <div className="mt-6 space-y-3">
          {submissions.map((s) => (
            <div key={s.id} className="paper-card p-4 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand-lilac flex items-center justify-center shrink-0">
                <FileText size={20} className="text-brand-purple" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-brand-ink">{s.mission}</p>
                <p className="text-[11px] text-muted-foreground">{s.member} · 風險 {s.risk} · {s.time}</p>
              </div>
              <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                s.status === "待審核" ? "bg-brand-coral/15 text-brand-coral" : "bg-brand-mint/15 text-brand-mint"
              }`}>{s.status}</span>
              {s.status === "待審核" && (
                <div className="flex gap-2">
                  <button className="w-8 h-8 rounded-full bg-brand-mint/15 flex items-center justify-center text-brand-mint active:scale-95">
                    <CheckCircle2 size={14} />
                  </button>
                  <button className="w-8 h-8 rounded-full bg-brand-brick/15 flex items-center justify-center text-brand-brick active:scale-95">
                    <XCircle size={14} />
                  </button>
                </div>
              )}
              <ChevronRight size={16} className="text-muted-foreground" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
