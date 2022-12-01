import React from 'react';
import '../styles/components/pages/ProductosPage.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ProductoItem from '../components/productos/ProductoItem';

const ProductosPage = (props) => {

    const [loading, setLoading] = useState(false);
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const cargarProductos = async () => {
            setLoading(true);
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/productos`);
            setProductos(response.data);
            setLoading(false);
        };

        cargarProductos();
    }, []);

    return (
        <section className='holder'>
            <h2>Productos</h2>
            {loading ? (
                <p>Cargando...</p>
            ) : (
                productos.map (item => <ProductoItem key={item.id} nombre={item.name} titulo={item.title} descripcion={item.description} 
                    stock={item.stock} precio={item.price} imagen={item.imagen} />)
            )}
        </section>
    );

}

export default ProductosPage;