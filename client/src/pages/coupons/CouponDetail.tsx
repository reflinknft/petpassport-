import { useEffect, useState } from "react";
import { Headset, MapPin, ScanLine } from "lucide-react";
import { useLocation, useParams } from "wouter";
import TopBar from "@/components/TopBar";
import { COUPONS } from "@/lib/data";

/** 以 SVG 產生模擬 QR 圖樣（DEMO 用） */
function MockQr({ seed }: { seed: string }) {
  const cells = 21;
  const size = 200;
  const cell = size / cells;
  let hash = 0;
  for (let i = 0; i < seed.length; i++) hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;
  const rand = (i: number, j: number) => {
    const v = (hash ^ (i * 73856093) ^ (j * 19349663)) >>> 0;
    return v % 3 !== 0;
  };
  const finder = (x: number, y: number) => (
    <g key={`f${x}${y}`}>
      <rect x={x * cell} y={y * cell} width={cell * 7} height={cell * 7} fill="#5C2E0B" />
      <rect x={(x + 1) * cell} y={(y + 1) * cell} width={cell * 5} height={cell * 5} fill="#fff" />
      <rect x={(x + 2) * cell} y={(y + 2) * cell} width={cell * 3} height={cell * 3} fill="#5C2E0B" />
    </g>
  );
  return (
    <svg viewBox={`0 0 ${size} ${size}`} className="w-full h-full">
      <rect width={size} height={size} fill="#fff" />
      {Array.from({ length: cells }).map((_, i) =>
        Array.from({ length: cells }).map((_, j) => {
          const inFinder = (i < 8 && j < 8) || (i > cells - 9 && j < 8) || (i < 8 && j > cells - 9);
          if (inFinder || !rand(i, j)) return null;
          return <rect key={`${i}-${j}`} x={i * cell} y={j * cell} width={cell} height={cell} fill="#5C2E0B" />;
        })
      )}
      {finder(0, 0)}
      {finder(cells - 7, 0)}
      {finder(0, cells - 7)}
    </svg>
  );
}

/** P27 票券詳情：動態 QR + 倒數 */
export default function CouponDetail() {
  const { id } = useParams<{ id: string }>();
  const [, navigate] = useLocation();
  const coupon = COUPONS.find((c) => c.id === id) ?? COUPONS[0];
  const [showQr, setShowQr] = useState(false);
  const [tick, setTick] = useState(0);

  // 動態 QR：每 30 秒更新（DEMO 以秒數模擬）
  useEffect(() => {
    const t = setInterval(() => setTick((v) => v + 1), 30000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="min-h-full bg-brand-cream flex flex-col">
      <TopBar showBack title="票券詳情" />
      <div className="flex-1 px-5 pt-5 pb-8">
        <div className="paper-card overflow-hidden journal-enter">
          <div className="flex">
            <img src={coupon.image} alt={coupon.title} className="w-24 h-24 object-cover shrink-0" />
            <div className="p-4">
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-brand-mint/15 text-brand-mint">可使用</span>
              <h1 className="mt-1.5 font-black text-brand-ink">{coupon.title}</h1>
              <p className="text-[11px] text-muted-foreground mt-0.5">{coupon.merchant}</p>
            </div>
          </div>
          <div className="ticket-notch border-t border-dashed border-border" />
          <div className="p-5 text-center">
            <p className="text-[11px] text-muted-foreground">使用期限至 {coupon.expireDate}</p>
            <button
              onClick={() => setShowQr(true)}
              className="mt-4 w-full h-12 rounded-2xl bg-brand-purple-dark text-white font-bold flex items-center justify-center gap-2 active:scale-[0.97] transition-transform"
            >
              <ScanLine size={18} /> 出示票券
            </button>
            <p className="mt-3 text-[10px] text-muted-foreground">核銷碼：<span className="font-mono font-bold text-brand-ink">{coupon.code}</span></p>
          </div>
        </div>

        {/* 使用說明 */}
        <div className="mt-4 paper-card p-5 journal-enter journal-enter-1">
          <h2 className="font-black text-brand-ink text-sm">使用說明</h2>
          <ul className="mt-3 space-y-2 text-xs text-muted-foreground leading-relaxed">
            <li>· 到店消費時出示動態 QR 或核銷碼，由店員掃碼完成核銷。</li>
            <li>· QR 每 30 秒自動更新，截圖無法使用。</li>
            <li>· 每隻寵物每次限用一張，需提前一日預約。</li>
          </ul>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3 journal-enter journal-enter-2">
          <button
            onClick={() => navigate(`/merchants/${coupon.merchantId}`)}
            className="h-11 rounded-xl bg-white font-bold text-sm text-brand-ink flex items-center justify-center gap-1.5 active:scale-95 transition-transform"
          >
            <MapPin size={15} /> 門店導航
          </button>
          <button className="h-11 rounded-xl bg-white font-bold text-sm text-brand-ink flex items-center justify-center gap-1.5 active:scale-95 transition-transform">
            <Headset size={15} /> 聯絡客服
          </button>
        </div>
      </div>

      {/* 放大 QR 全螢幕（提高亮度） */}
      {showQr && (
        <div className="fixed inset-0 z-50 bg-white flex flex-col items-center justify-center px-8" style={{ filter: "brightness(1.05)" }}>
          <p className="text-xs font-bold text-muted-foreground">出示給店員掃碼</p>
          <h2 className="mt-1 text-lg font-black text-brand-ink">{coupon.title}</h2>
          <div className="mt-6 w-64 h-64 p-4 rounded-3xl border-4 border-brand-purple-dark/10 shadow-2xl">
            <MockQr seed={`${coupon.code}-${tick}`} />
          </div>
          <p className="mt-4 font-mono text-sm font-bold text-brand-ink">{coupon.code}</p>
          <p className="mt-1 text-[10px] text-muted-foreground">QR 每 30 秒更新 · 截圖無效</p>
          <button
            onClick={() => navigate(`/coupons/${coupon.id}/redeemed`)}
            className="mt-8 w-full max-w-[280px] h-12 rounded-2xl bg-brand-purple text-white font-bold active:scale-[0.97] transition-transform"
          >
            （DEMO）模擬店員已完成核銷
          </button>
          <button onClick={() => setShowQr(false)} className="mt-3 text-sm font-bold text-muted-foreground active:scale-95">
            關閉
          </button>
        </div>
      )}
    </div>
  );
}
