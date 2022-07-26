let openModal = document.getElementById("openModal");
let modal = document.getElementById("modal");
let closeModal = document.getElementById("closeModal");

openModal.onclick = function () {
  modal.style.display = "block";
};

closeModal.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
};
