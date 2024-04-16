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
        if (sprite.get(LedSpriteProperty.X) == 1) {
            if (c1taken == 1) {
                spritec1.set(LedSpriteProperty.X, sprite.get(LedSpriteProperty.X))
                spritec1.set(LedSpriteProperty.Y, sprite.get(LedSpriteProperty.Y))
            } else {
                spritec1 = game.createSprite(sprite.get(LedSpriteProperty.X), sprite.get(LedSpriteProperty.Y))
                c1taken = 1
            }
        }
        if (sprite.get(LedSpriteProperty.X) == 2) {
            if (c2taken == 1) {
                spritec2.set(LedSpriteProperty.X, sprite.get(LedSpriteProperty.X))
                spritec2.set(LedSpriteProperty.Y, sprite.get(LedSpriteProperty.Y))
            } else {
                spritec2 = game.createSprite(sprite.get(LedSpriteProperty.X), sprite.get(LedSpriteProperty.Y))
                c2taken = 1
            }
        }
        if (sprite.get(LedSpriteProperty.X) == 3) {
            if (c3taken == 1) {
                spritec3.set(LedSpriteProperty.X, sprite.get(LedSpriteProperty.X))
                spritec3.set(LedSpriteProperty.Y, sprite.get(LedSpriteProperty.Y))
            } else {
                spritec3 = game.createSprite(sprite.get(LedSpriteProperty.X), sprite.get(LedSpriteProperty.Y))
                c3taken = 1
            }
        }
        if (sprite.get(LedSpriteProperty.X) == 4) {
            if (c4taken == 1) {
                spritec4.set(LedSpriteProperty.X, sprite.get(LedSpriteProperty.X))
                spritec4.set(LedSpriteProperty.Y, sprite.get(LedSpriteProperty.Y))
            } else {
                spritec4 = game.createSprite(sprite.get(LedSpriteProperty.X), sprite.get(LedSpriteProperty.Y))
                c4taken = 1
            }
        }
        if (sprite.get(LedSpriteProperty.X) == 5) {
            if (c5taken == 1) {
                spritec5.set(LedSpriteProperty.X, sprite.get(LedSpriteProperty.X))
                spritec5.set(LedSpriteProperty.Y, sprite.get(LedSpriteProperty.Y))
            } else {
                spritec5 = game.createSprite(sprite.get(LedSpriteProperty.X), sprite.get(LedSpriteProperty.Y))
                c5taken = 1
            }
        }
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
let spritec5: game.LedSprite = null
let c5taken = 0
let spritec4: game.LedSprite = null
let c4taken = 0
let spritec3: game.LedSprite = null
let c3taken = 0
let spritec2: game.LedSprite = null
let c2taken = 0
let spritec1: game.LedSprite = null
let c1taken = 0
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
