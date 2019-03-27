const electron = require('electron');
var path = require("path");
const { app, BrowserWindow, session } = require('electron')
require('electron-reload')(__dirname);

app.on('ready', () => {

    session.defaultSession.webRequest.onBeforeSendHeaders((details, callback) => {
    details.requestHeaders['User-Agent'] = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36 OPR/57.0.3098.116';
    callback({ cancel: false, requestHeaders: details.requestHeaders });
      });

    //Create the browser window
    


    mainWindow = new BrowserWindow({
        width: 1200,
        height: 900,
        webPreferences: {
            nodeIntegration: false,
             preload:   path.resolve(__dirname, 'scripts.js')
        }
    });
    mainWindow.loadURL('https://web.whatsapp.com');

});