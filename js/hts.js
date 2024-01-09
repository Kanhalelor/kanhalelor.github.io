//  gallery slider effecets

let  next = document.querySelectorAll(".carousel__btn--next");
let  back = document.querySelectorAll(".carousel__btn--back");


let angle = 0;

for (let i = 0; i < next.length; i++) {
  next[i].addEventListener('click', () => {
    console.log("You clicked:", this.innerHTML);
    angle -= 45;
    next[i].parentElement.previousElementSibling.style.transform = `translateZ(-25rem) rotateY(${angle}deg)`;
  });
}
for (let j = 0; j < back.length; j++) {
  back[j].addEventListener('click', () => {
    console.log("You clicked:", back[j].innerHTML);
    // console.log(this.parentElement.previousElementSibling);
    angle += 45;
    back[j].parentElement.previousElementSibling.style.transform = `translateZ(-25rem) rotateY(${angle}deg)`;
  });
}
