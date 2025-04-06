import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faHome } from "@fortawesome/free-solid-svg-icons";

function ProductDetail() {
    const params = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState({});
    const [produtos, setProdutos] = useState([]);
    const [index, setIndex] = useState(0);

    async function getAllProduct() {
        try {
            const response = await fetch(`http://localhost:3001/products`);
            const productResponse = await response.json();
            setProdutos(productResponse);

            const produtoFiltrado = productResponse.find(item => item.id === params.id);
            const actualIndex = productResponse.findIndex(item => item.id === params.id);

            setIndex(actualIndex);
            setProduct(produtoFiltrado);
        } catch (error) {
            console.error("Erro ao buscar produto:", error);
        }
    }

    async function next(id) {
        const indexAtual = produtos.findIndex(item => item.id === id);
        if (indexAtual < produtos.length - 1) {
            const response = await fetch(`http://localhost:3001/products/${produtos[indexAtual + 1].id}`);
            const productResponse = await response.json();
            setProduct(productResponse);
        }
    }

    async function previus(id) {
        const indexAtual = produtos.findIndex(item => item.id === id);
        if (indexAtual > 0) {
            const response = await fetch(`http://localhost:3001/products/${produtos[indexAtual - 1].id}`);
            const productResponse = await response.json();
            setProduct(productResponse);
        }
    }

    useEffect(() => {
        getAllProduct();
    }, [params.id]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200">
            <div className="card w-full max-w-md bg-base-100 shadow-lg p-4">
                <figure className="mb-3 ">
                    <img
                        src={product.photo_url}
                        alt={product.name}
                        className="rounded w-88 object-contain"
                    />
                </figure>
                <div className="text-center b-gray">
                    <h2 className="text-xl font-semibold mb-3">{product.name}</h2>
                    <a className="text-success font-bold">R$ {product.price}</a>
                    <br />
                    <a className="text-sm text-gray-600">{product.description}</a>
                </div>

                <div className="flex justify-between items-center p-2 pt-12">
                    <button
                        className="btn btn-lg btn-primary"
                        onClick={() => navigate('/produto')}
                        title="Início"
                    >
                        <FontAwesomeIcon icon={faHome} />
                    </button>
                    <div className="flex gap-4">
                        <button
                            className="btn btn-lg btn-outline"
                            onClick={() => previus(product.id)}
                            disabled={index === 0}
                        >
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </button>
                        <button
                            className="btn btn-lg btn-outline"
                            onClick={() => next(product.id)}
                            disabled={index === produtos.length - 1}
                        >
                            <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
