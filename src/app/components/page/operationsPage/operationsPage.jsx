import React, {useEffect, useState} from "react"
import {useHistory} from "react-router-dom";
import api from "../../../api";

const OperationsPage = ({ operationsId }) => {
    const history = useHistory()
    const [operation, setOperation] = useState()
    useEffect(() => {
        api.operations.getById(operationsId).then((data) => setOperation(data))
    })
    const handleClick = () => {
        history.push('/historyOperations')
    }
    if (operation) {
        return (
            <>
                    {operation.balance === false ? <h1>Расход</h1> : <h1>Доход</h1>}
                <div>
                        <h2>Число: {operation.data}</h2>
                        <div>Счет: {operation.check.map(c => c.name)}</div>
                        <div>Категория: {operation.category.name}</div>
                        <div>Коментарий: {operation.comment}</div>
                        <h3>Сумма: {operation.sum} р.</h3>
                </div>
                <button onClick={handleClick}>Все операции</button>

            </>
        )

    } else {
        return <>Загрузка</>
    }
}

export default OperationsPage