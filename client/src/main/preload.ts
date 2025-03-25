import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('voxo', {
  window: {
    minimize: () => ipcRenderer.send('window-control', 'minimize'),
    maximize: () => ipcRenderer.send('window-control', 'maximize'),
    close: () => ipcRenderer.send('window-control', 'close')
  },
  
  // Audio-Steuerung (Platzhalter)
  audio: {
    setInputDevice: (deviceId: string) => ipcRenderer.invoke('audio-set-input', deviceId),
    setOutputDevice: (deviceId: string) => ipcRenderer.invoke('audio-set-output', deviceId),
    getDevices: () => ipcRenderer.invoke('audio-get-devices'),
    // Neue Funktionen
    setVoiceMode: (mode: string) => ipcRenderer.invoke('audio-set-voice-mode', mode),
    getVoiceMode: () => ipcRenderer.invoke('audio-get-voice-mode'),
    setMuted: (muted: boolean) => ipcRenderer.invoke('audio-set-muted', muted),
    getMuted: () => ipcRenderer.invoke('audio-get-muted')
  },
  
  // Game-Adapter-Steuerung (Platzhalter)
  game: {
    connectAdapter: (type: string, config: any) => ipcRenderer.invoke('game-connect', type, config),
    disconnectAdapter: () => ipcRenderer.invoke('game-disconnect'),
    // Neue Funktion
    getStatus: () => ipcRenderer.invoke('game-get-status')
  },
  
  // Neue Module
  
  // Player-Management
  players: {
    getProximityPlayers: () => ipcRenderer.invoke('players-get-proximity'),
    getAllPlayers: () => ipcRenderer.invoke('players-get-all'),
    setPlayerVolume: (playerId: string, volume: number) => 
      ipcRenderer.invoke('players-set-volume', playerId, volume)
  },
  
  // Server-Management
  servers: {
    getServerList: () => ipcRenderer.invoke('servers-get-list'),
    connectToServer: (serverId: string, password?: string) => 
      ipcRenderer.invoke('servers-connect', serverId, password),
    addServer: (serverInfo: any) => ipcRenderer.invoke('servers-add', serverInfo),
    disconnectFromServer: () => ipcRenderer.invoke('servers-disconnect')
  },
  
  // Konfiguration
  config: {
    get: (key: string) => ipcRenderer.invoke('config-get', key),
    set: (key: string, value: any) => ipcRenderer.invoke('config-set', key, value),
    saveAll: () => ipcRenderer.invoke('config-save-all')
  }
});