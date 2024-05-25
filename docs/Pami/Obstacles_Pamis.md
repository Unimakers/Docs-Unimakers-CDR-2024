---
layout: default
grand_parent: PAMI
parent: Programmation
nav_order: 2
title: Obstacles
---

# Obstacles

## Choix du capteur

Afin de donner la possibilité au PAMI de s'arrêter face à un obstacle et ainsi éviter la collision, nous devons choisir un capteur capable de mesurer avec une précision correcte la distance entre le PAMI et l'obstacle. Notre choix s'est naturellement porté sur le [HC-SR05](https://www.kubii.com/fr/modules-capteurs/2042-capteur-ultrason-hc-sr05-kubii-3272496009028.html), un capteur ultrasonique utilisé pour mesurer des distances en émettant des ondes sonores et en calculant le temps que met l'écho à revenir. C'est une solution peu onéreuse et fiable à implémenter.

![Capteur ultrasonique HC-SR05](../images/hc-sr05.webp)

{: .note}
Le capteur ultrasonique applique la formule `distance = (temps * vitesse_son) / 2`. La vitesse du son dans l'air est de 340 mètres par seconde.

## Lecture des valeurs du capteur

### Identification d'un problème

En testant le capteur, nous nous sommes vite rendus compte que des valeurs parasites étaient retournées. Le PAMI s'arrête seulement si la distance retournée est inférieure à 31 cm. Le fait d'avoir des valeurs fausses rendait ses déplacements erratiques qui, par la même occasion, sautaient des pas sur les steppers.

### Solution logicielle

Après un certain moment de réflexion, nous avons essayé d'implémenter une moyenne mobile des valeurs afin de filtrer les potentiels parasites. La tâche de lecture du capteur est quant à elle déportée sur le cœur n°2 afin de fluidifier l'exécution du code. Voici à quoi ressemble la fonction de mesure :

1. La fonction soustrait l'ancienne mesure de la somme totale des lectures.
2. Elle lit la nouvelle distance mesurée par le capteur et l'ajoute à la somme totale.
3. Elle met à jour l'index pour garder une trace de la position dans le tableau des lectures.
4. Elle calcule la distance moyenne en divisant la somme totale par le nombre de mesures (dans notre cas, 5).

Nous surveillons en continu la proximité d'obstacles en moyennant sur 5 valeurs et obtenons ainsi une unique valeur filtrée. La solution fonctionnant assez bien pour nous, nous l'avons adoptée.

## Intégration de la détection dans les déplacements

Maintenant que la valeur de notre capteur est utilisable, nous devons interpréter la distance des obstacles. Dans notre cas, nous avons juger qu'une tolérance de 31 cm et plus était acceptable. Le PAMI réagit assez rapidement et cela lui permet de s'arrêter en premier dans le cas d'un choc frontal avec un autre robot. Ainsi, quand le capteur retourne une valeur inférieure à 31 cm, il signale la présence d'un obstacle en passant la variable booléenne globale `obstacle` à l'état **VRAI**. Dans le cas contraire, cette variable est à l'état **FAUX**. De cette façon, nous savons si les [steppers](./Steppers_Pamis.html) ont le droit d'exécuter leurs pas en consultant tout simplement l'état de la variable.
