import { useState } from "react";
import { Map } from "lucide-react";
import TopBar from "@/components/TopBar";
import { MerchantCard } from "@/components/cards";
import { MERCHANTS } from "@/lib/data";

const CATS = ["全部", "洗護美容", "醫療保健", "用品零食"] as const;

/** P29 商家列表 */
export default function MerchantList() {
  const [cat, setCat] = useState<(typeof CATS)[number]>("全部");
  const list = MERCHANTS.filter((m) => cat === "全部" || m.category === cat);

  return (
    <div className="min-h-full bg-brand-cream flex flex-col">
      <TopBar title="合作商家" showBell />
      <div className="px-5 pt-4 flex items-center gap-2">
        <div className="flex-1 flex gap-2 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {CATS.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`px-4 h-9 rounded-full text-sm font-bold whitespace-nowrap transition-all active:scale-95 ${
                cat === c ? "bg-brand-purple text-white" : "bg-white text-muted-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        <button className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-brand-ink active:scale-95 shrink-0" aria-label="地圖">
          <Map size={16} />
        </button>
      </div>
      <div className="flex-1 px-5 pt-4 pb-6 space-y-3">
        {list.map((m, i) => (
          <MerchantCard key={m.id} merchant={m} index={i} />
        ))}
        {list.length === 0 && <p className="py-16 text-center text-sm text-muted-foreground">此分類目前沒有合作商家</p>}
      </div>
    </div>
  );
}
