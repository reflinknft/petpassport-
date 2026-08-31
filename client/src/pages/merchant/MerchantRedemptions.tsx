import { useLocation } from "wouter";
import { ChevronRight, FileText } from "lucide-react";
import BrandIcon from "@/components/BrandIcon";

/** 核銷紀錄 */
export default function MerchantRedemptions() {
  const [, navigate] = useLocation();

  const records = [
    { id: "r1", time: "2026/08/31 14:30", member: "林小毛", coupon: "洗護折抵券 NT$200", amount: "NT$800", status: "成功" },
    { id: "r2", time: "2026/08/31 13:15", member: "陳小姐", coupon: "健檢優惠券 NT$500", amount: "NT$1,200", status: "成功" },
    { id: "r3", time: "2026/08/31 11:20", member: "林先生", coupon: "用品折扣券 9折", amount: "NT$650", status: "成功" },
  ];

  return (
    <div className="min-h-screen bg-brand-cream">
      <header className="sticky top-0 z-50 bg-brand-cream/90 backdrop-blur border-b border-border/60">
        <div className="max-w-6xl mx-auto px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <BrandIcon className="w-8 h-8" />
            <span className="font-black text-lg text-brand-ink">毛孩護照商家版</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-brand-purple flex items-center justify-center text-white text-sm font-bold">店</div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-8 py-8">
        <h1 className="text-2xl font-black text-brand-ink">核銷紀錄</h1>

        <div className="mt-6 space-y-3">
          {records.map((r) => (
            <div key={r.id} className="paper-card p-4 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand-lilac flex items-center justify-center shrink-0">
                <FileText size={20} className="text-brand-purple" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-brand-ink">{r.coupon}</p>
                <p className="text-[11px] text-muted-foreground">{r.time} · {r.member}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-brand-ink">{r.amount}</p>
                <span className="text-[10px] font-bold text-brand-mint">{r.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
