---
layout: default
parent: PAMI
nav_order: 1
title: Electronique
---
## Contexte:

La carte du PAMI doit permettre a un chassi sur roue de se deplacer vers son objectif(plantes) sur un terrain de 2m*3m Pendant 10 secondes,
en respectant les mesures de sécuritées.

## Cahier des charges:
	
   - Controle de trajectoire:
       
        Atteindre les plantes rapidement et éfficacement
	
   - Arret d'urgence:
       
        Avoir un bouton d'arret d'urgence a disposition
	
   - Detection d'obstacle
        
        Etre capable de s'arreter automatiquement a l'approche d'un obstacle

## Contraintes:
	-Dimensions: 80mm X 80mm
	-Quantitée de couches de circuits électriques possibles: 2 couches
	-Points de fixations: 4 trous de 3mm de diametres

## Conception:
	
    Choix des composants
		
       - Esp32-S3-VROOM: Microcontroleur standardisé suffisament récent

       - Port USB_OTG
		
       - TMC2209 SILENTSTEPSTICK: Drivers de moteur stepper a disposition du club
		
       - Traco TSR_2-2433: Régulateur abaisseur de tension 5V/3.3V a disposition du club
		
       - Intérrupteurs:

        -Intéruption d'urgence de l'alimentation
        -Activation du microcontroleur
        -Changement de stratégie	
       
       - Buzzer_Beeper: Feedback sonore des actions du PAMI
		
       - Screen: FeedBack visuel de l'état du PAMI	
		
       - LEDs de vérification: Feedback électrique de l'etat des circuits

	Choix de l'alimentation 5V/3.3V:
    
    5V: Utilisé pour les moteurs steppers/ servomoteurs
    3.3V: Utilisé pour le transfert de données au seins de la carte

	Determinasion du design: 
   
    Antenne: Besoin que l'antenne ne soit pas obstruée
    Cable management: Besoin de passages pour organiser les cables

    ## Spécificitées de la version 1 :

    Etant ma toute premiere réalisation de PCB, j'ai opté pour un design visullement intuitif comprenant uniquement les composants les plus cruciaux en essayant de rester sur une carte un minimum compactée en guise de carte test.
    Ainsi dans le schematique vous trouverer l'élaborations des composants phares tels que :
   
    - L'Esp32-S3-VROOM
    - Le port USB_OTG
    - Les controlleurs moteurs TMC2209 SILENTSTEPSTICK
    - Le régulateur de tension Traco TSR_2-2433
    - Le boot d'activation du microcontrolleur
    - L'intérupteur d'arret d'urgence
    - Les LEDs de vérification de l'etat des circuits
    ![](https://github.com/Unimakers/Docs-Unimakers-CDR-2024/blob/main/docs/images/ShematicPAMI_V1.png?raw=true)
