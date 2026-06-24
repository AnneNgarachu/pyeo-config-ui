# 🌲 PyEO Config Generator

![Status](https://img.shields.io/badge/status-live-success)
![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38BDF8?logo=tailwindcss)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow)

A web tool that builds ready to use `.ini` configuration files for the
University of Leicester's PyEO (Python for Earth Observation) Forest Alert
System, no hand editing required.

**Live app:** https://pyeo-config-ui.vercel.app/

---

## 🎯 The problem it solves

PyEO is driven by `.ini` configuration files with many interlocking sections:
run mode, forest sentinel parameters, environment paths, raster processing
steps, and vector processing. Writing one by hand means remembering the exact
keys, the right date format (`YYYYMMDD`), Python style booleans (`True` /
`False`), class index lists, and which processing steps to toggle. A single
typo can break a run.

This tool gives you a guided, visual form that produces a correctly formatted
file every time. You fill in the fields, watch the `.ini` update live, then
copy or download it.

---

## ✨ What it does

The interface walks you through four configuration stages and renders a live
preview of the resulting file.

### 1. Project Information
- **Project name** used to label the config and name the downloaded file.
- **Coordinate system (EPSG)** chosen from a preset list: Kenya north of the
  equator (21097), UTM Zone 37N (32637), UTM Zone 36S (32736), and WGS 84
  global (4326).
- **ROI filename** the region of interest shapefile.
- **Model path** the trained classifier used for classification.

### 2. Date Configuration
- **Baseline composite period** the reference "before" window.
- **Monitoring period** the window in which to detect change.
- Dates are entered with a date picker and automatically converted to PyEO's
  `YYYYMMDD` format.

### 3. Processing Options
- **Cloud cover threshold** a 0 to 100 percent slider.
- **Download source** Copernicus Dataspace (recommended) or SciHub (legacy).
- **Processing steps** toggle any of: Build Composite, Download Images,
  Classify, Detect Changes, and Vectorise.

### 4. Change Detection Classes
- Pick the land cover classes to monitor **from** (for example primary forest,
  plantation forest) and the classes to raise an alert when changed **to**.
- The thirteen built in class labels match a standard PyEO trained model.
- A live "Current Rule" summary states the alert in plain language.

### Output
- A live, syntax accurate `.ini` preview with sections for `[run_mode]`,
  `[forest_sentinel]`, `[environment]`, `[raster_processing_parameters]`, and
  `[vector_processing_parameters]`.
- Each generated file is stamped with a unique UUID.
- **Copy to clipboard** or **download** the file (named after your project).

---

## 🚀 How to use it

1. Open the live app at https://pyeo-config-ui.vercel.app/ (or run it locally,
   see below).
2. Work through the four stages, filling in your project details.
3. Watch the **Generated .ini File** panel update as you type.
4. Click **Copy** or **Download** to grab the file.
5. Open the file and update the paths under `[environment]` (marked
   `UPDATE THESE PATHS FOR YOUR SYSTEM`) and your credentials path to match
   your machine, then run it with PyEO.

To run the app yourself:

```bash
npm run dev
```

---

## 🛠️ Tech stack

| Technology    | Version  | Role                                  |
| ------------- | -------- | ------------------------------------- |
| Next.js       | 16.1.6   | React framework and build tooling     |
| React         | 19.2.3   | UI library                            |
| TypeScript    | 5        | Type safe application code            |
| Tailwind CSS  | 4        | Styling and dark theme                |
| ESLint        | 9        | Linting                               |

Versions are taken from `package.json`.

---

## 💻 Local development setup

Requires Node.js (version 20 or newer recommended).

```bash
# 1. Clone the repository
git clone https://github.com/AnneNgarachu/pyeo-config-ui.git
cd pyeo-config-ui

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Then open http://localhost:3000 in your browser.

Other useful scripts:

```bash
npm run build   # Production build
npm run start   # Serve the production build
npm run lint    # Run ESLint
```

---

## 🌍 About PyEO

PyEO (Python for Earth Observation) is the University of Leicester's Forest
Alert System for detecting forest change from satellite imagery. It downloads
Sentinel data, builds image composites, classifies land cover, detects change,
and turns the results into vector alerts.

This config generator is an **independent tool built for use with the Leicester
PyEO system**. It is not an official University of Leicester release and has no
governmental affiliation. It exists to make PyEO configuration faster and less
error prone.

---

## 📬 Contact

Built by **Anne Ngarachu**

- Portfolio: https://annengarachu.com
- LinkedIn: https://www.linkedin.com/in/anne-wanjiru-ngarachu/
- GitHub: https://github.com/AnneNgarachu/

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE)
file for the full text.
