import { useState } from "react";
import { BadgeCheck, Check, ClipboardCheck, PawPrint, Save, Store, UsersRound } from "lucide-react";
import { toast } from "sonner";
import BrandIcon from "@/components/BrandIcon";
import { MERCHANTS } from "@/lib/data";

/** 商家端：人寵友好服務資料維護與送審示意。 */
export default function MerchantFriendlyProfile() {
  const merchant = MERCHANTS[0];
  const [features, setFeatures] = useState(merchant.friendlyFeatures);
  const [booking, setBooking] = useState(merchant.booking);
  const [notes, setNotes] = useState(merchant.friendlyNotes);

  const toggleFeature = (feature: string) => setFeatures((current) => current.includes(feature) ? current.filter((item) => item !== feature) : [...current, feature]);
  const saveProfile = () => toast.success("已儲存人寵友好資料", { description: "本次更新會進入平台複核佇列。" });

  return (
    <div className="min-h-screen bg-brand-cream">
      <header className="sticky top-0 z-50 border-b border-border/60 bg-brand-cream/90 backdrop-blur"><div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8"><div className="flex items-center gap-3"><BrandIcon className="h-8 w-8" /><div><p className="text-lg font-black text-brand-ink">毛孩護照商家版</p><p className="text-[10px] font-bold tracking-widest text-brand-purple">PET-FRIENDLY PROFILE</p></div></div><span className="rounded-full bg-brand-mint/15 px-3 py-1.5 text-[11px] font-bold text-brand-mint">資料已驗證</span></div></header>

      <main className="mx-auto max-w-4xl px-5 py-7 md:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"><div><span className="journal-tab">MERCHANT PROFILE</span><h1 className="mt-3 text-2xl font-black text-brand-ink">人寵友好服務設定</h1><p className="mt-2 max-w-xl text-sm leading-relaxed text-brand-sub">維護服務規範與設施資訊，讓平台能向適合的飼主與毛孩清楚推薦您的據點。</p></div><div className="rounded-2xl bg-white px-4 py-3 shadow-sm"><p className="text-[10px] font-bold text-brand-sub">目前據點</p><p className="mt-0.5 text-sm font-black text-brand-ink">{merchant.name} · {merchant.branch}</p></div></div>

        <section className="mt-6 grid gap-4 lg:grid-cols-[1.4fr_0.8fr]">
          <div className="paper-card p-5"><div className="flex items-center gap-2"><PawPrint size={18} className="text-brand-purple" /><h2 className="font-black text-brand-ink">接待與服務規範</h2></div><div className="mt-5 space-y-4"><Field label="可接待對象" value={merchant.petTypes.join("、")} readOnly /><Field label="體型與入店規範" value={merchant.sizePolicy} readOnly /><label className="block"><span className="text-[11px] font-bold text-brand-sub">預約方式</span><select value={booking} onChange={(event) => setBooking(event.target.value)} className="mt-1.5 h-11 w-full rounded-xl border border-border bg-white px-3 text-sm font-bold text-brand-ink outline-none focus:ring-2 focus:ring-brand-purple/25"><option>可直接到店</option><option>建議先預約</option><option>首次參加需預約</option></select></label><label className="block"><span className="text-[11px] font-bold text-brand-sub">到店前提醒</span><textarea value={notes} onChange={(event) => setNotes(event.target.value)} rows={3} className="mt-1.5 w-full resize-none rounded-xl border border-border bg-white p-3 text-sm leading-relaxed text-brand-ink outline-none focus:ring-2 focus:ring-brand-purple/25" /></label></div></div>

          <aside className="rounded-[20px] bg-brand-purple-dark p-5 text-white"><BadgeCheck size={22} className="text-brand-mint" /><h2 className="mt-3 text-lg font-black">推薦資料品質</h2><p className="mt-1 text-xs leading-relaxed text-white/70">完整且近期驗證的資訊，才會被列入人寵友好服務推薦。</p><div className="mt-5 space-y-3">{[{ label: "基本規範", done: true }, { label: "服務與設施", done: true }, { label: "最近確認", done: true }].map((item) => <div key={item.label} className="flex items-center gap-2 text-xs font-bold"><span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/15"><Check size={12} /></span>{item.label}</div>)}</div><div className="mt-6 rounded-xl bg-white/10 p-3"><p className="text-[10px] text-white/60">最近驗證</p><p className="mt-1 text-sm font-black">{merchant.lastVerified}</p><p className="mt-1 text-[10px] leading-relaxed text-white/65">來源：{merchant.dataSource}</p></div></aside>
        </section>

        <section className="mt-4 paper-card p-5"><div className="flex items-center gap-2"><Store size={18} className="text-brand-purple" /><h2 className="font-black text-brand-ink">人寵友好設施</h2></div><p className="mt-1 text-xs text-brand-sub">勾選實際提供的設施；儲存後會送至平台管理端留存與複核。</p><div className="mt-4 grid gap-2 sm:grid-cols-2">{["等候區可帶毛孩", "飲水站", "防滑地墊", "室內人寵共食區", "寵物停靠掛鉤", "無障礙入口"].map((feature) => <button key={feature} onClick={() => toggleFeature(feature)} className={`flex items-center gap-3 rounded-xl border p-3 text-left transition-all active:scale-[0.98] ${features.includes(feature) ? "border-brand-mint/45 bg-brand-mint/10" : "border-border bg-white"}`}><span className={`flex h-6 w-6 items-center justify-center rounded-full ${features.includes(feature) ? "bg-brand-mint text-white" : "bg-brand-lilac text-brand-sub"}`}>{features.includes(feature) ? <Check size={14} /> : <PawPrint size={13} />}</span><span className="text-sm font-bold text-brand-ink">{feature}</span></button>)}</div></section>

        <section className="mt-4 rounded-2xl border border-dashed border-brand-purple/25 bg-white/65 p-4"><div className="flex gap-3"><UsersRound size={18} className="mt-0.5 shrink-0 text-brand-purple" /><div><p className="text-sm font-black text-brand-ink">平台推薦會如何使用這些資料？</p><p className="mt-1 text-xs leading-relaxed text-brand-sub">系統會在會員探索服務或詢問 AI 毛孩照護管家時，依位置、服務類型、營業狀態與人寵友好規範提供合適的商家選項，並顯示資料驗證狀態。</p></div></div></section>

        <div className="mt-6 flex justify-end"><button onClick={saveProfile} className="inline-flex h-11 items-center gap-2 rounded-xl bg-brand-purple px-5 text-sm font-bold text-white shadow-lg shadow-brand-purple/20 transition-transform active:scale-95"><Save size={16} /> 儲存並送平台複核</button></div>
      </main>
    </div>
  );
}

function Field({ label, value, readOnly }: { label: string; value: string; readOnly?: boolean }) { return <label className="block"><span className="text-[11px] font-bold text-brand-sub">{label}</span><input value={value} readOnly={readOnly} className="mt-1.5 h-11 w-full rounded-xl border border-border bg-brand-cream/50 px-3 text-sm font-bold text-brand-ink outline-none" /></label>; }
