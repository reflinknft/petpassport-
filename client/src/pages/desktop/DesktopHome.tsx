import { ArrowRight, Coins, Gift, PawPrint, QrCode, ShieldCheck, Sparkles, Star } from "lucide-react";
import { useLocation } from "wouter";
import BrandIcon from "@/components/BrandIcon";
import ProgressRing from "@/components/ProgressRing";
import { ASSETS, MERCHANTS, REWARDS } from "@/lib/data";

const HERO_PHONE = "/manus-storage/hero-dog-phone_1d7f527b.png";

/** 桌機版首頁（Biscuit 式 1440px 行銷頁） */
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
              <p className="font-black text-brand-ink leading-none">毛孩護照</p>
              <p className="text-[10px] font-bold text-brand-purple tracking-wider">PET PASSPORT</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-bold text-brand-sub">
            <a href="#how" className="hover:text-brand-purple transition-colors">如何運作</a>
            <a href="#rewards" className="hover:text-brand-purple transition-colors">權益</a>
            <a href="#merchants" className="hover:text-brand-purple transition-colors">合作商家</a>
            <a href="#plans" className="hover:text-brand-purple transition-colors">方案</a>
          </nav>
          <button
            onClick={() => navigate("/welcome")}
            className="h-10 px-6 rounded-full bg-brand-purple text-white text-sm font-bold shadow-lg shadow-brand-purple/30 active:scale-95 transition-transform"
          >
            免費加入
          </button>
        </div>
      </header>

      {/* Hero：Biscuit 式中央對齊 + 狗狗與手機並置 */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 glow-bg" />
        <div className="relative max-w-4xl mx-auto px-8 pt-14 pb-0 text-center">
          <span className="journal-tab journal-enter">毛孩點數平台 · DEMO</span>
          <h1 className="mt-5 text-[56px] leading-[1.08] font-black gradient-title journal-enter journal-enter-1">
            照顧毛孩，<br />也累積每一份回饋
          </h1>
          <p className="mt-5 text-lg text-brand-sub leading-relaxed max-w-xl mx-auto journal-enter journal-enter-2">
            記錄每一次照護、完成任務、閱讀與上課，都能累積毛孩點，兌換洗護、健檢與用品優惠。
          </p>
          <div className="mt-8 flex justify-center gap-4 journal-enter journal-enter-3">
            <button
              onClick={() => navigate("/welcome")}
              className="h-13 px-8 rounded-full bg-brand-purple text-white font-bold shadow-xl shadow-brand-purple/35 active:scale-[0.97] transition-transform flex items-center gap-2"
            >
              開始體驗 DEMO <ArrowRight size={18} />
            </button>
            <a href="#rewards" className="h-13 px-8 rounded-full border-2 border-brand-purple/20 font-bold text-brand-purple-dark flex items-center active:scale-[0.97] transition-transform">
              先看看權益
            </a>
          </div>
        </div>
        {/* 狗狗 + 手機主視覺 */}
        <div className="relative max-w-5xl mx-auto px-8 mt-10 journal-enter journal-enter-4">
          <div className="relative">
            <div className="rounded-t-[2.5rem] overflow-hidden shadow-2xl shadow-brand-purple/20 bg-brand-cream">
              <img src={HERO_PHONE} alt="毛孩護照 App 與狗狗" className="w-full max-w-3xl mx-auto block" />
            </div>
            {/* 浮動點數卡 */}
            <div className="absolute bottom-8 left-1/2 -translate-x-[110%] paper-card p-4 rotate-[-3deg] shadow-xl flex items-center gap-3">
              <ProgressRing value={80} size={56} stroke={6}>
                <span className="text-xs font-black text-brand-purple tabular">80%</span>
              </ProgressRing>
              <div>
                <p className="text-[10px] font-bold text-brand-sub">本週已累積</p>
                <p className="text-xl font-black text-brand-coral tabular">+170 點</p>
              </div>
            </div>
            <span className="stamp absolute top-6 right-[12%] bg-white px-4 py-2 text-sm shadow-lg">PET PASSPORT</span>
          </div>
        </div>
      </section>

      {/* 數據卡 */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-8">
          <div className="grid grid-cols-3 gap-6">
            {[
              { n: "1,280", l: "DEMO 可用點數", Icon: Coins },
              { n: "5", l: "可體驗任務", Icon: PawPrint },
              { n: "3", l: "合作商家類型", Icon: Gift },
            ].map(({ n, l, Icon }, i) => (
              <div key={l} className={`paper-card p-6 text-center journal-enter journal-enter-${i + 1}`}>
                <div className="w-12 h-12 mx-auto rounded-full bg-brand-lilac flex items-center justify-center">
                  <Icon size={22} className="text-brand-purple" />
                </div>
                <p className="mt-3 text-3xl font-black text-brand-purple tabular">{n}</p>
                <p className="text-sm text-brand-sub mt-1">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 如何運作：步驟卡 */}
      <section id="how" className="py-20">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center">
            <span className="journal-tab">HOW IT WORKS</span>
            <h2 className="mt-4 text-4xl font-black text-brand-ink">毛孩護照如何運作？</h2>
            <p className="mt-3 text-brand-sub">記錄照護、完成任務、累積毛孩點，兌換真正有用的回饋。</p>
          </div>
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { n: "1", icon: PawPrint, title: "建立寵物護照", body: "記錄品種、生日與健康標籤，任務與建議都依牠量身打造。", rot: "sticker-l" },
              { n: "2", icon: Coins, title: "完成任務賺點", body: "照護打卡、閱讀文章、完成課程，每一點都有來源與效期。", rot: "sticker-r" },
              { n: "3", icon: Gift, title: "兌換實用權益", body: "洗護折抵、健檢加值、用品優惠，點數直接換成照護資源。", rot: "sticker-l2" },
              { n: "4", icon: QrCode, title: "到店出示核銷", body: "出示動態 QR，店員掃碼完成核銷，轉換可追蹤。", rot: "sticker-r2" },
            ].map(({ n, icon: Icon, title, body, rot }, i) => (
              <div key={n} className={`paper-card p-6 journal-enter journal-enter-${i + 1} ${rot}`}>
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-full bg-brand-lilac flex items-center justify-center">
                    <Icon size={22} className="text-brand-purple" />
                  </div>
                  <span className="text-4xl font-black text-brand-lilac">{n}</span>
                </div>
                <h3 className="mt-4 font-black text-brand-ink">{title}</h3>
                <p className="mt-2 text-sm text-brand-sub leading-relaxed">{body}</p>
                <div className="mt-4 pt-3 border-t border-dashed border-border text-[10px] font-bold text-brand-purple/60 tracking-widest">STEP {n}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 權益 */}
      <section id="rewards" className="bg-white/60 py-20">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex items-end justify-between">
            <div>
              <span className="journal-tab">TICKET STUBS</span>
              <h2 className="mt-4 text-4xl font-black text-brand-ink">熱門權益</h2>
              <p className="mt-2 text-brand-sub">點數直接兌換洗護、健檢與用品優惠。</p>
            </div>
            <button onClick={() => navigate("/rewards")} className="text-sm font-bold text-brand-purple flex items-center gap-1">
              全部權益 <ArrowRight size={15} />
            </button>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-6 items-start">
            {REWARDS.map((r, i) => (
              <button
                key={r.id}
                onClick={() => navigate(`/rewards/${r.id}`)}
                className={`paper-card overflow-hidden text-left active:scale-[0.98] transition-transform journal-enter journal-enter-${i + 1} ${["sticker-l", "sticker-r", "sticker-l"][i]} ${i === 1 ? "md:mt-8" : ""}`}
              >
                <img src={r.image} alt={r.title} className="w-full h-48 object-cover" />
                <div className="p-5">
                  <p className="font-black text-brand-ink">{r.title}</p>
                  <p className="mt-1 text-xs text-brand-sub">{r.merchant}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-brand-purple font-black text-lg tabular">{r.points} 點</span>
                    <span className="text-[11px] text-brand-sub">{r.refValue}</span>
                  </div>
                </div>
                <div className="ticket-notch border-t border-dashed border-border px-5 py-2.5 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-brand-sub">PP-{r.id.toUpperCase()}-2026</span>
                  <span className="text-[10px] font-bold text-brand-purple">可兌換</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 商家 */}
      <section id="merchants" className="py-20">
        <div className="max-w-6xl mx-auto px-8">
          <span className="journal-tab">PARTNER STAMPS</span>
          <h2 className="mt-4 text-4xl font-black text-brand-ink">合作商家</h2>
          <p className="mt-2 text-brand-sub">洗護、用品與醫療保健，形成可追蹤的服務閉環。</p>
          <div className="mt-10 grid md:grid-cols-3 gap-6 items-start">
            {MERCHANTS.map((m, i) => (
              <button
                key={m.id}
                onClick={() => navigate(`/merchants/${m.id}`)}
                className={`paper-card overflow-hidden text-left active:scale-[0.98] transition-transform journal-enter journal-enter-${i + 1} ${["sticker-r", "sticker-l", "sticker-r2"][i]} ${i === 1 ? "md:mt-6" : ""}`}
              >
                <img src={m.image} alt={m.name} className="w-full h-40 object-cover" />
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <p className="font-black text-brand-ink">{m.name}</p>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${m.open ? "bg-brand-mint/15 text-brand-mint" : "bg-brand-lilac text-brand-sub"}`}>
                      {m.open ? "營業中" : "休息中"}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-brand-sub">{m.branch} · {m.distance}</p>
                </div>
                <div className="ticket-notch border-t border-dashed border-border px-5 py-2 flex items-center justify-between">
                  <span className="text-[10px] font-bold text-brand-purple-dark/60">{m.category}</span>
                  <span className="text-[10px] font-mono text-brand-sub">{m.hours}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 方案 */}
      <section id="plans" className="bg-white/60 py-20">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center">
            <span className="journal-tab">PLANS</span>
            <h2 className="mt-4 text-4xl font-black text-brand-ink">找到適合你的方案</h2>
            <p className="mt-3 text-brand-sub">免費開始，或升級解鎖更多權益。</p>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-6 items-start">
            {[
              { name: "毛孩護照", tier: "Basic", price: "NT$0", unit: "永久免費", features: ["建立寵物護照", "完成任務賺毛孩點", "兌換基礎權益", "查看點數明細"], cta: "免費開始", primary: false },
              { name: "毛孩護照", tier: "Plus", price: "NT$99", unit: "每月", features: ["點數加倍活動", "專屬權益與品牌專區", "AI 毛孩助手優先推薦", "無廣告體驗"], cta: "升級 Plus", primary: true },
              { name: "毛孩護照", tier: "商家合作", price: "洽談", unit: "專案合作", features: ["權益上架與曝光", "到店導流與核銷", "轉換數據報表", "聯名活動企劃"], cta: "洽談合作", primary: false },
            ].map((p, i) => (
              <div key={p.tier} className={`paper-card overflow-hidden journal-enter journal-enter-${i + 1} ${p.primary ? "ring-2 ring-brand-purple md:-mt-4 shadow-xl shadow-brand-purple/15" : ""}`}>
                {p.primary && <div className="bg-brand-purple text-white text-center text-xs font-bold py-2">最受歡迎</div>}
                <div className="p-6">
                  <p className="text-sm font-bold text-brand-sub">{p.name}</p>
                  <p className="text-2xl font-black text-brand-ink">{p.tier}</p>
                  <div className="mt-4">
                    <span className="text-4xl font-black text-brand-purple tabular">{p.price}</span>
                    <span className="text-sm text-brand-sub ml-1.5">{p.unit}</span>
                  </div>
                  <ul className="mt-5 space-y-2.5">
                    {p.features.map((f) => (
                      <li key={f} className="flex gap-2 text-sm text-brand-sub">
                        <span className="text-brand-mint font-black">✓</span> {f}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => navigate("/welcome")}
                    className={`mt-6 w-full h-12 rounded-full font-bold active:scale-[0.97] transition-transform ${
                      p.primary ? "bg-brand-purple text-white shadow-lg shadow-brand-purple/30" : "border-2 border-brand-purple/20 text-brand-purple-dark"
                    }`}
                  >
                    {p.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 評價 */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center">
            <span className="journal-tab">REVIEWS</span>
            <h2 className="mt-4 text-4xl font-black text-brand-ink">飼主怎麼說</h2>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              { name: "陳小姐", pet: "玩具貴賓・13 歲", text: "每天打卡變成習慣，點數換的洗護券真的用得到，Jumi 的護照也越來越完整。" },
              { name: "黃先生", pet: "英國短毛貓・3 歲", text: "介面很可愛，任務不會有壓力，偶爾看看文章就能累點，很適合忙碌的上班族。" },
              { name: "林小姐", pet: "米克斯・5 歲", text: "到店出示 QR 就能折抵，店家掃碼很快，點數明細也看得很安心。" },
            ].map((r, i) => (
              <div key={r.name} className={`paper-card p-6 journal-enter journal-enter-${i + 1}`}>
                <div className="flex gap-0.5 text-brand-coral">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} size={14} fill="currentColor" />
                  ))}
                </div>
                <p className="mt-3 text-sm text-brand-ink leading-relaxed">「{r.text}」</p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-lilac flex items-center justify-center font-black text-brand-purple">{r.name[0]}</div>
                  <div>
                    <p className="text-sm font-bold text-brand-ink">{r.name}</p>
                    <p className="text-[11px] text-brand-sub">{r.pet}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 信任 */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <span className="journal-tab">TRUST LEDGER</span>
          <ShieldCheck size={40} className="mx-auto mt-4 text-brand-mint" />
          <h2 className="mt-4 text-3xl font-black text-brand-ink">帳務透明，AI 可被信任</h2>
          <p className="mt-4 text-brand-sub leading-relaxed max-w-2xl mx-auto">
            每一筆點數都顯示來源、狀態、日期、效期與稽核編號，並提供申訴入口。AI 建議標示資料來源與免責聲明，不作醫療診斷；疑似醫療問題一律建議諮詢獸醫師。
          </p>
          <div className="mt-10 receipt-strip p-6 grid grid-cols-3 gap-4">
            {["來源可查", "效期提醒", "申訴管道"].map((t) => (
              <div key={t} className="text-center">
                <p className="font-bold text-brand-ink text-sm">{t}</p>
                <p className="mt-1 text-[10px] font-mono text-brand-sub">LEDGER · VERIFIED</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-8">
          <div className="rounded-[2.5rem] bg-gradient-to-br from-brand-purple to-brand-purple-dark text-white p-12 text-center shadow-2xl shadow-brand-purple/30 relative overflow-hidden">
            <Sparkles className="mx-auto text-brand-coral" size={32} />
            <h2 className="mt-4 text-3xl font-black">準備好為毛孩蓋下第一枚戳章了嗎？</h2>
            <p className="mt-3 text-white/70">加入即可領取 100 點新手禮，開始累積照護回饋。</p>
            <button
              onClick={() => navigate("/welcome")}
              className="mt-8 h-13 px-8 rounded-full bg-brand-coral text-white font-bold shadow-xl active:scale-[0.97] transition-transform"
            >
              免費加入毛孩護照
            </button>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/60 py-8">
        <div className="max-w-6xl mx-auto px-8 flex items-center justify-between text-xs text-brand-sub">
          <div className="flex items-center gap-2">
            <BrandIcon className="w-6 h-6" />
            <span>毛孩護照 Pet Passport · DEMO V2.0</span>
          </div>
          <p>本頁為前端展示用 DEMO，所有資料均為示意。</p>
        </div>
      </footer>
    </div>
  );
}
