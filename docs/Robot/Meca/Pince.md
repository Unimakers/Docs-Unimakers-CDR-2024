---
layout: default
grand_parent: Robot
parent: La Mécanique du robot
nav_order: 1
title: Système de Manipulation des éléments de jeu
---
# Pince de Manipulation des éléments de jeu

## Introduction

### Objectifs du système

La pince vise à manipuler les éléments de jeu de la Coupe de France de Robotique 2024. Ces éléments de jeu se composent de petits pots ronds métalliques (d'environ 6*6.5) et de fleurs en plastique légèrement plus petites. De petits panneaux solaires sont également à manipuler, ceux-ci doivent uniquement être tourné dans un sens.

Les mâchoires doivent être capables de saisir à la fois les pots en métal et les plantes malgré leurs différences de taille et de poids. Ensuite, ces éléments doivent pouvoir être déplacés pour être pris sur le terrain de jeu puis être amené dans une zone de dépose. La stratégie de l'équipe visait à stockée les éléments de jeu à l'intérieur du robot. Pour ce faire, le système doit être capable de monter ou descendre et de s'orienter dans un angle d'environ 120° par rapport au point de saisie de l'élément. Il est à noter que l'élément sera saisi en face ou sur le côté du robot. En termes de précision, elle doit être suffisante pour positionner les éléments de jeu à quelques millimètres près.

Ce système doit également être rapide car le temps est très limité (90 secondes), il est presque impossible de réaliser toutes les tâches sur le terrain de jeu. Plus le système sera rapide, plus le robot pourra marquer de points et aura donc de chances de remporter la compétition. 

### Aperçu de la pince et de son rôle 

Pour répondre à ces objectifs, plusieurs modèles ont été conçus et testés. Ci-dessous, vous trouverez le modèle retenu :

[Image de la pince]

Le rôle de la pince est d'ouvrir et de fermer les mâchoires de manière à ce que les éléments de jeu soient bloqués à l'intérieur. Une fois fermées, les mâchoires peuvent se lever avec l'élément de jeu et s'orienter vers l'intérieur du robot pour libérer ses mâchoires. L'élément de jeu peut alors être posé dans un barillet où seront stockés les éléments de jeu, que ce soit des plantes ou des pots. En résumé, la pince représente la liaison entre les éléments de jeu et le robot.

## Spécification technique 

### Contraintes et exigences spécifiques à la Coupe de France de Robotique 2024

Les contraintes spécifiques à la Coupe de France de Robotique sont principalement la taille du robot et de ses systèmes embarqués, ainsi qu'une execution des tâches rapides du au peu de temps que dure l'épreuve (90 secondes pour le robots principale). Pour mieux répondre à la contrainte de taille, le système doit être le plus petit possible ou exploiter au mieux les espaces disponibles dans le châssis. En revanche, un robot rapide nécessite plus de puissance de la part des moteurs.

Parmi les contraintes de la CDR, il y a également la nécessité d'avoir un robot entièrement autonome. Cela implique de pouvoir connaître en temps réel la position des moteurs et donc de la pince, ainsi que de pouvoir automatiser ces mouvements via une carte programmée. Le robot doit posséder sa propre source d'alimentation électrique. Etant donné que les objets à manipuler restent très légers et que les pièces mécaniques sont faites en PLA (matériaux assez léger), il n'y a pas d'exigence particulière en termes d'alimentation ; de simples batteries pourront alimenter tout le robot.

### Exigences de performance et de précision

Comme mentionné précédemment, il n'y a pas de contrainte réelle en termes d'alimentation. La performance sera principalement jugée par la vitesse du système.

Sur le terrain de jeu, il y a 36 pots et 36 plantes répartis sur des zones prédéfinies. Ainsi, pour transporter l'intégralité des pots avec les plantes à l'intérieur, il faut effectuer 36 fois le mouvement pour les stocker et 36 fois pour les vider. En 90 secondes, cela laisse moins d'une seconde pour chaque mouvement de montée/descente du système. Il est clair que le système ne pourra pas répondre à 100 % à cette exigence, notamment si l'on tient compte du temps de déplacement jusqu'aux zones prévues. Cependant, l'objectif serait de se rapprocher le plus possible de cet objectif.

Pour être plus réaliste, il n'y a qu'une différence d'un point entre une fleur posée dans une jardinière et une fleur posée dans un pot dans une jardinière. Il peut donc être raisonnablement envisagé de ne traiter que les fleurs pour laisser environ 2 secondes à la pince pour effectuer le mouvement souhaité.

En ce qui concerne la précision, seule la rotation autour de l'axe Y doit être précise. La précision sur l'axe Y (la hauteur) importera peu pour le système. De même, les mâchoires n'ont pas besoin d'une forte précision. Leurs matériaux souples et leur forme permettent d'absorber tout défaut.

## Conception de la pince

### Différentes étapes de développement

Dès le départ, le système permettant aux mâchoires de monter et descendre s'est orienté vers un servomoteur faisant levier sur un rail linéaire, tirant ainsi vers le haut le reste du système. La seule évolution de ce système a été de doubler le bras supérieur pour le solidifier et d'ajouter de multiples perçages à des fins de test quant à la démultiplication. Ce système présente l'avantage d'être simple à piloter, assez rapide, compact et de ne prendre de la place qu'en hauteur (à l'endroit où se situe le servomoteur), l'espace le moins utilisé sur le robot.

