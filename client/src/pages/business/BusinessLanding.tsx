import { useLocation } from "wouter";
import { ArrowRight, BarChart3, Building2, Coins, Gift, ShieldCheck, Store, Target, Users } from "lucide-react";
import BrandIcon from "@/components/BrandIcon";

/** B2B2C 品牌合作分頁 */
export default function BusinessLanding() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-brand-cream text-brand-ink">
      {/* 頂部導覽 */}
      <header className="sticky top-0 z-50 bg-brand-cream/90 backdrop-blur border-b border-border/60">
        <div className="max-w-6xl mx-auto px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <BrandIcon className="w-8 h-8" />
            <span className="font-black text-lg text-brand-ink">毛孩護照</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-bold text-brand-sub">
            <a href="#solutions" className="hover:text-brand-purple transition-colors">企業方案</a>
            <a href="#cases" className="hover:text-brand-purple transition-colors">品牌成效</a>
            <a href="#process" className="hover:text-brand-purple transition-colors">合作流程</a>
          </nav>
          <div className="flex items-center gap-3">
            <button onClick={() => navigate("/")} className="h-10 px-5 rounded-full border-2 border-brand-purple/20 font-bold text-brand-purple-dark text-sm active:scale-[0.97] transition-transform">
              返回官網
            </button>
            <button onClick={() => navigate("/business/login")} className="h-10 px-5 rounded-full bg-brand-purple text-white font-bold text-sm shadow-lg shadow-brand-purple/30 active:scale-[0.97] transition-transform">
              企業登入
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 glow-bg" />
        <div className="relative max-w-4xl mx-auto px-8 pt-20 pb-16 text-center">
          <span className="journal-tab journal-enter">B2B2C 寵物產業會員營運平台</span>
          <h1 className="mt-5 text-[56px] leading-[1.08] font-black gradient-title journal-enter journal-enter-1">
            讓品牌精準觸達，<br />讓飼主樂於互動
          </h1>
          <p className="mt-5 text-lg text-brand-sub leading-relaxed max-w-xl mx-auto journal-enter journal-enter-2">
            毛孩護照以毛孩數位身份為資料基礎，協助寵物品牌、門店、醫院完成精準觸達、任務互動、派樣、到店、核銷及再行銷。
          </p>
          <div className="mt-8 flex justify-center gap-4 journal-enter journal-enter-3">
            <button
              onClick={() => navigate("/business/login")}
              className="h-13 px-8 rounded-full bg-brand-purple text-white font-bold shadow-xl shadow-brand-purple/35 active:scale-[0.97] transition-transform flex items-center gap-2"
            >
              品牌／商家預約合作 <ArrowRight size={18} />
            </button>
            <button onClick={() => navigate("/welcome")} className="h-13 px-8 rounded-full border-2 border-brand-purple/20 font-bold text-brand-purple-dark flex items-center active:scale-[0.97] transition-transform">
              毛孩家長免費建立護照
            </button>
          </div>
        </div>
      </section>

      {/* 品牌成效 Dashboard 示意 */}
      <section id="cases" className="py-16 bg-white/50">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center">
            <span className="journal-tab">品牌成效</span>
            <h2 className="mt-4 text-4xl font-black text-brand-ink">即時掌握活動成效</h2>
            <p className="mt-3 text-brand-sub max-w-xl mx-auto">從曝光、參加、驗證到核銷，每一筆資料都可追溯、可稽核。</p>
          </div>
          <div className="mt-10 paper-card p-8">
            <div className="grid grid-cols-4 gap-6">
              {[
                { label: "曝光", value: "12,480", change: "+12%" },
                { label: "參加", value: "3,240", change: "+8%" },
                { label: "驗證通過", value: "2,890", change: "+15%" },
                { label: "核銷", value: "1,240", change: "+22%" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-sm text-muted-foreground">{s.label}</p>
                  <p className="mt-1 text-2xl font-black text-brand-ink tabular">{s.value}</p>
                  <p className="text-xs text-brand-mint font-bold">{s.change}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 h-48 rounded-2xl bg-brand-lilac/50 flex items-center justify-center">
              <BarChart3 size={48} className="text-brand-purple/40" />
            </div>
          </div>
        </div>
      </section>

      {/* 品牌合作好處 */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center">
            <span className="journal-tab">WHY US</span>
            <h2 className="mt-4 text-4xl font-black text-brand-ink">品牌合作好處</h2>
            <p className="mt-3 text-brand-sub max-w-xl mx-auto">不只曝光，更是可衡量、可追蹤、可再行銷的會員營運。</p>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              { icon: Target, title: "精準觸達", desc: "依品種、年齡、地區、需求標籤建立受眾，只讓對的飼主看到對的活動。" },
              { icon: BarChart3, title: "成效可衡量", desc: "曝光、參加、驗證、核銷、成交全漏斗追蹤，CPA 一目了然。" },
              { icon: Users, title: "會員資產", desc: "活動結束後，會員持續互動，形成品牌自有流量池。" },
              { icon: Coins, title: "點數經濟", desc: "點數作為互動媒介，降低現金補貼成本，提升參與意願。" },
              { icon: Store, title: "線下導流", desc: "線上領券、線下核銷，直接帶動門店來客與業績。" },
              { icon: ShieldCheck, title: "合規安全", desc: "分層同意、個資最小揭露、全操作稽核，符合法規要求。" },
            ].map((b, i) => (
              <div key={b.title} className={`paper-card p-6 journal-enter journal-enter-${i + 1}`}>
                <div className="w-12 h-12 rounded-full bg-brand-lilac flex items-center justify-center">
                  <b.icon size={22} className="text-brand-purple" />
                </div>
                <p className="mt-3 font-black text-brand-ink">{b.title}</p>
                <p className="mt-2 text-sm text-brand-sub">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 商務合作模式 */}
      <section className="py-16 bg-white/50">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center">
            <span className="journal-tab">BUSINESS MODEL</span>
            <h2 className="mt-4 text-4xl font-black text-brand-ink">商務合作模式</h2>
            <p className="mt-3 text-brand-sub max-w-xl mx-auto">依據品牌規模與目標，提供彈性計費方式。</p>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              { name: "品牌任務", price: "按有效完成計費", desc: "問卷、試用、影片觀看", features: ["精準受眾投放", "任務驗證與審核", "點數預算管理", "成效報表"], cta: "了解詳情" },
              { name: "精準派樣", price: "專案報價", desc: "樣品申請、資格審核、履約與回饋", features: ["樣品庫存管理", "資格自動審核", "物流追蹤", "回購追蹤"], cta: "預約洽談", primary: true },
              { name: "門店營運", price: "月費 + 核銷抽成", desc: "核銷、發點、會員標籤與報表", features: ["多門店管理", "店員權限", "核銷後台", "會員洞察"], cta: "了解詳情" },
            ].map((p, i) => (
              <div key={p.name} className={`paper-card p-6 text-center journal-enter journal-enter-${i + 1} ${p.primary ? "ring-2 ring-brand-purple shadow-xl shadow-brand-purple/20" : ""}`}>
                {p.primary && <span className="inline-block px-3 py-1 rounded-full bg-brand-purple text-white text-[10px] font-bold mb-3">最受歡迎</span>}
                <h3 className="font-black text-brand-ink text-lg">{p.name}</h3>
                <p className="mt-1 text-xl font-black text-brand-purple">{p.price}</p>
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

      {/* 後台功能示意 */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center">
            <span className="journal-tab">BACKEND</span>
            <h2 className="mt-4 text-4xl font-black text-brand-ink">後台功能示意</h2>
            <p className="mt-3 text-brand-sub max-w-xl mx-auto">企業後台、商家後台與平台 Admin，三位一體的營運中樞。</p>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              { title: "企業後台", desc: "活動建立、受眾管理、任務驗證、派樣、報表、帳務", path: "/business/login" },
              { title: "商家後台", desc: "掃碼核銷、消費發點、核銷紀錄、異常申訴", path: "/merchant/login" },
              { title: "平台 Admin", desc: "企業審核、活動審核、風控、點數、票券、客服、結算", path: "/admin/login" },
            ].map((b, i) => (
              <button key={b.title} onClick={() => navigate(b.path)} className={`paper-card p-6 text-left journal-enter journal-enter-${i + 1} active:scale-[0.98] transition-transform`}>
                <div className="w-12 h-12 rounded-full bg-brand-lilac flex items-center justify-center">
                  <Building2 size={22} className="text-brand-purple" />
                </div>
                <p className="mt-3 font-black text-brand-ink">{b.title}</p>
                <p className="mt-2 text-sm text-brand-sub">{b.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-brand-purple">
                  進入後台 <ArrowRight size={14} />
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 企業方案 */}
      <section id="solutions" className="py-16">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center">
            <span className="journal-tab">企業方案</span>
            <h2 className="mt-4 text-4xl font-black text-brand-ink">四類企業方案</h2>
            <p className="mt-3 text-brand-sub max-w-xl mx-auto">依據品牌、門店、醫院與活動主辦方的需求，提供彈性組合。</p>
          </div>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Target, title: "品牌任務", desc: "問卷、試用、影片觀看，精準觸達目標飼主" },
              { icon: Gift, title: "精準派樣", desc: "樣品申請、資格審核、履約與回饋追蹤" },
              { icon: Store, title: "門店營運", desc: "核銷、發點、會員標籤與門店報表" },
              { icon: Building2, title: "活動數位化", desc: "線上報名、QR 簽到、成效歸因" },
            ].map((s, i) => (
              <div key={s.title} className={`paper-card p-6 text-center journal-enter journal-enter-${i + 1}`}>
                <div className="w-12 h-12 mx-auto rounded-full bg-brand-lilac flex items-center justify-center">
                  <s.icon size={22} className="text-brand-purple" />
                </div>
                <p className="mt-3 font-black text-brand-ink">{s.title}</p>
                <p className="mt-2 text-sm text-brand-sub">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 合作流程 */}
      <section id="process" className="py-16 bg-white/50">
        <div className="max-w-4xl mx-auto px-8">
          <div className="text-center">
            <span className="journal-tab">合作流程</span>
            <h2 className="mt-4 text-4xl font-black text-brand-ink">三步驟開始合作</h2>
          </div>
          <div className="mt-10 space-y-6">
            {[
              { step: "01", title: "申請企業進駐", desc: "填寫公司資料、統編、聯絡人與產業類別" },
              { step: "02", title: "建立品牌與活動", desc: "設定品牌資料、建立活動、配置預算與受眾" },
              { step: "03", title: "上線與成效追蹤", desc: "活動上線、即時 Dashboard、報表匯出與結算" },
            ].map((s, i) => (
              <div key={s.step} className={`paper-card p-6 flex items-start gap-5 journal-enter journal-enter-${i + 1}`}>
                <span className="text-3xl font-black text-brand-coral tabular">{s.step}</span>
                <div>
                  <p className="font-black text-brand-ink">{s.title}</p>
                  <p className="mt-1 text-sm text-brand-sub">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <div className="rounded-3xl bg-brand-purple-dark text-white p-10 shadow-xl shadow-brand-purple-dark/25">
            <h2 className="text-3xl font-black">準備好開始了嗎？</h2>
            <p className="mt-3 text-white/80 max-w-xl mx-auto">加入毛孩護照，讓您的品牌與門店精準觸達每一位毛孩家長。</p>
            <button
              onClick={() => navigate("/business/login")}
              className="mt-8 h-13 px-10 rounded-full bg-white text-brand-purple font-bold shadow-xl active:scale-[0.97] transition-transform inline-flex items-center gap-2"
            >
              品牌／商家預約合作 <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-border/60">
        <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <BrandIcon className="w-8 h-8" />
            <span className="font-black text-brand-ink">毛孩護照</span>
          </div>
          <p className="text-xs text-muted-foreground">© 2026 毛孩護照 Pet Passport. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
