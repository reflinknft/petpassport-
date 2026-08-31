import { useState } from "react";
import { Coins, PawPrint, Ticket } from "lucide-react";
import { useLocation } from "wouter";

const SLIDES = [
  {
    icon: PawPrint,
    title: "為毛孩建立專屬護照",
    body: "記錄品種、生日與健康標籤，照護任務與建議都依牠量身打造。",
  },
  {
    icon: Coins,
    title: "照護、閱讀、上課都累點",
    body: "完成任務即可獲得點數，每一點都有來源、效期與明細，透明可查。",
  },
  {
    icon: Ticket,
    title: "點數兌換實用權益",
    body: "洗護折抵、健檢加值、用品優惠，到店出示 QR 就能核銷使用。",
  },
];

/** P03 新手價值引導 */
export default function Guide() {
  const [step, setStep] = useState(0);
  const [, navigate] = useLocation();
  const slide = SLIDES[step];
  const Icon = slide.icon;

  return (
    <div className="min-h-full bg-brand-cream flex flex-col px-6 pt-14 pb-8">
      <div className="flex justify-end">
        <button onClick={() => navigate("/pet/new")} className="text-sm font-bold text-muted-foreground active:scale-95">
          略過
        </button>
      </div>
      <div key={step} className="flex-1 flex flex-col items-center justify-center text-center">
        <div className="w-24 h-24 rounded-3xl bg-brand-lilac flex items-center justify-center stamp-in">
          <Icon size={40} className="text-brand-purple" />
        </div>
        <h1 className="mt-8 text-2xl font-black text-brand-ink journal-enter">{slide.title}</h1>
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-[260px] journal-enter journal-enter-1">{slide.body}</p>
      </div>
      <div className="flex items-center justify-center gap-2 mb-6">
        {SLIDES.map((_, i) => (
          <span key={i} className={`h-1.5 rounded-full transition-all ${i === step ? "w-6 bg-brand-purple" : "w-1.5 bg-brand-purple-dark/20"}`} />
        ))}
      </div>
      <button
        onClick={() => (step < 2 ? setStep(step + 1) : navigate("/pet/new"))}
        className="w-full h-12 rounded-2xl bg-brand-purple text-white font-bold shadow-lg shadow-brand-purple/30 active:scale-[0.97] transition-transform"
      >
        {step < 2 ? "下一步" : "建立毛孩護照"}
      </button>
    </div>
  );
}
