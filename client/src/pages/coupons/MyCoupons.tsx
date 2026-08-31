import { useState } from "react";
import { useLocation } from "wouter";
import TopBar from "@/components/TopBar";
import { CouponCard } from "@/components/cards";
import { COUPONS } from "@/lib/data";

const TABS = ["可使用", "已使用", "已失效"] as const;

/** P26 我的票券 */
export default function MyCoupons() {
  const [, navigate] = useLocation();
  const [tab, setTab] = useState<(typeof TABS)[number]>("可使用");
  const statusMap = { 可使用: "usable", 已使用: "used", 已失效: "expired" } as const;
  const list = COUPONS.filter((c) => c.status === statusMap[tab]);

  return (
    <div className="min-h-full bg-brand-cream">
      <TopBar showBack title="我的票券" />
      <div className="px-5 pt-4 flex gap-2">
        {TABS.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-4 h-9 rounded-full text-sm font-bold transition-all active:scale-95 ${
              tab === t ? "bg-brand-brown text-white" : "bg-white text-muted-foreground"
            }`}
          >
            {t}
          </button>
        ))}
      </div>
      <div className="px-5 pt-4 pb-8 space-y-4">
        {list.map((c) => (
          <CouponCard key={c.id} coupon={c} onClick={() => navigate(`/coupons/${c.id}`)} />
        ))}
        {list.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-sm font-bold text-muted-foreground">目前沒有{tab}的票券</p>
            <button onClick={() => navigate("/rewards")} className="mt-4 text-sm font-bold text-brand-orange active:scale-95">
              去權益中心看看
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
