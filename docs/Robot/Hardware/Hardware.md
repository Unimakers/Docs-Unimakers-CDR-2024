---
layout: technicals
parent: Robot
nav_order: 2
title: Hardware
has_children: true
---
## Sans élement, on ira pas loin

Les robots en génerale comportent plusieurs sytèmes de natures differentes, si liste ceux qui sont présent dans le robot c'est :

- systèmes mécanique
- systèmes électronique
- systèmes luminéux

chaqu'un des ces systèmes ont des rôles differentes dans le robot, mais chaque système n'est pas indépendant, il sont soigneusement interfacé l'un a l'autre pour que tout le composants 
aient une fonction dans le robot

## Le mouvement, on y va de pas en pas

Pour le mouvement, on a voulu opter pour des Stepper Nema17, ces stepper sont communement trouvé dans des imprimantes 3D et ont un couple acceptable pour des systèmes léger.

<model-viewer src="./Hardware_files/Nema17.glb" ar ar-modes="webxr scene-viewer quick-look" camera-controls tone-mapping="commerce" poster="./Hardware_files/poster.webp" shadow-intensity="1" > </model-viewer>

Un stepper est un moteur electrique qui fonctionne de pas en pas, un changement de l'orde de la polarité permet de passer d'une postion a une autre. cette changement est, dans notre cas, gérée par notre 
programme qui se trouve dans le robot 

On avait choisi ce modéle de stepper en utilisant le calculateur disponible sur le makerspace sur le lien suivant et le cahier des charges prévisionel qui suit.

[Calculateur en ligne](https://makerspace-amiens.fr/pages/calculateur-moteur-robot/){: .btn .btn-purple }

|Caratéristique         |Valeur|
|-----------------------|------|
|Poids                  |6kg   |
|Vitesse                |0,5m/s|
|Acceleration           |2m/s² |
|Nombres de moteur      |2     |
|Rayon roue motrice     |6kg   |
|tension d'alim         |12 v  |
|Effficacité            |65%   |
|Temps de fonctionnement| 2    |


Mais nous nous sommes rendue compte que ces moteur en pratique ne fournissent pas le couple attendue (probablement parceque dans le club on avais des marques noname). 
Ce qui nous a ammmené de partir a une modéle suppérieur, les néma 23.


 



pour les mouvement d'actioneurs, on a opté pour utiliser principalement des servo moteurs pour les actionneurs, ce sont des moteur a engrenages métalique