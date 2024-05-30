---
layout: default
parent: Simulation
nav_order: 2
title: Gazebo
---

## Qu'est-ce que Gazebo ?

Gazebo, initialement nommé Gazebo Project, est un simulateur 3D, cinématique, dynamique et multi-robot permettant de simuler des robots articulés dans des environnements complexes, intérieurs ou extérieurs, réalistes et en trois dimensions.

Voici quelques caractéristiques clés de Gazebo :

- **Simulateur 3D et Multi-Robot :** Gazebo permet de créer des environnements virtuels tridimensionnels où des robots peuvent évoluer. Il prend en compte la cinématique et la dynamique des robots, ce qui permet de simuler leurs mouvements et interactions.
- **Compatibilité avec ROS et Player :** Gazebo peut être utilisé conjointement avec ROS (Robot Operating System) et Player. Il est possible d’utiliser les API de ROS pour transmettre des données entre les robots et la simulation.
- **Physique Réaliste :** Gazebo réalise des simulations réalistes de la physique des corps rigides. Les robots peuvent interagir avec leur environnement (ramasser, pousser des objets, etc.) et sont affectés par la gravité et les obstacles.
- **Moteurs Physiques Multiples :** Gazebo utilise plusieurs moteurs physiques tels que l’Open Dynamics Engine (ODE), Bullet, Simbody ou DART. Ces moteurs permettent de calculer les forces, les collisions et les mouvements des objets dans la simulation.
- **Modèles de Robot Personnalisés :** Il est possible de développer et de simuler ses propres modèles de robot en utilisant le format URDF (Unified Robot Description Format). Ces modèles peuvent être chargés et exécutés dans Gazebo.
- **Scénarios de Simulation :** Gazebo permet de créer des scénarios de simulation (mondes) en modifiant les caractéristiques des contacts avec le sol, des obstacles et des valeurs de gravité. Ces paramètres peuvent être ajustés pour chaque lien du robot.
- **Capteurs et Catalogue de Robots :** Gazebo propose divers modules externes pour ajouter des capteurs aux modèles de robots et les simuler, tels que des capteurs d’odométrie (GPS et IMU), de force, de contact, de laser et des caméras stéréo. Il dispose également d’un vaste catalogue de robots, dont la plupart des robots commerciaux.

En résumé, Gazebo est un outil puissant pour la simulation robotique, utilisé dans la recherche en robotique et en intelligence artificielle. Il permet aux développeurs de tester et de valider leurs algorithmes et leurs conceptions de robots dans un environnement virtuel réaliste.

## Comment installer Gazebo ?

1. Ouvrez un terminal dans votre machine virtuelle.
2. Mettez à jour les dépôts de votre système avec la commande :
   ```bash
   sudo apt update
   ```
3. Installez Gazebo en utilisant la commande :
   ```bash
   sudo apt install gazebo
   ```
4. Attendez que l'installation soit terminée. Gazebo sera installé sur votre système.
5. Pour vérifier que Gazebo est bien installé, exécutez la commande suivante :
   ```bash
   gazebo
   ```

Suivez ces étapes pour installer Gazebo et commencer à explorer ses nombreuses fonctionnalités pour la simulation robotique.
 