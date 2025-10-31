function selectItem(item) {
    let price = 0

    switch(item){
        case 'coffee':
             price = 2
             break

         case 'lemon cake':
             price = 3
             break

        case 'salad':
             price = 4
             break
        case 'sandwiches':
             price = 5
             break
        
    
        }
        return `you selected ${item}, Tha will be $${price}`

       


}

console.log(selectItem('coffee'))
console.log(selectItem('salad'))
console.log(selectItem('lemon cake'))
console.log(selectItem('sandwiches'))