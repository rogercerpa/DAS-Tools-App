import React, { useState } from 'react';
import axios from 'axios'; // import axios

const DataImport = () => {

  const [selectedFile, setSelectedFile] = useState(null);

  const fileSelectedHandler = event => {
    setSelectedFile(event.target.files[0]);
  };

  const fileUploadHandler = async () => {
    const formData = new FormData(); 
    formData.append('file', selectedFile);

    try {
      const response = await axios.post('http://localhost:3000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log(response.data);
    } catch (error) {
      console.error('Error uploading file: ', error);
    }
  };

  const handleClick = async () => {
    try {
      const response = await axios.get('http://localhost:3000/data');
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  }
  

  return (
    <div>
      <button onClick={handleClick} className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded">Load CSV Data</button>
      <div>
      <input type="file" onChange={fileSelectedHandler} />
      <button onClick={fileUploadHandler} className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded">Upload CSV Data</button>
    </div>
    </div>
  )
}

export default DataImport;

