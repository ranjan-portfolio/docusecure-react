import React from 'react'; 
import { useEffect } from 'react';
import api,{setAuthToken} from '../api';
import { useAuth } from "react-oidc-context";
import styles from "../css/Upload.module.css"



function  Upload({onUploadSuccess}) {
  const auth = useAuth();

  

  useEffect(() => {
          setAuthToken(auth.user.id_token);
      }, [auth]);
  
  const handleSubmit = async (event) => {
        event.preventDefault();
        const file = event.target.file.files[0];
        console.log(file);
        const formData = new FormData();
        formData.append('file', file);
        try{
          const response= await api.post('/upload', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          });
        }catch(error){
          console.log("Error occured while uploading a file"+error);
        }
      onUploadSuccess();
    }
    
  
    return (
        <div className={styles.uploadForm}>
            <form onSubmit={handleSubmit} method="post" encType="multipart/form-data">
                <label htmlFor="file" className={styles.label}>Upload a file:</label><br></br><br></br>
                <input type="file" name="file" id="file" required className={styles.input} />
                <button type="submit" className={styles.button}>Upload</button>
            </form>
        </div>
    );
}

export default Upload;