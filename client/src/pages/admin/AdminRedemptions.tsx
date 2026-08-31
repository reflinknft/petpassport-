import { useLocation } from "wouter";
import { ChevronRight, Store } from "lucide-react";
import BrandIcon from "@/components/BrandIcon";

/** 票券與核銷 */
export default function AdminRedemptions() {
  const [, navigate] = useLocation();

  const redemptions = [
    { id: "r1", coupon: "洗護折抵券 NT$200", member: "林小毛", store: "毛起來洗護沙龍", status: "成功", time: "2026/08/31 14:30" },
    { id: "r2", coupon: "健檢優惠券 NT$500", member: "陳小姐", store: "安心動物醫院", status: "成功", time: "2026/08/31 13:15" },
    { id: "r3", coupon: "用品折扣券 9折", member: "林先生", store: "毛孩用品專賣店", status: "異常", time: "2026/08/31 11:20" },
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
        <h1 className="text-2xl font-black text-brand-ink">票券與核銷</h1>

        <div className="mt-6 space-y-3">
          {redemptions.map((r) => (
            <div key={r.id} className="paper-card p-4 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand-lilac flex items-center justify-center shrink-0">
                <Store size={20} className="text-brand-purple" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-brand-ink">{r.coupon}</p>
                <p className="text-[11px] text-muted-foreground">{r.member} · {r.store} · {r.time}</p>
              </div>
              <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                r.status === "成功" ? "bg-brand-mint/15 text-brand-mint" : "bg-brand-brick/15 text-brand-brick"
              }`}>{r.status}</span>
              <ChevronRight size={16} className="text-muted-foreground" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
