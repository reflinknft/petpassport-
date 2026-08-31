import { ArrowLeft, Bell } from "lucide-react";
import BrandIcon from "@/components/BrandIcon";
import { useLocation } from "wouter";
import { ASSETS } from "@/lib/data";

interface TopBarProps {
  title?: string;
  showBack?: boolean;
  showLogo?: boolean;
  showBell?: boolean;
}

export default function TopBar({ title, showBack, showLogo, showBell }: TopBarProps) {
  const [, navigate] = useLocation();
  return (
    <header className="sticky top-0 z-40 bg-brand-cream/90 backdrop-blur border-b border-border/60">
      <div className="flex items-center justify-between h-14 px-4">
        <div className="flex items-center gap-2 min-w-0">
          {showBack && (
            <button
              onClick={() => window.history.back()}
              className="w-9 h-9 rounded-full flex items-center justify-center text-brand-ink active:scale-95 transition-transform"
              aria-label="返回"
            >
              <ArrowLeft size={20} />
            </button>
          )}
          {showLogo && <BrandIcon className="w-8 h-8" />}
          {title && <h1 className="text-lg font-black text-brand-ink truncate">{title}</h1>}
        </div>
        {showBell && (
          <button
            onClick={() => navigate("/notifications")}
            className="relative w-9 h-9 rounded-full flex items-center justify-center text-brand-ink active:scale-95 transition-transform"
            aria-label="通知"
          >
            <Bell size={20} />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-brand-brick" />
          </button>
        )}
      </div>
    </header>
  );
}
