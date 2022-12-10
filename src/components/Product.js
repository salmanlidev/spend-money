const Product = ({product , money , setBasket , basket , total}) => {

    const basketItem = basket.find(item => product.id === item.id)


    const handleBuy = () => {
        const checkBasket = basket.find(item => item.id === product.id)
        if(checkBasket){
            checkBasket.amount += 1
            setBasket([...basket.filter(item => item.id !== product.id) , checkBasket])
        }
        else{
            setBasket([...basket , {
                id:product.id,
                amount:1
            }])
        }
    }

    const handleSell = () => {
        const checkBasket = basket.find(item => item.id === product.id)
        checkBasket.amount -= 1
        if(checkBasket.amount === 0){
            setBasket([...basket.filter(item => item.id !== product.id)])
        }
        else{
            setBasket([...basket.filter(item => item.id !== product.id) , checkBasket])
        }
    }

    return(
        <div className="w-72 flex flex-col items-center justify-between bg-white rounded-xl py-3 shrink-0">
            <img src={product.url} alt={product.name} className="w-64 h-64 rounded-lg"/>
            <h1 className="text-2xl font-bold">{product.name}</h1>
            <h4 className="text-lg font-bold text-green-500">${product.price}</h4>
            <div className="flex mt-3">
                <button disabled={(basketItem && basketItem.amount === 0) || !basketItem} onClick={handleSell} className="w-16 rounded-l-lg text-white bg-red-500 font-mono font-bold text-xl disabled:bg-gray-200">Sell</button>
                <span className="border p-2 w-10 flex items-center justify-center">{basketItem && basketItem.amount || 0}</span>
                <button disabled={total + product.price > money} onClick={handleBuy} className="w-16 rounded-r-lg text-white bg-blue-500 font-mono font-bold text-xl disabled:bg-blue-300">Buy</button>
            </div>
        </div>
    )
}


export default Product;