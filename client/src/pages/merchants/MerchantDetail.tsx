import { Clock3, Heart, MapPin, Navigation, Phone } from "lucide-react";
import { useState } from "react";
import { useLocation, useParams } from "wouter";
import TopBar from "@/components/TopBar";
import { RewardCard } from "@/components/cards";
import { MERCHANTS, REWARDS } from "@/lib/data";

/** P31 商家詳情 */
export default function MerchantDetail() {
  const { id } = useParams<{ id: string }>();
  const [, navigate] = useLocation();
  const merchant = MERCHANTS.find((m) => m.id === id) ?? MERCHANTS[0];
  const rewards = REWARDS.filter((r) => r.merchantId === merchant.id);
  const [fav, setFav] = useState(false);

  return (
    <div className="min-h-full bg-brand-cream">
      <TopBar showBack title="商家詳情" />
      <div className="relative h-48">
        <img src={merchant.image} alt={merchant.name} className="w-full h-full object-cover" />
        <button
          onClick={() => setFav(!fav)}
          className="absolute top-4 right-5 w-10 h-10 rounded-full bg-white/90 shadow-md flex items-center justify-center active:scale-90 transition-transform"
          aria-label="收藏"
        >
          <Heart size={18} className={fav ? "fill-brand-coral text-brand-brick" : "text-brand-ink"} />
        </button>
      </div>
      <div className="px-5 -mt-6 relative pb-8">
        <div className="paper-card p-5 journal-enter">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-xl font-black text-brand-ink">{merchant.name}</h1>
              <p className="mt-0.5 text-xs text-muted-foreground">{merchant.branch} · {merchant.category}</p>
            </div>
            <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full shrink-0 ${merchant.open ? "bg-brand-mint/15 text-brand-mint" : "bg-brand-lilac text-muted-foreground"}`}>
              {merchant.open ? "營業中" : "休息中"}
            </span>
          </div>
          <div className="mt-4 space-y-2.5 text-sm">
            <p className="flex items-center gap-2 text-muted-foreground"><Clock3 size={14} className="text-brand-purple" /> {merchant.hours}</p>
            <p className="flex items-center gap-2 text-muted-foreground"><MapPin size={14} className="text-brand-purple" /> {merchant.address}（{merchant.distance}）</p>
            <p className="flex items-center gap-2 text-muted-foreground"><Phone size={14} className="text-brand-purple" /> {merchant.phone}</p>
          </div>
          <div className="mt-4 flex gap-1.5 flex-wrap">
            {merchant.services.map((s) => (
              <span key={s} className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-brand-lilac text-brand-ink">{s}</span>
            ))}
          </div>
          <div className="mt-5 grid grid-cols-2 gap-3">
            <button className="h-11 rounded-xl bg-brand-purple-dark text-white font-bold text-sm flex items-center justify-center gap-1.5 active:scale-95 transition-transform">
              <Navigation size={15} /> 導航
            </button>
            <button className="h-11 rounded-xl border-2 border-brand-purple-dark/15 text-brand-ink font-bold text-sm flex items-center justify-center gap-1.5 active:scale-95 transition-transform">
              <Phone size={15} /> 撥號
            </button>
          </div>
        </div>

        {/* 適用權益 */}
        {rewards.length > 0 && (
          <div className="mt-6">
            <h2 className="font-black text-brand-ink">適用權益</h2>
            <div className="mt-3 flex gap-3 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {rewards.map((r, i) => (
                <RewardCard key={r.id} reward={r} index={i} />
              ))}
            </div>
          </div>
        )}

        {/* 到店任務 */}
        <button
          onClick={() => navigate("/tasks/t4")}
          className="mt-4 w-full passport-frame p-4 flex items-center justify-between bg-white/60 active:scale-[0.98] transition-transform"
        >
          <div className="text-left">
            <p className="text-sm font-bold text-brand-ink">到店任務：首次洗護體驗</p>
            <p className="text-[11px] text-muted-foreground">完成後 +80 點</p>
          </div>
          <span className="text-brand-purple font-extrabold text-sm tabular">+80 點</span>
        </button>
      </div>
    </div>
  );
}
