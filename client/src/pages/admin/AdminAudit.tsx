import { useLocation } from "wouter";
import { ChevronRight, ShieldCheck } from "lucide-react";
import BrandIcon from "@/components/BrandIcon";

/** 稽核紀錄 */
export default function AdminAudit() {
  const [, navigate] = useLocation();

  const logs = [
    { id: "l1", action: "核准活動", actor: "營運 王小明", target: "熟齡犬鮮食試吃活動", time: "2026/08/31 14:30" },
    { id: "l2", action: "補點", actor: "客服 陳小華", target: "林小毛 +100 點", time: "2026/08/31 13:15" },
    { id: "l3", action: "沖正", actor: "系統", target: "林先生 -50 點", time: "2026/08/31 11:20" },
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
        <h1 className="text-2xl font-black text-brand-ink">稽核紀錄</h1>

        <div className="mt-6 space-y-3">
          {logs.map((l) => (
            <div key={l.id} className="paper-card p-4 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand-lilac flex items-center justify-center shrink-0">
                <ShieldCheck size={20} className="text-brand-purple" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-brand-ink">{l.action}</p>
                <p className="text-[11px] text-muted-foreground">{l.actor} · {l.target} · {l.time}</p>
              </div>
              <ChevronRight size={16} className="text-muted-foreground" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
