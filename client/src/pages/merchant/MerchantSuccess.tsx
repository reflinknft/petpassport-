import { useLocation } from "wouter";
import { CheckCircle2, Home } from "lucide-react";

/** B03 核銷成功 */
export default function MerchantSuccess() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-full bg-brand-cream flex flex-col items-center justify-center px-5">
      <div className="w-full max-w-sm text-center">
        <div className="w-24 h-24 mx-auto rounded-full bg-brand-mint/15 flex items-center justify-center">
          <CheckCircle2 size={48} className="text-brand-mint" />
        </div>
        <h1 className="mt-6 text-2xl font-black text-brand-ink">核銷成功</h1>
        <p className="mt-2 text-sm text-muted-foreground">票券已順利核銷，顧客點數已同步更新</p>
        <div className="mt-8 paper-card p-4 text-left">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">核銷編號</span>
            <span className="font-mono font-bold text-brand-ink">RDM-20260831-001</span>
          </div>
          <div className="mt-2 flex justify-between text-sm">
            <span className="text-muted-foreground">核銷時間</span>
            <span className="font-bold text-brand-ink">2026/08/31 14:30</span>
          </div>
        </div>
        <button
          onClick={() => navigate("/merchant/scan")}
          className="mt-8 w-full h-12 rounded-full bg-brand-purple text-white font-bold shadow-lg shadow-brand-purple/30 active:scale-[0.97] transition-transform flex items-center justify-center gap-2"
        >
          <Home size={18} /> 返回掃碼
        </button>
      </div>
    </div>
  );
}
