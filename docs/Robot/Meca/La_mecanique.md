---
layout: default
parent: Robot
has_children: true
nav_order: 1
title: La Mecanique du robot
---

# La Mécanique du Robot

## Introduction

### L'objectif du robot

Le robot a pour but de se déplacer sur la table de jeu de la Coupe de France de Robotique 2024, tout en embarquant tout l'électronique nécaissaire a son bon fonctionnement. 

Le robot doit être capable de se déplacer sans problème malgrès les différents dispositif transporté.





## Spécification technique 

### Contraintes et exigences spécifiques à la Coupe de France de Robotique 2024

Les contraintes spécifiques à la Coupe de France de Robotique sont principalement la taille du robot et de ses systèmes embarqués, ainsi le robot doit respecter un périmètre non-déployer de 1200mm et un périmètre déployer de 1300 mm, la hauteur et elle aussi limiter à 350mm. La base roulante doit êtr la plus lègére possible afin de profiter plainement des possibilité des moteurs

### Exigences de performance







## Conception du robot

### Différentes étapes de développement

#### Holonome ou Différentiel ?

C'est la première question que l'on s'est posée. En effet, notre premier prototype était une base roulante holonome (cf : photo V1). Ce choix a été fait car nous voulions que le robot puisse se mouvoir dans n'importe quelle direction. De plus, le châssis du robot était un triangle, et notre but était d'avoir un robot dont les extrémités étaient modulables.

*(cf : V1 modulable 3D).*

Suite à différents tests, nous avons opté pour une base roulante en transmission différentielle.

#### C'est un Robot ou un Arc de Triomphe ?

L'objectif de ce prototype était de trouver la forme idéale respectant le périmètre maximal, c'est-à-dire 1200 mm de périmètre étendu lorsque les actionneurs ne sont pas déployés. De plus, le robot devait avoir le centre complètement creux afin de stocker les plantes ainsi que les pots. Cet espace pouvait accueillir 3 pots alignés.

*(cf : V2 arc de triomphe).*

Dans un premier temps, le châssis du robot était uniquement fait à l'aide de Makerbeam. Cette deuxième version du robot était équipée des moteurs Nema 17 ainsi que des roues.

#### V3
La troisième version du châssis du robot est symétrique, l'espace central est désormais traversant. De plus, un carter a été créé afin d'y accueillir : la carte électronique, la batterie ainsi que son support, les différents boutons et le bouton d'arrêt d'urgence. Les roues étant placées au centre, des billes folles ont été installées afin de stabiliser le robot lors de ses déplacements. Ces billes folles ont été placées aux quatre coins du robot dans des supports pouvant accueillir aussi des roulements dans le but de ne pas dégrader la table.

*(cf : 3D V3).*

#### V4
Cette version du robot a été réalisée sur Onshape. L'adaptation au logiciel a été une étape longue pour nous. Nous avons donc recommencé le robot de zéro. Avant de reprendre la conception du robot, nous avons remodelé tous les éléments dont nous avons besoin, tels que les moteurs ou encore les billes folles, dans le but de nous adapter au logiciel mais aussi pour avoir tout ce dont on a besoin à portée de main. Avec l'ajout de la pince, les Makerbeam à l'avant du robot ont été supprimés pour laisser la place nécessaire pour que la pince puisse bouger normalement.

De plus, le châssis est de nouveau en une seule pièce afin de réduire la flexibilité du robot, mais aussi pour ajouter un système de fixation afin d'y installer un système de stockage des plantes. Les boutons sont toujours placés de la même manière, mais la batterie est désormais à l'arrière du robot, ce qui laisse plus de place dans le carter pour pouvoir mettre une plus grande carte électronique. 

*(cf : 3D V4).*

#### V5

Lors des différents tests réalisés avec le prototype précédent, nous nous sommes rendu compte que les Nema 17 n'étaient vraiment pas assez puissants malgré la démultiplication. C'est alors que nous avons choisi les Nema 23 en transmission directe. De plus, avec l'espace à l'avant du robot (espace contenant les billes folles), le robot ne pouvait pas atteindre les jardiniers. Cet espace n'était pas utilisé en hauteur, il est donc logique qu'il soit supprimé, mais cela a créé un gros problème de déséquilibre. Nous avons donc ajouté des roulements à l'avant du robot pour remplacer les billes folles.

Lors des tests de nos supports batterie, nous nous sommes aperçus que l'espace prévu pour les câbles n'était pas suffisamment large. Le robot fonctionne donc maintenant en 24V avec deux batteries placées à l'arrière du robot et suffisamment haut pour ne pas taper dans les rebords de la table.

Cette fois-ci, le carter repose sur quatre pièces imprimées en 3D dans lesquelles sont placés : l'électro-aimant pour la tirette, un connecteur pour l'alimentation, une prise USB pour coder l'ESP32, et différents boutons. 

*(cf : 3D V5).*


## Test et validation

## Conclusion