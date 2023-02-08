const modalBtn = document.querySelector(".modal-btn");
const modalBg = document.querySelector(".modal-bg");
const modalCloneBtn = document.querySelector(".modal-close");

modalBtn.addEventListener("click", () => {
  modalBg.classList.add("bg-active");
});

modalCloneBtn.addEventListener("click", () => {
  modalBg.classList.remove("bg-active");
});
