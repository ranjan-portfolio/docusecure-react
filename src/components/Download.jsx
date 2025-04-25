import React from "react";
import { useState,useEffect } from "react";
import api,{setAuthToken} from '../api';
import { useAuth } from "react-oidc-context";



function Download(){

const [files,setFiles]=useState([]);

const auth= useAuth();

useEffect(()=>{
    if(auth.isAuthenticated && auth.user?.access_token){
        setAuthToken(auth.user.access_token);
    }
    
},[auth.isAuthenticated,auth.user]);

const fetchFiles=async()=>{
    try{
        const response=await api.get('/files');
        setFiles(response.data);
    }catch(error){
        console.error('Error fetching files:',error);
    }
};

useEffect(()=>{
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