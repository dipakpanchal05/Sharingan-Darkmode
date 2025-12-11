const themeSwitch = document.getElementById("theme-switch");

themeSwitch.addEventListener("click", () => {
    document.body.classList.toggle("darkmode");

    // Save preference
    if (document.body.classList.contains("darkmode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});

// Auto apply saved theme
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("darkmode");
}
