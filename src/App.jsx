
import Header from './components/Header'
import Footer from './components/Footer'
import Main   from './components/Main'
import { useAuth } from "react-oidc-context";
import { useEffect } from 'react';


function App() {
  const auth = useAuth();

  useEffect(() => {
    if (!auth.isLoading && !auth.isAuthenticated) {
      auth.signinRedirect(); // ⬅️ Redirect to Cognito login
    }
  }, [auth.isLoading, auth.isAuthenticated]);
  

  const layoutStyle = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh' // ✅ ensures full height
  };
  if(auth.isAuthenticated){
    return (
      <div style={layoutStyle}>
          <Header></Header>
          <Main></Main>
          <Footer></Footer>
      </div>
    )
  }
  else{
    auth.signinRedirect();
  }

  
  
}

export default App
