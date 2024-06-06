---
layout: technicals
grand_parent: PAMI
parent: Conception
nav_order: 1
title: Version 1
---

# Conception & Modélisation des PAMI

## V1

<model-viewer disable-zoom src="./3d_files/PAMI_v1.gltf" ar ar-modes="webxr scene-viewer quick-look" camera-controls tone-mapping="commerce" shadow-intensity="1" style="height: 150%; width: 150%;">
<div class="progress-bar hide" slot="progress-bar">
        <div class="update-bar"></div>
    </div>
</model-viewer>

La première version était uniquement théorique car elle n'a jamais été imprimée. Cette version n'a jamais été concrétisée car mon objectif de faire des PAMI les plus petits possible était compliqué et surtout mal abordé. Cependant, elle m'a permis de mettre sur table tous les éléments nécessaires au PAMI et de mieux visualiser par la suite l'ensemble des éléments à modéliser.

### Étalonnage

Les Nema 14 ronds sont équipés d'un engrenage directement soudé sur l'arbre du moteur. Il m'a donc fallu modéliser une roue ayant le négatif de cet engrenage pour une intégration optimale. Les marges d'erreur étant très petites, j'ai donc réalisé une pièce d'étalonnage pour tester différentes valeurs. Pour une précision maximale, j'ai décidé d'imprimer les roues en résine. J'ai réitéré le processus pour intégrer les moteurs au mieux dans le corps (body) du robot.

<img src="../../images/etalonnage_reel.webp" height="50%" width="50%">
<img src="../../images/etalonnage_3d.webp" height="50%" width="50%">

Cet étalonnage fait également partie d'une démarche écologique car il permet de tester plusieurs valeurs avec un minimum de plastique utilisé.

### Conclusion

Après avoir passé plusieurs heures sur cette modélisation et pris en note plusieurs points :

- Il faut une surface pour fixer les composants.
- Le robot est trop petit.
- Il faut trouver une vraie batterie, celle-ci n'étant que théorique, et déterminer comment l'attacher.
- Le robot a besoin d'au moins une bille folle pour l'équilibrage avant/arrière.
