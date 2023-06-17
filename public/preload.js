const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld(
  'api', {
    send: (channel, data) => ipcRenderer.send(channel, data),
    on: (channel, callback) => {
      const newCallback = (_event, data) => callback(data);
      ipcRenderer.on(channel, newCallback);
      return newCallback;
    },
    removeListener: (channel, callback) => ipcRenderer.removeListener(channel, callback),
    invoke: async (channel, ...args) => await ipcRenderer.invoke(channel, ...args),
  }
);


