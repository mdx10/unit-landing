const modal = document.querySelector('[data-modal]');
const modalButton = document.querySelectorAll('[data-package-button-open]');
const modalButtonClose = document.querySelector('[data-package-button-close]');

modalButton.forEach(function(item){
    item.addEventListener('click', function(){
        modal.classList.remove('modal-block--hidden');
    })
});

modalButtonClose.addEventListener('click', function(){
    modal.classList.add('modal-block--hidden');
});

modal.addEventListener('click', function(){
    modal.classList.add('modal-block--hidden');
})

modal.querySelector('.modal-window').addEventListener('click', function(e){
    e.stopPropagation();
})