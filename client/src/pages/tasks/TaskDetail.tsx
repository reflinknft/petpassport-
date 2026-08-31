import { useState } from "react";
import { BookOpen, CheckCircle2, ChevronRight, ExternalLink, GraduationCap, MapPin, Upload } from "lucide-react";
import { useLocation, useParams } from "wouter";
import TopBar from "@/components/TopBar";
import { useDemo } from "@/contexts/DemoContext";
import { ASSETS, TASKS } from "@/lib/data";

/** P16 任務詳情 */
export default function TaskDetail() {
  const { id } = useParams<{ id: string }>();
  const [, navigate] = useLocation();
  const { addPoints } = useDemo();
  const task = TASKS.find((t) => t.id === id) ?? TASKS[0];
  const [status, setStatus] = useState(task.status);
  const [showLeaveTip, setShowLeaveTip] = useState(false);

  const typeIcon = {
    content: BookOpen,
    course: GraduationCap,
    visit: MapPin,
    daily: CheckCircle2,
    newbie: CheckCircle2,
  }[task.type];
  const TypeIcon = typeIcon;

  const ctaMap = {
    available: task.type === "content" ? "前往閱讀文章" : task.type === "course" ? "前往課程" : task.type === "visit" ? "查看合作門店" : "開始任務",
    ongoing: "繼續任務",
    pending: "等待驗證",
    claimable: "領取點數",
    done: "已完成",
  } as const;

  const handleCta = () => {
    if (status === "claimable") {
      addPoints(task.points);
      navigate(`/tasks/${task.id}/done`);
      return;
    }
    if (task.type === "content") {
      navigate("/tasks/content/a1");
      return;
    }
    if (task.type === "course") {
      navigate("/tasks/course/co1");
      return;
    }
    if (task.type === "visit") {
      navigate("/wallet/code");
      return;
    }
    if (task.type === "daily") {
      navigate("/daily");
      return;
    }
    setStatus("claimable");
  };

  const handleCtaOld = () => {
    if (status === "claimable") {
      addPoints(task.points);
      navigate(`/tasks/${task.id}/done`);
      return;
    }
    if (task.type === "content" || task.type === "course") {
      setShowLeaveTip(true);
      return;
    }
    if (task.type === "visit") {
      navigate("/merchants");
      return;
    }
    setStatus("claimable");
  };

  return (
    <div className="min-h-full bg-brand-cream flex flex-col">
      <TopBar showBack title="任務詳情" />
      <div className="flex-1 pb-28">
        {/* 任務主圖 */}
        <div className="relative h-44">
          <img
            src={task.type === "content" ? ASSETS.contentSenior : task.type === "course" ? ASSETS.contentCourse : ASSETS.heroPets}
            alt={task.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-cream via-transparent to-transparent" />
          <span className="absolute top-4 left-5 text-[11px] font-bold px-2.5 py-1 rounded-full bg-white/90 text-brand-ink flex items-center gap-1">
            <TypeIcon size={12} /> {task.typeLabel}
          </span>
        </div>

        <div className="px-5 -mt-4 relative">
          <div className="paper-card p-5 journal-enter">
            <div className="flex items-start justify-between gap-3">
              <h1 className="text-xl font-black text-brand-ink leading-snug">{task.title}</h1>
              <span className="shrink-0 text-brand-purple font-black text-lg tabular">+{task.points} 點</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{task.description}</p>
            <div className="mt-3 flex gap-2 text-[11px]">
              <span className="px-2.5 py-1 rounded-full bg-brand-lilac text-brand-ink font-bold">期限：{task.deadline}</span>
              {task.petCondition && <span className="px-2.5 py-1 rounded-full bg-brand-mint/15 text-brand-mint font-bold">{task.petCondition}</span>}
            </div>
            {task.status === "ongoing" && (
              <div className="mt-4">
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="font-bold text-brand-ink">完成進度</span>
                  <span className="font-extrabold text-brand-purple tabular">{task.progress}%</span>
                </div>
                <div className="h-2 rounded-full bg-brand-lilac overflow-hidden">
                  <div className="h-full rounded-full bg-brand-purple" style={{ width: `${task.progress}%` }} />
                </div>
              </div>
            )}
          </div>

          {/* 完成步驟 */}
          <div className="mt-4 paper-card p-5 journal-enter journal-enter-1">
            <h2 className="font-black text-brand-ink text-sm">完成步驟</h2>
            <ol className="mt-3 space-y-3">
              {task.steps.map((s, i) => (
                <li key={i} className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-brand-lilac text-brand-ink text-xs font-black flex items-center justify-center shrink-0">{i + 1}</span>
                  <span className="text-sm text-muted-foreground leading-relaxed">{s}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* 驗證方式 */}
          <div className="mt-4 paper-card p-5 journal-enter journal-enter-2">
            <h2 className="font-black text-brand-ink text-sm">驗證方式</h2>
            <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
              {task.type === "content" && "透過追蹤連結前往 HEHO Pet，回站後系統自動驗證閱讀狀態。"}
              {task.type === "course" && "於毛小孩照護學院完成課程後，系統將自動驗證；若串接延遲，將顯示「待驗證」並由營運補發。"}
              {task.type === "visit" && "到店出示會員 QR，由店家掃碼核銷後自動入點。"}
              {(task.type === "daily" || task.type === "newbie") && "於站內完成操作後立即驗證入點。"}
            </p>
            {task.type === "visit" && (
              <button className="mt-3 w-full h-10 rounded-xl border-2 border-dashed border-brand-purple/40 text-brand-purple text-sm font-bold flex items-center justify-center gap-2 active:scale-[0.97] transition-transform">
                <Upload size={15} /> 或上傳消費證明
              </button>
            )}
          </div>

          <p className="mt-4 text-[10px] text-muted-foreground/80 leading-relaxed px-1">
            注意事項：每個帳號每任務限完成一次；點數將於驗證完成後 5 分鐘內入帳；如有異常請至「客服中心 → 點數申訴」。
          </p>
        </div>
      </div>

      {/* 固定底部 CTA */}
      <div className="sticky bottom-0 bg-brand-cream/95 backdrop-blur border-t border-border/60 p-4">
        <button
          onClick={handleCta}
          disabled={status === "done" || status === "pending"}
          className="w-full h-12 rounded-2xl bg-brand-purple text-white font-bold shadow-lg shadow-brand-purple/30 active:scale-[0.97] transition-all disabled:opacity-50 disabled:shadow-none flex items-center justify-center gap-2"
        >
          {ctaMap[status]}
          {(task.type === "content" || task.type === "course") && status !== "done" && <ExternalLink size={15} />}
        </button>
      </div>

      {/* 離站提醒 Sheet */}
      {showLeaveTip && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-brand-purple-dark/40" onClick={() => setShowLeaveTip(false)}>
          <div className="w-full max-w-[390px] bg-white rounded-t-3xl p-6 pb-8 journal-enter" onClick={(e) => e.stopPropagation()}>
            <div className="w-10 h-1 rounded-full bg-border mx-auto mb-5" />
            <h2 className="font-black text-brand-ink">即將前往{task.type === "content" ? " HEHO Pet" : " 毛小孩照護學院"}</h2>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              完成{task.type === "content" ? "閱讀" : "課程"}後，請回到本頁，系統會自動驗證並發放 {task.points} 點。若忘記回站，可於「任務中心 → 進行中」找到此任務。
            </p>
            <button
              onClick={() => {
                setShowLeaveTip(false);
                setStatus("claimable");
              }}
              className="mt-6 w-full h-12 rounded-2xl bg-brand-purple text-white font-bold active:scale-[0.97] transition-transform"
            >
              我知道了，前往{task.type === "content" ? "閱讀" : "上課"}
            </button>
            <button onClick={() => setShowLeaveTip(false)} className="mt-3 w-full text-sm font-bold text-muted-foreground active:scale-95">
              取消
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
