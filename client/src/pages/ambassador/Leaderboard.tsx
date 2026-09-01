import { Crown, Medal, TrendingUp, Users } from "lucide-react";
import TopBar from "@/components/TopBar";
import { AMBASSADOR } from "@/lib/data";

/** 大使排行榜 */
export default function Leaderboard() {
  const leaders = [
    { rank: 1, name: "陳大毛", referrals: 28, points: 5600, level: "資深大使" },
    { rank: 2, name: "林小毛", referrals: 12, points: 2400, level: "正式大使" },
    { rank: 3, name: "王愛寵", referrals: 9, points: 1800, level: "正式大使" },
    { rank: 4, name: "李汪汪", referrals: 7, points: 1400, level: "見習大使" },
    { rank: 5, name: "張喵喵", referrals: 5, points: 1000, level: "見習大使" },
  ];

  return (
    <div className="min-h-full bg-brand-cream flex flex-col">
      <TopBar title="大使排行榜" showBell />
      <div className="flex-1 pb-6">
        {/* 我的排名 */}
        <div className="px-5 pt-5">
          <div className="rounded-3xl bg-brand-purple-dark text-white p-5 shadow-xl shadow-brand-purple-dark/25 journal-enter">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-brand-coral flex items-center justify-center text-2xl font-black">
                <TrendingUp size={24} />
              </div>
              <div className="flex-1">
                <p className="font-black text-lg">{AMBASSADOR.name}</p>
                <p className="text-[11px] text-white/60">{AMBASSADOR.role} · 目前排名第 2</p>
              </div>
              <span className="flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-full bg-brand-coral/25 text-brand-coral">
                <Crown size={12} /> 第 2 名
              </span>
            </div>
            <div className="mt-4 pt-4 border-t border-white/10 grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="font-black tabular">{AMBASSADOR.totalReferrals}</p>
                <p className="text-[10px] text-white/60">總推薦</p>
              </div>
              <div>
                <p className="font-black tabular">{AMBASSADOR.totalPointsEarned.toLocaleString()}</p>
                <p className="text-[10px] text-white/60">累積點數</p>
              </div>
              <div>
                <p className="font-black tabular">16</p>
                <p className="text-[10px] text-white/60">距離第 1 名</p>
              </div>
            </div>
          </div>
        </div>

        {/* 排行榜 */}
        <div className="px-5 mt-6">
          <div className="flex items-center justify-between">
            <h2 className="font-black text-brand-ink">全站推薦王</h2>
            <span className="text-xs text-muted-foreground">每月更新</span>
          </div>
          <div className="mt-3 space-y-2.5">
            {leaders.map((l) => (
              <div key={l.rank} className={`paper-card p-4 flex items-center gap-3 ${l.rank <= 3 ? "ring-2 ring-brand-coral/30" : ""}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-black text-sm ${
                  l.rank === 1 ? "bg-brand-coral text-white" : l.rank === 2 ? "bg-brand-purple text-white" : l.rank === 3 ? "bg-brand-mint text-white" : "bg-brand-lilac text-brand-purple"
                }`}>
                  {l.rank}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-brand-ink truncate">{l.name}</p>
                  <p className="text-[10px] text-muted-foreground">{l.level} · {l.referrals} 人推薦</p>
                </div>
                <span className="text-brand-coral font-black text-sm tabular">{l.points.toLocaleString()} 點</span>
              </div>
            ))}
          </div>
        </div>

        {/* 獎勵說明 */}
        <div className="px-5 mt-6">
          <div className="paper-card p-4">
            <h3 className="font-black text-brand-ink flex items-center gap-2"><Medal size={16} /> 每月獎勵</h3>
            <ul className="mt-3 space-y-2 text-xs text-muted-foreground">
              <li className="flex gap-2"><span className="w-5 h-5 rounded-full bg-brand-coral/15 text-brand-coral font-bold flex items-center justify-center shrink-0">1</span>第 1 名：額外 +1,000 點 + 專屬徽章</li>
              <li className="flex gap-2"><span className="w-5 h-5 rounded-full bg-brand-purple/15 text-brand-purple font-bold flex items-center justify-center shrink-0">2</span>第 2-3 名：額外 +500 點</li>
              <li className="flex gap-2"><span className="w-5 h-5 rounded-full bg-brand-mint/15 text-brand-mint font-bold flex items-center justify-center shrink-0">3</span>第 4-10 名：額外 +200 點</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
