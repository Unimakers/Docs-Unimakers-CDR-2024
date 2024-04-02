//Cette fonction dessine l'image du terrain sur le canvas, en ajustant sa taille pour s'adapter à la fenêtre.
function dessinerTerrain(){ 
  background(220);
  let image_du_terrain = loadImage('vinyle2024.png'); //charge le vinyle dans la fonction image du terrain de la simulation 
  let ratioImg = image_du_terrain.width / image_du_terrain.height; //calcul un ratio entre la largeur et la hauteur de l'image
  let largeurImg, hauteurImg; //déclare les variables de la hauteur et de la largeur du vinyle

  if(ratioImg < width/height){  //
    largeurImg = width;
    hauteurImg = largeurImg / ratioImg;
  }else {
    hauteurImg = height;
    largeurImg = hauteurImg * ratioImg;
}
  let x = (width - largeurImg) / 2;
  let y = (height - hauteurImg) / 2;
  image(image_du_terrain, 0, 0, width, height);
}