---
layout: technicals
grand_parent: Robot
parent: Hardware
nav_order: 3
title: V3 Carte
---

# Même les imparfaits peuvent être capables de fournir le travail

<kicanvas-embed controls="full">
    <kicanvas-source src="./V3_carte_files/MainBoardV3.kicad_sch"></kicanvas-source>
    <kicanvas-source src="./V3_carte_files/Power_sheet.kicad_sch"></kicanvas-source>
    <kicanvas-source src="./V3_carte_files/MainBoardV3.kicad_pcb"></kicanvas-source>
</kicanvas-embed>

Si ce n'était pas pour la quête de créer une carte adaptable à tout type de robot vu à la coupe, cette carte aurait pu participer à la coupe sans problème. Elle inclut tout ce dont nous avons besoin pour pouvoir participer.

Elle propose :

* 3 emplacements pour drivers DRV8825
* Extension pour carte Adafruit PCA9685 permettant de contrôler jusqu'à 16 servomoteurs en 10 ampères simultanés
* 3 connecteurs I²C
* Connecteur nappe pour compatibilité avec les anciennes cartes de l'AREA
* 3 connecteurs Vbatt
* 3 connecteurs 5V
* 1 connecteur SPI
* 1 connecteur UART
* 1 connecteur Neopixel
* 1 connecteur Tirette
* 2 connecteurs Bouton

