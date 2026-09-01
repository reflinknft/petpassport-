import { useLocation } from "wouter";
import BrandIcon from "@/components/BrandIcon";
import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Coins,
  QrCode,
  ShieldCheck,
  Store,
  Users,
} from "lucide-react";

/**
 * 寵業模式入口：將品牌、商家與平台營運三種 2B 身分集中呈現。
 * 視覺延續深綠／橘黃品牌系統，資訊層級以大字與清楚 CTA 為主。
 */
export default function ProLanding() {
  const [, navigate] = useLocation();

  const portals = [
    {
      icon: Building2,
      eyebrow: "BRAND",
      title: "品牌與企業合作",
      description: "以任務、派樣與優惠券接觸精準飼主，從曝光到核銷都有可追溯成效。",
      benefits: ["建立品牌任務與活動", "受眾分群與精準派樣", "任務驗證與成效報表"],
      primary: "查看品牌合作",
      primaryPath: "/business",
      secondary: "企業後台登入",
      secondaryPath: "/business/login",
    },
    {
      icon: Store,
      eyebrow: "MERCHANT",
      title: "寵物門店合作",
      description: "適合寵物店、動物醫院、洗護美容與照護服務，快速完成會員導流、發點與核銷。",
      benefits: ["會員 QR 掃碼核銷", "消費發點與紀錄查詢", "門店活動與客服支援"],
      primary: "商家登入",
      primaryPath: "/merchant/login",
      secondary: "預覽商家工作台",
      secondaryPath: "/merchant/home",
    },
    {
      icon: ShieldCheck,
      eyebrow: "OPERATION",
      title: "平台營運管理",
      description: "管理企業、活動、會員、點數、票券、風控、客服與結算，確保平台運作可稽核。",
      benefits: ["活動與企業審核", "點數票券及風控治理", "客服、結算與稽核紀錄"],
      primary: "平台營運登入",
      primaryPath: "/admin/login",
      secondary: "預覽營運總覽",
      secondaryPath: "/admin/dashboard",
    },
  ];

  return (
    <div className="min-h-screen bg-brand-cream text-brand-ink">
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 glow-bg" />
        <div className="relative mx-auto max-w-6xl px-6 md:px-8">
          <button onClick={() => navigate("/")} className="flex items-center gap-3 transition-transform active:scale-95">
            <BrandIcon className="h-14 w-14" />
            <div className="text-left">
              <p className="text-lg font-black">毛孩護照</p>
              <p className="text-xs font-bold tracking-widest text-brand-purple">PET PASSPORT</p>
            </div>
          </button>

          <div className="mt-14 max-w-3xl">
            <span className="journal-tab">PET INDUSTRY MODE</span>
            <h1 className="mt-5 text-4xl font-black leading-tight md:text-6xl">一個入口，串起品牌、門店與平台營運</h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-brand-sub">
              寵業模式專為企業與寵物專業工作者打造。選擇您的身分，進入對應的合作介紹或管理後台。
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {portals.map(({ icon: Icon, ...portal }, index) => (
              <article key={portal.title} className={`paper-card flex flex-col p-7 journal-enter journal-enter-${index + 1}`}>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-lilac text-brand-purple">
                    <Icon size={26} />
                  </div>
                  <span className="rounded-full bg-brand-coral/15 px-3 py-1 text-xs font-black text-brand-coral">{portal.eyebrow}</span>
                </div>
                <h2 className="mt-6 text-2xl font-black">{portal.title}</h2>
                <p className="mt-3 min-h-20 text-sm leading-relaxed text-brand-sub">{portal.description}</p>
                <div className="mt-5 space-y-3">
                  {portal.benefits.map((benefit) => (
                    <p key={benefit} className="flex items-center gap-2 text-sm font-bold">
                      <CheckCircle2 size={17} className="shrink-0 text-brand-mint" /> {benefit}
                    </p>
                  ))}
                </div>
                <div className="mt-8 space-y-3">
                  <button onClick={() => navigate(portal.primaryPath)} className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-brand-purple px-5 font-bold text-white shadow-lg shadow-brand-purple/20 transition-transform active:scale-[0.97]">
                    {portal.primary} <ArrowRight size={17} />
                  </button>
                  <button onClick={() => navigate(portal.secondaryPath)} className="h-11 w-full rounded-full border-2 border-brand-purple/15 font-bold text-brand-purple transition-transform active:scale-[0.97]">
                    {portal.secondary}
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white/55 py-18">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <div className="text-center">
            <span className="journal-tab">MERCHANT WORKFLOW</span>
            <h2 className="mt-4 text-3xl font-black md:text-4xl">門店從加入到產生回訪，只需四步</h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-4">
            {[
              { icon: BriefcaseBusiness, title: "申請合作", text: "設定門店、服務項目與操作人員。" },
              { icon: QrCode, title: "掃碼核銷", text: "掃描會員碼或票券，完成服務核銷。" },
              { icon: Coins, title: "消費發點", text: "依活動或消費金額發放毛孩點。" },
              { icon: BarChart3, title: "查看成效", text: "追蹤新客、回訪、發點與核銷紀錄。" },
            ].map(({ icon: Icon, title, text }, index) => (
              <div key={title} className="paper-card p-6">
                <span className="text-sm font-black text-brand-coral">0{index + 1}</span>
                <Icon className="mt-4 text-brand-purple" size={25} />
                <h3 className="mt-4 text-lg font-black">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-sub">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-18">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 md:grid-cols-3 md:px-8">
          {[
            { icon: Users, value: "精準會員", label: "依毛孩與照護需求建立受眾分群" },
            { icon: ClipboardCheck, value: "可驗證任務", label: "任務提交、審核與發點流程可追溯" },
            { icon: BarChart3, value: "成效可量化", label: "從參與、發點到核銷形成完整漏斗" },
          ].map(({ icon: Icon, value, label }) => (
            <div key={value} className="paper-card p-7 text-center">
              <Icon className="mx-auto text-brand-purple" size={28} />
              <p className="mt-4 text-2xl font-black">{value}</p>
              <p className="mt-2 text-sm text-brand-sub">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-border/60 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-brand-sub md:flex-row md:px-8">
          <p>毛孩護照 · 寵業模式</p>
          <button onClick={() => navigate("/")} className="font-bold text-brand-purple">返回飼主版首頁</button>
        </div>
      </footer>
    </div>
  );
}
