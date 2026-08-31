import { useLocation, useParams } from "wouter";
import { useDemo } from "@/contexts/DemoContext";
import { COUPONS } from "@/lib/data";

/** P28 核銷結果 */
export default function Redeemed() {
  const { id } = useParams<{ id: string }>();
  const [, navigate] = useLocation();
  const { points } = useDemo();
  const coupon = COUPONS.find((c) => c.id === id) ?? COUPONS[0];
  const now = new Date();
  const timeStr = `${now.getFullYear()}/${String(now.getMonth() + 1).padStart(2, "0")}/${String(now.getDate()).padStart(2, "0")} ${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;

  return (
    <div className="min-h-full bg-brand-cream flex flex-col items-center justify-center px-8 text-center">
      <div className="stamp stamp-in w-36 h-36 flex flex-col items-center justify-center bg-white shadow-xl" style={{ borderColor: "var(--brand-matcha)", color: "var(--brand-matcha)" }}>
        <span className="text-[10px] font-bold tracking-widest">REDEEMED</span>
        <span className="mt-1 text-lg font-black">已使用</span>
        <span className="text-[10px] font-bold">{timeStr.split(" ")[0]}</span>
      </div>
      <h1 className="mt-8 text-2xl font-black text-brand-brown journal-enter">核銷成功</h1>
      <p className="mt-2 text-sm text-muted-foreground journal-enter journal-enter-1">
        「{coupon.title}」已於 {coupon.merchant} 完成核銷。
      </p>
      <div className="mt-6 paper-card p-5 w-full journal-enter journal-enter-2 text-left">
        <div className="flex justify-between text-sm"><span className="text-muted-foreground">核銷時間</span><span className="font-bold text-brand-brown tabular">{timeStr}</span></div>
        <div className="flex justify-between text-sm mt-2.5"><span className="text-muted-foreground">核銷門店</span><span className="font-bold text-brand-brown">{coupon.merchant}</span></div>
        <div className="flex justify-between text-sm mt-2.5"><span className="text-muted-foreground">剩餘點數</span><span className="font-black text-brand-orange tabular">{points.toLocaleString()} 點</span></div>
      </div>
      <div className="mt-6 w-full space-y-3 journal-enter journal-enter-3">
        <button
          onClick={() => navigate("/home")}
          className="w-full h-12 rounded-2xl bg-brand-orange text-white font-bold shadow-lg shadow-brand-orange/30 active:scale-[0.97] transition-transform"
        >
          回到首頁
        </button>
        <button
          onClick={() => navigate("/coupons")}
          className="w-full h-12 rounded-2xl border-2 border-brand-brown/15 text-brand-brown font-bold active:scale-[0.97] transition-transform"
        >
          查看我的票券
        </button>
      </div>
    </div>
  );
}
