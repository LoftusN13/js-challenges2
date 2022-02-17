// Tapas Local Storage Challenge 
const addDishes = document.querySelector('.add-tapas');
const tapasList = document.querySelector('.dishes');
const dishes = [];

function addDish(e) {
    e.preventDefault();
    console.log('hey');
}

addDishes.addEventListener('submit', addDish);