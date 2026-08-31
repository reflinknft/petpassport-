import { useState } from "react";
import BrandIcon from "@/components/BrandIcon";
import { MessageCircle, Smartphone } from "lucide-react";
import { useLocation } from "wouter";
import TopBar from "@/components/TopBar";
import { useDemo } from "@/contexts/DemoContext";
import { ASSETS } from "@/lib/data";

/** P02 登入／註冊 */
export default function Login() {
  const [, navigate] = useLocation();
  const { login } = useDemo();
  const [agreed, setAgreed] = useState(false);
  const [phone, setPhone] = useState("");

  const handleLogin = () => {
    login();
    navigate("/guide");
  };

  return (
    <div className="min-h-full bg-brand-cream flex flex-col">
      <TopBar showBack title="登入 / 註冊" />
      <div className="flex-1 px-6 pt-8 pb-8 flex flex-col">
        <BrandIcon className="w-16 h-16 journal-enter" />
        <h1 className="mt-4 text-2xl font-black text-brand-brown journal-enter journal-enter-1">
          建立毛孩的<br />第一本點數護照
        </h1>
        <p className="mt-2 text-sm text-muted-foreground journal-enter journal-enter-2">
          登入即可領取 100 點新手禮，並開始累積照護回饋。
        </p>

        <div className="mt-8 space-y-3 journal-enter journal-enter-3">
          <button
            onClick={handleLogin}
            disabled={!agreed}
            className="w-full h-12 rounded-2xl bg-[#06C755] text-white font-bold flex items-center justify-center gap-2 shadow-lg active:scale-[0.97] transition-all disabled:opacity-40 disabled:shadow-none"
          >
            <MessageCircle size={18} /> 使用 LINE 登入
          </button>
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span className="flex-1 h-px bg-border" /> 或 <span className="flex-1 h-px bg-border" />
          </div>
          <div className="paper-card p-4">
            <label className="text-xs font-bold text-brand-brown">手機號碼</label>
            <div className="mt-2 flex gap-2">
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="0912 345 678"
                inputMode="tel"
                className="flex-1 h-11 px-4 rounded-xl bg-brand-apricot/60 text-sm font-medium outline-none focus:ring-2 ring-brand-orange/40 placeholder:text-muted-foreground/60"
              />
              <button
                onClick={handleLogin}
                disabled={!agreed || phone.length < 9}
                className="h-11 px-4 rounded-xl bg-brand-brown text-white text-sm font-bold flex items-center gap-1.5 active:scale-95 transition-all disabled:opacity-40"
              >
                <Smartphone size={15} /> 驗證
              </button>
            </div>
            <p className="mt-2 text-[10px] text-muted-foreground">DEMO 環境不發送簡訊，輸入任意號碼即可體驗。</p>
          </div>
        </div>

        <label className="mt-6 flex items-start gap-2.5 cursor-pointer journal-enter journal-enter-4">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="mt-0.5 w-4.5 h-4.5 rounded accent-[#F26B1D]"
          />
          <span className="text-xs text-muted-foreground leading-relaxed">
            我已閱讀並同意<span className="text-brand-orange font-bold">服務條款</span>與<span className="text-brand-orange font-bold">隱私權政策</span>，並了解 DEMO 資料僅供展示。
          </span>
        </label>
      </div>
    </div>
  );
}
