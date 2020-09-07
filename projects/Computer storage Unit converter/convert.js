  // select elements

const convertBtn = document.getElementById('btn').addEventListener('click', convertUnits);
const clrBtn = document.getElementById('clr').addEventListener('click', clearUnits);
const input = document.querySelector('input[type="number"]');
const unit1 = document.querySelector('.menu1');
const unit2 = document.querySelector('.menu2');
const unitsLi = document.querySelectorAll('#unit-title');
const li = document.getElementsByTagName('li');


function clearUnits(e) {
  input.value = '';
  for (let i = 0; i < unitsLi.length; i++) {
    unitsLi[i].parentElement.style.display = 'none'
  }
  
}
// convertUnits function

function convertUnits(e) {
  let unit = input.value;
  let value1 = unit1.value;
  let value2 = unit2.value;
  if ( value1 === 'Bit' && value2 === 'Terabytes' ) {
    for (let i = 0; i < unitsLi.length; i++) {
      if (unitsLi[i].textContent === value2) {
        unitsLi[i].parentElement.style.display = 'block';
        unitsLi[i].nextElementSibling.innerHTML = (((unit / 1000) / 1000) / 1000) / 1000;
      }
    }
  } else if ( value1 === 'Kilobytes' && value2 === 'Bit' ) {
    for (let i = 0; i < unitsLi.length; i++) {
      if (unitsLi[i].textContent === value2) {
        unitsLi[i].parentElement.style.display = 'block';
        unitsLi[i].nextElementSibling.innerHTML = unit * 1000;
      }
    }
  } else if ( value1 === 'Bit' && value2 === 'Megabytes' ) {
    for (let i = 0; i < unitsLi.length; i++) {
      if (unitsLi[i].textContent === value2) {
        unitsLi[i].parentElement.style.display = 'block';
        unitsLi[i].nextElementSibling.innerHTML = (unit / 1000) / 1000;
      }
    }
  } else if ( value1 === 'Megabytes' && value2 === 'Bit' ) {
    for (let i = 0; i < unitsLi.length; i++) {
      if (unitsLi[i].textContent === value2) {
        unitsLi[i].parentElement.style.display = 'block';
        unitsLi[i].nextElementSibling.innerHTML = (unit * 1000) * 1000;
      }
    }
  } else if ( value1 === 'Megabytes' && value2 === 'Kilobytes' ) {
    for (let i = 0; i < unitsLi.length; i++) {
      if (unitsLi[i].textContent === value2) {
        unitsLi[i].parentElement.style.display = 'block';
        unitsLi[i].nextElementSibling.innerHTML = (unit * 1000);
      }
    }
  } else if ( value1 === 'Megabytes' && value2 === 'Gigabytes' ) {
    for (let i = 0; i < unitsLi.length; i++) {
      if (unitsLi[i].textContent === value2) {
        unitsLi[i].parentElement.style.display = 'block';
        unitsLi[i].nextElementSibling.innerHTML = (unit / 1000);
      }
    }
  } else if ( value1 === 'Gigabytes' && value2 === 'Megabytes' ) {
    for (let i = 0; i < unitsLi.length; i++) {
      if (unitsLi[i].textContent === value2) {
        unitsLi[i].parentElement.style.display = 'block';
        unitsLi[i].nextElementSibling.innerHTML = (unit * 1000);
      }
    }
  } else if ( value1 === 'Gigabytes' && value2 === 'Kilobytes' ) {
    for (let i = 0; i < unitsLi.length; i++) {
      if (unitsLi[i].textContent === value2) {
        unitsLi[i].parentElement.style.display = 'block';
        unitsLi[i].nextElementSibling.innerHTML = (unit * 1000) * 1000;
      }
    }
  } else if ( value1 === 'Gigabytes' && value2 === 'Bit' ) {
    for (let i = 0; i < unitsLi.length; i++) {
      if (unitsLi[i].textContent === value2) {
        unitsLi[i].parentElement.style.display = 'block';
        unitsLi[i].nextElementSibling.innerHTML = ((unit * 1000) * 1000) * 1000;
      }
    }
  } else if ( value1 === 'Gigabytes' && value2 === 'Terabytes' ) {
    for (let i = 0; i < unitsLi.length; i++) {
      if (unitsLi[i].textContent === value2) {
        unitsLi[i].parentElement.style.display = 'block';
        unitsLi[i].nextElementSibling.innerHTML = (unit / 1000);
      }
    }
  } else if ( value1 === 'Terabytes' && value2 === 'Bits' ) {
    for (let i = 0; i < unitsLi.length; i++) {
      if (unitsLi[i].textContent === value2) {
        unitsLi[i].parentElement.style.display = 'block';
        unitsLi[i].nextElementSibling.innerHTML = ( ((unit * 1000) * 1000) * 1000) * 1000;
      }
    }
  } else if ( value1 === 'Terabytes' && value2 === 'Kilobytes' ) {
    for (let i = 0; i < unitsLi.length; i++) {
      if (unitsLi[i].textContent === value2) {
        unitsLi[i].parentElement.style.display = 'block';
        unitsLi[i].nextElementSibling.innerHTML = ( ((unit * 1000) * 1000) * 1000);
      }
    }
  } else if ( value1 === 'Terabytes' && value2 === 'Megabytes' ) {
    for (let i = 0; i < unitsLi.length; i++) {
      if (unitsLi[i].textContent === value2) {
        unitsLi[i].parentElement.style.display = 'block';
        unitsLi[i].nextElementSibling.innerHTML = ( (unit * 1000) * 1000);
      }
    }
  } else if ( value1 === 'Terabytes' && value2 === 'Gigabytes' ) {
    for (let i = 0; i < unitsLi.length; i++) {
      if (unitsLi[i].textContent === value2) {
        unitsLi[i].parentElement.style.display = 'block';
        unitsLi[i].nextElementSibling.innerHTML = (unit * 1000);
      }
    }
  } else if ( value1 === 'Megabytes' && value2 === 'Terabytes' ) {
    for (let i = 0; i < unitsLi.length; i++) {
      if (unitsLi[i].textContent === value2) {
        unitsLi[i].parentElement.style.display = 'block';
        unitsLi[i].nextElementSibling.innerHTML = (unit / 1000) / 1000;
      }
    }
  } else if ( value1 === 'Gigabytes' && value2 === 'Bit' ) {
    for (let i = 0; i < unitsLi.length; i++) {
      if (unitsLi[i].textContent === value2) {
        unitsLi[i].parentElement.style.display = 'block';
        unitsLi[i].nextElementSibling.innerHTML = (unit / 1000) / 1000;
      }
    }
  } else if (value1 === 'Bit' && value2 === 'Gigabytes') {
    for (let i = 0; i < unitsLi.length; i++) {
      if (unitsLi[i].textContent === value2) {
        unitsLi[i].parentElement.style.display = 'block';
        unitsLi[i].nextElementSibling.innerHTML = ((unit / 1000) / 1000) / 1000;
      }
    }
  } else if (value1 === 'Bit' && value2 === 'Kilobytes') {
    for (let i = 0; i < unitsLi.length; i++) {
      if (unitsLi[i].textContent === value2) {
        unitsLi[i].parentElement.style.display = 'block';
        unitsLi[i].nextElementSibling.innerHTML = (unit / 1000);
      }
    }
  }
  setTimeout(convertUnits, 1000);
}
