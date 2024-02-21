---
layout: technicals
grand_parent: Robot
parent: Hardware
nav_order: 1
title: V1 Carte
---

## La premiere Carte electronique

Objectif: Créer une carte de commande des differents systèmes éléctronqiue que comporte le robot

<kicanvas-embed src="./V1_carte_files/MainBoardV1.kicad_sch" controls="basic"> </kicanvas-embed>

Sur cette premiére carte, Nous étions passé sur un module ESP32 S3, cette module est un ensemble de composant sur un mini pcb enfermée dans une cage de faraday, 
permetant de reduire les nuissance de l'exterieur. plus sur cette microcontroleur ici

Le robot à 3 moteur pas à pas a controler, c'est a dire qu'il nous faut 3 controlleur pas à pas, de nombreux composants et BOB (break out boards) sont sur le marché.

Les plus communnement trouvé sont les DRV, TMC et a4988
Par facilité d'accès nous avons commencé avec les DRV8825 puisqu'il il etaient déja dans l'association unimakers, mais les 3 driver sont interchangeable, avec des condition 
special. (il faut que le circuit soit adapté pour selectioner un drv8825 ou un TMC2209, ce sera étudiée dans un futur version de la carte)

il nous faut aussi des connecteur I²C pour pouvoir connecter des cartes compatible protocole. On utilise des connecteur JST pour ce faire, car la taille permet de ne pas trop etre encombrant, 