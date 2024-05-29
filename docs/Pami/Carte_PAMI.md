---
layout: default
parent: PAMI
nav_order: 1
title: Électronique
has_children: true
---

## Contexte

La carte du PAMI doit permettre à un châssis sur roues de se déplacer vers son objectif (plantes) sur un terrain de 2m x 3m pendant 10 secondes, en respectant les mesures de sécurité.

## Cahier des charges
   
- **Contrôle de trajectoire :**
  - Atteindre les plantes rapidement et efficacement.
	
- **Arrêt d'urgence :**
  - Avoir un bouton d'arrêt d'urgence à disposition.
	
- **Détection d'obstacle :**
  - Être capable de s'arrêter automatiquement à l'approche d'un obstacle.

## Contraintes

- **Dimensions :** 80mm x 80mm
- **Quantité de couches de circuits électriques possibles :** 2 couches
- **Points de fixation :** 4 trous de 3mm de diamètre

## Conception

### Choix des composants

- **ESP32-S3-VROOM :** Microcontrôleur standardisé suffisamment récent.
- **Port USB_OTG**
- **TMC2209 SILENTSTEPSTICK :** Drivers de moteur pas à pas à disposition du club.
- **Traco TSR_2-2433 :** Régulateur abaisseur de tension 5V/3.3V à disposition du club.
- **Interrupteurs :**
  - Interruption d'urgence de l'alimentation.
  - Activation du microcontrôleur.
  - Changement de stratégie.
- **Buzzer/Beeper :** Feedback sonore des actions du PAMI.
- **Écran :** Feedback visuel de l'état du PAMI.
- **LEDs de vérification :** Feedback électrique de l'état des circuits.

### Choix de l'alimentation 5V/3.3V

- **5V :** Utilisé pour les moteurs pas à pas et les servomoteurs.
- **3.3V :** Utilisé pour le transfert de données au sein de la carte.

### Détermination du design

- **Antenne :** Besoin que l'antenne ne soit pas obstruée.
- **Gestion des câbles :** Besoin de passages pour organiser les câbles.
 
