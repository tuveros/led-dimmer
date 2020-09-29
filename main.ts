let Ljus = 0
input.onPinPressed(TouchPin.P0, function () {
    if (Ljus == 0) {
        Ljus = 1
    } else {
        Ljus = 0
    }
})
basic.forever(function () {
    if (Ljus == 1) {
        pins.analogWritePin(AnalogPin.P2, pins.analogReadPin(AnalogPin.P1))
    } else {
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
})
