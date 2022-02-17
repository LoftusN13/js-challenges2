// Tapas Local Storage Challenge 
const addDishes = document.querySelector('.add-tapas');
const tapasList = document.querySelector('.dishes');
const dishes = [];

function addDish(e) {
    e.preventDefault();
    const text = (this.querySelector('[name=tapas]')).value;
    const dish = {
        text: text,
        done: false
    };

    dishes.push(dish);
    this.reset();
};


addDishes.addEventListener('submit', addDish);