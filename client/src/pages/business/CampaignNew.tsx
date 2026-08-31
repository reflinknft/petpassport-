import { useState } from "react";
import { useLocation } from "wouter";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import BrandIcon from "@/components/BrandIcon";
import { toast } from "sonner";

const STEPS = ["基本資料", "受眾設定", "任務與獎勵", "預算與期間", "確認送出"] as const;

/** 建立活動五步驟 */
export default function CampaignNew() {
  const [, navigate] = useLocation();
  const [step, setStep] = useState(0);

  const next = () => {
    if (step < STEPS.length - 1) setStep(step + 1);
    else {
      toast.success("活動已送出審核");
      navigate("/business/campaigns");
    }
  };

  const prev = () => {
    if (step > 0) setStep(step - 1);
  };

  return (
    <div className="min-h-screen bg-brand-cream">
      <header className="sticky top-0 z-50 bg-brand-cream/90 backdrop-blur border-b border-border/60">
        <div className="max-w-6xl mx-auto px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <BrandIcon className="w-8 h-8" />
            <span className="font-black text-lg text-brand-ink">毛孩護照企業版</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-bold text-brand-sub">
            <button onClick={() => navigate("/business/dashboard")} className="hover:text-brand-purple transition-colors">總覽</button>
            <button onClick={() => navigate("/business/campaigns")} className="text-brand-purple">活動</button>
            <button onClick={() => navigate("/business/audiences")} className="hover:text-brand-purple transition-colors">受眾</button>
            <button onClick={() => navigate("/business/reports")} className="hover:text-brand-purple transition-colors">報表</button>
            <button onClick={() => navigate("/business/settings")} className="hover:text-brand-purple transition-colors">設定</button>
          </nav>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-brand-purple flex items-center justify-center text-white text-sm font-bold">企</div>
          </div>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-8 py-8">
        <h1 className="text-2xl font-black text-brand-ink">建立活動</h1>

        {/* 步驟條 */}
        <div className="mt-6 flex items-center gap-2">
          {STEPS.map((s, i) => (
            <div key={s} className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                i < step ? "bg-brand-mint text-white" : i === step ? "bg-brand-purple text-white" : "bg-brand-lilac text-muted-foreground"
              }`}>
                {i < step ? <CheckCircle2 size={14} /> : i + 1}
              </div>
              <span className={`text-xs font-bold ${i === step ? "text-brand-ink" : "text-muted-foreground"}`}>{s}</span>
              {i < STEPS.length - 1 && <div className="w-8 h-0.5 bg-brand-lilac" />}
            </div>
          ))}
        </div>

        {/* 步驟內容 */}
        <div className="mt-8 paper-card p-6">
          {step === 0 && (
            <div className="space-y-4">
              <div>
                <label className="text-xs font-bold text-brand-ink">活動名稱</label>
                <input placeholder="例如：熟齡犬鮮食試吃活動" className="mt-1.5 w-full h-12 px-4 rounded-2xl bg-white border border-border text-sm outline-none focus:border-brand-purple" />
              </div>
              <div>
                <label className="text-xs font-bold text-brand-ink">活動說明</label>
                <textarea placeholder="描述活動目的與內容" rows={4} className="mt-1.5 w-full px-4 py-3 rounded-2xl bg-white border border-border text-sm outline-none focus:border-brand-purple resize-none" />
              </div>
            </div>
          )}
          {step === 1 && (
            <div className="space-y-4">
              <div>
                <label className="text-xs font-bold text-brand-ink">目標受眾</label>
                <select className="mt-1.5 w-full h-12 px-4 rounded-2xl bg-white border border-border text-sm outline-none focus:border-brand-purple">
                  <option>全部會員</option>
                  <option>熟齡犬飼主</option>
                  <option>貓咪飼主</option>
                  <option>新註冊會員</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-bold text-brand-ink">預估人數</label>
                <input placeholder="系統自動計算" disabled className="mt-1.5 w-full h-12 px-4 rounded-2xl bg-brand-lilac/50 border border-border text-sm outline-none" />
              </div>
            </div>
          )}
          {step === 2 && (
            <div className="space-y-4">
              <div>
                <label className="text-xs font-bold text-brand-ink">任務類型</label>
                <select className="mt-1.5 w-full h-12 px-4 rounded-2xl bg-white border border-border text-sm outline-none focus:border-brand-purple">
                  <option>內容閱讀</option>
                  <option>問卷填寫</option>
                  <option>到店消費</option>
                  <option>課程學習</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-bold text-brand-ink">完成獎勵（點數）</label>
                <input type="number" placeholder="例如：50" className="mt-1.5 w-full h-12 px-4 rounded-2xl bg-white border border-border text-sm outline-none focus:border-brand-purple" />
              </div>
            </div>
          )}
          {step === 3 && (
            <div className="space-y-4">
              <div>
                <label className="text-xs font-bold text-brand-ink">總預算（點數）</label>
                <input type="number" placeholder="例如：50,000" className="mt-1.5 w-full h-12 px-4 rounded-2xl bg-white border border-border text-sm outline-none focus:border-brand-purple" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-brand-ink">開始日期</label>
                  <input type="date" className="mt-1.5 w-full h-12 px-4 rounded-2xl bg-white border border-border text-sm outline-none focus:border-brand-purple" />
                </div>
                <div>
                  <label className="text-xs font-bold text-brand-ink">結束日期</label>
                  <input type="date" className="mt-1.5 w-full h-12 px-4 rounded-2xl bg-white border border-border text-sm outline-none focus:border-brand-purple" />
                </div>
              </div>
            </div>
          )}
          {step === 4 && (
            <div className="text-center py-8">
              <div className="w-16 h-16 mx-auto rounded-full bg-brand-mint/15 flex items-center justify-center">
                <CheckCircle2 size={32} className="text-brand-mint" />
              </div>
              <h3 className="mt-4 font-black text-brand-ink text-lg">確認活動資訊</h3>
              <p className="mt-2 text-sm text-muted-foreground">請確認所有設定無誤後，送出平台審核</p>
            </div>
          )}
        </div>

        {/* 操作按鈕 */}
        <div className="mt-6 flex gap-3">
          {step > 0 && (
            <button onClick={prev} className="h-12 px-6 rounded-full border-2 border-brand-purple/20 font-bold text-brand-purple-dark flex items-center gap-2 active:scale-[0.97] transition-transform">
              <ArrowLeft size={16} /> 上一步
            </button>
          )}
          <button onClick={next} className="flex-1 h-12 rounded-full bg-brand-purple text-white font-bold shadow-lg shadow-brand-purple/30 active:scale-[0.97] transition-transform flex items-center justify-center gap-2">
            {step === STEPS.length - 1 ? "送出審核" : "下一步"} <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