Un premier modèle de pince a été longuement travaillé avant le modèle final. Celui-ci avait la particularité de n'avoir qu'un seul moteur pour les mâchoires. Le moteur tirait sur un axe faisant office de levier pour les mâchoires. Cependant, ce système ne permettait pas de contrôler indépendamment chaque mâchoire mais était plus léger. De plus, il nécessitait un grand empattement pour peu de force de serrage.

Ensuite, un deuxième moteur a été introduit pour les mâchoires, ce qui a grandement simplifié le système et accru la force de serrage. En revanche, le système est devenu beaucoup plus lourd. Les moteurs étant désormais plus près des plantes, ils les touchaient lorsque les éléments étaient dans les mâchoires. Pour éviter cela, des entretoises ont été ajoutées pour abaisser les mâchoires par rapport aux moteurs. Cela a toutefois permis de placer le système de mâchoires au-dessus du moteur permettant la rotation, réduisant ainsi grandement l'empattement à l'intérieur du robot. 

### Choix des matériaux, composants et des mécanismes

Pour la réalisation du projet, les principaux matériaux à notre disposition étaient le bois et l'acrylique sous forme de plaques de 3 et 5 mm d'épaisseur, ainsi que le plastique (principalement le PLA, le TPU et le PETG) via les imprimantes 3D. Même s'il était possible d'avoir accès à d'autres matériaux pour réduire les coûts, il était nécessaire d'utiliser autant que possible ces matériaux. Les leviers ont donc été réalisés à partir de bois découpés au laser, ce qui est beaucoup plus rapide que l'impression 3D.

Toutes les pièces, à l'exception des palonniers, ont été réalisées en impression 3D avec du PLA, sauf les mâchoires qui ont été réalisées à partir de TPU. Le PETG n'a pas été utilisé car il était uniquement plus utile lorsqu'il y avait des besoins de solidité mécanique et thermique sur la pièce.

Tous les moteurs utilisés sont des servomoteurs (MG996). Les FS90R n'ont pas été utilisés car ils sont réputés plus fragiles ; il était préférable de sacrifier de l'espace disponible en faveur de la fiabilité. De même, il n'était pas nécessaire de choisir des moteurs plus puissants car ceux-ci étaient déjà largement suffisants.

L'utilisation de servomoteurs simplifie leur pilotage. Il suffit d'envoyer la position souhaitée aux moteurs, qui sont ensuite entièrement asservis pour corriger eux-mêmes leurs positions sans intervention extérieure. De plus, leur rapport force/vitesse de rotation est adéquat pour le système, ce qui réduit également le temps de développement en ne nécessitant pas de réaliser un réducteur.


## Tests et validation

### Procédure de validation 

Pour valider le système de pinces, à chaque itération du système, les différentes pièces nécessaires ont été imprimées puis testées dans toutes les situations possibles. Cela a commencé par la reproduction du mouvement ou des effets du mécanisme à la main. Si l'essai était validé, alors un essai était effectué avec les servomoteurs contrôlés via une petite carte et un potentiomètre. Enfin, si les essais précédents étaient concluants, le système était testé avec un programme. Ensuite, les modifications possibles étaient apportées au système, déclenchant à nouveau la procédure de test à zéro, et ainsi de suite jusqu'au système final. 

### Résultats

Lors de la compétition, le système à partiellement répondu à son cahier des charges. En effet, il a pu manipuler les plantes en étant assez précis pour les prendres et déposer aux endroits souhaités. Le système c'est parfaitement comporté avec le barrilet et était relativement rapide. En revanche lors de la compétitions, nous avons constaté que d'autres systèmes etaient beaucoups plus adaptés que celui-ci. La différente était que c'est autres système avaient la capacité de prendre plusieurs plantes en même temps, ils étaientt certe beaucoups moins précis et aurait abimés de vrai plantes. Mais il n'en reste que ce type de système répondait mieux au cahier des charges que le nôtre. 
De plus lors de la compétitions, les températures étaient assez élevées, cela à provoqué une déformation majeur des machoires les rendant moins efficace qu'à l'origine.    


### Perspectives pour l'avenir 

Dans une perspective d'avenir, il pourrait être envisageable de revoir le système de levier pour la hauteur des mâchoires avec un système de tige filetée et un moteur brushless. Ce système aurait pour avantage d'être très rapide, sûrement plus que le système actuel, tout en restant compact grâce au bon rapport puissance/taille des moteurs brushless. De plus, il n'y aurait pas besoin d'encodeur pour connaître la position de la pince. Comme mentionné précédemment sur cet axe, il n'est pas nécessaire d'avoir une grande précision. Un simple capteur de fin de course de part et d'autre du système serait suffisant. Ce système nécessite tout de même de développer un réducteur et d'intégrer une tige filetée sur le robot ainsi que de pouvoir les alimenter, de simple batterie n'aurait pas suffit. 

Une deuxième amélioration possible serait de remplacer le barrilet par deux autres pinces presque identiques à celles actuels sur le robots. Ainsi, le moteurs pour l'orientation vers le barrilet n'aurait plus était nécéssaires faisant gagner du temps. De plus, cela aurait permis de manipuler les plantes par 4, la programmation aurait égalements était plus simple ainsi que la fiabilité du système.  
