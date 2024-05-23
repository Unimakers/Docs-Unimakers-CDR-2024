---
layout: default
parent: Pamis
nav_order: 3
title: Programmation
---

# Programmation du microcontrôleur ESP32

## Introduction

### Déroulement

Le PAMI n'entre en jeu qu'à partir de la 90e seconde d'un match. Il quitte sa zone de départ et a 10 secondes pour aller toucher une plante ou un pot contenant la plante dans une zone de dépose (action de polliniser). Enfin, il doit rester en contact de la plante jusqu'à la fin du match.

### Contraintes

Il peut :
- être touché par le robot de son équipe, mais pas manipulé
- se déployer dans la limite d'une augmentation de 10 cm de son périmètre

Il ne peut pas :
- amener une plante dans une zone
- sortir une plante d'une zone (invalidation de l'action du PAMI le cas échéant)
- réaliser ses actions dans une zone adverse (points pour l'équipe adverse le cas échéant)
- collisionner un robot autre que celui de son équipe (pressage du bouton d'arrêt d'urgence et disqualification le cas échéant)

De plus, la stratégie développée pour le PAMI varie selon le côté du terrain où il commence. Nous devons donc être capables de sélectionner la bonne stratégie avant le début du match.

En résumé, le PAMI doit pouvoir se déplacer d'un point A (sa zone de départ) à un point B (sa jardinière), en pollinisant une plante dans sa jardinière (contact) et en restant à ses côtés jusqu'à la fin du match.

### Objectifs

La programmation du microcontrôleur réalise ainsi ces actions :
- Pollinisation des jardinières
- Détection de potentielles collisions
- Synchronisation avec le robot principal

### Logique fonctionnelle

La logique fonctionnelle du PAMI repose sur une séquence d'actions précises pour garantir le bon déroulement de ses tâches durant le match :

1. **Initialisation :** Après 90 secondes de match, l'ESP32 active les steppers ainsi que le servomoteur, et lance la série d'instructions pour la stratégie.
2. **Navigation :** Le PAMI quitte sa zone de départ et se dirige vers sa zone de pollinisation attribuée dans son code. Il s'assure d'éviter les obstacles à l'aide de son capteur ultrason.
3. **Pollinisation :** Une fois arrivé à destination, le PAMI établit le contact avec la plante jusqu'à la fin du match.
4. **Désactivation :** Après un peu moins de 10 secondes passées, l'ESP32 désactive les steppers ainsi que le servomoteur. Ainsi, nous empêchons une potentielle disqualification due à une erreur de déplacement du PAMI.

![Algorigramme PAMI](https://raw.githubusercontent.com/Unimakers/Docs-Unimakers-CDR-2024/main/docs/images/algorigramme_pami.drawio.svg)

## Outils de développement utilisés

Pour bien appréhender la programmation de l'ESP32, il est essentiel de mettre en place l'environnement de développement qui servira tout le long du projet. Cette section détaille donc les outils, les configurations, les dépendances et les bibliothèques nécessaires pour coder, tester et déployer le PAMI.
