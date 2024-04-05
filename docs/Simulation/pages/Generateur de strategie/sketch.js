let terrainImage;
let ajustement = 90; // Pourcentage de la taille originale.

// GUI
let cb_POI;
let afficherPOI = true;
let cb_DeleteOption;
let deleteOption = false;
let etatRobot = 'arrêté'; // l'état du robot peut être 'lecture', 'pause', ou 'arrêté'
let positionRobot = 0; // Indice du point de stratégie actuel
let vitesseRobot = 1; // Vitesse de déplacement entre les points (modifiable par un curseur)

// Points
let echelleX, echelleY; // Facteurs d'échelle pour les axes X et Y
let rawPOIs = [];
let pois = [];
let pointsStrategie = [];
let numeroPointStrategie = 1; // Commencez à numéroter à partir de 1
let pointSelectionne = null;


function calculerEchelle() {
    // Le canvas vise à représenter une surface de 3m x 2m (3000mm x 2000mm)
    echelleX = height / 3000;
    echelleY = width / 2000;
}


function preload() {
    terrainImage = loadImage('vinyle2024.png');
    rawPOIs = loadStrings('https://raw.githubusercontent.com/LesKaribous/Twinsystem/2024/src/poi.h'); // modif le lien avec le nouveau ficher des points
}

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
    drawPOI();
    drawPath(pointsStrategie);
    drawList(pointsStrategie);
    drawRobot();
}

function setupUI() {
    // Initialisation des checkboxes avec style Bootstrap
    cb_POI = createCheckbox("POIs", afficherPOI);
    cb_POI.parent('checkboxContainer');
    cb_POI.changed(majPOI);
    cb_POI.class('form-check-label');

    cb_DeleteOption = createCheckbox("Delete Mode", deleteOption);
    cb_DeleteOption.parent('checkboxContainer');
    cb_DeleteOption.changed(majDeleteOption);
    cb_DeleteOption.class('form-check-label');

    // Initialisation des boutons avec style Bootstrap
    let btnClear = createButton("Clear Stratégie");
    btnClear.parent('buttonsContainer');
    btnClear.mousePressed(clearStrategie);
    btnClear.class('btn btn-warning mr-2');

    let btnSave = createButton("Quick save");
    btnSave.parent('buttonsContainer');
    btnSave.mousePressed(saveStrategie);
    btnSave.class('btn btn-success mr-2');

    let btnLoad = createButton("Quick load");
    btnLoad.parent('buttonsContainer');
    btnLoad.mousePressed(loadStrategie);
    btnLoad.class('btn btn-info mr-2');

    let btnExport = createButton('Export JSON');
    btnExport.parent('buttonsContainer');
    btnExport.mousePressed(exporterStrategie);
    btnExport.class('btn btn-primary mr-2');

    let btnExportCPP = createButton('Export CPP');
    btnExportCPP.parent('buttonsContainer');
    btnExportCPP.mousePressed(exporterCPP);
    btnExportCPP.class('btn btn-secondary mr-2');

    // Initialisation de l'input de fichier
    let inputImport = createFileInput(handleFile);
    inputImport.parent('fileInputContainer');

    // Contrôles de lecture
    let btnLecture = createButton('Play');
    btnLecture.parent('robotContainer');
    btnLecture.class('btn btn-light mr-2');
    btnLecture.mousePressed(() => {
        if (etatRobot !== 'lecture') { // Si le robot n'est pas déjà en lecture, réinitialisez sa position
            positionRobot = 0;
        }
        etatRobot = 'lecture';
    });

    let btnPause = createButton('Pause');
    btnPause.parent('robotContainer');
    btnPause.class('btn btn-light mr-2');
    btnPause.mousePressed(() => etatRobot = 'pause');

    let btnStop = createButton('Stop');
    btnStop.parent('robotContainer');
    btnStop.class('btn btn-light mr-2');
    btnStop.mousePressed(() => {
        etatRobot = 'arrêté';
        positionRobot = 0; // Réinitialiser la position du robot
    });

    // Curseur de vitesse
    let curseurVitesse = createSlider(0, 100, 50);
    curseurVitesse.parent('robotContainer');
    curseurVitesse.class('custom-range');
    curseurVitesse.input(() => vitesseRobot = curseurVitesse.value() / 100);
}


