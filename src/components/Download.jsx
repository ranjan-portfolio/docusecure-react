import React from "react";
import { useState } from "react";



function Download(){

const [filename,setFilename]=useState(['Pirates of Carribean.pdf',
                                       'Son of Jedvah.pdf',
                                       'Handbook to React.pdf']);

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
                    {filename.map((file,index)=>(
                        <tr key={index}>
                            <td style={tdStyle}>{file}</td>
                            <td style={tdStyle}><a href="">Download</a></td>
                        </tr>
                    ))}
                </tbody>
        </table>
        </div>
    )

}

export default Download;