import { useState } from "react";
import { Bell, Coins, Flame, Ticket } from "lucide-react";
import TopBar from "@/components/TopBar";
import { NOTIFICATIONS } from "@/lib/data";

const TYPE_ICON = { points: Coins, expire: Flame, coupon: Ticket, task: Bell } as const;
const FILTERS = ["全部", "點數", "票券", "任務"] as const;

/** P08 通知中心 */
export default function Notifications() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("全部");
  const typeKey = { 點數: "points", 票券: "coupon", 任務: "task" } as const;
  const list = NOTIFICATIONS.filter((n) => {
    if (filter === "全部") return true;
    const k = typeKey[filter as keyof typeof typeKey];
    if (filter === "點數") return n.type === "points" || n.type === "expire";
    return n.type === k;
  });

  return (
    <div className="min-h-full bg-brand-cream">
      <TopBar showBack title="通知中心" />
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
        {list.map((n, i) => {
          const Icon = TYPE_ICON[n.type];
          return (
            <div key={n.id} className={`paper-card p-4 flex gap-3 journal-enter journal-enter-${Math.min(i + 1, 5)} ${n.read ? "opacity-70" : ""}`}>
              <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${n.read ? "bg-brand-apricot" : "bg-brand-orange/15"}`}>
                <Icon size={16} className={n.read ? "text-muted-foreground" : "text-brand-orange"} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-bold text-brand-brown">{n.title}</p>
                  {!n.read && <span className="w-1.5 h-1.5 rounded-full bg-brand-brick shrink-0" />}
                </div>
                <p className="mt-0.5 text-xs text-muted-foreground leading-relaxed">{n.body}</p>
                <p className="mt-1 text-[10px] text-muted-foreground/70">{n.time}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
