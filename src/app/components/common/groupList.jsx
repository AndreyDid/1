import React from "react"

// Фильтрация или группа категории по которой можно отфильтровать отображене истории операций

const GroupList = ({ items, selectedItem, onItemSelect, valueProperty, contentProperty }) => {
        return (
            <ul className="list-group list-group-horizontal">
                {Object.keys(items).map(item => (
                        <li
                            key={items[item][valueProperty]}
                            className={
                                "list-group-item" +
                                (items[item] === selectedItem ? " active" : "")
                            }
                            onClick={() => onItemSelect(items[item])}
                            role="button"
                        >
                            {items[item][contentProperty]}
                        </li>
                    ))}
            </ul>
        )
}
GroupList.defaultProps = {
    valueProperty: "_id",
    contentProperty: "name"
};

export default GroupList