"use client";

import { useState, useCallback, useMemo } from "react";
import { PyEOConfig, DEFAULT_CONFIG } from "@/types/config";
import { generateUUID, downloadIniFile, copyIniToClipboard } from "@/utils/generateIni";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { IniPreview } from "@/components/IniPreview";
import {
  ProjectInfoSection,
  DateConfigSection,
  ProcessingOptionsSection,
  ChangeDetectionSection,
} from "@/components/ConfigForm";

export default function Home() {
  // Initialize config with UUID immediately (avoids hydration issues)
  const [config, setConfig] = useState<PyEOConfig>(() => ({
    ...DEFAULT_CONFIG,
    uuid: typeof window !== "undefined" ? generateUUID() : "",
  }));
  const [activeTab, setActiveTab] = useState<"form" | "preview">("form");
  const [copied, setCopied] = useState(false);

  const updateConfig = useCallback((field: keyof PyEOConfig, value: unknown) => {
    setConfig((prev) => ({ ...prev, [field]: value }));
  }, []);

  const toggleClass = useCallback(
    (field: "changeFromClasses" | "changeToClasses", classNum: number) => {
      setConfig((prev) => {
        const current = prev[field];
        if (current.includes(classNum)) {
          return { ...prev, [field]: current.filter((c) => c !== classNum) };
        } else {
          return { ...prev, [field]: [...current, classNum].sort((a, b) => a - b) };
        }
      });
    },
    []
  );

  const handleDownload = useCallback(() => {
    downloadIniFile(config);
  }, [config]);

  const handleCopy = useCallback(async () => {
    await copyIniToClipboard(config);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [config]);

  const handleNewConfig = useCallback(() => {
    setConfig((prev) => ({ ...prev, uuid: generateUUID() }));
  }, []);

  const tabButtonClass = useMemo(
    () => (isActive: boolean) =>
      `px-4 py-2 rounded-lg font-medium transition-colors ${
        isActive
          ? "bg-emerald-600 text-white"
          : "bg-slate-800 text-slate-300 hover:bg-slate-700"
      }`,
    []
  );

  return (
    <div className="min-h-screen bg-slate-950">
      <Header uuid={config.uuid} />

      <main className="max-w-6xl mx-auto px-4 py-6">
        {/* Tab Navigation */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setActiveTab("form")}
            className={tabButtonClass(activeTab === "form")}
          >
            ⚙️ Configuration
          </button>
          <button
            onClick={() => setActiveTab("preview")}
            className={tabButtonClass(activeTab === "preview")}
          >
            📄 Preview .ini
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {activeTab === "form" ? (
              <div className="space-y-6">
                <ProjectInfoSection config={config} updateConfig={updateConfig} />
                <DateConfigSection config={config} updateConfig={updateConfig} />
                <ProcessingOptionsSection config={config} updateConfig={updateConfig} />
                <ChangeDetectionSection config={config} toggleClass={toggleClass} />
              </div>
            ) : (
              <IniPreview
                config={config}
                onCopy={handleCopy}
                onDownload={handleDownload}
                copied={copied}
              />
            )}
          </div>

          {/* Sidebar */}
          <Sidebar
            config={config}
            onDownload={handleDownload}
            onCopy={handleCopy}
            onNewConfig={handleNewConfig}
            copied={copied}
          />
        </div>
      </main>
    </div>
  );
}