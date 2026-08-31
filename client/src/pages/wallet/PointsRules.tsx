import { Info } from "lucide-react";
import TopBar from "@/components/TopBar";
import { POINTS_RULES } from "@/lib/data";

/** P14 點數規則 */
export default function PointsRules() {
  return (
    <div className="min-h-full bg-brand-cream">
      <TopBar showBack title="點數規則" />
      <div className="px-5 pt-5 pb-8 space-y-6">
        <div className="paper-card p-5 journal-enter">
          <h2 className="font-black text-brand-ink text-sm flex items-center gap-2"><Info size={15} className="text-brand-purple" /> 點數取得方式</h2>
          <div className="mt-4 space-y-3">
            {POINTS_RULES.map((r) => (
              <div key={r.behavior} className="flex items-center justify-between py-2 border-b border-border/60 last:border-0">
                <div>
                  <p className="text-sm font-bold text-brand-ink">{r.behavior}</p>
                  <p className="text-[10px] text-brand-sub">{r.limit}</p>
                </div>
                <span className="text-sm font-black text-brand-coral tabular">{r.rule}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="paper-card p-5 journal-enter journal-enter-1">
          <h2 className="font-black text-brand-ink text-sm">點數使用與效期</h2>
          <ul className="mt-3 space-y-2.5 text-xs text-brand-sub leading-relaxed">
            <li>· 點數自發放日起 180 天內有效，逾期自動失效。</li>
            <li>· 兌換時優先扣除即將到期的點數。</li>
            <li>· 點數僅限本人使用，不可提現、轉讓或合併帳戶。</li>
            <li>· 每一筆點數都有來源、狀態、日期與稽核編號，可於明細中查詢。</li>
          </ul>
        </div>

        <div className="paper-card p-5 journal-enter journal-enter-2">
          <h2 className="font-black text-brand-ink text-sm">申訴與異常處理</h2>
          <p className="mt-2 text-xs text-brand-sub leading-relaxed">
            若您發現點數未正確入帳、被錯誤扣除，或票券無法核銷，請於交易明細中點選「申訴」，系統將自動帶入交易資料並產生客服案件編號，我們會在 3 個工作天內回覆處理結果。
          </p>
        </div>
      </div>
    </div>
  );
}
