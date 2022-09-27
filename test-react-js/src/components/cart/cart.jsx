import React, { useEffect, useState } from 'react';
import { getCart, removeFromCart, changeQty } from '../services/services';

const Cart = () => {
    const [products, setProducts] = useState(null);
    const [filter, setFilter] = useState('');
    const [total, setTotal] = useState(0)

    useEffect(() => {
        getCart(filter).then((data) => { setProducts(data); })
    }, [products])
    return (
        (products == null || products.length === 0) ?
            <main>
                <div>
                    <h4>Cart View</h4>
                </div>
                <div>
                    <h4>Cart is empty</h4>
                </div>
            </main>
            :
            <main>
                <div className='filter'>
                    <input onChange={e => setFilter(e.target.value)} className='inputSearch' placeholder='search...' name='searchField' />
                </div>
                <div>
                    <h4>Cart View</h4>
                </div>
                <section className='products'>
                    {products.map((item, index) => {
                        return (
                            <article className='product' key={`${index}-${item.id}`}>
                                <div className='picture'>
                                    <img alt="" src='https://upload.wikimedia.org/wikipedia/commons/f/f5/Mediq_Sverige_Kungsbacka_warehouse.jpg' />
                                </div>
                                <div className='title'>
                                    Title: {item.title}
                                </div>
                                <div className='price'>
                                    Price: {item.price}
                                </div>
                                <div className='price'>
                                    Q-ty: {item.qty}
                                </div>
                                <div className='description'>
                                    <h5>{item.description}</h5>
                                </div>
                                <div className='buttons'>
                                    <button className={(item.qty === 1 || item.qty < 1) ? 'disabled' : ''} onClick={() => { if (item.qty > 1) changeQty(item.id, 'minus', item.qty) }}>
                                        -1
                                    </button>
                                    <button onClick={() => { removeFromCart(item.id) }}>Delete</button>
                                    <button onClick={() => { changeQty(item.id, 'add', item.qty) }}>+1</button>
                                </div>
                            </article>
                        )
                    })}
                </section>
                <div>
                    <h4>Total: {total}</h4>
                </div>
            </main>
    )
}

export default Cart;