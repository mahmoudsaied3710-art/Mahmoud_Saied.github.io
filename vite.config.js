import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Base path = repository name, required for GitHub Pages project sites.
// If you rename the repo, change it here too.
export default defineConfig({
  plugins: [react()],
  base: '/Mahmoud.Saied.github.io/',
})
