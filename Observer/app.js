import Stock from './stock.js';
import StockObserver from './observer.js';

const googleStock = new Stock('GOOGL');
const investor1 = new StockObserver('Investor 1');
const investor2 = new StockObserver('Investor 2');

googleStock.addObserver(investor1);
googleStock.addObserver(investor2);

googleStock.setPrice(1500); // Both investors get notified
googleStock.setPrice(1600); // Both investors get notified again