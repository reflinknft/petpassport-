import { useState } from "react";
import { useLocation } from "wouter";
import { Camera, CheckCircle2, QrCode, XCircle } from "lucide-react";
import TopBar from "@/components/TopBar";
import { toast } from "sonner";

/** B01 商家掃碼 */
export default function MerchantScan() {
  const [, navigate] = useLocation();
  const [scanning, setScanning] = useState(false);

  const simulateScan = () => {
    setScanning(true);
    setTimeout(() => {
      setScanning(false);
      navigate("/merchant/confirm");
    }, 1500);
  };

  return (
    <div className="min-h-full bg-brand-cream flex flex-col">
      <TopBar title="商家核銷" showBell />
      <div className="flex-1 flex flex-col items-center justify-center px-5 pb-6">
        <div className="w-full max-w-sm">
          <div className="paper-card p-8 text-center">
            <div className="w-48 h-48 mx-auto rounded-3xl bg-brand-lilac flex items-center justify-center relative overflow-hidden">
              {scanning ? (
                <div className="absolute inset-0 bg-brand-purple/20 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full border-4 border-brand-purple border-t-transparent animate-spin" />
                </div>
              ) : (
                <QrCode size={64} className="text-brand-purple" />
              )}
            </div>
            <h2 className="mt-6 font-black text-brand-ink text-lg">掃描顧客 QR 碼</h2>
            <p className="mt-2 text-sm text-muted-foreground">請掃描顧客出示的會員 QR 碼或票券 QR 碼</p>
            <button
              onClick={simulateScan}
              disabled={scanning}
              className="mt-6 w-full h-12 rounded-full bg-brand-purple text-white font-bold shadow-lg shadow-brand-purple/30 active:scale-[0.97] transition-transform disabled:opacity-50 flex items-center justify-center gap-2"
            >
              <Camera size={18} /> {scanning ? "掃描中..." : "開始掃描"}
            </button>
          </div>
          <div className="mt-4 paper-card p-4">
            <p className="text-xs text-muted-foreground text-center">或輸入核銷碼</p>
            <div className="mt-2 flex gap-2">
              <input placeholder="輸入 8 位核銷碼" className="flex-1 h-10 px-4 rounded-full bg-white border border-border text-sm outline-none focus:border-brand-purple" />
              <button onClick={() => navigate("/merchant/confirm")} className="h-10 px-4 rounded-full bg-brand-purple text-white text-sm font-bold active:scale-95">確認</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
