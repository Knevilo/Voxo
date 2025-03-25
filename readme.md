# Vox Omnium (VoxO) - Proximity Voice Chat

![Vox Omnium Logo](client/assets/voxo-logo.png)

Vox Omnium (kurz: VoxO) ist ein Open-Source-Proximity-Voice-Chat-System mit einer modularen Adapter-Architektur für verschiedene Spieleplattformen. Die Anwendung ermöglicht räumliche Audioübertragung mit unterschiedlichen Sprachmodi, die je nach Spielerentfernung dynamisch angepasst werden.

## 🎮 Features

- **Räumliche Audioübertragung** mit vier Sprachmodi:
  - 🔇 Stumm (keine Audioübertragung)
  - 🔈 Flüstern (Whisper): kurze Reichweite
  - 🔉 Sprechen (Talk): mittlere Reichweite
  - 🔊 Rufen (Yell): große Reichweite

- **Modulare Adapter-Architektur** für Spieleintegration:
  - Unreal Engine HTTP-Adapter
  - RCON-Protokoll-Adapter
  - Erweiterbare Schnittstelle für weitere Spieletypen

- **Server-Komponente** mit:
  - MediaSoup SFU für optimierte Audioübertragung
  - Proximity-Berechnung für bis zu 40 gleichzeitige Spieler
  - Einfache Session-Verwaltung und Authentifizierung

- **Benutzerfreundlicher Client** mit:
  - Übersichtliche Spielerliste mit individueller Lautstärkeregelung
  - Serverbrowser mit Passwortschutz
  - Push-to-Talk-Integration mit dem Spiel
  - Umfangreiche Debug-Möglichkeiten

