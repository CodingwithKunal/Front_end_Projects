import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/Front_end_Projects/todo_with_reactjs/',
  plugins: [react()],
})
