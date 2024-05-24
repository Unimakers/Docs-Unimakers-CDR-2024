---
layout: default
grand_parent: Robot
parent: La Mécanique du robot
nav_order: 2
title: La conception du chassis
---

# La conception du chassis

## Conception du robot

### Différentes étapes de développement

#### <ins>Holonome ou Différentiel ?</ins>

La première étape du développement a consisté à décider entre une base roulante holonome et une transmission différentielle. 

Un <ins>robot holonome</ins> est un type de robot dont les systèmes de déplacement permettent une mobilité dans toutes les directions de manière indépendante et instantanée. Cette capacité est obtenue grâce à l'utilisation de roues spéciales, telles que les roues omnidirectionnelles ou les roues Mecanum, qui peuvent générer des vecteurs de mouvement dans plusieurs directions. Les caractéristiques techniques et les avantages d'un robot holonome incluent :  

- Mobilité omnidirectionnelle : Permet des mouvements latéraux, diagonaux, en rotation sur place, et combinés, offrant une grande flexibilité dans des environnements complexes.  
- Contrôle de mouvement précis : Les systèmes de commande peuvent calculer et exécuter des trajectoires complexes, facilitant les manœuvres dans des espaces restreints.
- Complexité mécanique et algorithmique : Nécessite des algorithmes avancés pour coordonner les mouvements des roues et garantir des déplacements fluides et précis.  
Les robots holonomes sont souvent utilisés dans des applications où la capacité à se déplacer librement dans toutes les directions est cruciale, comme dans la robotique de service, la logistique intérieure, et les compétitions de robotique.  

Un <ins>robot différentiel</ins> utilise un mécanisme de transmission où les roues motrices sont fixées de manière indépendante, généralement sur les côtés gauche et droit du robot. La direction et la vitesse du mouvement sont contrôlées en variant les vitesses relatives de ces roues. Les caractéristiques techniques et les avantages d'un robot différentiel incluent :  

- Simplicité mécanique : La conception est généralement plus simple, avec deux moteurs contrôlant deux roues principales, souvent accompagnées de roues passives ou de roulettes pour la stabilité.  
- Facilité de contrôle : La navigation est basée sur des commandes simples de vitesse différentielle, où la différence de vitesse entre les roues gauche et droite permet de tourner.  
- Fiabilité et robustesse : Moins de composants mécaniques complexes réduisent les points de défaillance potentiels, ce qui améliore la robustesse et la maintenance.  
Les robots différentiels sont largement utilisés dans la robotique mobile.  

Le premier prototype utilisait une base roulante holonome pour permettre au robot de se mouvoir dans toutes les directions, avec un châssis triangulaire et des extrémités modulables.

*(cf : V1 modulable 3D).*

Suite à divers tests, une base roulante en transmission différentielle a été choisie pour optimiser l'espace de stockage des plantes en utilisant deux moteurs.
#### <ins>La transmission</ins>
#### <ins>Optimisation de la forme et de l'espace de stockage</ins>

Un prototype a été développé pour respecter le périmètre maximal de 1200 mm lorsque les actionneurs sont rétractés. Le robot devait avoir un centre creux pour stocker les plantes et les pots, pouvant accueillir 3 pots alignés.

*(cf : V2 arc de triomphe).*

Le châssis de cette version était constitué de Makerbeam et équipé de moteurs Nema 17 et de roues.

#### <ins>Symétrie pour une meilleure stabilité</ins>

La troisième version du châssis présente une symétrie avec un espace central traversant. Un carter a été créé pour loger la carte électronique, la batterie, les boutons et le bouton d'arrêt d'urgence. Des billes folles ont été installées aux quatre coins du robot pour stabiliser les déplacements, car les roues étant placées au centre provoquaient un basculement avant-arrière. Les supports des billes folles peuvent également accueillir des roulements pour ne pas endommager la table.

*(cf : 3D V3).*

#### <ins>Passage à OnShape</ins>

En raison de problèmes de licence sur Solidworks, le logiciel OnShape a été adopté. Ce logiciel gratuit pour les étudiants permet le travail collaboratif en temps réel. Le robot a été redéveloppé à partir de zéro, remodélisant tous les composants nécessaires. La pince ajoutée a nécessité la suppression des Makerbeam à l'avant pour permettre des mouvements libres.

Le châssis a été consolidé en une seule pièce pour réduire la flexibilité et ajouter un système de fixation pour le stockage des plantes. La batterie a été déplacée à l'arrière, libérant ainsi de l'espace dans le carter pour une carte électronique plus grande.

*(cf : 3D V4).*

#### <ins>Prototype fonctionnel avec Nema 23</ins>

Les tests ont révélé que les moteurs Nema 17 étaient insuffisants. Les moteurs Nema 23 en transmission directe ont été adoptés. Les roulements à l'avant ont remplacé les billes folles pour stabiliser le robot et optimiser l'espace de stockage.

Le robot fonctionne maintenant en 24V avec deux batteries placées à l'arrière. Le carter repose sur quatre pièces imprimées en 3D accueillant l'électro-aimant pour la tirette, un connecteur pour l'alimentation, une prise USB pour l'ESP32 et divers boutons.

*(cf : 3D V5 (V21)).*

#### <ins>Version finale</ins>

La version finale respecte une charte visuelle définissant les couleurs : l'acrylique est noir ou gris fumé transparent et les pièces imprimées en 3D sont rouges. Les actionneurs, les pinces et le barillet ont été finalisés. Des poignées ont été ajoutées pour faciliter le transport, et les roues ont été modifiées pour s'incruster dans des roulements fixés dans la plaque d'acrylique. Des roulements ont été placés aux quatre coins pour protéger la table de jeu, et des cales ont été ajoutées à l'arrière pour limiter les chocs lors des recalages en bordure.

*(cf : 3D VF)*
