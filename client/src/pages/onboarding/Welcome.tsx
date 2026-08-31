import { ChevronRight, Gift, PawPrint, QrCode, Sparkles } from "lucide-react";
import BrandIcon from "@/components/BrandIcon";
import { useLocation } from "wouter";
import { ASSETS, REWARDS } from "@/lib/data";

/** P01 訪客首頁 */
export default function Welcome() {
  const [, navigate] = useLocation();
  return (
    <div className="min-h-full bg-brand-cream pb-8">
      {/* 頂部品牌列 */}
      <header className="flex items-center justify-between px-5 pt-5">
        <div className="flex items-center gap-2">
          <BrandIcon className="w-9 h-9" />
          <span className="font-black text-brand-ink">毛孩護照</span>
        </div>
        <button onClick={() => navigate("/login")} className="text-sm font-bold text-brand-purple active:scale-95 transition-transform">
          登入
        </button>
      </header>

      {/* 首屏價值主張 */}
      <section className="px-5 mt-6 journal-enter">
        <p className="text-xs font-bold text-brand-purple tracking-wider">毛孩點數平台</p>
        <h1 className="mt-2 text-[30px] leading-tight font-black gradient-title">
          照顧毛孩，<br />也累積每一份回饋
        </h1>
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
          建立毛孩護照，完成照護任務、閱讀與課程都能累積點數，兌換洗護、健檢與用品優惠。
        </p>
        <div className="mt-5 flex gap-3">
          <button
            onClick={() => navigate("/login")}
            className="flex-1 h-12 rounded-full bg-brand-purple text-white font-bold shadow-lg shadow-brand-purple/35 active:scale-[0.97] transition-transform"
          >
            免費加入
          </button>
          <button
            onClick={() => navigate("/rewards")}
            className="h-12 px-5 rounded-full border-2 border-brand-purple/20 font-bold text-brand-purple-dark active:scale-[0.97] transition-transform"
          >
            先看看權益
          </button>
        </div>
      </section>

      {/* 主視覺 */}
      <section className="px-5 mt-6 journal-enter journal-enter-1">
        <div className="relative rounded-3xl overflow-hidden shadow-xl shadow-brand-purple-dark/10">
          <img src={ASSETS.heroPets} alt="毛孩日常" className="w-full h-44 object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-purple-dark/50 to-transparent" />
          <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
            <p className="text-white text-sm font-bold">每一次照護，都是一枚戳章</p>
            <span className="stamp text-[10px] px-2.5 py-1 bg-white/90">PET PASSPORT</span>
          </div>
        </div>
      </section>

      {/* 三個好處 */}
      <section className="px-5 mt-8 journal-enter journal-enter-2">
        <h2 className="font-black text-brand-ink">為什麼加入毛孩護照？</h2>
        <div className="mt-3 space-y-3">
          {[
            { icon: PawPrint, title: "寵物優先", body: "首頁就是毛孩的照護卡，任務圍繞牠的健康與日常。" },
            { icon: Sparkles, title: "點數透明", body: "每一點都有來源、效期與明細，帳務清清楚楚。" },
            { icon: Gift, title: "權益實用", body: "洗護、健檢、用品優惠，點數直接換成照顧毛孩的資源。" },
          ].map(({ icon: Icon, title, body }) => (
            <div key={title} className="paper-card p-4 flex gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-lilac flex items-center justify-center shrink-0">
                <Icon size={18} className="text-brand-purple" />
              </div>
              <div>
                <p className="font-bold text-brand-ink text-sm">{title}</p>
                <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 熱門權益預覽 */}
      <section className="mt-8 journal-enter journal-enter-3">
        <div className="px-5 flex items-center justify-between">
          <h2 className="font-black text-brand-ink">熱門權益</h2>
          <button onClick={() => navigate("/rewards")} className="text-xs font-bold text-brand-purple flex items-center">
            全部 <ChevronRight size={14} />
          </button>
        </div>
        <div className="mt-3 flex gap-3 overflow-x-auto px-5 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {REWARDS.map((r, i) => (
            <div key={r.id} className="w-40 shrink-0">
              <div className="paper-card overflow-hidden">
                <img src={r.image} alt={r.title} className="w-full h-24 object-cover" />
                <div className="p-3">
                  <p className="text-[13px] font-bold text-brand-ink line-clamp-1">{r.title}</p>
                  <p className="mt-1 text-brand-purple font-extrabold text-sm tabular">{r.points} 點</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 底部 CTA */}
      <section className="px-5 mt-8 journal-enter journal-enter-4">
        <div className="passport-frame p-5 text-center bg-white/60">
          <QrCode size={28} className="mx-auto text-brand-purple" />
          <p className="mt-2 font-bold text-brand-ink text-sm">從 HEHO 文章或活動 QR 來的朋友</p>
          <p className="mt-1 text-xs text-muted-foreground">登入後自動領取專屬新手任務與 100 點見面禮</p>
          <button
            onClick={() => navigate("/login")}
            className="mt-4 w-full h-11 rounded-xl bg-brand-purple-dark text-white font-bold active:scale-[0.97] transition-transform"
          >
            立即領取新手禮
          </button>
        </div>
        <p className="mt-6 text-center text-[10px] text-muted-foreground/70">
          常見問題 · 隱私權政策 · 本服務為前端 DEMO，資料僅供展示
        </p>
      </section>
    </div>
  );
}
