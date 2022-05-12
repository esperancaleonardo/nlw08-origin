function onScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
    onScrollB2T()
  } else {
    navigation.classList.remove('scroll')
  }

  activateMenuCurrentSection(home)
  activateMenuCurrentSection(disciplinas)
  activateMenuCurrentSection(about)
  activateMenuCurrentSection(contact)
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

function onScrollB2T() {
  if (scrollY > 600) {
    backToTop.classList.add('show')
  } else {
    backToTop.classList.remove('show')
  }
}

function activateMenuCurrentSection(section) {
  const target = scrollY + innerHeight / 2

  const top = section.offsetTop
  const height = section.offsetHeight
  const bottom = top + height

  const topPassou = target >= top
  const bottomPassou = bottom <= target

  const boundaries = topPassou && !bottomPassou

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (boundaries) {
    menuElement.classList.add('active')
    console.log(sectionId)
    console.log(menuElement.classList)
  }
}

ScrollReveal({
  origin: 'top',
  distance: '200px',
  duration: 850
}).reveal(`
  #home, 
  #home img,
  #home .stats,
  #disciplinas,
  #disciplinas header,
  #disciplinas .card,
  #about,
  #about header,
  #about .content,
  #about .content img`)
