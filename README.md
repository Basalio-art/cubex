# Cubex Timer

A high-performance, cross-platform Rubik's Cube speed tracking and analytics system designed to record solve times, monitor performance trends, and support skill improvement over time. Built with Vanilla JavaScript and Vite, CubeX provides precision timing and advanced session statistics packaged for Web, Windows, and Android.

## 🚀 Features

-   High-Precision Timer: Millisecond tracking using requestAnimationFrame for smooth performance.
-   Smart Scrambler: Generates random-state scrambles for standard 3x3x3 cubes.
-   Comprehensive Stats: Automatic calculation of Mo3, Ao5, Ao12, and Ao100.
-   Visual Analytics: Performance trend monitoring and skill improvement tracking.
-   3D Visualization: Integrated cube visualization and solving support using Three.js and cubing.js.
-   Cross-Platform:
    -   Desktop: Native Windows experience via Electron.
    -   Mobile: Android support via Capacitor.

## 🛠️ Tech Stack

-   Bundler: [Vite](https://vite.dev/)
-   Frontend: Vanilla JavaScript, HTML5, CSS3
-   Animation & 3D: GSAP, Three.js
-   Cubing Logic: cubing.js, cubejs, min2phase.js, sr-scrambler
-   Desktop Wrapper: [Electron](https://www.electronjs.org/)
-   Mobile Wrapper: [Capacitor](https://capacitorjs.com/)

## 📐 Statistics Logic

To ensure professional cubing standards, the averages are calculated as follows:

-   Mo3 (Mean of 3): The straight mathematical average of the last 3 solves.
-   AoX (Average of X): Calculated by taking the last X solves, removing the fastest and slowest times (outliers), and averaging the remaining values.

## 📦 Installation & Setup

### Prerequisites

-   Node.js (Latest LTS)
-   Android Studio (for Android builds)

### 1. Clone & Install

git clone https://github.com/Basalio-art/cubex.git
cd cubex
npm install

### 2. Development

```bash
npm run dev
```

### 3. Build for Platforms

-   Package script:
    ```json
    "scripts": {
        "dev": "vite",
        "build": "vite build",
        "preview": "vite preview",
        "sync:android": "vite build && npx cap sync android",
        "open:android": "vite build && npx cap sync android && npx cap open android",
        "dev:electron": "vite build && concurrently \"vite\" \"wait-on http://localhost:5173 && electron .\"",
        "build:electron": "vite build && electron-builder"
    }
    ```  

-   Web Preview:
    ```bash
    npm run preview
    ```

-   Windows (Electron):
    ```bash
    npm run dev:electron # For development
    npm run build:electron # To generate .exe setup
    ```

-   Android (Capacitor):
    ```bash
    npm run sync:android # Build and sync to Android project
    npm run open:android # Open in Android Studio
    ```

## ⚖️ License

Distributed under the MIT License.

```
Copyright (c) 2026 Basalio-art

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

Author: [Basalio-art](https://github.com/Basalio-art)

Project Link: https://github.com/Basalio-art/cubex
