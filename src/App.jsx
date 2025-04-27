
import Header from './components/Header'
import Footer from './components/Footer'
import Main   from './components/Main'
import { useAuth } from "react-oidc-context";
import { useState,useEffect } from 'react';


function App() {
  const auth = useAuth();
  const [authToken, setAuthToken] = useState('');

  useEffect(() => {
    console.log('auth.isLoading:', auth.isLoading);
    console.log('auth.isAuthenticated:', auth.isAuthenticated);
    if (!auth.isLoading && !auth.isAuthenticated) {
      console.log('Inside signinRedirect methods');
      auth.signinRedirect(); // ⬅️ Redirect to Cognito login
    }
    if(auth.isAuthenticated && auth.user?.id_token){
      setAuthToken(auth.user?.id_token);
     // console.log('id token:'+auth.user.id_token);
    }
  }, [auth.isLoading, auth.isAuthenticated]);
  

  const layoutStyle = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh' // ✅ ensures full height
  };

  if (auth.isLoading) {
    return <div>Loading authentication...</div>; 
  }

  if (!auth.isAuthenticated) {
    return <div>Redirecting to login...</div>; 
  }

  
  return (
      <div style={layoutStyle}>
          <Header></Header>
          <Main></Main>
          <Footer></Footer>
      </div>
  )
  
 

  
  
}

export default App
