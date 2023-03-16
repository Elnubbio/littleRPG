# littleRPG
NodeJS terminal based RPG
  
Goal:  
Create a terminal based RPG game that takes place on a grid.  
Each tile on the grid is either the start, end or a random encounter.  
Choose N/E/S/W to travel between tiles.  
End tile is randomly placed within a 5x5 area.  
Completing an encounter in the 5x5 area rewards a map item that shows the exit. Can still find the exit without the map  
Simple turn based combat system.  
Game over when the player dies in combat. Prompt user to start again.  
  
Steps taken:  
1. Create and draw the grid. Populate each tile with an ascii character.  
    -Problem: terminal shows array lines and string notation like so: [ '.', '.', '.', '.', '.' ]  
    -Solution: draw each line of the sub-array as a string and output that using process.stdout. https://stackoverflow.com/questions/28620087/print-an-output-in-one-line-using-console-log  
    
