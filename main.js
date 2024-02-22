const modalOpen = document.querySelector('.btn-open')
const modalWindow = document.querySelector('.modal')
const modalClose = document.querySelector('.modal__close-btn')

modalOpen.addEventListener('click', () =>{
  modalWindow.classList.add('modal-visibility')
})
modalClose.addEventListener('click', () =>{
  modalWindow.classList.remove('modal-visibility')
})