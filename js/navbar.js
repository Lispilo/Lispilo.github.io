const toggleBtn = document.querySelector('div.toggle_btn')
const toggleBtnIcon = document.querySelector('div.toggle_btn i')
const dropDownMenu = document.querySelector('div.dropdown_menu')

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'
}