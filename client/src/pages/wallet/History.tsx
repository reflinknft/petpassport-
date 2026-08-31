import { useState } from "react";
import { Coins, FileWarning } from "lucide-react";
import TopBar from "@/components/TopBar";
import { TRANSACTIONS } from "@/lib/data";

const FILTERS = ["全部", "取得", "使用", "待生效"] as const;

/** P13 點數明細 */
export default function History() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("全部");
  const [selected, setSelected] = useState<string | null>(null);

  const list = TRANSACTIONS.filter((tx) => {
    if (filter === "取得") return tx.points > 0 && tx.status === "done";
    if (filter === "使用") return tx.points < 0;
    if (filter === "待生效") return tx.status === "pending";
    return true;
  });

  const sel = TRANSACTIONS.find((t) => t.id === selected);

  return (
    <div className="min-h-full bg-brand-cream">
      <TopBar showBack title="點數明細" />
      {/* 篩選 */}
      <div className="px-5 pt-4 flex gap-2">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-3.5 h-8 rounded-full text-xs font-bold transition-all active:scale-95 ${
              filter === f ? "bg-brand-brown text-white" : "bg-white text-muted-foreground"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="px-5 pt-4 pb-8 space-y-2.5">
        {list.map((tx, i) => (
          <button
            key={tx.id}
            onClick={() => setSelected(tx.id)}
            className={`paper-card w-full flex items-center gap-3 p-4 text-left active:scale-[0.98] transition-transform journal-enter journal-enter-${Math.min(i + 1, 5)}`}
          >
            <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${tx.points > 0 ? "bg-brand-matcha/15" : "bg-brand-brick/10"}`}>
              <Coins size={16} className={tx.points > 0 ? "text-brand-matcha" : "text-brand-brick"} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[13px] font-bold text-brand-brown truncate">{tx.title}</p>
              <p className="text-[10px] text-muted-foreground">{tx.date} · {tx.source}</p>
            </div>
            <div className="text-right shrink-0">
              <span className={`font-extrabold text-sm tabular ${tx.points > 0 ? "text-brand-matcha" : "text-brand-brick"}`}>
                {tx.points > 0 ? `+${tx.points}` : tx.points}
              </span>
              {tx.status === "pending" && <p className="text-[10px] font-bold text-brand-honey">待生效</p>}
            </div>
          </button>
        ))}
        {list.length === 0 && (
          <div className="py-16 text-center">
            <p className="text-sm font-bold text-muted-foreground">目前沒有符合的紀錄</p>
          </div>
        )}
      </div>

      {/* 交易詳情 Bottom Sheet */}
      {sel && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-brand-brown/40" onClick={() => setSelected(null)}>
          <div className="w-full max-w-[390px] bg-white rounded-t-3xl p-6 pb-8 journal-enter" onClick={(e) => e.stopPropagation()}>
            <div className="w-10 h-1 rounded-full bg-border mx-auto mb-5" />
            <p className="text-xs text-muted-foreground">交易詳情</p>
            <h2 className="mt-1 font-black text-brand-brown">{sel.title}</h2>
            <p className={`mt-3 text-3xl font-black tabular ${sel.points > 0 ? "text-brand-matcha" : "text-brand-brick"}`}>
              {sel.points > 0 ? `+${sel.points}` : sel.points} 點
            </p>
            <div className="mt-5 space-y-2.5 text-sm">
              <div className="flex justify-between"><span className="text-muted-foreground">日期</span><span className="font-bold text-brand-brown">{sel.date}</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">來源</span><span className="font-bold text-brand-brown">{sel.source}</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">稽核編號</span><span className="font-mono text-xs font-bold text-brand-brown">{sel.serial}</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">狀態</span><span className="font-bold text-brand-brown">{sel.status === "pending" ? "待生效" : "已完成"}</span></div>
            </div>
            <button className="mt-6 w-full h-11 rounded-xl border-2 border-brand-brown/15 text-brand-brown text-sm font-bold flex items-center justify-center gap-2 active:scale-[0.97] transition-transform">
              <FileWarning size={15} /> 對這筆點數有疑問？提出申訴
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
