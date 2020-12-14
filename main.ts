enum RadioMessage {
    message1 = 49434
}
input.onGesture(Gesture.Shake, function () {
    radio.sendMessage(RadioMessage.message1)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
})
radio.onReceivedMessage(RadioMessage.message1, function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . . # . .
        . . # . .
        `)
})
radio.setGroup(255)
