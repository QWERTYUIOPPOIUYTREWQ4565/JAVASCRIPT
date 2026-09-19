function createProduct(name, price){
    let stock = 10;
    return {
        name,
        price,
        checkStock(){
            console.log(stock);
        },
        buy(qty) {
            if(qty <= stock){
                stock -= qty;
                console.log(`${qty} pieces booked -${stock} pieces left.`);
            }else {
                console.error(`We only have ${stock} pieces left.`);
            }
        },
    refill(qty){
        stock += qty;
        console.log(`refilled the stock -${stock} pieces now.`);
    },
    };
}

let iphone = createProduct("iphone" , 70000);
iphone.buy(6);
