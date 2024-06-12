---
layout: technicals
grand_parent: PAMI
parent: Conception
nav_order: 3
title: Version Final
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
    .belleimage:hover {
        transform: scale(1.35);
    }
</style>

# Conception & Modélisation des PAMI

## Version Finale

<model-viewer src="./3d_files/pami-vfinal.glb" ar ar-modes="webxr scene-viewer quick-look" camera-controls tone-mapping="neutral" poster="./3d_files/v3.webp" shadow-intensity="1" style="display: block; margin-left: auto; margin-right: auto; height: 600px; width: 600px;">
    <div class="progress-bar hide" slot="progress-bar">
        <div class="update-bar"></div>
    </div>
</model-viewer>

La version 3, ou version finale, est une continuité et une amélioration du concept de la V2. Le changement principal est le remplacement des steppers par une nouvelle référence. La grande modification est le changement complet de l'emplacement des composants, passant d'un agencement circulaire à un agencement carré.

Avec le body réadapté et la carte finale réalisée, nous avons pu continuer notre conception. Sur la plaque supérieure, il fallait intégrer plusieurs emplacements pour les différents composants qui s'y fixent :

- Un emplacement pour visser le bouton d'arrêt d'urgence
- Un support pour le capteur Reed
- Un emplacement pour le switch de stratégie (bleu ou jaune)
- Un support et une attache pour le capteur ultrason
- Un emplacement pour le servo-moteur destiné à toucher les plantes

<div style="display: flex; justify-content: space-around;">
    <img src="./3d_files/plaque_fini.webp" height="30%" width="30%" class="belleimage">
    <img src="./3d_files/ultrason.webp" height="30%" width="30%" class="belleimage">
    <img src="./3d_files/reed.webp" height="30%" width="30%" class="belleimage">
    <img src="./3d_files/canard_holder.webp" height="30%" width="30%" class="belleimage">
</div>

Une fois tous les prototypes validés, nous sommes passés au montage final des PAMI 2 et 3. En voici le résultat.

<div class="video-container">
    <video muted autoplay loop>
        <source src="./3d_files/pami-montage.webm" type="video/webm">
    </video>
</div>

## Conclusion

Le développement du PAMI a été un projet évolutif marqué par de multiples améliorations et différents échecs. De la version initiale à la version finale, chaque étape a permis de résoudre des problèmes et d'optimiser la conception pour atteindre progressivement les objectifs fixés en termes de fonctionnalité et de performance.
