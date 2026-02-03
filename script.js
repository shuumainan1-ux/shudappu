const btn = document.getElementById("unitBtn");
const container = document.getElementById("container");

btn.addEventListener("click", () => {
  const msg = document.createElement("div");
  msg.textContent = "単位ください";
  msg.className = "unit";

  container.appendChild(msg);
});
