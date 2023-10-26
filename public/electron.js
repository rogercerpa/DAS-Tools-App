const { app, BrowserWindow,  Menu, MenuItem,shell } = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');
const { setupTitlebar, attachTitlebarToWindow } = require('custom-electron-titlebar/main');
const childProcess = require('child_process');



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
    shell.openPath(folderPath); // Use shell.openPath to open the folder
  });
});


//main Electron app Set-Up

function createWindow() {

  setupTitlebar();

  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    frame: false,
    titleBarStyle: 'hidden',
    titleBarOverlay: true,
    webPreferences: {
      sandbox: false,
      preload: path.join(__dirname, "preload.js"), // the path to your preload script
      contextIsolation: true, 
      enableRemoteModule: false, 
      nodeIntegration: false, 
      devTools: false,
    },
  });


  win.loadURL(
    isDev
      ? 'http://localhost:5001'
      : `file://${path.join(__dirname, '../build/index.html')}`
  );

  attachTitlebarToWindow(win);
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

const menu = new Menu();
menu.append(new MenuItem({
    label: 'File',
    submenu: [
        { label: 'Open' },
        { label: 'Save' }
        // ... other menu items
    ]
}));







