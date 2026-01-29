import { PyEOConfig } from "@/types/config";
import { PROCESSING_STEPS, DOWNLOAD_SOURCES } from "@/constants/options";

interface ProcessingOptionsSectionProps {
  config: PyEOConfig;
  updateConfig: (field: keyof PyEOConfig, value: unknown) => void;
}

export function ProcessingOptionsSection({ config, updateConfig }: ProcessingOptionsSectionProps) {
  return (
    <section className="bg-slate-900 rounded-xl p-6 border border-slate-800">
      <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
        <span className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center text-sm">
          3
        </span>
        Processing Options
      </h2>
      <div className="space-y-4">
        {/* Cloud Cover Slider */}
        <div>
          <label className="block text-sm text-slate-300 mb-2">
            Cloud Cover Threshold: {config.cloudCover}%
          </label>
          <input
            type="range"
            min="0"
            max="100"
            value={config.cloudCover}
            onChange={(e) => updateConfig("cloudCover", parseInt(e.target.value))}
            className="w-full accent-emerald-500"
          />
          <div className="flex justify-between text-xs text-slate-500">
            <span>0% (Clear only)</span>
            <span>100% (All images)</span>
          </div>
        </div>

        {/* Download Source */}
        <div>
          <label className="block text-sm text-slate-300 mb-2">
            Download Source
          </label>
          <select
            value={config.downloadSource}
            onChange={(e) => updateConfig("downloadSource", e.target.value)}
            className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-emerald-500"
          >
            {DOWNLOAD_SOURCES.map((source) => (
              <option key={source.value} value={source.value}>
                {source.label}
              </option>
            ))}
          </select>
        </div>

        {/* Processing Steps Checkboxes */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 pt-2">
          {PROCESSING_STEPS.map((opt) => (
            <label
              key={opt.key}
              className="flex items-start gap-2 p-3 bg-slate-800/50 rounded-lg cursor-pointer hover:bg-slate-800"
            >
              <input
                type="checkbox"
                checked={config[opt.key as keyof PyEOConfig] as boolean}
                onChange={(e) =>
                  updateConfig(opt.key as keyof PyEOConfig, e.target.checked)
                }
                className="mt-1 accent-emerald-500"
              />
              <div>
                <span className="text-sm text-white">{opt.label}</span>
                <p className="text-xs text-slate-500">{opt.desc}</p>
              </div>
            </label>
          ))}
        </div>
      </div>
    </section>
  );
}