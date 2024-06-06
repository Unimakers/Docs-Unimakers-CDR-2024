---
layout: technicals
grand_parent: PAMI
parent: Conception
nav_order: 2
title: Version 2
---


# Conception & Modélisation des PAMI

## V2

La V2 ne se base pas sur l'ancienne version mais constitue plutôt une refonte complète. En effet, nous avons changé de fichier pour repartir sur une base saine. En commencant par un rectangle fixe ce 120mm par 120mm, cette contraine établie le probleme numero 1 est résolue. Ensuite une extrusion de 65mm donne vie au volume qui sera la base imprimé en 3d par dépot de fileament.
Puis le probleme de fixation des moteurs, de la roue presse contre le steppers  et comment attacher la plque qui viens proteger tout ça. La réponses la plus obtimal étant de creusée le volume pour y interger toute les pieces au fur est a messure. La premiere integration est celle des moteurs. En effets nous avons d'abbord creusée l'espace pour que le moteur soit correctement encaster puis fait un espace en arc de cercle pour le mouvement libre de la roue et enfin la plaque qui vient proteger le tout est s'integer parfaitement pour le pas modifer le volume maximal choisie de 120mm.
Plusieur essaie on ete nessesaire pour ajouster different paramettre : 
 - L'ajustement de l'espace moteur afin que ce dernier soit verrouiller dans sont emplacement
 - L'ajustement de chaqu'une des profondeurs afin de la roue soit bien comprimé entre le steppers et la plaque qui contient un roulement pour un mouvement plus fluide.



 ### Premiers test statique

 <model-viewer src="./3d_files/billes_folles.gltf" ar ar-modes="webxr scene-viewer quick-look" camera-controls tone-mapping="neutral" poster="./3d_files/poster_billes.webp" shadow-intensity="1">4
    <div class="progress-bar hide" slot="progress-bar">
        <div class="update-bar"></div>
    </div>
  </model-viewer>


 Pour les premiers test l'utilisation d'une bille folle non adapté rendait l'ajustement de hauteur impossible, en effet les billes étant trop grosse même encasstré au maximun elle touchait le sol avant les roues. Pour résoudre ce problemes nous somme passée sur des patins en PTFE beacoup plus petit est offrant un très faible frotement propice a l'avancement du robot.

 text a corriger et  a finir 
 
