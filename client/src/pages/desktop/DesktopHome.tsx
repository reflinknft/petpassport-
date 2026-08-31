import { ArrowRight, Coins, Gift, PawPrint, QrCode, ShieldCheck, Sparkles } from "lucide-react";
import BrandIcon from "@/components/BrandIcon";
import { useLocation } from "wouter";
import { ASSETS, MERCHANTS, REWARDS } from "@/lib/data";

/** 桌機版首頁（1440px 響應式示意） */
export default function DesktopHome() {
  const [, navigate] = useLocation();
  return (
    <div className="min-h-screen bg-brand-cream">
      {/* 導覽列 */}
      <header className="sticky top-0 z-50 bg-brand-cream/90 backdrop-blur border-b border-border/60">
        <div className="max-w-6xl mx-auto px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <BrandIcon className="w-10 h-10" />
            <div>
              <p className="font-black text-brand-brown leading-none">毛孩護照</p>
              <p className="text-[10px] font-bold text-brand-orange tracking-wider">PET PASSPORT</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-bold text-brand-brown/70">
            <a href="#features" className="hover:text-brand-orange transition-colors">功能</a>
            <a href="#rewards" className="hover:text-brand-orange transition-colors">權益</a>
            <a href="#merchants" className="hover:text-brand-orange transition-colors">合作商家</a>
            <a href="#trust" className="hover:text-brand-orange transition-colors">信任與透明</a>
          </nav>
          <button
            onClick={() => navigate("/welcome")}
            className="h-10 px-5 rounded-xl bg-brand-orange text-white text-sm font-bold shadow-lg shadow-brand-orange/25 active:scale-95 transition-transform"
          >
            免費加入
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-8 pt-16 pb-20 grid lg:grid-cols-2 gap-12 items-center">
        <div className="journal-enter">
          <p className="text-sm font-bold text-brand-orange tracking-widest">毛孩點數平台 · DEMO</p>
          <h1 className="mt-4 text-5xl leading-[1.15] font-black text-brand-brown">
            照顧毛孩，<br />也累積每一份回饋
          </h1>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed max-w-md">
            毛孩護照把每一次照護、閱讀與消費，都蓋成一枚值得收藏的戳章。點數透明、權益實用、商家閉環可追蹤。
          </p>
          <div className="mt-8 flex gap-4">
            <button
              onClick={() => navigate("/welcome")}
              className="h-13 px-7 rounded-2xl bg-brand-orange text-white font-bold shadow-xl shadow-brand-orange/30 active:scale-[0.97] transition-transform flex items-center gap-2"
            >
              開始體驗 DEMO <ArrowRight size={18} />
            </button>
            <a href="#rewards" className="h-13 px-7 rounded-2xl border-2 border-brand-brown/15 font-bold text-brand-brown flex items-center active:scale-[0.97] transition-transform">
              先看看權益
            </a>
          </div>
          <div className="mt-10 flex gap-8">
            {[["3", "合作商家類型"], ["1,280", "DEMO 可用點數"], ["5", "可體驗任務"]].map(([n, l]) => (
              <div key={l}>
                <p className="text-3xl font-black text-brand-brown tabular">{n}</p>
                <p className="text-xs text-muted-foreground mt-1">{l}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative journal-enter journal-enter-2">
          <div className="rounded-[2rem] overflow-hidden shadow-2xl shadow-brand-brown/20 rotate-1">
            <img src={ASSETS.heroPets} alt="毛孩日常" className="w-full h-[420px] object-cover" />
          </div>
          <div className="absolute -bottom-6 -left-6 paper-card p-4 rotate-[-2deg] shadow-xl">
            <p className="text-[10px] font-bold text-muted-foreground">本週已累積</p>
            <p className="text-2xl font-black text-brand-orange tabular">+170 點</p>
          </div>
          <span className="stamp absolute -top-4 -right-4 bg-white px-4 py-2 text-sm shadow-lg">PET PASSPORT</span>
        </div>
      </section>

      {/* 功能 */}
      <section id="features" className="bg-white/60 py-20">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center">
            <span className="journal-tab">PASSPORT PAGES</span>
            <h2 className="mt-4 text-3xl font-black text-brand-brown">一本護照，串起毛孩的每一天</h2>
            <p className="mt-3 text-muted-foreground">從建檔、任務、點數到核銷，每一頁都是一枚戳章。</p>
          </div>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: PawPrint, title: "寵物優先", body: "首頁就是毛孩的照護卡，任務圍繞牠的年齡、品種與健康標籤。", rot: "sticker-l" },
              { icon: Coins, title: "點數透明", body: "每一點都有來源、效期與稽核編號，帳務清清楚楚可申訴。", rot: "sticker-r" },
              { icon: Gift, title: "權益實用", body: "洗護折抵、健檢加值、用品優惠，點數直接換成照護資源。", rot: "sticker-l2" },
              { icon: QrCode, title: "到店核銷", body: "出示動態 QR，店員掃碼完成核銷，轉換可追蹤。", rot: "sticker-r2" },
            ].map(({ icon: Icon, title, body }, i) => (
              <div key={title} className={`paper-card p-6 journal-enter journal-enter-${i + 1} ${["sticker-l","sticker-r","sticker-l2","sticker-r2"][i]}`}>
                <div className="w-12 h-12 rounded-2xl bg-brand-apricot flex items-center justify-center">
                  <Icon size={22} className="text-brand-orange" />
                </div>
                <h3 className="mt-4 font-black text-brand-brown">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{body}</p>
                <div className="mt-4 pt-3 border-t border-dashed border-border text-[10px] font-bold text-brand-orange/70 tracking-widest">STAMP 0{i + 1}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 權益 */}
      <section id="rewards" className="py-20">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex items-end justify-between">
            <div>
              <span className="journal-tab">TICKET STUBS</span>
              <h2 className="mt-4 text-3xl font-black text-brand-brown">熱門權益</h2>
              <p className="mt-2 text-muted-foreground">點數直接兌換洗護、健檢與用品優惠。</p>
            </div>
            <button onClick={() => navigate("/rewards")} className="text-sm font-bold text-brand-orange flex items-center gap-1">
              全部權益 <ArrowRight size={15} />
            </button>
          </div>
          <div className="mt-8 grid md:grid-cols-3 gap-6 items-start">
            {REWARDS.map((r, i) => (
              <button
                key={r.id}
                onClick={() => navigate(`/rewards/${r.id}`)}
                className={`paper-card overflow-hidden text-left active:scale-[0.98] transition-transform journal-enter journal-enter-${i + 1} ${["sticker-l","sticker-r","sticker-l"][i]} ${i === 1 ? "md:mt-8" : ""}`}
              >
                <img src={r.image} alt={r.title} className="w-full h-48 object-cover" />
                <div className="p-5">
                  <p className="font-black text-brand-brown">{r.title}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{r.merchant}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-brand-orange font-black text-lg tabular">{r.points} 點</span>
                    <span className="text-[11px] text-muted-foreground">{r.refValue}</span>
                  </div>
                </div>
                <div className="ticket-notch border-t border-dashed border-border px-5 py-2.5 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-muted-foreground">PP-{r.id.toUpperCase()}-2026</span>
                  <span className="text-[10px] font-bold text-brand-orange">可兌換</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 商家 */}
      <section id="merchants" className="bg-white/60 py-20">
        <div className="max-w-6xl mx-auto px-8">
          <span className="journal-tab">PARTNER STAMPS</span>
          <h2 className="mt-4 text-3xl font-black text-brand-brown">合作商家</h2>
          <p className="mt-2 text-muted-foreground">洗護、用品與醫療保健，形成可追蹤的服務閉環。</p>
          <div className="mt-8 grid md:grid-cols-3 gap-6 items-start">
            {MERCHANTS.map((m, i) => (
              <button
                key={m.id}
                onClick={() => navigate(`/merchants/${m.id}`)}
                className={`paper-card overflow-hidden text-left active:scale-[0.98] transition-transform journal-enter journal-enter-${i + 1} ${["sticker-r","sticker-l","sticker-r2"][i]} ${i === 1 ? "md:mt-6" : ""}`}
              >
                <img src={m.image} alt={m.name} className="w-full h-40 object-cover" />
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <p className="font-black text-brand-brown">{m.name}</p>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${m.open ? "bg-brand-matcha/15 text-brand-matcha" : "bg-brand-apricot text-muted-foreground"}`}>
                      {m.open ? "營業中" : "休息中"}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">{m.branch} · {m.distance}</p>
                </div>
                <div className="ticket-notch border-t border-dashed border-border px-5 py-2 flex items-center justify-between">
                  <span className="text-[10px] font-bold text-brand-brown/60">{m.category}</span>
                  <span className="text-[10px] font-mono text-muted-foreground">{m.hours}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 信任 */}
      <section id="trust" className="py-20">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <span className="journal-tab">TRUST LEDGER</span>
          <ShieldCheck size={40} className="mx-auto mt-4 text-brand-matcha" />
          <h2 className="mt-4 text-3xl font-black text-brand-brown">帳務透明，AI 可被信任</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            每一筆點數都顯示來源、狀態、日期、效期與稽核編號，並提供申訴入口。AI 建議標示資料來源與免責聲明，不作醫療診斷；疑似醫療問題一律建議諮詢獸醫師。
          </p>
          <div className="mt-10 receipt-strip p-6 grid grid-cols-3 gap-4">
            {["來源可查", "效期提醒", "申訴管道"].map((t) => (
              <div key={t} className="text-center">
                <p className="font-bold text-brand-brown text-sm">{t}</p>
                <p className="mt-1 text-[10px] font-mono text-muted-foreground">LEDGER · VERIFIED</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-8">
          <div className="rounded-[2rem] bg-brand-brown text-white p-12 text-center shadow-2xl shadow-brand-brown/30 relative overflow-hidden">
            <Sparkles className="mx-auto text-brand-orange" size={32} />
            <h2 className="mt-4 text-3xl font-black">準備好為毛孩蓋下第一枚戳章了嗎？</h2>
            <p className="mt-3 text-white/70">加入即可領取 100 點新手禮，開始累積照護回饋。</p>
            <button
              onClick={() => navigate("/welcome")}
              className="mt-8 h-13 px-8 rounded-2xl bg-brand-orange text-white font-bold shadow-xl active:scale-[0.97] transition-transform"
            >
              免費加入毛孩護照
            </button>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/60 py-8">
        <div className="max-w-6xl mx-auto px-8 flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <BrandIcon className="w-6 h-6" />
            <span>毛孩護照 Pet Passport · DEMO V1.0</span>
          </div>
          <p>本頁為前端展示用 DEMO，所有資料均為示意。</p>
        </div>
      </footer>
    </div>
  );
}
