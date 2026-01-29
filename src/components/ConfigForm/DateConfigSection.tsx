import { PyEOConfig } from "@/types/config";

interface DateConfigSectionProps {
  config: PyEOConfig;
  updateConfig: (field: keyof PyEOConfig, value: unknown) => void;
}

export function DateConfigSection({ config, updateConfig }: DateConfigSectionProps) {
  return (
    <section className="bg-slate-900 rounded-xl p-6 border border-slate-800">
      <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
        <span className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center text-sm">
          2
        </span>
        Date Configuration
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Baseline Composite Period */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-emerald-400">
            📅 Baseline Composite Period
          </h3>
          <p className="text-xs text-slate-500">
            Reference period for &quot;before&quot; comparison
          </p>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs text-slate-400 mb-1">Start</label>
              <input
                type="date"
                value={config.compositeStart}
                onChange={(e) => updateConfig("compositeStart", e.target.value)}
                className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-emerald-500"
              />
            </div>
            <div>
              <label className="block text-xs text-slate-400 mb-1">End</label>
              <input
                type="date"
                value={config.compositeEnd}
                onChange={(e) => updateConfig("compositeEnd", e.target.value)}
                className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-emerald-500"
              />
            </div>
          </div>
        </div>

        {/* Monitoring Period */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-emerald-400">
            🔍 Monitoring Period
          </h3>
          <p className="text-xs text-slate-500">Period to detect changes</p>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs text-slate-400 mb-1">Start</label>
              <input
                type="date"
                value={config.startDate}
                onChange={(e) => updateConfig("startDate", e.target.value)}
                className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-emerald-500"
              />
            </div>
            <div>
              <label className="block text-xs text-slate-400 mb-1">End</label>
              <input
                type="date"
                value={config.endDate}
                onChange={(e) => updateConfig("endDate", e.target.value)}
                className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-emerald-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}