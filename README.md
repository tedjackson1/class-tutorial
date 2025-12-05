Resident Raver

Resident Raver is a 2D action-platformer built using the ImpactJS engine.
The game launches from a simple HTML canvas setup and loads core gameplay elements such as the player, zombies, and the first level (dorm1).
A minimal version of the Weltmeister Level Editor is also included for future level-building and design.

🚀 Features

Built using ImpactJS, a lightweight JavaScript game engine

Canvas-based rendering (configured in index.html) 

index

Custom game loop defined in main.js, including player controls and level loading 

main

Placeholder implementation of the Weltmeister editor for level design

Basic UI styling for both the game canvas and the editor 

weltmeister

📁 Project Structure
.
├── index.html            # Main launcher for the game
├── lib/
│   └── game/
│       └── main.js       # ImpactJS game module + game loop
├── weltmeister/
│   ├── weltmeister.html  # Level editor loader
│   ├── weltmeister.js    # Placeholder editor script
│   └── weltmeister.css   # Styling for the editor
└── media/                # Fonts, images, sprites (not included here)

🎮 How to Run the Game

Install or include ImpactJS (place the impact folder at the project root).

Ensure your project maintains this directory structure:

project/
│ impact/
│ lib/
│ weltmeister/
│ media/
│ index.html


Open index.html in a web browser.
This loads:

impact/impact.js

lib/game/main.js

The game canvas that runs at 320×240 scaled by 2 

main

🎮 Gameplay Overview

The main game file:

Binds movement keys (LEFT, RIGHT, X for jump)

Loads LevelDorm1

Uses a custom bitmap font for UI rendering (04b03 style)

Runs an ImpactJS Game class extending ig.Game

Everything is initialized via:

ig.main("#canvas", MyGame, 60, 320, 240, 2);


— setting the framerate, resolution, and scale.

🛠️ Level Editing (Weltmeister)

The repository includes a minimal placeholder version of the Weltmeister editor.

Open:

weltmeister/weltmeister.html


This loads:

weltmeister.js placeholder (replace with full version for full functionality) 

weltmeister

Proper CSS styling for the editor window and canvas 

weltmeister

📌 Next Steps

Add real sprites, sounds, and assets to /media

Implement the full Weltmeister editor files

Expand levels and enemies

Add combat, animations, physics, and UI elements

Package the game for web deployment or desktop builds
