
//1
class CoffeeShop {
constructor(name,menu) {
  this.name = name;
  this.menu = menu;
  this.orders = [];
}

addOrder(itemName) {
for(let idx = 0; idx < this.menu.length; idx ++)
  {

  if(this.menu[idx].name === itemName) {
    this.orders.push(itemName)
     return "order added";
  }
}
    return "This item is currently unavailable!";
};

fulfillOrder() {
  
  if(this.orders.length === 0)
  {
    return "All orders have been fulfilled!";
  
  }
  let item = this.orders.shift();
   return `the ${item} is ready`;
};

listOrders() {
  return this.orders;
};

 dueAmount() {
  let sum = 0;
    for( let ind = 0 ; ind < this.orders.length; ind++)
     for (let i = 0; i < this.menu.length; i++)
      {
    if(this.menu[i].name === this.orders[ind]) 
    {
   sum += this.menu[i].price;
   }
      }
   return sum;
  };

cheapestItem () {
  let min = this.menu[0];
  for(let j = 0 ; j < this.menu.length ; j++)
  {
    if(this.menu[j].price < min.price)
    {
      min = this.menu[j];
    };
  }
  return min.name;
};


drinksOnly(){
  let result = [];
for(let k = 0 ; k < this.menu.length; k++)
{
  if(this.menu[k].type  === "drink")
  {
result.push(this.menu[k].name);
  }
}
return result;
};

foodOnly () {
  let result1 = [];
for(let b = 0 ; b < this.menu.length ; b++)
{
  if(this.menu[b].type === "food")
  {
result1.push(this.menu[b].name);
  }
}
return result1;
};
};

const menu = [
  { name: "cinnamon roll", type: "food", price: 1.5 },
  {name: "lemonade", type: "drink",price: 0.5},
  { name: "iced coffee", type: "drink", price: 0.67 },
  {name: "tuna sandwich", type: "food", price: 3},
];

const tcs = new CoffeeShop("Coffe house", menu);

console.log(tcs.addOrder("hot cocoa")); // "This item is currently unavailable!"
// Tesha's coffee shop does not sell hot cocoa
console.log(tcs.addOrder("iced tea")); // "This item is currently unavailable!"
// specifying the variant of "iced tea" will help the process
console.log(tcs.addOrder("cinnamon roll")); // "Order added!"
console.log(tcs.addOrder("iced coffee")); // "Order added!"
console.log(tcs.listOrders()); // ["cinnamon roll", "iced coffee"]
// the list of all the items in the current order
console.log(tcs.dueAmount()); // 2.17
console.log(tcs.fulfillOrder()); // "The cinnamon roll is ready!"
console.log(tcs.fulfillOrder()); // "The iced coffee is ready!"
console.log(tcs.fulfillOrder()); // "All orders have been fulfilled!"
// all orders have been presumably served
console.log(tcs.listOrders()); // []
// an empty array is returned if all orders have been exhausted
console.log(tcs.dueAmount()); // 0.0
console.log(tcs.cheapestItem()); // "lemonade"
console.log(tcs.drinksOnly()); // ["orange juice", "lemonade", "cranberry juice",
//"pineapple juice", "lemon iced tea", "vanilla chai latte", "hot
//chocolate", "iced coffee"]
console.log(tcs.foodOnly()); // ["tuna sandwich", "ham and cheese sandwich", "bacon and
//egg", "steak", "hamburger", "cinnamon roll"]
