interface HeaderProps {
  uuid: string;
}

export function Header({ uuid }: HeaderProps) {
  return (
    <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
              <span className="text-xl">🌲</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">
                PyEO Config Generator
              </h1>
              <p className="text-sm text-slate-400">
                Forest Alert System Configuration
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-xs text-slate-500">Config UUID</p>
            <code className="text-xs text-slate-400 font-mono">
              {uuid ? `${uuid.slice(0, 8)}...` : "Loading..."}
            </code>
          </div>
        </div>
      </div>
    </header>
  );
}