// EPSG Coordinate System Options
export const EPSG_OPTIONS = [
  { code: 21097, label: "Kenya (North of Equator, East of 36°E) - EPSG:21097" },
  { code: 32637, label: "UTM Zone 37N - EPSG:32637" },
  { code: 32736, label: "UTM Zone 36S - EPSG:32736" },
  { code: 4326, label: "WGS 84 (Global) - EPSG:4326" },
];

// Land Cover Class Labels (must match trained model)
export const CLASS_LABELS = [
  "primary forest",
  "plantation forest",
  "bare soil",
  "crops",
  "grassland",
  "open water",
  "burn scar",
  "cloud",
  "cloud shadow",
  "haze",
  "sparse woodland",
  "dense woodland",
  "artificial",
];

// Processing step options for the form
export const PROCESSING_STEPS = [
  {
    key: "doBuildComposite",
    label: "Build Composite",
    desc: "Create baseline image",
  },
  {
    key: "doDownload",
    label: "Download Images",
    desc: "Fetch satellite data",
  },
  {
    key: "doClassify",
    label: "Classify",
    desc: "Run ML classification",
  },
  {
    key: "doChange",
    label: "Detect Changes",
    desc: "Find forest loss",
  },
  {
    key: "doVectorise",
    label: "Vectorise",
    desc: "Create alert shapes",
  },
];

// Download source options
export const DOWNLOAD_SOURCES = [
  { value: "dataspace", label: "Copernicus Dataspace (Recommended)" },
  { value: "scihub", label: "SciHub (Legacy)" },
];