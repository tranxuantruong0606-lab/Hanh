const button = document.getElementById("surpriseBtn");
const message = document.getElementById("surpriseMessage");

button.addEventListener("click", () => {
  message.textContent = "Chúc bạn luôn vui vẻ và tỏa sáng mỗi ngày! 💖";
  for (let i = 0; i < 45; i++) {
    const star = document.createElement("span");
    star.className = "star";
    star.textContent = Math.random() > 0.5 ? "✦" : "✧";
    star.style.left = Math.random() * 100 + "vw";
    star.style.animationDuration = (2 + Math.random() * 3) + "s";
    star.style.fontSize = (10 + Math.random() * 18) + "px";
    document.body.appendChild(star);
    star.addEventListener("animationend", () => star.remove());
  }
});