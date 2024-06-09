---
layout: default
grand_parent: Robot
parent: La Mécanique du robot
nav_order: 3
title: Système de stockage des éléments de jeu
---

# Objectifs du système

L'objectif du barillet est de stockée les éléments de jeu de la Coupe de France de Robotique 2024. Ces éléments comprennent de petits pots ronds métalliques (environ 6 cm de diamètre et 6,5 cm de hauteur) et des fleurs en plastique légèrement plus petites (de l'ordre de quelque militmètre).

<div style="display: flex; justify-content: space-around;">


<img src="../../images/pince/plante.png" width="30%" >

<img src="../../images/pince/pot_plante.png" width="30%" >


</div>

## Aperçu du barrilet et de son rôle

Durant les phases de match, le robot va se déplacer sur le terrain et prendre les pots et les plantes puis les amener à un autre endroit.
Le but étant de stocker les pots et plantes à l'intérieur du robot via le barillet puis de les restituer une fois la zone de dépose atteinte de sorte à limiter les aller retour. Le tout en s'adaptant à la vitesse des pinces.

# Spécifications techniques

## Contraintes et exigences spécifiques à la Coupe de France de Robotique 2024

Les exigences spécifiques à la Coupe de France de Robotique portent principalement sur les dimensions du robot et de ses composants embarqués, ainsi que sur la rapidité d'exécution des tâches en raison du temps limité de l'épreuve. Pour respecter la contrainte de taille, le système doit être aussi compact que possible ou optimiser l'espace disponible dans le châssis. De plus, un robot rapide nécessite des moteurs plus puissants, ce qui affecte l'alimentation électrique.Parmi les autres exigences, il y a l'obligation de créer un robot entièrement autonome. Cela implique de surveiller en temps réel la position du barillet et d'automatiser ces mouvements à l'aide d'une carte programmée.

## Exigences de performance

les performances du barillet vont se remarquer notamment par la vitesse de celui-ci et sa capacité à stocker des pots.
Le barillet doit en effet stocker le plus de pots possible de sorte à gagner du temps sur les aller retour. Dans un même temps il doit s'adapter à la taille du robot qui est très petite ainsi qu'au zone dans lesquelles les pinces peuvent déposer les plantes. il se doit également de pouvoir connaître la position du barillet en permanence pour le placer au bon endroit vis-à-vis des pinces et des emplacements libre. 

# Conception du barillet

## Les différents prototypes 

Pour stocker les éléments de jeu à l'intérieur du robot, deux systèmes ont été imaginés : 
    - Le premier système reposait sur un axe verticale en rotation autour duquel les éléments de jeu sont placés. 
    - Le deuxième prototype lui se basé sur un axe horizontal autour duquel les éléments de jeu tourné autour. Ce système se rapproche de celui utilisé à l'avant des moissoneuse batteuse.  

### Prototype n°1 

Comme mentionné précédemment, le premier prototype reposait sur un axe horizontal autour duquel les éléments de jeu auraient tourné. Idéalement, ce prototype aurait comporté deux à trois étages, en fonction de l'espace disponible sur le robot. Les éléments de jeu auraient été déposés successivement au premier, au deuxième, puis au troisième étage afin de maximiser la capacité de stockage.

Cependant, les tests ont démontré l'impossibilité d'inclure plusieurs étages en raison des dimensions du châssis, du positionnement des autres composants du robot et des pinces déjà construites. Par conséquent, il a été décidé de limiter le stockage des éléments de jeu à un seul étage. Pour compenser le manque d'étages, la possibilité de disposer le maximum de pots autour de l'axe a été étudiée. Celons les espacements théorique sur les logiciels de conception, il a été déterminé que le nombre maximal de pots se situait entre quatre et six.

Les tests effectués en association avec la pince ont révélé que le nombre maximum de pots réalisable était de quatre. Bien qu'il soit théoriquement possible d'en placer six, des imprécisions dans le système de pince ont rendu cette configuration impraticable. En effet, la dépose des éléments de jeu n'était jamais parfaitement répétable en raison des déformations des mâchoires en TPU, qui variaient selon la position du pot lors de sa saisie. Par conséquent, il a été nécessaire d'élargir la zone de dépôt des pots, laquelle a été rendue ovale afin de compenser les imprécisions sur un seul axe.


### Prototype n°2 

# Tests et validation

### Procédure de validation

## Perspectives pour l'avenir
