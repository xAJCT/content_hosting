function Menu({ Items, onSelect })
{
    return (
        <ul id="menu" className="mx-auto p-5 mb-1 fs-4">
            {
                Items.map(
                    (Item, index) => (
                        <li key={index} onClick={() => onSelect(Item)}>
                            {Item.ItemNum}
                        </li>
                    )
                )
            }
        </ul>
    );
}

export default Menu;