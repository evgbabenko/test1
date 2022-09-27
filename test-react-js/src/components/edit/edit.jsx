import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from "react-router-dom";
import { getItem, saveItem } from '../services/services';


function Edit() {
    const params = useParams();
    const itemId = params.itemid;
    const [item, setItem] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        getItem(itemId).then((data) => { setItem(...data); });
    }, [itemId]);
    const navigateHome = () => {
        // 👇️ navigate to /
        navigate('/');
    };
    const saveData = () => {
        const itemId = document.getElementById('itemId');
        const itemTitle = document.getElementById('itemTitle');
        const itemDescription = document.getElementById('itemDescription');
        const itemPrice = document.getElementById('itemPrice');
        const editedItem = {
            id: itemId.value,
            title: itemTitle.value,
            description: itemDescription.value,
            price: itemPrice.value
        }
        saveItem(editedItem);
        navigateHome();
    }
    return ((!item) ? <></> :
        <>
            <div>Edit</div>
            <section>
                <div className='itemId'>Item Title: <input type="text" readOnly id='itemId' defaultValue={item.id} /></div>
                <div className='itemTitle'>Item Title: <input type="text" id='itemTitle' defaultValue={item.title} /></div>
                <div className='itemDescription'>Item Description: <input type="text" id='itemDescription' defaultValue={item.description} /></div>
                <div className='ItemPrice'>Item Price: <input type="number" id='itemPrice' defaultValue={item.price} /></div>
            </section>
            <div>
                <button onClick={saveData}>Save</button>
                <button onClick={navigateHome}>Cancle</button>
            </div>
        </>
    )
}
export default Edit