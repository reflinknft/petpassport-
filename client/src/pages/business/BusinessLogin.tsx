import { useState } from "react";
import { useLocation } from "wouter";
import { Building2, Lock, Mail } from "lucide-react";
import BrandIcon from "@/components/BrandIcon";
import { toast } from "sonner";

/** 企業登入 */
export default function BusinessLogin() {
  const [, navigate] = useLocation();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    if (!email) {
      toast.error("請輸入 Email");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/business/dashboard");
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-brand-cream flex flex-col items-center justify-center px-5">
      <div className="w-full max-w-md">
        <div className="text-center">
          <BrandIcon className="w-16 h-16 mx-auto" />
          <h1 className="mt-4 text-2xl font-black text-brand-ink">企業合作登入</h1>
          <p className="mt-2 text-sm text-muted-foreground">品牌、門店、醫院與活動主辦方專用</p>
        </div>
        <div className="mt-8 paper-card p-6">
          <div className="space-y-4">
            <div>
              <label className="text-xs font-bold text-brand-ink">企業 Email</label>
              <div className="mt-1.5 relative">
                <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full h-12 pl-11 pr-4 rounded-2xl bg-white border border-border text-sm outline-none focus:border-brand-purple"
                />
              </div>
            </div>
            <button
              onClick={handleLogin}
              disabled={loading}
              className="w-full h-12 rounded-2xl bg-brand-purple text-white font-bold shadow-lg shadow-brand-purple/30 active:scale-[0.97] transition-transform disabled:opacity-50 flex items-center justify-center gap-2"
            >
              <Lock size={16} /> {loading ? "發送驗證碼中..." : "發送登入驗證碼"}
            </button>
          </div>
          <div className="mt-6 pt-6 border-t border-border/60 text-center">
            <p className="text-xs text-muted-foreground">還沒有企業帳號？</p>
            <button onClick={() => navigate("/business/onboarding")} className="mt-2 text-sm font-bold text-brand-purple active:scale-95">
              申請企業進駐
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
