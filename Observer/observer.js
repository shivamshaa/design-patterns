class StockObserver {
    constructor(name) {
        this.name = name;
    }

    update(stock) {
        console.log(`${this.name} notified. ${stock.symbol} is now ${stock.price}`);
    }
}