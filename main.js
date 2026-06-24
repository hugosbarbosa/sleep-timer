const { app, BrowserWindow, ipcMain, Tray, Menu, nativeImage } = require('electron');
const { exec } = require('child_process');
const path = require('path');

let mainWindow;
let tray;
let shutdownProcess = null;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 420,
    height: 620,
    resizable: false,
    frame: false,
    transparent: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    },
    icon: path.join(__dirname, 'icon.ico')
  });

  mainWindow.loadFile('index.html');

  mainWindow.on('closed', () => { mainWindow = null; });
}

app.whenReady().then(() => {
  createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

ipcMain.on('schedule-shutdown', (event, { seconds, action }) => {
  let cmd = '';
  if (action === 'shutdown') cmd = `shutdown /s /t ${seconds}`;
  else if (action === 'restart') cmd = `shutdown /r /t ${seconds}`;
  else if (action === 'sleep') cmd = `shutdown /h`;
  else if (action === 'logoff') cmd = `shutdown /l`;

  exec(cmd, (err) => {
    if (err) event.reply('shutdown-result', { success: false, error: err.message });
    else event.reply('shutdown-result', { success: true, cmd });
  });
});

ipcMain.on('cancel-shutdown', (event) => {
  exec('shutdown /a', (err) => {
    event.reply('cancel-result', { success: !err });
  });
});

ipcMain.on('minimize-app', () => { if (mainWindow) mainWindow.minimize(); });
ipcMain.on('close-app', () => { app.quit(); });
