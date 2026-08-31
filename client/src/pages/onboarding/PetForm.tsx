import { useState } from "react";
import { Camera, Check } from "lucide-react";
import { useLocation } from "wouter";
import TopBar from "@/components/TopBar";
import { ASSETS } from "@/lib/data";

/** P04 + P05 建立寵物（兩步驟） */
export default function PetForm() {
  const [, navigate] = useLocation();
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [species, setSpecies] = useState<"dog" | "cat">("dog");
  const [breed, setBreed] = useState("");
  const [birthday, setBirthday] = useState("");
  const [gender, setGender] = useState<"male" | "female">("female");
  const [weight, setWeight] = useState("");

  return (
    <div className="min-h-full bg-brand-cream flex flex-col">
      <TopBar showBack title={`建立寵物 ${step}/2`} />
      {/* 進度條 */}
      <div className="px-6 pt-4">
        <div className="h-1.5 rounded-full bg-brand-lilac overflow-hidden">
          <div className="h-full bg-brand-purple rounded-full transition-all duration-300" style={{ width: step === 1 ? "50%" : "100%" }} />
        </div>
      </div>

      <div className="flex-1 px-6 pt-6 pb-8">
        {step === 1 ? (
          <div className="journal-enter">
            <h1 className="text-xl font-black text-brand-ink">牠叫什麼名字？</h1>
            {/* 照片上傳 */}
            <button className="mt-6 mx-auto block w-28 h-28 rounded-full border-2 border-dashed border-brand-purple/50 bg-white/70 relative overflow-hidden active:scale-95 transition-transform">
              <img src={ASSETS.petJumi} alt="寵物照片" className="w-full h-full object-cover opacity-90" />
              <span className="absolute inset-0 flex items-center justify-center bg-brand-purple-dark/30">
                <Camera size={22} className="text-white" />
              </span>
            </button>
            <p className="mt-2 text-center text-[11px] text-muted-foreground">上傳一張可愛照片（DEMO 預設圖）</p>

            <label className="block mt-6 text-xs font-bold text-brand-ink">名字</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="例如：Jumi"
              className="mt-2 w-full h-12 px-4 rounded-xl bg-white text-sm font-medium outline-none focus:ring-2 ring-brand-purple/40 shadow-sm"
            />

            <label className="block mt-5 text-xs font-bold text-brand-ink">物種</label>
            <div className="mt-2 grid grid-cols-2 gap-3">
              {(["dog", "cat"] as const).map((s) => (
                <button
                  key={s}
                  onClick={() => setSpecies(s)}
                  className={`h-12 rounded-xl font-bold text-sm border-2 transition-all active:scale-[0.97] ${
                    species === s ? "border-brand-purple bg-brand-purple/10 text-brand-purple" : "border-border bg-white text-muted-foreground"
                  }`}
                >
                  {s === "dog" ? "狗狗" : "貓咪"}
                </button>
              ))}
            </div>

            <button
              onClick={() => setStep(2)}
              disabled={!name}
              className="mt-8 w-full h-12 rounded-2xl bg-brand-purple text-white font-bold shadow-lg shadow-brand-purple/30 active:scale-[0.97] transition-all disabled:opacity-40 disabled:shadow-none"
            >
              下一步
            </button>
          </div>
        ) : (
          <div className="journal-enter">
            <h1 className="text-xl font-black text-brand-ink">關於 {name || "牠"} 的更多資料</h1>
            <div className="mt-6 space-y-4">
              <div>
                <label className="text-xs font-bold text-brand-ink">品種</label>
                <input
                  value={breed}
                  onChange={(e) => setBreed(e.target.value)}
                  placeholder="例如：玩具貴賓"
                  className="mt-2 w-full h-12 px-4 rounded-xl bg-white text-sm font-medium outline-none focus:ring-2 ring-brand-purple/40 shadow-sm"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-brand-ink">生日</label>
                <input
                  type="date"
                  value={birthday}
                  onChange={(e) => setBirthday(e.target.value)}
                  className="mt-2 w-full h-12 px-4 rounded-xl bg-white text-sm font-medium outline-none focus:ring-2 ring-brand-purple/40 shadow-sm"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-brand-ink">性別</label>
                <div className="mt-2 grid grid-cols-2 gap-3">
                  {(["female", "male"] as const).map((g) => (
                    <button
                      key={g}
                      onClick={() => setGender(g)}
                      className={`h-11 rounded-xl font-bold text-sm border-2 transition-all active:scale-[0.97] ${
                        gender === g ? "border-brand-purple bg-brand-purple/10 text-brand-purple" : "border-border bg-white text-muted-foreground"
                      }`}
                    >
                      {g === "female" ? "女生" : "男生"}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="text-xs font-bold text-brand-ink">體重（kg）</label>
                <input
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder="例如：4.2"
                  inputMode="decimal"
                  className="mt-2 w-full h-12 px-4 rounded-xl bg-white text-sm font-medium outline-none focus:ring-2 ring-brand-purple/40 shadow-sm"
                />
              </div>
            </div>
            <p className="mt-4 text-[10px] text-muted-foreground leading-relaxed">
              這些資料用於產生照護建議與任務推薦，敏感欄位可隨時於設定中調整授權。
            </p>
            <button
              onClick={() => navigate("/pet/done")}
              className="mt-6 w-full h-12 rounded-2xl bg-brand-purple text-white font-bold shadow-lg shadow-brand-purple/30 active:scale-[0.97] transition-transform flex items-center justify-center gap-2"
            >
              <Check size={18} /> 完成建檔
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
