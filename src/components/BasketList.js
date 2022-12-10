import Basket from "./Basket";


const BasketList = ({basket, products , clearBasket , total}) => {
    return (
        <div className="w-full bg-white rounded-xl py-4 px-8 flex flex-col gap-2">
            <div className="text-3xl font-bold font-mono text-center">Səbətiniz</div>
            <div className=" border-y py-5">
            {basket.map((item)=> {
                return (<Basket key={item.id} name={products.find(p => p.id === item.id).name} amount={item.amount} />)
            })}
            <div className="text-2xl mt-5 font-bold">Yekun: <span className="text-xl">{total} AZN</span></div>
            </div>
            
            <button className="bg-red-600 w-30 h-10 self-end w-40 rounded-2xl text-white" onClick={clearBasket}>Clear Basket</button>
        </div>
    )
}

export default BasketList;