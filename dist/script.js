let dropdownLink = document.querySelector('.dropdown-link');
let subList = document.querySelector('.menu__sub-list');
if(dropdownLink){
    dropdownLink.addEventListener('click', function(){
        subList.classList.toggle('tuch');
    }); 
}

let burgerBtn = document.querySelector('.menu__icon');

burgerBtn.addEventListener('click', function(){
    burgerBtn.classList.toggle('active');
    
});