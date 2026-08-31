import { useState } from "react";
import { ChevronRight, ShieldCheck } from "lucide-react";
import TopBar from "@/components/TopBar";
import { toast } from "sonner";

/** Consent 管理 */
export default function Consent() {
  const [consents, setConsents] = useState([
    { id: "c1", title: "會員條款與隱私政策", desc: "基本服務使用與個資保護", granted: true, required: true },
    { id: "c2", title: "行銷推播同意", desc: "接收任務、權益與優惠通知", granted: true, required: false },
    { id: "c3", title: "健康資料授權", desc: "提供疫苗、驅蟲等健康提醒", granted: true, required: false },
    { id: "c4", title: "品牌活動個別授權", desc: "參與品牌任務時個別詢問", granted: false, required: false },
  ]);

  const toggle = (id: string) => {
    setConsents((prev) =>
      prev.map((c) => {
        if (c.id === id && !c.required) {
          const next = { ...c, granted: !c.granted };
          toast.success(next.granted ? "已同意" : "已撤回");
          return next;
        }
        return c;
      })
    );
  };

  return (
    <div className="min-h-full bg-brand-cream flex flex-col">
      <TopBar showBack title="隱私與授權" />
      <div className="flex-1 px-5 pt-5 pb-6">
        <div className="paper-card p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-lilac flex items-center justify-center shrink-0">
              <ShieldCheck size={18} className="text-brand-purple" />
            </div>
            <div>
              <p className="text-sm font-black text-brand-ink">分層同意管理</p>
              <p className="text-[11px] text-muted-foreground">您可隨時撤回非必要授權，不影響既有帳務稽核</p>
            </div>
          </div>
        </div>

        <div className="mt-6 space-y-3">
          {consents.map((c) => (
            <div key={c.id} className="paper-card p-4 flex items-center gap-4">
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-brand-ink">{c.title}</p>
                <p className="text-[11px] text-muted-foreground">{c.desc}</p>
                {c.required && <span className="mt-1 inline-block text-[10px] font-bold text-brand-coral">必要授權</span>}
              </div>
              <button
                onClick={() => toggle(c.id)}
                disabled={c.required}
                className={`w-12 h-7 rounded-full transition-colors ${c.granted ? "bg-brand-purple" : "bg-brand-lilac"} ${c.required ? "opacity-50 cursor-not-allowed" : "active:scale-95"}`}
              >
                <div className={`w-5 h-5 rounded-full bg-white shadow transition-transform ${c.granted ? "translate-x-6" : "translate-x-1"}`} />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-6 paper-card p-4">
          <p className="text-xs text-muted-foreground leading-relaxed">
            撤回授權後，我們將停止新用途與推播，並依法處理保存／刪除。既有帳務稽核紀錄將保留至法定期限。
          </p>
        </div>
      </div>
    </div>
  );
}
