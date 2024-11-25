let menuButton = document.querySelector("#menu-button")
let listMenu = document.querySelector("#list-menu")

menuButton.addEventListener('click', () => {
  if (menuButton.className == 'closed') {
    menuButton.className = 'opened'
    listMenu.style.display = 'flex'
  }else if (menuButton.className == 'opened') {
    menuButton.className = 'closed'
    listMenu.style.display = 'none'
  }
})