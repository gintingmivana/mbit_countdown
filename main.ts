let pencacah = 10
music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Dadadadum), music.PlaybackMode.LoopingInBackground)
basic.forever(function () {
    if (pencacah >= 1) {
        basic.showNumber(pencacah)
        pencacah += -1
        basic.pause(300)
    } else {
        pencacah = 10
    }
})
