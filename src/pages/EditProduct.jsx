import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function EditProduct() {
    const navigate = useNavigate();
    const location = useLocation();
    const product = location.state;
    const [previewUrl, setPreviewUrl] = useState(product.photo_url);

    async function editProduct(produto) {
        await fetch(`http://localhost:3001/products/${produto.id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(produto),
        });

        navigate(`/produto`);
    }

    function handlePreview(event) {
        event.preventDefault();
        const formData = new FormData(event.target.form);
        const photoUrl = formData.get("photo_url");
        setPreviewUrl(photoUrl);
    }

    async function handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const produtoAtualizado = {
            id: product.id,
            name: formData.get("name"),
            price: formData.get("price"),
            description: formData.get("description"),
            photo_url: formData.get("photo_url"),
        };

        await editProduct(produtoAtualizado);
    }

    return (
        <div className="flex justify-center items-center min-h-screen">
            <form 
                onSubmit={handleSubmit} 
                className="w-full max-w-lg p-6 rounded-lg shadow-lg space-y-4"
            >
                <h2 className="text-2xl font-bold text-center mb-4">Editar Produto</h2>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Nome do Produto</span>
                    </label>
                    <input 
                        name="name" 
                        type="text" 
                        defaultValue={product.name} 
                        placeholder="Nome do Produto" 
                        className="input input-bordered w-full" 
                        required 
                    />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Preço</span>
                    </label>
                    <input 
                        name="price" 
                        type="number" 
                        step="0.01" 
                        defaultValue={product.price} 
                        placeholder="Preço" 
                        className="input input-bordered w-full" 
                        required 
                    />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Descrição</span>
                    </label>
                    <input 
                        name="description" 
                        type="text" 
                        defaultValue={product.description} 
                        placeholder="Descrição" 
                        className="input input-bordered w-full" 
                        required 
                    />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">URL da Imagem</span>
                    </label>
                    <div className="flex items-center space-x-2">
                        <input 
                            name="photo_url" 
                            type="url" 
                            defaultValue={product.photo_url} 
                            placeholder="URL da Imagem" 
                            className="input input-bordered w-full" 
                            required 
                        />
                        <button 
                            type="button" 
                            onClick={handlePreview} 
                            className="btn btn-primary"
                        >
                            Pré-visualizar
                        </button>
                    </div>
                </div>

                <button type="submit" className="btn btn-warning w-full">
                    Salvar Alterações
                </button>

                {previewUrl && (
                    <div className="mt-4 text-center">
                        <h3 className="font-semibold">Pré-visualização da Imagem:</h3>
                        <img 
                            src={previewUrl} 
                            alt="Pré-visualização" 
                            className="mt-2 rounded-lg shadow-md w-full max-h-60 object-cover"
                        />
                    </div>
                )}
            </form>
        </div>
    );
}

export default EditProduct;
