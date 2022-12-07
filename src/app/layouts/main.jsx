import React, {useEffect, useState} from "react"
import api from "../api";

const Main = () => {
    const [cards, setCards] = useState()
    useEffect(() => {
        api.operations.checkAll().then((data) => setCards(data))
    }, [])

    if (cards) {
        return (
            <div>
                {cards && (
                    <div>
                        <h1>Главная страница</h1>
                        <div className='d-flex'>
                            <p>Счета</p>
                            <div>+</div>
                        </div>
                        <div>{cards.card.name}: {cards.card.balance}</div>
                        <div>{cards.money.name}: {cards.money.balance}</div>
                        <div>Итого: {`${cards.card.balance + cards.money.balance}`} rub.</div>
                        <div></div>
                    </div>
                )
                }
            </div>
            )
    }
            return 'Loading...'
}
export default Main