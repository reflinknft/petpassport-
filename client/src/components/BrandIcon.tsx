import { ASSETS } from "@/lib/data";

/**
 * 品牌圖示：優先使用生成的 LOGO；若仍在生成中（placeholder），
 * 以橘色圓形 + 白色 p 作為品牌一致的臨時圖示。
 */
export default function BrandIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <span className={`relative inline-block ${className}`}>
      <img
        src={ASSETS.logoIcon}
        alt="毛孩護照"
        className="absolute inset-0 w-full h-full object-contain"
        onError={(e) => ((e.target as HTMLImageElement).style.display = "none")}
      />
      <span className="absolute inset-0 -z-10 rounded-full bg-brand-orange flex items-center justify-center">
        <span className="text-white font-black" style={{ fontSize: "55%" }}>p</span>
      </span>
    </span>
  );
}
