// making an array of glazing options
let allGlazing = [
  {
    glazing: 'Keep Original',
    price: 0.00,
  },
  {
    glazing: 'Sugar Milk',
    price: 0.00,
  },
  {
    glazing: 'Vanilla Milk',
    price: 0.50,
  },
  {
    glazing: 'Double Chocolate',
    price: 1.50,
  },
];

// making an array of pack size options
let allPackSize = [
    {
      packSize: 1,
      priceAdaptation: 1,
    },
    {
      packSize: 3,
      priceAdaptation: 3,
    },
    {
      packSize: 6,
      priceAdaptation: 5,
    },
    {
      packSize: 12,
      priceAdaptation: 10,
    }
  ];

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

let glazingChange = document.querySelector('#glazing');
glazingChange.addEventListener('change', onSelectValueChange);

let packChange = document.querySelector('#pack');
packChange.addEventListener('change', onSelectValueChange);

// updates and calculates the price
function onSelectValueChange() { 
  let price = document.querySelector('#checkoutprice');

  // gets the number value from glaze and pack
  let glazePrice = parseFloat(glazingChange.value);
  let packPrice = parseFloat(packChange.value);

  // calculates the price
  let basePrice = 2.49;
  let newPrice = (basePrice + glazePrice) * packPrice;
  let fixedPrice = "$" +newPrice.toFixed(2);

  // sets html price as new price
  price.innerText = fixedPrice;
}
