---
layout: default
grand_parent: Pamis
parent: Programmation
nav_order: 3
title: Steppers
---

# Steppers

## Déplacements

Les déplacements du PAMI s'effectuent à l'aide des deux steppers présents. La librairie AccelStepper nous permet de les piloter simplement. Lors du développement du code de déplacement, deux choix s'offraient à nous : utiliser les coordonnées relatives ou absolues. Nous avons décidé de d'abord introduire le déplacement en relatif avant de tenter l'implémentation en absolu.

## Liaison des deux steppers

Afin de faciliter l'écriture du code et la manipulation des deux steppers, nous avons utilisé la librairie [Motion](https://github.com/Unimakers/CDR-2024-FIRMWARE/tree/main/CDR2024%20BASE/lib/Motion) d'Unimakers offrant une simplification accrue du pilotage. Celle-ci permet entre autre le déplacement en arc de cercle, ainsi que la liaison des deux steppers sous la forme d'un objet !
