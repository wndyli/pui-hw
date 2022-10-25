// takes cart html and duplicates the template
function createElement(roll) {
    const template = document.querySelector('#roll-template');
    const clone = template.content.cloneNode(true);

    roll.element = clone.querySelector('.cartcontent');
    
    // taken and modified from lab 5
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

    const calcPrice = calculatePrice(roll);

    // duplicates the cart content to the corresponding html elements
    rollImageElement.src = 'assets/' + rolls[roll.type].imageFile; 
    rollTypeElement.innerText = roll.type + ' Cinnamon Roll'; 
    rollGlazingElement.innerText = 'Glazing: ' + roll.glazing; 
    rollPackElement.innerText = 'Pack Size: ' + roll.size; 
    rollPriceElement.innerText = '$ ' + calcPrice; 
}

// calculates total price of each roll selection with glaze + pack size modifications
function calculatePrice(roll) {
    // iterates through allGlazing to find if same glaze as roll's
    // sets the glazingChange to the price difference
    let glazingChange = 0;
    for(const glazing of allGlazing) {
        if(glazing.packSize == roll.glazing) {
            glazingChange = glazing.price;
        }
    }

    let packChange = 0;
    for(const pack of allPackSize) {
        if(pack.packSize == roll.size) {
            packChange = pack.priceAdaptation;
        }
    }

    // calculates price based up glaze + pack size changes
    let calculatedPrice = (roll.basePrice + glazingChange) * packChange;

    return calculatedPrice.toFixed(2);
}

// deletes roll dom object and removes it from set
function deleteElement(roll) {
    roll.element.remove();
    rollSet.delete(roll);
    cartTotalPrice();
    saveToLocalStorage();
}

// calculates the total checkout price
function cartTotalPrice() {
    retrieveFromLocalStorage();
    let totalPrice = document.querySelector('.totalprice');
    let price = 0;

    for(const roll of rollSet) {
        price = price + parseFloat(calculatePrice(roll));
    }

    totalPrice.innerText = "$ " + price.toFixed(2);
}

// calls to calculate price
cartTotalPrice();

function retrieveFromLocalStorage() {
    const cartArrayString = localStorage.getItem('cartItems');
    const cartArray = JSON.parse(cartArrayString);
  
    for(const cartData of cartArray) {
      const currRoll = addNewRoll(cartData.type, cartData.glazing, cartData.size, cartData.basePrice);
      createElement(currRoll);
    }
  }
   
  if(localStorage.getItem('cartItems') != null) {
      retrieveFromLocalStorage();
  }