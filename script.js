function scrollToProducts() {
  document.getElementById("products").scrollIntoView({ behavior: "smooth" });
}

const buttons = document.querySelectorAll(".product button");
buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    alert("🛍️ Added to cart successfully!");
  });
});

