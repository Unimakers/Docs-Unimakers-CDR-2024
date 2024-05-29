---
layout: technicals
parent: Robot
nav_order: 2
title: Hardware
has_children: true
---
## Sans élément, on n'ira pas loin

Les robots comportent plusieurs systèmes de nature différente. Pour notre robot, nous avons identifié les systèmes suivants :

- Systèmes mécaniques
- Systèmes électroniques
- Systèmes lumineux

Chacun de ces systèmes joue un rôle distinct dans le fonctionnement du robot, mais ils ne fonctionnent pas indépendamment. Ils sont soigneusement interfacés pour que chaque composant contribue efficacement à l'ensemble du robot.

## Le mouvement, on y va de "pas en pas"

Pour le mouvement, nous avons opté pour des moteurs pas à pas Nema 17, couramment utilisés dans les imprimantes 3D et connus pour leur couple adéquat pour des systèmes légers.

<model-viewer disable-zoom src="./Hardware_files/Nema17.glb" ar ar-modes="webxr scene-viewer quick-look" camera-controls tone-mapping="commerce" poster="./Hardware_files/poster.webp" shadow-intensity="1"> </model-viewer>

Un moteur pas à pas fonctionne en effectuant des rotations par pas. Un changement de polarité permet de passer d'une position à une autre. Dans notre cas, ce changement est géré par notre programme via un driver nommé TMC2209.

Nous avons choisi ce modèle de moteur en utilisant le calculateur disponible sur le site du makerspace, en fonction du cahier des charges prévisionnel suivant :

[Calculateur en ligne](https://makerspace-amiens.fr/pages/calculateur-moteur-robot/){: .btn .btn-purple }

| Caractéristique         | Valeur |
|-------------------------|--------|
| Poids                   | 6 kg   |
| Vitesse                 | 0,5 m/s|
| Accélération            | 2 m/s² |
| Nombre de moteurs       | 2      |
| Rayon roue motrice      | 60 mm  |
| Tension d'alimentation  | 12 V   |
| Efficacité              | 65%    |
| Temps de fonctionnement | 2 h    |

Cependant, nous avons constaté que ces moteurs ne fournissaient pas le couple attendu en pratique, probablement en raison de la qualité des marques noname que nous avions. Cela nous a conduit à choisir un modèle supérieur, les Nema 23.

Ces moteurs sont un peu plus encombrants que les Nema 17, mais ils permettent d'utiliser le robot en transmission directe (direct drive), c'est-à-dire que la roue est directement fixée sur l'arbre moteur.

<model-viewer src="./Hardware_files/NEMA23.gltf" ar ar-modes="webxr scene-viewer quick-look" camera-controls tone-mapping="commerce" poster="./Hardware_files/Nemaposter.webp" shadow-intensity="1" disable-zoom>
    <div class="progress-bar hide" slot="progress-bar">
        <div class="update-bar"></div>
    </div>
</model-viewer>

Pour les mouvements des actionneurs, nous avons principalement utilisé des servomoteurs. Ce sont des moteurs à courant continu (DC) qui intègrent un régulateur de position. En envoyant un signal PWM (pulse width modulation) en français MLI (modulation de largeur d'impulsion), nous pouvons commander le moteur à se positionner à un certain angle.

<model-viewer src="./Hardware_files/MG996RServo.glb" ar ar-modes="webxr scene-viewer quick-look" camera-controls tone-mapping="commerce" poster="./Hardware_files/posterServo.webp" shadow-intensity="1">
    <div class="progress-bar hide" slot="progress-bar">
        <div class="update-bar"></div>
    </div>
</model-viewer>
