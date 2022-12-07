export const category = {
    buy: {
        _id: '1',
        name: 'Покупки'
    },
    shop: {
        _id: '2',
        name: 'Магазин'
    },
    home: {
        _id: '3',
        name: 'Дом'
    },
    work: {
        _id: '4',
        name: 'Работа'
    },
    salary: {
        _id: '5',
        name: 'Зарплата'
    },
}

const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(category);
        }, 2000);
    });

export default {
    fetchAll
}