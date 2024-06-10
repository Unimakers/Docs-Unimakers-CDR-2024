---
layout: technicals
grand_parent: PAMI
parent: Conception
nav_order: 2
title: Version 2
---

<style>
	.video-container {
		position: relative;
		padding-bottom: 56.25%; /* Ratio 16:9 */
		height: 0;
		overflow: hidden;
		max-width: 100%;
		background: #000;
	}

	.video-container video {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
</style>

# Conception & Modélisation des PAMI

## V2

<model-viewer src="./3d_files/Pami_v2_compress.glb" ar ar-modes="webxr scene-viewer quick-look" camera-controls tone-mapping="neutral" poster="./3d_files/Pami_v2_compress.webp" shadow-intensity="1" style="display: block; margin-left: auto; margin-right: auto; height: 600px; width:600px;">
    <div class="progress-bar hide" slot="progress-bar">
        <div class="update-bar"></div>
    </div>
</model-viewer>


La V2 ne se base pas sur l'ancienne version mais constitue plutôt une refonte complète. En effet, nous avons changé de fichier pour repartir sur une base saine. En commençant par un rectangle fixe de 120mm par 120mm, cette contrainte établie, le problème numéro 1 est résolu. Ensuite, une extrusion de 65mm donne vie au volume qui sera la base imprimée en 3D par dépôt de filament.

Ensuite, nous nous sommes attaqués au problème de fixation des moteurs, de la roue pressée contre les steppers et à la manière d'attacher la plaque qui vient protéger le tout. La solution la plus optimale étant de creuser le volume pour y intégrer toutes les pièces au fur et à mesure. La première intégration est celle des moteurs. En effet, nous avons d'abord creusé l'espace pour que le moteur soit correctement encastré, puis créé un espace en arc de cercle pour le mouvement libre de la roue. Enfin, la plaque qui vient protéger le tout s'intègre parfaitement pour ne pas modifier le volume maximal choisi de 120mm.

Plusieurs essais ont été nécessaires pour ajuster différents paramètres :
 - L'ajustement de l'espace moteur afin que ce dernier soit verrouillé dans son emplacement
 - L'ajustement de chacune des profondeurs afin que la roue soit bien comprimée entre le stepper et la plaque, qui contient un roulement pour un mouvement plus fluide.

### Premiers test statique



 <model-viewer src="./3d_files/bille_folle.glb" ar ar-modes="webxr scene-viewer quick-look" camera-controls tone-mapping="neutral" poster="./3d_files/poster_billes.webp" shadow-intensity="1">
    <div class="progress-bar hide" slot="progress-bar">
        <div class="update-bar"></div>
    </div>
  </model-viewer>


Pour les premiers tests, l'utilisation d'une bille folle non adaptée rendait l'ajustement de hauteur impossible. En effet, les billes étant trop grosses, même encastrées au maximum, elles touchaient le sol avant les roues. Pour résoudre ce problème, nous sommes passés à des patins en PTFE, beaucoup plus petits et offrant un très faible frottement, propice à la progression fluide et rapide du robot.

### Départ du Prototype



 <div class="video-container"><video controls><source src="./3d_files/Premier_start.webm" type="video/webm" /></video></div>
*La vidéo ci-dessus illustre la première mise en route du PAMI.*



Dans la vidéo, on peut observer qu'au bout d'un certain temps, le PAMI tourne sur lui-même à toute vitesse. Ce problème est dû à une accélération trop grande qui sera corrigée dans le code. On entend aussi un bruit strident indiquant une surcharge des moteurs. Le problème du bruit strident ne venant pas de la surcharge des steppers, et malgré nos différents ajustements, ce dernier persistant, nous avons été contraints de changer de moteurs.


### Conclusion


Le volume général du PAMI étant de bien meilleure conception que la V1, nous conservons cette méthode de conception. Les différents problèmes liés à la carte sont également réglés, car nous avons refait la carte pour une carte personnalisée réalisée par nos soins. Le point principal à régler étant l'augmentation de la puissance des moteurs par une autre référence. Nous allons passer des [Nema 14 ](https://www.omc-stepperonline.com/fr/rond-nema-14-bipolaire-0-9deg-9-ncm-12-75-oz-in-1-0a-36-5x17-5mm-4-fils-14hr07-1004vrn?search=nema%2014%20rond) aux [Nema 17](https://www.omc-stepperonline.com/fr/ue-en-vente-moteur-bipolaire-nema-17-16ncm-22-66oz-in-au-17hs08-1004s). Hormis ce changement d'appellation, les points principaux qui les différencient sont le volume, plus élevé sur le Nema 17, mais également le couple, qui passe de 9Ncm à 16Ncm. Autre point auquel il faut penser lorsque toutes les parties servant à l'avancement du robot seront achevées :
 - Un système de fixation pour le capteur ultrason, le capteur REED servant de "tirette" de démarrage.
 - Il faudra également penser à l'intégration du switch de stratégie, mais aussi du B.A.U.
 - Finalement, un système permettant au robot de toucher les plantes par-dessus les jardinières.


