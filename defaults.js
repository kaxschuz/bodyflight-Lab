/*
 * Bodyflight Lab – Startwerte
 *
 * Alle Werte, mit denen die App startet, stehen hier an einer Stelle.
 * Prozentwerte werden als 0–100 angegeben, Winkel in Grad, Geschwindigkeiten in km/h.
 * Die App liest diese Datei beim Laden; danach kann alles in der Oberfläche verändert werden.
 */
window.BODYFLIGHT_DEFAULTS = {

  start: {
    discipline: 'belly',      // belly | back | sit | hd (Headdown) | stand (Standup) | track
    mode: 'free',             // free (Freifall) | tunnel (Windtunnel)
    altitude: 4000,           // Absprunghöhe in m
    newJumpBelow: 1200,       // unter dieser Höhe beginnt automatisch ein neuer Sprung (m)
  },

  jumper: {
    weight: 85,               // Gewicht mit Ausrüstung in kg
    activeCorrection: 0,      // Aktive Korrektur in %
  },

  freefall: {
    wind: 15,                 // Höhenwind in km/h
    windFrom: 250,            // Wind kommt aus … Grad (0 = Nord, 90 = Ost)
  },

  turbulence: 40,             // Turbulenz in %, gilt für Freifall und Windtunnel

  tunnel: {
    airSpeed: 'auto',         // km/h, oder 'auto' = Schwebegeschwindigkeit der aktuellen Disziplin
    tilt: 0,                  // schräge Strömung in Grad
    tiltDirection: 0,         // Richtung der Schräge in Grad
  },

  display: {
    wind: true,               // Luftstrom anzeigen
    vortices: true,           // Verwirbelungen anzeigen
    vortexIntensity: 25,      // Intensität der Verwirbelungen in % (0–200)
    forceArrows: false,       // Kraftpfeile an jedem Körperteil
    slowMotion: false,        // Zeitlupe
    cameraFollows: false,     // Kamera dreht mit
    groundArrow: true,        // Pfeil Richtung Boden
    linkArms: true,           // Arme links = rechts
    linkLegs: true,           // Beine links = rechts
  },

  camera: {
    distance: 5.6,            // Abstand zur Figur in m
    azimuth: 40,              // Blickwinkel um die Figur in Grad
    elevation: 66,            // Höhe der Kamera in Grad (0 = von oben, 90 = seitlich, 180 = von unten)
  },

  /*
   * Grundhaltung jeder Disziplin. Diese Haltung fliegt gerade (die App kalibriert darauf),
   * jede Abweichung davon zeigt ihre Wirkung.
   *   Rumpf:  arch = Hohlkreuz, side = Seitneigung (+ links), twist = Oberkörper drehen (+ linke Schulter zurück),
   *           neck = Kopf in den Nacken
   *   Glieder (gilt für links und rechts):
   *           shAbd = Arm abspreizen, shFlex = Arm Richtung Bauch (+) / Rücken (−), shRot = Arm drehen,
   *           elbow = Ellbogen beugen, hipFlex = Hüfte beugen, hipAbd = Beine spreizen, knee = Knie beugen
   */
  poses: {
    belly: { arch: 15,  side: 0, twist: 0, neck: 25,  shAbd: 95, shFlex: 0,   shRot: 90, elbow: 95, hipFlex: -5, hipAbd: 22, knee: 50 },
    back:  { arch: -10, side: 0, twist: 0, neck: -20, shAbd: 80, shFlex: 30,  shRot: 0,  elbow: 30, hipFlex: 35, hipAbd: 25, knee: 70 },
    sit:   { arch: 0,   side: 0, twist: 0, neck: 0,   shAbd: 80, shFlex: 15,  shRot: 0,  elbow: 25, hipFlex: 90, hipAbd: 25, knee: 90 },
    hd:    { arch: 0,   side: 0, twist: 0, neck: 15,  shAbd: 70, shFlex: 10,  shRot: 0,  elbow: 30, hipFlex: 0,  hipAbd: 28, knee: 8  },
    stand: { arch: 0,   side: 0, twist: 0, neck: 0,   shAbd: 60, shFlex: 10,  shRot: 0,  elbow: 30, hipFlex: 12, hipAbd: 15, knee: 18 },
    track: { arch: -8,  side: 0, twist: 0, neck: 10,  shAbd: 25, shFlex: -15, shRot: 0,  elbow: 5,  hipFlex: -5, hipAbd: 12, knee: 5  },
  },
};
