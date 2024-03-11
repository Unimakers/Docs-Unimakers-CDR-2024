---
layout: technicals
grand_parent: Robot
parent: Hardware
nav_order: 2
title: V2 Carte
---

## Carte N°2, ça prend forme

Je n'était pas content de la premiere carte, nottament par sa manque d'adaptabilité, donc la carte V2 est née!

<kicanvas-embed controls="full">
    <kicanvas-source src="./V2_carte_files/MainBoardV2.kicad_sch"></kicanvas-source>
    <kicanvas-source src="./V2_carte_files/MainBoardV2.kicad_pcb"></kicanvas-source>
</kicanvas-embed>

J'ai remplacée le module par un Devkit officielle, qui permet de prototyper en dehors de la carte un circuit grace a un breadboard.

Beacoup de choses restent inchangée par rapport a la premiere carte, sauf que la grande transformateur 5V n'est plus présent pour des raisons d'éspace.

Sur les connecteur I²C on peux désormai selectionner la tension d'alimentation, mais un probléme survenais toujour, que ce passe t'il si le composant 
aliméntée en 5v fourni une tension logique en 5v également. donc la selection n'était toujour pas une bonne solution.

Des connecteurs type Servo sont présent sur le schématique pour brancher des boutons, lumieres, servomoteurs, neopixels, tout cela avec du tension 5V, qui
peuvent ou non, etre utilisée selon l'application.

Des temoins led et des connecteurs 5V et 12v pour pouvoir allimenter la carte permettent de verfier et faire fonctionner la carte, ce qui implique que cette 
carte ne gére pas la transfromation de tension. l'idée était d'utiliser une carte externe qui lui gérérai la tension d'allimentation, et que seule les 
alimentation logique seraient transformée (3.3V pour l'esp32 et l'I²C) sur cette carte.

Vous pouvez voir que le pcb est inférieur a 10x10cm, cela permettai de reduire les couts de production a 2€ chez JLCPCB (non sponsorisée).

4 points de montages permettent facilement de monter la carte sur une plaque en bois acrylique, ou encore au makerbeams.