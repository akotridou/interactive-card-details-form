const nameInput = document.querySelector("#name");
const nameHolder = document.querySelector("#nameholder");

nameInput.addEventListener("input", () => {
    nameHolder.textContent = nameInput.value;
});


const cardInput = document.querySelector("#num");
const cardHolder = document.querySelector("#card");

cardInput.addEventListener("input", () => {

    // Κρατάμε μόνο αριθμούς
    cardInput.value = cardInput.value.replace(/\D/g, "");

    // Μέχρι 16 ψηφία
    cardInput.value = cardInput.value.slice(0, 16);

    // Βάζουμε κενά στην εμφάνιση της κάρτας
    cardHolder.textContent = cardInput.value
        .replace(/(.{4})/g, "$1 ")
        .trim();
});


const mmInput = document.querySelector("#mm");
const mmHolder = document.querySelector("#mmCard");

mmInput.addEventListener("input", () => {
    mmHolder.textContent = mmInput.value;
});


const yyInput = document.querySelector("#yy");
const yyHolder = document.querySelector("#yyCard");

yyInput.addEventListener("input", () => {
    yyHolder.textContent = yyInput.value;
});


const cvcInput = document.querySelector("#cvc");
const cvcHolder = document.querySelector("#cvcCard");

cvcInput.addEventListener("input", () => {
    cvcHolder.textContent = cvcInput.value;
});


const confirmButton = document.querySelector("#confirm");

const errorMsg = document.querySelector("#nameError");
const cardError = document.querySelector("#cardError");
const mmError = document.querySelector("#mmError");
const yyError = document.querySelector("#yyError");
const cvcError = document.querySelector("#cvcError");

const form = document.querySelector("form");
const thankYou = document.querySelector("#thankYou");
const continueButton = document.querySelector("#continue");


confirmButton.addEventListener("click", (event) => {

    event.preventDefault();

    let isValid = true;

    // CLEAR OLD ERRORS
    errorMsg.textContent = "";
    cardError.textContent = "";
    mmError.textContent = "";
    yyError.textContent = "";
    cvcError.textContent = "";


    // NAME
    if (nameInput.value.trim() === '') {
        errorMsg.textContent = "Can't be blank";
        isValid = false;
    }


    // CARD NUMBER
    if (cardInput.value.trim() === '') {
        cardError.textContent = "Can't be blank";
        isValid = false;
    } 
    else if (!/^[0-9]+$/.test(cardInput.value)) {
        cardError.textContent = "Wrong format";
        isValid = false;
    }
    else if (cardInput.value.length !== 16) {
        cardError.textContent = "Wrong format. It is required 16 characters";
        isValid = false;
    }


    // MM
    if (mmInput.value.trim() === '') {
        mmError.textContent = "Can't be blank";
        isValid = false;
    } 
    else if (!/^[0-9]+$/.test(mmInput.value)) {
        mmError.textContent = "Wrong format";
        isValid = false;
    }
    else if (Number(mmInput.value) < 1 || Number(mmInput.value) > 12) {
        mmError.textContent = "Wrong format";
        isValid = false;
    }


    // YY
    if (yyInput.value.trim() === '') {
        yyError.textContent = "Can't be blank";
        isValid = false;
    }
    else if (!/^[0-9]+$/.test(yyInput.value)) {
        yyError.textContent = "Wrong format";
        isValid = false;
    }
    else if (yyInput.value.length !== 2) {
        yyError.textContent = "Wrong format";
        isValid = false;
    }


    // CVC
    if (cvcInput.value.trim() === '') {
        cvcError.textContent = "Can't be blank";
        isValid = false;
    }
    else if (!/^[0-9]+$/.test(cvcInput.value)) {
        cvcError.textContent = "Wrong format";
        isValid = false;
    }
    else if (cvcInput.value.length !== 3) {
        cvcError.textContent = "Wrong format";
        isValid = false;
    }


    // EVERYTHING IS CORRECT
   if (isValid) {
    form.reset();

    form.style.display = "none";
    thankYou.style.display = "block";
}

});

continueButton.addEventListener("click", () => {

    thankYou.style.display = "none";
    form.style.display = "block";

    nameHolder.textContent = "Jane Appleseed";
    cardHolder.textContent = "0000 0000 0000 0000";
    mmHolder.textContent = "00";
    yyHolder.textContent = "00";
    cvcHolder.textContent = "000";

});
