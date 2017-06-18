(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

// LIST #1 - controller
ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuy = this;

  toBuy.toBuyList = ShoppingListCheckOffService.getToBuy();
  
  toBuy.removeItem = function (itemIndex, itemName, quantity) {
    ShoppingListCheckOffService.removeItem(itemIndex, itemName, quantity);
  };
}

//LIST #2 - controller
 AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
 function AlreadyBoughtController(ShoppingListCheckOffService) {
   var bought = this;

   bought.boughtList = ShoppingListCheckOffService.getBought();
   }

function ShoppingListCheckOffService() {
  var service = this;

  // List of items to buy
  var toBuy = [
  {
    name: "Milk",
    quantity: "2"
  },
  {
    name: "Donuts",
    quantity: "200"
  },
  {
    name: "Cookies",
    quantity: "300"
  },
  {
    name: "Chocolate",
    quantity: "5"
  },
  {
    name: "Ice",
    quantity: "5"
  },
  {
    name: "Juice",
    quantity: "8"
  }
];

// List of items bought
  var bought = []
  ;

  service.addItem = function (itemName, quantity) {
    var item = {
    name: itemName,
    quantity: quantity
    };
    bought.push(item);
  };

  service.removeItem = function (itemIndex, itemName, quantity) {
	service.addItem(itemName, quantity); 
    toBuy.splice(itemIndex, 1);
  };

  service.getToBuy = function () {
    return toBuy;
  };
  
  service.getBought = function () {
    return bought;
  };
}

})();
