const inputFirstname = document.getElementById("firstname")
const inputLastname = document.getElementById("lastname")
const inputEmail = document.getElementById("email")
const inputPhone = document.getElementById("phone")
const buttonSubmit = document.getElementById("button-submit")

let requiredInputs = [inputFirstname, inputLastname, inputEmail, inputPhone]

// MESSAGES D'ERREUR

const allMessages = [
        {
        input: inputFirstname,
        id: "error-firstname",
        message: "Votre nom doit contenir au minimum 3 lettres"
        },
        {
        input: inputLastname,
        id: "error-lastname",
        message: "Votre prénom doit contenir au minimum 3 lettres"
        },
        {
        input: inputEmail,
        id: "error-email",
        message: "Votre email n'est pas au bon format"
        },
        {
        input: inputPhone,
        id: "error-phone",
        message: "Votre numéro de téléphone ne doit contenir 10 chiffres"
        }
]

for (let element of allMessages) {
        invalidInput(element)
}

function invalidInput(element) {

        element.input.addEventListener("blur", () => {
                
                let errorMessage = document.getElementById(element.id)

                if(!element.input.checkValidity()) {
                        errorMessage.classList.add("error-message")
                        element.input.classList.add("colored-input")
                        errorMessage.innerText = element.message
                } else {
                        errorMessage.innerText=""
                        element.input.classList.remove("colored-input")
                }
        })

}

//VALIDATION DU FORMULAIRE

const form = document.getElementById("contact-form")

let preventSubmit = (event) => {
        event.preventDefault()
}
form.addEventListener ("submit", preventSubmit, true)

function enableSubmitButton() {
        let isValid = true
        requiredInputs.forEach(element => {
                if(!element.checkValidity()) {
                        isValid = false
                }
        });
        return isValid
}
       
requiredInputs.forEach(input => {
        input.addEventListener("blur", () => {
                buttonSubmit.disabled = !enableSubmitButton()
        })
})
        
// ENVOI DU FORMULAIRE

buttonSubmit.addEventListener("click", sendMessage)

const messageDiv = document.querySelector(".send-message__container")

function sendMessage() {

        form.remove()
        
        let messageBox = document.createElement("div")
        messageBox.classList.add("message-box")
        messageBox.innerText="Ce site est factice, votre message est parti dans les lymbes des internets ! Merci à vous !"

        messageDiv.appendChild(messageBox)

}
