import MenuItem from "../MenuItem/MenuItem"



function Menu() {

    return (
        <div className="menu" onClick={() => onChangeSelectedCategory(props.item.type)}>
            <div className="menu__header">
                <h2 className="menu__title">Наше Меню</h2>
                <div className="menu__line"></div>
            </div>
            <MenuItem />
        </div>
    )
}

export default Menu