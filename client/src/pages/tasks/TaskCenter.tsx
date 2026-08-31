import { useState } from "react";
import { Flame } from "lucide-react";
import BottomNav from "@/components/BottomNav";
import TopBar from "@/components/TopBar";
import { TaskCard } from "@/components/cards";
import { TASKS } from "@/lib/data";

const TABS = ["推薦", "進行中", "已完成"] as const;

/** P15 任務中心 */
export default function TaskCenter() {
  const [tab, setTab] = useState<(typeof TABS)[number]>("推薦");
  const list = TASKS.filter((t) => {
    if (tab === "進行中") return t.status === "ongoing" || t.status === "pending" || t.status === "claimable";
    if (tab === "已完成") return t.status === "done";
    return t.status === "available" || t.status === "claimable";
  });

  return (
    <div className="min-h-full bg-brand-cream flex flex-col">
      <TopBar title="任務中心" showBell />
      {/* 連續參與 */}
      <div className="px-5 pt-4">
        <div className="paper-card p-4 flex items-center gap-4 journal-enter">
          <div className="w-12 h-12 rounded-2xl bg-brand-orange/15 flex items-center justify-center shrink-0">
            <Flame size={22} className="text-brand-orange" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-black text-brand-brown">連續照護 6 天</p>
            <p className="text-[11px] text-muted-foreground">再打卡 1 天，本週額外加碼 20 點</p>
          </div>
          <div className="flex gap-1">
            {[1, 1, 1, 1, 1, 1, 0].map((d, i) => (
              <span key={i} className={`w-2.5 h-2.5 rounded-full ${d ? "bg-brand-orange" : "bg-brand-apricot border border-brand-brown/15"}`} />
            ))}
          </div>
        </div>
      </div>

      {/* 分頁 */}
      <div className="px-5 pt-4 flex gap-2">
        {TABS.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-4 h-9 rounded-full text-sm font-bold transition-all active:scale-95 ${
              tab === t ? "bg-brand-brown text-white" : "bg-white text-muted-foreground"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="flex-1 px-5 pt-4 pb-6 space-y-3">
        {list.map((t, i) => (
          <TaskCard key={t.id} task={t} index={i} />
        ))}
        {list.length === 0 && (
          <div className="py-16 text-center">
            <p className="text-sm font-bold text-muted-foreground">這裡還沒有任務</p>
            <p className="mt-1 text-xs text-muted-foreground/70">完成推薦任務後，紀錄會出現在這裡</p>
          </div>
        )}
      </div>
      <BottomNav />
    </div>
  );
}
