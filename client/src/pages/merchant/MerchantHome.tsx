import { useLocation } from "wouter";
import { ChevronRight, Coins, FileText, Headset, QrCode, Store } from "lucide-react";
import BrandIcon from "@/components/BrandIcon";

/** 商家工作台 */
export default function MerchantHome() {
  const [, navigate] = useLocation();

  const stats = [
    { label: "今日核銷", value: "12", icon: QrCode },
    { label: "今日發點", value: "340", icon: Coins },
    { label: "異常", value: "0", icon: FileText },
  ];

  const menu = [
    { icon: QrCode, label: "掃碼核銷", desc: "掃描顧客 QR 碼", path: "/merchant/scan" },
    { icon: Coins, label: "消費發點", desc: "手動輸入消費金額", path: "/merchant/points/issue" },
    { icon: FileText, label: "核銷紀錄", desc: "查看今日與歷史紀錄", path: "/merchant/redemptions" },
    { icon: Headset, label: "異常申訴", desc: "提交證明與客服回覆", path: "/merchant/support" },
  ];

  return (
    <div className="min-h-screen bg-brand-cream">
      <header className="sticky top-0 z-50 bg-brand-cream/90 backdrop-blur border-b border-border/60">
        <div className="max-w-6xl mx-auto px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <BrandIcon className="w-8 h-8" />
            <span className="font-black text-lg text-brand-ink">毛孩護照商家版</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-brand-purple flex items-center justify-center text-white text-sm font-bold">店</div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-8 py-8">
        <h1 className="text-2xl font-black text-brand-ink">商家工作台</h1>
        <p className="mt-1 text-sm text-muted-foreground">毛起來洗護沙龍 · 台北信義店</p>

        {/* 今日數據 */}
        <div className="mt-6 grid grid-cols-3 gap-4">
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
