import { Share2 } from "lucide-react";
import { useLocation, useParams } from "wouter";
import { useDemo } from "@/contexts/DemoContext";
import { TASKS } from "@/lib/data";

/** P17 任務完成：戳章動效 */
export default function TaskDone() {
  const { id } = useParams<{ id: string }>();
  const [, navigate] = useLocation();
  const { points } = useDemo();
  const task = TASKS.find((t) => t.id === id) ?? TASKS[0];

  return (
    <div className="min-h-full bg-brand-cream flex flex-col items-center justify-center px-8 text-center">
      <div className="stamp stamp-in w-36 h-36 flex flex-col items-center justify-center bg-white shadow-xl">
        <span className="text-[10px] font-bold tracking-widest">PET PASSPORT</span>
        <span className="mt-1 text-2xl font-black tabular">+{task.points}</span>
        <span className="text-[10px] font-bold">點數入帳</span>
      </div>
      <h1 className="mt-8 text-2xl font-black text-brand-brown journal-enter">任務完成！</h1>
      <p className="mt-2 text-sm text-muted-foreground journal-enter journal-enter-1">
        「{task.title}」已驗證，{task.points} 點已入帳。
        目前可用 <span className="font-extrabold text-brand-orange tabular">{points.toLocaleString()}</span> 點。
      </p>
      <div className="mt-8 w-full space-y-3 journal-enter journal-enter-2">
        <button
          onClick={() => navigate("/wallet")}
          className="w-full h-12 rounded-2xl bg-brand-orange text-white font-bold shadow-lg shadow-brand-orange/30 active:scale-[0.97] transition-transform"
        >
          查看點數錢包
        </button>
        <button
          onClick={() => navigate("/tasks")}
          className="w-full h-12 rounded-2xl border-2 border-brand-brown/15 text-brand-brown font-bold active:scale-[0.97] transition-transform"
        >
          下一個任務
        </button>
        <button className="flex items-center justify-center gap-2 mx-auto text-sm font-bold text-muted-foreground active:scale-95">
          <Share2 size={15} /> 分享這枚戳章
        </button>
      </div>
    </div>
  );
}
