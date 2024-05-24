---
layout: default
parent: PAMI
nav_order: 2
title: La Conception
---

# Conception & Modélisation des P.A.M.I

## Introduction

Les **PAMI** ou **P**etits **A**ctionneurs **M**obile **I**ndépendant, sont des petits robots qui sont soumis à plusieurs régle pour la conception ce sont les contraintes volumétriques qui nous intéresse le plus. En effets il n'y a pas de nombre limite de PAMI présent sur la table de jeu cependant l'ensemble des PAMI doit tenir dans une zone de 150mm*450mm et 150mm de hauteur. Il ont également une limite de poids fixé a 1.5kg dans le réglement final. Cependant le premiers réglement (béta) limité le poids des PAMI à 1kg. Afin d'être sur de respecté les contrainte volumétriques la conceptin de base sur un volume carré ou rectangulaire que l'on perce afin d'y intégres nos composants.


### P.O.C ( Proof Of Concept )

Avant toute conception des PAMI il fallait savoir qu'elle moteur utilisé pour pouvoir concevoir le corps du robot.
Pour ça j'ai utilisé un outils de calcul de couple, ses informations en poche j'ai donc trouvée les settepers que je cherchait des <a href="https://www.omc-stepperonline.com/fr/rond-nema-14-bipolaire-0-9deg-9-ncm-12-75-oz-in-1-0a-36-5x17-5mm-4-fils-14hr07-1004vrn?search=nema%2014%20rond" target="_blank">Nema 14 rond</a> ou pancake.


A la suite de ce choix j'ai donc réalisé rapidement une petite pièce pour validé les moteurs et commencé a imaginée les volumes du PAMI.

![POC](../images/POC.jpg)

La première version est idée pour les PAMI était de faire un maximun de PAMI dans une zone la plus compactre possible. Après plusieur heure de conception j'ai obtenu un premiers modéles 3D. 


### V1 

![PAMI_V1](../images/PAMI-V1.png)

La premiers version était uniquement théorique car elle n'a jamais était imprimé. Cette version n'a jamais été concrétisée car mom objectif de faire des PAMI les plus petits possible était compliquées et surtout mal abordé. 

#### Etalonnage

Les Nema 14 sont équipe d'un engrenage directement soudée sur l'arbre du moteur il m'a donc fallut modélisée unue roue aillant le négatif de cette engrenage pour une intégration obtimal. 
Les marges d'erreur étant trés petit j'ai donc réaliser une pièce d'etalonnage pour test différente valeur. 
Pour une présision maximale j'ai décider d'imprimé les roue en résine. 
J'ai réitere les processus d'intégres les moteurs au mieux dans le corps (body) du robots.

<img src="../images/etalonnage_reel.webp" >
<img src="../images/etalonnage_3d.webp" >