const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('eplayerAPI', {
    SendToElectron: (channel, data) => ipcRenderer.send(channel, data),
    RecieveFromElectron:  (channel,func) => ipcRenderer.on(channel, (event, ...args) => func(event, ...args)) 
})