import { Home, ClipboardList, Gift, Store, UserRound } from "lucide-react";
import { Link, useLocation } from "wouter";

const ITEMS = [
  { path: "/home", label: "首頁", icon: Home, badge: 0 },
  { path: "/tasks", label: "任務", icon: ClipboardList, badge: 2 },
  { path: "/rewards", label: "權益", icon: Gift, badge: 1 },
  { path: "/merchants", label: "商家", icon: Store, badge: 0 },
  { path: "/me", label: "我的", icon: UserRound, badge: 0 },
];

export default function BottomNav() {
  const [location] = useLocation();
  return (
    <nav className="sticky bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur border-t border-border">
      <div className="grid grid-cols-5">
        {ITEMS.map(({ path, label, icon: Icon, badge }) => {
          const active = location === path || location.startsWith(path + "/");
          return (
            <Link key={path} href={path}>
              <div
                className={`relative flex flex-col items-center gap-0.5 py-2.5 transition-colors ${
                  active ? "text-brand-orange" : "text-muted-foreground"
                }`}
              >
                <div className="relative">
                  <Icon size={22} strokeWidth={active ? 2.4 : 1.8} />
                  {badge > 0 && (
                    <span className="absolute -top-1.5 -right-2 min-w-4 h-4 px-1 rounded-full bg-brand-brick text-white text-[10px] font-bold flex items-center justify-center">
                      {badge}
                    </span>
                  )}
                </div>
                <span className={`text-[11px] ${active ? "font-bold" : "font-medium"}`}>{label}</span>
                {active && <span className="absolute top-0 w-8 h-0.5 rounded-full bg-brand-orange" />}
              </div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
