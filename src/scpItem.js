function Item({ selectedItem })
{
    return (
        <div className="mx-auto p-5">
            <p><img id="img" src={selectedItem.Image} className="border border-white" alt={selectedItem.ItemNum} /></p>
            <h1 id="num" className="badge text-bg-danger text-light fs-2 m-4">{selectedItem.ItemNum}</h1>
            <p className="badge text-bg-secondary text-light fs-2 mb-3 mb-5"><strong>Class: </strong>{selectedItem.Class}</p>
            <p id="containment" class="mx-auto p-2 border border-info p-3 mb-5 fs-5"><strong className="badge text-bg-info text-light fs-5 m-2">Containment:</strong>{selectedItem.Containment}</p>
            <p id="description" class="mx-auto border border-info p-3 fs-5"><strong className="badge text-bg-info text-light fs-5 m-2">Description:</strong>{selectedItem.Description}</p>
        </div>
    );
}

export default Item;