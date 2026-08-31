import { useLocation } from "wouter";
import { ChevronRight, Search, Users } from "lucide-react";
import BrandIcon from "@/components/BrandIcon";

/** 會員與毛孩管理 */
export default function AdminMembers() {
  const [, navigate] = useLocation();

  const members = [
    { id: "m1", name: "林小毛", pet: "貴賓犬 Jumi", status: "正常", joinDate: "2026/06/15" },
    { id: "m2", name: "陳小姐", pet: "英短 麻糬", status: "正常", joinDate: "2026/07/20" },
    { id: "m3", name: "林先生", pet: "米克斯 豆豆", status: "封鎖", joinDate: "2026/08/01" },
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
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-black text-brand-ink">會員與毛孩</h1>
          <div className="relative">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input placeholder="搜尋會員或毛孩" className="h-10 pl-11 pr-4 rounded-full bg-white border border-border text-sm outline-none focus:border-brand-purple" />
          </div>
        </div>

        <div className="mt-6 space-y-3">
          {members.map((m) => (
            <div key={m.id} className="paper-card p-4 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand-lilac flex items-center justify-center shrink-0">
                <Users size={20} className="text-brand-purple" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-brand-ink">{m.name}</p>
                <p className="text-[11px] text-muted-foreground">{m.pet} · 加入於 {m.joinDate}</p>
              </div>
              <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                m.status === "正常" ? "bg-brand-mint/15 text-brand-mint" : "bg-brand-brick/15 text-brand-brick"
              }`}>{m.status}</span>
              <ChevronRight size={16} className="text-muted-foreground" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
