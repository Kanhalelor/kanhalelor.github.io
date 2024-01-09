// select elements
const copyBtn = document.querySelector(".copy");

// functions
const copyFunc = () => {
  const copyEl = document.querySelector(".mail");

  const textArea = document.createElement("textarea");
  textArea.value = copyEl.textContent;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("Copy");
  displayPopUp();
  textArea.remove();
  textArea.classList.add("remove");
};

const displayPopUp = () => {
  const popUpElem = document.querySelector(".pop-up");
  popUpElem.style.display = "grid";
  setTimeout(() => {
    popUpElem.style.display = "none";
  }, 3000);
};
// events
copyBtn.addEventListener("click", copyFunc);
