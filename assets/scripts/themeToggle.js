const localTheme = localStorage.getItem("theme");
const sun = document.getElementById("themeToggle-sun");
const moon = document.getElementById("themeToggle-moon");
const ball = document.getElementById("themeToggle-ball");
if (localTheme == "light") {
  if (document.body.classList.contains("darkTheme")) {
    document.body.classList.remove("darkTheme");
  }
} else {
  document.body.classList.add("darkTheme");
  ball.style.left = "32px";
  moon.classList.remove("icon-hidden");
  sun.classList.add("icon-hidden");
  localStorage.setItem("theme", "dark");
}
function themeToggle() {
  const sun = document.getElementById("themeToggle-sun");
  const moon = document.getElementById("themeToggle-moon");
  const ball = document.getElementById("themeToggle-ball");
  if (document.body.classList.contains("darkTheme")) {
    document.body.classList.remove("darkTheme");
    ball.style.left = "2px";
    moon.classList.add("icon-hidden");
    sun.classList.remove("icon-hidden");
    localStorage.setItem("theme", "light");
  } else {
    document.body.classList.add("darkTheme");
    ball.style.left = "32px";
    moon.classList.remove("icon-hidden");
    sun.classList.add("icon-hidden");
    localStorage.setItem("theme", "dark");
  }
}
