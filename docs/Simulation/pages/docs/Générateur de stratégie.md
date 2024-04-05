---
layout: default
parent: Simulation
nav_order: 4
title: Générateur de stratégie
---

# Générateur de stratégies - 2024

<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.9.1/p5.js"></script>
<script src="https://cdn.jsdelivr.net/npm/quicksettings@latest/quicksettings.min.js"></script>
<script src="p5.gui.js"></script>
<link rel="stylesheet" type="text/css" href="style.css">

<div id="ui-container" class="container">
    <div id="checkboxContainer" class="col mb-2">
        <!-- Les cases à cocher seront ajoutées ici par p5.js -->
    </div>
    <div id="buttonsContainer" class="col mb-2">
        <!-- Les boutons seront ajoutés ici par p5.js -->
    </div>
    <div id="robotContainer" class="col mb-2">
        <!-- Les boutons de la simu robot ajoutés ici par p5.js -->
    </div>
    <div id="fileInputContainer" class="col mb-2">
        <!-- L'input de fichier sera ajouté ici par p5.js -->
    </div>
</div>

<div id="p5-container"></div>

<script src="sketch.V_1.js"></script>