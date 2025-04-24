import React from 'react'; 

const uploadFormStyle={
    marginTop: '2em',
    marginBottom: '2em'
}

const handleSubmit = (event) => {
    event.preventDefault();
    const file = event.target.file.files[0];
    const formData = new FormData();
    formData.append('file', file);
    fetch('/upload', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });
}

function  Upload() {
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