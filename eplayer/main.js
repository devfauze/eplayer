const { app, BrowserWindow, ipcMain } = require('electron')
const { join } = require('node:path') 
const { writeFile } = require('node:fs')
let mainWindow

const musicDir = join(__dirname,"..","public","musics")

function createWindow () {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      preload: `${__dirname}/preload.js`
    }
  })
  mainWindow.loadURL('http://localhost:3000')
  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.whenReady().then(async () => {
  createWindow()
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

ipcMain.on('music-upload', (event, file) => {
  const filePath = join(musicDir, file.name)
  writeFile(filePath, file.data, async (err) => {
    if(err) {
      mainWindow.webContents.send('toast: recive', err)
    } else {
      sendUpdateList()
      mainWindow.webContents.send('toast: recive', 'Arquivo recebido com sucesso!')
    }
  })
})

ipcMain.on('music-get', () => {
  sendUpdateList()
})

async function sendUpdateList() {
  const files = await fs.promises.readdir(musicDir)
  mainWindow.webContents.send('music-list', files)
}

ipcMain.on('music-delete', async (event, file) => {
  const filePath = path.join(musicDir, file);
  fs.unlink(filePath, async (err) => {
    if (err) {
      mainWindow.webContents.send("toast:recive", err)
    } else {
      sendUpdateList();
      mainWindow.webContents.send("toast:recive", "File deleted successfully");
    }
  });
});

ipcMain.on('music-to-play', (event, fileName) => {
  mainWindow.webContents.send("music-playable", fileName)
});