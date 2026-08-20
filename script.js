const nameInput = document.querySelector("#name");
const nameHolder = document.querySelector("#nameholder");

nameInput.addEventListener("input", () => {
    nameHolder.textContent = nameInput.value || "Jane Appleseed";
});


const cardInput = document.querySelector("#num");
const cardHolder = document.querySelector("#card");

cardInput.addEventListener("input", () => {

    cardInput.value = cardInput.value.replace(/\D/g, "");
    cardInput.value = cardInput.value.slice(0, 16);

    cardHolder.textContent = cardInput.value
        .replace(/(.{4})/g, "$1 ")
        .trim();

    if (cardHolder.textContent === "") {
        cardHolder.textContent = "0000 0000 0000 0000";
    }
});


const mmInput = document.querySelector("#mm");
const mmHolder = document.querySelector("#mmCard");

mmInput.addEventListener("input", () => {
    mmInput.value = mmInput.value.replace(/\D/g, "").slice(0, 2);
    mmHolder.textContent = mmInput.value || "00";
});


const yyInput = document.querySelector("#yy");
const yyHolder = document.querySelector("#yyCard");

yyInput.addEventListener("input", () => {
    yyInput.value = yyInput.value.replace(/\D/g, "").slice(0, 2);
    yyHolder.textContent = yyInput.value || "00";
});


const cvcInput = document.querySelector("#cvc");
const cvcHolder = document.querySelector("#cvcCard");

cvcInput.addEventListener("input", () => {
    cvcInput.value = cvcInput.value.replace(/\D/g, "").slice(0, 3);
    cvcHolder.textContent = cvcInput.value || "000";
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

    errorMsg.textContent = "";
    cardError.textContent = "";
    mmError.textContent = "";
    yyError.textContent = "";
    cvcError.textContent = "";


    // NAME
    if (nameInput.value.trim() === "") {
        errorMsg.textContent = "Can't be blank";
        isValid = false;
    }


    // CARD NUMBER
    if (cardInput.value.trim() === "") {

        cardError.textContent = "Can't be blank";
        isValid = false;

    } else if (cardInput.value.length !== 16) {

        cardError.textContent = "Wrong format. It is required 16 characters";
        isValid = false;

    }


    // MM
    if (mmInput.value.trim() === "") {

        mmError.textContent = "Can't be blank";
        isValid = false;

    } else if (
        !/^[0-9]+$/.test(mmInput.value) ||
        Number(mmInput.value) < 1 ||
        Number(mmInput.value) > 12
    ) {

        mmError.textContent = "Wrong format";
        isValid = false;

    }


    // YY
    if (yyInput.value.trim() === "") {

        yyError.textContent = "Can't be blank";
        isValid = false;

    } else if (
        !/^[0-9]+$/.test(yyInput.value) ||
        yyInput.value.length !== 2
    ) {

        yyError.textContent = "Wrong format";
        isValid = false;

    }


    // CVC
    if (cvcInput.value.trim() === "") {

        cvcError.textContent = "Can't be blank";
        isValid = false;

    } else if (
        !/^[0-9]+$/.test(cvcInput.value) ||
        cvcInput.value.length !== 3
    ) {

        cvcError.textContent = "Wrong format";
        isValid = false;

    }


    
    if (isValid) {

        form.style.display = "none";
        thankYou.style.display = "block";

    }

});


continueButton.addEventListener("click", () => {

    thankYou.style.display = "none";
    form.style.display = "block";

    form.reset();

    nameHolder.textContent = "Jane Appleseed";
    cardHolder.textContent = "0000 0000 0000 0000";
    mmHolder.textContent = "00";
    yyHolder.textContent = "00";
    cvcHolder.textContent = "000";

});
