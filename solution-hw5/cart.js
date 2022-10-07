class Roll { 
    // creates a roll class
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType; 
        this.glazing = rollGlazing;
        this.size = packSize; 
        this.basePrice = basePrice.toFixed(2);
            
        this.element = null;
    }
}

// creates an empty set to represent cart
const rollSet = new Set();

// creates new roll objects and adds it to set
function addNewRoll(rollType, rollGlazing, packSize, basePrice) {
    const roll = new Roll(rollType, rollGlazing, packSize, basePrice);
    rollSet.add(roll);
    return roll;
}

// takes cart html and duplicates the template
function createElement(roll) {
    const template = document.querySelector('#roll-template');
    const clone = template.content.cloneNode(true);

    roll.element = clone.querySelector('.cartcontent');
    
    const btnDelete = roll.element.querySelector('.cartlefttext');
    btnDelete.addEventListener('click', () => {
        deleteElement(roll);
      });

    // add roll clone to the dom
    const rollListElement = document.querySelector('#roll-list');
    rollListElement.append(roll.element);

    // populate roll clone with cart content
    updateElement(roll);
}

function updateElement(roll) {
    // gets the cart html that needs to be updated
    const rollImageElement = roll.element.querySelector(".cartpic"); 
    const rollTypeElement = roll.element.querySelector(".cinnamon-roll"); 
    const rollGlazingElement = roll.element.querySelector(".glazing-option"); 
    const rollPackElement = roll.element.querySelector(".pack-size"); 
    const rollPriceElement = roll.element.querySelector(".rightmargin");

    // duplicates the cart content to the corresponding html elements
    rollImageElement.src = 'assets/' + rolls[roll.type].imageFile; 
    rollTypeElement.innerText = roll.type + ' Cinnamon Roll'; 
    rollGlazingElement.innerText = 'Glazing: ' + roll.glazing; 
    rollPackElement.innerText = 'Pack Size: ' + roll.size; 
    rollPriceElement.innerText = '$ ' + roll.basePrice; 

}

// deletes roll dom object and removes it from set
function deleteElement(roll) {
    roll.element.remove();
    rollSet.delete(roll);
    cartTotalPrice();
}

// creates four roll objects and add them to rollSet
const rollOne = addNewRoll( "Original", "Sugar Milk", 1, 2.49);
const rollTwo = addNewRoll( "Walnut", "Vanilla Milk", 12, 39.90);
const rollThree = addNewRoll( "Raisin", "Sugar Milk", 3, 8.97);
const rollFour = addNewRoll( "Apple", "Original", 3, 10.47);

// adds individual roll to list of rolls
for (const roll of rollSet) { 
    createElement(roll);
}

// calculates the total checkout price
function cartTotalPrice() {
    let totalPrice = document.querySelector('.totalprice');
    let price = 0;

    for(const roll of rollSet) {
        price = price + parseFloat(roll.basePrice);
    }

    totalPrice.innerText = "$ " + price.toFixed(2);
}

// calls to calculate price
cartTotalPrice();