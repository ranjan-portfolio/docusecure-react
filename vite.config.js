import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    __AUTHORITY__: JSON.stringify("https://cognito-idp.eu-west-2.amazonaws.com/eu-west-2_EGZ4NHv3x"),
    __CLIENT_ID__: JSON.stringify("3r5u33672k7gvmvdg2b6fclq2j"),
    __REDIRECT_URI__: JSON.stringify("http://localhost:5173"),
    __API_BASE_URL__: JSON.stringify("http://localhost:8080/api")
  }
  
})
