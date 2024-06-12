---
layout: default
parent: Robot
nav_order: 3
title: La Programmation
---

# La Programmation

La programmation du robot s'est faite sous PlatformIO, une extension de VSCode qui permet de faire de la programmation embarquée. Cette extension offre plus de liberté que l'IDE Arduino, en profitant notamment du système de visualisation d'arborescence de VSCode.

## Intialisation

Le démarrage du robot se passe comme suit :

1. Initialisation du port série.
2. Initialisation du protocole LIDAR.
3. Initialisation du protocole I²C.
4. Initialisation des pinces.
5. Initialisation des modes de fonctionnement des GPIOs.
6. Mise à zéro des différentes variables de position.
7. Attente de la pose de la tirette et choix de la zone de travail.
8. Attente de l'enlèvement de la tirette.
9. Démarrage.

# déroulée après départ 

le code étant de consequent, nous allons proceder avec une diagramme d'état simplifiée pour comprendre le fonctionnement du code.

```mermaid
stateDiagram-v2
    [*] --> Initialisation

    Initialisation --> AttenteTiretteNonPosee
    state AttenteTiretteNonPosee {
        [*] --> VerifierBouton
        VerifierBouton --> CalibrationBarillet : Bouton appuyé
        CalibrationBarillet --> VerifierBouton : calibrerBarillet()
        VerifierBouton --> DefinirStrategie : Définir la stratégie
        DefinirStrategie --> VerifierBouton
        VerifierBouton --> TirettePosee : Tirette posée
    }

    TirettePosee --> EnAttenteEnlevementTirette
    EnAttenteEnlevementTirette --> Execution : Tirette enlevée

    state Execution {
        [*] --> VerifierArmé
        VerifierArmé --> VerifierObstacle : Armé == vrai
        VerifierArmé --> PasExecution : Armé == faux

        state VerifierObstacle {
            [*] --> ObstacleDétecté
            ObstacleDétecté --> AgirObstacle : Obstacle détecté
            AgirObstacle --> ArreterRobot
            ArreterRobot -->VerifierArmé
            ObstacleDétecté --> PasObstacle : Pas d'obstacle détecté
            PasObstacle --> VerifierEvenement
        }

        VerifierEvenement --> VerifierTimer
        VerifierTimer --> FaireDesPas 
        FaireDesPas --> VerifierArmé 
    }

    Execution --> [*] : Fin du programme

``` 



### Outils logiciels

- **[Visual Studio Code](https://code.visualstudio.com/) :** Un riche éditeur de texte performant où nous venons greffer des extensions afin d'obtenir l'IDE qui nous correspond.
- **[PlatformIO](https://platformio.org/) :** Une plateforme de développement, utilisée pour notre ESP32, offrant une gestion simplifiée des bibliothèques et des outils de compilation. Cela vient sous la forme d'une extension ajoutée à VSCode.

### Bibliothèques

- **[AccelStepper](https://github.com/waspinator/AccelStepper) :** Contrôle des moteurs pas à pas avec des fonctionnalités avancées comme l'accélération et la décélération. Nous l'utilisons pour la partie [steppers](./Steppers_Pamis.html).
- **[Adafruit_PWMServoDriver](https://github.com/adafruit/Adafruit-PWM-Servo-Driver-Library) :** Pour controler les servo via le PCA
- **[RPLIDAE](https://github.com/robopeak/rplidar_arduino) :** Pour la lecture du LIDAR
