import React, { useState } from 'react';

const UploadForm = () => {
    const [file, setFile] = useState(null);
    const types = ['image/png', 'image/jpeg'];
    const [error, setError] = useState(null);
    const changeHandler = (e) => {
        let selected = e.target.files[0];
        
        if(selected && types.includes(selected.type)){
            setFile(selected);
            setError('');
        } else{
            setFile(null);
            setError('Please select and image file (png or jpeg)');
        }
    }
    return (
        <form>
            <label>
            <input type ="file" onChange ={changeHandler}/>
            <span>+</span>
            </label>
            <div className="output">
                {error && <div className = "error">{error}</div>}
                {file && <div>{file.name}</div>}
                {file && <ProgressBar file={file} setFile={setFile}/>}
            </div>
        </form>
    )
}

export default UploadForm;