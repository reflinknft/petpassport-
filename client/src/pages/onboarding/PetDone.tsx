import { useEffect } from "react";
import { ArrowRight, PartyPopper } from "lucide-react";
import { useLocation } from "wouter";
import { useDemo } from "@/contexts/DemoContext";
import { ASSETS } from "@/lib/data";

/** P06 建檔完成：新手點數入帳 */
export default function PetDone() {
  const [, navigate] = useLocation();
  const { addPoints } = useDemo();

  useEffect(() => {
    // 模擬新手 100 點入帳（僅演示一次）
    const t = setTimeout(() => addPoints(100), 600);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="min-h-full bg-brand-cream flex flex-col items-center justify-center px-8 text-center">
      <div className="relative">
        <img src={ASSETS.petJumi} alt="Jumi" className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-xl" />
        <span className="stamp stamp-in absolute -bottom-2 -right-6 bg-white px-3 py-1.5 text-xs shadow-lg">+100 點</span>
      </div>
      <div className="mt-8 flex items-center gap-2 text-brand-purple">
        <PartyPopper size={20} />
        <p className="font-bold">建檔完成！</p>
      </div>
      <h1 className="mt-2 text-2xl font-black text-brand-ink">Jumi 的毛孩護照已建立</h1>
      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
        新手見面禮 <span className="font-extrabold text-brand-purple tabular">100 點</span> 已入帳。
        接下來完成「閱讀熟齡照護文章」，再賺 20 點。
      </p>
      <button
        onClick={() => navigate("/home")}
        className="mt-8 w-full h-12 rounded-2xl bg-brand-purple text-white font-bold shadow-lg shadow-brand-purple/30 active:scale-[0.97] transition-transform flex items-center justify-center gap-2"
      >
        前往首頁 <ArrowRight size={18} />
      </button>
      <button onClick={() => navigate("/tasks")} className="mt-3 text-sm font-bold text-brand-ink active:scale-95">
        直接看下一個任務
      </button>
    </div>
  );
}
