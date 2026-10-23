const digitalElement = document.querySelector(".digital");
const sElement = document.querySelector(".p_s");
const mElement = document.querySelector(".p_m");
const hElement = document.querySelector(".p_h");
const markersContainer = document.getElementById("clock-markers");

function generateMarkers() {
   for (let i = 1; i <= 12; i++) {
      let angle = (i - 3) * 30;

      const risco = document.createElement("div");
      risco.className = "risco";
      risco.style.transform = `rotate(${angle}deg)`;

      const ponto = document.createElement("div");
      ponto.className = i % 3 === 0 ? "ponto destaque" : "ponto";
      ponto.innerText = i;

      ponto.style.transform = `rotate(${-angle}deg)`;

      risco.appendChild(ponto);
      markersContainer.appendChild(risco);
   }
}

function updateClock() {
   const now = new Date();
   const hour = now.getHours();
   const minute = now.getMinutes();
   const second = now.getSeconds();

   digitalElement.textContent = `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}:${String(second).padStart(2, "0")}`;

   let sDeg = second * 6 - 90;
   let mDeg = minute * 6 - 90;

   let hDeg = hour * 30 + minute * 0.5 - 90;

   sElement.style.transform = `rotate(${sDeg}deg)`;
   mElement.style.transform = `rotate(${mDeg}deg)`;
   hElement.style.transform = `rotate(${hDeg}deg)`;
}

generateMarkers();
setInterval(updateClock, 1000);
updateClock();
