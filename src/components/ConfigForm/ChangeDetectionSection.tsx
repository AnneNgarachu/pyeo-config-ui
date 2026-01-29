import { PyEOConfig } from "@/types/config";
import { CLASS_LABELS } from "@/constants/options";

interface ChangeDetectionSectionProps {
  config: PyEOConfig;
  toggleClass: (field: "changeFromClasses" | "changeToClasses", classNum: number) => void;
}

export function ChangeDetectionSection({ config, toggleClass }: ChangeDetectionSectionProps) {
  return (
    <section className="bg-slate-900 rounded-xl p-6 border border-slate-800">
      <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
        <span className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center text-sm">
          4
        </span>
        Change Detection Classes
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* FROM Classes */}
        <div>
          <h3 className="text-sm font-medium text-emerald-400 mb-2">
            🌳 Monitor FROM (what to watch)
          </h3>
          <div className="space-y-1 max-h-48 overflow-y-auto">
            {CLASS_LABELS.map((label, idx) => (
              <label
                key={idx}
                className="flex items-center gap-2 p-2 hover:bg-slate-800/50 rounded cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={config.changeFromClasses.includes(idx + 1)}
                  onChange={() => toggleClass("changeFromClasses", idx + 1)}
                  className="accent-emerald-500"
                />
                <span className="text-sm text-slate-300">
                  {idx + 1}. {label}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* TO Classes */}
        <div>
          <h3 className="text-sm font-medium text-red-400 mb-2">
            ⚠️ Alert when changes TO
          </h3>
          <div className="space-y-1 max-h-48 overflow-y-auto">
            {CLASS_LABELS.map((label, idx) => (
              <label
                key={idx}
                className="flex items-center gap-2 p-2 hover:bg-slate-800/50 rounded cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={config.changeToClasses.includes(idx + 1)}
                  onChange={() => toggleClass("changeToClasses", idx + 1)}
                  className="accent-red-500"
                />
                <span className="text-sm text-slate-300">
                  {idx + 1}. {label}
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Current Rule Summary */}
      <div className="mt-4 p-3 bg-slate-800 rounded-lg">
        <p className="text-sm text-slate-300">
          <span className="font-medium">Current Rule:</span> Alert when{" "}
          <span className="text-emerald-400">
            {config.changeFromClasses
              .map((c) => CLASS_LABELS[c - 1])
              .join(", ") || "nothing"}
          </span>{" "}
          changes to{" "}
          <span className="text-red-400">
            {config.changeToClasses
              .map((c) => CLASS_LABELS[c - 1])
              .join(", ") || "nothing"}
          </span>
        </p>
      </div>
    </section>
  );
}