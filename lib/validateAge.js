export function validateAge(currentPersonAgeNumber, adultAgeNumber) {
  if (currentPersonAgeNumber >= adultAgeNumber) {
    return "Es mayor de edad"
  } else {
    return "Es menor de edad"
  }
}
