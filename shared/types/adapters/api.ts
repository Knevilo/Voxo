import { Player, Position, Rotation } from '../core';

// Interface für alle Spiel-Adapter
export interface GameAdapter {
  name: string;
  init(): Promise<boolean>;
  connect(): Promise<boolean>;
  disconnect(): Promise<void>;
  getLocalPlayer(): Promise<Player>;
  getPlayers(): Promise<Player[]>;
  onPositionUpdate(callback: (player: Player) => void): void;
}

// Unreal HTTP Adapter-Konfiguration
export interface UnrealAdapterConfig {
  port: number;
  tickRate: number;
  autoConnect: boolean;
}

// RCON Adapter-Konfiguration
export interface RconAdapterConfig {
  host: string;
  port: number;
  password: string;
  tickRate: number;
}