import { useState } from "react";
import { useLocation } from "wouter";
import { Lock, Store, User } from "lucide-react";
import BrandIcon from "@/components/BrandIcon";
import { toast } from "sonner";

/** 商家登入 */
export default function MerchantLogin() {
  const [, navigate] = useLocation();
  const [account, setAccount] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    if (!account) {
      toast.error("請輸入店員帳號");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/merchant/home");
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-brand-cream flex flex-col items-center justify-center px-5">
      <div className="w-full max-w-md">
        <div className="text-center">
          <BrandIcon className="w-16 h-16 mx-auto" />
          <h1 className="mt-4 text-2xl font-black text-brand-ink">商家工作台登入</h1>
          <p className="mt-2 text-sm text-muted-foreground">店員與店長專用</p>
        </div>
        <div className="mt-8 paper-card p-6">
          <div className="space-y-4">
            <div>
              <label className="text-xs font-bold text-brand-ink">店員帳號</label>
              <div className="mt-1.5 relative">
                <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  value={account}
                  onChange={(e) => setAccount(e.target.value)}
                  placeholder="輸入店員帳號"
                  className="w-full h-12 pl-11 pr-4 rounded-2xl bg-white border border-border text-sm outline-none focus:border-brand-purple"
                />
              </div>
            </div>
            <button
              onClick={handleLogin}
              disabled={loading}
              className="w-full h-12 rounded-2xl bg-brand-purple text-white font-bold shadow-lg shadow-brand-purple/30 active:scale-[0.97] transition-transform disabled:opacity-50 flex items-center justify-center gap-2"
            >
              <Lock size={16} /> {loading ? "驗證中..." : "登入工作台"}
            </button>
          </div>
        </div>
        <div className="mt-6 text-center">
          <button onClick={() => navigate("/")} className="text-xs text-muted-foreground hover:text-brand-purple transition-colors">
            返回官網首頁
          </button>
        </div>
      </div>
    </div>
  );
}
