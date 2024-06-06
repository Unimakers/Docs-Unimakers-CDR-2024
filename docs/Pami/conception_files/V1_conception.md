---
layout: technicals
grand_parent: PAMI
parent: Conception
nav_order: 1
title: Version 1
---

# Conception & Modélisation des PAMI

## V1

<model-viewer src="./3d_files/PAMI_testinverser.gltf" ar ar-modes="webxr scene-viewer quick-look" camera-controls tone-mapping="neutral" poster="./3d_files/posterv1.webp" shadow-intensity="1" style="display: block; margin-left: auto; margin-right: auto; height: 600px; width:600px;">
    <div class="progress-bar hide" slot="progress-bar">
        <div class="update-bar"></div>
    </div>
</model-viewer>

La première version était uniquement théorique car elle n'a jamais été imprimée. Cette version n'a jamais été concrétisée car notre objectif de faire des PAMI les plus petits possible était compliqué et surtout mal abordé. Cependant, elle nous a permis de mettre sur table tous les éléments nécessaires au PAMI et de mieux visualiser par la suite l'ensemble des éléments à modéliser.

Notre premier défi était l'intégration des roues. En effet, l'arbre des steppers se termine par un engrenage que nous avons dû remodeler et créer en négatif afin que les roues, imprimées autour de ce négatif, s'intègrent parfaitement avec le moteur.
Cependant, l'impression 3D par dépôt de filament manquait cruellement de précision pour un objet de cette taille. Nous nous sommes donc tournés vers l'impression résine. Les premiers tests avec les valeurs exactes de l'engrenage n'étant pas concluants, nous avons réalisé un étalonnage afin de déterminer quelle était la meilleure valeur d'agrandissement (offset) pour limiter les pertes.
### Étalonnage

<div style="display: flex; justify-content: space-around;">
<img src="../../images/etalonnage_reel.webp" height="40%" width="40%">
<img src="../../images/etalonnage_3d.webp" height="40%" width="40%">
</div>

La forme en anneaux olympiques nous a permis de déterminer, quel que soit le sens de la pièce, la valeur pour chaque trou.

Notre étalonnage fut concluant : c'est l'offset de -0.05 qui convenait le mieux.

### Conclusion

Après avoir passé plusieurs heures sur cette modélisation, bien que les composants soient modélisés très simplement, les différents volumes mis en place nous ont permis de noter les points suivants :

- Le robot est trop petit.
- Il faut une surface pour fixer les composants.
- Il faut trouver une vraie batterie, au voltage et à l'intensité adaptés, et déterminer comment l'accrocher au corps.
- Le robot a besoin d'au moins une bille folle pour l'équilibrage avant/arrière.
- Il faut percer la carte dans au moins deux coins pour pouvoir la fixer.
- Il faut repenser la stratégie de conception et travailler en blocs percés au fur et à mesure.
- Plus tard dans la conception, il faudra un moyen pour que l'ombre du robot atteigne les jardinières.