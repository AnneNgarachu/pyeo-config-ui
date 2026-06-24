import { PyEOConfig } from "@/types/config";

interface SidebarProps {
  config: PyEOConfig;
  onDownload: () => void;
  onCopy: () => void;
  onNewConfig: () => void;
  copied: boolean;
}

export function Sidebar({ config, onDownload, onCopy, onNewConfig, copied }: SidebarProps) {
  return (
    <div className="space-y-4">
      {/* Quick Actions */}
      <div className="bg-slate-900 rounded-xl p-4 border border-slate-800">
        <h3 className="text-sm font-semibold text-white mb-3">Quick Actions</h3>
        <div className="space-y-2">
          <button
            onClick={onDownload}
            className="w-full px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-medium rounded-lg transition-colors"
          >
            ⬇️ Download .ini File
          </button>
          <button
            onClick={onCopy}
            className="w-full px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white font-medium rounded-lg transition-colors"
          >
            {copied ? "✓ Copied!" : "📋 Copy to Clipboard"}
          </button>
          <button
            onClick={onNewConfig}
            className="w-full px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium rounded-lg transition-colors border border-slate-700"
          >
            🔄 New Configuration
          </button>
        </div>
      </div>

      {/* Config Summary */}
      <div className="bg-slate-900 rounded-xl p-4 border border-slate-800">
        <h3 className="text-sm font-semibold text-white mb-3">
          Configuration Summary
        </h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-slate-500">Project</span>
            <span className="text-slate-300">{config.projectName}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">EPSG</span>
            <span className="text-slate-300">{config.epsg}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">Cloud Cover</span>
            <span className="text-slate-300">{config.cloudCover}%</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">Monitoring</span>
            <span className="text-slate-300">
              {config.startDate} → {config.endDate}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">From Classes</span>
            <span className="text-slate-300">
              [{config.changeFromClasses.join(", ")}]
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">To Classes</span>
            <span className="text-red-400">
              [{config.changeToClasses.join(", ")}]
            </span>
          </div>
        </div>
      </div>

      {/* Help */}
      <div className="bg-slate-900 rounded-xl p-4 border border-slate-800">
        <h3 className="text-sm font-semibold text-slate-300 mb-2">
          💡 How to Use
        </h3>
        <ol className="text-xs text-slate-400 space-y-1 list-decimal list-inside">
          <li>Configure your monitoring parameters</li>
          <li>Download the .ini file</li>
          <li>Place it in your PyEO directory</li>
          <li>
            Run:{" "}
            <code className="bg-slate-800 px-1 rounded">
              python pyeo/run_acd_national.py your_config.ini
            </code>
          </li>
        </ol>
      </div>

      {/* Branding */}
      <div className="bg-slate-900 rounded-xl p-4 border border-slate-800 text-center">
        <p className="text-xs text-slate-500">
          A configuration tool built for the University of Leicester&apos;s PyEO
          Forest Alert System.
        </p>
      </div>

      {/* Contact */}
      <div className="bg-slate-900 rounded-xl p-4 border border-slate-800 text-center">
        <p className="text-xs text-slate-400">Built by Anne Ngarachu</p>
        <div className="mt-2 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-slate-500">
          <a
            href="https://annengarachu.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-300 transition-colors"
          >
            Portfolio
          </a>
          <a
            href="mailto:wanjiruanne95@gmail.com"
            className="hover:text-slate-300 transition-colors"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/anne-wanjiru-ngarachu/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-300 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/AnneNgarachu/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-300 transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}