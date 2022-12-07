import React, {useEffect, useState} from "react"
import api from "../../../api";
import { paginate } from "../../../utils/paginate";
import Pagination from "../../common/pagination";
import {Link} from "react-router-dom";
import GroupList from "../../common/groupList";
import _ from 'lodash'

// Таблица с историей операций

const OperationsListPage = () => {
    const pageSize = 3
    const [currentPage, setCurrentPage] = useState(1)
    const [operations, setOperations] = useState()
    const [selectedCat, setSelectedCat] = useState()
    const [category, setCategory] = useState()
    useEffect(() => {
        api.operations.fetchAll().then((data) => setOperations(data))
    }, [])

    useEffect(() => {
        api.category.fetchAll().then((data) => setCategory(data))
    }, [])

    useEffect(() => {
        setCurrentPage(1)
    }, [selectedCat])

    const handleCategorySelect = (item) => {
        setSelectedCat(item)
    }

    const handleDelete = id => {
        setOperations(operations.filter(operation => operation._id !== id))
    }

    const handlePageChange = pageIndex => {
        setCurrentPage(pageIndex)
    }

    if (operations) {
        const filteredCategory = selectedCat
            ? operations.filter(
                (operation) =>
                    JSON.stringify(operation.category) ===
                    JSON.stringify(selectedCat)
            )
            : operations
        const count = filteredCategory.length
        const sortedCategory = _.orderBy(filteredCategory)
        const operationCrop = paginate(sortedCategory, currentPage ,pageSize)
        return (
            <div>
                <div className='d-flex align-items-center justify-content-between'>
                    <h1>История операций</h1>
                </div>
                <div className='d-flex align-items-center justify-content-between'>

                            <h1>Фильтрация:</h1>
                    {category && (
                                <GroupList
                                    selectedItem={selectedCat}
                                    items={category}
                                    onItemSelect={handleCategorySelect}
                                />
                        )}

                </div>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">Дата</th>
                        <th scope="col">Категория</th>
                        <th scope="col">Счет</th>
                        <th scope="col">Комментарий</th>
                        <th scope="col">Сумма</th>
                    </tr>
                    </thead>
                    <tbody>
                    {operationCrop.map(item => (
                        <tr className={(item.balance === false ? 'table-danger' : 'table-success')} key={item._id}>
                            <td>
                                <Link to={`/historyOperations/${item._id}`} >
                                    {item.data}
                                </Link>
                            </td>
                            <td>{item.category.name}</td>
                            <td>{item.check.map(c => c.name)}</td>
                            <td>{item.comment}</td>
                            <td>{item.sum} р.</td>
                            <td>
                            <button>Изменить</button>
                            <button className='btn btn btn-danger' onClick={() => handleDelete(item._id)} >Удалить</button>
                            </td>
                        </tr>

                    ))}
                    </tbody>
                </table>
                <div className='d-flex justify-content-center'>
                    <Pagination
                        itemsCount={count}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChange={handlePageChange}
                    />
                </div>

            </div>
        )
    }
    return 'Loading'
}

export default OperationsListPage