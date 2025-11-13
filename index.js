//inline Arrow funtions

//  Extra: Didnt commit for two days and i am already forgeting i have been doing, Nevr go a day withot coding  guys//
import { itemsBroughtArr} from './fakeStockAPI.js';

 function calculateTotalCost(itemsBroughtArr){
    const total  = itemsBroughtArr.reduce((total, currentItem) => 
        total+ currentItem.price, 0

    )
    return total
 }
 
 console.log (calculateTotalCost(itemsBroughtArr));






