const _data_url = 'http://localhost:3000/products';

// Get Catalogue function
async function getData(page, limit, sort) {
    let url;
    if (!sort || sort === '') {
        url = `${_data_url}/?_page=${page}&_limit=${limit}`;
    }
    else {
        url = `${_data_url}/?title_like=${sort}&_page=${page}&_limit=${limit}`;
    }
    const info = await fetch(url);

    if (info.status > 300 || info.status < 199) {
        throw new Error(`Error ${info.status.text}:${info.status}`);
    }
    return await info.json();
}

//Get item function
async function getItem(itemId) {
    let url = `${_data_url}/?id_like=${itemId}`;
    const info = await fetch(url);
    if (info.status > 300 || info.status < 199) {
        throw new Error(`Error ${info.status.text}:${info.status}`);
    }
    return await info.json();
}

//Delete function
async function delItem(id) {
    await fetch(`${_data_url}/${id}`, {
        method: 'DELETE'
    })
}

//Add new Item
async function addItem(itemid, itemTitle, itemDescription, itemPrice) {
    await fetch(`${_data_url}`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "id": itemid,
            "title": itemTitle,
            "description": itemDescription,
            "price": itemPrice,
            "inCart": false
        })
    })

}

//Save item function
async function saveItem(item) {
    await fetch(`${_data_url}/${item.id}`, {
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "id": item.id,
            "title": item.title,
            "description": item.description,
            "price": item.porice,
            "inCart": false
        })
    }
    )
}

//Add to cart function
async function addToCart(id) {
    await fetch(`${_data_url}/${id}`, {
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "inCart": true,
            "qty": 1
        })
    }
    )
}

//Add to cart function
async function removeFromCart(id) {
    await fetch(`${_data_url}/${id}`, {
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "qty": 0,
            "inCart": false
        })
    }
    )
}

// Get Catalogue function
async function getCart(sort) {
    let url;
    if (!sort || sort === '') {
        url = `${_data_url}/?inCart=true`;
    }
    else {
        url = `${_data_url}/?inCart=true&title_like=${sort}`;
    }
    const info = await fetch(url);
    if (info.status > 300 || info.status < 199) {
        throw new Error(`Error ${info.status.text}:${info.status}`);
    }
    return await info.json();
}

async function changeQty(id, action, qty) {
    switch (action) {
        case 'add': {
            let newqty = qty + 1;
            await fetch(`${_data_url}/${id}`, {
                method: 'PATCH',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "qty": newqty
                })
            }
            );
        } break;
        case 'minus': {
            let newqty = qty - 1;
            await fetch(`${_data_url}/${id}`, {
                method: 'PATCH',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "qty": newqty
                })
            }
            );
        } break;
        default: break;
    }
}



export { getData, delItem, addToCart, addItem, getItem, saveItem, getCart, removeFromCart, changeQty };