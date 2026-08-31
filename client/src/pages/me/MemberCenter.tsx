import { ChevronRight, Crown, Headset, Heart, IdCard, Settings, Ticket, Wallet } from "lucide-react";
import { useLocation } from "wouter";
import TopBar from "@/components/TopBar";
import { useDemo } from "@/contexts/DemoContext";
import { MEMBER } from "@/lib/data";

/** P33 會員中心 */
export default function MemberCenter() {
  const [, navigate] = useLocation();
  const { pets, points } = useDemo();

  const menu = [
    { icon: Wallet, label: "點數錢包", desc: `${points.toLocaleString()} 點`, path: "/wallet" },
    { icon: Ticket, label: "我的票券", desc: "1 張可使用", path: "/coupons" },
    { icon: Heart, label: "我的收藏", desc: "商家與權益", path: "/favorites" },
    { icon: Headset, label: "客服中心", desc: "FAQ 與問題回報", path: "/support" },
    { icon: Settings, label: "帳號設定", desc: "資料、通知與授權", path: "/settings" },
  ];

  return (
    <div className="min-h-full bg-brand-cream flex flex-col">
      <TopBar title="我的" showBell />
      <div className="flex-1 pb-6">
        {/* 會員卡 */}
        <div className="px-5 pt-5">
          <div className="rounded-3xl bg-brand-purple-dark text-white p-5 shadow-xl shadow-brand-purple-dark/25 journal-enter">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-brand-purple flex items-center justify-center text-2xl font-black">毛</div>
              <div className="flex-1">
                <p className="font-black text-lg">{MEMBER.name}</p>
                <p className="text-[11px] text-white/60 font-mono">{MEMBER.memberId}</p>
              </div>
              <span className="flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-full bg-brand-coral/25 text-brand-coral">
                <Crown size={12} /> {MEMBER.level}
              </span>
            </div>
            <div className="mt-4 pt-4 border-t border-white/10 flex justify-between text-center">
              <div className="flex-1">
                <p className="font-black tabular">{points.toLocaleString()}</p>
                <p className="text-[10px] text-white/60">可用點數</p>
              </div>
              <div className="flex-1 border-l border-white/10">
                <p className="font-black tabular">{pets.length}</p>
                <p className="text-[10px] text-white/60">毛孩護照</p>
              </div>
              <div className="flex-1 border-l border-white/10">
                <p className="font-black tabular">6 天</p>
                <p className="text-[10px] text-white/60">連續照護</p>
              </div>
            </div>
          </div>
        </div>

        {/* 寵物列表 */}
        <div className="px-5 mt-6">
          <div className="flex items-center justify-between">
            <h2 className="font-black text-brand-ink">我的毛孩</h2>
            <button onClick={() => navigate("/pet/new")} className="text-xs font-bold text-brand-purple">+ 新增</button>
          </div>
          <div className="mt-3 flex gap-3">
            {pets.map((p) => (
              <button key={p.id} onClick={() => navigate(`/pets/${p.id}`)} className="paper-card flex-1 p-3 flex items-center gap-2.5 active:scale-[0.97] transition-transform">
                <img src={p.photo} alt={p.name} className="w-10 h-10 rounded-full object-cover" />
                <div className="text-left min-w-0">
                  <p className="text-sm font-bold text-brand-ink truncate">{p.name}</p>
                  <p className="text-[10px] text-muted-foreground truncate">{p.breed}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* 功能選單 */}
        <div className="px-5 mt-6 space-y-2.5">
          {menu.map(({ icon: Icon, label, desc, path }, i) => (
            <button
              key={label}
              onClick={() => navigate(path)}
              className={`paper-card w-full p-4 flex items-center gap-3 active:scale-[0.98] transition-transform journal-enter journal-enter-${Math.min(i + 1, 5)}`}
            >
              <div className="w-10 h-10 rounded-xl bg-brand-lilac flex items-center justify-center shrink-0">
                <Icon size={18} className="text-brand-ink" />
              </div>
              <div className="text-left">
                <p className="text-sm font-bold text-brand-ink">{label}</p>
                <p className="text-[11px] text-muted-foreground">{desc}</p>
              </div>
              <ChevronRight size={16} className="ml-auto text-muted-foreground" />
            </button>
          ))}
        </div>

        {/* 電子寵物卡捷徑 */}
        <div className="px-5 mt-4">
          <button
            onClick={() => navigate(`/pets/${pets[0].id}/card`)}
            className="w-full passport-frame p-4 flex items-center gap-3 bg-white/60 active:scale-[0.98] transition-transform"
          >
            <IdCard size={18} className="text-brand-purple shrink-0" />
            <p className="text-xs text-muted-foreground text-left">出示 <span className="font-bold text-brand-ink">電子寵物卡</span>，快速核身與緊急聯絡</p>
            <ChevronRight size={16} className="ml-auto text-muted-foreground" />
          </button>
        </div>
      </div>
    </div>
  );
}
