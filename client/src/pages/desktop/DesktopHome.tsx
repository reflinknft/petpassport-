import { useLocation } from "wouter";
import BrandIcon from "@/components/BrandIcon";
import ProgressRing from "@/components/ProgressRing";
import { CONTENTS, COURSES, MERCHANTS, PARTNERS, REWARDS } from "@/lib/data";
import { ArrowRight, BookOpen, Coins, Gift, GraduationCap, HeartPulse, MapPin, PawPrint, ShieldCheck, Sparkles, Store, Target, Users } from "lucide-react";

const HERO_PHONE = "/manus-storage/pet-jumi_ae641b54.png";

/** 桌機版行銷首頁（Biscuit 式完整平台介紹） */
export default function DesktopHome() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-brand-cream text-brand-ink">
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
              <img src={HERO_PHONE} alt="毛孩護照 App 與狗狗" className="w-full max-w-3xl mx-auto block object-contain h-[480px] bg-brand-cream" />
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
              { n: "1,000+", l: "完成建檔會員", Icon: Users },
              { n: "15%", l: "任務完成率", Icon: Target },
              { n: "10%", l: "到店核銷率", Icon: Store },
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
              { Icon: GraduationCap, t: "課程任務", d: "毛小孩照護學院課程學習，完成試看或正式課程獲得高額點數。", c: "bg-brand-purple/10 text-brand-purple" },
              { Icon: Store, t: "到店消費", d: "出示會員 QR 碼，門店掃碼累積消費點數，首次到店加碼。", c: "bg-brand-mint/10 text-brand-mint" },
              { Icon: ShieldCheck, t: "健康提醒", d: "疫苗、驅蟲與日常照護提醒，幫飼主掌握重要時程。", c: "bg-brand-coral/10 text-brand-coral" },
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
            <p className="mt-3 text-brand-sub">HEHO Pet 文章與毛小孩照護學院課程，完成即得點。</p>
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

      {/* 成為大使 */}
      <section className="py-16 bg-gradient-to-br from-brand-purple to-brand-purple-dark text-white">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <span className="journal-tab bg-white/20 text-white">AMBASSADOR</span>
          <h2 className="mt-4 text-4xl font-black">成為毛孩愛心大使</h2>
          <p className="mt-3 text-white/80 max-w-xl mx-auto">推薦好友加入毛孩護照，每成功 1 人即可獲得固定推薦點數，採單層分潤、無組織層級。</p>
          <div className="mt-10 grid sm:grid-cols-3 gap-6">
            {[
              { title: "推薦註冊", desc: "好友完成註冊", reward: "+50 點" },
              { title: "完成建檔", desc: "好友建立寵物檔案", reward: "+50 點" },
              { title: "完成首任務", desc: "好友完成第一個任務", reward: "+100 點" },
            ].map((item, i) => (
              <div key={item.title} className="bg-white/10 backdrop-blur rounded-2xl p-6 text-center journal-enter" style={{ animationDelay: `${i * 80}ms` }}>
                <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-xs font-bold">{item.title}</span>
                <p className="mt-3 text-sm text-white/70">{item.desc}</p>
                <p className="mt-2 text-sm font-bold text-white">{item.reward}</p>
              </div>
            ))}
          </div>
          <button
            onClick={() => navigate("/ambassador")}
            className="mt-10 h-13 px-10 rounded-full bg-white text-brand-purple font-bold shadow-xl active:scale-[0.97] transition-transform inline-flex items-center gap-2"
          >
            成為大使 <ArrowRight size={18} />
          </button>
        </div>
      </section>

      {/* 合作夥伴 */}
      <section className="py-16 bg-white/50">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <span className="journal-tab">PARTNERS</span>
          <h2 className="mt-4 text-3xl font-black gradient-title">合作夥伴</h2>
          <p className="mt-3 text-brand-sub">與優質寵物內容與課程平台合作，讓學習也能累積點數。</p>
          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {PARTNERS.map((p) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="paper-card p-6 flex items-center gap-4 text-left hover:shadow-lg transition-shadow active:scale-[0.98]"
              >
                <div className="w-12 h-12 rounded-2xl bg-brand-lilac flex items-center justify-center shrink-0">
                  {p.name.includes("學院") ? <GraduationCap size={22} className="text-brand-purple" /> : <BookOpen size={22} className="text-brand-purple" />}
                </div>
                <div>
                  <p className="font-black text-brand-ink">{p.name}</p>
                  <p className="text-xs text-brand-sub mt-0.5">{p.desc}</p>
                </div>
                <ArrowRight size={16} className="ml-auto text-brand-purple shrink-0" />
              </a>
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
          <div className="flex items-center gap-6 text-xs font-bold text-brand-sub">
            <button onClick={() => navigate("/pro")} className="hover:text-brand-purple transition-colors">寵業模式</button>
          </div>
          <p className="text-xs text-brand-sub">© 2026 毛孩護照 Pet Passport. 僅供產品演示。</p>
        </div>
      </footer>
    </div>
  );
}
