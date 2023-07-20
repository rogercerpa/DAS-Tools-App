const { app, BrowserWindow } = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');

// IPC listener

const { ipcMain } = require('electron');

ipcMain.on('create-folder-and-files', (event, arg) => {
  const fs = require('fs');
  const path = require('path');
  const folderPath = arg.folderPath;
  const templateFolderPath = arg.templateFolderPath;

  // Check if the directory exists, if not, create it
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
  }

  // Read the template files
  fs.readdir(templateFolderPath, (err, files) => {
    if (err) event.reply('folder-files-response', { success: false, error: err });

    // For each file in the templates, create a copy in the new folder
    files.forEach(file => {
      const currentFilePath = path.join(templateFolderPath, file);
      const newFilePath = path.join(folderPath, file);

      // Copy file to new location
      fs.copyFile(currentFilePath, newFilePath, (err) => {
        if (err) event.reply('folder-files-response', { success: false, error: err });
        console.log(`${file} was copied to ${folderPath}`);
      });
    });

    event.reply('folder-files-response', { success: true });
  });
});


//main Electron app Set-Up

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    backgroundColor: '#FFF', 
    webPreferences: {
      preload: path.join(__dirname, './preload.js'), // the path to your preload script
      contextIsolation: true, 
      enableRemoteModule: false, 
      nodeIntegration: false, 
      devTools: true,
    },
  });

  win.loadURL(
    isDev
      ? 'http://localhost:5001'
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





