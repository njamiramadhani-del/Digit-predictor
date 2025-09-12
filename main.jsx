digit-predictor/
├─ src/
│  ├─ main.jsx
│  ├─ App.jsx
│  └─ config.js
├─ index.html
├─ vite.config.js
└─ .env
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Digit Predictor</title>
  </head>
  <body>
    <div id="root"></div>

    <!-- Vite will resolve this path correctly -->
    <script type="module" src="./src/main.jsx"></script>
  </body>
</html>
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src'  // allows you to import like "@/components/MyComponent"
    }
  },
  build: {
    rollupOptions: {
      // keep external modules if needed (not required for main.jsx)
    }
  }
});
VITE_API_TOKEN=KBZ28EV3NgJI2sX
VITE_API_ID=100454
