const modalBtn = document.querySelector(".modal-btn");
const modalBg = document.querySelector(".modal-bg");

modalBtn.addEventListener("click", () => {
  modalBg.classList.add("bg-active");
});
