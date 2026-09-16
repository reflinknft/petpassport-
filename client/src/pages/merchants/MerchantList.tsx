import { useMemo, useState } from "react";
import { Filter, MapPin, PawPrint, Sparkles } from "lucide-react";
import TopBar from "@/components/TopBar";
import { MerchantCard } from "@/components/cards";
import { useAsyncData } from "@/hooks/useAsyncData";
import { api } from "@/lib/api";
import { ListSkeleton, Skeleton } from "@/components/Skeleton";
import { useDemo } from "@/contexts/DemoContext";

const CATS = ["全部", "餐飲休憩", "洗護美容", "醫療保健", "用品零食", "戶外活動"] as const;
const NEEDS = [
  { id: "all", label: "為你推薦", category: "全部" },
  { id: "rest", label: "一起休息", category: "餐飲休憩" },
  { id: "groom", label: "洗護美容", category: "洗護美容" },
  { id: "outdoor", label: "散步活動", category: "戶外活動" },
] as const;

/** 人寵友好服務探索：位置、需求、寵物條件與資料驗證狀態的前端展示。 */
export default function MerchantList() {
  const { currentPet } = useDemo();
  const [cat, setCat] = useState<(typeof CATS)[number]>("全部");
  const [openOnly, setOpenOnly] = useState(true);
  const { data: merchants, loading } = useAsyncData(
    () => api.getPetFriendlyRecommendations({ category: cat, openOnly }),
    [cat, openOnly],
  );

  const verifiedCount = useMemo(
    () => merchants?.filter((merchant) => merchant.verificationStatus === "已驗證").length ?? 0,
    [merchants],
  );

  if (loading) {
    return (
      <div className="min-h-full bg-brand-cream flex flex-col">
        <TopBar title="探索人寵友好服務" showBell />
        <div className="px-5 pt-4 space-y-4">
          <Skeleton className="h-44 rounded-[24px]" />
          <div className="flex gap-2">{CATS.slice(0, 4).map((category) => <Skeleton key={category} className="h-9 w-20 rounded-full" />)}</div>
          <ListSkeleton count={4} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-full bg-brand-cream flex flex-col pb-5">
      <TopBar title="探索人寵友好服務" showBell />

      <section className="px-5 pt-4">
        <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-brand-purple-dark via-brand-purple to-brand-mint p-5 text-white shadow-xl shadow-brand-purple/20">
          <div className="absolute -right-7 -top-8 h-32 w-32 rounded-full bg-white/10" />
          <div className="absolute -bottom-10 right-20 h-24 w-24 rounded-full bg-brand-coral/25 blur-xl" />
          <div className="relative">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-2.5 py-1 text-[10px] font-bold tracking-wide">
              <Sparkles size={11} /> JUMI FRIENDLY MATCH
            </span>
            <h2 className="mt-3 text-xl font-black">今天想和 {currentPet.name} 一起去哪裡？</h2>
            <p className="mt-1.5 max-w-[270px] text-xs leading-relaxed text-white/80">
              依位置、營業狀態與人寵友好規範，推薦適合 {currentPet.name} 的日常服務。
            </p>
            <div className="mt-4 flex items-center gap-2 text-[11px] font-bold text-white/90">
              <MapPin size={13} /> 目前搜尋範圍：台北市 · 5 公里內
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 pt-4">
        <p className="mb-2 text-[11px] font-black tracking-wide text-brand-sub">依今天的需求探索</p>
        <div className="flex gap-2 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {NEEDS.map((need) => (
            <button
              key={need.id}
              onClick={() => setCat(need.category)}
              className={`h-9 shrink-0 rounded-full px-3.5 text-xs font-bold transition-transform active:scale-95 ${cat === need.category ? "bg-brand-purple text-white shadow-md shadow-brand-purple/20" : "bg-white text-brand-ink"}`}
            >
              {need.label}
            </button>
          ))}
        </div>
      </section>

      <section className="px-5 pt-4 flex items-center gap-2">
        <div className="flex-1 flex gap-2 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {CATS.map((category) => (
            <button
              key={category}
              onClick={() => setCat(category)}
              className={`h-8 shrink-0 rounded-full px-3 text-[11px] font-bold transition-all active:scale-95 ${cat === category ? "bg-brand-lilac text-brand-purple-dark ring-1 ring-brand-purple/15" : "bg-white/70 text-brand-sub"}`}
            >
              {category}
            </button>
          ))}
        </div>
        <button
          onClick={() => setOpenOnly((value) => !value)}
          className={`flex h-8 shrink-0 items-center gap-1.5 rounded-full px-3 text-[11px] font-bold transition-all active:scale-95 ${openOnly ? "bg-brand-mint/15 text-brand-mint" : "bg-white text-brand-sub"}`}
          aria-pressed={openOnly}
        >
          <Filter size={12} /> {openOnly ? "營業中" : "全部狀態"}
        </button>
      </section>

      <section className="px-5 pt-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="flex items-center gap-1.5 text-base font-black text-brand-ink"><PawPrint size={16} className="text-brand-purple" /> 為 {currentPet.name} 推薦</h1>
            <p className="mt-1 text-[11px] leading-relaxed text-brand-sub">顯示推薦理由、寵物接待規範與最近資料驗證狀態。</p>
          </div>
          <span className="shrink-0 rounded-full bg-white px-2.5 py-1 text-[10px] font-bold text-brand-sub">已驗證 {verifiedCount} 間</span>
        </div>

        <div className="mt-3 space-y-3">
          {merchants?.map((merchant, index) => <MerchantCard key={merchant.id} merchant={merchant} index={index} />)}
          {merchants?.length === 0 && (
            <div className="paper-card py-12 text-center">
              <PawPrint size={24} className="mx-auto text-brand-purple/40" />
              <p className="mt-3 text-sm font-bold text-brand-ink">目前找不到符合條件的服務</p>
              <p className="mt-1 text-xs text-brand-sub">試著關閉「營業中」篩選，或改選其他需求。</p>
            </div>
          )}
        </div>
      </section>

      <section className="px-5 pt-5">
        <div className="rounded-2xl border border-dashed border-brand-purple/25 bg-white/65 p-3.5">
          <p className="text-[11px] font-bold text-brand-ink">推薦資料如何產生？</p>
          <p className="mt-1 text-[10px] leading-relaxed text-brand-sub">第一階段依距離、營業狀態、服務分類及商家填報的人寵友好規範排序。資料更新與驗證狀態會顯示於每個商家頁。</p>
        </div>
      </section>
    </div>
  );
}
