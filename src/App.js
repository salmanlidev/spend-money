import { useEffect, useState } from "react";
import BasketList from "./components/BasketList";

//! Components
import Header from "./components/Header";
import Product from "./components/Product";

//! JSON Data
import products from "./product.json";


const App = () => {
  const [money, setMoney] = useState(14000)
  const [basket, setBasket] = useState([])
  const [total, setTotal] = useState(0)

  useEffect(() => {
    setTotal(basket.reduce((acc, item) => {
      return acc + (item.amount * (products.find(pro => pro.id === item.id).price))
    }, 0))
  }, [basket])

  const clearBasket = () => {
    setBasket([])
  }

  return (
    <>
      <Header total={total} money={money} />
      <div className="grid grid-cols-4 mx-auto w-2/3 gap-2 place-items-center my-4">
        {products.map(product => {
          return <Product total={total} key={product.id} basket={basket} setBasket={setBasket} product={product} setMoney={setMoney} money={money} />
        })}
      </div>
      <div className="flex mx-auto w-2/3 gap-5 my-4">
        {basket.length !== 0 && (
          <BasketList total={total} clearBasket={clearBasket} basket={basket} products={products} />
        )}
      </div>


    </>
  );
}

export default App;