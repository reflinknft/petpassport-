import { useLocation, useParams } from "wouter";
import { ExternalLink, GraduationCap } from "lucide-react";
import TopBar from "@/components/TopBar";
import { COURSES } from "@/lib/data";

/** P19 課程任務中轉（毛小孩照護學院） */
export default function CourseBridge() {
  const { id } = useParams<{ id: string }>();
  const [, navigate] = useLocation();
  const course = COURSES.find((c) => c.id === id) ?? COURSES[0];

  return (
    <div className="min-h-full bg-brand-cream flex flex-col">
      <TopBar showBack title="課程任務" />
      <div className="flex-1 px-5 pt-5 pb-8 flex flex-col">
        <div className="paper-card overflow-hidden journal-enter">
          <img src={course.image} alt={course.title} className="w-full h-44 object-cover" />
          <div className="p-5">
            <p className="text-[10px] font-bold text-brand-mint flex items-center gap-1"><GraduationCap size={11} /> {course.source} 課程</p>
            <h1 className="mt-1 text-lg font-black text-brand-ink leading-snug">{course.title}</h1>
            <p className="mt-2 text-xs text-brand-sub">{course.duration} · 完成 +{course.points} 點</p>
          </div>
        </div>

        <div className="mt-4 paper-card p-5 journal-enter journal-enter-1">
          <h2 className="font-black text-brand-ink text-sm">完成方式</h2>
          <ol className="mt-3 space-y-2.5 text-xs text-brand-sub">
            <li className="flex gap-2"><span className="w-5 h-5 rounded-full bg-brand-lilac text-brand-purple font-bold flex items-center justify-center shrink-0">1</span>前往毛小孩照護學院課程頁（使用專屬連結識別來源）</li>
            <li className="flex gap-2"><span className="w-5 h-5 rounded-full bg-brand-lilac text-brand-purple font-bold flex items-center justify-center shrink-0">2</span>完成免費試看或正式課程</li>
            <li className="flex gap-2"><span className="w-5 h-5 rounded-full bg-brand-lilac text-brand-purple font-bold flex items-center justify-center shrink-0">3</span>回站提交完課證明或回答測驗</li>
          </ol>
        </div>

        <div className="mt-4 paper-card p-5 journal-enter journal-enter-2">
          <h2 className="font-black text-brand-ink text-sm">串接說明</h2>
          <p className="mt-2 text-xs text-brand-sub leading-relaxed">
            DEMO 階段採「外部連結＋模擬完成」；MVP 階段將改為「優惠碼＋回站問答」，未來可透過毛小孩照護學院匯出名單或 Webhook 自動回傳。
          </p>
        </div>

        <div className="mt-auto pt-6 space-y-3">
          <button
            onClick={() => window.open("https://maolearn.kaik.io/", "_blank")}
            className="w-full h-12 rounded-full bg-brand-purple text-white font-bold shadow-lg shadow-brand-purple/30 active:scale-[0.97] transition-transform flex items-center justify-center gap-2"
          >
            <ExternalLink size={17} /> 前往毛小孩照護學院上課
          </button>
          <button
            onClick={() => navigate(`/tasks/verify/${course.id}`)}
            className="w-full h-12 rounded-full border-2 border-brand-purple/20 text-brand-purple-dark font-bold active:scale-[0.97] transition-transform"
          >
            （DEMO）模擬完成課程
          </button>
        </div>
      </div>
    </div>
  );
}
