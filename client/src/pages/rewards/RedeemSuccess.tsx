import { QrCode, Ticket } from "lucide-react";
import { useLocation, useParams } from "wouter";
import { useDemo } from "@/contexts/DemoContext";
import { REWARDS } from "@/lib/data";

/** P25 兌換成功 */
export default function RedeemSuccess() {
  const { id } = useParams<{ id: string }>();
  const [, navigate] = useLocation();
  const { points } = useDemo();
  const reward = REWARDS.find((r) => r.id === id) ?? REWARDS[0];

  return (
    <div className="min-h-full bg-brand-cream flex flex-col items-center justify-center px-8 text-center">
      <div className="stamp stamp-in w-36 h-36 flex flex-col items-center justify-center bg-white shadow-xl">
        <span className="text-[10px] font-bold tracking-widest">PET PASSPORT</span>
        <Ticket size={28} className="my-1" />
        <span className="text-[10px] font-bold">兌換成功</span>
      </div>
      <h1 className="mt-8 text-2xl font-black text-brand-brown journal-enter">{reward.title}</h1>
      <p className="mt-2 text-sm text-muted-foreground journal-enter journal-enter-1">
        已扣 {reward.points} 點，剩餘 <span className="font-extrabold text-brand-orange tabular">{points.toLocaleString()}</span> 點。
        票券已存入「我的票券」，效期 {reward.validDays} 天。
      </p>
      <div className="mt-6 paper-card p-4 w-full journal-enter journal-enter-2">
        <div className="flex items-center justify-center gap-2 text-brand-brown">
          <QrCode size={18} />
          <span className="font-mono text-sm font-bold">PP-GR-8K2M-2026</span>
        </div>
        <p className="mt-1 text-[10px] text-muted-foreground">到店出示此券號或 QR 即可核銷</p>
      </div>
      <div className="mt-6 w-full space-y-3 journal-enter journal-enter-3">
        <button
          onClick={() => navigate("/coupons")}
          className="w-full h-12 rounded-2xl bg-brand-orange text-white font-bold shadow-lg shadow-brand-orange/30 active:scale-[0.97] transition-transform"
        >
          前往我的票券
        </button>
        <button
          onClick={() => navigate("/rewards")}
          className="w-full h-12 rounded-2xl border-2 border-brand-brown/15 text-brand-brown font-bold active:scale-[0.97] transition-transform"
        >
          繼續逛逛權益
        </button>
      </div>
    </div>
  );
}
