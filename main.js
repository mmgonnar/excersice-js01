import { adultAgeStandard } from "./constants/constants"
import { validateAge } from "./lib/validateAge"

// DOM - VISTAS
// 1. SELECCIONAR
const ageInput = document.querySelector("#calculate-age-input")
console.log(ageInput)
const calculateAgeBtn = document.querySelector("#calculate-age-button")
console.log(calculateAgeBtn)
const resultArea = document.querySelector("#result-area")
console.log(resultArea)

// 2. MANIPULAR
// A. EVENTOS

// - EL USUARIO VA A ESCRIBIR LA EDAD EN EL INPUT
// - EL USUARIO DARÁ CLICK SOBRE EL BOTÓN
// - EL PROGRAMA OBTENDRÁ EL VALOR DEL USUARIO ESCRITO
// - EL PROGRAMA EVALUARÁ LA VALIDACIÓN DE EDAD
// - EL USUARIO VISUALIZARÁ EL RESULTADO EN EL ÁREA INFERIOR

calculateAgeBtn.addEventListener("click", function (event) {
  event.preventDefault()

  const ageInputValue = parseInt(ageInput.value)
  console.log(ageInputValue)
  console.log(typeof ageInputValue)

  const isAdult = validateAge(ageInputValue, adultAgeStandard)
  return (resultArea.innerHTML = `
    <b>${isAdult}</b>
  `)
})
