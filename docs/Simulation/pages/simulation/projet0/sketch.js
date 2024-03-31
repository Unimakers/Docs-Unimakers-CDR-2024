//déclaration des variables ici
let image_du_terrain;
let echelle;
let 

/*
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}*/

function setup(){
  var largeurCanvas = 2000; // Largeur du canvas en pixels
  var hauteurCanvas = 1334; // Hauteur du canvas en pixels
  var largeurSurface = 3000;  // Largeur de la surface en milimètres
  var hauteurSurface = 2000;  // Hauteur de la surface en milimètres
}

function calculerEchelle(largeurCanvas, hauteurCanvas, largeurSurface, hauteurSurface) {
  // Calculer l'échelle en fonction de la largeur et de la hauteur du canvas
  let echelleLargeur = largeurCanvas / largeurSurface;
  let echelleHauteur = hauteurCanvas / hauteurSurface;

  // Choisir l'échelle la plus petite pour assurer que la surface puisse tenir dans le canvas
  let echelle = Math.min(echelleLargeur, echelleHauteur);

  return echelle;
}

function fond_du_canva(){
  image_du_terrain = loadImage('vinyle2024.png');

}

