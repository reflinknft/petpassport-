import { BadgeCheck, CalendarDays, CheckCircle2, Clock3, Heart, Info, MapPin, Navigation, PawPrint, Phone, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { useLocation, useParams } from "wouter";
import TopBar from "@/components/TopBar";
import { RewardCard } from "@/components/cards";
import { MERCHANTS, REWARDS } from "@/lib/data";
import { toast } from "sonner";

/** 商家詳情：完整呈現人寵友好服務規範與推薦依據。 */
export default function MerchantDetail() {
  const { id } = useParams<{ id: string }>();
  const [, navigate] = useLocation();
  const merchant = MERCHANTS.find((item) => item.id === id) ?? MERCHANTS[0];
  const rewards = REWARDS.filter((reward) => reward.merchantId === merchant.id);
  const [fav, setFav] = useState(false);

  const showDirections = () => toast.success("已準備導航資訊", { description: merchant.address });
  const callMerchant = () => toast.message("撥號功能示意", { description: `將聯繫 ${merchant.phone}` });

  return (
    <div className="min-h-full bg-brand-cream">
      <TopBar showBack title="服務詳情" />
      <div className="relative h-52">
        <img src={merchant.image} alt={merchant.name} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-purple-dark/45 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-5 flex items-center gap-2">
          <span className="inline-flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-black text-brand-purple-dark shadow-sm"><PawPrint size={11} /> 人寵友好服務</span>
          <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-black shadow-sm ${merchant.verificationStatus === "已驗證" ? "bg-brand-mint text-white" : "bg-brand-coral text-white"}`}><BadgeCheck size={11} /> {merchant.verificationStatus}</span>
        </div>
        <button
          onClick={() => setFav((value) => !value)}
          className="absolute right-5 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-md transition-transform active:scale-90"
          aria-label={fav ? "取消收藏" : "收藏"}
        >
          <Heart size={18} className={fav ? "fill-brand-coral text-brand-brick" : "text-brand-ink"} />
        </button>
      </div>

      <div className="relative -mt-6 px-5 pb-8">
        <section className="paper-card p-5 journal-enter">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h1 className="text-xl font-black text-brand-ink">{merchant.name}</h1>
              <p className="mt-0.5 text-xs text-muted-foreground">{merchant.branch} · {merchant.category}</p>
            </div>
            <span className={`shrink-0 rounded-full px-2.5 py-1 text-[11px] font-bold ${merchant.open ? "bg-brand-mint/15 text-brand-mint" : "bg-brand-lilac text-muted-foreground"}`}>{merchant.open ? "營業中" : "休息中"}</span>
          </div>

          <div className="mt-4 rounded-2xl bg-brand-lilac/70 p-3.5">
            <div className="flex items-center gap-2 text-xs font-black text-brand-purple-dark"><SparkleIcon /> 為你推薦的原因</div>
            <ul className="mt-2 space-y-1.5">
              {merchant.recommendationReasons.map((reason) => <li key={reason} className="flex items-start gap-1.5 text-[11px] leading-relaxed text-brand-ink"><CheckCircle2 size={13} className="mt-0.5 shrink-0 text-brand-mint" /> {reason}</li>)}
            </ul>
          </div>

          <div className="mt-4 space-y-2.5 text-sm">
            <p className="flex items-center gap-2 text-muted-foreground"><Clock3 size={14} className="text-brand-purple" /> {merchant.hours}</p>
            <p className="flex items-center gap-2 text-muted-foreground"><MapPin size={14} className="text-brand-purple" /> {merchant.address}（{merchant.distance}）</p>
            <p className="flex items-center gap-2 text-muted-foreground"><Phone size={14} className="text-brand-purple" /> {merchant.phone}</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {merchant.services.map((service) => <span key={service} className="rounded-full bg-brand-lilac px-2.5 py-1 text-[11px] font-bold text-brand-ink">{service}</span>)}
          </div>
          <div className="mt-5 grid grid-cols-2 gap-3">
            <button onClick={showDirections} className="flex h-11 items-center justify-center gap-1.5 rounded-xl bg-brand-purple-dark text-sm font-bold text-white transition-transform active:scale-95"><Navigation size={15} /> 導航</button>
            <button onClick={callMerchant} className="flex h-11 items-center justify-center gap-1.5 rounded-xl border-2 border-brand-purple-dark/15 text-sm font-bold text-brand-ink transition-transform active:scale-95"><Phone size={15} /> 撥號</button>
          </div>
        </section>

        <section className="mt-6">
          <div className="flex items-center gap-2"><ShieldCheck size={17} className="text-brand-mint" /><h2 className="font-black text-brand-ink">人寵友好規範</h2></div>
          <div className="mt-3 paper-card divide-y divide-border/70 overflow-hidden">
            <InfoRow label="可接待對象" value={merchant.petTypes.join("、")} icon={<PawPrint size={15} />} />
            <InfoRow label="體型與入店規範" value={merchant.sizePolicy} icon={<PawPrint size={15} />} />
            <InfoRow label="預約方式" value={merchant.booking} icon={<CalendarDays size={15} />} />
          </div>
          <div className="mt-3 rounded-2xl border border-brand-coral/20 bg-brand-yellow-light/50 p-3.5">
            <p className="text-[11px] font-black text-brand-ink">到店前提醒</p>
            <p className="mt-1 text-[11px] leading-relaxed text-brand-sub">{merchant.friendlyNotes}</p>
          </div>
        </section>

        <section className="mt-6">
          <h2 className="font-black text-brand-ink">友好設施與服務</h2>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {merchant.friendlyFeatures.map((feature) => <div key={feature} className="rounded-2xl bg-white p-3 text-center shadow-sm"><PawPrint size={17} className="mx-auto text-brand-purple" /><p className="mt-1.5 text-[10px] font-bold leading-snug text-brand-ink">{feature}</p></div>)}
          </div>
        </section>

        <section className="mt-6 rounded-2xl border border-dashed border-brand-purple/25 bg-white/65 p-3.5">
          <div className="flex items-start gap-2.5"><BadgeCheck size={17} className={merchant.verificationStatus === "已驗證" ? "mt-0.5 text-brand-mint" : "mt-0.5 text-brand-coral"} /><div><p className="text-[11px] font-black text-brand-ink">資料狀態：{merchant.verificationStatus}</p><p className="mt-1 text-[10px] leading-relaxed text-brand-sub">最近確認：{merchant.lastVerified} · {merchant.dataSource}。若實際規範不同，歡迎回報協助更新。</p></div></div>
        </section>

        {rewards.length > 0 && (
          <section className="mt-6">
            <h2 className="font-black text-brand-ink">適用權益</h2>
            <div className="mt-3 flex gap-3 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {rewards.map((reward, index) => <RewardCard key={reward.id} reward={reward} index={index} />)}
            </div>
          </section>
        )}

        <button onClick={() => navigate("/tasks/t4")} className="passport-frame mt-5 flex w-full items-center justify-between bg-white/60 p-4 text-left transition-transform active:scale-[0.98]">
          <div><p className="text-sm font-bold text-brand-ink">到店任務：首次洗護體驗</p><p className="text-[11px] text-muted-foreground">完成服務與核銷後自動記錄</p></div><span className="text-sm font-extrabold text-brand-purple tabular">+80 點</span>
        </button>
      </div>
    </div>
  );
}

function SparkleIcon() { return <span className="flex h-5 w-5 items-center justify-center rounded-lg bg-brand-purple text-xs text-white">✦</span>; }

function InfoRow({ label, value, icon }: { label: string; value: string; icon: React.ReactNode }) {
  return <div className="flex gap-3 p-3.5"><span className="mt-0.5 text-brand-purple">{icon}</span><div className="min-w-0"><p className="text-[10px] font-bold text-brand-sub">{label}</p><p className="mt-0.5 text-[11px] leading-relaxed text-brand-ink">{value}</p></div></div>;
}
