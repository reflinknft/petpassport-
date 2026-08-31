import { useState } from "react";
import { useLocation } from "wouter";
import { Check, Flame } from "lucide-react";
import TopBar from "@/components/TopBar";
import ProgressRing from "@/components/ProgressRing";
import { useDemo } from "@/contexts/DemoContext";
import { DAILY_TASKS } from "@/lib/data";

/** 每日照護打卡（場景二） */
export default function DailyCheckin() {
  const [, navigate] = useLocation();
  const { currentPet, addPoints } = useDemo();
  const [tasks, setTasks] = useState(DAILY_TASKS);
  const [celebrate, setCelebrate] = useState(false);

  const doneCount = tasks.filter((t) => t.done).length;
  const percent = Math.round((doneCount / tasks.length) * 100);

  const toggle = (id: string) => {
    setTasks((ts) => ts.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  };

  const completeAll = () => {
    const remaining = tasks.filter((t) => !t.done);
    const earned = remaining.reduce((s, t) => s + t.points, 0);
    setTasks((ts) => ts.map((t) => ({ ...t, done: true })));
    addPoints(earned);
    setCelebrate(true);
    setTimeout(() => navigate("/home"), 1800);
  };

  return (
    <div className="min-h-full bg-brand-cream flex flex-col">
      <TopBar showBack title="每日照護打卡" />
      <div className="flex-1 px-5 pt-5 pb-8">
        {/* 進度環 */}
        <div className="paper-card p-6 text-center journal-enter">
          <ProgressRing value={percent} size={120} stroke={11}>
            <div>
              <p className="text-3xl font-black text-brand-purple tabular">{doneCount}/{tasks.length}</p>
              <p className="text-[10px] font-bold text-brand-sub">今日完成</p>
            </div>
          </ProgressRing>
          <p className="mt-4 text-sm font-black text-brand-ink">{currentPet.name} 的今日照護</p>
          <p className="mt-1 text-xs text-brand-sub flex items-center justify-center gap-1">
            <Flame size={12} className="text-brand-coral" /> 連續打卡第 6 天
          </p>
        </div>

        {/* 任務清單 */}
        <div className="mt-5 space-y-2.5">
          {tasks.map((t, i) => (
            <button
              key={t.id}
              onClick={() => toggle(t.id)}
              className={`paper-card w-full p-4 flex items-center gap-3 text-left transition-all active:scale-[0.98] journal-enter journal-enter-${Math.min(i + 1, 5)} ${t.done ? "opacity-70" : ""}`}
            >
              <span className="text-2xl shrink-0">{t.icon}</span>
              <div className="flex-1 min-w-0">
                <p className={`text-sm font-bold ${t.done ? "text-brand-sub line-through" : "text-brand-ink"}`}>{t.title}</p>
                <p className="text-[11px] text-brand-sub">+{t.points} 點</p>
              </div>
              <span className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors ${t.done ? "bg-brand-mint text-white" : "bg-brand-lilac text-brand-purple"}`}>
                {t.done && <Check size={15} />}
              </span>
            </button>
          ))}
        </div>

        <button
          onClick={completeAll}
          className="mt-6 w-full h-12 rounded-full bg-brand-purple text-white font-bold shadow-lg shadow-brand-purple/30 active:scale-[0.97] transition-transform"
        >
          一鍵完成今日打卡
        </button>
        <p className="mt-3 text-center text-[10px] text-brand-sub">相同任務每日只能領取一次；高點數任務需照片或定位驗證。</p>
      </div>

      {/* 完成慶祝 */}
      {celebrate && (
        <div className="fixed inset-0 z-50 bg-brand-cream/95 flex flex-col items-center justify-center px-8 text-center">
          <div className="stamp stamp-in w-36 h-36 flex flex-col items-center justify-center bg-white shadow-xl">
            <span className="text-[10px] font-bold tracking-widest">DAILY</span>
            <span className="mt-1 text-lg font-black">打卡完成</span>
            <span className="text-[10px] font-bold">+{tasks.reduce((s, t) => s + t.points, 0)} 點</span>
          </div>
          <h2 className="mt-8 text-2xl font-black text-brand-ink journal-enter">太棒了！</h2>
          <p className="mt-2 text-sm text-brand-sub journal-enter journal-enter-1">今日照護已完成，點數已入帳。</p>
        </div>
      )}
    </div>
  );
}
