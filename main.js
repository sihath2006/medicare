document.querySelector(".hamburger").addEventListener("click", function() {
    this.classList.toggle("active");
    document.querySelector(".navbar").classList.toggle("active");
});