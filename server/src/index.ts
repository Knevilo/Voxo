// Renderer-spezifischer Code
document.addEventListener('DOMContentLoaded', () => {
    console.log('Vox Omnium Renderer geladen');
    
    // Hier können wir später die UI-Logik implementieren
  });
  
  // TypeScript-Interface für das vom Preload-Script exponierte API
  declare global {
    interface Window {
      voxo: {
        window: {
          minimize: () => void;
          maximize: () => void;
          close: () => void;
        };
        audio: {
          setInputDevice: (deviceId: string) => Promise<void>;
          setOutputDevice: (deviceId: string) => Promise<void>;
          getDevices: () => Promise<MediaDeviceInfo[]>;
        };
        game: {
          connectAdapter: (type: string, config: any) => Promise<boolean>;
          disconnectAdapter: () => Promise<void>;
        };
      };
    }
  }