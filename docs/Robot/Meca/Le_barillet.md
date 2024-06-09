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
    - Le premier prototype lui se basé sur un axe horizontal autour duquel les éléments de jeu tourné autour. Ce système se rapproche de celui utilisé à l'avant des moissoneuse batteuse.  
    - Le deuxième système reposait sur un axe verticale en rotation autour duquel les éléments de jeu sont placés. 

### Prototype n°1 

Ce système permettait de faire tourner les éléments de jeu autour d'un axe horizontal comme le fait l'avant d'une moissonneuse. Grâce à deux emplacements côte à côte pour les éléments de jeu, il aurait été possible de faire passer entre six et huit plantes/pots. Hors le même problème que pour le système précédent a été rencontré, la place était très limitée. Ce qui n'a pas permis du tout d'implémenter ce système. Il aurait nécéssaire d'agrandir le chassis qui avait des dimensions à respecter. 

Pour la rotation du mécanisme, il aurait été possible d'utiliser un stepper tout comme un servo moteur. Les deux possibilité aurait été valable. L'avantage du servo moteur été ça petite taille par rapport au stepper ainsi que ca facilité d'utilisation. 
Le stepper aurait été plus gros et avait moins de puissance que le servo moteurs mais permettait de faire des tours à l'infinie.  


### Prototype n°2 

Comme mentionné précédemment, ce prototype reposait sur un axe horizontal autour duquel les éléments de jeu auraient tourné. Idéalement, ce prototype aurait comporté deux à trois étages, en fonction de l'espace disponible sur le robot. Les éléments de jeu auraient été déposés successivement au premier, au deuxième, puis au troisième étage afin de maximiser la capacité de stockage.

Cependant, les tests ont démontré l'impossibilité d'inclure plusieurs étages en raison des dimensions du châssis, du positionnement des autres composants du robot et des pinces déjà construites. Par conséquent, il a été décidé de limiter le stockage des éléments de jeu à un seul étage. Pour compenser le manque d'étages, la possibilité de disposer le maximum de pots autour de l'axe a été étudiée. Celons les espacements théorique sur les logiciels de conception, il a été déterminé que le nombre maximal de pots se situait entre quatre et six.

Les tests effectués en association avec la pince ont révélé que le nombre maximum de pots réalisable était de quatre. Bien qu'il soit théoriquement possible d'en placer six, des imprécisions dans le système de pince ont rendu cette configuration impraticable. En effet, la dépose des éléments de jeu n'était jamais parfaitement répétable en raison des déformations des mâchoires en TPU, qui variaient selon la position du pot lors de sa saisie. Par conséquent, il a été nécessaire d'élargir la zone de dépôt des pots, laquelle a été rendue ovale afin de compenser les imprécisions sur un seul axe.

La rotation du système se fait à l'aide d'un stepper qui permet de connaître en temps réel la position de celui-ci, en supposant qu'aucun pas n'a été sauté et que la position de départ été connu. Il aurait également été possible d'utiliser un servo moteur a 360° mais il n'y en avait pas dans le stock de l'association a contrario du stepper. Lors des essais premier essaies, le stepper qui avait été utlissé en premier lieu (nema 14) à été remplacer car il manquait de puissance. Le stepper à été remplacer par un nema 19 plus puissant est également disponible au seins de l'association. Ce n'était pas genant d'avoir un moteur une taille supérieur étant donner que l'idée d'utiliser plusieurs étage à été abandonné, beaucoup de place en hauteur été disponible.    

# Tests et validation

Finalement le système avec un axe horizontal à été choisie. Avant d'avoir un système fiable en association avec la pince, il a fallut faire de nombreux essaie de sorte à avoir la taille parfaite des emplacements pour les éléments de jeu.
Pour permettre de connaitre la possition "zero" en terme de rotation, un capteur à été ajouté. Ainsi lors du démarage le système entre en rotation jusqu'à ce que le capteur renvoie un signal. Cela permet d'avoir une position de départ, à la suite la position sera toujours connu car le nombre de pas engendre une rotation proportionnelle à ce nombre. 

## Résultats 


<video width="640" height="360" controls autoplay muted loop>
  <source src="../../images/pince/fonc_pince.webm" type="video/webm">
  Votre navigateur ne prend pas en charge la balise vidéo.
</video>

## Perspectives pour l'avenir

Pour améliorer ce système, il faudrait ajouté un étage de sorte à stockée plus de pot. Pour cela le système ne subirait pas de gros changement, les plus gros changement serait à effectuer sur le chassis ainsi que sur la pince pour gagner de la place en hauteur. Gagner de la place en hauteur est tout à fait possible car la hauteur du chassis est très largement inférieur au maximum autorisé par le reglement. Cela n'avait pas été fait du à la taille des makerbeam disponible au seins de l'association. 
En somme, peu d'amélioration peuvent être apportées à ce système. 