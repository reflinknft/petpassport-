import { useState } from "react";
import { useLocation } from "wouter";
import { CheckCircle2, ChevronRight, Copy, Crown, Gift, Share2, TrendingUp, Users } from "lucide-react";
import TopBar from "@/components/TopBar";
import { AMBASSADOR_LEVELS } from "@/lib/data";
import { useAsyncData } from "@/hooks/useAsyncData";
import { api } from "@/lib/api";
import { ListSkeleton, Skeleton } from "@/components/Skeleton";
import { toast } from "sonner";

/** 毛孩愛心大使中心 */
export default function AmbassadorCenter() {
  const [, navigate] = useLocation();
  const [copied, setCopied] = useState(false);
  const { data: ambassador, loading: ambassadorLoading } = useAsyncData(() => api.getAmbassador());
  const { data: referrals, loading: referralsLoading } = useAsyncData(() => api.getReferrals());

  if (ambassadorLoading || referralsLoading) {
    return (
      <div className="min-h-full bg-brand-cream flex flex-col">
        <TopBar title="毛孩愛心大使" showBell />
        <div className="px-5 pt-5">
          <Skeleton className="h-32 w-full rounded-3xl" />
        </div>
        <div className="px-5 mt-6">
          <Skeleton className="h-5 w-24" />
          <div className="mt-3">
            <Skeleton className="h-24 w-full rounded-2xl" />
          </div>
        </div>
        <div className="px-5 mt-6">
          <Skeleton className="h-5 w-24" />
          <div className="mt-3">
            <ListSkeleton count={3} />
          </div>
        </div>
      </div>
    );
  }

  const copyReferralCode = () => {
    navigator.clipboard.writeText(ambassador?.referralCode ?? "");
    setCopied(true);
    toast.success("推薦碼已複製");
    setTimeout(() => setCopied(false), 2000);
  };

  const copyReferralLink = () => {
    navigator.clipboard.writeText(ambassador?.referralLink ?? "");
    toast.success("推薦連結已複製");
  };

  return (
    <div className="min-h-full bg-brand-cream flex flex-col">
      <TopBar title="毛孩愛心大使" showBell />
      <div className="flex-1 pb-6">
        {/* 大使卡片 */}
        <div className="px-5 pt-5">
          <div className="rounded-3xl bg-brand-purple-dark text-white p-5 shadow-xl shadow-brand-purple-dark/25 journal-enter">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-brand-coral flex items-center justify-center text-2xl font-black">
                <Crown size={24} />
              </div>
              <div className="flex-1">
                <p className="font-black text-lg">{ambassador?.name}</p>
                <p className="text-[11px] text-white/60">{ambassador?.level} · 加入於 {ambassador?.joinDate}</p>
              </div>
              <span className="flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-full bg-brand-coral/25 text-brand-coral">
                <Crown size={12} /> {ambassador?.level}
              </span>
            </div>
            <div className="mt-4 pt-4 border-t border-white/10 grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="font-black tabular">{ambassador?.totalReferrals}</p>
                <p className="text-[10px] text-white/60">總推薦人數</p>
              </div>
              <div>
                <p className="font-black tabular">{ambassador?.activeReferrals}</p>
                <p className="text-[10px] text-white/60">活躍推薦</p>
              </div>
              <div>
                <p className="font-black tabular">{ambassador?.totalPointsEarned?.toLocaleString()}</p>
                <p className="text-[10px] text-white/60">累積點數</p>
              </div>
            </div>
          </div>
        </div>

        {/* 推薦碼與連結 */}
        <div className="px-5 mt-6">
          <h2 className="font-black text-brand-ink">我的推薦碼</h2>
          <div className="mt-3 paper-card p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[11px] text-muted-foreground">推薦碼</p>
                <p className="text-xl font-black text-brand-purple tabular">{ambassador?.referralCode}</p>
              </div>
              <button
                onClick={copyReferralCode}
                className="w-10 h-10 rounded-full bg-brand-lilac flex items-center justify-center text-brand-purple active:scale-95 transition-transform"
              >
                {copied ? <CheckCircle2 size={18} /> : <Copy size={18} />}
              </button>
            </div>
            <div className="mt-4 pt-4 border-t border-border/60">
              <p className="text-[11px] text-muted-foreground">推薦連結</p>
              <p className="text-xs text-brand-ink mt-1 break-all">{ambassador?.referralLink}</p>
              <button
                onClick={copyReferralLink}
                className="mt-3 w-full h-10 rounded-full bg-brand-purple text-white text-sm font-bold flex items-center justify-center gap-2 active:scale-[0.97] transition-transform"
              >
                <Share2 size={16} /> 複製推薦連結
              </button>
            </div>
          </div>
        </div>

        {/* 本月點數 */}
        <div className="px-5 mt-6">
          <div className="paper-card p-4 flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-brand-coral/15 flex items-center justify-center shrink-0">
              <Gift size={22} className="text-brand-coral" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-black text-brand-ink">本月已獲得 {ambassador?.thisMonthPoints} 點</p>
              <p className="text-[11px] text-muted-foreground">推薦獎勵 + 被推薦人任務點數分潤</p>
            </div>
            <ChevronRight size={16} className="text-muted-foreground" />
          </div>
        </div>

        {/* 排行榜入口 */}
        <div className="px-5 mt-4">
          <button
            onClick={() => navigate("/ambassador/leaderboard")}
            className="w-full paper-card p-4 flex items-center gap-4 active:scale-[0.98] transition-transform"
          >
            <div className="w-12 h-12 rounded-2xl bg-brand-purple/15 flex items-center justify-center shrink-0">
              <TrendingUp size={22} className="text-brand-purple" />
            </div>
            <div className="flex-1 text-left">
              <p className="text-sm font-black text-brand-ink">大使排行榜</p>
              <p className="text-[11px] text-muted-foreground">查看全站推薦王，每月獎勵加碼</p>
            </div>
            <ChevronRight size={16} className="text-muted-foreground" />
          </button>
        </div>

        {/* 推薦紀錄 */}
        <div className="px-5 mt-6">
          <div className="flex items-center justify-between">
            <h2 className="font-black text-brand-ink">推薦紀錄</h2>
            <button className="text-xs font-bold text-brand-purple">查看全部</button>
          </div>
          <div className="mt-3 space-y-2.5">
            {referrals?.map((r) => (
              <div key={r.id} className="paper-card p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-lilac flex items-center justify-center font-black text-brand-purple">
                  {r.name[0]}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-brand-ink truncate">{r.name} · {r.petName}</p>
                  <p className="text-[10px] text-muted-foreground">{r.joinDate} · {r.status}</p>
                </div>
                <span className="text-brand-coral font-black text-sm tabular">+{r.pointsEarned} 點</span>
              </div>
            ))}
          </div>
        </div>

        {/* 層級規則 */}
        <div className="px-5 mt-6">
          <h2 className="font-black text-brand-ink">大使層級</h2>
          <div className="mt-3 space-y-2.5">
            {AMBASSADOR_LEVELS.map((l) => (
              <div key={l.level} className={`paper-card p-4 ${l.level === ambassador?.level ? "ring-2 ring-brand-purple" : ""}`}>
                <div className="flex items-center justify-between">
                  <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${l.color}`}>{l.level}</span>
                  {l.level === ambassador?.level && <span className="text-[10px] font-bold text-brand-purple">目前層級</span>}
                </div>
                <p className="mt-2 text-xs text-muted-foreground">{l.requirement}</p>
                <p className="mt-1 text-xs font-bold text-brand-ink">{l.reward}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 如何推薦 */}
        <div className="px-5 mt-6">
          <div className="paper-card p-4">
            <h3 className="font-black text-brand-ink flex items-center gap-2"><Users size={16} /> 如何推薦</h3>
            <ol className="mt-3 space-y-2 text-xs text-muted-foreground">
              <li className="flex gap-2"><span className="w-5 h-5 rounded-full bg-brand-lilac text-brand-purple font-bold flex items-center justify-center shrink-0">1</span>分享推薦碼或連結給朋友</li>
              <li className="flex gap-2"><span className="w-5 h-5 rounded-full bg-brand-lilac text-brand-purple font-bold flex items-center justify-center shrink-0">2</span>朋友註冊並建立寵物檔案</li>
              <li className="flex gap-2"><span className="w-5 h-5 rounded-full bg-brand-lilac text-brand-purple font-bold flex items-center justify-center shrink-0">3</span>朋友完成首個任務，你獲得點數</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
