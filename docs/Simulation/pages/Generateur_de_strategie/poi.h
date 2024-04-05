#pragma once

#include "geometry.h"

namespace POI{

    // ------------------------------------------
    // Departure Areas - Center
    const Vec2 bleu_1 = Vec2(225,225);  //BLUE
    const Vec2 bleu_2 = Vec2(225,1775); //BLUE
    const Vec2 bleu_3 = Vec2(2775,1000); //BLUE

    const Vec2 jaune_1 = Vec2(2775,225); //YELLOW
    const Vec2 jaune_2 = Vec2(2775,1775);  //YELLOW
    const Vec2 jaune_3 = Vec2(225,1000);  //YELLOW
	// ------------------------------------------
    // Plant Supply - Center
    const Vec2 Plantes_SE = Vec2(1000,1300);     //Plant supply SOUTH EAST
    const Vec2 Plantes_SW = Vec2(1005,700);      //Plant supply SOUTH WEST

    const Vec2 Plantes_NE = Vec2(2000,1300);     //Plant supply NORTH EAST
    const Vec2 Plantes_NW = Vec2(2000,700);      //Plant supply NORTH WEST

    const Vec2 Plantes_W  = Vec2(1500,500);      //Plant supply WEST
    const Vec2 Plantes_E  = Vec2(1500,1500);     //Plant supply EAST
    // ------------------------------------------
    // Solar Panels
    const Vec2 Panneau_Solaire_Bleu_1 = Vec2(275,1800);      //Solar panel Blue 1
    const Vec2 Panneau_Solaire_Bleu__2 = Vec2(500,1800);      //Solar panel Blue 2
    const Vec2 Panneau_Solaire_Bleu_3 = Vec2(725,1800);      //Solar panel Blue 3

    const Vec2 Panneau_Solaire_autre_1 = Vec2(1275,1800);   //Solar panel No Team 1
    const Vec2 Panneau_Solaire_autre_1 = Vec2(1500,1800);   //Solar panel No Team 2
    const Vec2 Panneau_Solaire_autre_1 = Vec2(1725,1800);   //Solar panel No Team 3

    const Vec2 Panneau_Solaire_Jaune_1 = Vec2(2725,1800);    //Solar panel Yellow 1
    const Vec2 Panneau_Solaire_Jaune_2 = Vec2(2500,1800);    //Solar panel Yellow 2
    const Vec2 Panneau_Solaire_Jaune_3 = Vec2(2275,1800);    //Solar panel Yellow 3
    // ------------------------------------------
    // Planters
    const Vec2 planterBlueSouth = Vec2(0,612);          //Planter Blue South
    const Vec2 planterBlueNorth = Vec2(3000,1388);      //Planter Blue North
    const Vec2 planterBlueWest  = Vec2(762,0);          //Planter Blue West

    const Vec2 planterYellowSouth = Vec2(0,1388);       //Planter Yellow South
    const Vec2 planterYellowNorth = Vec2(3000,612);     //Planter Yellow North
    const Vec2 planterYellowWest  = Vec2(2238,0);    //Planter Yellow West
}