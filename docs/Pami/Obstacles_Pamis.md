---
layout: default
grand_parent: PAMI
parent: Programmation
nav_order: 2
title: Obstacles
---

# Obstacles

## Choix du capteur

Afin de donner la possibilité au PAMI de s'arrêter face à un obstacle et ainsi éviter la collision, nous devons choisir un capteur capable de mesurer avec une précision correcte la distance entre le PAMI et l'obstacle. Notre choix s'est naturellement porté sur le [HC-SR05](https://www.kubii.com/fr/modules-capteurs/2042-capteur-ultrason-hc-sr05-kubii-3272496009028.html), un capteur ultrasonique utilisé pour mesurer des distances en émettant des ondes sonores et en calculant le temps que met l'écho à revenir. C'est une solution peu onéreuse et fiable.

<center><img decoding=async loading=lazy src="../images/hc-sr05.webp" alt="Capteur ultrasonique HC-SR05" width=50%><center>
