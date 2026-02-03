const btn = document.getElementById("submitBtn");
const msg = document.getElementById("message");

btn.addEventListener("click", () => {
  msg.textContent = "単位ください";
  btn.disabled = true;
});
