# Digit Predictor App

This app connects to the **Deriv API** and analyzes tick data for selected indices 
to generate high-probability digit match predictions.

### Features:
- Dropdown to select volatility index
- Live WebSocket connection to Deriv API
- Strategy + filters applied in background
- Prediction shown after analysis

### Setup Guide:
1. Clone the repository or upload to GitHub.
2. Run `npm install` to install dependencies.
3. Replace `YOUR_API_TOKEN` and `YOUR_APP_ID` inside `src/App.jsx`.
4. Run locally with `npm run dev` or deploy to Vercel.

### Strategy Notes:
- This is a starter version with placeholder strategy & filters.
- Analysis logic runs in the background on live ticks.
- Prediction suggests a likely digit match within 3–10 seconds.
