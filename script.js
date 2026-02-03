document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("unitBtn");
  const container = document.getElementById("container");
  let count = 0;

  btn.addEventListener("click", () => {
    count++;

    // 普通の増殖
    const msg = document.createElement("div");
    msg.textContent = "単位ください";
    msg.className = "unit";
    container.appendChild(msg);

    // 10 を超えたら画面全体で大量表示
    if (count > 10 && !document.body.classList.contains("flood")) {
      document.body.classList.add("flood");

      for (let i = 0; i < 80; i++) {
        const flood = document.createElement("div");
        flood.textContent = "単位ください";
        flood.className = "flood-text";

        // ランダム位置
        flood.style.top = Math.random() * 100 + "vh";
        flood.style.left = Math.random() * 100 + "vw";

        document.body.appendChild(flood);
      }
    }
  });
});
