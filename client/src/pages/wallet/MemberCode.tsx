import { useState } from "react";
import { QrCode, Store } from "lucide-react";
import TopBar from "@/components/TopBar";
import { useDemo } from "@/contexts/DemoContext";
import { MEMBER } from "@/lib/data";

/** 我的會員碼（場景五：到店消費累積點數） */
export default function MemberCode() {
  const { currentPet } = useDemo();
  const [showAmount, setShowAmount] = useState(false);

  return (
    <div className="min-h-full bg-brand-cream flex flex-col">
      <TopBar showBack title="我的會員碼" />
      <div className="flex-1 px-5 pt-5 pb-8 flex flex-col items-center">
        <div className="paper-card p-6 w-full text-center journal-enter">
          <div className="flex items-center justify-center gap-3">
            <img src={currentPet.photo} alt={currentPet.name} className="w-12 h-12 rounded-full object-cover" />
            <div className="text-left">
              <p className="font-black text-brand-ink">{currentPet.name}</p>
              <p className="text-[11px] text-brand-sub font-mono">{MEMBER.memberId}</p>
            </div>
          </div>

          {/* 模擬 QR */}
          <div className="mt-6 mx-auto w-56 h-56 p-4 rounded-3xl border-4 border-brand-purple/10 shadow-lg bg-white">
            <div className="w-full h-full grid grid-cols-8 gap-0.5">
              {Array.from({ length: 64 }).map((_, i) => (
                <span key={i} className={`rounded-[1px] ${(i * 13 + 7) % 4 !== 0 ? "bg-brand-purple-dark" : "bg-transparent"}`} />
              ))}
            </div>
          </div>
          <p className="mt-4 font-mono text-sm font-bold text-brand-purple-dark">{MEMBER.memberId}</p>
          <p className="mt-1 text-[10px] text-brand-sub">出示給店員掃碼，即可累積消費點數</p>
        </div>

        {/* 點數規則速覽 */}
        <div className="mt-4 paper-card p-5 w-full journal-enter journal-enter-1">
          <h2 className="font-black text-brand-ink text-sm flex items-center gap-2"><Store size={15} className="text-brand-purple" /> 消費累點規則</h2>
          <div className="mt-3 space-y-2 text-xs">
            <div className="flex justify-between"><span className="text-brand-sub">合作門店消費</span><span className="font-bold text-brand-ink">每 100 元 1 點</span></div>
            <div className="flex justify-between"><span className="text-brand-sub">首次到店</span><span className="font-bold text-brand-coral">額外 50 點</span></div>
            <div className="flex justify-between"><span className="text-brand-sub">填寫服務評價</span><span className="font-bold text-brand-ink">20 點</span></div>
          </div>
        </div>

        {/* DEMO：模擬店員掃碼 */}
        <button
          onClick={() => setShowAmount(true)}
          className="mt-6 w-full h-12 rounded-full bg-brand-purple text-white font-bold shadow-lg shadow-brand-purple/30 active:scale-[0.97] transition-transform flex items-center justify-center gap-2 journal-enter journal-enter-2"
        >
          <QrCode size={17} /> （DEMO）模擬店員掃碼
        </button>
      </div>

      {/* 模擬店員輸入金額 */}
      {showAmount && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-end justify-center">
          <div className="w-full max-w-[390px] bg-white rounded-t-3xl p-6 journal-enter">
            <h3 className="font-black text-brand-ink">店員掃碼成功</h3>
            <p className="mt-1 text-xs text-brand-sub">請輸入本次消費金額（DEMO 模擬）</p>
            <div className="mt-4 flex items-center gap-2">
              <span className="text-2xl font-black text-brand-purple">NT$</span>
              <input
                type="number"
                defaultValue={1200}
                className="flex-1 h-14 px-4 rounded-xl bg-brand-lilac text-2xl font-black text-brand-purple-dark outline-none focus:ring-2 ring-brand-purple/40 tabular"
              />
            </div>
            <p className="mt-2 text-xs text-brand-sub">預計可獲得 <span className="font-bold text-brand-coral">12 點</span>（每 100 元 1 點）</p>
            <div className="mt-5 flex gap-3">
              <button
                onClick={() => setShowAmount(false)}
                className="flex-1 h-12 rounded-full border-2 border-brand-purple/20 text-brand-purple-dark font-bold active:scale-[0.97] transition-transform"
              >
                取消
              </button>
              <button
                onClick={() => setShowAmount(false)}
                className="flex-1 h-12 rounded-full bg-brand-purple text-white font-bold active:scale-[0.97] transition-transform"
              >
                確認入點
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
