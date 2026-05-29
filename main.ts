function checkWin () {
    // Loop through the sprite list to see if the y coordinate values match
    for (let index = 0; index <= 3; index++) {
        if (list[index].get(LedSpriteProperty.Y) == list[index + 1].get(LedSpriteProperty.Y)) {
        	
        } else {
            return false
        }
    }
    return true
}
input.onButtonPressed(Button.A, function () {
	
})
let list: game.LedSprite[] = []
// A list of sprites - one per column
// Each sprite has an (x, y) coordinate
list = [
game.createSprite(0, 2),
game.createSprite(1, 2),
game.createSprite(2, 2),
game.createSprite(3, 2),
game.createSprite(4, 2)
]
// Variable to keep track of which column we're stopping at
let stopIndex = 0
/**
 * Press the A button to make the light stop for each column on the micro:bit.
 * 
 * Line up 5 lights in a row to win!
 */
basic.forever(function () {
    // This loop animates each of the sprites by incrementing their y coordinate
    for (let index = 0; index <= 4; index++) {
        // We only animate the columns that are greater than the column we've already stopped at
        if (index >= stopIndex) {
            // The remainder or mod function is useful for looping through a set number of values (in this case 0-4)
            list[index].set(LedSpriteProperty.Y, (list[index].get(LedSpriteProperty.Y) + 1) % 5)
        }
        // Change the pause to make the game easier or harder!
        basic.pause(10)
    }
    // Once we've stopped at all columns, check to see if we've lined up all of our sprites
    if (stopIndex >= 4) {
        if (checkWin()) {
            music._playDefaultBackground(music.builtInPlayableMelody(Melodies.PowerUp), music.PlaybackMode.InBackground)
            game.gameOver()
        }
    }
})
