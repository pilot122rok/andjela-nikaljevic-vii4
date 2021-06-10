function Domaci (Novcic: number) {
    for (let index = 0; index < Koliko_puta_bacati; index++) {
        _0_ili_1 = randint(0, 1)
        if (_0_ili_1 == 0) {
            pismo = pismo + 1
        } else {
            glava = glava + 1
        }
    }
    basic.showString("Glava je dobijena")
    basic.showNumber(glava)
    basic.showString("puta.")
    basic.showString("Pismo je dobijeno")
    basic.showNumber(pismo)
    basic.showString("puta.")
}
input.onButtonPressed(Button.A, function () {
    minus_i_plus = 0
    IzbrojBroja(1)
    basic.showNumber(glava)
})
function IzbrojBroja (BrojIzbor: number) {
    if (minus_i_plus == 0) {
        Koliko_puta_bacati = Koliko_puta_bacati + 1
        Broj = Koliko_puta_bacati
    } else {
        Koliko_puta_bacati = Koliko_puta_bacati - 1
        Broj = Koliko_puta_bacati
    }
}
input.onButtonPressed(Button.B, function () {
    minus_i_plus = 1
    IzbrojBroja(1)
    basic.showNumber(Broj)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    Koji_broj = 0
    Broj = Koliko_puta_bacati
    basic.showNumber(Broj)
})
input.onGesture(Gesture.Shake, function () {
    Domaci(1)
})
let Koji_broj = 0
let Broj = 0
let minus_i_plus = 0
let glava = 0
let pismo = 0
let _0_ili_1 = 0
let Koliko_puta_bacati = 0
basic.showString("Koliko puta ocete da bacite novcic?")
