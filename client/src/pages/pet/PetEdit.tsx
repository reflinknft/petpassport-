import { Save } from "lucide-react";
import { useLocation, useParams } from "wouter";
import TopBar from "@/components/TopBar";
import { PETS } from "@/lib/data";

/** P10 編輯寵物 */
export default function PetEdit() {
  const { id } = useParams<{ id: string }>();
  const [, navigate] = useLocation();
  const pet = PETS.find((p) => p.id === id) ?? PETS[0];

  return (
    <div className="min-h-full bg-brand-cream">
      <TopBar showBack title={`編輯 ${pet.name}`} />
      <div className="px-5 pt-5 pb-8 space-y-4">
        <div className="paper-card p-5 space-y-4 journal-enter">
          {[
            { label: "名字", value: pet.name },
            { label: "品種", value: pet.breed },
            { label: "年齡", value: `${pet.age} 歲` },
            { label: "體重", value: `${pet.weight} kg` },
          ].map((f) => (
            <div key={f.label}>
              <label className="text-xs font-bold text-brand-ink">{f.label}</label>
              <input
                defaultValue={f.value}
                className="mt-1.5 w-full h-11 px-4 rounded-xl bg-brand-lilac/60 text-sm font-medium outline-none focus:ring-2 ring-brand-purple/40"
              />
            </div>
          ))}
        </div>
        <div className="paper-card p-5 journal-enter journal-enter-1">
          <h2 className="text-sm font-black text-brand-ink">隱私設定</h2>
          {["公開寵物照片給合作商家", "允許依品種推薦任務", "允許健康標籤用於 AI 建議"].map((t, i) => (
            <div key={t} className="flex items-center justify-between py-3">
              <span className="text-sm text-muted-foreground">{t}</span>
              <span className={`w-11 h-6 rounded-full p-0.5 transition-colors ${i < 2 ? "bg-brand-purple" : "bg-border"}`}>
                <span className={`block w-5 h-5 rounded-full bg-white shadow transition-transform ${i < 2 ? "translate-x-5" : ""}`} />
              </span>
            </div>
          ))}
        </div>
        <button
          onClick={() => navigate(`/pets/${pet.id}`)}
          className="w-full h-12 rounded-2xl bg-brand-purple text-white font-bold shadow-lg shadow-brand-purple/30 active:scale-[0.97] transition-transform flex items-center justify-center gap-2 journal-enter journal-enter-2"
        >
          <Save size={17} /> 儲存變更
        </button>
      </div>
    </div>
  );
}
