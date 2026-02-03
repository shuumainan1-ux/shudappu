const btn = document.getElementById("submitBtn");
const msg = document.getElementById("message");

btn.addEventListener("click", () => {
  msg.textContent = "おめでとうございます";
  btn.disabled = true;
});
