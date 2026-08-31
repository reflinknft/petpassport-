import { ClipboardList, Gift, Home, UserRound } from "lucide-react";
import { Link, useLocation } from "wouter";
import BrandIcon from "@/components/BrandIcon";

/** V2.0 底部導覽：首頁、任務、護照（中央突出）、權益、我的 */
const LEFT = [
  { path: "/home", label: "首頁", icon: Home, badge: 0 },
  { path: "/tasks", label: "任務", icon: ClipboardList, badge: 2 },
];
const RIGHT = [
  { path: "/rewards", label: "權益", icon: Gift, badge: 1 },
  { path: "/me", label: "我的", icon: UserRound, badge: 0 },
];

function NavItem({ path, label, icon: Icon, badge }: { path: string; label: string; icon: typeof Home; badge: number }) {
  const [location] = useLocation();
  const active = location === path || location.startsWith(path + "/");
  return (
    <Link href={path}>
      <div className={`relative flex flex-col items-center gap-0.5 py-2 transition-colors ${active ? "text-brand-purple" : "text-brand-sub"}`}>
        <div className="relative">
          <Icon size={22} strokeWidth={active ? 2.4 : 1.8} />
          {badge > 0 && (
            <span className="absolute -top-1.5 -right-2 min-w-4 h-4 px-1 rounded-full bg-brand-coral text-white text-[10px] font-bold flex items-center justify-center">
              {badge}
            </span>
          )}
        </div>
        <span className={`text-[11px] ${active ? "font-bold" : "font-medium"}`}>{label}</span>
      </div>
    </Link>
  );
}

export default function BottomNav() {
  const [location] = useLocation();
  const passportActive = location.startsWith("/pets");
  return (
    <nav className="sticky bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur border-t border-border">
      <div className="grid grid-cols-5 items-end">
        {LEFT.map((it) => (
          <NavItem key={it.path} {...it} />
        ))}
        {/* 中央護照鈕 */}
        <Link href="/pets/jumi">
          <div className="relative flex flex-col items-center">
            <div
              className={`-mt-6 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all active:scale-95 ${
                passportActive ? "bg-brand-purple shadow-brand-purple/40" : "bg-brand-purple shadow-brand-purple/30"
              }`}
              style={{ boxShadow: "0 8px 20px oklch(0.52 0.16 290 / 0.35)" }}
            >
              <BrandIcon className="w-8 h-8" />
            </div>
            <span className={`text-[11px] pb-2 pt-0.5 ${passportActive ? "font-bold text-brand-purple" : "font-medium text-brand-sub"}`}>護照</span>
          </div>
        </Link>
        {RIGHT.map((it) => (
          <NavItem key={it.path} {...it} />
        ))}
      </div>
    </nav>
  );
}
