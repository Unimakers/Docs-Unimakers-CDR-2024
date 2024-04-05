let terrainImage;
let ajustement = 90; // Pourcentage de la taille originale.

// GUI
let cb_POI;
let afficherPOI = true;
let cb_DeleteOption;
let deleteOption = false;
let etatRobot = 'arrêté'; // Peut être 'lecture', 'pause', ou 'arrêté'
let positionRobot = 0; // Indice du point de stratégie actuel
let vitesseRobot = 1; // Vitesse de déplacement entre les points (modifiable par un curseur)

// Points
let echelleX, echelleY; // Facteurs d'échelle pour les axes X et Y
let rawPOIs = [];
let pois = [];
let pointsStrategie = [];
let numeroPointStrategie = 1; // Commencez à numéroter à partir de 1
let pointSelectionne = null;

function setup() {

    const container = select('#p5-container');
    let height = (windowHeight * ajustement) / 100;
    let width = (height * 2) / 3;

    if (width > container.width) {
        width = container.width;
        height = (width * 3) / 2;
    }

    height = (height * ajustement) / 100;
    width = (width * ajustement) / 100;

    let canvas = createCanvas(width, height);
    canvas.parent('p5-container');
    calculerEchelle();
    extractPOIs(); // Extrait les points après le chargement du fichier
    setupUI();
}
function draw() {
    drawTerrain();
    dessinerPoint();
    dessinerChemin(pointsStrategie);
    dessinerListe(pointsStrategie);
    dessinerRobot();
}
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
function dessinerPoint(points){
  let canvasX = point.y * echelle.y;
  let canvasY = (3000-point.x) * echelle.x;
  let taillePoint = 15; //défini la taille du point
  let estProche = dist(mouseX, mouseY, canvasX, canvasY) < taillePoint/2;
  stroke(estProche ? 255 : 0); //définit la couleur des points
  strokeWeigth(estProche ? 2 : 0); //définit l'épaisseur du contour des points
  fill(point.couleur); //rempli les point de couleur
  ellipse(canvasX, canvasY, taillePoint, taillePoint);
  nostroke();
  if(point.numero !== undefined){
    fill(255);
    textAlign(CENTER, CENTER);
    text(point.numéro, canvasX, canvasY);
  }
  if(estProche){
    textsize(20);
    fill(0);
    stroke(255);
    strokeWeight(3);
    textFont('Verdana');
    textStyle(BOLD);
    let offsetX = (mouseX < width / 2) ? 15 : -15;
    let offsetY = (mouseY < height / 2) ? 20 : -40;
    textAlign((mouseX < width / 2) ? LEFT : RIGHT, (mouseY < height / 2) ? BOTTOM : TOP);
    text(`${point.nom}`, canvasX + offsetX, canvasY + offsetY);
    text(`(${point.x}, ${point.y})`, canvasX + offsetX, canvasY + offsetY + 20);
    noStroke();
  }
}
function dessinerListe(points) {
    points.forEach(dessinerPoint);
}
function dessinerChemin(points) {
    if (points.length < 2) return;
    stroke(255, 204, 0);
    strokeWeight(2);
    noFill();
    beginShape();
    points.forEach(point => {
        let canvasX = point.y * echelleY;
        let canvasY = (3000 - point.x) * echelleX;
        vertex(canvasX, canvasY);
    });
    endShape();
}
function dessinerRobot() {
    if (pointsStrategie.length > 1 && (etatRobot === 'lecture' || etatRobot === 'pause')) {
        let indexActuel = Math.floor(positionRobot);
        let indexSuivant = indexActuel + 1 < pointsStrategie.length ? indexActuel + 1 : indexActuel;
        let progression = positionRobot - indexActuel;

        let pointActuel = pointsStrategie[indexActuel];
        let pointSuivant = pointsStrategie[indexSuivant];

        let canvasX = lerp(pointActuel.y * echelleY, pointSuivant.y * echelleY, progression);
        let canvasY = lerp((3000 - pointActuel.x) * echelleX, (3000 - pointSuivant.x) * echelleX, progression);

        stroke(255); // Couleur du contour
        strokeWeight(2); // Épaisseur du contour
        fill('rgba(10, 10, 10, 0.5)');
        ellipse(canvasX, canvasY, 50, 50);

        if (etatRobot === 'lecture') {
            if (indexActuel < pointsStrategie.length - 1) { // Empêche l'incrémentation au-delà du dernier point
                positionRobot += vitesseRobot * 0.01;
            }
        }
    }
}
function extrairePointsInteret() {
    const regex = /const Vec2 (\w+) = Vec2\((\d+),(\d+)\);/;
    pointsBruts.forEach(line => {
        const match = line.match(regex);
        if (match) {
            const [_, nom, x, y] = match;
            pointsInteret.push({ nom, x: parseInt(x), y: parseInt(y), couleur: "red" });
        }
    });
}
function mousePressed() {
    if (optionSuppression && mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
        let index = pointsStrategie.findIndex(point => {
            let canvasX = point.y * echelleY;
            let canvasY = (3000 - point.x) * echelleX;
            return dist(mouseX, mouseY, canvasX, canvasY) < 15;
        });
        if (index !== -1) {
            pointsStrategie.splice(index, 1);
            renumeroterPoints();
        }
    } else {
        let pointTrouve = pointsStrategie.find(point => {
            let canvasX = point.y * echelleY;
            let canvasY = (3000 - point.x) * echelleX;
            return dist(mouseX, mouseY, canvasX, canvasY) < 15;
        });
        if (!pointTrouve && mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
            verifierAimantationEtCreerPoint();
        }
    }
}
function mouseDragged() {
    if (!pointSelectionne) return;
    let aimante = pointsInteret.find(poi => {
        let canvasX = poi.y * echelleY;
        let canvasY = (3000 - poi.x) * echelleX;
        return dist(mouseX, mouseY, canvasX, canvasY) < 15;
    });
    if (aimante) {
        pointSelectionne.x = aimante.x;
        pointSelectionne.y = aimante.y;
        pointSelectionne.couleur = "green";
    } else {
        pointSelectionne.x = Math.round(3000 - mouseY / echelleY);
        pointSelectionne.y = Math.round(mouseX / echelleX);
        pointSelectionne.couleur = "blue";
    }
}
function mouseReleased() {
    pointSelectionne = null;
}
function effacerStrategie() {
    pointsStrategie = [];
    numeroPointStrategie = 1;
}
function sauvegarderStrategie() {
    localStorage.setItem('strategie', JSON.stringify(pointsStrategie));
}
function chargerStrategie() {
    let strategie = localStorage.getItem('strategie');
    if (strategie) {
        pointsStrategie = JSON.parse(strategie);
        numeroPointStrategie = pointsStrategie.length ? pointsStrategie[pointsStrategie.length - 1].numero + 1 : 1;
    }
}
function exporterStrategie() {
    let dataStr = JSON.stringify(pointsStrategie, null, 2);
    let dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
    let exportFileDefaultName = 'strategie.json';
    let linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
}
function handleFile(file) {
    if (file.type === 'application/json' || true) {
        let reader = new FileReader();
        reader.onload = function (e) {
            try {
                let contents = e.target.result;
                pointsStrategie = JSON.parse(contents);
                numeroPointStrategie = pointsStrategie.length ? pointsStrategie[pointsStrategie.length - 1].numero + 1 : 1;
                redraw();
            } catch (error) {
                console.error("Erreur lors du parsing du fichier JSON : ", error);
                alert("Le fichier choisi ne contient pas de JSON valide.");
            }
        };
        reader.readAsText(file.file);
    } else {
        console.log("Tentative de lecture du fichier comme JSON indépendamment du type.");
    }
}
function exporterCPP() {
    let contenuCPP = "void match(){\n";
    pointsStrategie.forEach((point) => {
        let correspondancePOI = pointsInteret.find(poi => poi.x === point.x && poi.y === point.y);
        if (correspondancePOI) {
            contenuCPP += `    motion.go(POI::${correspondancePOI.nom}); // Numero ${point.numero}\n`;
        } else {
            contenuCPP += `    motion.go(${point.x},${point.y}); // Numero ${point.numero}\n`;
        }
    });
    contenuCPP += "}\n";
    download('strategy.cpp', contenuCPP);
}
function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

