import { useEffect } from "react";
import BrandIcon from "@/components/BrandIcon";
import { useLocation } from "wouter";
import { ASSETS } from "@/lib/data";

/** P00 品牌啟動畫面 */
export default function Splash() {
  const [, navigate] = useLocation();
  useEffect(() => {
    const t = setTimeout(() => navigate("/welcome"), 1800);
    return () => clearTimeout(t);
  }, [navigate]);
  return (
    <div className="min-h-full flex flex-col items-center justify-center bg-brand-cream px-8">
      <BrandIcon className="w-28 h-28 stamp-in" />
      <h1 className="mt-6 text-3xl font-black text-brand-ink journal-enter">毛孩護照</h1>
      <p className="mt-1 text-sm font-bold text-brand-purple journal-enter journal-enter-1">Pet Passport</p>
      <p className="mt-8 text-xs text-muted-foreground journal-enter journal-enter-2">照顧毛孩，也累積每一份回饋</p>
      <p className="absolute bottom-10 text-[10px] text-muted-foreground/60">DEMO V1.0 · 僅供展示</p>
    </div>
  );
}
