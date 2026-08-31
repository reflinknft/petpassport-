import { Bell, BookOpen, ChevronRight, Flame, GraduationCap, MapPin, Sparkles } from "lucide-react";
import { useLocation } from "wouter";
import BottomNav from "@/components/BottomNav";
import { MerchantCard, RewardCard, TaskCard } from "@/components/cards";
import { useDemo } from "@/contexts/DemoContext";
import { CONTENTS, COURSES, MEMBER, MERCHANTS, REWARDS, TASKS } from "@/lib/data";

/** P07 會員首頁 */
export default function MemberHome() {
  const [, navigate] = useLocation();
  const { currentPet, setCurrentPet, pets, points } = useDemo();
  const todayTasks = TASKS.filter((t) => t.status !== "done").slice(0, 3);

  return (
    <div className="min-h-full bg-brand-cream flex flex-col">
      {/* 頂部：問候 + 通知 */}
      <header className="px-5 pt-5 flex items-center justify-between">
        <div>
          <p className="text-xs text-muted-foreground">早安，林小毛</p>
          <h1 className="text-xl font-black text-brand-brown">今天也想陪陪 {currentPet.name}</h1>
        </div>
        <button
          onClick={() => navigate("/notifications")}
          className="relative w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-brand-brown active:scale-95 transition-transform"
          aria-label="通知"
        >
          <Bell size={18} />
          <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-brand-brick" />
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
                currentPet.id === p.id ? "border-brand-orange bg-white shadow-md" : "border-transparent bg-white/60"
              }`}
            >
              <img src={p.photo} alt={p.name} className="w-9 h-9 rounded-full object-cover" />
              <span className={`text-sm font-bold ${currentPet.id === p.id ? "text-brand-brown" : "text-muted-foreground"}`}>{p.name}</span>
            </button>
          ))}
          <button
            onClick={() => navigate("/pet/new")}
            className="flex items-center justify-center w-12 rounded-full border-2 border-dashed border-brand-brown/25 text-brand-brown/50 text-xl active:scale-95 shrink-0"
            aria-label="新增寵物"
          >
            +
          </button>
        </div>
      </section>

      {/* 寵物照護卡 */}
      <section className="px-5 mt-4 journal-enter journal-enter-1">
        <button onClick={() => navigate(`/pets/${currentPet.id}`)} className="w-full text-left paper-card overflow-hidden active:scale-[0.98] transition-transform">
          <div className="relative h-36">
            <img src={currentPet.photo} alt={currentPet.name} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-brown/60 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
              <div>
                <p className="text-white font-black text-lg">{currentPet.name}</p>
                <p className="text-white/80 text-[11px]">{currentPet.breed} · {currentPet.age} 歲 · {currentPet.gender === "female" ? "女生" : "男生"}</p>
              </div>
              <span className="text-[10px] font-bold px-2 py-1 rounded-full bg-white/90 text-brand-brown">資料完整度 {currentPet.completeness}%</span>
            </div>
          </div>
          <div className="p-4 flex items-center justify-between">
            <div className="flex gap-1.5 flex-wrap">
              {currentPet.tags.map((t) => (
                <span key={t} className="text-[10px] font-bold px-2 py-1 rounded-full bg-brand-apricot text-brand-brown">{t}</span>
              ))}
            </div>
            <ChevronRight size={16} className="text-muted-foreground shrink-0" />
          </div>
        </button>
      </section>

      {/* 點數卡（微旋轉貼紙感） */}
      <section className="px-5 mt-4 journal-enter journal-enter-2">
        <div
          onClick={() => navigate("/wallet")}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && navigate("/wallet")}
          className="w-full text-left rounded-2xl bg-brand-brown text-white p-5 shadow-xl shadow-brand-brown/25 rotate-[-1deg] active:scale-[0.98] transition-transform cursor-pointer"
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[11px] text-white/60 font-bold">可用點數</p>
              <p className="mt-1 text-4xl font-black tabular tracking-tight">{points.toLocaleString()}<span className="text-base font-bold text-white/60 ml-1">點</span></p>
            </div>
            <span className="flex items-center gap-1.5 px-3.5 h-9 rounded-full bg-white/15 text-white">
              <span className="text-sm font-extrabold tabular">{points.toLocaleString()}</span>
              <span className="text-[11px] font-medium text-white/70">點</span>
            </span>
          </div>
          <div className="mt-4 flex items-center gap-2 text-[11px]">
            <span className="px-2 py-1 rounded-full bg-brand-honey/25 text-brand-honey font-bold flex items-center gap-1">
              <Flame size={11} /> {MEMBER.expiringPoints} 點將於 {MEMBER.expiringDays} 天後到期
            </span>
            <span className="px-2 py-1 rounded-full bg-white/10 text-white/70 font-bold">待生效 {MEMBER.pendingPoints} 點</span>
          </div>
        </div>
      </section>

      {/* 今日任務 */}
      <section className="px-5 mt-6 journal-enter journal-enter-3">
        <div className="flex items-center justify-between">
          <h2 className="font-black text-brand-brown">今日任務</h2>
          <button onClick={() => navigate("/tasks")} className="text-xs font-bold text-brand-orange flex items-center">
            全部 <ChevronRight size={14} />
          </button>
        </div>
        <div className="mt-3 space-y-3">
          {todayTasks.map((t, i) => (
            <TaskCard key={t.id} task={t} index={i} />
          ))}
        </div>
      </section>

      {/* 為你推薦權益 */}
      <section className="mt-6 journal-enter journal-enter-4">
        <div className="px-5 flex items-center justify-between">
          <h2 className="font-black text-brand-brown">為 {currentPet.name} 推薦</h2>
          <button onClick={() => navigate("/rewards")} className="text-xs font-bold text-brand-orange flex items-center">
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
      <section className="px-5 mt-6 journal-enter journal-enter-5">
        <div className="flex items-center justify-between">
          <h2 className="font-black text-brand-brown flex items-center gap-1.5"><MapPin size={16} className="text-brand-orange" /> 附近商家</h2>
          <button onClick={() => navigate("/merchants")} className="text-xs font-bold text-brand-orange flex items-center">
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
        <h2 className="font-black text-brand-brown">精選內容與課程</h2>
        <div className="mt-3 space-y-3">
          {CONTENTS.map((c) => (
            <button key={c.id} onClick={() => navigate("/tasks/t2")} className="paper-card w-full text-left overflow-hidden flex active:scale-[0.98] transition-transform">
              <img src={c.image} alt={c.title} className="w-24 h-20 object-cover shrink-0" />
              <div className="flex-1 min-w-0 p-3">
                <p className="text-[10px] font-bold text-brand-orange flex items-center gap-1"><BookOpen size={10} /> {c.source}</p>
                <p className="text-[13px] font-bold text-brand-brown leading-snug line-clamp-2 mt-0.5">{c.title}</p>
                <p className="text-[10px] text-muted-foreground mt-1">{c.readTime} · 完成 +{c.points} 點</p>
              </div>
            </button>
          ))}
          {COURSES.map((c) => (
            <button key={c.id} onClick={() => navigate("/tasks/t3")} className="paper-card w-full text-left overflow-hidden flex active:scale-[0.98] transition-transform">
              <img src={c.image} alt={c.title} className="w-24 h-20 object-cover shrink-0" />
              <div className="flex-1 min-w-0 p-3">
                <p className="text-[10px] font-bold text-brand-matcha flex items-center gap-1"><GraduationCap size={10} /> {c.source} 課程</p>
                <p className="text-[13px] font-bold text-brand-brown leading-snug line-clamp-2 mt-0.5">{c.title}</p>
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
          <div className="w-10 h-10 rounded-xl bg-brand-orange/15 flex items-center justify-center shrink-0">
            <Sparkles size={18} className="text-brand-orange" />
          </div>
          <div className="text-left">
            <p className="text-sm font-bold text-brand-brown">AI 毛孩助手</p>
            <p className="text-[11px] text-muted-foreground">問問「點數快到期怎麼用？」</p>
          </div>
          <ChevronRight size={16} className="ml-auto text-muted-foreground" />
        </button>
      </section>

      <BottomNav />
    </div>
  );
}
