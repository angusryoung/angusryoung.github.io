// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 


//I can change the variable names later from vegetarian and glutenFree to lactoseFree and nutFree
//make sure it is formated nicely

var products = [
	{
		name: "brocoli " + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 '+ "	1.99",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 1.99
	},
	{
		name: "bread" + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 '+ "2.35",
		vegetarian: true,
		glutenFree: false,
		organic: true,
		price: 2.35
	},
    {
		name: "cheese sticks	" + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0'+ "4.35",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 4.35
	},
	{
		name: "yogurt			" + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0'+ "4.30",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		price: 4.50
	},
	{
		name: "chocolate covered nuts" + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0'+ "	4.60",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 4.60
	},
    {
		name: "granola cereal	" + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0'+ "5.25",
		vegetarian: true,
		glutenFree: false,
		organic: true,
		price: 5.25
	},
	{
		name: "almond granola" + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0'+ "5.68",
		vegetarian: true,
		glutenFree: false,
		organic: true,
		price: 5.68
	},
	{
		name: "sesame oil" + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0'+ "10.90",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 10.90
	},
	{
		name: "pecan pie" + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0'+ "		11.00",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 11.00
	},
	{
		name: "fresh salmon" + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0'+ "15.02",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 15.02
	}
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price


//inspired by https://stackoverflow.com/questions/50069357/need-for-loop-with-conditional-continue
//reminder vegetarian means lactose free
function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction.vegetarian) && (prods[i].vegetarian == false)){continue;}  
		if ((restriction.glutenFree) && (prods[i].glutenFree == false)){continue;}
		if ((restriction.glutenFree) && (prods[i].organic == false)){continue;}
			product_names.push(prods[i].name);
		
	}
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}