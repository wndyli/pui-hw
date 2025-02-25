// glazing + pack size dropdown
let glazingChoices = document.querySelector('#glazing');
let packChoices = document.querySelector('#pack');

// populating glazing options of drop-down fields
for (let i = 0; i < allGlazing.length; i++)
{
  // selects the current glaze in array
  let current = allGlazing[i];
  let choice = document.createElement('option');

  choice.text = current.glazing;
  choice.value = current.price;

  // adds choice to the dropdown
  glazingChoices.add(choice);
}

// populating pack size options of drop-down fields
for (let i = 0; i < allPackSize.length; i++)
{
  // selects the current size in array
  let current = allPackSize[i];
  let choice = document.createElement('option');

  choice.text = current.packSize;
  choice.value = current.priceAdaptation;

  // adds choice to the dropdown
  packChoices.add(choice);
}

// parses the URL parameter and store the current roll type as a variable
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get('roll');

// updates cinnamon roll name
const rollName = document.querySelector('#description');
rollName.innerText = rollType + ' Cinnamon Roll';

// updates cinnamon roll type
const rollImage = document.querySelector('#leftpic');
rollImage.src = 'assets/' + rolls[rollType].imageFile;

// updates cinnamon roll price
const rollPrice = document.querySelector('#checkoutprice');
rollPrice.innerText = '$' + rolls[rollType].basePrice;
let basePrice = rolls[rollType].basePrice;

retrieveFromLocalStorage();

let glazingChange = document.querySelector('#glazing');
glazingChange.addEventListener('change', onSelectValueChange);

let packChange = document.querySelector('#pack');
packChange.addEventListener('change', onSelectValueChange);

// updates and calculates the price
function onSelectValueChange() { 
  let price = document.querySelector('#checkoutprice');

  // gets the number value  from glaze and pack
  let glazePrice = parseFloat(glazingChange.value);
  let packPrice = parseFloat(packChange.value);

  // calculates the price
  let newPrice = (basePrice + glazePrice) * packPrice;
  let fixedPrice = "$" +newPrice.toFixed(2);

  // sets html price as new price
  price.innerText = fixedPrice;
}

let addToCartButton = document.querySelector('#hitcheckout');
addToCartButton.addEventListener("click", addRollToCart);

// adds to the array cart
function addRollToCart() {
    let glazingIndex = glazingChange.selectedIndex;
    let glazingOption = allGlazing[glazingIndex];

    let packIndex = packChange.selectedIndex;
    let packOption = allPackSize[packIndex];

    let selectedRoll = new Roll(rollType, glazingOption.glazing, packOption.packSize, basePrice);
    cartArray.push(selectedRoll);

    saveToLocalStorage();

    // print entire cart array to the console after everytime adding items
    console.log(cartArray);
}

