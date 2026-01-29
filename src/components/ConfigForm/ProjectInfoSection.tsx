import { PyEOConfig } from "@/types/config";
import { EPSG_OPTIONS } from "@/constants/options";

interface ProjectInfoSectionProps {
  config: PyEOConfig;
  updateConfig: (field: keyof PyEOConfig, value: unknown) => void;
}

export function ProjectInfoSection({ config, updateConfig }: ProjectInfoSectionProps) {
  return (
    <section className="bg-slate-900 rounded-xl p-6 border border-slate-800">
      <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
        <span className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center text-sm">
          1
        </span>
        Project Information
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-slate-300 mb-1">
            Project Name
          </label>
          <input
            type="text"
            value={config.projectName}
            onChange={(e) => updateConfig("projectName", e.target.value)}
            className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-emerald-500"
            placeholder="e.g., Mt_Elgon_Monitoring"
          />
        </div>
        <div>
          <label className="block text-sm text-slate-300 mb-1">
            Coordinate System (EPSG)
          </label>
          <select
            value={config.epsg}
            onChange={(e) => updateConfig("epsg", parseInt(e.target.value))}
            className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-emerald-500"
          >
            {EPSG_OPTIONS.map((opt) => (
              <option key={opt.code} value={opt.code}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm text-slate-300 mb-1">
            ROI Filename
          </label>
          <input
            type="text"
            value={config.roiFilename}
            onChange={(e) => updateConfig("roiFilename", e.target.value)}
            className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-emerald-500"
            placeholder="e.g., forest_boundary.shp"
          />
        </div>
        <div>
          <label className="block text-sm text-slate-300 mb-1">
            Model Path
          </label>
          <input
            type="text"
            value={config.modelPath}
            onChange={(e) => updateConfig("modelPath", e.target.value)}
            className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-emerald-500"
            placeholder="e.g., .\models\model.pkl"
          />
        </div>
      </div>
    </section>
  );
}