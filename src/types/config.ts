// PyEO Configuration Types

export interface PyEOConfig {
  uuid: string;
  projectName: string;
  startDate: string;
  endDate: string;
  compositeStart: string;
  compositeEnd: string;
  epsg: number;
  cloudCover: number;
  modelPath: string;
  roiFilename: string;
  changeFromClasses: number[];
  changeToClasses: number[];
  doBuildComposite: boolean;
  doDownload: boolean;
  doClassify: boolean;
  doChange: boolean;
  doVectorise: boolean;
  downloadSource: string;
}

export const DEFAULT_CONFIG: PyEOConfig = {
  uuid: "",
  projectName: "Forest_Monitoring",
  startDate: "2024-01-01",
  endDate: "2024-01-31",
  compositeStart: "2023-01-01",
  compositeEnd: "2023-12-31",
  epsg: 21097,
  cloudCover: 25,
  modelPath: ".\\models\\model.pkl",
  roiFilename: "roi.shp",
  changeFromClasses: [1, 2],
  changeToClasses: [3],
  doBuildComposite: true,
  doDownload: true,
  doClassify: true,
  doChange: true,
  doVectorise: true,
  downloadSource: "dataspace",
};