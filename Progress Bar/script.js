const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currectActive = 1;

next.addEventListener("click", () => {
  currectActive++;
  if (currectActive > circles.length) {
    currectActive = circles.length;
  }
  update();
});

prev.addEventListener("click", () => {
  currectActive--;
  if (currectActive < 1) {
    currectActive = 1;
  }
  update();
});

function update() {
  circles.forEach((circle, idx) => {
    if (idx < currectActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const activeCircles = document.querySelectorAll(".active");
  progress.style.width =
    ((activeCircles.length - 1) / (circles.length - 1)) * 100 + "%";

  if (currectActive === 1) {
    prev.disabled = true;
  } else if (currectActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
