# 🌌 Saumya Bhardwaj — Developer Portfolio

Welcome to my personal developer portfolio website. Built to showcase full-stack projects, real-time developer tools, systems implementations, and certifications in a modern, interactive, and high-performance interface.

---

<div align="center">

[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=Vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-F024B6?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

🚀 **Live Portfolio Demo:** [saumyabhardwaj.tech](https://saumyabhardwaj.tech)

</div>

---

## 🗺️ Table of Contents

- [✨ Features](#-features)
- [🛠️ Tech Stack & Architecture](#%EF%B8%8F-tech-stack--architecture)
- [📂 Project Showcases](#-project-showcases)
- [⚙️ Local Development](#%EF%B8%8F-local-development)
- [🗂️ Workspace Structure](#%EF%B8%8F-workspace-structure)

---

## ✨ Features

- **Interactive Micro-Animations:** Driven by `framer-motion` for page entries, page scroll indicators, and hover-triggered layout adjustments.
- **Audio Feedback System:** Seamless sound effect triggers on mouse hover, clicks, and file downloads.
- **Responsive Layouts:** Tailored CSS breakpoints using Tailwind CSS for fluid viewing from ultra-wide desktops to mobile devices.
- **Document & Resume Cache-Busting:** Dynamic build-version queries on static assets to prevent outdated browser caching of CVs and certificates.
- **Automated Certifications Display:** Badges and alternating primary/accent layout showing completed professional credentials in real-time.

---

## 🛠️ Tech Stack & Architecture

<details>
<summary>💻 Frontend & Styling</summary>

- **React 18** (Functional components, hooks, custom state management)
- **Vite** (Next-gen rapid bundling and compilation tool)
- **Tailwind CSS** (Responsive designs, layouts, glassmorphism systems)
- **Framer Motion** (Spring physics, scroll-bound animations, and page transitions)
- **Lucide React** (Vector icons for clear designs across device pixels)

</details>

<details>
<summary>🛠️ Custom Hooks & Utilities</summary>

- `useSoundEffects`: Audio cues control plane (click, download, hover sound bindings)
- `useInView`: Scroll position indicators to trigger animations on viewport entry
- `useCounter`: Custom hook for count-up numbers in statistics and dashboard indicators

</details>

---

## 📂 Project Showcases

Here are the key featured projects showcased directly on this website:

| Project Name | Stack | Description | Links |
| :--- | :--- | :--- | :--- |
| **CodeGuard AI** | React, Node.js, Express, Ollama, Docker | AI-powered local code analyzer that scans Java, Python, and JS files for security risks and suggests optimizations without cloud dependencies. | [💻 Code](https://github.com/Saumya-bhardwaj04/CodeGuard-AI) \| [🚀 Live](https://codeguard-ai-0bg0.onrender.com) \| [🛍️ VS Code Extension](https://marketplace.visualstudio.com/items?itemName=codeguard-ai-official.codeguard-ai-extension) |
| **VeloRAG** | Python, Streamlit, Ollama, HNSW Index | A local Vector Database and RAG pipeline visualizer comparing HNSW, KD-Tree, and Brute Force search speeds with PCA plots. | [💻 Code](https://github.com/Saumya-bhardwaj04/VeloRAG) \| [🚀 Live](https://velorag.streamlit.app/) |
| **FactCheck Agent** | Python, Streamlit, Groq, pdfplumber | Automated claims extractor and verifier that parses PDFs, queries the web via DuckDuckGo, and renders fact verdicts using Groq. | [💻 Code](https://github.com/Saumya-bhardwaj04/factcheck-agent) \| [🚀 Live](https://factcheck-agent-zcvhdwza9lxasrpopbmpvu.streamlit.app/) |
| **DPI Control Plane** | React, Python, Scapy, PostgreSQL | Real-time Deep Packet Inspection dashboard for capturing, classifying, and applying rule-based firewall blocklists to live network packets. | [💻 Code](https://github.com/Saumya-bhardwaj04/Deep-Packet-Inspection) \| [🚀 Live](https://app.deepinspect.tech/) |
| **Meloque** | MongoDB, Express, React, Node.js | GenAI-powered publishing platform featuring AI Blog Assist, notifications, debounced authoring search, and Cloudinary storage. | [💻 Code](https://github.com/Saumya-bhardwaj04/Modern-blog-app) \| [🚀 Live](https://www.meloque.me/) |

---

## ⚙️ Local Development

### 1. Prerequisites
Ensure you have **Node.js 18+** and **npm** installed on your workstation.

### 2. Setup & Installation
```bash
# Clone the repository
git clone https://github.com/Saumya-bhardwaj04/Portfolio.git

# Navigate into the project folder
cd Portfolio

# Install NPM dependencies
npm install
```

### 3. Launch Development Server
```bash
npm run dev
# Open http://localhost:8080/ in your browser
```

### 4. Build Production Bundle
```bash
# Bundles the frontend inside the /dist directory
npm run build

# Preview the built production output locally
npm run preview
```

---

## 🗂️ Workspace Structure

```text
├── public/                 # Static assets (Resume, Certificates folder, Icons)
└── src/
    ├── assets/             # Global media files and SVG resources
    ├── components/         # Interactive page section components
    │   ├── About.jsx
    │   ├── Certificates.jsx
    │   ├── Experience.jsx
    │   ├── Hero.jsx
    │   ├── Navigation.jsx
    │   ├── Projects.jsx
    │   ├── Resume.jsx
    │   └── Skills.jsx
    ├── hooks/              # Custom React Hooks (Audio control, Scroll viewport)
    ├── pages/              # Main routing landing pages
    ├── index.css           # Tailored CSS styles and glassmorphism directives
    └── main.jsx            # Application entrypoint
```

---

<div align="center">
Created with 💙 by Saumya Bhardwaj. Feel free to explore and star the repository!
</div>
