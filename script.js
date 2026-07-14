const faqButtons = document.querySelectorAll(".faq-question");

faqButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const faqItem = button.closest(".faq-item");
    const icon = button.querySelector("span");

    faqItem.classList.toggle("open");

    if (faqItem.classList.contains("open")) {
      icon.textContent = "−";
    } else {
      icon.textContent = "+";
    }
  });
});