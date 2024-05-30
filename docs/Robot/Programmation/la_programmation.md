---
layout: default
parent: Robot
has_children: true
nav_order: 3
title: La Programmation
has_children: true
---

# La Programmation

La programmation du robot s'est faite sous PlatformIO, une extension de VSCode qui permet de faire de la programmation embarquée. Cette extension offre plus de liberté que l'IDE Arduino, en profitant notamment du système de visualisation d'arborescence de VSCode.

## Le setup

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

## Le loop

Les étapes de la boucle principale incluent les opérations et vérifications suivantes, en continu, pour assurer le bon fonctionnement et la réactivité du robot pendant son exécution :

1. Lecture des capteurs et mise à jour des informations de l'environnement.
2. Vérification et gestion des commandes reçues via le port série ou d'autres interfaces.
3. Exécution des algorithmes de contrôle de trajectoire.
4. Gestion des moteurs et des actionneurs selon les décisions prises par le programme.
5. Mise à jour de l'affichage et des indicateurs (sonores et visuels) pour le feedback utilisateur.
6. Surveillance des conditions d'arrêt d'urgence et des obstacles.

Cette boucle assure que le robot réagit de manière appropriée à son environnement et accomplit sa mission de manière fiable.
