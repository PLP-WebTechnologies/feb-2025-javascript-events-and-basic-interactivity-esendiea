// Toggle paragraph on button click
document.getElementById('change-text-btn').addEventListener('click', function () {
    const container = document.getElementById('new-paragraph-container');
    const existingParagraph = container.querySelector('p');

    if (existingParagraph) {
        container.removeChild(existingParagraph); // Remove if exists
    } else {
        const newText = document.createElement('p');
        newText.textContent = "Every click helps us protect Aberdare! More people are joining the cause—let's make a difference together!";
        newText.style.color = "black";
        newText.style.fontWeight = "bold";
        newText.style.marginTop = "10px";
        newText.style.fontSize = "1.1em";
        container.appendChild(newText);
    }
});

// Toggle heading text and style
document.getElementById('inspire-btn').addEventListener('click', function () {
    const heading = document.getElementById('why-heading');

    if (heading.textContent === "Why Protect Aberdare Forest?") {
        heading.textContent = "Because Nature Needs Us 🌿";
        heading.style.color = "#4caf50";
        heading.style.textShadow = "1px 1px 2px #ccc";
    } else {
        heading.textContent = "Why Protect Aberdare Forest?";
        heading.style.color = "";
        heading.style.textShadow = "";
    }
});

// Form validation and submission
document.getElementById('action-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission

    const nameInput = this.querySelector('input[type="text"]');
    const emailInput = this.querySelector('input[type="email"]');
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const messageContainer = document.createElement('p');
    messageContainer.style.marginTop = "10px";

    // Remove previous message if any
    const oldMessage = this.querySelector('.form-message');
    if (oldMessage) oldMessage.remove();

    // Basic validation
    if (name.length < 3) {
        messageContainer.textContent = "Name must be at least 3 characters.";
        messageContainer.style.color = "red";
    } else if (!email.includes("@") || !email.includes(".")) {
        messageContainer.textContent = "Please enter a valid email address.";
        messageContainer.style.color = "red";
    } else {
        messageContainer.textContent = "Thank you for signing! 💚";
        messageContainer.style.color = "green";

        // Reset form
        nameInput.value = "";
        emailInput.value = "";
    }

    messageContainer.classList.add("form-message");
    this.appendChild(messageContainer);
});

// Real-time validation feedback
document.querySelector('input[type="text"]').addEventListener('input', function () {
    if (this.value.length < 3) {
        this.style.borderColor = "red";
    } else {
        this.style.borderColor = "green";
    }
});

document.querySelector('input[type="email"]').addEventListener('input', function () {
    if (!this.value.includes("@") || !this.value.includes(".")) {
        this.style.borderColor = "red";
    } else {
        this.style.borderColor = "green";
    }
});
