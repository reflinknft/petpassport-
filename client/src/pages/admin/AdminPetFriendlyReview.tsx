import { useState } from "react";
import { BadgeCheck, CheckCircle2, Clock3, MapPin, PawPrint, ShieldAlert, XCircle } from "lucide-react";
import { toast } from "sonner";
import BrandIcon from "@/components/BrandIcon";

type Status = "待審核" | "待補件" | "已驗證";
type ReviewItem = { id: string; name: string; branch: string; status: Status; updated: string; tags: string[]; source: string };

const INITIAL: ReviewItem[] = [
  { id: "m4", name: "小日子人寵友好咖啡", branch: "台北松山店", status: "待審核", updated: "2026/09/14", tags: ["室內人寵共食", "飲水碗", "假日預約"], source: "商家自填" },
  { id: "m5", name: "森野毛孩散步所", branch: "台北中山店", status: "待補件", updated: "2026/08/28", tags: ["散步集合", "遮蔭休息區"], source: "商家自填" },
  { id: "m1", name: "毛茸茸洗護沙龍", branch: "台北大安店", status: "已驗證", updated: "2026/09/12", tags: ["安靜等候區", "飲水站", "防滑地墊"], source: "商家自填，平台複核" },
];

/** 平台後台：人寵友好商家資料與推薦狀態的前端審核工作台。 */
export default function AdminPetFriendlyReview() {
  const [items, setItems] = useState(INITIAL);
  const updateStatus = (id: string, status: Status) => {
    setItems((current) => current.map((item) => item.id === id ? { ...item, status } : item));
    toast.success(status === "已驗證" ? "商家已完成驗證" : "已標記為待補件", { description: "推薦結果會依最新資料狀態更新。" });
  };
  const stats = [
    { label: "待審核", value: items.filter((item) => item.status === "待審核").length, tone: "text-brand-coral" },
    { label: "待補件", value: items.filter((item) => item.status === "待補件").length, tone: "text-brand-brick" },
    { label: "已驗證", value: items.filter((item) => item.status === "已驗證").length, tone: "text-brand-mint" },
  ];

  return (
    <div className="min-h-screen bg-brand-cream"><header className="sticky top-0 z-50 border-b border-border/60 bg-brand-cream/90 backdrop-blur"><div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8"><div className="flex items-center gap-3"><BrandIcon className="h-8 w-8" /><div><p className="text-lg font-black text-brand-ink">毛孩護照營運後台</p><p className="text-[10px] font-bold tracking-widest text-brand-purple">SERVICE DATA GOVERNANCE</p></div></div><span className="rounded-full bg-brand-lilac px-3 py-1.5 text-[11px] font-bold text-brand-purple-dark">資料審核</span></div></header>
      <main className="mx-auto max-w-6xl px-5 py-7 md:px-8"><div><span className="journal-tab">PET-FRIENDLY REVIEW</span><h1 className="mt-3 text-2xl font-black text-brand-ink">人寵友好服務資料審核</h1><p className="mt-2 max-w-2xl text-sm leading-relaxed text-brand-sub">確認商家填報的接待規範、設施與最後更新時間；只有已驗證資料會在會員探索服務與 AI 推薦中顯示驗證標記。</p></div>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">{stats.map((stat) => <div key={stat.label} className="paper-card p-5"><p className="text-xs font-bold text-brand-sub">{stat.label}</p><p className={`mt-2 text-3xl font-black tabular ${stat.tone}`}>{stat.value}</p></div>)}</div>
        <section className="mt-6 space-y-3">{items.map((item) => <article key={item.id} className="paper-card p-5"><div className="flex flex-col gap-4 lg:flex-row lg:items-center"><div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-lilac text-brand-purple"><PawPrint size={20} /></div><div className="min-w-0 flex-1"><div className="flex flex-wrap items-center gap-2"><h2 className="font-black text-brand-ink">{item.name}</h2><StatusBadge status={item.status} /></div><p className="mt-1 flex items-center gap-1 text-[11px] text-brand-sub"><MapPin size={12} /> {item.branch} · 最後更新 {item.updated} · {item.source}</p><div className="mt-2 flex flex-wrap gap-1.5">{item.tags.map((tag) => <span key={tag} className="rounded-full bg-brand-lilac px-2 py-0.5 text-[10px] font-bold text-brand-purple-dark">{tag}</span>)}</div></div><div className="flex shrink-0 gap-2">{item.status !== "已驗證" && <button onClick={() => updateStatus(item.id, "已驗證")} className="inline-flex h-9 items-center gap-1.5 rounded-xl bg-brand-mint px-3 text-xs font-bold text-white transition-transform active:scale-95"><CheckCircle2 size={14} /> 驗證通過</button>}{item.status !== "待補件" && <button onClick={() => updateStatus(item.id, "待補件")} className="inline-flex h-9 items-center gap-1.5 rounded-xl border border-brand-coral/30 bg-brand-coral/10 px-3 text-xs font-bold text-brand-coral transition-transform active:scale-95"><ShieldAlert size={14} /> 要求補件</button>}</div></div></article>)}</section>
        <section className="mt-5 rounded-2xl border border-dashed border-brand-purple/25 bg-white/65 p-4"><div className="flex gap-3"><BadgeCheck size={18} className="mt-0.5 shrink-0 text-brand-mint" /><div><p className="text-sm font-black text-brand-ink">推薦資料規則</p><p className="mt-1 text-xs leading-relaxed text-brand-sub">本輪前端展示以商家資料完整度、最近驗證時間、營業狀態與服務規範為依據。正式版將由後端保留審核紀錄、規則版本、查詢條件與推薦結果快照。</p></div></div></section>
      </main>
    </div>
  );
}

function StatusBadge({ status }: { status: Status }) {
  const map = { "待審核": [Clock3, "bg-brand-coral/15 text-brand-coral"], "待補件": [XCircle, "bg-brand-brick/15 text-brand-brick"], "已驗證": [BadgeCheck, "bg-brand-mint/15 text-brand-mint"] } as const;
  const [Icon, className] = map[status];
  return <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-bold ${className}`}><Icon size={11} />{status}</span>;
}
