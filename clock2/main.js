const secondHand = document.querySelector(".second");
const minuteHand = document.querySelector(".minute");
const hourHand = document.querySelector(".hour");

const setHandsRotatio = (element, ratio) => {
    element.style.setProperty("--rotation", `${ratio*360}deg`)
} 

const setClock = () => {
    const currentDate = new Date();
    const second = currentDate.getSeconds();
    const minute = currentDate.getMinutes();
    const hour = currentDate.getHours();

    const secondRatio = second / 60;
    const minuteRatio = (secondRatio + minute) / 60;
    const hourRatio = (minuteRatio + hour) / 60;
    
    setHandsRotatio(secondHand, secondRatio);
    setHandsRotatio(minuteHand, minuteRatio);
    setHandsRotatio(secondHand, secondRatio);
}

setInterval(setClock, 1000);

setClock()