import { useEffect, useState } from "react";
import ProductCard from "../components/productCard/ProductCard.jsx";
import { useNavigate } from "react-router-dom";

function ProductPage() {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);

    async function getAllProducts() {
        const response = await fetch(`http://localhost:3001/products`);
        const productsResponse = await response.json();
        setProducts(productsResponse);
    }

    useEffect(() => {
        getAllProducts();
    }, []);

    return (
        <div className="container mx-auto p-6">
            <div 
                className="card bg-base-200 hover:bg-base-300 transition cursor-pointer flex flex-col items-center justify-center p-6 rounded-lg shadow-md mb-6"
                onClick={() => navigate('/addProduto')}
            >
                <span className="text-4xl font-bold text-primary">+</span>
                <p className="text-lg font-semibold">Adicionar Produto</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} refreshProducts={getAllProducts} />
                ))}
            </div>
        </div>
    );
}

export default ProductPage;
