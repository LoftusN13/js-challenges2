// Tapas Local Storage Challenge 
const addDishes = document.querySelector('.add-tapas');
const tapasList = document.querySelector('.dishes');
const dishes = JSON.parse(localStorage.getItem('dishes')) || [];

function addDish(e) {
    e.preventDefault();
    const text = (this.querySelector('[name=tapas]')).value;
    const dish = {
        text: text,
        done: false
    };

    dishes.push(dish);
    populateList(dishes, tapasList);
    localStorage.setItem('dishes', JSON.stringify(dishes));
    this.reset();
};

function populateList(dishes = [], dishesList) {
    dishesList.innerHTML = dishes.map((dish, i) => {
        return `
            <li>
            <input type="checkbox" name="chk" data-index=${i} id="dish${i}" ${dish.done ? 'checked' : ''}/>
            <label for="dish${i}">${dish.text}</label>
            </li>
        `;
    }).join('');
}

function toggleDone(e) {
    if (!e.target.matches('input')) return; // skip this unless it's an input
    const el = e.target;
    const index = el.dataset.index;
    dishes[index].done = !dishes[index].done;
    localStorage.setItem('dishes', JSON.stringify(dishes));
    populateList(dishes, tapasList);
}

const checkButton = document.querySelector('.check-btn');
const uncheckButton = document.querySelector('.uncheck-btn');
const clearListButton = document.querySelector('.clear-btn');

function checkAll() {
    let ele = document.getElementsByName('chk');

    for(let i=0; i<ele.length; i++) {  
        if(ele[i].type == 'checkbox') { 
            ele[i].checked = true; 
        };
    };
}

function uncheckAll() {
    let ele = document.getElementsByName('chk');

    for(let i=0; i<ele.length; i++) {  
        if(ele[i].type == 'checkbox') { 
            ele[i].checked = false; 
        };
    };
}

function clearList() {
    localStorage.clear();
    location.reload();
    return false;
}

addDishes.addEventListener('submit', addDish);
tapasList.addEventListener('click', toggleDone);

populateList(dishes, tapasList);

checkButton.addEventListener('click', checkAll);
uncheckButton.addEventListener('click', uncheckAll);
clearListButton.addEventListener('click', clearList);