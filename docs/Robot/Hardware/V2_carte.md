---
layout: technicals
grand_parent: Robot
parent: Hardware
nav_order: 2
title: V2 Carte
---

## Carte N°2 : ça prend forme

Nous n'étions pas satisfaits de la première carte, notamment en raison de son manque d'adaptabilité. C'est ainsi qu'est née la carte V2 !

<kicanvas-embed controls="full">
    <kicanvas-source src="./V2_carte_files/MainBoardV2.kicad_sch"></kicanvas-source>
    <kicanvas-source src="./V2_carte_files/MainBoardV2.kicad_pcb"></kicanvas-source>
</kicanvas-embed>

Pour cette version, nous avons remplacé le module par un Devkit officiel, permettant de prototyper un circuit en dehors de la carte grâce à une breadboard.

Beaucoup de composants et circuits restent inchangés par rapport à la première carte, à l'exception du grand transformateur Traco 5V, qui a été supprimé pour des raisons d'espace, ainsi que le switch de sélection entre le 5V et le 5V USB, qui a également été supprimé.

Sur les connecteurs I²C, il est désormais possible de sélectionner la tension d'alimentation. Cependant, un problème subsiste : que se passe-t-il si le composant alimenté en 5V fournit également une tension logique de 5V ? Ainsi, la sélection de tension n'est toujours pas une solution optimale, car cela pourrait poser un problème de courant.

Des connecteurs de type Servo sont présents sur le schéma pour brancher des boutons, lumières, servomoteurs, Neopixels, tout cela avec une tension de 5V, qui peuvent ou non être utilisés selon l'application.

Des témoins LED et des connecteurs 5V et 12V permettent d'alimenter la carte et de vérifier son fonctionnement. Cela signifie que cette carte ne gère pas la transformation de tension. L'idée était d'utiliser une carte externe pour gérer l'alimentation, et que seules les alimentations logiques (3.3V pour l'ESP32 et l'I²C) seraient transformées sur cette carte.

Vous pouvez voir que le PCB mesure moins de 10x10 cm, ce qui permet de réduire les coûts de production à 2€ chez JLCPCB (non sponsorisé).

Quatre points de montage permettent de fixer facilement la carte sur une plaque en bois, en acrylique, ou encore sur des Makerbeams.
