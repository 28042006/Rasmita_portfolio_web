// Interactive Button Message
function showMessage() {
    const msg = document.getElementById("greeting-msg");
    if (msg.style.display === "block") {
        msg.style.display = "none";
    } else {
        msg.style.display = "block";
    }
}

// Dark/Light Mode Toggle
const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    
    if (document.body.classList.contains("dark-mode")) {
        toggleBtn.innerText = "☀️ Light Mode";
    } else {
        toggleBtn.innerText = "🌙 Dark Mode";
    }
});
