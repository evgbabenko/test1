import React from 'react'
import { useNavigate } from 'react-router-dom';
import { addItem } from '../services/services';

function CreateItem() {
    const navigate = useNavigate();
    const navigateHome = () => {
        // 👇️ navigate to /
        navigate('/');
    };
    const saveData = () => {
        const itemId = document.getElementById('itemId');
        const itemTitle = document.getElementById('itemTitle');
        const itemDescription = document.getElementById('itemDescription');
        const itemPrice = document.getElementById('itemPrice');
        if (itemId.value > 1 && itemTitle.value > 1 && itemDescription.value && itemPrice.value > 1) {
            addItem(itemId.value, itemTitle.value, itemDescription.value, itemPrice.value);
            navigateHome();
        }
        else {
            alert('Oner or more empty filed(s).')
        }
    }
    return (
        <>
            <div>Create View</div>
            <section>
                <div className='itemId'>Item Id: <input type="text" id='itemId' /></div>
                <div className='itemTitle'>Item Title: <input type="text" id='itemTitle' /></div>
                <div className='itemDescription'>Item Description: <input type="text" id='itemDescription' /></div>
                <div className='ItemPrice'>Item Price: <input type="number" id='itemPrice' /></div>
            </section>
            <div>
                <button onClick={saveData}>Save</button>
                <button onClick={navigateHome}>Cancle</button>
            </div>
        </>
    )
}
export default CreateItem;