---
layout: default
parent: Pamis
nav_order: 3
title: Programmation
---

# Programmation du microcontrôleur ESP32

## Introduction

### Objectifs

Le PAMI n'entre en jeu qu'à partir de la 90e seconde d'un match. Il quitte sa zone de départ et a 10 secondes pour aller toucher une plante ou un pot contenant la plante dans une zone de dépose (action de polliniser). Enfin, il doit rester en contact de la plante jusqu'à la fin du match.

### Contraintes

Il peut :
- être touché par le robot de son équipe, mais pas manipulé
- se déployer dans la limite d'une augmentation de 10 cm de son périmètre

Il ne peut pas :
- amener une plante dans une zone
- sortir une plante d'une zone (invalidation de l'action du PAMI le cas échéant)

De plus, la stratégie développée pour le PAMI varie selon le côté où il commence. Nous devons donc être capables de sélectionner la bonne stratégie avant le début du match.
