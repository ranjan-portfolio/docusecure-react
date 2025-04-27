import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from "react-oidc-context";

const cognitoAuthConfig = {
  authority: "https://cognito-idp.eu-west-2.amazonaws.com/eu-west-2_EGZ4NHv3x",
  client_id: "3r5u33672k7gvmvdg2b6fclq2j",
  redirect_uri: "http://localhost:5173",
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
