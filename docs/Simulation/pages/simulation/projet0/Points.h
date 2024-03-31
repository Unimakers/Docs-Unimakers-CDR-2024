#pragma once
#include "geometry.h" //a changer avec le future fichier de géométrie 

namespace POINTS{
    // Zone de départ
    const Vec2 b1 = Vec2(225,225);  //Bleu
    const Vec2 b2 = Vec2(1775,225); //Bleu
    const Vec2 b3 = Vec2(1000,2775); //Bleu

    const Vec2 y1 = Vec2(225,2775); //Jaune
    const Vec2 y2 = Vec2(1775,2775);  //Jaune
    const Vec2 y3 = Vec2(1000,225);  //Jaune

    // Approvisionnement des plantes
    const Vec2 plantSupplySE = Vec2(1300,1000);     //Plante sud Est
    const Vec2 plantSupplySW = Vec2(700,1005);      //Plante sud west


    const Vec2 plantSupplyNE = Vec2(1300,2000);     //Plante NORT EAST
    const Vec2 plantSupplyNW = Vec2(700,1005);      //Plante NORT WEST

    const Vec2 plantSupplyW  = Vec2(500,1500);      //Plante WEST
    const Vec2 plantSupplyE  = Vec2(1500,1500);     //Plante EST

    // Panneau solaires
    const Vec2 solarPanelBlue_1 = Vec2(1800,275);      //Panneau solaire Bleu 1
    const Vec2 solarPanelBlue_2 = Vec2(1800,500);      //Panneau solaire Bleu 2
    const Vec2 solarPanelBlue_3 = Vec2(1800,725);      //Panneau solaire Bleu 3

    const Vec2 solarPanelOther_1 = Vec2(1800,1275);   //Panneau solaire No Team 1
    const Vec2 solarPanelOther_2 = Vec2(1800,1500);   //Panneau solaire No Team 2
    const Vec2 solarPanelOther_3 = Vec2(1800,1725);   //Panneau solaire No Team 3

    const Vec2 solarPanelJaune_1 = Vec2(1800,2725);    //Panneau solaire Jaune 1
    const Vec2 solarPanelJaune_2 = Vec2(1800,2500);    //Panneau solaire Jaune 2
    const Vec2 solarPanelJaune_3 = Vec2(1800,2275);    //Panneau solaire Jaune 3

    // Planteurs
    const Vec2 planterBlueSouth = Vec2(612,0);          //Planteur Bleu Sud
    const Vec2 planterBlueNorth = Vec2(1388,3000);      //Planteur Bleu Nort
    const Vec2 planterBlueWest  = Vec2(0,762);          //Planteur Bleu West

    const Vec2 planterJauneSouth = Vec2(1388,0);       //Planteur Jaune Sud
    const Vec2 planterJauneNorth = Vec2(612,3000);     //Planteur Jaune Nort
    const Vec2 planterJauneWest  = Vec2(0,2238);    //Planteur Jaune West

}