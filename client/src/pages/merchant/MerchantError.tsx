import { useLocation } from "wouter";
import { Home, XCircle } from "lucide-react";

/** B04 核銷異常 */
export default function MerchantError() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-full bg-brand-cream flex flex-col items-center justify-center px-5">
      <div className="w-full max-w-sm text-center">
        <div className="w-24 h-24 mx-auto rounded-full bg-brand-brick/15 flex items-center justify-center">
          <XCircle size={48} className="text-brand-brick" />
        </div>
        <h1 className="mt-6 text-2xl font-black text-brand-ink">核銷失敗</h1>
        <p className="mt-2 text-sm text-muted-foreground">票券已過期、已使用或核銷碼錯誤，請重新確認</p>
        <div className="mt-8 paper-card p-4 text-left">
          <p className="text-xs font-bold text-brand-ink">可能原因</p>
          <ul className="mt-2 space-y-1 text-xs text-muted-foreground">
            <li>• 票券已超過有效期限</li>
            <li>• 票券已被核銷過</li>
            <li>• 核銷碼輸入錯誤</li>
            <li>• 網路連線異常</li>
          </ul>
        </div>
        <button
          onClick={() => navigate("/merchant/scan")}
          className="mt-8 w-full h-12 rounded-full bg-brand-purple text-white font-bold shadow-lg shadow-brand-purple/30 active:scale-[0.97] transition-transform flex items-center justify-center gap-2"
        >
          <Home size={18} /> 重新掃碼
        </button>
      </div>
    </div>
  );
}
