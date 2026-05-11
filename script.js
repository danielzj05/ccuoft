// Mobile menu toggle
const mobileMenuBtn = document.getElementById("mobile-menu-btn")
const mobileNav = document.getElementById("mobile-nav")
const menuIcon = mobileMenuBtn.querySelector(".menu-icon")
const closeIcon = mobileMenuBtn.querySelector(".close-icon")

mobileMenuBtn.addEventListener("click", () => {
  mobileNav.classList.toggle("active")

  if (mobileNav.classList.contains("active")) {
    menuIcon.style.display = "none"
    closeIcon.style.display = "inline"
  } else {
    menuIcon.style.display = "inline"
    closeIcon.style.display = "none"
  }
})

// Close mobile menu when clicking on a link
const mobileLinks = mobileNav.querySelectorAll("a")
mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileNav.classList.remove("active")
    menuIcon.style.display = "inline"
    closeIcon.style.display = "none"
  })
})

// Set current year in footer
const yearElement = document.getElementById("year")
if (yearElement) {
  yearElement.textContent = new Date().getFullYear()
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Sponsor carousel
let carouselIndex = 0

function carouselMove(n) {
  const carousel = document.getElementById("sponsorCarousel")
  if (!carousel) return

  const items = carousel.querySelectorAll(".carousel-item")
  carouselIndex += n
  
  // Wrap around
  if (carouselIndex >= items.length) {
    carouselIndex = 0
  } else if (carouselIndex < 0) {
    carouselIndex = items.length - 1
  }

  // Hide all items
  items.forEach((item) => {
    item.classList.remove("active")
  })

  // Show current item
  items[carouselIndex].classList.add("active")
}
