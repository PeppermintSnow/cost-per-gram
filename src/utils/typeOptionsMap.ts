import { TypeOptionsMapType } from "@/types";

export const typeOptionsMap: TypeOptionsMapType = [
  // Value of type options are density constants to be used for conversion
  {
    name: 'Flours', options: [
      {text: 'All-purpose Flour', value: 'allPurposeFlour', density: 0.529},
      {text: 'Wheat Flour', value: 'wheatFlour', density: 0.478},
      {text: 'Bread Flour', value: 'breadFlour', density: 0.55},
      {text: 'Cake Flour', value: 'cakeFlour', density: 0.482},
      {text: 'Rye Flour', value: 'ryeFlour', density: 0.43},
    ]
  },
  {
    name: 'Leaveners', options: [
      {text: 'Baking Soda', value: 'bakingSoda', density: 0.933},
      {text: 'Baking Powder', value: 'bakingPowder', density: 0.897},
    ]
  },
  {
    name: 'Sugars', options: [
      {text: 'Granulated Sugar', value: 'granulatedSugar', density: 0.705},
      {text: 'Powdered Sugar', value: 'powderedSugar', density: 0.561},
      {text: 'Brown Sugar', value: 'brownSugar', density: 0.92989},
    ]
  },
  {
    name: 'Sweeteners', options: [
      {text: 'Corn Syrup', value: 'cornSyrup', density: 1.38},
      {text: 'Honey', value: 'honey', density: 1.38},
      {text: 'Jelly', value: 'jelly', density: 1.245},
    ]
  },
  {
    name: 'Oils', options: [
      {text: 'Cooking Oil', value: 'cookingOil', density: 0.88},
      {text: 'Olive Oil', value: 'oliveOil', density: 0.918},
      {text: 'Vegetable Oil', value: 'vegetableOil', density: 0.922},
    ]
  },
  {
    name: 'Fats', options: [
      {text: 'Butter', value: 'butter', density: 0.911},
      {text: 'Margarine', value: 'margarine', density: 0.96},
      {text: 'Lard', value: 'Lard', density: 0.919},
      {text: 'Mayonnaise', value: 'Mayonnaise', density: 0.91},
      {text: 'Peanut Butter', value: 'Peanut Butter', density: 1.075},
    ]
  },
  {
    name: 'Dairy', options: [
      {text: 'Milk', value: 'milk', density: 1.03},
      {text: 'Buttermilk', value: 'buttermilk', density: 1.022},
      {text: 'Light Cream', value: 'lightCream', density: 1.012},
      {text: 'Heavy Cream', value: 'heavyCream', density: 0.994},
      {text: 'Whipped Cream', value: 'whippedCream', density: 0.496},
      {text: 'Ice Cream', value: 'iceCream', density: 0.554},
      {text: 'Sour Cream', value: 'sourCream', density: 0.978},
      {text: 'Cottage Cheese', value: 'cottageCheese', density: 1.04},
      {text: 'Cream Cheese', value: 'creamCheese', density: 0.91},
      {text: 'Yogurt', value: 'yogurt', density: 1.06},
    ]
  },
  {
    name: 'Herbs & Spices', options: [
      {text: 'Cinnamon', value: 'cinnamon', density: 0.56},
      {text: 'Garlic Powder', value: 'garlicPowder', density: 0.32},
      {text: 'Salt', value: 'salt', density: 1.28},
      {text: 'Spice Blends', value: 'spiceBlends', density: 0.58},
      {text: 'Cocoa Powder', value: 'cocoaPowder', density: 0.56},
      {text: 'Vanilla', value: 'vanilla', density: 0.88},
    ]
  }
];

