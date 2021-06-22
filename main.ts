basic.clearScreen()
for (let index = 0; index < 2; index++) {
    basic.showString("F")
    basic.pause(300)
    basic.clearScreen()
    basic.pause(500)
}
basic.forever(function () {
    basic.clearScreen()
    if (input.buttonIsPressed(Button.A)) {
        for (let index = 0; index < 4; index++) {
            basic.showLeds(`
                . . # . .
                . . # . .
                # # # # #
                . . # . .
                . . # . .
                `)
            basic.clearScreen()
            music.ringTone(262)
            basic.pause(300)
            music.stopAllSounds()
            basic.clearScreen()
        }
    } else {
        if (input.buttonIsPressed(Button.B)) {
            for (let index = 0; index < 2; index++) {
                basic.showLeds(`
                    # # # # #
                    # . . . .
                    # # # # #
                    . . . . #
                    # # # # #
                    `)
                basic.clearScreen()
                music.ringTone(440)
                basic.pause(300)
                music.stopAllSounds()
                basic.clearScreen()
            }
        }
    }
})
