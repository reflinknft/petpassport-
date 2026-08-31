import { useState } from "react";
import { ShieldAlert } from "lucide-react";
import { useLocation, useParams } from "wouter";
import TopBar from "@/components/TopBar";
import { useDemo } from "@/contexts/DemoContext";
import { REWARDS } from "@/lib/data";

/** P24 兌換確認（二次確認） */
export default function RedeemConfirm() {
  const { id } = useParams<{ id: string }>();
  const [, navigate] = useLocation();
  const { points, deductPoints } = useDemo();
  const reward = REWARDS.find((r) => r.id === id) ?? REWARDS[0];
  const [agreed, setAgreed] = useState(false);

  const handleConfirm = () => {
    deductPoints(reward.points);
    navigate(`/rewards/${reward.id}/success`);
  };

  return (
    <div className="min-h-full bg-brand-cream flex flex-col">
      <TopBar showBack title="兌換確認" />
      <div className="flex-1 px-5 pt-5 pb-8">
        <div className="paper-card overflow-hidden journal-enter">
          <img src={reward.image} alt={reward.title} className="w-full h-36 object-cover" />
          <div className="p-5">
            <h1 className="text-lg font-black text-brand-ink">{reward.title}</h1>
            <p className="mt-1 text-xs text-muted-foreground">{reward.merchant}</p>
          </div>
          {/* 撕線 */}
          <div className="ticket-notch border-t border-dashed border-border" />
          <div className="p-5 space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">所需點數</span>
              <span className="font-extrabold text-brand-brick tabular">−{reward.points} 點</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">目前可用</span>
              <span className="font-bold text-brand-ink tabular">{points.toLocaleString()} 點</span>
            </div>
            <div className="h-px bg-border" />
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">兌換後餘額</span>
              <span className="font-black text-brand-ink tabular">{(points - reward.points).toLocaleString()} 點</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">票券效期</span>
              <span className="font-bold text-brand-ink">兌換後 {reward.validDays} 天</span>
            </div>
          </div>
        </div>

        <label className="mt-5 flex items-start gap-2.5 cursor-pointer journal-enter journal-enter-1">
          <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} className="mt-0.5 w-4.5 h-4.5 rounded accent-[#F26B1D]" />
          <span className="text-xs text-muted-foreground leading-relaxed">
            我已了解兌換後<span className="font-bold text-brand-ink">恕不退換點數</span>，並同意本權益的使用規則。
          </span>
        </label>

        <div className="mt-4 passport-frame p-4 flex gap-3 bg-white/60 journal-enter journal-enter-2">
          <ShieldAlert size={16} className="text-brand-coral shrink-0 mt-0.5" />
          <p className="text-[11px] text-muted-foreground leading-relaxed">
            扣點前請再次確認。兌換成功後可於「我的票券」查看 QR 核銷碼，到店出示即可使用。
          </p>
        </div>

        <button
          onClick={handleConfirm}
          disabled={!agreed}
          className="mt-6 w-full h-12 rounded-2xl bg-brand-purple text-white font-bold shadow-lg shadow-brand-purple/30 active:scale-[0.97] transition-all disabled:opacity-40 disabled:shadow-none"
        >
          確認兌換（扣 {reward.points} 點）
        </button>
        <button onClick={() => window.history.back()} className="mt-3 w-full text-sm font-bold text-muted-foreground active:scale-95">
          再想想
        </button>
      </div>
    </div>
  );
}
