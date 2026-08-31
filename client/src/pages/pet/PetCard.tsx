import { Phone, Share2 } from "lucide-react";
import BrandIcon from "@/components/BrandIcon";
import { useParams } from "wouter";
import TopBar from "@/components/TopBar";
import { ASSETS, PETS } from "@/lib/data";

/** P11 電子寵物卡 */
export default function PetCard() {
  const { id } = useParams<{ id: string }>();
  const pet = PETS.find((p) => p.id === id) ?? PETS[0];

  return (
    <div className="min-h-full bg-brand-cream">
      <TopBar showBack title="電子寵物卡" />
      <div className="px-5 pt-6 pb-8">
        {/* 護照卡 */}
        <div className="rounded-3xl bg-brand-brown text-white overflow-hidden shadow-xl shadow-brand-brown/30 journal-enter">
          <div className="p-6 pb-4">
            <div className="flex items-center justify-between">
              <BrandIcon className="w-10 h-10" />
              <span className="text-[10px] font-bold tracking-[0.2em] text-white/60">PET PASSPORT</span>
            </div>
            <div className="mt-5 flex items-center gap-4">
              <img src={pet.photo} alt={pet.name} className="w-20 h-20 rounded-2xl object-cover border-2 border-brand-orange" />
              <div>
                <h1 className="text-2xl font-black">{pet.name}</h1>
                <p className="mt-1 text-xs text-white/70">{pet.breed}</p>
                <p className="text-xs text-white/70">{pet.age} 歲 · {pet.gender === "female" ? "女生" : "男生"} · {pet.weight} kg</p>
              </div>
            </div>
          </div>
          <div className="ticket-notch border-t border-dashed border-white/20" style={{ ["--brand-cream" as string]: "var(--brand-brown)" }} />
          <div className="p-6 pt-4 flex items-center justify-between">
            <div>
              <p className="text-[10px] text-white/60">護照編號</p>
              <p className="font-mono font-bold text-sm">PP-{pet.id.toUpperCase()}-2026</p>
            </div>
            {/* 模擬 QR */}
            <div className="w-16 h-16 rounded-xl bg-white p-1.5 grid grid-cols-5 gap-0.5">
              {Array.from({ length: 25 }).map((_, i) => (
                <span key={i} className={`rounded-[1px] ${(i * 7 + 3) % 3 !== 0 ? "bg-brand-brown" : "bg-transparent"}`} />
              ))}
            </div>
          </div>
        </div>

        {/* 緊急聯絡 */}
        <div className="mt-4 paper-card p-5 journal-enter journal-enter-1">
          <h2 className="font-black text-brand-brown text-sm">緊急聯絡資訊</h2>
          <div className="mt-3 space-y-2.5 text-sm">
            <div className="flex justify-between"><span className="text-muted-foreground">飼主</span><span className="font-bold text-brand-brown">林小毛</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">聯絡電話</span><span className="font-bold text-brand-brown">0912-***-678</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">合作醫院</span><span className="font-bold text-brand-brown">安心動物醫院</span></div>
          </div>
          <button className="mt-4 w-full h-11 rounded-xl bg-brand-brick text-white font-bold text-sm flex items-center justify-center gap-2 active:scale-[0.97] transition-transform">
            <Phone size={15} /> 一鍵撥打緊急聯絡電話
          </button>
        </div>

        <button className="mt-4 w-full h-12 rounded-2xl border-2 border-brand-brown/15 text-brand-brown font-bold flex items-center justify-center gap-2 active:scale-[0.97] transition-transform journal-enter journal-enter-2">
          <Share2 size={16} /> 分享寵物卡
        </button>
        <p className="mt-4 text-center text-[10px] text-muted-foreground/70">出示此卡可於合作商家快速核身；敏感資訊僅經授權後顯示。</p>
      </div>
    </div>
  );
}
