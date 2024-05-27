---
layout: technicals
title: Robot
nav_order: 3
has_children: true
---

# Le Robot Principale
En Cours
{: .label .label-yellow }

<model-viewer src="./RobotModels/Robot.gltf" ar ar-modes="webxr scene-viewer quick-look" camera-controls tone-mapping="neutral" poster="./RobotModels/RobotPoster.webp" shadow-intensity="0" exposure="0.62" shadow-softness="0" style="display: block; margin-left: auto; margin-right: auto; height: 600px; width:600px;">
    <div class="progress-bar hide" slot="progress-bar">
        <div class="update-bar"></div>
    </div>
</model-viewer>

## Introduction


### Missions
Le robot commence dès le démarrage d'un match, quittant sa zone de départ, il a le choix de faire 3 taches:

- prendre des plantes
- prendre des pots 
- tourner les panneaux solaires

A la fin du match, le robot doit se trouver dans une zone differentes de sa zone de départ.

### Contraintes

Le robot

Est autorisée de:
- Manipuler les éléments
- voler des plantes des zones non protégé
- tourner les panneau solaires de sa couleur de match et les panneau partagé

N'est pas autorisée de:
- Nuire a l'adversaire
- Défendre une zone volontairement
- Voler des plantes dans les jardinieres
- Heurter l'adversaire

Dans la suite du documentation, vous verez les differentes actionneurs, capteurs, microcontrolleurs utilisée pour le Robot.

[Return Bloc](https://unimakers.fr/Docs-Unimakers-CDR-2024/)