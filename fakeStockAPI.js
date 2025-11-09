
export function getStockData() {
    return {
        name: `QtechAI`,
        Sym: `QTA`,
        price: (Math.random() *3).toFixed(2),
        time: new Date().toLocaleDateString()
    }
}

