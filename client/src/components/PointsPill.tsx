import { Coins } from "lucide-react";
import { useLocation } from "wouter";
import { useDemo } from "@/contexts/DemoContext";

/** 點數膠囊：顯示可用點數，點擊進入錢包 */
export default function PointsPill() {
  const { points } = useDemo();
  const [, navigate] = useLocation();
  return (
    <button
      onClick={() => navigate("/wallet")}
      className="flex items-center gap-1.5 px-3.5 h-9 rounded-full bg-brand-purple text-white shadow-md shadow-brand-purple/30 active:scale-95 transition-transform"
    >
      <Coins size={15} className="text-brand-coral" />
      <span className="text-sm font-extrabold tabular">{points.toLocaleString()}</span>
      <span className="text-[11px] font-medium text-white/70">點</span>
    </button>
  );
}
