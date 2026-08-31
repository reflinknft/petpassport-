import { useState } from "react";
import { useLocation } from "wouter";
import { Headset, Send } from "lucide-react";
import BrandIcon from "@/components/BrandIcon";
import { toast } from "sonner";

/** 異常申訴 */
export default function MerchantSupport() {
  const [, navigate] = useLocation();
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    if (!message) {
      toast.error("請描述異常情況");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("申訴已送出，客服將於 24 小時內回覆");
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
        <h1 className="text-2xl font-black text-brand-ink">異常申訴</h1>
        <p className="mt-1 text-sm text-muted-foreground">核銷異常、點數問題或其他營運困難</p>

        <div className="mt-8 paper-card p-6">
          <div className="space-y-4">
            <div>
              <label className="text-xs font-bold text-brand-ink">問題類型</label>
              <select className="mt-1.5 w-full h-12 px-4 rounded-2xl bg-white border border-border text-sm outline-none focus:border-brand-purple">
                <option>核銷異常</option>
                <option>點數發放問題</option>
                <option>系統操作問題</option>
                <option>其他</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-bold text-brand-ink">問題描述</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="請詳細描述異常情況，包含時間、顧客資訊與錯誤訊息"
                rows={5}
                className="mt-1.5 w-full px-4 py-3 rounded-2xl bg-white border border-border text-sm outline-none focus:border-brand-purple resize-none"
              />
            </div>
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full h-12 rounded-2xl bg-brand-purple text-white font-bold shadow-lg shadow-brand-purple/30 active:scale-[0.97] transition-transform disabled:opacity-50 flex items-center justify-center gap-2"
            >
              <Send size={16} /> {loading ? "送出中..." : "送出申訴"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
