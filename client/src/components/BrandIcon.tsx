/** 品牌圖示：使用官方 LOGO */
export default function BrandIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <img
      src="/manus-storage/Pet_Possport-1_fa601ba5.png"
      alt="毛孩護照"
      className={`${className} object-contain`}
    />
  );
}
