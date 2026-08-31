import { useLocation } from "wouter";
import { ChevronRight, Settings } from "lucide-react";
import BrandIcon from "@/components/BrandIcon";

/** 系統設定 */
export default function AdminSettings() {
  const [, navigate] = useLocation();

  const settings = [
    { id: "s1", title: "任務模板", desc: "管理任務類型與預設獎勵" },
    { id: "s2", title: "點數規則", desc: "設定點數取得、使用與到期規則" },
    { id: "s3", title: "通知模板", desc: "管理 LINE 推播與站內通知" },
    { id: "s4", title: "權限管理", desc: "設定角色與操作權限" },
  ];

  return (
    <div className="min-h-screen bg-brand-cream">
      <header className="sticky top-0 z-50 bg-brand-cream/90 backdrop-blur border-b border-border/60">
        <div className="max-w-6xl mx-auto px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <BrandIcon className="w-8 h-8" />
            <span className="font-black text-lg text-brand-ink">毛孩護照營運後台</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-brand-purple flex items-center justify-center text-white text-sm font-bold">管</div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-8 py-8">
        <h1 className="text-2xl font-black text-brand-ink">系統設定</h1>

        <div className="mt-6 space-y-3">
          {settings.map((s) => (
            <button key={s.id} className="w-full paper-card p-4 flex items-center gap-4 text-left active:scale-[0.98] transition-transform">
              <div className="w-12 h-12 rounded-xl bg-brand-lilac flex items-center justify-center shrink-0">
                <Settings size={20} className="text-brand-purple" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-brand-ink">{s.title}</p>
                <p className="text-[11px] text-muted-foreground">{s.desc}</p>
              </div>
              <ChevronRight size={16} className="text-muted-foreground" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
