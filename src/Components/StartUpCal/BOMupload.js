import React from 'react'

function BOMupload() {
  return (
    <div className="flex flex-col items-center justify-center space-y-2">      
        <div className="flex items-center space-x-2">
            <input  type="file"  className="bg-white border p-2 rounded" />
            <button
            //   onClick={fileUploadHandler}
            className="bg-sky-400 hover:bg-sky-500 text-white font-bold py-2 px-4 rounded"
            >
            Upload CSV BOM
            </button>
        </div>
  </div>
  )
}

export default BOMupload