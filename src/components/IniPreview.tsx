import { PyEOConfig } from "@/types/config";
import { generateIniFile } from "../utils/generateIni";

interface IniPreviewProps {
  config: PyEOConfig;
  onCopy: () => void;
  onDownload: () => void;
  copied: boolean;
}

export function IniPreview({ config, onCopy, onDownload, copied }: IniPreviewProps) {
  return (
    <div className="bg-slate-900 rounded-xl p-6 border border-slate-800">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-white">Generated .ini File</h2>
        <div className="flex gap-2">
          <button
            onClick={onCopy}
            className="px-3 py-1 bg-slate-700 hover:bg-slate-600 text-white text-sm rounded-lg transition-colors"
          >
            {copied ? "✓ Copied!" : "📋 Copy"}
          </button>
          <button
            onClick={onDownload}
            className="px-3 py-1 bg-emerald-600 hover:bg-emerald-500 text-white text-sm rounded-lg transition-colors"
          >
            ⬇️ Download
          </button>
        </div>
      </div>
      <pre className="bg-slate-950 p-4 rounded-lg overflow-x-auto text-sm text-slate-300 font-mono whitespace-pre-wrap">
        {generateIniFile(config)}
      </pre>
    </div>
  );
}