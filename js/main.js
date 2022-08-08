var menu_items = document.getElementsByClassName('menu_item')

var mobile_menu_icon = document.getElementById('mobile_menu_icon')
var mobile_menu_list = document.getElementById('mobile_menu_list')
var mobile_menu_list_links = document.querySelectorAll(
  '#mobile_menu_list .menu_item a',
)

mobile_menu_icon.addEventListener('click', function () {
  console.log()

  if (mobile_menu_list.classList.contains('height-300') == false) {
    mobile_menu_list.classList.add('height-300')
  } else {
    mobile_menu_list.classList.remove('height-300')
  }
})

for (let i = 0; i < mobile_menu_list_links.length; i++) {
  mobile_menu_list_links[i].addEventListener('click', function () {
    hideMenu()
  })
}

function addEventListenersToMenuItems() {
  for (let i = 0; i < menu_items.length; i++) {
    menu_items[i].addEventListener('click', removeSelectedClass)
  }
}

function removeSelectedClass() {
  for (let i = 0; i < menu_items.length; i++) {
    menu_items[i].classList.remove('selected')
  }
  // Add "selected" class to the item that's been clicked
  this.classList.add('selected')
}

addEventListenersToMenuItems()

function hideMenu() {
  mobile_menu_list.classList.remove('height-300')
}
