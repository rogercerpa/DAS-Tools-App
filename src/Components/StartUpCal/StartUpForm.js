import React from 'react';

function StartUpForm() {
  return (
    <div className="flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Start Up Calculator</h2>

        <form>
          <div className="mb-4">
            <label htmlFor="companyName" className="block text-sm font-medium text-gray-600">Project Name:</label>
            <input type="text" id="companyName" name="companyName" placeholder="Enter company name" className="mt-2 p-2 w-full border rounded-md"/>
          </div>

          <div className="mb-4">
            <label htmlFor="industry" className="block text-sm font-medium text-gray-600">Location:</label>
            <select id="industry" name="industry" className="mt-2 p-2 w-full border rounded-md">
              <option value="tech">Latin America</option>
              <option value="health">Asia</option>
              <option value="finance">Europe</option>
              <option value="education">Local USA</option>
            </select>
          </div>

          <div className="mb-4">
            <span className="block text-sm font-medium text-gray-600">Controls:</span>
            <div className="mt-2">
              <label className="inline-flex items-center">
                <input type="checkbox" name="funding" value="seed" className="mr-2"/>
                nLight Wired
              </label>
              <label className="inline-flex items-center ml-4">
                <input type="checkbox" name="funding" value="seriesA" className="mr-2"/>
                nLight Air
              </label>
              <label className="inline-flex items-center ml-4">
                <input type="checkbox" name="funding" value="seriesA" className="mr-2"/>
                Fresco
              </label>
              <label className="inline-flex items-center ml-4">
                <input type="checkbox" name="funding" value="seriesA" className="mr-2"/>
                Pathway
              </label>
            </div>
          </div>

          <div className="mb-4">
            <span className="block text-sm font-medium text-gray-600">Graphics:</span>
            <div className="mt-2">
              <label className="inline-flex items-center">
                <input type="radio" name="size" value="small" className="mr-2"/>
                None
              </label>
              <label className="inline-flex items-center ml-4">
                <input type="radio" name="size" value="medium" className="mr-2"/>
                nFloorplan
              </label>
              <label className="inline-flex items-center ml-4">
                <input type="radio" name="size" value="large" className="mr-2"/>
                Envysion
              </label>
            </div>
          </div>

          <div className="mb-4">
            <span className="block text-sm font-medium text-gray-600"> Fresco:</span>
            <div className="mt-2">
              <label className="inline-flex items-center">
                <input type="checkbox" name="funding" value="seed" className="mr-2"/>
                BACnet
              </label>
              <label className="inline-flex items-center ml-4">
                <input type="checkbox" name="funding" value="seriesA" className="mr-2"/>
                DMX
              </label>
            </div>
          </div>
          


          {/* <div className="mb-4">
***possible textarea for project description
            <label htmlFor="description" className="block text-sm font-medium text-gray-600">Description:</label>
            <textarea id="description" name="description" placeholder="Describe your startup" className="mt-2 p-2 w-full border rounded-md"></textarea>
          </div> */}

          <div>
            <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default StartUpForm;
