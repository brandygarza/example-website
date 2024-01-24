

const h1 = document.querySelector('h1')
h1.textContent = "Brandy's Awesome Webpage!"

const copyright = document.querySelector('footer p')
copyright.textContent = "BLAH"

const link = document.querySelector('.active')
link.style.color = "#ff0000"
link.style.textDecoration ="underline"

const contactLink = document.querySelector('#contact')
contactLink.style.background = "#000000"
contactLink.style.fontWeight = "bold"

const links = document.querySelector('nav a')
links.forEach(link => console.style.display = 'none')