import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Product.css';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5005/api/products')
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the products!', error);
            });
    }, []);

    // Function to handle add to cart
    const handleAddToCart = (product) => {
        alert(`${product.name} has been added to your cart!`);
        // Here you can also add logic to update the cart, if needed
    };

    return (
        <div className='product-list'>
            <ul>
                {products.map(product => (
                    <li key={product._id}>
                        <img src={product.imageUrl} alt={product.name} className='product-image' />
                        <div className='product-details'>
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                            <h4>${product.price}</h4>
                            <button className='add-to-cart' onClick={() => handleAddToCart(product)}>
                                Add to Cart
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
        
    );
};

export default ProductList;
