(function (){
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyShoppingController',ToBuyShoppingController)
.controller('AlreadyBoughtController',AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
function ToBuyShoppingController(ShoppingListCheckOffService){
	var Buy = this;
	Buy.items = ShoppingListCheckOffService.getitems();

	Buy.moveToBoughtList = function(itemIndex){
		ShoppingListCheckOffService.moveToBoughtList(itemIndex);
	};
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
	var AlreadyBuy= this;
	AlreadyBuy.Alreadyboughtlist = ShoppingListCheckOffService.getAlreadyboughtlist();
}

function ShoppingListCheckOffService(){
 var service = this;
 var items = [{name:"Chocolate", Quantity:10},{name:"Juice" , Quantity:12},{name:"Burger" , Quantity:5},{name:"Bottles" , Quantity:9},{name:"Cookies" , Quantity:10}];
 var Alreadyboughtlist = [];				
service.getitems = function(){
	return items;
};

service.getAlreadyboughtlist = function(){
	return Alreadyboughtlist;
};

service.moveToBoughtList = function (itemIndex){
	var item = {
		name: items[itemIndex].name,
		Quantity: items[itemIndex].Quantity
	};

	items.splice(itemIndex, 1);
	Alreadyboughtlist.push(item);
};
}
})();