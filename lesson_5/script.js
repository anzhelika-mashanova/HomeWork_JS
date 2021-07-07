function getRadius() {
  let radius = +prompt('Введите радиус окружности.')
  return radius
}
let radius = getRadius();
do {
  if (Number.isNaN(radius)) {
    alert('Нужно ввети число!');
    radius = getRadius();
  }
} while (Number.isNaN(radius))

function getOperation() {
  let operation = prompt(
    'Введите номер команды чтобы посчитать: 1 - диаметр, 2 - площадь круга, 3 - длинну окружности.',
  )
  return operation
}
let operation = getOperation()
while (operation !== '1' || operation !== '2' || operation !== '3') {
  if (operation == '1' || operation == '2' || operation == '3') {
    runOperation(operation, radius)
    break
  } else {
    alert('Нужно ввети правильную операцию!')
    operation = getOperation()
  }
}

function runOperation(operation, radius) {
  switch (operation) {
    case '1':
      alert(
        `Диаметр окружности с радиусом ${radius} равен ${calcDiameter(radius)}`,
      )
      break
    case '2':
      alert(
        `Площадь круга с радиусом ${radius} равна ${calcCircumference(radius)}`,
      )
      break
    case '3':
      alert(
        `Длинна окружности с радиусом ${radius} равна ${calcAreaCirc(radius)}`,
      )
      break
    default:
      alert('Нет такой команды')
  }
}

function calcDiameter(radius) {
  return 2 * radius
}

function calcCircumference(radius) {
  return 2 * Math.PI * radius
}

function calcAreaCirc(radius) {
  return Math.PI * radius ** 2
}
