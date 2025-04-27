import React from 'react'; 
import { useEffect } from 'react';
import api,{setAuthToken} from '../api';
import { useAuth } from "react-oidc-context";

const uploadFormStyle={
    marginTop: '2em',
    marginBottom: '2em'
}



const handleSubmit = async (event) => {
    event.preventDefault();
    const file = event.target.file.files[0];
    const formData = new FormData();
    formData.append('file', file);
    
    try {
      const response =  api.post('/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Upload successful:', response.data);
    } catch (error) {
      console.error('Upload error:', error);
    }
  };


function  Upload() {
  const auth = useAuth();

  useEffect(() => {
        if (!auth.isAuthenticated) {
          auth.signinRedirect();
        }
        if(auth.isAuthenticated){
          console.log("I am already authenticated at Download page")
          setAuthToken(auth.user.id_token);
        }
      }, [auth]);
    
  if (!auth.isAuthenticated) {
        return <div>Redirecting to login...</div>;
  }
    return (
        <div style={uploadFormStyle}>
            <form method="post" encType="multipart/form-data" onSubmit={handleSubmit}>
                <label htmlFor="file">Upload a file:</label><br></br><br></br>
                <input type="file" name="file" id="file" required />
                <button type="submit">Upload</button>
            </form>
        </div>
    );
}

export default Upload;