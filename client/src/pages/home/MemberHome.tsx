import { Bell, BookOpen, ChevronRight, Flame, GraduationCap, MapPin, Sparkles, Target, TrendingUp } from "lucide-react";
import { useLocation } from "wouter";
import BottomNav from "@/components/BottomNav";
import ProgressRing from "@/components/ProgressRing";
import { MerchantCard, RewardCard, TaskCard } from "@/components/cards";
import { useDemo } from "@/contexts/DemoContext";
import { BRAND_TASKS, CONTENTS, COURSES, DAILY_TASKS, HEALTH_REMINDERS, MEMBER, MERCHANTS, REWARDS, TASKS } from "@/lib/data";

/** P07 會員首頁 */
export default function MemberHome() {
  const [, navigate] = useLocation();
  const { currentPet, setCurrentPet, pets, points } = useDemo();
  const todayTasks = TASKS.filter((t) => t.status !== "done").slice(0, 3);
  const dailyDone = DAILY_TASKS.filter((d) => d.done).length;
  const dailyTotal = DAILY_TASKS.length;
  const dailyPercent = Math.round((dailyDone / dailyTotal) * 100);

  return (
    <div className="min-h-full bg-brand-cream flex flex-col">
      {/* 頂部：問候 + 通知 */}
      <header className="px-5 pt-5 flex items-center justify-between">
        <div>
          <p className="text-xs text-muted-foreground">早安，林小毛</p>
          <h1 className="text-xl font-black text-brand-ink">今天也想陪陪 {currentPet.name}</h1>
        </div>
        <button
          onClick={() => navigate("/notifications")}
          className="relative w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-brand-purple-dark active:scale-95 transition-transform"
          aria-label="通知"
        >
          <Bell size={18} />
          <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-brand-coral" />
        </button>
      </header>

      {/* 寵物切換器 */}
      <section className="px-5 mt-4 journal-enter">
        <div className="flex gap-3 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {pets.map((p) => (
            <button
              key={p.id}
              onClick={() => setCurrentPet(p)}
              className={`flex items-center gap-2.5 pl-1.5 pr-4 py-1.5 rounded-full border-2 transition-all active:scale-95 shrink-0 ${
                currentPet.id === p.id ? "border-brand-purple bg-white shadow-md shadow-brand-purple/15" : "border-transparent bg-white/60"
              }`}
            >
              <img src={p.photo} alt={p.name} className="w-9 h-9 rounded-full object-cover" />
              <span className={`text-sm font-bold ${currentPet.id === p.id ? "text-brand-purple-dark" : "text-muted-foreground"}`}>{p.name}</span>
            </button>
          ))}
          <button
            onClick={() => navigate("/pet/new")}
            className="flex items-center justify-center w-12 rounded-full border-2 border-dashed border-brand-purple/30 text-brand-purple/50 text-xl active:scale-95 shrink-0"
            aria-label="新增寵物"
          >
            +
          </button>
        </div>
      </section>

      {/* 今日照護進度（Biscuit 式首屏） */}
      <section className="px-5 mt-4 journal-enter journal-enter-1">
        <div className="paper-card p-5">
          <div className="flex items-center gap-5">
            <ProgressRing value={dailyPercent} size={88} stroke={9}>
              <div className="text-center">
                <p className="text-xl font-black text-brand-purple tabular">{dailyDone}/{dailyTotal}</p>
                <p className="text-[9px] font-bold text-brand-sub">今日任務</p>
              </div>
            </ProgressRing>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-black text-brand-ink">今日照護進度</p>
              <p className="mt-1 text-xs text-brand-sub">完成 {dailyDone} 項，再完成 {dailyTotal - dailyDone} 項可領今日滿額點數</p>
              <div className="mt-2.5 flex items-center gap-3">
                <span className="flex items-center gap-1 text-[11px] font-bold text-brand-coral">
                  <Flame size={12} /> 連續 6 天
                </span>
                <span className="flex items-center gap-1 text-[11px] font-bold text-brand-mint">
                  <Target size={12} /> 本週目標 4/5
                </span>
              </div>
            </div>
          </div>
          {/* 每日任務快覽 */}
          <div className="mt-4 pt-4 border-t border-dashed border-border">
            <div className="flex gap-2 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {DAILY_TASKS.map((d) => (
                <button
                  key={d.id}
                  onClick={() => navigate("/daily")}
                  className={`flex flex-col items-center gap-1 px-3 py-2 rounded-xl shrink-0 transition-all active:scale-95 ${
                    d.done ? "bg-brand-mint/15" : "bg-brand-lilac"
                  }`}
                >
                  <span className="text-lg">{d.icon}</span>
                  <span className={`text-[10px] font-bold ${d.done ? "text-brand-mint" : "text-brand-purple-dark"}`}>{d.title}</span>
                  <span className="text-[9px] text-brand-sub">+{d.points} 點</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 點數卡 */}
      <section className="px-5 mt-4 journal-enter journal-enter-2">
        <div
          onClick={() => navigate("/wallet")}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && navigate("/wallet")}
          className="w-full text-left rounded-[20px] bg-gradient-to-br from-brand-purple to-brand-purple-dark text-white p-5 shadow-xl shadow-brand-purple/30 active:scale-[0.98] transition-transform cursor-pointer"
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[11px] text-white/60 font-bold">可用毛孩點</p>
              <p className="mt-1 text-4xl font-black tabular tracking-tight">{points.toLocaleString()}<span className="text-base font-bold text-white/60 ml-1">點</span></p>
            </div>
            <span className="flex items-center gap-1.5 px-3.5 h-9 rounded-full bg-white/15 text-white">
              <span className="text-sm font-extrabold tabular">{points.toLocaleString()}</span>
              <span className="text-[11px] font-medium text-white/70">點</span>
            </span>
          </div>
          <div className="mt-4 flex items-center gap-2 text-[11px]">
            <span className="px-2 py-1 rounded-full bg-brand-coral/25 text-brand-coral font-bold flex items-center gap-1">
              <Flame size={11} /> {MEMBER.expiringPoints} 點將於 {MEMBER.expiringDays} 天後到期
            </span>
            <span className="px-2 py-1 rounded-full bg-white/10 text-white/70 font-bold">待生效 {MEMBER.pendingPoints} 點</span>
          </div>
        </div>
      </section>

      {/* 健康提醒 */}
      <section className="px-5 mt-4 journal-enter journal-enter-3">
        <div className="space-y-2.5">
          {HEALTH_REMINDERS.map((h) => (
            <div key={h.id} className={`paper-card p-3.5 flex items-start gap-3 border-l-4 ${h.level === "warn" ? "border-l-brand-coral" : "border-l-brand-mint"}`}>
              <span className="text-lg shrink-0">{h.icon}</span>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold text-brand-ink">{h.title}</p>
                <p className="text-[11px] text-brand-sub mt-0.5 leading-relaxed">{h.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 今日任務 */}
      <section className="px-5 mt-6 journal-enter journal-enter-4">
        <div className="flex items-center justify-between">
          <h2 className="font-black text-brand-ink">今日任務</h2>
          <button onClick={() => navigate("/tasks")} className="text-xs font-bold text-brand-purple flex items-center">
            全部 <ChevronRight size={14} />
          </button>
        </div>
        <div className="mt-3 space-y-3">
          {todayTasks.map((t, i) => (
            <TaskCard key={t.id} task={t} index={i} />
          ))}
        </div>
      </section>

      {/* 品牌任務 */}
      <section className="px-5 mt-6 journal-enter journal-enter-5">
        <div className="flex items-center justify-between">
          <h2 className="font-black text-brand-ink flex items-center gap-1.5"><TrendingUp size={16} className="text-brand-coral" /> 品牌任務</h2>
          <span className="text-[10px] font-bold text-brand-sub">贊助</span>
        </div>
        <div className="mt-3 space-y-2.5">
          {BRAND_TASKS.map((b) => (
            <button
              key={b.id}
              onClick={() => navigate(`/brand-tasks/${b.id}`)}
              className="paper-card w-full text-left p-4 flex items-center gap-3 active:scale-[0.98] transition-transform"
            >
              <img src={b.image} alt={b.brand} className="w-14 h-14 rounded-xl object-cover shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-[10px] font-bold text-brand-coral">{b.brand}</p>
                <p className="text-sm font-bold text-brand-ink truncate">{b.title}</p>
                <p className="text-[10px] text-brand-sub mt-0.5">{b.audience}</p>
              </div>
              <span className="text-brand-coral font-extrabold text-sm tabular shrink-0">+{b.points} 點</span>
            </button>
          ))}
        </div>
      </section>

      {/* 為你推薦權益 */}
      <section className="mt-6 journal-enter journal-enter-5">
        <div className="px-5 flex items-center justify-between">
          <h2 className="font-black text-brand-ink">為 {currentPet.name} 推薦</h2>
          <button onClick={() => navigate("/rewards")} className="text-xs font-bold text-brand-purple flex items-center">
            全部 <ChevronRight size={14} />
          </button>
        </div>
        <div className="mt-3 flex gap-3 overflow-x-auto px-5 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {REWARDS.map((r, i) => (
            <RewardCard key={r.id} reward={r} index={i} />
          ))}
        </div>
      </section>

      {/* 附近商家 */}
      <section className="px-5 mt-6">
        <div className="flex items-center justify-between">
          <h2 className="font-black text-brand-ink flex items-center gap-1.5"><MapPin size={16} className="text-brand-purple" /> 附近商家</h2>
          <button onClick={() => navigate("/merchants")} className="text-xs font-bold text-brand-purple flex items-center">
            全部 <ChevronRight size={14} />
          </button>
        </div>
        <div className="mt-3 space-y-3">
          {MERCHANTS.slice(0, 2).map((m, i) => (
            <MerchantCard key={m.id} merchant={m} index={i} />
          ))}
        </div>
      </section>

      {/* HEHO 精選 / 推薦課程 */}
      <section className="px-5 mt-6 pb-6">
        <h2 className="font-black text-brand-ink">精選內容與課程</h2>
        <div className="mt-3 space-y-3">
          {CONTENTS.map((c) => (
            <button key={c.id} onClick={() => navigate("/tasks/t2")} className="paper-card w-full text-left overflow-hidden flex active:scale-[0.98] transition-transform">
              <img src={c.image} alt={c.title} className="w-24 h-20 object-cover shrink-0" />
              <div className="flex-1 min-w-0 p-3">
                <p className="text-[10px] font-bold text-brand-purple flex items-center gap-1"><BookOpen size={10} /> {c.source}</p>
                <p className="text-[13px] font-bold text-brand-ink leading-snug line-clamp-2 mt-0.5">{c.title}</p>
                <p className="text-[10px] text-muted-foreground mt-1">{c.readTime} · 完成 +{c.points} 點</p>
              </div>
            </button>
          ))}
          {COURSES.map((c) => (
            <button key={c.id} onClick={() => navigate("/tasks/t3")} className="paper-card w-full text-left overflow-hidden flex active:scale-[0.98] transition-transform">
              <img src={c.image} alt={c.title} className="w-24 h-20 object-cover shrink-0" />
              <div className="flex-1 min-w-0 p-3">
                <p className="text-[10px] font-bold text-brand-mint flex items-center gap-1"><GraduationCap size={10} /> {c.source} 課程</p>
                <p className="text-[13px] font-bold text-brand-ink leading-snug line-clamp-2 mt-0.5">{c.title}</p>
                <p className="text-[10px] text-muted-foreground mt-1">{c.duration} · 完成 +{c.points} 點</p>
              </div>
            </button>
          ))}
        </div>
        {/* AI 助手入口 */}
        <button
          onClick={() => navigate("/ai")}
          className="mt-4 w-full passport-frame p-4 flex items-center gap-3 bg-white/60 active:scale-[0.98] transition-transform"
        >
          <div className="w-10 h-10 rounded-xl bg-brand-purple/15 flex items-center justify-center shrink-0">
            <Sparkles size={18} className="text-brand-purple" />
          </div>
          <div className="text-left">
            <p className="text-sm font-bold text-brand-ink">AI 毛孩助手</p>
            <p className="text-[11px] text-muted-foreground">問問「點數快到期怎麼用？」</p>
          </div>
          <ChevronRight size={16} className="ml-auto text-muted-foreground" />
        </button>
      </section>

      <BottomNav />
    </div>
  );
}
