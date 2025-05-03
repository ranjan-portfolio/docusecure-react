import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from "react-oidc-context";

const cognitoAuthConfig = {
  authority: __AUTHORITY__,
  client_id: __CLIENT_ID__,
  redirect_uri: __REDIRECT_URI__,
  response_type: "code",
  scope: "openid email phone",
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider {...cognitoAuthConfig}>
    <App />
    </AuthProvider>
   
  </StrictMode>,
)