function drawRobot() {
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





function majDeleteOption() {
    deleteOption = cb_DeleteOption.checked();
}

function majPOI() {
    afficherPOI = cb_POI.checked();
}

function drawPOI() {
    if (afficherPOI) {
        drawList(pois);
    }
}

function windowResized() {
    const container = select('#p5-container');
    let height = (windowHeight * ajustement) / 100;
    let width = (height * 2) / 3;

    if (width > container.width) {
        width = container.width;
        height = (width * 3) / 2;
    }

    height = (height * ajustement) / 100;
    width = (width * ajustement) / 100;

    resizeCanvas(width, height);

    calculerEchelle();
}

function drawTerrain() {
    background(220);
    // Calculez le ratio d'aspect de l'image et du canvas
    let imgRatio = terrainImage.width / terrainImage.height;
    let canvasRatio = width / height;

    // Déterminez si l'image doit être ajustée en largeur ou en hauteur pour remplir le canvas
    let drawWidth, drawHeight;
    if (imgRatio < canvasRatio) {
        // L'image est plus étroite que le canvas (en comparaison), ajustez en largeur
        drawWidth = width;
        drawHeight = drawWidth / imgRatio;
    } else {
        // L'image est plus large que le canvas (en comparaison), ajustez en hauteur
        drawHeight = height;
        drawWidth = drawHeight * imgRatio;
    }

    // Centrez l'image si nécessaire
    let x = (width - drawWidth) / 2;
    let y = (height - drawHeight) / 2;

    image(terrainImage, 0, 0, width, height);
}

function drawPoint(point) {
    let canvasX = point.y * echelleY;
    let canvasY = (3000 - point.x) * echelleX;
    let taillePoint = 20;

    // Vérifier si la souris est proche du point pour décider si on affiche un contour
    let estProche = dist(mouseX, mouseY, canvasX, canvasY) < taillePoint / 2;

    // Si la souris est proche, définir le contour en blanc
    if (estProche) {
        stroke(255); // Couleur du contour
        strokeWeight(2); // Épaisseur du contour
    } else {
        noStroke();
    }

    fill(point.couleur);
    ellipse(canvasX, canvasY, taillePoint, taillePoint);

    // Réinitialiser le contour pour le texte et autres éléments
    noStroke();

    // Afficher le numéro au centre du point, si disponible
    if (point.numero !== undefined) {
        fill(255); // Couleur du numéro
        textAlign(CENTER, CENTER);
        text(point.numero, canvasX, canvasY);
    }

    if (estProche) {
        textSize(20);
        fill(0); // Couleur du texte
        stroke(255); // Contour du texte pour améliorer la lisibilité
        strokeWeight(3);
        textFont('Verdana');
        textStyle(BOLD);

        // Détermine l'alignement et la position du texte en fonction de la position du curseur
        let offsetX, offsetY;
        offsetX = (mouseX < width / 2) ? 15 : -15;
        offsetY = (mouseY < height / 2) ? 20 : -40;

        // Appliquer l'alignement et le décalage pour le nom et les coordonnées
        textAlign((mouseX < width / 2) ? LEFT : RIGHT, (mouseY < height / 2) ? BOTTOM : TOP);
        text(`${point.nom}`, canvasX + offsetX, canvasY + offsetY);
        text(`(${point.x}, ${point.y})`, canvasX + offsetX, canvasY + offsetY + 20);

        // Réinitialisez le contour pour les autres éléments à dessiner après le texte
        noStroke();
    }
}

function drawList(points) {
    points.forEach(point => {
        drawPoint(point);
    });
}

function drawPath(points) {
    if (points.length < 2) return; // Besoin d'au moins deux points pour dessiner un chemin

    stroke(255, 204, 0); // Couleur du chemin
    strokeWeight(2); // Épaisseur de la ligne
    noFill();

    beginShape();
    for (let i = 0; i < points.length; i++) {
        let canvasX = points[i].y * echelleY;
        let canvasY = (3000 - points[i].x) * echelleX;
        vertex(canvasX, canvasY);
    }
    endShape();
}


function extractPOIs() {
    const regex = /const Vec2 (\w+) = Vec2\((\d+),(\d+)\);/; // Regex pour matcher les points

    rawPOIs.forEach(line => {
        const match = line.match(regex);
        if (match) {
            const name = match[1];
            const x = parseInt(match[2], 10);
            const y = parseInt(match[3], 10);
            const numero = undefined; // ou un numéro spécifique si disponible
            pois.push({ nom: name, x: x, y: y, couleur: "red", numero: numero });
        }
    });
}
function mousePressed() {
    if (deleteOption && mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
        // Logique de suppression des points
        for (let i = pointsStrategie.length - 1; i >= 0; i--) {
            let point = pointsStrategie[i];
            let canvasX = point.y * echelleY;
            let canvasY = (3000 - point.x) * echelleX;
            if (dist(mouseX, mouseY, canvasX, canvasY) < 15) {
                // Supprime le point et met à jour les numéros des points suivants
                pointsStrategie.splice(i, 1);
                renumeroterPoints();
                return; // Arrêtez la recherche dès qu'un point est trouvé et supprimé
            }
        }
    } else {
        let pointTrouve = false;
        // Tentez d'abord de sélectionner un point de stratégie existant pour le déplacer
        for (let point of pointsStrategie) {
            let canvasX = point.y * echelleY;
            let canvasY = (3000 - point.x) * echelleX;
            if (dist(mouseX, mouseY, canvasX, canvasY) < 15) {
                pointSelectionne = point;
                pointTrouve = true;
                break; // Un point est trouvé pour déplacement, arrêter la recherche
            }
        }

        if (!pointTrouve && mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
            // Si aucun point de stratégie n'est sélectionné, vérifiez l'aimantation ou créez un nouveau point
            verifierAimantationEtCreerPoint();
        }
    }
}





function renumeroterPoints() {
    numeroPointStrategie = 1;
    for (let point of pointsStrategie) {
        point.numero = numeroPointStrategie++;
    }
}

function mouseDragged() {
    if (pointSelectionne) {
        let aimante = false;
        for (let poi of pois) {
            let canvasX = poi.y * echelleY;
            let canvasY = (3000 - poi.x) * echelleX;
            if (dist(mouseX, mouseY, canvasX, canvasY) < 15) {
                // Si proche d'un POI, aimantez le point
                pointSelectionne.x = poi.x;
                pointSelectionne.y = poi.y;
                pointSelectionne.couleur = "green"; // Changez la couleur pour indiquer l'aimantation
                aimante = true;
                break;
            }
        }

        if (!aimante) {
            // Si le point n'est pas aimanté, mettez à jour selon la position de la souris et remettez en bleu
            pointSelectionne.x = Math.round((3000 - (mouseY / echelleY)));
            pointSelectionne.y = Math.round(mouseX / echelleX);
            pointSelectionne.couleur = "blue"; // La couleur originale des points de stratégie
        }
    }
}


function verifierAimantationEtCreerPoint() {
    let aimante = false;
    for (let poi of pois) {
        let canvasX = poi.y * echelleY;
        let canvasY = (3000 - poi.x) * echelleX;
        if (dist(mouseX, mouseY, canvasX, canvasY) < 15) {
            pointsStrategie.push({
                x: poi.x,
                y: poi.y,
                nom: `Stratégie ${numeroPointStrategie}`,
                couleur: "green",
                numero: numeroPointStrategie++
            });
            aimante = true;
            break;
        }
    }

    if (!aimante) {
        // Crée un nouveau point à l'emplacement de la souris si non aimanté
        let xTerrain = Math.round((3000 - (mouseY / echelleY)));
        let yTerrain = Math.round(mouseX / echelleX);
        pointsStrategie.push({
            x: xTerrain,
            y: yTerrain,
            nom: `Stratégie ${numeroPointStrategie}`,
            couleur: "blue",
            numero: numeroPointStrategie++
        });
    }
}


function mouseReleased() {
    pointSelectionne = null; // Réinitialiser le point sélectionné après le glissement
}

function clearStrategie() {
    pointsStrategie = [];
    numeroPointStrategie = 1;
}

function saveStrategie() {
    localStorage.setItem('strategie', JSON.stringify(pointsStrategie));
}

function loadStrategie() {
    let strategie = localStorage.getItem('strategie');
    if (strategie) {
        pointsStrategie = JSON.parse(strategie);
        // Assurez-vous que le numéro suit correctement le dernier point ajouté
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
    if (file.type === 'application/json' || true) { // Ignore le type de fichier
        let reader = new FileReader();
        reader.onload = function (e) {
            try {
                let contents = e.target.result;
                pointsStrategie = JSON.parse(contents);
                numeroPointStrategie = pointsStrategie.length ? pointsStrategie[pointsStrategie.length - 1].numero + 1 : 1;
                redraw(); // Force le redessinage pour afficher les points importés
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
        // Vérifier si le point correspond à un POI
        let correspondancePOI = pois.find(poi => poi.x === point.x && poi.y === point.y);
        if (correspondancePOI) {
            // Utiliser le nom du POI s'il y a correspondance
            contenuCPP += `    motion.go(POI::${correspondancePOI.nom}); // Numero ${point.numero}\n`;
        } else {
            // Sinon, utiliser les coordonnées x et y
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
