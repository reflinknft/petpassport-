import { Bot, ChevronRight, ClipboardCheck, Coins, HeartPulse, MessageCircle, Search, ShieldCheck, Sparkles } from "lucide-react";
import { useLocation } from "wouter";
import TopBar from "@/components/TopBar";
import { useDemo } from "@/contexts/DemoContext";
import { ASSETS } from "@/lib/data";

const ENTRIES = [
  { label: "問 AI 健康專家", desc: "日常照護、問題整理與服務推薦", path: "/ai", Icon: Bot, tone: "bg-brand-purple text-white" },
  { label: "我的毛孩護照", desc: "查看寵物資料與照護檔案", path: "/pets/jumi", Icon: HeartPulse, tone: "bg-brand-lilac text-brand-purple" },
  { label: "健康紀錄", desc: "追蹤日常狀態與提醒", path: "/daily", Icon: ClipboardCheck, tone: "bg-brand-mint/15 text-brand-mint" },
  { label: "今日任務", desc: "完成照護行動，累積毛孩點", path: "/tasks", Icon: Sparkles, tone: "bg-brand-coral/15 text-brand-coral" },
  { label: "毛孩點", desc: "查看點數、票券與適用權益", path: "/wallet", Icon: Coins, tone: "bg-brand-lilac text-brand-purple-dark" },
  { label: "探索服務", desc: "尋找人寵友好商家與日常服務", path: "/merchants", Icon: Search, tone: "bg-brand-mint/15 text-brand-mint" },
] as const;

/** LINE 端的功能導覽與 AI 照護管家入口示意。 */
export default function LineServiceHub() {
  const [, navigate] = useLocation();
  const { currentPet } = useDemo();

  return (
    <div className="min-h-full bg-brand-cream pb-6">
      <TopBar showBack title="LINE 毛孩護照" />
      <section className="px-5 pt-4">
        <div className="relative overflow-hidden rounded-[24px] bg-[#0e4d3f] p-5 text-white shadow-xl shadow-brand-purple/20">
          <div className="absolute -right-4 -top-6 h-28 w-28 rounded-full border-[18px] border-brand-mint/25" />
          <div className="relative flex items-start gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/15"><MessageCircle size={22} /></div>
            <div><span className="text-[10px] font-bold tracking-widest text-brand-mint">LINE OFFICIAL ACCOUNT</span><h1 className="mt-1 text-xl font-black">毛孩的日常，從對話開始</h1><p className="mt-1.5 text-xs leading-relaxed text-white/75">在 LINE 裡就能照護、記錄、累積毛孩點，還能探索適合 {currentPet.name} 的人寵友好服務。</p></div>
          </div>
        </div>
      </section>

      <section className="px-5 pt-4">
        <button onClick={() => navigate("/ai")} className="w-full rounded-[22px] bg-white p-4 text-left shadow-sm transition-transform active:scale-[0.98]">
          <div className="flex items-center gap-3"><div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-purple text-white"><Bot size={22} /></div><div className="min-w-0 flex-1"><div className="flex items-center gap-2"><p className="font-black text-brand-ink">AI 毛孩照護管家</p><span className="rounded-full bg-brand-mint/15 px-2 py-0.5 text-[9px] font-bold text-brand-mint">已上線・持續優化</span></div><p className="mt-0.5 text-[11px] text-brand-sub">先整理情境，再提供照護資訊與服務入口。</p></div><ChevronRight size={17} className="text-brand-sub" /></div>
          <div className="mt-3 flex items-center gap-2 rounded-xl bg-brand-lilac/70 p-2.5 text-[10px] leading-relaxed text-brand-ink"><ShieldCheck size={14} className="shrink-0 text-brand-mint" /> 高風險或症狀問題會提醒諮詢獸醫；AI 不取代醫療診斷。</div>
        </button>
      </section>

      <section className="px-5 pt-4">
        <div className="flex items-center gap-4 rounded-[24px] bg-[#0e4d3f] p-4 text-white shadow-lg shadow-brand-purple/15">
          <div className="shrink-0 rounded-2xl bg-white p-1.5">
            <img src={ASSETS.lineAiQr} alt="加入毛孩護照 LINE AI 毛孩健康助手的 QR Code" className="h-24 w-24 rounded-xl object-contain" />
          </div>
          <div className="min-w-0">
            <p className="text-[10px] font-bold tracking-[0.14em] text-brand-mint">SCAN TO JOIN LINE</p>
            <p className="mt-1 text-base font-black">AI 毛孩健康助手</p>
            <p className="mt-1 text-[11px] leading-relaxed text-white/75">掃描加入毛孩護照 LINE，從對話開始記錄與照護毛孩。</p>
          </div>
        </div>
      </section>

      <section className="px-5 pt-6">
        <div className="flex items-end justify-between"><div><h2 className="font-black text-brand-ink">毛孩護照目錄</h2><p className="mt-1 text-[11px] text-brand-sub">六個高頻入口，讓日常照護更容易持續。</p></div><span className="text-[10px] font-bold text-brand-purple">LINE 端</span></div>
        <div className="mt-3 grid grid-cols-2 gap-3">
          {ENTRIES.map(({ label, desc, path, Icon, tone }) => <button key={label} onClick={() => navigate(path)} className="paper-card min-h-36 p-4 text-left transition-transform active:scale-[0.98]"><div className={`flex h-10 w-10 items-center justify-center rounded-xl ${tone}`}><Icon size={19} /></div><p className="mt-3 text-sm font-black text-brand-ink">{label}</p><p className="mt-1 text-[10px] leading-relaxed text-brand-sub">{desc}</p></button>)}
        </div>
      </section>

      <section className="px-5 pt-6"><div className="rounded-2xl border border-dashed border-brand-purple/25 bg-white/60 p-3.5"><p className="text-[11px] font-black text-brand-ink">LINE 端同步範圍</p><p className="mt-1 text-[10px] leading-relaxed text-brand-sub">LINE 作為會員日常入口，正式串接時將透過帳號綁定、同意管理與事件回調連到毛孩護照的共用會員、寵物、任務與點數資料。</p></div></section>
    </div>
  );
}
