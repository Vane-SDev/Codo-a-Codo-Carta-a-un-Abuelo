// console.log("Hello World")  prueba de vinculación

// Script para menu
const list = document.querySelectorAll('.list');
function activeLink(){
    list.forEach((item) => 
    item.classList.remove('active'));
    this.classList.add('active');
}
list.forEach((item) => 
item.addEventListener('click', activeLink));

// fin script Menu


// Script para header

var header = document.getElementById('header')

window.addEventListener('scroll', ()=> {
    var scroll = window.scrollY
    if(scroll>10){
        header.style.backgroundColor = '#E9BBB5'
        header.style.backgroundColor = '#E9BB5'
    }
})