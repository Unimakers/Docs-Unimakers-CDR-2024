---
layout: default
parent: Robot
has_children: true
nav_order: 1
title: La Mécanique du robot
---

# La Mécanique du Robot

## Introduction

### L'objectif du robot

Le robot a pour but de se déplacer sur la table de jeu de la Coupe de France de Robotique 2024, tout en embarquant toute l'électronique nécessaire à son bon fonctionnement.

Le robot doit être capable de se déplacer sans problème malgré les différents dispositifs transportés.

## Spécification technique

### Contraintes et exigences spécifiques à la Coupe de France de Robotique 2024

Les contraintes spécifiques à la Coupe de France de Robotique sont principalement la taille du robot et de ses systèmes embarqués. Ainsi, le robot doit respecter un périmètre non-déployé de 1200 mm et un périmètre déployé de 1300 mm, la hauteur est également limitée à 350 mm. La base roulante doit être la plus légère possible afin de profiter pleinement des possibilités des moteurs.

### Exigences de performance

Lors de la conception du robot, notre objectif était d'avoir un robot suffisamment compact pour respecter les contraintes dimensionnelles. Nous souhaitions également qu'il puisse transporter au moins 6 plantes ou 4 pots, d'où notre choix du barillet. Pour les déplacements, nous désirions une vitesse de déplacement adéquate ainsi qu'un moyen de connaître notre position de manière plus ou moins précise. Nous avons donc opté pour des moteurs pas à pas.

## Conception du robot

### Différentes étapes de développement

#### Holonome ou Différentiel ?

C'est la première question que l'on s'est posée. En effet, notre premier prototype était une base roulante holonome (cf : photo V1). Ce choix a été fait car nous voulions que le robot puisse se mouvoir dans n'importe quelle direction. De plus, le châssis du robot était un triangle, et notre but était d'avoir un robot dont les extrémités étaient modulables.

*(cf : V1 modulable 3D).*

Suite à différents tests, nous avons opté pour une base roulante en transmission différentielle, car pour avoir plus de place pour stocker des plantes, avoir deux moteurs nous libère plus de place.

#### C'est un Robot ou un Arc de Triomphe ?

L'objectif de ce prototype était de trouver la forme idéale respectant le périmètre maximal, c'est-à-dire 1200 mm de périmètre étendu lorsque les actionneurs ne sont pas déployés. De plus, le robot devait avoir le centre complètement creux afin de stocker les plantes ainsi que les pots. Cet espace pouvait accueillir 3 pots alignés.

*(cf : V2 arc de triomphe).*

Dans un premier temps, le châssis du robot était uniquement fait à l'aide de Makerbeam. Cette deuxième version du robot était équipée des moteurs Nema 17 ainsi que des roues.

#### Un robot symétrique pour nous simplifier la tâche

La troisième version du châssis du robot est symétrique, l'espace central est désormais traversant. De plus, un carter a été créé afin d'y accueillir : la carte électronique, la batterie ainsi que son support, les différents boutons et le bouton d'arrêt d'urgence. Les roues étant placées au centre, des billes folles ont été installées afin de stabiliser le robot lors de ses déplacements, car les roues étant placées au centre le robot penchait d'avant en arrière. Ces billes folles ont été placées aux quatre coins du robot dans des supports pouvant accueillir aussi des roulements dans le but de ne pas endommager la table.

*(cf : 3D V3).*

#### Un nouveau logiciel

Dû à des problèmes de licence sur Solidworks, nous avons dû nous adapter et utiliser OnShape. OnShape est un logiciel gratuit pour les étudiants, de plus il permet de travailler à plusieurs en même temps sur le même document.

Cette version du robot et les suivantes ont donc été réalisées sur Onshape. L'adaptation au logiciel a été une étape longue pour nous. Nous avons donc recommencé le robot de zéro. Avant de reprendre la conception du robot, nous avons remodélisé tous les éléments dont nous avons besoin, tels que les moteurs ou encore les billes folles, dans le but de nous adapter au logiciel mais aussi pour avoir tout ce dont on a besoin à portée de main. Avec l'ajout de la pince, les Makerbeam à l'avant du robot ont été supprimés pour laisser la place nécessaire pour que la pince puisse bouger normalement.

De plus, le châssis est de nouveau en une seule pièce afin de réduire la flexibilité du robot, mais aussi pour ajouter un système de fixation afin d'y installer un système de stockage des plantes. Les boutons sont toujours placés de la même manière, mais la batterie est désormais à l'arrière du robot, ce qui laisse plus de place dans le carter pour pouvoir mettre une plus grande carte électronique.

*(cf : 3D V4).*

#### Le premier PAUC "fonctionnel"

Lors des différents tests réalisés avec le prototype précédent, nous nous sommes rendu compte que les Nema 17 n'étaient vraiment pas assez puissants malgré la démultiplication. C'est alors que nous avons choisi les Nema 23 en transmission directe. De plus, avec l'espace à l'avant du robot (espace contenant les billes folles), le robot ne pouvait pas atteindre les jardiniers. Cet espace n'était pas utilisé en hauteur, il est donc logique qu'il soit supprimé, mais cela a créé un gros problème de déséquilibre. Nous avons donc ajouté des roulements à l'avant du robot pour remplacer les billes folles.

Lors des tests de nos supports batterie, nous nous sommes aperçus que l'espace prévu pour les câbles n'était pas suffisamment large. Le robot fonctionne donc maintenant en 24V avec deux batteries placées à l'arrière du robot et suffisamment haut pour ne pas taper dans les rebords de la table.

Cette fois-ci, le carter repose sur quatre pièces imprimées en 3D dans lesquelles sont placés : l'électro-aimant pour la tirette, un connecteur pour l'alimentation, une prise USB pour coder l'ESP32, et différents boutons.

*(cf : 3D V5 (V21)).*

Lors des différents tests de ce prototype nous nous sommes rendus compte que le robot penchait vers l'avant, nous avons donc décidé de mettre des roulements à l'avant pour le stabiliser.

#### La version définitive

Lors de cette version nous nous sommes mis d'accord sur une charte visuelle pour les couleurs du robot qui est : l'acrylique sera noir ou gris fumé transparent et les pièces imprimées en 3D seront rouges. Nous avons aussi validé les différents actionneurs, les pinces et le barillet sont donc terminés. Des poignets ont été ajoutés au-dessus du robot afin de pouvoir le transporter sans contrainte. Les roues ont aussi été modifiées pour venir s'incruster dans un roulement qui est dans la plaque d'acrylique afin de stabiliser les roues. De plus, des roulements ont été placés aux quatre coins du robot afin d'éviter de détériorer la table de jeu. Des cales ont été placées à l'arrière du robot pour que le robot ne se claque pas trop fort lors des recalages de bordure.

*(cf : 3D VF)*

## Test et validation

## Conclusion
