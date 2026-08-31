import { useLocation } from "wouter";
import { CheckCircle2, XCircle } from "lucide-react";
import TopBar from "@/components/TopBar";

/** B02 核銷確認 */
export default function MerchantConfirm() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-full bg-brand-cream flex flex-col">
      <TopBar title="確認核銷" showBell />
      <div className="flex-1 flex flex-col items-center justify-center px-5 pb-6">
        <div className="w-full max-w-sm">
          <div className="paper-card p-6">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-brand-lilac flex items-center justify-center">
                <CheckCircle2 size={32} className="text-brand-purple" />
              </div>
              <h2 className="mt-4 font-black text-brand-ink text-lg">確認核銷資訊</h2>
            </div>
            <div className="mt-6 space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">顧客</span>
                <span className="font-bold text-brand-ink">林小毛</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">票券</span>
                <span className="font-bold text-brand-ink">洗護折抵券 NT$200</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">核銷商家</span>
                <span className="font-bold text-brand-ink">毛起來洗護沙龍</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">核銷時間</span>
                <span className="font-bold text-brand-ink">2026/08/31 14:30</span>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-border/60">
              <p className="text-xs text-muted-foreground text-center">請確認顧客身份與票券資訊無誤後，點擊確認核銷</p>
            </div>
            <div className="mt-6 flex gap-3">
              <button
                onClick={() => navigate("/merchant/error")}
                className="flex-1 h-12 rounded-full border-2 border-brand-brick/20 text-brand-brick font-bold active:scale-[0.97] transition-transform flex items-center justify-center gap-2"
              >
                <XCircle size={18} /> 核銷失敗
              </button>
              <button
                onClick={() => navigate("/merchant/success")}
                className="flex-1 h-12 rounded-full bg-brand-purple text-white font-bold shadow-lg shadow-brand-purple/30 active:scale-[0.97] transition-transform flex items-center justify-center gap-2"
              >
                <CheckCircle2 size={18} /> 確認核銷
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
