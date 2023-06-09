const { app, BrowserWindow} = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');
// const Store = require('electron-store');

// const store = new Store();

// store.set('user', {
//   name: 'John Doe',
//   email: 'john@doe.com'
// });

// ipcMain.on('get-user', (event) => {
//   const user = store.get('user');
//   event.reply('get-user-reply', user);
// });

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      contextIsolation: true,
      // preload: path.join(__dirname, 'preload.js'),
      enableRemoteModule: true,
      nodeIntegration: false,
      webSecurity: false, // Add this line
    },
  });

  const indexPath = path.join(__dirname, './build/index.html');
  console.log(`Loading index.html from ${indexPath}`);
  win.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${indexPath}`
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



