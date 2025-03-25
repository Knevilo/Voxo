// Spieler-Position und -Ausrichtung
export interface Position {
    x: number;
    y: number;
    z: number;
  }
  
  export interface Rotation {
    pitch: number;
    yaw: number;
    roll: number;
  }
  
  // Spieler-Entität
  export interface Player {
    id: string;
    name: string;
    position: Position;
    rotation: Rotation;
    speaking: boolean;
    muted: boolean;
    voiceMode: VoiceMode;
  }
  
  // Verfügbare Sprachmodi
  export enum VoiceMode {
    MUTED = 'muted',
    WHISPER = 'whisper',
    TALK = 'talk',
    YELL = 'yell'
  }
  
  // Konfiguration für die Sprachmodi
  export interface VoiceRanges {
    [VoiceMode.WHISPER]: number;
    [VoiceMode.TALK]: number;
    [VoiceMode.YELL]: number;
  }
  
  // Server-Konfiguration
  export interface ServerConfig {
    maxPlayers: number;
    voiceRanges: VoiceRanges;
    tickRate: number;
    turnServer: {
      enabled: boolean;
      url: string;
      username: string;
      credential: string;
    };
  }