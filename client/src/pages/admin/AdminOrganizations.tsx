import { useLocation } from "wouter";
import { Building2, CheckCircle2, ChevronRight, XCircle } from "lucide-react";
import BrandIcon from "@/components/BrandIcon";

/** 企業管理 */
export default function AdminOrganizations() {
  const [, navigate] = useLocation();

  const orgs = [
    { id: "o1", name: "汪星球鮮食", status: "待審核", contact: "陳小姐", date: "2026/08/28" },
    { id: "o2", name: "毛起來洗護", status: "已核准", contact: "林先生", date: "2026/08/25" },
    { id: "o3", name: "毛舒服保健品", status: "已核准", contact: "王小姐", date: "2026/08/20" },
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
        <h1 className="text-2xl font-black text-brand-ink">企業管理</h1>

        <div className="mt-6 space-y-3">
          {orgs.map((o) => (
            <div key={o.id} className="paper-card p-4 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand-lilac flex items-center justify-center shrink-0">
                <Building2 size={20} className="text-brand-purple" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-brand-ink">{o.name}</p>
                <p className="text-[11px] text-muted-foreground">{o.contact} · {o.date}</p>
              </div>
              <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                o.status === "待審核" ? "bg-brand-coral/15 text-brand-coral" : "bg-brand-mint/15 text-brand-mint"
              }`}>{o.status}</span>
              {o.status === "待審核" && (
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
