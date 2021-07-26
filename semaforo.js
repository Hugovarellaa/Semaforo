let colorIndex = 0
let intervalID = null
const img = document.getElementById('img');
const buttons = document.getElementById('buttons')
const turnOn = {
    'red': () => { img.src = './_Imagens/vermelho.png' },
    'yellow': () => { img.src = './_Imagens/amarelo.png' },
    'green': () => { img.src = './_Imagens/verde.png' },
    'automatic': () => { intervalID = setInterval(changeColor, 1000) },
}
const trafficLight = (event) => {
    stopAutomatic()
    turnOn[event.target.id]()
}
const nextIndex = () => {
    colorIndex = colorIndex < 2 ? ++colorIndex : 0;

    // trocado pelo operador ternário acima

    // if(colorIndex < 2 ){
    // colorIndex++
    // }else{
    //     colorIndex = 0
    // }
}

const changeColor = () => {
    const colors = ['red', 'yellow', 'green']
    const color = colors[colorIndex]
    turnOn[color]()
    nextIndex()
}
const stopAutomatic = () => {
    clearInterval(intervalID)
}

buttons.addEventListener('click', trafficLight)