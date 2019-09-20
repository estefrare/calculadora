
let firstValue
let secondValue
let selectedOperator

const onClickFunction = function (event) {
  display.innerText += event.target.textContent
}

const cleanFunction = function () {
  display.innerText = ''
}

const operatorFunction = function () {
  firstValue = parseFloat(display.innerText)
  display.innerText = ''
  selectedOperator = event.target.textContent
}

const resultFunction = function (event) {

  const options = {
    baseURL: 'http://localhost:3000/',
    timeout: 25000,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }

  secondValue = parseFloat(display.innerText)

  fetch(`http://localhost:3000/api/result/${firstValue}/${secondValue}/${selectedOperator}`, options)
    .then(res => res.json())
    .then(data => {
      display.innerText = data.result
    })
}

const pointFunction = function () {
  display.innerText += '.'
}

window.onload = function () {

  const display = document.getElementById("display")
  const btnMc = document.getElementById("btnMc")
  const btnMadd = document.getElementById("btnMadd")
  const btnMsub = document.getElementById("btnMsub")
  const btnDiv = document.getElementById("btnDiv")
  const btnSeven = document.getElementById("btnSeven")
  const btnEight = document.getElementById("btnEight")
  const btnNine = document.getElementById("btnNine")
  const btnMult = document.getElementById("btnMult")
  const btnFour = document.getElementById("btnFour")
  const btnFive = document.getElementById("btnFive")
  const btnSix = document.getElementById("btnSix")
  const btnSub = document.getElementById("btnSub")
  const btnOne = document.getElementById("btnOne")
  const btnTwo = document.getElementById("btnTwo")
  const btnThree = document.getElementById("btnThree")
  const btnAdd = document.getElementById("btnAdd")
  const btnC = document.getElementById("btnC")
  const btnCero = document.getElementById("btnCero")
  const btnPoint = document.getElementById("btnPoint")
  const btnEqual = document.getElementById("btnEqual")

  btnSeven.onclick = onClickFunction
  btnEight.onclick = onClickFunction
  btnNine.onclick = onClickFunction
  btnFour.onclick = onClickFunction
  btnFive.onclick = onClickFunction
  btnSix.onclick = onClickFunction
  btnOne.onclick = onClickFunction
  btnTwo.onclick = onClickFunction
  btnThree.onclick = onClickFunction
  btnCero.onclick = onClickFunction

  btnPoint.onclick = pointFunction

  btnC.onclick = cleanFunction

  btnDiv.onclick = operatorFunction
  btnMult.onclick = operatorFunction
  btnSub.onclick = operatorFunction
  btnAdd.onclick = operatorFunction

  btnEqual.onclick = resultFunction

}