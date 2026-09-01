import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { BriefcaseBusiness, Coins, Gift, Home, PawPrint, User } from "lucide-react";
import BrandIcon from "./BrandIcon";
import { useDemo } from "@/contexts/DemoContext";

/** 響應式外殼：PC 顯示頂部導覽，手機顯示底部導覽 */
export default function ResponsiveShell({ children }: { children: React.ReactNode }) {
  const [location, navigate] = useLocation();
  const { points } = useDemo();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // 手機版全螢幕 App 頁面（無頂部導覽）
  const isAppPage = !["/", "/welcome", "/login", "/guide", "/pet/new", "/pet/done"].includes(location);

  if (isMobile) {
    return (
      <div className="min-h-screen bg-brand-cream">
        {children}
        {isAppPage && <MobileBottomNav location={location} navigate={navigate} />}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-cream">
      {/* PC 頂部導覽 */}
      <header className="sticky top-0 z-40 bg-brand-cream/90 backdrop-blur border-b border-border/60">
        <div className="max-w-6xl mx-auto px-8 h-16 flex items-center justify-between">
          <button onClick={() => navigate("/")} className="flex items-center gap-3 active:scale-95 transition-transform">
            <BrandIcon className="w-10 h-10" />
            <div className="text-left">
              <p className="font-black text-brand-ink leading-none">毛孩護照</p>
              <p className="text-[10px] font-bold text-brand-purple tracking-widest">PET PASSPORT</p>
            </div>
          </button>
          <nav className="hidden md:flex items-center gap-8 text-sm font-bold text-brand-sub">
            <button onClick={() => navigate("/")} className="hover:text-brand-purple transition-colors">首頁</button>
            <button onClick={() => navigate("/tasks")} className="hover:text-brand-purple transition-colors">任務</button>
            <button onClick={() => navigate("/rewards")} className="hover:text-brand-purple transition-colors">權益</button>
            <button onClick={() => navigate("/merchants")} className="hover:text-brand-purple transition-colors">商家</button>
            <button onClick={() => navigate("/pro")} className="inline-flex items-center gap-2 rounded-full bg-brand-purple px-4 py-2 text-white shadow-md shadow-brand-purple/20 transition-transform active:scale-95">
              <BriefcaseBusiness size={15} /> 寵業模式
            </button>
          </nav>
          <div className="flex items-center gap-4">
            <button onClick={() => navigate("/wallet")} className="flex items-center gap-2 px-4 h-10 rounded-full bg-brand-lilac text-brand-purple-dark font-bold text-sm active:scale-95 transition-transform">
              <Coins size={16} />
              <span className="tabular">{points.toLocaleString()} 點</span>
            </button>
            <button
              onClick={() => navigate("/me")}
              className="w-10 h-10 rounded-full bg-brand-purple text-white flex items-center justify-center font-bold text-sm active:scale-95 transition-transform"
            >
              林
            </button>
          </div>
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-8 py-6">{children}</main>
    </div>
  );
}

/** 手機底部導覽 */
function MobileBottomNav({ location, navigate }: { location: string; navigate: (to: string) => void }) {
  const items = [
    { path: "/home", label: "首頁", icon: Home },
    { path: "/tasks", label: "任務", icon: PawPrint },
    { path: "/wallet/code", label: "護照", icon: null },
    { path: "/rewards", label: "權益", icon: Gift },
    { path: "/me", label: "我的", icon: User },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-t border-border/60 pb-[env(safe-area-inset-bottom)]">
      <div className="flex items-end justify-around px-2 pt-2">
        {items.map((item) => {
          if (item.icon === null) {
            return (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className="flex flex-col items-center gap-1 -mt-5 active:scale-95 transition-transform"
                aria-label={item.label}
              >
                <span className="w-14 h-14 rounded-full bg-brand-purple text-white flex items-center justify-center shadow-lg shadow-brand-purple/40 border-4 border-brand-cream">
                  <PawPrint size={22} />
                </span>
                <span className="text-[10px] font-bold text-brand-purple-dark">{item.label}</span>
              </button>
            );
          }
          const Icon = item.icon;
          const active = location === item.path || location.startsWith(item.path + "/");
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`flex flex-col items-center gap-1 px-3 py-1.5 rounded-xl transition-all active:scale-95 ${active ? "text-brand-purple" : "text-brand-sub"}`}
            >
              <Icon size={20} strokeWidth={active ? 2.5 : 2} />
              <span className="text-[10px] font-bold">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
