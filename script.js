const btn = document.getElementById("unitBtn");
const container = document.getElementById("container");

let count = 0;

btn.addEventListener("click", () => {
  count++;

  // 通常の増殖
  const msg = document.createElement("div");
  msg.textContent = "単位ください";
  msg.className = "unit";
  container.appendChild(msg);

  // 10個超えたら画面埋め尽くし
  if (count > 10) {
    document.body.classList.add("flood");

    for (let i = 0; i < 80; i++) {
      const flood = document.createElement("div");
      flood.textContent = "単位ください";
      flood.className = "flood-text";

      flood.style.top = Math.random() * 100 + "vh";
      flood.style.left = Math.random() * 100 + "vw";

      document.body.appendChild(flood);
    }
  }
});
