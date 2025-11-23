function setClock() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsRatio = seconds / 60;

  const minutes = now.getMinutes();
  const minutesRatio = (minutes + secondsRatio) / 60;

  const hours = now.getHours();
  const hoursRatio = (hours + minutesRatio) / 12;

  setRotation('second-hand', secondsRatio * 360);
  setRotation('minute-hand', minutesRatio * 360);
  setRotation('hour-hand', hoursRatio * 360);
}

function setRotation(id, rotationRatio) {
  const element = document.getElementById(id);
  element.style.transform = `translateX(-50%) rotate(${rotationRatio}deg)`;
}

setInterval(setClock, 1000);

// setClock();
