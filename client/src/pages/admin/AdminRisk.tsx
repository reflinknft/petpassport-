import { useLocation } from "wouter";
import { AlertTriangle, ChevronRight, ShieldCheck } from "lucide-react";
import BrandIcon from "@/components/BrandIcon";

/** 任務風控 */
export default function AdminRisk() {
  const [, navigate] = useLocation();

  const risks = [
    { id: "r1", type: "重複提交", member: "林小毛", mission: "每日散步打卡", risk: "高", time: "2026/08/31 14:30" },
    { id: "r2", type: "異常裝置", member: "陳小姐", mission: "閱讀熟齡犬文章", risk: "中", time: "2026/08/31 13:15" },
    { id: "r3", type: "自我推薦", member: "林先生", mission: "推薦好友", risk: "高", time: "2026/08/31 11:20" },
  ];

  return (
    <div className="min-h-screen bg-brand-cream">
      <header className="sticky top-0 z-50 bg-brand-cream/90 backdrop-blur border-b border-border/60">
        <div className="max-w-6xl mx-auto px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <BrandIcon className="w-8 h-8" />
            <span className="font-black text-lg text-brand-ink">毛孩護照營運後台</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-brand-purple flex items-center justify-center text-white text-sm font-bold">管</div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-8 py-8">
        <h1 className="text-2xl font-black text-brand-ink">任務風控</h1>

        <div className="mt-6 space-y-3">
          {risks.map((r) => (
            <div key={r.id} className="paper-card p-4 flex items-center gap-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${r.risk === "高" ? "bg-brand-brick/15" : "bg-brand-coral/15"}`}>
                <AlertTriangle size={20} className={r.risk === "高" ? "text-brand-brick" : "text-brand-coral"} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-brand-ink">{r.type}</p>
                <p className="text-[11px] text-muted-foreground">{r.member} · {r.mission} · {r.time}</p>
              </div>
              <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                r.risk === "高" ? "bg-brand-brick/15 text-brand-brick" : "bg-brand-coral/15 text-brand-coral"
              }`}>{r.risk}風險</span>
              <ChevronRight size={16} className="text-muted-foreground" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
