---
layout: default
parent: PAMI
nav_order: 3
title: Programmation
has_children: true
---

# Programmation du microcontrôleur ESP32

## Objectifs

La programmation du microcontrôleur réalise ainsi ces actions :
- Pollinisation des jardinières
- Détection de potentielles collisions
- Synchronisation avec le robot principal

## Logique fonctionnelle

La logique fonctionnelle du PAMI repose sur une séquence d'actions précises pour garantir le bon déroulement de ses tâches durant le match :

1. **Initialisation :** Après 90 secondes de match, l'ESP32 active les steppers ainsi que le servomoteur, et lance la série d'instructions pour la stratégie.
2. **Navigation :** Le PAMI quitte sa zone de départ et se dirige vers sa zone de pollinisation attribuée dans son code. Il s'assure d'éviter les obstacles à l'aide de son capteur ultrason.
3. **Pollinisation :** Une fois arrivé à destination, le PAMI établit le contact avec la plante et reste ainsi jusqu'à la fin du match.
4. **Désactivation :** Après un peu moins de 10 secondes passées, l'ESP32 désactive les steppers ainsi que le servomoteur. Ainsi, nous empêchons une potentielle disqualification due à une erreur de déplacement du PAMI.

![Algorigramme PAMI](../images/algorigramme_pami.drawio.svg)

Cela constitue donc la base programmable pour notre robot que l'on va implémenter.

## Timers hardware

Les opérations d'initialisation et de désactivation du PAMI sont possibles grâce à l'utilisation de timers hardware présents sur l'ESP32. Ils permettent de compter le temps passé avec une grande précision, tout en étant indépendants du CPU. Ainsi, lors de la mise sous tension de la carte électronique, le microcontrôleur traite les instructions demandées dans le code au démarrage. Il définit ensuite un timer comptant jusqu'à 99 secondes. Au déploiement de la tirette, le timer débute. Après avoir compté 90,5 secondes, il lance la stratégie du PAMI. Lorsque les 99 secondes sont atteintes, le timer expire et force l'exécution d'une fonction désactivant les steppers et le servomoteur. À ce moment-là, la carte a terminé l'exécution du code.

## Outils de développement utilisés

Pour bien appréhender la programmation de l'[ESP32-S3](https://www.espressif.com/en/products/socs/esp32-s3), il est essentiel de mettre en place l'environnement de développement qui servira tout le long du projet. Cette section détaille donc les outils et les bibliothèques nécessaires pour coder, tester et déployer notre PAMI.

### Outils logiciels

- **[Visual Studio Code](https://code.visualstudio.com/) :** Un riche éditeur de texte performant où nous venons greffer des extensions afin d'obtenir l'IDE qui nous correspond.
- **[PlatformIO](https://platformio.org/) :** Une plateforme de développement, utilisée pour notre ESP32, offrant une gestion simplifiée des bibliothèques et des outils de compilation. Cela vient sous la forme d'une extension ajoutée à VSCode.

### Bibliothèques

- **[AccelStepper](https://github.com/waspinator/AccelStepper) :** Contrôle des moteurs pas à pas avec des fonctionnalités avancées comme l'accélération et la décélération. Nous l'utilisons pour la partie [steppers](./Steppers_Pamis.html).
- **[Ultrasonic](https://github.com/ErickSimoes/Ultrasonic) :** Interfaçage et contrôle des capteurs à ultrasons afin de mesurer des distances avec précision. Nous l'utilisons pour la partie [obstacles](./Obstacles_Pamis.html).
- **[ESP32Servo](https://github.com/jkb-git/ESP32Servo) :** Contrôle des servomoteurs en utilisant les broches PWM de l'ESP32. Nous l'utilisons pour la partie [pollinisation](./Pollinisation_Pamis.html).
