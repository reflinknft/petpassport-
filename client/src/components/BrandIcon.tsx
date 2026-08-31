/** 品牌圖示：使用官方 LOGO */
export default function BrandIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <img
      src="/manus-storage/Pet_Possport_8a7a6cdd.png"
      alt="毛孩護照"
      className={`${className} object-contain`}
    />
  );
}
