const { contextBridge, ipcRenderer } = require('electron');
const customTitlebar = require('custom-electron-titlebar');
const { remote } = require('electron');

contextBridge.exposeInMainWorld(
  'electron',
  {
    ipcRenderer: {
      send: (channel, data) => ipcRenderer.send(channel, data),
      on: (channel, func) => ipcRenderer.on(channel, func),
      removeAllListeners: (channel) => ipcRenderer.removeAllListeners(channel)
    }
  }
);


window.addEventListener('DOMContentLoaded', () => {
  new customTitlebar.Titlebar({
    backgroundColor: customTitlebar.Color.fromHex('#2f3241'),
    menu: remote.Menu.getApplicationMenu(),
  });

  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type])
  }
})
