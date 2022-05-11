function onScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
    onScrollB2T()
  } else {
    navigation.classList.remove('scroll')
  }
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
