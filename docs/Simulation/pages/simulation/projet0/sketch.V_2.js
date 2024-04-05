let terrainImage;
let pourcentageAjustement = 90; // Pourcentage de la taille originale.

// GUI
let checkboxPOI;
let afficherPOI = true;
let checkboxModeSuppression;
let modeSuppression = false;
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


function calculerEchelle() {
    // Le canvas vise à représenter une surface de 3m x 2m (3000mm x 2000mm)
    echelleX = height / 3000;
    echelleY = width / 2000;
}


function preload() {
    terrainImage = loadImage('vinyle2024.png');
    rawPOIs = loadStrings('https://github.com/Unimakers/Docs-Unimakers-CDR-2024/docs/Simulation/pages/simulation/projet0/Points.h');
}

function setup() {

    const container = select('#p5-container');
    let hauteur = (windowHeight * pourcentageAjustement) / 100;
    let largeur = (hauteur * 2) / 3;

    if (largeur > container.width) {
        largeur = container.width;
        hauteur = (largeur * 3) / 2;
    }

    hauteur = (hauteur * pourcentageAjustement) / 100;
    largeur = (largeur * pourcentageAjustement) / 100;

    let canvas = createCanvas(largeur, hauteur);
    canvas.parent('p5-container');
    calculerEchelle();
    extrairePOIs(); // Extrait les points après le chargement du fichier
    setupUI();
}

function draw() {
    dessinerTerrain();
    dessinerPOI();
    dessinerChemin(pointsStrategie);
    dessinerListe(pointsStrategie);
    dessinerRobot();
}

