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
    populateList(dishes, tapasList);
    this.reset();
};

function populateList(dishes = [], dishesList) {
    dishesList.innerHTML = dishes.map((dish, i) => {
        return `
            <li>
            <input type="checkbox" data-index=${i} id="dish${i}" ${dish.done ? 'checked' : ''}/>
            <label for "dish${i}">${dish.text}</label>
            </li>
        `;
    }).join('');
}

addDishes.addEventListener('submit', addDish);