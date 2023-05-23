// HERO SECTION

const title = document.querySelector(".hero__title")
const subtitle = document.querySelector(".hero__subtitle")
const brandName = document.querySelector(".hero__brand-name")
const arrowLink = document.querySelector(".hero__link-container")

setTimeout(() => {title.classList.add("active")},100)
setTimeout(() => {subtitle.classList.add("active")},1300)
setTimeout(() => {brandName.classList.add("active")},2300)
setTimeout(() => {arrowLink.classList.add("active")},3300)

const heroPushLink = document.querySelector(".hero__push-link")

heroPushLink.addEventListener("click", slideDown)

function slideDown(e) {
    e.preventDefault()
    document.querySelector(`${e.target.getAttribute("href")}`).scrollIntoView({behavior: "smooth"})
}