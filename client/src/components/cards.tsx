import { ChevronRight, Clock3, MapPin, Stamp } from "lucide-react";
import { useLocation } from "wouter";
import type { Task, Reward, Merchant, Coupon } from "@/lib/data";

/* ---------- 任務卡 ---------- */
export function TaskCard({ task, index = 0 }: { task: Task; index?: number }) {
  const [, navigate] = useLocation();
  const statusMap = {
    available: { label: "開始", cls: "bg-brand-purple text-white" },
    ongoing: { label: "繼續", cls: "bg-brand-purple-dark text-white" },
    pending: { label: "待驗證", cls: "bg-brand-coral/20 text-brand-coral" },
    claimable: { label: "領取", cls: "bg-brand-mint text-white" },
    done: { label: "已完成", cls: "bg-brand-lilac text-brand-sub" },
  } as const;
  const s = statusMap[task.status];
  return (
    <button
      onClick={() => navigate(`/tasks/${task.id}`)}
      className={`paper-card w-full text-left p-4 flex items-center gap-3 active:scale-[0.98] transition-transform journal-enter journal-enter-${Math.min(index + 1, 5)}`}
    >
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-brand-lilac text-brand-purple-dark">{task.typeLabel}</span>
          <span className="text-[11px] text-muted-foreground flex items-center gap-1">
            <Clock3 size={11} /> {task.deadline}
          </span>
        </div>
        <p className="font-bold text-brand-ink truncate">{task.title}</p>
        {task.status === "ongoing" && (
          <div className="mt-2 h-1.5 rounded-full bg-brand-lilac overflow-hidden">
            <div className="h-full rounded-full bg-brand-purple" style={{ width: `${task.progress}%` }} />
          </div>
        )}
      </div>
      <div className="flex flex-col items-end gap-1.5 shrink-0">
        <span className="text-brand-coral font-extrabold text-sm tabular">+{task.points} 點</span>
        <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${s.cls}`}>{s.label}</span>
      </div>
    </button>
  );
}

/* ---------- 權益卡 ---------- */
export function RewardCard({ reward, index = 0 }: { reward: Reward; index?: number }) {
  const [, navigate] = useLocation();
  return (
    <button
      onClick={() => navigate(`/rewards/${reward.id}`)}
      className={`paper-card w-40 shrink-0 text-left overflow-hidden active:scale-[0.97] transition-transform journal-enter journal-enter-${Math.min(index + 1, 5)}`}
    >
      <div className="relative h-24 overflow-hidden">
        <img src={reward.image} alt={reward.title} className="w-full h-full object-cover" />
        {reward.hot && (
          <span className="absolute top-2 left-2 text-[10px] font-bold px-2 py-0.5 rounded-full bg-brand-coral text-white">熱門</span>
        )}
      </div>
      <div className="p-3">
        <p className="text-[13px] font-bold text-brand-ink leading-snug line-clamp-2">{reward.title}</p>
        <p className="mt-1 text-brand-purple font-extrabold text-sm tabular">{reward.points} 點</p>
        <p className="text-[10px] text-muted-foreground">{reward.refValue}</p>
      </div>
    </button>
  );
}

/* ---------- 商家卡 ---------- */
export function MerchantCard({ merchant, index = 0 }: { merchant: Merchant; index?: number }) {
  const [, navigate] = useLocation();
  return (
    <button
      onClick={() => navigate(`/merchants/${merchant.id}`)}
      className={`paper-card w-full text-left overflow-hidden flex active:scale-[0.98] transition-transform journal-enter journal-enter-${Math.min(index + 1, 5)}`}
    >
      <img src={merchant.image} alt={merchant.name} className="w-24 h-24 object-cover shrink-0" />
      <div className="flex-1 min-w-0 p-3">
        <div className="flex items-center gap-2">
          <p className="font-bold text-brand-ink truncate">{merchant.name}</p>
          <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${merchant.open ? "bg-brand-mint/15 text-brand-mint" : "bg-brand-lilac text-muted-foreground"}`}>
            {merchant.open ? "營業中" : "休息中"}
          </span>
        </div>
        <p className="text-[11px] text-muted-foreground mt-0.5">{merchant.branch} · {merchant.category}</p>
        <p className="text-[11px] text-muted-foreground mt-1 flex items-center gap-1">
          <MapPin size={11} /> {merchant.distance} · {merchant.hours}
        </p>
      </div>
      <ChevronRight size={16} className="self-center mr-3 text-muted-foreground shrink-0" />
    </button>
  );
}

/* ---------- 票券卡（含撕線） ---------- */
export function CouponCard({ coupon, onClick }: { coupon: Coupon; onClick?: () => void }) {
  const statusMap = {
    usable: { label: "可使用", cls: "text-brand-mint border-brand-mint" },
    used: { label: "已使用", cls: "text-muted-foreground border-muted-foreground" },
    expired: { label: "已失效", cls: "text-brand-brick border-brand-brick" },
  } as const;
  const s = statusMap[coupon.status];
  return (
    <button onClick={onClick} className="w-full text-left active:scale-[0.98] transition-transform">
      <div className="paper-card overflow-hidden">
        <div className="flex">
          <img src={coupon.image} alt={coupon.title} className="w-20 h-20 object-cover shrink-0" />
          <div className="flex-1 min-w-0 p-3">
            <p className="font-bold text-brand-ink truncate">{coupon.title}</p>
            <p className="text-[11px] text-muted-foreground truncate">{coupon.merchant}</p>
            <p className="text-[11px] text-muted-foreground mt-1">效期至 {coupon.expireDate}</p>
          </div>
          <div className={`self-center mr-3 px-2.5 py-1 rounded-full border-[1.5px] border-dashed text-[11px] font-bold ${s.cls}`}>
            {s.label}
          </div>
        </div>
        <div className="ticket-notch border-t border-dashed border-border px-4 py-2 flex items-center justify-between">
          <span className="text-[10px] text-muted-foreground font-mono">{coupon.code}</span>
          <Stamp size={14} className="text-brand-purple/50" />
        </div>
      </div>
    </button>
  );
}
