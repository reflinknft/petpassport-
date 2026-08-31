import { useEffect, useState } from "react";
import { useLocation, useParams } from "wouter";
import { ExternalLink, Timer } from "lucide-react";
import TopBar from "@/components/TopBar";
import { CONTENTS } from "@/lib/data";

/** P18 內容任務中轉（HEHO 閱讀驗證） */
export default function ContentBridge() {
  const { id } = useParams<{ id: string }>();
  const [, navigate] = useLocation();
  const content = CONTENTS.find((c) => c.id === id) ?? CONTENTS[0];
  const [seconds, setSeconds] = useState(0);
  const [left, setLeft] = useState(false);
  const need = 30; // DEMO：停留 30 秒

  useEffect(() => {
    const t = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(t);
  }, []);

  const openExternal = () => {
    setLeft(true);
    window.open("https://www.heho.com.tw", "_blank");
  };

  return (
    <div className="min-h-full bg-brand-cream flex flex-col">
      <TopBar showBack title="內容任務" />
      <div className="flex-1 px-5 pt-5 pb-8 flex flex-col">
        <div className="paper-card overflow-hidden journal-enter">
          <img src={content.image} alt={content.title} className="w-full h-44 object-cover" />
          <div className="p-5">
            <p className="text-[10px] font-bold text-brand-purple">{content.source}</p>
            <h1 className="mt-1 text-lg font-black text-brand-ink leading-snug">{content.title}</h1>
            <p className="mt-2 text-xs text-brand-sub">{content.readTime} · 完成 +{content.points} 點</p>
          </div>
        </div>

        {/* 驗證方式說明 */}
        <div className="mt-4 paper-card p-5 journal-enter journal-enter-1">
          <h2 className="font-black text-brand-ink text-sm">完成方式</h2>
          <ol className="mt-3 space-y-2.5 text-xs text-brand-sub">
            <li className="flex gap-2"><span className="w-5 h-5 rounded-full bg-brand-lilac text-brand-purple font-bold flex items-center justify-center shrink-0">1</span>點擊下方按鈕前往 {content.source} 閱讀文章</li>
            <li className="flex gap-2"><span className="w-5 h-5 rounded-full bg-brand-lilac text-brand-purple font-bold flex items-center justify-center shrink-0">2</span>完整閱讀後回到本頁</li>
            <li className="flex gap-2"><span className="w-5 h-5 rounded-full bg-brand-lilac text-brand-purple font-bold flex items-center justify-center shrink-0">3</span>系統驗證後自動發放 {content.points} 點</li>
          </ol>
        </div>

        {/* 閱讀計時（DEMO 驗證） */}
        <div className="mt-4 paper-card p-5 journal-enter journal-enter-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Timer size={16} className="text-brand-purple" />
              <span className="text-sm font-bold text-brand-ink">閱讀計時</span>
            </div>
            <span className="text-sm font-black text-brand-purple tabular">{seconds}s / {need}s</span>
          </div>
          <div className="mt-3 h-2 rounded-full bg-brand-lilac overflow-hidden">
            <div className="h-full rounded-full bg-brand-purple transition-all" style={{ width: `${Math.min((seconds / need) * 100, 100)}%` }} />
          </div>
          <p className="mt-2 text-[10px] text-brand-sub">DEMO 採用「閱讀計時」驗證：停留達 {need} 秒即可完成。</p>
        </div>

        <div className="mt-auto pt-6 space-y-3">
          <button
            onClick={openExternal}
            className="w-full h-12 rounded-full bg-brand-purple text-white font-bold shadow-lg shadow-brand-purple/30 active:scale-[0.97] transition-transform flex items-center justify-center gap-2"
          >
            <ExternalLink size={17} /> 前往 {content.source} 閱讀
          </button>
          <button
            onClick={() => navigate(`/tasks/verify/${content.id}`)}
            disabled={seconds < need && !left}
            className="w-full h-12 rounded-full border-2 border-brand-purple/20 text-brand-purple-dark font-bold active:scale-[0.97] transition-transform disabled:opacity-40"
          >
            {seconds >= need || left ? "我已完成閱讀，前往驗證" : `請先完成閱讀（還需 ${need - seconds} 秒）`}
          </button>
        </div>
      </div>
    </div>
  );
}
