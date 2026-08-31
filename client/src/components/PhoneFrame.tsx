import type { ReactNode } from "react";
import BrandIcon from "@/components/BrandIcon";
import { ASSETS } from "@/lib/data";

/**
 * 手機殼：桌機時顯示裝置框架，手機上則全螢幕。
 * 內容區可捲動，底部導覽由子頁面自行放置。
 */
export default function PhoneFrame({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-dvh w-full flex items-center justify-center bg-brand-cream md:bg-[radial-gradient(1200px_600px_at_50%_-10%,oklch(0.945_0.03_80),oklch(0.975_0.012_80))]">
      {/* 桌機左側品牌區（僅 md 以上顯示） */}
      <aside className="hidden lg:flex flex-col justify-center gap-6 pr-16 max-w-md">
        <BrandIcon className="w-24 h-24" />
        <div>
          <h1 className="text-4xl font-black text-brand-brown leading-tight">毛孩護照</h1>
          <p className="mt-1 text-lg font-bold text-brand-orange">Pet Passport</p>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          照顧毛孩，也累積每一份回饋。這是毛孩點數平台的高擬真前端 DEMO，右側手機內可完整體驗註冊、建檔、任務、兌換與核銷流程。
        </p>
        <div className="flex gap-2 text-xs text-muted-foreground">
          <span className="px-3 py-1 rounded-full bg-brand-apricot">Mobile-first PWA</span>
          <span className="px-3 py-1 rounded-full bg-brand-apricot">390 × 844</span>
          <span className="px-3 py-1 rounded-full bg-brand-apricot">DEMO V1.0</span>
        </div>
      </aside>

      <div className="phone-shell flex flex-col">
        {/* 狀態列 */}
        <div className="hidden md:flex items-center justify-between px-8 pt-4 pb-1 text-xs font-bold text-brand-brown/80 select-none">
          <span className="tabular">9:41</span>
          <div className="flex items-center gap-1.5">
            <span className="inline-block w-4 h-2.5 rounded-[3px] border border-brand-brown/60 relative">
              <span className="absolute inset-[2px] right-[4px] bg-brand-brown/70 rounded-[1px]" />
            </span>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto overflow-x-hidden relative">{children}</div>
      </div>
    </div>
  );
}
