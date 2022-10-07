 // database of rolls with price and image
const rolls = {
    "Original": {
        "basePrice": 2.49,
        "imageFile": "original-cinnamon-roll.jpeg"
    },
    "Apple": {
        "basePrice": 3.49,
        "imageFile": "apple-cinnamon-roll.jpeg"
    },
    "Raisin": {
        "basePrice": 2.99,
        "imageFile": "raisin-cinnamon-roll.jpeg"
    },
    "Walnut": {
        "basePrice": 3.49,
        "imageFile": "walnut-cinnamon-roll.jpeg"
    },
    "Double-Chocolate": {
        "basePrice": 3.99,
        "imageFile": "double-chocolate-cinnamon-roll.jpeg"
    },
    "Strawberry": {
        "basePrice": 3.99,
        "imageFile": "strawberry-cinnamon-roll.jpeg"
    }    
};

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
