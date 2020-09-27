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
        pins.analogWritePin(AnalogPin.P0, pins.analogReadPin(AnalogPin.P0))
    } else {
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
})
