basic.forever(function () {
    led.plotBarGraph(
    input.acceleration(Dimension.X),
    1000
    )
})
basic.forever(function () {
    led.plotBarGraph(
    input.lightLevel(),
    0
    )
})
