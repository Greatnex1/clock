setInterval(setClock, 1000);

const hourHand = document.querySelector('[data-hour-hand]')
//const hourHand = document.getElementsByClassName('hour hand')

// console.log(hourHand);
const minuteHand = document.querySelector('[data-minute-hand]')

const secondHand = document.querySelector('[data-second-hand]')
console.log(hourHand);

function setClock  () {
    const currentDate = new Date()
    // console.log(currentDate);
    const secondsRatio = currentDate.getSeconds()/60
    // console.log(secondsRatio);
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) /60
    const hourRatio = (minutesRatio + currentDate.getHours()) / 12
setRotation(secondHand,secondsRatio)
setRotation(minuteHand,minutesRatio)
setRotation(hourHand,hourRatio)

} 
setRotation = (element, rotationRatio) => {
    element.style.setProperty("--rotation", rotationRatio * 360)
}
 setClock()