import React, { useEffect, useState } from 'react';
import { getData, delItem, addToCart } from '../services/services';
import { Link } from "react-router-dom";
import './main.css';


const Main = () => {
    const [products, setProducts] = useState([]);
    const [filter, setFilter] = useState('');
    const [page, setPage] = useState(1);
    const pagination = 10;

    useEffect(() => {
        getData(page, pagination, filter).then((data) => { setProducts(data) })
    }, [products, page])
    let response = products.length;

    return (
        (!products) ? (<></>) :
            <main>
                <div className='filter'>
                    <input onChange={e => setFilter(e.target.value)} className='inputSearch' placeholder='search...' name='searchField' />
                    <Link to='createitem'><button>Create Item</button></Link>
                    <Link to='cartview'><button>View cart</button></Link>
                </div>
                <div>Page:
                    <button className={(page === 1 || page < 1) ? 'disabled' : ''} onClick={() => { (page === 1) ? setPage(1) : setPage(page - 1) }}>Prev page</button>
                    <button className={(response < 10) ? 'disabled' : ''} onClick={() => { (response < 10) ? setPage(page) : setPage(page + 1) }}>Next Page</button>
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
                                <div className='description'>
                                    <h5>{item.description}</h5>
                                </div>
                                <div className='buttons'>
                                    <Link to={`/edit/${item.id}`}>
                                        <button>Edit</button>
                                    </Link>
                                    <button onClick={() => { delItem(item.id) }}>Delete</button>
                                    {(item.inCart) ?
                                        <button className='disabled' disabled>Add to cart</button>
                                        :
                                        <button onClick={() => { addToCart(item.id) }}>Add to cart</button>
                                    }
                                </div>
                            </article>
                        )
                    })}
                </section>
            </main>
    )
}

export default Main;