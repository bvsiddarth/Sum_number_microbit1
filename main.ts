input.onButtonPressed(Button.A, function () {
    firstNumber += 1
    basic.showNumber(firstNumber)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(0)
})
input.onButtonPressed(Button.B, function () {
    secondNumber += 1
    basic.showNumber(secondNumber)
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(firstNumber + secondNumber)
})
let secondNumber = 0
let firstNumber = 0
firstNumber = 0
secondNumber = 0
