import React from "react";
import api,{setAuthToken} from '../api';
import { useAuth } from "react-oidc-context";
import { useState,useEffect } from "react";
import styles from "../css/Download.module.css";


function Download({files}){

const auth=useAuth();
const downloadURI=import.meta.env.VITE_API_BASE_URL;

useEffect(() => {
if (auth?.user?.id_token) {
        setAuthToken(auth.user.id_token);
      }
}, [auth]);

const downloadFiles=async(documentId)=>{
        try{
            const response= await api.get(`/download/${documentId}`,{
                responseType: 'blob',
            });
            
            const blob = new Blob([response.data], { type: response.headers['content-type'] });
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'filename.pdf'); // fallback name if not from headers
            document.body.appendChild(link);
            link.click();
            link.remove();
            window.URL.revokeObjectURL(url);
        }catch(error){
            console.error('Error in downloading file'+error);
        }
};

    return(
        <div>
            <h3>Your Uploaded Files</h3>
            <table className={styles.tableStyle}>
                <thead className={styles.thStyle}>
                    <tr className={styles.trStyle}>
                        <th className={styles.thStyle}>Filename</th>
                        <th className={styles.thStyle}>Download</th>
                    </tr>
                </thead>
                <tbody>
                    {files.map((file,index)=>(
                        <tr key={index} className={styles.trStyle}>
                            <td className={styles.tdStyle}>{file.name}</td>
                            <td className={styles.tdStyle}><a href="#" onClick={(e)=>{
                                e.preventDefault();
                                downloadFiles(file.fileId)
                            } }>Download</a></td>
                        </tr>
                    ))}
                </tbody>
        </table>
        </div>
    )

}

export default Download;