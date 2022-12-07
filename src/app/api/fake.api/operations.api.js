import {category} from "./category.api";

const check = {
    card: {
        _id: '1',
        name: 'Карта',
        balance: 500000,
        color: 'secondary'
        },
    money: {
        _id: '2',
        name: 'Наличные',
        balance: 10000,
        color: 'secondary'
    },
}

const operations = [
    {
        _id: '1',
        balance: false,
        data: '01.01.2022',
        category: category.home,
        check: [check.card],
        comment: 'оплата квартиры',
        sum: 5000
    },
    {
        _id: '2',
        balance: false,
        data: '02.01.2022',
        category: category.buy,
        check: [check.card],
        comment: 'купил RTX 4090',
        sum: 150000
    },
    {
        _id: '3',
        balance: false,
        data: '03.01.2022',
        category: category.shop,
        check: [check.money],
        comment: 'еда на неделю',
        sum: 7000
    },
    {
        _id: '4',
        balance: false,
        data: '04.01.2022',
        category: category.work,
        check: [check.money],
        comment: 'обед на работе',
        sum: 300
    },
    {
        _id: '5',
        balance: true,
        data: '10.01.2022',
        category: category.salary,
        check: [check.card],
        comment: 'Зарплата за Декабрь',
        sum: 100000
    },
    {
        _id: '6',
        balance: false,
        data: '11.01.2022',
        category: category.work,
        check: [check.card],
        comment: 'Проезд',
        sum: 50
    },
    {
        _id: '7',
        balance: false,
        data: '13.01.2022',
        category: category.buy,
        check: [check.card],
        comment: 'Телефон и интернет',
        sum: 850
    },
    {
        _id: '8',
        balance: false,
        data: '14.01.2022',
        category: category.buy,
        check: [check.card],
        comment: 'Обед на работе',
        sum: 350
    },
    {
        _id: '9',
        balance: false,
        data: '15.01.2022',
        category: category.buy,
        check: [check.card],
        comment: 'к чаю',
        sum: 500
    },
    {
        _id: '10',
        balance: false,
        data: '16.01.2022',
        category: category.buy,
        check: [check.card],
        comment: 'хоз товары',
        sum: 1500
    },
    {
        _id: '11',
        balance: false,
        data: '17.01.2022',
        category: category.buy,
        check: [check.card],
        comment: 'овощи',
        sum: 500
    },
    {
        _id: '12',
        balance: false,
        data: '18.01.2022',
        category: category.buy,
        check: [check.card],
        comment: 'фрукты',
        sum: 600
    },
    {
        _id: '13',
        balance: false,
        data: '19.01.2022',
        category: category.buy,
        check: [check.card],
        comment: 'всякая ерунда',
        sum: 550
    },
    {
        _id: '14',
        balance: false,
        data: '20.01.2022',
        category: category.buy,
        check: [check.card],
        comment: 'проезд',
        sum: 100
    },
    {
        _id: '15',
        balance: false,
        data: '21.01.2022',
        category: category.buy,
        check: [check.card],
        comment: 'обед на работе',
        sum: 300
    },
    {
        _id: '16',
        balance: false,
        data: '22.01.2022',
        category: category.buy,
        check: [check.card],
        comment: 'Зимняя обувь и куртка',
        sum: 10000
    },
    {
        _id: '17',
        balance: false,
        data: '23.01.2022',
        category: category.buy,
        check: [check.card],
        comment: 'проезд',
        sum: 50
    },
    {
        _id: '18',
        balance: false,
        data: '24.01.2022',
        category: category.buy,
        check: [check.card],
        comment: 'Еда на неделю и хоз товары',
        sum: 10255
    },
    {
        _id: '19',
        balance: false,
        data: '25.01.2022',
        category: category.buy,
        check: [check.card],
        comment: 'купил Uncharted 4 на ПК',
        sum: 3200
    },
    {
        _id: '20',
        balance: false,
        data: '26.01.2022',
        category: category.buy,
        check: [check.card],
        comment: 'Монитор 4К',
        sum: 45000
    }
]
const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(operations);
        }, 2000);
    });
const checkAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(check);
        }, 2000);
    });

const getById = (id) =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(operations.find((operation) => operation._id === id))
        }, 1000)
    })


export default {
    fetchAll,
    getById,
    checkAll
}
