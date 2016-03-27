# Crimson Code (WSU Hackathon 4)
- - - -
## Overview: ##
Control HearthStone with a Myo. Using just your arm, you can enjoy the epic online TCG. BUT, there's a twist!
Whenever your hero is damaged the Myo vibrates accordingly. Note: there are a few times where it'll vibrate
without being attacked, but I think it has to do with it going automatically into lock. My controller prevents 
the Myo going into lock mode when in HearthStone. And whenever HearthStone re-gains focus you need to doubletap
your fingers to unlock it again.

## How-to: ##
### Controls ###
### Left-click: 	fist ###
### Right-click: 	waveIn ###
### escape: 		waveOut ###
### Center mouse:	fingersSpread ###

## Dependencies: ##
### NodeJS ###
### myoJS ### (npm install -g myo)
### Myo Connect ###

## Setup ##
First, you need to set HearthStone to debug mode by copying the log.config file to C:\Users\[USERNAME]\AppData\Local\Blizzard\HearthStone.
Next, connect and calibrate your Myo and then double-click on HearthStoneController.myo to install to Myo Connect.
Next, open a command prompt in this directory and run the command 'node app.js'
Then, open HearthStone and enjoy!!