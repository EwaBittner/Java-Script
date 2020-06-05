const TAX_RATE = 0.08;

var bank_account = 200;
var price = 25;
var purchase = 0;
var total = 0; 
while (bank_account > price) {
    price_w_tax = price + price * TAX_RATE;
    total = total + price_w_tax;
    bank_account = bank_account - price_w_tax;
    purchase++;
    console.log( "You purchased an item! Your saldo is: ", bank_account );
    console.log( "The total price with tax is: ", total);
    console.log( "You bought ", purchase, " items." );
}
console.log("Done");