function setupUI() {
    // Initialisation des checkboxes avec style Bootstrap
    checkboxPOI = createCheckbox("POIs", afficherPOI);
    checkboxPOI.parent('checkboxContainer');
    checkboxPOI.changed(majPOI);
    checkboxPOI.class('form-check-label');

    checkboxModeSuppression = createCheckbox("Mode Suppression", modeSuppression);
    checkboxModeSuppression.parent('checkboxContainer');
    checkboxModeSuppression.changed(majModeSuppression);
    checkboxModeSuppression.class('form-check-label');

    // Initialisation des boutons avec style Bootstrap
    let boutonEffacer = createButton("Effacer Stratégie");
    boutonEffacer.parent('buttonsContainer');
    boutonEffacer.mousePressed(effacerStrategie);
    boutonEffacer.class('btn btn-warning mr-2');

    let boutonEnregistrer = createButton("Sauvegarde Rapide");
    boutonEnregistrer.parent('buttonsContainer');
    boutonEnregistrer.mousePressed(sauvegarderStrategie);
    boutonEnregistrer.class('btn btn-success mr-2');

    let boutonCharger = createButton("Chargement Rapide");
    boutonCharger.parent('buttonsContainer');
    boutonCharger.mousePressed(chargerStrategie);
    boutonCharger.class('btn btn-info mr-2');

    let boutonExporter = createButton('Exporter JSON');
    boutonExporter.parent('buttonsContainer');
    boutonExporter.mousePressed(exporterStrategie);
    boutonExporter.class('btn btn-primary mr-2');

    let boutonExporterCPP = createButton('Exporter CPP');
    boutonExporterCPP.parent('buttonsContainer');
    boutonExporterCPP.mousePressed(exporterCPP);
    boutonExporterCPP.class('btn btn-secondary mr-2');

    // Initialisation de l'input de fichier
    let inputImport = createFileInput(gestionFichier);
    inputImport.parent('fileInputContainer');

    // Contrôles de lecture
    let boutonLecture = createButton('Play');
    boutonLecture.parent('robotContainer');
    boutonLecture.class('btn btn-light mr-2');
    boutonLecture.mousePressed(() => {
        if (etatRobot !== 'lecture') { // Si le robot n'est pas déjà en lecture, réinitialisez sa position
            positionRobot = 0;
        }
        etatRobot = 'lecture';
    });

    let boutonPause = createButton('Pause');
    boutonPause.parent('robotContainer');
    boutonPause.class('btn btn-light mr-2');
    boutonPause.mousePressed(() => etatRobot = 'pause');

    let boutonStop = createButton('Stop');
    boutonStop.parent('robotContainer');
    boutonStop.class('btn btn-light mr-2');
    boutonStop.mousePressed(() => {
        etatRobot = 'arrêté';
        positionRobot = 0; // Réinitialiser la position du robot
    });

    // Curseur de vitesse
    let curseurVitesse = createSlider(0, 100, 50);
    curseurVitesse.parent('robotContainer');
    curseurVitesse.class('custom-range');
    curseurVitesse.input(() => vitesseRobot = curseurVitesse.value() / 100);
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

function majModeSuppression() {
    modeSuppression = checkboxModeSuppression.checked();
}

function majPOI() {
    afficherPOI = checkboxPOI.checked();
}

function dessinerPOI() {
    if (afficherPOI) {
        dessinerListe(pois);
    }
}

function windowResized() {
    const container = select('#p5-container');
    let hauteur = (windowHeight * pourcentageAjustement) / 100;
    let largeur = (hauteur * 2) / 3;

    if (largeur > container.width) {
        largeur = container.width;
        hauteur = (largeur * 3) / 2;
    }

    hauteur = (hauteur * pourcentageAjustement) / 100;
    largeur = (largeur * pourcentageAjustement) / 100;

    resizeCanvas(largeur, hauteur);

    calculerEchelle();
}

function dessinerTerrain() {
    background(220);
    // Calculez le ratio d'aspect de l'image et du canvas
    let ratioImg = terrainImage.width / terrainImage.height;
    let ratioCanvas = width / height;

    // Déterminez si l'image doit être ajustée en largeur ou en hauteur pour remplir le canvas
    let largeurDessin, hauteurDessin;
    if (ratioImg < ratioCanvas) {
        // L'image est plus étroite que le canvas (en comparaison), ajustez en largeur
        largeurDessin = width;
        hauteurDessin = largeurDessin / ratioImg;
    } else {
        // L'image est plus large que le canvas (en comparaison), ajustez en hauteur
        hauteurDessin = height;
        largeurDessin = hauteurDessin * ratioImg;
    }

    // Centrez l'image si nécessaire
    let x = (width - largeurDessin) / 2;
    let y = (height - hauteurDessin) / 2;

    image(terrainImage, 0, 0, width, height);
}

function dessinerPoint(point) {
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

function dessinerListe(points) {
    points.forEach(point => {
        dessinerPoint(point);
    });
}

function dessinerChemin(points) {
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

function extrairePOIs() {
    const regex = /const Vec2 (\w+) = Vec2\((\d+),(\d+)\);/; // Regex pour matcher les points

    rawPOIs.forEach(line => {
        const match = line.match(regex);
        if (match) {
            const nom = match[1];
            const x = parseInt(match[2], 10);
            const y = parseInt(match[3], 10);
            const numero = undefined; // ou un numéro spécifique si disponible
            pois.push({ nom: nom, x: x, y: y, couleur: "red", numero: numero });
        }
    });
}
function mousePressed() {
    if (modeSuppression && mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
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

function viderStrategie() {
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

function manipulerFichier(fichier) {
    if (fichier.type === 'application/json' || true) { // Ignore le type de fichier
        let lecteur = new FileReader();
        lecteur.onload = function (e) {
            try {
                let contenu = e.target.result;
                pointsStrategie = JSON.parse(contenu);
                numeroPointStrategie = pointsStrategie.length ? pointsStrategie[pointsStrategie.length - 1].numero + 1 : 1;
                redraw(); // Force le redessinage pour afficher les points importés
            } catch (erreur) {
                console.error("Erreur lors du parsing du fichier JSON : ", erreur);
                alert("Le fichier choisi ne contient pas de JSON valide.");
            }
        };
        lecteur.readAsText(fichier.file);
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

    telecharger('strategie.cpp', contenuCPP);
}

function telecharger(nomFichier, texte) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(texte));
    element.setAttribute('download', nomFichier);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}
