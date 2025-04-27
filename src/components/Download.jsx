import React from "react";
import { useState,useEffect } from "react";
import api,{setAuthToken} from '../api';
import { useAuth } from "react-oidc-context";

function Download(){

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

const [files,setFiles]=useState([]);

const fetchFiles=async()=>{
    try{
        console.log("async() fetchFiles is called");
        const response=await api.get('/');
       // console.log("response.data is ",response.data);
        setFiles(response.data);
    }catch(error){
        console.error('Error fetching files:',error);
    }
};

useEffect(()=>{
    console.log("useEffect fetchFiles is called");
    fetchFiles();
},[]);

const tableStyle={
        width: '100%',
        borderCollapse: 'collapse',
        marginTop: '1em'
} 

const thStyle={
    padding: '0.75em',
    borderBottom: '1px solid #ccc',
    textAlign: 'left',
    backgroundColor: '#f1f1f1'
}

const tdStyle={
    padding: '0.75em',
    borderBottom: '1px solid #ccc',
    textAlign: 'left',
}

    return(
        <div>
            <h3>Your Uploaded Files</h3>
            <table style={tableStyle}>
                <thead style={thStyle}>
                    <tr>
                        <th>Filename</th>
                        <th>Download</th>
                    </tr>
                </thead>
                <tbody>
                    {files.map((file,index)=>(
                        <tr key={index}>
                            <td style={tdStyle}>{file.name}</td>
                            <td style={tdStyle}><a href="http://<<url>>/download/{file.fileId}">Download</a></td>
                        </tr>
                    ))}
                </tbody>
        </table>
        </div>
    )

}

export default Download;