const newsletterCard = document.querySelector(".newsletter");
const form = document.getElementById("newsletter-form") as HTMLFormElement;
const emailInput = document.getElementById("email") as HTMLInputElement | null;
const successCard = document.getElementById("success-card");
const successCardEmail = document.querySelector(".success-card__email") as HTMLElement | null;
const dismissButton = document.getElementById("dismiss-button");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form?.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = emailInput?.value.trim() ?? "";
    if (!validateEmail(email)) {
        form.classList.add("error");
        return;
    }
    form.classList.remove("error");
    showSuccessCard(email);
});

function validateEmail(email: string) {
    return emailRegex.test(email);
}

emailInput?.addEventListener("input", () => {
    form.classList.remove("error");
});

function showSuccessCard(email: string) {
    if (successCardEmail) successCardEmail.textContent = email;
    successCard?.classList.remove("hidden");
    newsletterCard?.classList.add("hidden");
}

dismissButton?.addEventListener("click", resetNewsletter);

function resetNewsletter() {
    successCard?.classList.add("hidden");
    newsletterCard?.classList.remove("hidden");
    if (emailInput) emailInput.value = "";
}
