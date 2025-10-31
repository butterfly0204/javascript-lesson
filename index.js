function selectItem(item) {
    let price = 0

    switch(item){
        case 'coffee':
        price = 2
         break
    
        }
        return `you selected ${item}, Tha will be $${price}`

}

console.log(selectItem('coffee'))