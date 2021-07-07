function askQuestion(question) {
  const answer = prompt(question)
  return answer
}
function getRadius(ask) {
  let radius = Number(ask('Введите радиус круга'))
  if (Number.isNaN(radius)) {
    alert('Нужно ввети число!')
    return getRadius(askQuestion)
  } else return radius
}

let radius = getRadius(askQuestion)
let question = askQuestion(
  'Выберете число с предложеного списка, для вычисления параметров: диаметр - нажмите 1; площадь - нажмите 2; длинну окружности - нажмите 3;',
)

let diameter = (radius) => {
  const result = radius * 2
  return alert('Диаметр окружности с радиусом ' + radius + ' равен ' + result)
}
let area = (radius) => {
  const result = Math.PI * Math.pow(radius, 2)
  return alert('Площадь круга с радиусом ' + radius + ' равна ' + result)
}
let circumference = (radius) => {
  const result = 2 * Math.PI * radius
  return alert('Длинна окружности с радиусом ' + radius + ' равна ' + result)
}

if (question == 1) {
  diameter(radius)
} else if (question == 2) {
  area(radius)
} else if (question == 3) {
  circumference(radius)
} else {
  alert('Нет такой команды!')
}
