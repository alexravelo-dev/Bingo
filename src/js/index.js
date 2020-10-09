const dice = document.getElementById("dice");
const btnThrow = document.getElementById("btnThrow");

btnThrow.addEventListener("click", function() {
  dice.innerText = calculateNumber();
});

function calculateNumber() {
  return Math.floor(Math.random() * Math.floor(6)) + 1;
}
