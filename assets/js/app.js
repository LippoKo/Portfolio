// !Toggle the menu onClick

const menuToggleButton = document.querySelector('.menu-toggle-button')
const menuElement = document.querySelector('.menu')

const toggleMenu = () => {
  menuElement.classList.toggle('active')
  menuToggleButton.classList.toggle('active')
}

menuToggleButton.addEventListener('click', toggleMenu)

// !Hide menu when the links are clicked

const removeMenuLink = (event) => {
  if (event.target.classList.contains('list-link'))
    menuElement.classList.remove('active'),
      menuToggleButton.classList.remove('active')
}

window.addEventListener('click', removeMenuLink)

// !Toggle Theme and save on LocalStorage

const bodyElement = document.body
const themeToggleButton = document.querySelector('.theme-toggle-button')
const currentTheme = localStorage.getItem('darkTheme')

if (currentTheme) bodyElement.classList.add('dark-theme')

const toggleTheme = () => {
  bodyElement.classList.toggle('dark-theme')

  if (bodyElement.classList.contains('dark-theme')) {
    localStorage.setItem('darkTheme', 'active')
  } else {
    localStorage.removeItem('darkTheme')
  }
}

themeToggleButton.addEventListener('click', toggleTheme)

// !Scroll Reveal
const sr = ScrollReveal({
  distance: '50px',
  duration: 1800,
  easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
})

sr.reveal('.main-title', { origin: 'top' })
sr.reveal('.main-title-2', { origin: 'top' })
sr.reveal('.scroll-reveal-left', { origin: 'left' })
sr.reveal('.scroll-reveal-right', { origin: 'right' })
sr.reveal('.tech-stack-item', { interval: 250 })
sr.reveal(`.section-title, .section-subtitle-container`, {
  origin: 'top',
  interval: 250,
})
sr.reveal('.project-card', { interval: 500 })
sr.reveal(`.form-container, .footer`, {
  origin: 'top',
})

// !Clear inputs
const clearForm = () => {
  setTimeout(() => {
    document.getElementById('name').value = ''
    document.getElementById('email').value = ''
    document.getElementById('message').value = ''
  }, 500)
}
