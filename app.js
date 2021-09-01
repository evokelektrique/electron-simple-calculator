const { app, BrowserWindow } = require('electron')

app.on('ready', () => {
    let mainWindow = new BrowserWindow({
        width: 300,
        height: 422,
        webPreferences: {
          nodeIntegration: true
        }
      });
    mainWindow.loadFile('./src/index.html');
    mainWindow.setMenuBarVisibility(false);
    mainWindow.setResizable(false);
});
