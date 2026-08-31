import { useState } from "react";
import { useLocation, useParams } from "wouter";
import { CheckCircle2, HelpCircle, XCircle } from "lucide-react";
import TopBar from "@/components/TopBar";
import { useDemo } from "@/contexts/DemoContext";
import { CONTENTS, COURSES } from "@/lib/data";

/** P20 回站驗證（待驗證／成功／失敗） */
export default function Verify() {
  const { id } = useParams<{ id: string }>();
  const [, navigate] = useLocation();
  const { addPoints } = useDemo();
  const content = CONTENTS.find((c) => c.id === id);
  const course = COURSES.find((c) => c.id === id);
  const item = content ?? course;
  const [answer, setAnswer] = useState("");
  const [state, setState] = useState<"pending" | "success" | "fail">("pending");

  const question = content
    ? { q: "文章中提到，熟齡犬每天建議的散步時間是？", options: ["10 分鐘", "20 分鐘", "60 分鐘"], correct: 1 }
    : { q: "課程中提到，新手飼主第一件該做的事是？", options: ["購買零食", "建立照護例行", "訓練才藝"], correct: 1 };

  const submit = () => {
    if (Number(answer) === question.correct) {
      addPoints(item?.points ?? 20);
      setState("success");
    } else {
      setState("fail");
    }
  };

  return (
    <div className="min-h-full bg-brand-cream flex flex-col">
      <TopBar showBack title="回站驗證" />
      <div className="flex-1 px-5 pt-5 pb-8 flex flex-col items-center justify-center text-center">
        {state === "pending" && (
          <>
            <div className="w-16 h-16 rounded-full bg-brand-lilac flex items-center justify-center journal-enter">
              <HelpCircle size={28} className="text-brand-purple" />
            </div>
            <h1 className="mt-5 text-xl font-black text-brand-ink journal-enter journal-enter-1">完成驗證問題</h1>
            <p className="mt-2 text-sm text-brand-sub journal-enter journal-enter-2">回答正確即可獲得 {item?.points ?? 20} 點</p>
            <div className="mt-6 paper-card p-5 w-full journal-enter journal-enter-3 text-left">
              <p className="text-sm font-bold text-brand-ink">{question.q}</p>
              <div className="mt-4 space-y-2.5">
                {question.options.map((opt, i) => (
                  <button
                    key={opt}
                    onClick={() => setAnswer(String(i))}
                    className={`w-full p-3.5 rounded-xl text-sm font-bold text-left transition-all active:scale-[0.98] ${
                      answer === String(i) ? "bg-brand-purple text-white" : "bg-brand-lilac text-brand-purple-dark"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
              <button
                onClick={submit}
                disabled={answer === ""}
                className="mt-5 w-full h-12 rounded-full bg-brand-purple text-white font-bold shadow-lg shadow-brand-purple/30 active:scale-[0.97] transition-transform disabled:opacity-40"
              >
                提交答案
              </button>
            </div>
          </>
        )}

        {state === "success" && (
          <>
            <div className="stamp stamp-in w-36 h-36 flex flex-col items-center justify-center bg-white shadow-xl" style={{ borderColor: "var(--brand-mint)", color: "var(--brand-mint)" }}>
              <CheckCircle2 size={28} />
              <span className="mt-1 text-lg font-black">驗證成功</span>
              <span className="text-[10px] font-bold">+{item?.points ?? 20} 點</span>
            </div>
            <h1 className="mt-8 text-2xl font-black text-brand-ink journal-enter">點數已入帳</h1>
            <p className="mt-2 text-sm text-brand-sub journal-enter journal-enter-1">「{item?.title}」已完成，{item?.points ?? 20} 點已加入您的錢包。</p>
            <button
              onClick={() => navigate("/wallet")}
              className="mt-8 w-full max-w-[280px] h-12 rounded-full bg-brand-purple text-white font-bold shadow-lg shadow-brand-purple/30 active:scale-[0.97] transition-transform journal-enter journal-enter-2"
            >
              查看點數錢包
            </button>
          </>
        )}

        {state === "fail" && (
          <>
            <div className="w-16 h-16 rounded-full bg-brand-coral/15 flex items-center justify-center journal-enter">
              <XCircle size={28} className="text-brand-coral" />
            </div>
            <h1 className="mt-5 text-xl font-black text-brand-ink journal-enter journal-enter-1">答案不正確</h1>
            <p className="mt-2 text-sm text-brand-sub journal-enter journal-enter-2">請再仔細閱讀內容後重試，或聯絡客服協助。</p>
            <div className="mt-6 flex gap-3 w-full max-w-[280px] journal-enter journal-enter-3">
              <button
                onClick={() => setState("pending")}
                className="flex-1 h-12 rounded-full bg-brand-purple text-white font-bold active:scale-[0.97] transition-transform"
              >
                再試一次
              </button>
              <button
                onClick={() => navigate("/support")}
                className="flex-1 h-12 rounded-full border-2 border-brand-purple/20 text-brand-purple-dark font-bold active:scale-[0.97] transition-transform"
              >
                聯絡客服
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
