import React, { useState, useRef } from 'react';
import axios from 'axios'; // import axios
import PopUp from "./PopUp"


const DataImport = () => {

  const [showPopup, setShowPopup] = useState(false);

  const [selectedFile, setSelectedFile] = useState(null);

  const inputRef = useRef();

  const fileSelectedHandler = event => {
    setSelectedFile(event.target.files[0]);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  const fileUploadHandler = async () => {
    const formData = new FormData(); 
    formData.append('file', selectedFile);

    try {
      const response = await axios.post('http://localhost:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log(response.data);
      setShowPopup(true);
      inputRef.current.value = '';
      setSelectedFile(null);
    } catch (error) {
      console.error('Error uploading file: ', error);
    }
  };

  return (
<div className="flex flex-col items-center justify-center space-y-4">

      <div className="flex items-center space-x-4">
        <input ref={inputRef} type="file" onChange={fileSelectedHandler} className="bg-white border p-2 rounded" />
        <button
          onClick={fileUploadHandler}
          className="bg-sky-400 hover:bg-sky-500 text-white font-bold py-2 px-4 rounded"
        >
          Upload CSV Data
        </button>
      </div>
      <PopUp showPopup={showPopup} onClose={handlePopupClose} />
    </div>
  )
}

export default DataImport;

