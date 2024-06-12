---
layout: technicals
parent: PAMI
nav_order: 1
title: Conception
has_children: true
---

# Conception & Modélisation des PAMI

## Introduction

Les **PAMI** (Petit Actionneur Mobile Indépendant) sont de petits robots soumis à plusieurs règles de conception, dont les contraintes volumétriques sont les plus importantes. En effet, il n'y a pas de nombre limite de PAMI présents sur la table de jeu, cependant, l'ensemble des PAMI doit tenir dans une zone de 150mm x 450mm et 150mm de hauteur. Ils ont également une limite de poids fixée à 1,5kg dans le règlement final. Cependant, le premier règlement (béta) limitait le poids des PAMI à 1kg. Afin de respecter les contraintes volumétriques, la conception de base repose sur un volume carré ou rectangulaire dans lequel nous intégrons nos composants.

### PoC (Proof of Concept)

Avant toute conception des PAMI, il était crucial de choisir le moteur adéquat pour concevoir le corps du robot. Pour cela, j'ai utilisé un outil de calcul de couple. Avec ces informations en main, j'ai trouvé les moteurs steppers nécessaires : des [Nema 14 rond](https://www.omc-stepperonline.com/fr/rond-nema-14-bipolaire-0-9deg-9-ncm-12-75-oz-in-1-0a-36-5x17-5mm-4-fils-14hr07-1004vrn?search=nema%2014%20rond) ou pancake.

Suite à ce choix, j'ai rapidement réalisé une petite pièce pour valider les moteurs et commencer à imaginer les volumes du PAMI.

<img src="../../images/poc.webp" style="height: 35%; width: 35%;">

La première version de la conception des PAMI visait à créer un maximum de PAMI dans une zone la plus compacte possible. Après plusieurs heures de conception, j'ai obtenu un premier modèle 3D.
