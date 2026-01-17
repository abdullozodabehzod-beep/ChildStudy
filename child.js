//BURGER
const burger = document.getElementById("burger")
const menu = document.getElementById("menu")

burger.addEventListener("click", () => {
    burger.classList.toggle("active")
    menu.classList.toggle("active")
})

//AUTOTEXT

const texts = ["Станьте лучшим", "Чувствуй свободу в путешествиях, работе и общении"]
const typingSpeed = 100
const deletingSpeed = 60
const pauseAfterTyping = 1200
const pauseAfterDeleting = 500

let textIndex = 0
let charIndex = 0
let isDeleting = false

function typeLoop() {
    const currentText = texts[textIndex]
    const element = document.getElementById("autoText")

    if (!isDeleting) {
        element.textContent = currentText.slice(0, charIndex + 1)
        charIndex++

        if (charIndex === currentText.length) {
            setTimeout(() => isDeleting = true, pauseAfterTyping)
        }
    } else {
        element.textContent = currentText.slice(0, charIndex - 1)
        charIndex--

        if (charIndex === 0) {
            isDeleting = false
            textIndex = (textIndex + 1) % texts.length
            setTimeout(() => {}, pauseAfterDeleting)
        }
    }

    setTimeout(typeLoop, isDeleting ? deletingSpeed : typingSpeed)
}

typeLoop()
