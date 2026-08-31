import { useState } from "react";
import { useLocation, useParams } from "wouter";
import { CheckCircle2 } from "lucide-react";
import TopBar from "@/components/TopBar";
import { useDemo } from "@/contexts/DemoContext";
import { BRAND_TASKS } from "@/lib/data";

/** 品牌贊助任務詳情（場景六） */
export default function BrandTaskDetail() {
  const { id } = useParams<{ id: string }>();
  const [, navigate] = useLocation();
  const { addPoints } = useDemo();
  const task = BRAND_TASKS.find((t) => t.id === id) ?? BRAND_TASKS[0];
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);

  const complete = () => {
    addPoints(task.points);
    setDone(true);
  };

  return (
    <div className="min-h-full bg-brand-cream flex flex-col">
      <TopBar showBack title="品牌任務" />
      <div className="flex-1 px-5 pt-5 pb-8 flex flex-col">
        <div className="paper-card overflow-hidden journal-enter">
          <img src={task.image} alt={task.brand} className="w-full h-44 object-cover" />
          <div className="p-5">
            <div className="flex items-center justify-between">
              <p className="text-[10px] font-bold text-brand-coral">{task.brand} · 贊助任務</p>
              <span className="text-brand-coral font-extrabold text-sm tabular">+{task.points} 點</span>
            </div>
            <h1 className="mt-1 text-lg font-black text-brand-ink leading-snug">{task.title}</h1>
            <p className="mt-2 text-xs text-brand-sub">{task.description}</p>
            <p className="mt-2 text-[10px] text-brand-sub">適用對象：{task.audience} · 截止 {task.deadline}</p>
          </div>
        </div>

        {/* 步驟 */}
        <div className="mt-4 paper-card p-5 journal-enter journal-enter-1">
          <h2 className="font-black text-brand-ink text-sm">完成步驟</h2>
          <div className="mt-3 space-y-3">
            {task.steps.map((s, i) => (
              <div key={s} className="flex items-center gap-3">
                <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                  step > i ? "bg-brand-mint text-white" : step === i ? "bg-brand-purple text-white" : "bg-brand-lilac text-brand-purple"
                }`}>
                  {step > i ? <CheckCircle2 size={13} /> : i + 1}
                </span>
                <p className={`text-sm ${step > i ? "text-brand-sub line-through" : "text-brand-ink font-bold"}`}>{s}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-auto pt-6">
          {!done ? (
            <button
              onClick={() => {
                if (step < task.steps.length - 1) setStep(step + 1);
                else complete();
              }}
              className="w-full h-12 rounded-full bg-brand-purple text-white font-bold shadow-lg shadow-brand-purple/30 active:scale-[0.97] transition-transform"
            >
              {step < task.steps.length - 1 ? `下一步（${step + 1}/${task.steps.length}）` : "完成任務，領取點數"}
            </button>
          ) : (
            <div className="text-center">
              <div className="stamp stamp-in w-32 h-32 mx-auto flex flex-col items-center justify-center bg-white shadow-xl">
                <span className="text-[10px] font-bold tracking-widest">BRAND</span>
                <span className="mt-1 text-lg font-black">任務完成</span>
                <span className="text-[10px] font-bold">+{task.points} 點</span>
              </div>
              <button
                onClick={() => navigate("/home")}
                className="mt-6 w-full h-12 rounded-full bg-brand-purple text-white font-bold shadow-lg shadow-brand-purple/30 active:scale-[0.97] transition-transform"
              >
                回到首頁
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
