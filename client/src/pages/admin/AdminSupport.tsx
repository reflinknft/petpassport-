import { useLocation } from "wouter";
import { ChevronRight, Headset } from "lucide-react";
import BrandIcon from "@/components/BrandIcon";

/** 客服 */
export default function AdminSupport() {
  const [, navigate] = useLocation();

  const tickets = [
    { id: "t1", title: "點數未入帳", member: "林小毛", status: "待處理", sla: "剩 4 小時" },
    { id: "t2", title: "兌換失敗", member: "陳小姐", status: "處理中", sla: "剩 12 小時" },
    { id: "t3", title: "票券無法使用", member: "林先生", status: "已結案", sla: "已完成" },
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
        <h1 className="text-2xl font-black text-brand-ink">客服</h1>

        <div className="mt-6 space-y-3">
          {tickets.map((t) => (
            <div key={t.id} className="paper-card p-4 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand-lilac flex items-center justify-center shrink-0">
                <Headset size={20} className="text-brand-purple" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-brand-ink">{t.title}</p>
                <p className="text-[11px] text-muted-foreground">{t.member} · SLA {t.sla}</p>
              </div>
              <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                t.status === "待處理" ? "bg-brand-coral/15 text-brand-coral" : t.status === "處理中" ? "bg-brand-purple/15 text-brand-purple" : "bg-brand-mint/15 text-brand-mint"
              }`}>{t.status}</span>
              <ChevronRight size={16} className="text-muted-foreground" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
