// NAVBAR

const btnMenu=document.querySelector('.logo-menu');
const menu=document.querySelector('.all-items-nav');

btnMenu.addEventListener('click', () =>{menu.classList.toggle('active')})

const allLinks=document.querySelectorAll('.item-nav');
allLinks.forEach(item =>{
    item.addEventListener('click', () => {menu.classList.toggle('active')})
})


// SCROLL ANIMATION

const animatedContents = [
    ...document.querySelectorAll(".animation--center"),
    ...document.querySelectorAll(".animation--left"),
    ...document.querySelectorAll(".animation--right")
]

const intersectionObserver = new IntersectionObserver(handleIntersect, {rootMargin: "-10%"}) 

animatedContents.forEach(el => intersectionObserver.observe(el))

function handleIntersect(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active")
            intersectionObserver.unobserve(entry.target)
        }
    })
}