input.onButtonPressed(Button.A, function () {
    if (currentscreen == 1) {
        // Change the number to how many options  you can scroll through.
        if (scrolldata == 0) {
            scrolldata = 1
        } else {
            scrolldata += -1
        }
    }
    if (currentscreen == 2) {
        // Change the number to how many options  you can scroll through.
        if (mousey == 4) {
            mousey = 0
            sprite.set(LedSpriteProperty.Y, 0)
        } else {
            mousey += 1
            sprite.change(LedSpriteProperty.Y, 1)
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    if (currentscreen == 1) {
        // Change the number to how many options  you can scroll through.
        if (scrolldata == 1) {
            currentscreen = 2
        }
    }
    if (currentscreen == 2) {
        basic.pause(500)
    }
})
input.onButtonPressed(Button.B, function () {
    if (currentscreen == 1) {
        // Change the number to how many options  you can scroll through.
        if (scrolldata == 3) {
            scrolldata = 1
        } else {
            scrolldata += 1
        }
    }
    if (currentscreen == 2) {
        // Change the number to how many options  you can scroll through.
        if (mousex == 4) {
            mousex = 0
            sprite.set(LedSpriteProperty.X, 0)
        } else {
            mousex += 1
            sprite.change(LedSpriteProperty.X, 1)
        }
    }
})
let mousex = 0
let sprite: game.LedSprite = null
let mousey = 0
let scrolldata = 0
let currentscreen = 0
currentscreen = 1
scrolldata = 1
let spriteforeverscreenstop = 1
basic.forever(function () {
    if (currentscreen == 1) {
        // Change the number to how many options  you can scroll through.
        if (scrolldata == 1) {
            basic.showIcon(IconNames.EighthNote)
        }
        // Change the number to how many options  you can scroll through.
        if (scrolldata == 2) {
            basic.showLeds(`
                . # . . .
                . # # . .
                . # # # .
                . # # . .
                . # . . .
                `)
        }
    }
    if (currentscreen == 2 && spriteforeverscreenstop == 1) {
        sprite = game.createSprite(3, 2)
        spriteforeverscreenstop = 0
    }
    if (currentscreen == 2) {
        sprite.set(LedSpriteProperty.Blink, 400)
    }
})
