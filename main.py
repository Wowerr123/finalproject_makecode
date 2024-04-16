def soundofnoteselected(sprite: game.LedSprite):
    if sprite.get(LedSpriteProperty.Y) == 0:
        music.play(music.tone_playable(440, music.beat(BeatFraction.WHOLE)),
            music.PlaybackMode.UNTIL_DONE)
        storednotes[sprite.get(LedSpriteProperty.X)] = music.tone_playable(440, music.beat(BeatFraction.WHOLE))
    elif sprite.get(LedSpriteProperty.Y) == 1:
        music.play(music.tone_playable(349, music.beat(BeatFraction.WHOLE)),
            music.PlaybackMode.UNTIL_DONE)
        storednotes[sprite.get(LedSpriteProperty.X)] = music.tone_playable(349, music.beat(BeatFraction.WHOLE))
    elif sprite.get(LedSpriteProperty.Y) == 2:
        music.play(music.tone_playable(294, music.beat(BeatFraction.WHOLE)),
            music.PlaybackMode.UNTIL_DONE)
        storednotes[sprite.get(LedSpriteProperty.X)] = music.tone_playable(294, music.beat(BeatFraction.WHOLE))
    elif sprite.get(LedSpriteProperty.Y) == 3:
        music.play(music.tone_playable(247, music.beat(BeatFraction.WHOLE)),
            music.PlaybackMode.UNTIL_DONE)
        storednotes[sprite.get(LedSpriteProperty.X)] = music.tone_playable(247, music.beat(BeatFraction.WHOLE))
    elif sprite.get(LedSpriteProperty.Y) == 4:
        music.play(music.tone_playable(220, music.beat(BeatFraction.WHOLE)),
            music.PlaybackMode.UNTIL_DONE)
        storednotes[sprite.get(LedSpriteProperty.X)] = music.tone_playable(220, music.beat(BeatFraction.WHOLE))

def on_button_pressed_a():
    global scrolldata, mousey
    if currentscreen == 1:
        # Change the number to how many options  you can scroll through.
        if scrolldata == 0:
            scrolldata = 1
        else:
            scrolldata += -1
    if currentscreen == 2:
        # Change the number to how many options  you can scroll through.
        if mousey == 4:
            mousey = 0
            sprite2.set(LedSpriteProperty.Y, 0)
        else:
            mousey += 1
            sprite2.change(LedSpriteProperty.Y, 1)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    global currentscreen, spritec1, c1taken, spritec2, c2taken, spritec3, c3taken, spritec4, c4taken, spritec5, c5taken
    if currentscreen == 1:
        # Change the number to how many options  you can scroll through.
        if scrolldata == 1:
            currentscreen = 2
    if currentscreen == 2 and screentwostuffallowed == 1:
        if sprite2.get(LedSpriteProperty.X) == 0:
            soundofnoteselected(sprite2)
            if c1taken == 1:
                spritec1.set(LedSpriteProperty.X, sprite2.get(LedSpriteProperty.X))
                spritec1.set(LedSpriteProperty.Y, sprite2.get(LedSpriteProperty.Y))
            else:
                spritec1 = game.create_sprite(sprite2.get(LedSpriteProperty.X),
                    sprite2.get(LedSpriteProperty.Y))
                c1taken = 1
        if sprite2.get(LedSpriteProperty.X) == 1:
            soundofnoteselected(sprite2)
            if c2taken == 1:
                spritec2.set(LedSpriteProperty.X, sprite2.get(LedSpriteProperty.X))
                spritec2.set(LedSpriteProperty.Y, sprite2.get(LedSpriteProperty.Y))
            else:
                spritec2 = game.create_sprite(sprite2.get(LedSpriteProperty.X),
                    sprite2.get(LedSpriteProperty.Y))
                c2taken = 1
        if sprite2.get(LedSpriteProperty.X) == 2:
            soundofnoteselected(sprite2)
            if c3taken == 1:
                spritec3.set(LedSpriteProperty.X, sprite2.get(LedSpriteProperty.X))
                spritec3.set(LedSpriteProperty.Y, sprite2.get(LedSpriteProperty.Y))
            else:
                spritec3 = game.create_sprite(sprite2.get(LedSpriteProperty.X),
                    sprite2.get(LedSpriteProperty.Y))
                c3taken = 1
        if sprite2.get(LedSpriteProperty.X) == 3:
            soundofnoteselected(sprite2)
            if c4taken == 1:
                spritec4.set(LedSpriteProperty.X, sprite2.get(LedSpriteProperty.X))
                spritec4.set(LedSpriteProperty.Y, sprite2.get(LedSpriteProperty.Y))
            else:
                spritec4 = game.create_sprite(sprite2.get(LedSpriteProperty.X),
                    sprite2.get(LedSpriteProperty.Y))
                c4taken = 1
        if sprite2.get(LedSpriteProperty.X) == 4:
            soundofnoteselected(sprite2)
            if c5taken == 1:
                spritec5.set(LedSpriteProperty.X, sprite2.get(LedSpriteProperty.X))
                spritec5.set(LedSpriteProperty.Y, sprite2.get(LedSpriteProperty.Y))
            else:
                spritec5 = game.create_sprite(sprite2.get(LedSpriteProperty.X),
                    sprite2.get(LedSpriteProperty.Y))
                c5taken = 1
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global scrolldata, mousex
    if currentscreen == 1:
        # Change the number to how many options  you can scroll through.
        if scrolldata == 3:
            scrolldata = 1
        else:
            scrolldata += 1
    if currentscreen == 2:
        # Change the number to how many options  you can scroll through.
        if mousex == 4:
            mousex = 0
            sprite2.set(LedSpriteProperty.X, 0)
        else:
            mousex += 1
            sprite2.change(LedSpriteProperty.X, 1)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_gesture_shake():
    for value in storednotes:
        music.play(value, music.PlaybackMode.UNTIL_DONE)
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

pressuresensorvalue = 0
mousex = 0
spritec5: game.LedSprite = None
spritec4: game.LedSprite = None
spritec3: game.LedSprite = None
spritec2: game.LedSprite = None
spritec1: game.LedSprite = None
sprite2: game.LedSprite = None
mousey = 0
storednotes: List[music.Playable] = []
screentwostuffallowed = 0
c5taken = 0
c4taken = 0
c3taken = 0
c2taken = 0
c1taken = 0
scrolldata = 0
currentscreen = 0
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

def on_forever():
    with open('storedsongs.txt', 'w') as file:
        file.write("test")  # Write an empty string to create the file if it doesn't exist
    basic.pause(1000)  # Pause for 1 second to ensure file creation
    # Add other code here
basic.forever(on_forever)


def on_forever2():
    global sprite2, spriteforeverscreenstop, screentwostuffallowed, pressuresensorvalue
    if currentscreen == 1:
        # Change the number to how many options  you can scroll through.
        if scrolldata == 1:
            basic.show_icon(IconNames.EIGHTH_NOTE)
        # Change the number to how many options  you can scroll through.
        if scrolldata == 2:
            basic.show_leds("""
                . # . . .
                . # # . .
                . # # # .
                . # # . .
                . # . . .
                """)
    if currentscreen == 2 and spriteforeverscreenstop == 1:
        sprite2 = game.create_sprite(0, 0)
        spriteforeverscreenstop = 0
    if currentscreen == 2:
        sprite2.set(LedSpriteProperty.BLINK, 400)
        screentwostuffallowed = 1
    pressuresensorvalue = pins.digital_read_pin(DigitalPin.P1)
basic.forever(on_forever2)
