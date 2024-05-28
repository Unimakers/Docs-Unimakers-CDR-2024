---
layout: default
parent: Robot
has_children: true
nav_order: 3
title: La Programmation
---

# La Programmation

## Logiciels

La programmation est fait sous VS-code, avec l'extention Platformio, une système qui permet de faire de la programmation embarquée.

L'idée etait d'avoir plus de liberté que dans l'arduino IDE, profitant de le système de visualisation d'aboréscence que vscode possède.

## Le setup

Le démarrage du robot se passe comme suit:

- initialisation du port serie
- initialisation du protocole LIDAR
- initialisation du protocole I2C
- initialisation des Pinces
- initialisation des Modes de fonctionnement des GPIOS
- Mise a zero des different variables de postitions
- Attente de pose tirette et choix de la zone de travail
- Attente d'enlevement de tirette
- Demmarage

## Le loop






