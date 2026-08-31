import { BadgeCheck, ChevronRight, IdCard, Pencil, ShieldCheck } from "lucide-react";
import { useLocation, useParams } from "wouter";
import TopBar from "@/components/TopBar";
import { TaskCard } from "@/components/cards";
import { PETS, TASKS } from "@/lib/data";

/** P09 寵物檔案 */
export default function PetProfile() {
  const { id } = useParams<{ id: string }>();
  const [, navigate] = useLocation();
  const pet = PETS.find((p) => p.id === id) ?? PETS[0];
  const relatedTasks = TASKS.filter((t) => t.status !== "done").slice(0, 2);

  return (
    <div className="min-h-full bg-brand-cream">
      <TopBar showBack title="寵物檔案" />
      {/* 封面 */}
      <div className="relative h-52">
        <img src={pet.photo} alt={pet.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-cream via-transparent to-transparent" />
      </div>
      <div className="px-5 -mt-10 relative">
        <div className="paper-card p-5 journal-enter">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-2xl font-black text-brand-brown flex items-center gap-2">
                {pet.name}
                <BadgeCheck size={20} className="text-brand-orange" />
              </h1>
              <p className="mt-1 text-sm text-muted-foreground">
                {pet.breed} · {pet.age} 歲 · {pet.gender === "female" ? "女生" : "男生"} · {pet.weight} kg
              </p>
            </div>
            <button
              onClick={() => navigate(`/pets/${pet.id}/edit`)}
              className="w-10 h-10 rounded-full bg-brand-apricot flex items-center justify-center text-brand-brown active:scale-95 transition-transform"
              aria-label="編輯"
            >
              <Pencil size={16} />
            </button>
          </div>
          {/* 照護完整度 */}
          <div className="mt-4">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-brand-brown">照護資料完整度</span>
              <span className="font-extrabold text-brand-orange tabular">{pet.completeness}%</span>
            </div>
            <div className="mt-2 h-2 rounded-full bg-brand-apricot overflow-hidden">
              <div className="h-full rounded-full bg-brand-orange" style={{ width: `${pet.completeness}%` }} />
            </div>
            <p className="mt-1.5 text-[10px] text-muted-foreground">補充疫苗紀錄可提升至 95%，並解鎖健檢任務。</p>
          </div>
          {/* 標籤 */}
          <div className="mt-4 flex gap-1.5 flex-wrap">
            {pet.tags.map((t) => (
              <span key={t} className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-brand-apricot text-brand-brown">{t}</span>
            ))}
          </div>
        </div>

        {/* 電子寵物卡 */}
        <button
          onClick={() => navigate(`/pets/${pet.id}/card`)}
          className="mt-4 w-full paper-card p-4 flex items-center gap-3 active:scale-[0.98] transition-transform journal-enter journal-enter-1"
        >
          <div className="w-10 h-10 rounded-xl bg-brand-brown flex items-center justify-center shrink-0">
            <IdCard size={18} className="text-brand-orange" />
          </div>
          <div className="text-left">
            <p className="text-sm font-bold text-brand-brown">電子寵物卡</p>
            <p className="text-[11px] text-muted-foreground">出示 QR 快速核身與緊急聯絡</p>
          </div>
          <ChevronRight size={16} className="ml-auto text-muted-foreground" />
        </button>

        {/* 相關任務 */}
        <h2 className="mt-6 font-black text-brand-brown">與 {pet.name} 相關的任務</h2>
        <div className="mt-3 space-y-3">
          {relatedTasks.map((t, i) => (
            <TaskCard key={t.id} task={t} index={i} />
          ))}
        </div>

        {/* 授權說明 */}
        <div className="mt-6 mb-8 passport-frame p-4 flex gap-3 bg-white/60">
          <ShieldCheck size={18} className="text-brand-matcha shrink-0 mt-0.5" />
          <p className="text-[11px] text-muted-foreground leading-relaxed">
            寵物資料僅用於照護建議與任務推薦，不會提供給第三方。您可隨時於「設定 → 資料授權」查看或撤回授權。
          </p>
        </div>
      </div>
    </div>
  );
}
