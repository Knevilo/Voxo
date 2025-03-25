import { app, BrowserWindow, ipcMain } from 'electron';
import { autoUpdater } from 'electron-updater';
import * as path from 'path';

// Pfad zur HTML-Hauptdatei
const INDEX_PATH = path.join(__dirname, '../renderer/index.html');

// Verhindert, dass mehrere Instanzen der App laufen
const singleInstanceLock = app.requestSingleInstanceLock();

if (!singleInstanceLock) {
  app.quit();
} else {
  let mainWindow: BrowserWindow | null = null;

  app.on('second-instance', () => {
    if (mainWindow) {
      if (mainWindow.isMinimized()) mainWindow.restore();
      mainWindow.focus();
    }
  });

  app.on('ready', () => {
    createWindow();
    checkForUpdates();
  });

  // Fenster erstellen
  const createWindow = () => {
    mainWindow = new BrowserWindow({
      width: 380,
      height: 500,
      minWidth: 320,
      minHeight: 450,
      webPreferences: {
        preload: path.join(__dirname, 'preload.js'),
        nodeIntegration: false,
        contextIsolation: true
      },
      frame: false, // Eigener Fensterrahmen
      backgroundColor: '#1e2124',
      icon: path.join(__dirname, '../../assets/voxo-icon.png')
    });

    mainWindow.loadFile(INDEX_PATH);

    // Fenster-Steuerung
    ipcMain.on('window-control', (_, command) => {
      if (!mainWindow) return;
      
      switch (command) {
        case 'minimize':
          mainWindow.minimize();
          break;
        case 'maximize':
          if (mainWindow.isMaximized()) {
            mainWindow.unmaximize();
          } else {
            mainWindow.maximize();
          }
          break;
        case 'close':
          mainWindow.close();
          break;
      }
    });
  };

  // App-Verhalten
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

  // Auto-Update-Prüfung
  const checkForUpdates = () => {
    if (process.env.NODE_ENV === 'development') {
      return;
    }
    
    autoUpdater.checkForUpdatesAndNotify();
  };
}