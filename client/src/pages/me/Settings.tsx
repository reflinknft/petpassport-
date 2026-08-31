import { ChevronRight, Download, LogOut, Trash2 } from "lucide-react";
import { useLocation } from "wouter";
import TopBar from "@/components/TopBar";
import { useDemo } from "@/contexts/DemoContext";
import { MEMBER } from "@/lib/data";

/** P36 帳號設定 */
export default function Settings() {
  const [, navigate] = useLocation();
  const { logout } = useDemo();

  const groups = [
    {
      title: "帳號資料",
      items: [
        { label: "姓名", value: MEMBER.name },
        { label: "會員編號", value: MEMBER.memberId },
        { label: "綁定方式", value: "LINE" },
      ],
    },
  ];

  return (
    <div className="min-h-full bg-brand-cream">
      <TopBar showBack title="帳號設定" />
      <div className="px-5 pt-5 pb-8 space-y-6">
        {groups.map((g) => (
          <div key={g.title}>
            <h2 className="text-xs font-bold text-muted-foreground px-1">{g.title}</h2>
            <div className="mt-2 paper-card divide-y divide-border/70">
              {g.items.map((it) => (
                <div key={it.label} className="flex items-center justify-between p-4">
                  <span className="text-sm text-muted-foreground">{it.label}</span>
                  <span className="text-sm font-bold text-brand-brown">{it.value}</span>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div>
          <h2 className="text-xs font-bold text-muted-foreground px-1">通知與授權</h2>
          <div className="mt-2 paper-card divide-y divide-border/70">
            {[
              { label: "點數到期提醒", on: true },
              { label: "任務驗證通知", on: true },
              { label: "行銷活動通知", on: false },
              { label: "資料授權管理", on: null },
            ].map((it) => (
              <div key={it.label} className="flex items-center justify-between p-4">
                <span className="text-sm font-bold text-brand-brown">{it.label}</span>
                {it.on === null ? (
                  <ChevronRight size={16} className="text-muted-foreground" />
                ) : (
                  <span className={`w-11 h-6 rounded-full p-0.5 transition-colors ${it.on ? "bg-brand-orange" : "bg-border"}`}>
                    <span className={`block w-5 h-5 rounded-full bg-white shadow transition-transform ${it.on ? "translate-x-5" : ""}`} />
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xs font-bold text-muted-foreground px-1">資料權利</h2>
          <div className="mt-2 paper-card divide-y divide-border/70">
            <button className="w-full flex items-center gap-3 p-4 text-left active:bg-brand-apricot/40 transition-colors">
              <Download size={16} className="text-brand-brown" />
              <span className="text-sm font-bold text-brand-brown">申請下載我的資料</span>
            </button>
            <button className="w-full flex items-center gap-3 p-4 text-left active:bg-brand-apricot/40 transition-colors">
              <Trash2 size={16} className="text-brand-brick" />
              <span className="text-sm font-bold text-brand-brick">申請刪除帳號與資料</span>
            </button>
          </div>
        </div>

        <button
          onClick={() => {
            logout();
            navigate("/welcome");
          }}
          className="w-full h-12 rounded-2xl border-2 border-brand-brick/30 text-brand-brick font-bold flex items-center justify-center gap-2 active:scale-[0.97] transition-transform"
        >
          <LogOut size={16} /> 登出
        </button>
        <p className="text-center text-[10px] text-muted-foreground/70">毛孩護照 DEMO V1.0 · 僅供展示</p>
      </div>
    </div>
  );
}
