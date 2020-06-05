var bank_account = 200;
var price = 25;
var purchase = 0;
while (bank_account > price) {
    bank_account = bank_account - price;
    purchase = purchase + 1;
    console.log( "You purchased an item! Your saldo is: ", bank_account );
    console.log( "You bought ", purchase, " items." );
}