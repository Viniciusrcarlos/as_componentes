import { useNavigate } from "react-router-dom";

function ProductCard({ product, refreshProducts }) {
    const navigate = useNavigate();

    async function deleteProduct(productId) {
        await fetch(`http://localhost:3001/products/${productId}`, {
            method: "DELETE",
        });
        refreshProducts();
        navigate(`/produto`);
    }

    function handleChange(event) {
        navigate("/produto/editar", { state: product });
    }

    return (
        <div className="card card-bordered bg-base-100 shadow-xl p-4">
            <div className="card-body">
                <div className="flex justify-between items-center">
                    <button
                        className="btn btn-sm btn-primary"
                        onClick={() => handleChange(event)}
                    >
                        Editar
                    </button>
                    <button
                        className="btn btn-sm btn-secondary"
                        onClick={() => deleteProduct(product.id)}
                    >
                        Excluir
                    </button>
                </div>
                <img
                    src={product.photo_url}
                    alt={product.name}
                    className="rounded-lg w-full object-cover h-48"
                />
                <h1 className="card-title text-xl">{product.name}</h1>
                <h2 className="text-lg font-semibold text-green-500">
                    R$ {product.price}
                </h2>
                <button
                    className="btn btn-accent w-full mt-4"
                    onClick={() => navigate(`/produto/${product.id}`)}
                >
                    Detalhes
                </button>
            </div>
        </div>
    );
}

export default ProductCard;
