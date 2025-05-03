import React from "react";
import { useState,useEffect } from "react";
import Upload from "./Upload";
import Download from "./Download";
import WelcomeMessage from "./WelcomeMessage";
import { useAuth } from "react-oidc-context";
import api,{setAuthToken} from '../api';
import styles from "../css/Main.module.css";



function Main(){

   const auth=useAuth();
   const [files, setFiles] = useState([]);


   useEffect(() => {
      if (auth?.user?.id_token) {
        setAuthToken(auth.user.id_token);
        fetchFiles(); // Initial load
      }
    }, [auth]);

   const fetchFiles = async () => {
      try {
        const response = await api.get('/');
        setFiles(response.data);
      } catch (error) {
        console.error('Error fetching files:', error);
      }
    };
  
return(
      <main className={styles.mainStyle}>
        <WelcomeMessage username={auth.user?.profile?.email}></WelcomeMessage>
        <Upload onUploadSuccess={fetchFiles}></Upload>
        <Download files={files}></Download>
      </main>
   )
}

export default Main;