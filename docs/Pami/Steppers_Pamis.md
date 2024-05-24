---
layout: default
grand_parent: PAMI
parent: Programmation
nav_order: 3
title: Steppers
---

# Steppers

## Déplacements

Les déplacements du PAMI s'effectuent à l'aide des deux steppers présents. La librairie AccelStepper nous permet de les piloter simplement. Lors du développement du code de déplacement, deux choix s'offraient à nous : utiliser les coordonnées relatives ou absolues. Nous avons d'abord décidé introduire le déplacement en relatif avant de tenter l'implémentation en absolu.

{: .note} Le déplacement en coordonnées absolues d'un robot avec des steppers se réfère à lui donner une position précise dans l'espace global défini, tandis que le déplacement en coordonnées relatives indique que le robot se déplace d'une certaine distance par rapport à sa position actuelle.



## Liaison des deux steppers

Afin de faciliter l'écriture du code et la manipulation des deux steppers, nous avons utilisé la librairie [Motion](https://github.com/Unimakers/CDR-2024-FIRMWARE/tree/main/CDR2024%20BASE/lib/Motion) d'Unimakers, offrant une simplification accrue du pilotage. Celle-ci permet entre autre le déplacement en arc de cercle, ainsi que la liaison des deux steppers sous la forme d'un objet !
