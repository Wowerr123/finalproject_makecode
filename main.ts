function soundofnoteselected(sprite: game.LedSprite) {
    if (sprite.get(LedSpriteProperty.Y) == 0) {
        music.play(music.tonePlayable(440, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        storednotes[sprite.get(LedSpriteProperty.X)] = music.tonePlayable(440, music.beat(BeatFraction.Whole))
    } else if (sprite.get(LedSpriteProperty.Y) == 1) {
        music.play(music.tonePlayable(349, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        storednotes[sprite.get(LedSpriteProperty.X)] = music.tonePlayable(349, music.beat(BeatFraction.Whole))
    } else if (sprite.get(LedSpriteProperty.Y) == 2) {
        music.play(music.tonePlayable(294, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        storednotes[sprite.get(LedSpriteProperty.X)] = music.tonePlayable(294, music.beat(BeatFraction.Whole))
    } else if (sprite.get(LedSpriteProperty.Y) == 3) {
        music.play(music.tonePlayable(247, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        storednotes[sprite.get(LedSpriteProperty.X)] = music.tonePlayable(247, music.beat(BeatFraction.Whole))
    } else if (sprite.get(LedSpriteProperty.Y) == 4) {
        music.play(music.tonePlayable(220, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        storednotes[sprite.get(LedSpriteProperty.X)] = music.tonePlayable(220, music.beat(BeatFraction.Whole))
    }
    
}

input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    if (currentscreen == 1) {
        //  Change the number to how many options  you can scroll through.
        if (scrolldata == 0) {
            scrolldata = 1
        } else {
            scrolldata += -1
        }
        
    }
    
    if (currentscreen == 2) {
        //  Change the number to how many options  you can scroll through.
        if (mousey == 4) {
            mousey = 0
            sprite2.set(LedSpriteProperty.Y, 0)
        } else {
            mousey += 1
            sprite2.change(LedSpriteProperty.Y, 1)
        }
        
    }
    
})
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    
    if (currentscreen == 1) {
        //  Change the number to how many options  you can scroll through.
        if (scrolldata == 1) {
            currentscreen = 2
        }
        
    }
    
    if (currentscreen == 2 && screentwostuffallowed == 1) {
        if (sprite2.get(LedSpriteProperty.X) == 0) {
            soundofnoteselected(sprite2)
            if (c1taken == 1) {
                spritec1.set(LedSpriteProperty.X, sprite2.get(LedSpriteProperty.X))
                spritec1.set(LedSpriteProperty.Y, sprite2.get(LedSpriteProperty.Y))
            } else {
                spritec1 = game.createSprite(sprite2.get(LedSpriteProperty.X), sprite2.get(LedSpriteProperty.Y))
                c1taken = 1
            }
            
        }
        
        if (sprite2.get(LedSpriteProperty.X) == 1) {
            soundofnoteselected(sprite2)
            if (c2taken == 1) {
                spritec2.set(LedSpriteProperty.X, sprite2.get(LedSpriteProperty.X))
                spritec2.set(LedSpriteProperty.Y, sprite2.get(LedSpriteProperty.Y))
            } else {
                spritec2 = game.createSprite(sprite2.get(LedSpriteProperty.X), sprite2.get(LedSpriteProperty.Y))
                c2taken = 1
            }
            
        }
        
        if (sprite2.get(LedSpriteProperty.X) == 2) {
            soundofnoteselected(sprite2)
            if (c3taken == 1) {
                spritec3.set(LedSpriteProperty.X, sprite2.get(LedSpriteProperty.X))
                spritec3.set(LedSpriteProperty.Y, sprite2.get(LedSpriteProperty.Y))
            } else {
                spritec3 = game.createSprite(sprite2.get(LedSpriteProperty.X), sprite2.get(LedSpriteProperty.Y))
                c3taken = 1
            }
            
        }
        
        if (sprite2.get(LedSpriteProperty.X) == 3) {
            soundofnoteselected(sprite2)
            if (c4taken == 1) {
                spritec4.set(LedSpriteProperty.X, sprite2.get(LedSpriteProperty.X))
                spritec4.set(LedSpriteProperty.Y, sprite2.get(LedSpriteProperty.Y))
            } else {
                spritec4 = game.createSprite(sprite2.get(LedSpriteProperty.X), sprite2.get(LedSpriteProperty.Y))
                c4taken = 1
            }
            
        }
        
        if (sprite2.get(LedSpriteProperty.X) == 4) {
            soundofnoteselected(sprite2)
            if (c5taken == 1) {
                spritec5.set(LedSpriteProperty.X, sprite2.get(LedSpriteProperty.X))
                spritec5.set(LedSpriteProperty.Y, sprite2.get(LedSpriteProperty.Y))
            } else {
                spritec5 = game.createSprite(sprite2.get(LedSpriteProperty.X), sprite2.get(LedSpriteProperty.Y))
                c5taken = 1
            }
            
        }
        
    }
    
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    if (currentscreen == 1) {
        //  Change the number to how many options  you can scroll through.
        if (scrolldata == 3) {
            scrolldata = 1
        } else {
            scrolldata += 1
        }
        
    }
    
    if (currentscreen == 2) {
        //  Change the number to how many options  you can scroll through.
        if (mousex == 4) {
            mousex = 0
            sprite2.set(LedSpriteProperty.X, 0)
        } else {
            mousex += 1
            sprite2.change(LedSpriteProperty.X, 1)
        }
        
    }
    
})
input.onGesture(Gesture.Shake, function on_gesture_shake() {
    for (let value of storednotes) {
        music.play(value, music.PlaybackMode.UntilDone)
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function on_logo_pressed() {
    
    currentscreen = 1
    scrolldata = 1
    spriteforeverscreenstop = 1
    c1taken = 0
    c2taken = 0
    c3taken = 0
    c4taken = 0
    c5taken = 0
    screentwostuffallowed = 0
    storedsongs = 0
    _2ndstorenotes = []
    for (let value2 of storednotes) {
        _2ndstorenotes.push("" + ("" + value2))
        console.log(value2)
        console.log(_2ndstorenotes)
    }
})
let pressuresensorvalue = 0
let _2ndstorenotes : string[] = []
let mousex = 0
let spritec5 : game.LedSprite = null
let spritec4 : game.LedSprite = null
let spritec3 : game.LedSprite = null
let spritec2 : game.LedSprite = null
let spritec1 : game.LedSprite = null
let sprite2 : game.LedSprite = null
let mousey = 0
let storedsongs = 0
let storednotes : music.Playable[] = []
let screentwostuffallowed = 0
let c5taken = 0
let c4taken = 0
let c3taken = 0
let c2taken = 0
let c1taken = 0
let spriteforeverscreenstop = 0
let scrolldata = 0
let currentscreen = 0
let formattedstorednotes = ""
currentscreen = 1
scrolldata = 1
spriteforeverscreenstop = 1
c1taken = 0
c2taken = 0
c3taken = 0
c4taken = 0
c5taken = 0
screentwostuffallowed = 0
storednotes = []
storedsongs = 0
basic.forever(function on_forever() {
    
    if (currentscreen == 1) {
        //  Change the number to how many options  you can scroll through.
        if (scrolldata == 1) {
            basic.showIcon(IconNames.EighthNote)
        }
        
        //  Change the number to how many options  you can scroll through.
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
        sprite2 = game.createSprite(0, 0)
        spriteforeverscreenstop = 0
    }
    
    if (currentscreen == 2) {
        sprite2.set(LedSpriteProperty.Blink, 400)
        screentwostuffallowed = 1
    }
    
    pressuresensorvalue = pins.digitalReadPin(DigitalPin.P1)
})
