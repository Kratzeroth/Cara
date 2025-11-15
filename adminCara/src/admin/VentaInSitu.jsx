import React, { useState } from 'react';
import Sidebar from '../componentes/sidebar.jsx';
import '../assets/css/pos.css';
export default function VentaInSitu() {
    // Simulamos un carrito de compra
    const [cart, setCart] = useState([]);

    const [searchTerm, setSearchTerm] = useState('');
   
    const addProductToCart = (product) => {
        setCart(currentCart => {
            const existingItem = currentCart.find(item => item.id === product.id);
            if (existingItem) {
                return currentCart.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...currentCart, { ...product, quantity: 1 }];
        });
    };

    const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0).toFixed(2);

    return (
        <div className="layout">
            <Sidebar />

            <div className="content pos-content">
                <h1>🛒 Punto de Venta (Venta In Situ)</h1>
                
                <div className="pos-main-container">
                    
                 
                    <div className="pos-products-panel">
                        <h2>Buscar Productos</h2>
                        <input
                            type="text"
                            placeholder="Buscar por código o nombre..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pos-search-input"
                        />
                        <button 
                            className="pos-quick-btn"
                            onClick={() => addProductToCart({ id: Date.now(), name: "Producto Rápido", price: 15.00 })}
                        >
                            Añadir Producto Rápido (Simulado)
                        </button>
                        
                        <div className="pos-product-list">
                           
                            <p>L¿Mostrar promociones o algunos articulos aleatorios, no c</p>
                        </div>
                    </div>

                    <div className="pos-cart-panel">
                        <h2>Detalle de la Venta</h2>
                        
                    
                        <div className="pos-cart-items">
                            {cart.length === 0 ? (
                                <p>El carrito está vacío. Añade productos.</p>
                            ) : (
                                <ul>
                                    {cart.map(item => (
                                        <li key={item.id}>
                                            {item.name} ({item.quantity} x ${item.price})
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>

             
                        <div className="pos-summary">
                            <h3>Total a Pagar: **${total}**</h3>
                            <button 
                                className="pos-checkout-btn"
                                disabled={cart.length === 0}
                                onClick={() => {
                                    alert(`Venta In Situ completada por $${total}`);
                                    setCart([]); 
                                }}
                            >
                                Finalizar Venta y Cobrar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}