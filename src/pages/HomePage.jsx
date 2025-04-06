function HomePage() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-base-200">
            <div className="card bg-base-100 shadow-xl max-w-2xl p-6 text-base-content">
                <h1 className="text-3xl font-bold text-primary mb-4">Bem-vindo! 👋</h1>
                <p className="text-base leading-relaxed">
                    Aqui você encontra um projeto prático que desenvolvi utilizando <span className="font-semibold text-secondary">React</span>: um CRUD completo, com funcionalidades de 
                    <span className="badge badge-success mx-1">criação</span> 
                    <span className="badge badge-info mx-1">leitura</span> 
                    <span className="badge badge-warning mx-1">atualização</span> e 
                    <span className="badge badge-error mx-1">exclusão</span> de dados.
                </p>
                <p className="mt-3">
                    Esse projeto foi desenvolvido com o objetivo de demonstrar minhas habilidades com React, além de explorar conceitos importantes como gerenciamento de estado, manipulação de formulários e interatividade.
                </p>
            </div>
        </div>
    );
}


export default HomePage;
