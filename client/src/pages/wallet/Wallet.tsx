import { ArrowDownLeft, ArrowUpRight, ChevronRight, Coins, Flame, Hourglass, Info } from "lucide-react";
import { useLocation } from "wouter";
import TopBar from "@/components/TopBar";
import { useDemo } from "@/contexts/DemoContext";
import { MEMBER } from "@/lib/data";
import { useAsyncData } from "@/hooks/useAsyncData";
import { api } from "@/lib/api";
import { ListSkeleton, Skeleton } from "@/components/Skeleton";

/** P12 點數錢包 */
export default function Wallet() {
  const [, navigate] = useLocation();
  const { points } = useDemo();
  const { data: transactions, loading } = useAsyncData(() => api.getTransactions());

  const recent = transactions?.slice(0, 4) ?? [];

  if (loading) {
    return (
      <div className="min-h-full bg-brand-cream">
        <TopBar showBack title="點數錢包" />
        <div className="px-5 pt-5 pb-8">
          <Skeleton className="h-48 w-full rounded-3xl" />
          <div className="mt-4 grid grid-cols-2 gap-3">
            <Skeleton className="h-20 rounded-2xl" />
            <Skeleton className="h-20 rounded-2xl" />
          </div>
          <div className="mt-6">
            <Skeleton className="h-5 w-24" />
            <div className="mt-3">
              <ListSkeleton count={4} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-full bg-brand-cream">
      <TopBar showBack title="點數錢包" />
      <div className="px-5 pt-5 pb-8">
        {/* 主卡 */}
        <div className="rounded-3xl bg-brand-purple-dark text-white p-6 shadow-xl shadow-brand-purple-dark/25 rotate-[-0.5deg] journal-enter">
          <p className="text-[11px] font-bold text-white/60">可用點數</p>
          <p className="mt-1 text-5xl font-black tabular tracking-tight">
            {points.toLocaleString()}
            <span className="text-lg font-bold text-white/60 ml-1.5">點</span>
          </p>
          <div className="mt-5 grid grid-cols-2 gap-3">
            <div className="rounded-2xl bg-white/10 p-3">
              <p className="text-[10px] text-white/60 flex items-center gap-1"><Hourglass size={10} /> 待生效</p>
              <p className="mt-1 font-extrabold tabular">{MEMBER.pendingPoints} 點</p>
            </div>
            <button onClick={() => navigate("/rewards")} className="rounded-2xl bg-brand-coral/20 p-3 text-left active:scale-95 transition-transform">
              <p className="text-[10px] text-brand-coral flex items-center gap-1"><Flame size={10} /> 即將到期</p>
              <p className="mt-1 font-extrabold text-brand-coral tabular">{MEMBER.expiringPoints} 點</p>
            </button>
          </div>
          <div className="mt-4 flex gap-3">
            <button
              onClick={() => navigate("/tasks")}
              className="flex-1 h-11 rounded-xl bg-brand-purple font-bold text-sm active:scale-[0.97] transition-transform"
            >
              去賺點
            </button>
            <button
              onClick={() => navigate("/rewards")}
              className="flex-1 h-11 rounded-xl bg-white/15 font-bold text-sm active:scale-[0.97] transition-transform"
            >
              去兌換
            </button>
          </div>
        </div>

        {/* 本月摘要 */}
        <div className="mt-4 grid grid-cols-2 gap-3 journal-enter journal-enter-1">
          <div className="paper-card p-4">
            <p className="text-[11px] text-muted-foreground flex items-center gap-1"><ArrowUpRight size={12} className="text-brand-mint" /> 本月取得</p>
            <p className="mt-1 text-xl font-black text-brand-mint tabular">+{MEMBER.monthEarned}</p>
          </div>
          <div className="paper-card p-4">
            <p className="text-[11px] text-muted-foreground flex items-center gap-1"><ArrowDownLeft size={12} className="text-brand-brick" /> 本月使用</p>
            <p className="mt-1 text-xl font-black text-brand-brick tabular">−{MEMBER.monthUsed}</p>
          </div>
        </div>

        {/* 最近明細 */}
        <div className="mt-6 flex items-center justify-between">
          <h2 className="font-black text-brand-ink">最近明細</h2>
          <button onClick={() => navigate("/wallet/history")} className="text-xs font-bold text-brand-purple flex items-center">
            全部 <ChevronRight size={14} />
          </button>
        </div>
        <div className="mt-3 paper-card divide-y divide-border/70 journal-enter journal-enter-2">
          {recent.map((tx) => (
            <button
              key={tx.id}
              onClick={() => navigate("/wallet/history")}
              className="w-full flex items-center gap-3 p-4 text-left active:bg-brand-lilac/40 transition-colors"
            >
              <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${tx.points > 0 ? "bg-brand-mint/15" : "bg-brand-brick/10"}`}>
                <Coins size={16} className={tx.points > 0 ? "text-brand-mint" : "text-brand-brick"} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[13px] font-bold text-brand-ink truncate">{tx.title}</p>
                <p className="text-[10px] text-muted-foreground">{tx.date} · {tx.source}</p>
              </div>
              <span className={`font-extrabold text-sm tabular shrink-0 ${tx.points > 0 ? "text-brand-mint" : "text-brand-brick"}`}>
                {tx.points > 0 ? `+${tx.points}` : tx.points}
              </span>
            </button>
          ))}
        </div>

        {/* 規則入口 */}
        <button onClick={() => navigate("/wallet/rules")} className="mt-4 w-full passport-frame p-4 flex items-center gap-3 bg-white/60 active:scale-[0.98] transition-transform journal-enter journal-enter-3">
          <Info size={16} className="text-brand-purple shrink-0" />
          <p className="text-xs text-muted-foreground text-left">
            點數如何取得、使用與到期？<span className="font-bold text-brand-ink">查看點數規則</span>
          </p>
        </button>

        {/* 會員碼入口 */}
        <button onClick={() => navigate("/wallet/code")} className="mt-3 w-full paper-card p-4 flex items-center gap-3 active:scale-[0.98] transition-transform journal-enter journal-enter-4">
          <div className="w-10 h-10 rounded-xl bg-brand-purple/15 flex items-center justify-center shrink-0">
            <Coins size={18} className="text-brand-purple" />
          </div>
          <div className="text-left">
            <p className="text-sm font-bold text-brand-ink">我的會員碼</p>
            <p className="text-[11px] text-muted-foreground">到店出示 QR，消費累積點數</p>
          </div>
          <ChevronRight size={16} className="ml-auto text-muted-foreground" />
        </button>
      </div>
    </div>
  );
}
