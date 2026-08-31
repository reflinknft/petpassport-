import { useState } from "react";
import { useLocation } from "wouter";
import { Coins, QrCode } from "lucide-react";
import BrandIcon from "@/components/BrandIcon";
import { toast } from "sonner";

/** 消費發點 */
export default function MerchantIssuePoints() {
  const [, navigate] = useLocation();
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);

  const handleIssue = () => {
    if (!amount) {
      toast.error("請輸入消費金額");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success(`已發放 ${Math.floor(Number(amount) / 10)} 點`);
      navigate("/merchant/home");
    }, 1200);
  };

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

      <div className="max-w-md mx-auto px-8 py-8">
        <h1 className="text-2xl font-black text-brand-ink">消費發點</h1>
        <p className="mt-1 text-sm text-muted-foreground">掃描顧客會員碼後，輸入消費金額發放點數</p>

        <div className="mt-8 paper-card p-6">
          <div className="text-center">
            <div className="w-32 h-32 mx-auto rounded-3xl bg-brand-lilac flex items-center justify-center">
              <QrCode size={48} className="text-brand-purple" />
            </div>
            <p className="mt-4 text-sm text-muted-foreground">請先掃描顧客會員 QR 碼</p>
            <button className="mt-4 h-10 px-6 rounded-full bg-brand-purple text-white text-sm font-bold active:scale-95">
              掃描會員碼
            </button>
          </div>
          <div className="mt-6 pt-6 border-t border-border/60">
            <label className="text-xs font-bold text-brand-ink">消費金額（NT$）</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="例如：800"
              className="mt-1.5 w-full h-12 px-4 rounded-2xl bg-white border border-border text-sm outline-none focus:border-brand-purple"
            />
            <p className="mt-2 text-xs text-muted-foreground">每 NT$10 消費發放 1 點，本次預計發放 {amount ? Math.floor(Number(amount) / 10) : 0} 點</p>
            <button
              onClick={handleIssue}
              disabled={loading}
              className="mt-4 w-full h-12 rounded-2xl bg-brand-purple text-white font-bold shadow-lg shadow-brand-purple/30 active:scale-[0.97] transition-transform disabled:opacity-50 flex items-center justify-center gap-2"
            >
              <Coins size={16} /> {loading ? "發放中..." : "確認發放點數"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
