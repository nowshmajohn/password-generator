const passwordField = document.getElementById("password");
const lengthSlider = document.getElementById("length");
const lengthValue = document.getElementById("lengthValue");

const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");

const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");

lengthSlider.addEventListener("input", () => {
    lengthValue.textContent = lengthSlider.value;
});

function generatePassword() {

    const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+-=[]{}<>?";

    let characters = "";

    if (uppercase.checked)
        characters += upperChars;

    if (lowercase.checked)
        characters += lowerChars;

    if (numbers.checked)
        characters += numberChars;

    if (symbols.checked)
        characters += symbolChars;

    if (characters === "") {
        alert("Select at least one option");
        return;
    }

    let password = "";

    for (let i = 0; i < lengthSlider.value; i++) {
        const randomIndex = Math.floor(
            Math.random() * characters.length
        );
        password += characters[randomIndex];
    }

    passwordField.value = password;
}

generateBtn.addEventListener("click", generatePassword);

copyBtn.addEventListener("click", () => {

    if(passwordField.value===""){
        alert("Generate a password first");
        return;
    }

    navigator.clipboard.writeText(passwordField.value);

    copyBtn.textContent = "Copied!";

    setTimeout(() => {
        copyBtn.textContent = "Copy";
    }, 1500);
});

generatePassword();
