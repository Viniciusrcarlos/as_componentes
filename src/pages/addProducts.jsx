import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddProducts() {
    const navigate = useNavigate();
    const [previewUrl, setPreviewUrl] = useState("");

    async function createProduct(product) {
        await fetch(`http://localhost:3001/products`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(product),
        });

        navigate(`/produto`);
    }

    function handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const produto = {
            name: formData.get("name"),
            price: formData.get("price"),
            description: formData.get("description"),
            photo_url: formData.get("photo_url"),
        };

        createProduct(produto);
    }

    function handlePreview(event) {
        event.preventDefault();
        const formData = new FormData(event.target.form);
        const photoUrl = formData.get("photo_url");
        setPreviewUrl(photoUrl);
    }

    return (
        <div className="flex justify-center items-center min-h-screen">
            <form 
                onSubmit={handleSubmit} 
                className="w-full max-w-lg p-6 rounded-lg shadow-lg space-y-4"
            >
                <h2 className="text-2xl font-bold text-center mb-4">Cadastrar Produto</h2>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Nome do Produto</span>
                    </label>
                    <input 
                        name="name" 
                        type="text" 
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

                <button type="submit" className="btn btn-success w-full">
                    Cadastrar
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

export default AddProducts;
