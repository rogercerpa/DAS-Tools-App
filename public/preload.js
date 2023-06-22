// const { contextBridge, ipcRenderer } = require('electron');
// const csv = require('csv-parser');
// const fs = require('fs');

// contextBridge.exposeInMainWorld(
//   'electron',
//   {
//     invokeCsvRead: async (filePath) => {
//       return new Promise((resolve, reject) => {
//         let results = [];

//         fs.createReadStream(filePath)
//           .pipe(csv())
//           .on('data', (data) => results.push(data))
//           .on('end', () => {
//             resolve(results);
//           })
//           .on('error', (error) => {
//             reject(error);
//           });
//       });
//     },
//   }
// );

const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld(
  'electron',
  {
    test: () => {
      return 'Preload script is working';
    },
  }
);