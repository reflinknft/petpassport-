import { useLocation } from "wouter";
import { Building2, ChevronRight, Coins, FileText, Headset, ShieldCheck, Store, Users } from "lucide-react";
import BrandIcon from "@/components/BrandIcon";

/** 平台 Admin Dashboard */
export default function AdminDashboard() {
  const [, navigate] = useLocation();

  const stats = [
    { label: "待審核企業", value: "3", icon: Building2 },
    { label: "待審核活動", value: "5", icon: FileText },
    { label: "待處理客服", value: "2", icon: Headset },
    { label: "異常核銷", value: "0", icon: ShieldCheck },
  ];

  const menu = [
    { icon: Building2, label: "企業管理", desc: "審核、停權、合約", path: "/admin/organizations" },
    { icon: FileText, label: "活動審核", desc: "素材、受眾、獎勵、預算", path: "/admin/campaigns" },
    { icon: Users, label: "會員與毛孩", desc: "搜尋、狀態、Consent、封鎖", path: "/admin/members" },
    { icon: ShieldCheck, label: "任務風控", desc: "Submission、重複、異常裝置", path: "/admin/risk" },
    { icon: Coins, label: "點數管理", desc: "發行、鎖定、發放、到期、追回", path: "/admin/points" },
    { icon: Store, label: "票券與核銷", desc: "票券狀態、異常、取消／退款", path: "/admin/redemptions" },
    { icon: Headset, label: "客服", desc: "案件、SLA、補件、補償", path: "/admin/support" },
    { icon: FileText, label: "帳務結算", desc: "品牌預算、商家應付、平台收入", path: "/admin/settlement" },
  ];

  return (
    <div className="min-h-screen bg-brand-cream">
      <header className="sticky top-0 z-50 bg-brand-cream/90 backdrop-blur border-b border-border/60">
        <div className="max-w-6xl mx-auto px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <BrandIcon className="w-8 h-8" />
            <span className="font-black text-lg text-brand-ink">毛孩護照營運後台</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-brand-purple flex items-center justify-center text-white text-sm font-bold">管</div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-8 py-8">
        <h1 className="text-2xl font-black text-brand-ink">營運總覽</h1>

        {/* 待處理事項 */}
        <div className="mt-6 grid grid-cols-4 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="paper-card p-5 text-center">
              <div className="w-10 h-10 mx-auto rounded-xl bg-brand-lilac flex items-center justify-center">
                <s.icon size={18} className="text-brand-purple" />
              </div>
              <p className="mt-2 text-2xl font-black text-brand-ink tabular">{s.value}</p>
              <p className="text-xs text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>

        {/* 功能選單 */}
        <div className="mt-8 grid grid-cols-2 gap-4">
          {menu.map((m) => (
            <button key={m.label} onClick={() => navigate(m.path)} className="paper-card p-5 text-left active:scale-[0.98] transition-transform">
              <div className="w-12 h-12 rounded-xl bg-brand-lilac flex items-center justify-center">
                <m.icon size={22} className="text-brand-purple" />
              </div>
              <p className="mt-3 font-bold text-brand-ink">{m.label}</p>
              <p className="mt-1 text-xs text-muted-foreground">{m.desc}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
