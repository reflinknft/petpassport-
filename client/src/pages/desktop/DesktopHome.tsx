import { ArrowRight, BookOpen, Coins, Gift, GraduationCap, HeartPulse, MapPin, PawPrint, QrCode, ShieldCheck, Sparkles, Star, Store, TrendingUp } from "lucide-react";
import { useLocation } from "wouter";
import BrandIcon from "@/components/BrandIcon";
import ProgressRing from "@/components/ProgressRing";
import { ASSETS, BRAND_TASKS, CONTENTS, COURSES, MERCHANTS, REWARDS } from "@/lib/data";

const HERO_PHONE = "/manus-storage/hero-dog-phone_1d7f527b.png";

/** 桌機版行銷首頁（Biscuit 式完整平台介紹） */
export default function DesktopHome() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-brand-cream text-brand-ink">
      {/* 頂部導覽 */}
      <header className="sticky top-0 z-40 bg-brand-cream/90 backdrop-blur border-b border-border/60">
        <div className="max-w-6xl mx-auto px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <BrandIcon className="w-9 h-9" />
            <div>
              <p className="font-black text-brand-ink leading-none">毛孩護照</p>
              <p className="text-[10px] font-bold text-brand-purple tracking-widest">PET PASSPORT</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-bold text-brand-sub">
            <a href="#features" className="hover:text-brand-purple transition-colors">功能</a>
            <a href="#rewards" className="hover:text-brand-purple transition-colors">權益</a>
            <a href="#merchants" className="hover:text-brand-purple transition-colors">商家</a>
            <a href="#plans" className="hover:text-brand-purple transition-colors">方案</a>
          </nav>
          <button
            onClick={() => navigate("/welcome")}
            className="h-10 px-6 rounded-full bg-brand-purple text-white text-sm font-bold shadow-lg shadow-brand-purple/30 active:scale-[0.97] transition-transform"
          >
            開始體驗
          </button>
        </div>
      </header>

      {/* Hero：中央對齊 + 狗狗與手機 */}
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
            <a href="#features" className="h-13 px-8 rounded-full border-2 border-brand-purple/20 font-bold text-brand-purple-dark flex items-center active:scale-[0.97] transition-transform">
              了解平台功能
            </a>
          </div>
        </div>
        <div className="relative max-w-5xl mx-auto px-8 mt-10 journal-enter journal-enter-4">
          <div className="relative">
            <div className="rounded-t-[2.5rem] overflow-hidden shadow-2xl shadow-brand-purple/20 bg-brand-cream">
              <img src={HERO_PHONE} alt="毛孩護照 App 與狗狗" className="w-full max-w-3xl mx-auto block" />
            </div>
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

      {/* 平台如何運作（四步驟） */}
      <section id="features" className="py-16 bg-white/50">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="journal-tab">HOW IT WORKS</span>
            <h2 className="mt-4 text-4xl font-black gradient-title">毛孩護照如何運作？</h2>
            <p className="mt-3 text-brand-sub">從建立護照到兌換權益，四個步驟完成點數循環。</p>
          </div>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { n: "1", t: "建立毛孩護照", d: "填寫毛孩資料與健康問卷，生成專屬數位身份。", Icon: PawPrint },
              { n: "2", t: "完成每日照護", d: "散步、刷牙、梳毛等任務打卡，累積照護紀錄。", Icon: HeartPulse },
              { n: "3", t: "賺取毛孩點", d: "完成任務、閱讀文章、上課、到店消費都能得點。", Icon: Coins },
              { n: "4", t: "兌換權益", d: "洗護折抵、健檢加值、用品折扣，點數直接當錢用。", Icon: Gift },
            ].map(({ n, t, d, Icon }, i) => (
              <div key={n} className={`paper-card p-6 text-center journal-enter journal-enter-${i + 1}`}>
                <div className="w-14 h-14 mx-auto rounded-full bg-brand-purple text-white flex items-center justify-center text-xl font-black">
                  {n}
                </div>
                <div className="mt-4 w-10 h-10 mx-auto rounded-xl bg-brand-lilac flex items-center justify-center">
                  <Icon size={18} className="text-brand-purple" />
                </div>
                <h3 className="mt-3 font-black text-brand-ink">{t}</h3>
                <p className="mt-2 text-xs text-brand-sub leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 功能模組介紹 */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="journal-tab">FEATURES</span>
            <h2 className="mt-4 text-4xl font-black gradient-title">平台功能模組</h2>
            <p className="mt-3 text-brand-sub">六大核心模組，涵蓋毛孩照護的完整旅程。</p>
          </div>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { Icon: PawPrint, t: "毛孩護照", d: "建立毛孩數位身份，記錄基本資料、健康問卷、疫苗與驅蟲狀態。", c: "bg-brand-purple/10 text-brand-purple" },
              { Icon: HeartPulse, t: "每日照護任務", d: "散步、飲水、刷牙、梳毛等日常任務，完成打卡累積連續天數。", c: "bg-brand-mint/10 text-brand-mint" },
              { Icon: BookOpen, t: "內容任務", d: "閱讀 HEHO Pet 文章、完成問答驗驗證，邊學邊賺點。", c: "bg-brand-coral/10 text-brand-coral" },
              { Icon: GraduationCap, t: "課程任務", d: "Teachify 課程學習，完成試看或正式課程獲得高額點數。", c: "bg-brand-purple/10 text-brand-purple" },
              { Icon: Store, t: "到店消費", d: "出示會員 QR 碼，門店掃碼累積消費點數，首次到店加碼。", c: "bg-brand-mint/10 text-brand-mint" },
              { Icon: TrendingUp, t: "品牌任務", d: "品牌贊助問卷、試用、影片觀看，精準媒合目標飼主。", c: "bg-brand-coral/10 text-brand-coral" },
            ].map(({ Icon, t, d, c }, i) => (
              <div key={t} className={`paper-card p-6 journal-enter journal-enter-${(i % 3) + 1}`}>
                <div className={`w-12 h-12 rounded-2xl ${c} flex items-center justify-center`}>
                  <Icon size={22} />
                </div>
                <h3 className="mt-4 font-black text-brand-ink">{t}</h3>
                <p className="mt-2 text-sm text-brand-sub leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 權益兌換 */}
      <section id="rewards" className="py-16 bg-white/50">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex items-end justify-between">
            <div>
              <span className="journal-tab">REWARDS</span>
              <h2 className="mt-4 text-4xl font-black gradient-title">可兌換權益</h2>
              <p className="mt-3 text-brand-sub">洗護、健檢、用品，點數直接折抵。</p>
            </div>
            <button onClick={() => navigate("/rewards")} className="hidden md:flex items-center gap-2 text-brand-purple font-bold text-sm">
              查看全部 <ArrowRight size={16} />
            </button>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {REWARDS.map((r, i) => (
              <div key={r.id} className={`paper-card overflow-hidden journal-enter journal-enter-${i + 1}`}>
                <img src={r.image} alt={r.title} className="w-full h-48 object-cover" />
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-brand-purple bg-brand-lilac px-2 py-1 rounded-full">{r.category}</span>
                    <span className="text-brand-coral font-black text-sm tabular">{r.points} 點</span>
                  </div>
                  <h3 className="mt-3 font-black text-brand-ink">{r.title}</h3>
                  <p className="mt-1 text-xs text-brand-sub">{r.merchant}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 合作商家 */}
      <section id="merchants" className="py-16">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex items-end justify-between">
            <div>
              <span className="journal-tab">MERCHANTS</span>
              <h2 className="mt-4 text-4xl font-black gradient-title">合作商家</h2>
              <p className="mt-3 text-brand-sub">洗護沙龍、用品店、動物醫院，消費即累點。</p>
            </div>
            <button onClick={() => navigate("/merchants")} className="hidden md:flex items-center gap-2 text-brand-purple font-bold text-sm">
              查看全部 <ArrowRight size={16} />
            </button>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {MERCHANTS.map((m, i) => (
              <div key={m.id} className={`paper-card overflow-hidden journal-enter journal-enter-${i + 1}`}>
                <img src={m.image} alt={m.name} className="w-full h-40 object-cover" />
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-brand-mint bg-brand-mint/10 px-2 py-1 rounded-full">{m.category}</span>
                    <span className="text-[10px] text-brand-sub flex items-center gap-1"><MapPin size={10} /> {m.distance}</span>
                  </div>
                  <h3 className="mt-3 font-black text-brand-ink">{m.name}</h3>
                  <p className="mt-1 text-xs text-brand-sub">{m.branch}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 內容與課程 */}
      <section className="py-16 bg-white/50">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="journal-tab">LEARN & EARN</span>
            <h2 className="mt-4 text-4xl font-black gradient-title">邊學邊賺</h2>
            <p className="mt-3 text-brand-sub">HEHO Pet 文章與 Teachify 課程，完成即得點。</p>
          </div>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {CONTENTS.map((c, i) => (
              <div key={c.id} className={`paper-card overflow-hidden flex journal-enter journal-enter-${i + 1}`}>
                <img src={c.image} alt={c.title} className="w-40 h-40 object-cover shrink-0" />
                <div className="p-5 flex flex-col justify-center">
                  <span className="text-[10px] font-bold text-brand-purple flex items-center gap-1"><BookOpen size={10} /> {c.source}</span>
                  <h3 className="mt-2 font-black text-brand-ink leading-snug">{c.title}</h3>
                  <p className="mt-2 text-xs text-brand-sub">{c.readTime} · 完成 +{c.points} 點</p>
                </div>
              </div>
            ))}
            {COURSES.map((c) => (
              <div key={c.id} className="paper-card overflow-hidden flex journal-enter journal-enter-3">
                <img src={c.image} alt={c.title} className="w-40 h-40 object-cover shrink-0" />
                <div className="p-5 flex flex-col justify-center">
                  <span className="text-[10px] font-bold text-brand-mint flex items-center gap-1"><GraduationCap size={10} /> {c.source} 課程</span>
                  <h3 className="mt-2 font-black text-brand-ink leading-snug">{c.title}</h3>
                  <p className="mt-2 text-xs text-brand-sub">{c.duration} · 完成 +{c.points} 點</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 品牌任務 */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="journal-tab">BRAND TASKS</span>
            <h2 className="mt-4 text-4xl font-black gradient-title">品牌贊助任務</h2>
            <p className="mt-3 text-brand-sub">品牌出資發布任務，飼主完成互動獲得點數。</p>
          </div>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {BRAND_TASKS.map((b, i) => (
              <div key={b.id} className={`paper-card overflow-hidden journal-enter journal-enter-${i + 1}`}>
                <img src={b.image} alt={b.brand} className="w-full h-44 object-cover" />
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-brand-coral">{b.brand} · 贊助</span>
                    <span className="text-brand-coral font-black text-sm tabular">+{b.points} 點</span>
                  </div>
                  <h3 className="mt-3 font-black text-brand-ink">{b.title}</h3>
                  <p className="mt-1 text-xs text-brand-sub">{b.audience}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 方案 */}
      <section id="plans" className="py-16 bg-white/50">
        <div className="max-w-5xl mx-auto px-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="journal-tab">PLANS</span>
            <h2 className="mt-4 text-4xl font-black gradient-title">選擇適合的方案</h2>
            <p className="mt-3 text-brand-sub">從免費開始，或升級解鎖更多權益。</p>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              { name: "Basic", price: "免費", desc: "開始累積毛孩點", features: ["每日照護任務", "基礎點數累積", "兌換入門權益", "廣告支持"], cta: "免費開始", primary: false },
              { name: "Plus", price: "NT$99/月", desc: "解鎖完整體驗", features: ["無廣告", "點數加速 1.5x", "專屬品牌任務", "優先客服"], cta: "升級 Plus", primary: true },
              { name: "商家", price: "洽談", desc: "品牌與門店合作", features: ["發布贊助任務", "點數採購", "核銷後台", "成效報表"], cta: "申請合作", primary: false },
            ].map((p, i) => (
              <div key={p.name} className={`paper-card p-6 text-center journal-enter journal-enter-${i + 1} ${p.primary ? "ring-2 ring-brand-purple shadow-xl shadow-brand-purple/20" : ""}`}>
                {p.primary && <span className="inline-block px-3 py-1 rounded-full bg-brand-purple text-white text-[10px] font-bold mb-3">最受歡迎</span>}
                <h3 className="font-black text-brand-ink text-lg">{p.name}</h3>
                <p className="mt-1 text-2xl font-black text-brand-purple">{p.price}</p>
                <p className="mt-1 text-xs text-brand-sub">{p.desc}</p>
                <ul className="mt-5 space-y-2.5 text-sm text-brand-sub text-left">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2"><ShieldCheck size={14} className="text-brand-mint shrink-0" /> {f}</li>
                  ))}
                </ul>
                <button className={`mt-6 w-full h-11 rounded-full font-bold text-sm active:scale-[0.97] transition-transform ${p.primary ? "bg-brand-purple text-white shadow-lg shadow-brand-purple/30" : "border-2 border-brand-purple/20 text-brand-purple-dark"}`}>
                  {p.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 評價 */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="journal-tab">TESTIMONIALS</span>
            <h2 className="mt-4 text-4xl font-black gradient-title">飼主怎麼說</h2>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              { name: "陳小姐", pet: "貴賓犬 Jumi", text: "每天打卡變成習慣，點數真的換到洗護券，很實用！", stars: 5 },
              { name: "林先生", pet: "英短 麻糬", text: "介面很可愛，任務設計讓我更注意貓咪的日常照護。", stars: 5 },
              { name: "王小姐", pet: "米克斯 豆豆", text: "HEHO 文章看完還能拿點，學到很多熟齡犬知識。", stars: 4 },
            ].map((t, i) => (
              <div key={t.name} className={`paper-card p-6 journal-enter journal-enter-${i + 1}`}>
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} size={14} className={j < t.stars ? "text-brand-coral fill-brand-coral" : "text-border"} />
                  ))}
                </div>
                <p className="mt-4 text-sm text-brand-ink leading-relaxed">「{t.text}」</p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-lilac flex items-center justify-center font-black text-brand-purple">{t.name[0]}</div>
                  <div>
                    <p className="text-sm font-bold text-brand-ink">{t.name}</p>
                    <p className="text-[10px] text-brand-sub">{t.pet}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-brand-purple to-brand-purple-dark text-white">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <Sparkles size={32} className="mx-auto text-brand-coral" />
          <h2 className="mt-4 text-4xl font-black">開始為毛孩累積第一份回饋</h2>
          <p className="mt-3 text-white/80">建立護照、完成任務、兌換權益，一切從這裡開始。</p>
          <button
            onClick={() => navigate("/welcome")}
            className="mt-8 h-13 px-10 rounded-full bg-white text-brand-purple font-bold shadow-xl active:scale-[0.97] transition-transform inline-flex items-center gap-2"
          >
            立即體驗 DEMO <ArrowRight size={18} />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-border/60">
        <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <BrandIcon className="w-8 h-8" />
            <div>
              <p className="font-black text-brand-ink text-sm">毛孩護照</p>
              <p className="text-[10px] text-brand-sub">Pet Passport · 毛孩點數平台 DEMO</p>
            </div>
          </div>
          <p className="text-xs text-brand-sub">© 2026 毛孩護照 Pet Passport. 僅供產品演示。</p>
        </div>
      </footer>
    </div>
  );
}
