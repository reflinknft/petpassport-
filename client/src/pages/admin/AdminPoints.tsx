import { useLocation } from "wouter";
import { ChevronRight, Coins } from "lucide-react";
import BrandIcon from "@/components/BrandIcon";

/** 點數管理 */
export default function AdminPoints() {
  const [, navigate] = useLocation();

  const entries = [
    { id: "e1", type: "發放", amount: "+100", account: "林小毛", source: "建立寵物檔案", time: "2026/08/31 14:30" },
    { id: "e2", type: "兌換", amount: "-500", account: "陳小姐", source: "洗護折抵券", time: "2026/08/31 13:15" },
    { id: "e3", type: "追回", amount: "-50", account: "林先生", source: "作弊沖正", time: "2026/08/31 11:20" },
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
        <h1 className="text-2xl font-black text-brand-ink">點數管理</h1>

        <div className="mt-6 space-y-3">
          {entries.map((e) => (
            <div key={e.id} className="paper-card p-4 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand-lilac flex items-center justify-center shrink-0">
                <Coins size={20} className="text-brand-purple" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-brand-ink">{e.type} · {e.source}</p>
                <p className="text-[11px] text-muted-foreground">{e.account} · {e.time}</p>
              </div>
              <span className={`font-black text-sm tabular ${e.amount.startsWith("+") ? "text-brand-mint" : "text-brand-brick"}`}>{e.amount}</span>
              <ChevronRight size={16} className="text-muted-foreground" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
