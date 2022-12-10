const Header = ({ money, total }) => {
    return (

        <div className="w-full flex items-center justify-center bg-green-600 h-14">
        {money-total === 0 ? <div>Kasibsan {money - total}</div> : <div className="text-white text-xl">Balansınız  <span className="font-extrabold">{new Intl.NumberFormat( {
            maximumFractionDigits:0
        }).format(money - total)} $</span></div>}
            
        </div>
    )
}

export default Header