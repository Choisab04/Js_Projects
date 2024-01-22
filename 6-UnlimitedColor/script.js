
const changeColor = function () {
    const hex = "123456789ABCDEF";
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
}
let intervalId;

const startChangingColor = function () {
    if (!intervalId) {
        intervalId = setInterval(changeBg, 1000);
    }
    function changeBg() {
        document.body.style.backgroundColor = changeColor();
    }
}


const stopChangingColor = function () {

    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
    }

};

document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);

