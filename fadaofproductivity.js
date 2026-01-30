const btn = document.getElementById("toggleBtn");

// Load saved mode
if (localStorage.getItem("mode") === "dark") {
  document.body.classList.add("dark");
  btn.textContent = "☀️ Light Mode";
}

btn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("mode", "dark");
    btn.textContent = "☀️ Light Mode";
  } else {
    localStorage.setItem("mode", "light");
    btn.textContent = "🌙 Dark Mode";
  }
});