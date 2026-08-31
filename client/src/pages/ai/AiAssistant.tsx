import { useState } from "react";
import { Send, Sparkles, Stethoscope } from "lucide-react";
import { useLocation } from "wouter";
import TopBar from "@/components/TopBar";
import { useDemo } from "@/contexts/DemoContext";

interface Msg {
  role: "user" | "ai";
  text: string;
  cards?: { label: string; path: string }[];
  disclaimer?: boolean;
}

const QUICK = ["最近適合做什麼任務？", "點數快到期怎麼用？", "附近有哪些洗護優惠？"];

/** P39 AI 毛孩助手（預設情境） */
export default function AiAssistant() {
  const [, navigate] = useLocation();
  const { currentPet } = useDemo();
  const [msgs, setMsgs] = useState<Msg[]>([
    {
      role: "ai",
      text: `嗨！我是毛孩助手。目前為 ${currentPet.name}（${currentPet.breed}，${currentPet.age} 歲）服務，有什麼想問的嗎？`,
    },
  ]);
  const [input, setInput] = useState("");

  const reply = (q: string): Msg => {
    if (q.includes("任務")) {
      return {
        role: "ai",
        text: `${currentPet.name} 是 ${currentPet.age} 歲的熟齡犬，推薦優先完成「閱讀熟齡犬照護文章」（+20 點），再搭配每日照護打卡維持連續紀錄。`,
        cards: [
          { label: "閱讀熟齡犬照護文章", path: "/tasks/t2" },
          { label: "今日照護打卡", path: "/tasks/t5" },
        ],
      };
    }
    if (q.includes("到期")) {
      return {
        role: "ai",
        text: "您有 300 點將於 30 天後到期。建議優先兌換「寵物用品 95 折券」（300 點），剛好用掉即將到期的點數。",
        cards: [{ label: "寵物用品 95 折券", path: "/rewards/r3" }],
      };
    }
    if (q.includes("洗護")) {
      return {
        role: "ai",
        text: "距離您 1.2 km 的「毛茸茸洗護沙龍 台北大安店」目前營業中，可用 500 點兌換洗護折抵券（參考價值 NT$600）。",
        cards: [
          { label: "洗護折抵券", path: "/rewards/r1" },
          { label: "查看門店", path: "/merchants/m1" },
        ],
      };
    }
    return {
      role: "ai",
      text: "這個問題我先用照護資訊協助您。若涉及醫療症狀，建議諮詢獸醫師；我也可以幫您找附近的合作動物醫院。",
      cards: [{ label: "安心動物醫院", path: "/merchants/m3" }],
      disclaimer: true,
    };
  };

  const send = (q: string) => {
    if (!q.trim()) return;
    setMsgs((m) => [...m, { role: "user", text: q }, reply(q)]);
    setInput("");
  };

  return (
    <div className="min-h-full bg-brand-cream flex flex-col">
      <TopBar showBack title="AI 毛孩助手" />
      {/* 目前寵物 */}
      <div className="px-5 pt-3">
        <div className="paper-card px-4 py-2.5 flex items-center gap-2.5">
          <img src={currentPet.photo} alt={currentPet.name} className="w-7 h-7 rounded-full object-cover" />
          <span className="text-xs font-bold text-brand-brown">正在為 {currentPet.name} 推薦</span>
          <Sparkles size={13} className="text-brand-orange ml-auto" />
        </div>
      </div>

      {/* 對話區 */}
      <div className="flex-1 px-5 pt-4 pb-40 space-y-4">
        {msgs.map((m, i) => (
          <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"} journal-enter`}>
            <div className={`max-w-[85%] ${m.role === "user" ? "bg-brand-brown text-white rounded-2xl rounded-br-md" : "bg-white rounded-2xl rounded-bl-md shadow-sm"} px-4 py-3`}>
              <p className={`text-sm leading-relaxed ${m.role === "user" ? "" : "text-brand-brown"}`}>{m.text}</p>
              {m.cards && (
                <div className="mt-3 space-y-2">
                  {m.cards.map((c) => (
                    <button
                      key={c.label}
                      onClick={() => navigate(c.path)}
                      className="w-full text-left px-3 py-2 rounded-xl bg-brand-apricot text-brand-brown text-xs font-bold active:scale-[0.97] transition-transform"
                    >
                      {c.label} →
                    </button>
                  ))}
                </div>
              )}
              {m.disclaimer && (
                <p className="mt-2 text-[10px] text-muted-foreground flex items-start gap-1">
                  <Stethoscope size={11} className="shrink-0 mt-0.5" /> AI 建議僅供參考，不構成醫療診斷；資料來源：您的寵物檔案與平台任務規則。
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* 快捷問題 + 輸入 */}
      <div className="sticky bottom-0 bg-brand-cream/95 backdrop-blur border-t border-border/60 p-4 space-y-3">
        <div className="flex gap-2 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {QUICK.map((q) => (
            <button
              key={q}
              onClick={() => send(q)}
              className="px-3.5 h-8 rounded-full bg-white text-xs font-bold text-brand-brown whitespace-nowrap active:scale-95 transition-transform shrink-0"
            >
              {q}
            </button>
          ))}
        </div>
        <div className="flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && send(input)}
            placeholder="問問毛孩助手…"
            className="flex-1 h-11 px-4 rounded-xl bg-white text-sm outline-none focus:ring-2 ring-brand-orange/40 shadow-sm"
          />
          <button
            onClick={() => send(input)}
            className="w-11 h-11 rounded-xl bg-brand-orange text-white flex items-center justify-center active:scale-95 transition-transform shrink-0"
            aria-label="送出"
          >
            <Send size={17} />
          </button>
        </div>
      </div>
    </div>
  );
}
