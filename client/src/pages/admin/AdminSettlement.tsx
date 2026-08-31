import { useLocation } from "wouter";
import { ChevronRight, FileText } from "lucide-react";
import BrandIcon from "@/components/BrandIcon";

/** 帳務結算 */
export default function AdminSettlement() {
  const [, navigate] = useLocation();

  const settlements = [
    { id: "s1", org: "汪星球鮮食", period: "2026/08", amount: "NT$45,000", status: "待結算" },
    { id: "s2", org: "毛起來洗護", period: "2026/08", amount: "NT$28,500", status: "已結算" },
    { id: "s3", org: "毛舒服保健品", period: "2026/07", amount: "NT$32,000", status: "已結算" },
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
        <h1 className="text-2xl font-black text-brand-ink">帳務結算</h1>

        <div className="mt-6 space-y-3">
          {settlements.map((s) => (
            <div key={s.id} className="paper-card p-4 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand-lilac flex items-center justify-center shrink-0">
                <FileText size={20} className="text-brand-purple" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-brand-ink">{s.org}</p>
                <p className="text-[11px] text-muted-foreground">{s.period} · {s.amount}</p>
              </div>
              <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                s.status === "待結算" ? "bg-brand-coral/15 text-brand-coral" : "bg-brand-mint/15 text-brand-mint"
              }`}>{s.status}</span>
              <ChevronRight size={16} className="text-muted-foreground" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
