# Bodyflight Lab

Interaktive 3D-Visualisierung der Körperhaltung im Freifall. Ein Springer in Bauchlage, Rückenlage, Sitfly, Headdown, Standup oder Tracking reagiert live darauf, wie du seine Gelenke verstellst. Die Ansicht dreht sich so, dass die Luft immer von unten kommt.

## Funktionen

- **Sechs Disziplinen** mit eigener Grundhaltung und Lernsituationen
- **Gelenke verstellen:** Rumpf, Kopf, Arme und Beine, links und rechts gekoppelt oder einzeln
- **Luft:** Freifall mit Höhenwind und Turbulenz oder Windtunnel mit einstellbarer Luftgeschwindigkeit und schräger Anströmung
- **Anzeige:** Fallrate, Drift, Drehung und Stabilität live, dazu Erklärung, welches Körperteil die Wirkung verursacht
- **Visualisierung:** Luftstrom und Verwirbelungen getrennt schaltbar, Kraftpfeile pro Körperteil, Flugspur von oben. Jedes Körperteil löst Wirbel im Verhältnis zur Kraft aus, die die Luft darauf ausübt. So zeigt der Nachlauf, wo und durch welches Körperteil die Luft gestört wird.

## Starten

Einfach `index.html` im Browser öffnen. Keine Installation nötig, three.js (r128) wird von cdnjs geladen.

## Modell

Jedes Körperteil wird einzeln angeströmt: Gliedmaßen als Zylinder (Querstromprinzip), Rumpf und Becken als Quader, Kopf als Kugel. Daraus ergeben sich Kräfte und Drehmomente, die einen starren Körper mit Masse und Trägheit bewegen. Der Regler „Aktive Korrektur“ steht für die Ausgleichsbewegungen des Springers.

Die neutrale Haltung jeder Disziplin ist so kalibriert, dass sie gerade fliegt (beim Tracking bleibt der Vorwärtsflug erhalten). Jede Abweichung davon zeigt ihre Wirkung. Das Modell ist vereinfacht und ersetzt kein Coaching und kein Tunneltraining.

## Hinweis

`index.html` enthält ein Foto des Gesichts als eingebettetes Bild. Das Repository sollte privat bleiben, solange das Foto enthalten ist.
