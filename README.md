🎬 MovieBox: Modern React Search App
A high-performance, responsive movie discovery application built with React and the OMDb API. This project demonstrates modular component architecture, custom hook-based state management, and a polished "Dark Mode" UI.

🚀 Key Features
Real-time API Integration: Fetches live movie data using asynchronous JavaScript and the OMDb REST API.

Modular Architecture: UI is broken down into reusable functional components for easier maintenance.

Intelligent Fallbacks: Implemented a multi-tier safety net for broken or missing movie posters.

Polished UX: * Responsive CSS Grid (auto-filling layouts).

"Enter" key support for instant searching.

Text-truncation logic to keep the grid perfectly aligned.

High-end hover animations and emerald green accents.

🛠️ Built With
React 18 (Modern Hooks: useState, useEffect)

CSS3 (Variables, Flexbox, Grid, Linear Gradients)

OMDb API (External Data Source)

📦 Getting Started
1. Clone the repo
Bash
git clone https://github.com/your-username/moviebox.git
cd moviebox
2. Install dependencies
Bash
npm install
3. Add your API Key
Open src/App.js and replace the API_URL with your key:

JavaScript
const API_URL = 'https://www.omdbapi.com?apikey=YOUR_KEY_HERE';
4. Run the app
Bash
npm start
📈 Optimization Highlight
Problem: Many movies in the database lack posters, leading to a "broken" UI.
Solution: Built a custom onError handler and logic to detect "N/A" strings from the API, replacing them with a high-quality cinema-themed fallback to maintain a premium aesthetic.

How to push this to GitHub:
Create a new repo on GitHub called moviebox.

Run these commands in your terminal:

Bash
git add .
git commit -m "docs: add professional README with project details"
git branch -M main
git remote add origin https://github.com/your-username/moviebox.git
git push -u origin main