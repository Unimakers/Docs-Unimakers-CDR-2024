---
layout: default
grand_parent: Robot
parent: La Mécanique du robot
nav_order: 4
title: Le prototypage du robot
---
# Le prototypage du robot

Le premier prototype utilisait une base roulante holonome pour permettre au robot de se mouvoir dans toutes les directions, avec un châssis triangulaire et des extrémités modulables.

<img src="../../images/Robot-V1.jpg" max-width="100%">

**(cf : V1 modulable 3D).**

Suite à divers tests, une base roulante en transmission différentielle a été choisie pour optimiser l'espace de stockage des plantes en utilisant deux moteurs.

## Optimisation de la forme et de l'espace de stockage

Un prototype a été développé pour respecter le périmètre maximal de 1200 mm lorsque les actionneurs sont rétractés. Le robot devait avoir un centre creux pour stocker les plantes et les pots, pouvant accueillir 3 pots alignés.

<img src="../../images/Robot-V2.jpg" max-width="100%">
**(cf : V2 arc de triomphe).**

Le châssis de cette version était constitué de Makerbeam et équipé de moteurs Nema 17 et de roues.

## Symétrie pour une meilleure stabilité

La troisième version du châssis présente une symétrie avec un espace central traversant. Un carter a été créé pour loger la carte électronique, la batterie, les boutons et le bouton d'arrêt d'urgence. Des billes folles ont été installées aux quatre coins du robot pour stabiliser les déplacements, car les roues étant placées au centre provoquaient un basculement avant-arrière. Les supports des billes folles peuvent également accueillir des roulements pour ne pas endommager la table.

<img src="../../images/Robot-23-11-2023.png" max-width="100%">
*(cf : 3D V3).*

#### <ins>Réorganisation Interne :</ins>  
La batterie a été déplacée à l'arrière, libérant de l'espace pour une carte électronique plus grande. Cette réorganisation a optimisé l'utilisation de l'espace et amélioré la performance du robot.

En résumé, le passage à OnShape a permis de surmonter les limitations de Solidworks, d'améliorer la collaboration et de redévelopper le robot de manière plus efficace et fonctionnelle.

<img src="../../images/Robot-30-12-2023.png" max-width="100%">
**(cf : 3D V4)**

### <ins>Prototype fonctionnel avec Nema 23</ins>

Les tests ont révélé que les moteurs Nema 17 étaient insuffisants. Les moteurs Nema 23 en transmission directe ont été adoptés. Les roulements à l'avant ont remplacé les billes folles pour stabiliser le robot et optimiser l'espace de stockage.

Le robot fonctionne maintenant en 24V avec deux batteries placées à l'arrière. Le carter repose sur quatre pièces imprimées en 3D accueillant l'électro-aimant pour la tirette, un connecteur pour l'alimentation, une prise USB pour l'ESP32 et divers boutons.

<img src="../../images/Robot-21-02-2024.png" max-width="100%">
**(cf : 3D V5)**

### <ins>Version finale</ins>

La version finale respecte une charte visuelle définissant les couleurs : l'acrylique est noir ou gris fumé transparent et les pièces imprimées en 3D sont rouges. Les actionneurs, les pinces et le barillet ont été finalisés. Des poignées ont été ajoutées pour faciliter le transport, et les roues ont été modifiées pour s'incruster dans des roulements fixés

 dans la plaque d'acrylique. Des roulements ont été placés aux quatre coins pour protéger la table de jeu, et des cales ont été ajoutées à l'arrière pour limiter les chocs lors des recalages en bordure.

<img src="../../images/Robot-Vf1.png" max-width="100%">
*(cf : 3D VF)*
