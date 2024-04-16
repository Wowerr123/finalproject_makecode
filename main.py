def on_button_pressed_a():
    global scrolldata
    if currentscreen == 1:
        # Change the number to how many options  you can scroll through.
        if scrolldata == 0:
            scrolldata = 1
        else:
            scrolldata += -1
    else:
        pass
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    global currentscreen
    if currentscreen == 1:
        # Change the number to how many options  you can scroll through.
        if scrolldata == 1:
            currentscreen = 2
        else:
            pass
    else:
        pass
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global scrolldata
    if currentscreen == 1:
        # Change the number to how many options  you can scroll through.
        if scrolldata == 3:
            scrolldata = 1
        else:
            scrolldata += 1
    else:
        pass
input.on_button_pressed(Button.B, on_button_pressed_b)

scrolldata = 0
currentscreen = 0
currentscreen = 1
scrolldata = 1

def on_forever():
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
    if currentscreen == 2:
        # Change the number to how many options  you can scroll through.
        if scrolldata == 1:
            basic.show_leds("""
                # . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                """)
        # Change the number to how many options  you can scroll through.
        if scrolldata == 2:
            basic.show_leds("""
                . # . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                """)
        # Change the number to how many options  you can scroll through.
        if scrolldata == 3:
            basic.show_leds("""
                . . # . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                """)
        # Change the number to how many options  you can scroll through.
        if scrolldata == 4:
            basic.show_leds("""
                . . . # .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                """)
        # Change the number to how many options  you can scroll through.
        if scrolldata == 5:
            basic.show_leds("""
                . . . . #
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                """)
basic.forever(on_forever)
