---
layout: default
grand_parent: PAMI
parent: Programmation
nav_order: 1
title: Steppers
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

# Steppers

## Déplacements

Les déplacements du PAMI s'effectuent à l'aide des deux steppers présents. La librairie AccelStepper nous permet de les piloter simplement. Lors du développement du code de déplacement, deux choix s'offraient à nous : utiliser les coordonnées relatives ou absolues. Nous avons d'abord décidé introduire le déplacement en relatif avant de tenter l'implémentation en absolu.

{: .note}
Le déplacement en coordonnées absolues d'un robot avec des steppers se réfère à lui donner une position précise dans l'espace global défini, tandis que le déplacement en coordonnées relatives indique que le robot se déplace d'une certaine distance par rapport à sa position actuelle.

## Liaison des deux steppers

Afin de faciliter l'écriture du code et la manipulation des deux steppers, nous avons utilisé la librairie [Motion](https://github.com/Unimakers/CDR-2024-FIRMWARE/tree/main/CDR2024%20BASE/lib/Motion) d'Unimakers, offrant une simplification accrue du pilotage. Celle-ci permet entre autre le déplacement en arc de cercle, ainsi que la liaison des deux steppers sous la forme d'un objet !

### Exemple de déplacement

Supposons que le PAMI doive avancer de 100 mm, tourner de 45° à gauche pour finir par avancer de 1000 mm. Nous pouvons passer la distance en mm dans la fonction car nous la multiplions par la constante `STEP_PER_MM` pour avoir la valeur en pas. Le code typique serait le suivant :

```c
void moveExample() {
	RobotSteppers.move_line(100 * STEP_PER_MM);
	while (!RobotSteppers.target_reached()) { RobotSteppers.run(); }

	RobotSteppers.turn(45);
	while (!RobotSteppers.target_reached()) { RobotSteppers.run(); }

	RobotSteppers.move_line(1000 * STEP_PER_MM);
	while (!RobotSteppers.target_reached()) {
		if (!obstacle) RobotSteppers.run();
	}
}
```

Dans l'exemple ci-dessus, nous donnons l'ordre aux steppers d'avancer en ligne droite de `100 * STEP_PER_MM` pas. Ensuite, nous exécutons ces pas tant que les steppers n'ont pas atteint leur position finale. Une petite subtilité est présente sur la dernière partie : nous vérifions la présence d'obstacle. En effet, il y a plus de chance de rencontrer un obstacle sur un déplacement d'un mètre, nous devons donc être sûrs de l'arrêt de l'avancement dans le cas où un obstacle est présent face au PAMI. Pour comprendre comment cette variable booléenne `obstacle` est définie, vous pouvez lire la partie [obstacles](./Obstacles_Pamis.html). Lorsqu'un obstacle est présent, les pas ne sont plus exécutés. Le PAMI ne fait ainsi plus rien tant qu'un obstacle est présent.

### Exemple lors d'un match

<div class="video-container"><video muted autoplay loop><source src="../images/pami-move.webm" type="video/webm" /></video></div>

La vidéo ci-dessus illustre bien la façon dont se déplacent les PAMI et comment la détection d'obstacle est implémentée.
