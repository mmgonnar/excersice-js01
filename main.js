import { adultAgeStandard } from "./constants/constants"
import { validateAge } from "./lib/validateAge"

// 1. VALIDADOR DE EDAD
const result1 = validateAge(13, adultAgeStandard)
console.log(result1)

const result2 = validateAge(25, adultAgeStandard)
console.log(result2)

// DOM - VISTAS
// 1. SELECCIONAR

// 2. MANIPULAR
