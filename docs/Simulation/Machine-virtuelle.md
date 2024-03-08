---
layout: default
parent: Simulateur
nav_order: 1
title: Machine Virtuelle
---

# Pourquoi travailler sur une machine virtuel ?

Travailler sur une machine virtuelle présente plusieurs avantages, notamment :

1. Isolation et Sécurité : Les machines virtuelles sont isolées les unes des autres et du système hôte. Cela signifie que si une machine virtuelle est compromise, elle n’affectera pas le reste de votre système.
2. Développement et Test : Les développeurs utilisent souvent des machines virtuelles pour tester des logiciels dans différents environnements (par exemple, différentes versions de systèmes d’exploitation) sans risquer de perturber leur propre système.
3. Économie de Ressources : Vous pouvez exécuter plusieurs systèmes d’exploitation sur une seule machine physique, ce qui permet d’économiser de l’espace, de l’énergie et des ressources matérielles.
4. Réplicabilité : Les machines virtuelles peuvent être sauvegardées, clonées et restaurées facilement. Cela facilite la mise en place d’environnements de développement ou de production identiques.
5. Formation et Apprentissage : Les étudiants et les professionnels peuvent utiliser des machines virtuelles pour apprendre de nouveaux systèmes d’exploitation, tester des configurations réseau, etc.

Cependant, il y a aussi des inconvénients :

1. Performance : Les machines virtuelles peuvent être plus lentes que les systèmes physiques, car elles partagent les ressources matérielles avec d’autres machines virtuelles.
2. Complexité : La configuration et la gestion des machines virtuelles peuvent être complexes, surtout si vous n’êtes pas familier avec les concepts de virtualisation.

Dans notre cas, on a travailler ur une machien virtuel car le logiciel de simulation (Gazebo) est compatible qu'avec Linux.

# Comment choisir sa machine virtuel 

Choisir la bonne machine virtuelle dépend de vos besoins spécifiques et des fonctionnalités que vous recherchez. Voici quelques conseils pour vous aider à prendre une décision :

1. **Parallels Desktop:** Si vous êtes nouveau dans le domaine des machines virtuelles, Parallels Desktop est un excellent choix. Il vous guide pour localiser les fichiers d’installation ISO et vous aide à les télécharger. C’est un outil convivial pour les débutants1.

2. **VMware:** VMWare est largement utilisé dans l’industrie et offre des performances élevées. Il est idéal pour les environnements d’entreprise où la performance, la sécurité et la gestion centralisée sont essentielles1.

3. **Oracle VM VirtualBox:** VirtualBox est un logiciel de machine virtuelle open-source et gratuit. Il prend en charge divers systèmes d’exploitation (Windows, Linux, macOS) et offre des fonctionnalités avancées telles que la capture d’écran, le clonage et la gestion à distance1.

4. **Microsoft Azure:** Si vous envisagez d’utiliser des machines virtuelles dans le cloud, Microsoft Azure propose une large gamme d’options. Assurez-vous de choisir une image capable d’exécuter les applications dont vous avez besoin2.

5. **Nutanix:** Nutanix propose un modèle de machine virtuelle privilégié par ceux qui recherchent une flexibilité et une visibilité optimales au niveau du matériel3.
En résumé, choisissez votre machine virtuelle en fonction de vos besoins spécifiques, de votre niveau d’expertise et des fonctionnalités dont vous avez besoin.

J'ai choisi Virtual Box car c'est un logiciel Open source qui est simple à utiliser et compatibles avec de nombreux systèmes d'exploitations.
Néanmoins ce logiciel possède quelques inconvénients, notamment sa compléxité logicielle ce qui peut entrainer des lenteurs et des bugs. Ce logiciel porvoque aussi un ralentissement de la machien hôte si il y a trop de programmes qui tourne en simultané sur l'hôte et sur la virtualisation.

## Installation de la machine virtuelle 



Cliquez sur le liens ci-dessous pour installer Virtual Box pour Windows
[Virtual Box](https://download.virtualbox.org/virtualbox/7.0.14/VirtualBox-7.0.14-161095-Win.exe)
