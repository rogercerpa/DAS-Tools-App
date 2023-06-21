const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');
const axios = require('axios')
const fs = require('fs');
const parse = require('csv-parse');

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    backgroundColor: '#FFF', 
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'), // the path to your preload script
      contextIsolation: true, 
      enableRemoteModule: false, 
      nodeIntegration: false, 
    },
  });

  win.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`
  );
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

//node integration

//axios http request example
// axios.get('https://api.github.com/users/github')
//   .then(response => console.log(response.data))
//   .catch(error => console.error(error));

// csv file handling

// const fs = require('fs');
// const Papa = require('papaparse');

// fs.readFile('D:\My Drive\QueueData\WQSummary_Subscribed_GallowayJeff.csv', 'utf8', (err, data) => {
//   if (err) {
//     console.error('Error reading the file:', err);
//     return;
//   }

// Papa.parse(data, {
//   header: true,
//   complete: (results) => {
//     console.log('Finished parsing:', results.data);
//   },
//   error: (err) => {
//     console.error('Error parsing CSV:', err);
//   },
// });
// });

//read data from a csv file

ipcMain.handle('read-csv', async (event, filePath) => {
    const parser = fs
        .createReadStream(filePath)
        .pipe(parse({ delimiter: ',' }));

    const data = [];
    for await (const record of parser) {
        data.push(record);
    }

    return data;
});



