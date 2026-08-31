import { Heart, MapPin, Store } from "lucide-react";
import { useState } from "react";
import { useLocation, useParams } from "wouter";
import TopBar from "@/components/TopBar";
import { useDemo } from "@/contexts/DemoContext";
import { REWARDS } from "@/lib/data";

/** P23 權益詳情 */
export default function RewardDetail() {
  const { id } = useParams<{ id: string }>();
  const [, navigate] = useLocation();
  const { points } = useDemo();
  const reward = REWARDS.find((r) => r.id === id) ?? REWARDS[0];
  const [fav, setFav] = useState(false);
  const enough = points >= reward.points;

  return (
    <div className="min-h-full bg-brand-cream flex flex-col">
      <TopBar showBack title="權益詳情" />
      <div className="flex-1 pb-28">
        <div className="relative h-52">
          <img src={reward.image} alt={reward.title} className="w-full h-full object-cover" />
          <button
            onClick={() => setFav(!fav)}
            className="absolute top-4 right-5 w-10 h-10 rounded-full bg-white/90 shadow-md flex items-center justify-center active:scale-90 transition-transform"
            aria-label="收藏"
          >
            <Heart size={18} className={fav ? "fill-brand-coral text-brand-brick" : "text-brand-ink"} />
          </button>
        </div>
        <div className="px-5 -mt-6 relative">
          <div className="paper-card p-5 journal-enter">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h1 className="text-xl font-black text-brand-ink">{reward.title}</h1>
                <p className="mt-1 text-xs text-muted-foreground">{reward.refValue}</p>
              </div>
              <div className="text-right shrink-0">
                <p className="text-2xl font-black text-brand-purple tabular">{reward.points}</p>
                <p className="text-[10px] text-muted-foreground">點數</p>
              </div>
            </div>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{reward.description}</p>
            <div className="mt-3 flex gap-2 text-[11px] flex-wrap">
              <span className="px-2.5 py-1 rounded-full bg-brand-lilac text-brand-ink font-bold">{reward.category}</span>
              <span className="px-2.5 py-1 rounded-full bg-brand-lilac text-brand-ink font-bold">兌換後 {reward.validDays} 天內有效</span>
              <span className={`px-2.5 py-1 rounded-full font-bold ${reward.stock < 20 ? "bg-brand-brick/10 text-brand-brick" : "bg-brand-mint/15 text-brand-mint"}`}>
                剩餘 {reward.stock} 份
              </span>
            </div>
          </div>

          {/* 適用商家 */}
          <button
            onClick={() => navigate(`/merchants/${reward.merchantId}`)}
            className="mt-4 w-full paper-card p-4 flex items-center gap-3 active:scale-[0.98] transition-transform journal-enter journal-enter-1"
          >
            <div className="w-10 h-10 rounded-xl bg-brand-lilac flex items-center justify-center shrink-0">
              <Store size={18} className="text-brand-ink" />
            </div>
            <div className="text-left">
              <p className="text-sm font-bold text-brand-ink">{reward.merchant}</p>
              <p className="text-[11px] text-muted-foreground flex items-center gap-1"><MapPin size={10} /> 查看門店資訊與導航</p>
            </div>
          </button>

          {/* 使用規則 */}
          <div className="mt-4 paper-card p-5 journal-enter journal-enter-2">
            <h2 className="font-black text-brand-ink text-sm">兌換與使用規則</h2>
            <ul className="mt-3 space-y-2">
              {reward.terms.map((t, i) => (
                <li key={i} className="flex gap-2 text-xs text-muted-foreground leading-relaxed">
                  <span className="text-brand-purple font-black">·</span> {t}
                </li>
              ))}
              <li className="flex gap-2 text-xs text-muted-foreground leading-relaxed">
                <span className="text-brand-purple font-black">·</span> 兌換後恕不退換點數；逾期自動失效。
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 固定底部 CTA */}
      <div className="sticky bottom-0 bg-brand-cream/95 backdrop-blur border-t border-border/60 p-4">
        <div className="flex items-center gap-3">
          <div className="shrink-0">
            <p className="text-[10px] text-muted-foreground">目前點數</p>
            <p className={`font-black tabular ${enough ? "text-brand-ink" : "text-brand-brick"}`}>{points.toLocaleString()}</p>
          </div>
          {enough ? (
            <button
              onClick={() => navigate(`/rewards/${reward.id}/confirm`)}
              className="flex-1 h-12 rounded-2xl bg-brand-purple text-white font-bold shadow-lg shadow-brand-purple/30 active:scale-[0.97] transition-transform"
            >
              立即兌換
            </button>
          ) : (
            <button
              onClick={() => navigate("/tasks")}
              className="flex-1 h-12 rounded-2xl bg-brand-purple-dark text-white font-bold active:scale-[0.97] transition-transform"
            >
              點數不足，去賺點
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
