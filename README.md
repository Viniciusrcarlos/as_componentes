# 📦 React CRUD - Projeto de Gerenciamento de Produtos

Este é um projeto prático desenvolvido em **React** que simula um sistema de gerenciamento de produtos com funcionalidades completas de **CRUD** (Create, Read, Update, Delete). A aplicação permite adicionar, visualizar, editar e excluir produtos de forma simples e intuitiva.

---

## 🚀 Funcionalidades

- ✅ Adicionar novos produtos
- 🔍 Visualizar todos os produtos cadastrados
- ✏️ Editar produtos existentes
- ❌ Excluir produtos
- 🌙 Suporte a modo claro e escuro (DaisyUI)
- 💡 Pré-visualização de imagem via URL

---

## 🛠️ Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [React Router DOM](https://reactrouter.com/)
- [DaisyUI](https://daisyui.com/) + [TailwindCSS](https://tailwindcss.com/)
- [JSON Server](https://github.com/typicode/json-server) (fake API para simular backend)

---



## 📦 Instalação e Execução

### 1. Clone o repositório

```bash
git https://github.com/Viniciusrcarlos/as_componentes.git
cd as_componentes
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Inicie o JSON Server (backend fake)

```bash
npm run server
```

### 4. Rode o projeto React

```bash
npm run dev
```

> Acesse o app em: [http://localhost:5173](http://localhost:5173)

---

## 📁 Estrutura do Projeto

```
src/
├── components/                # Componentes reutilizáveis da aplicação
│   ├── header/               # Componentes relacionados ao cabeçalho
│   │   └── Header.jsx        # Componente principal do cabeçalho
│   ├── productCard/          # Componentes relacionados aos cards de produtos
│   │   └── ProductCard.jsx   # Componente que exibe informações resumidas de um produto
│
├── layout/                   # Layouts gerais usados nas páginas
│   ├── MainLayout.jsx        # Layout principal da aplicação
│   └── ProductLayout.jsx     # Layout específico para páginas de produto
│
├── pages/                    # Páginas da aplicação
│   ├── addProducts.jsx       # Página para adicionar novos produtos
│   ├── EditProduct.jsx       # Página para editar produtos existentes
│   ├── ErrorPage.jsx         # Página exibida em caso de erro (404, etc)
│   ├── HomePage.jsx          # Página inicial
│   ├── ProductDetail.jsx     # Página de detalhes de um produto específico
│   ├── ProductPage.jsx       # Página que lista os produtos
│   └── SobrePage.jsx         # Página com informações sobre a aplicação
│
├── routes/                   # Arquivo de configuração das rotas
│   └── CustomRoutes.jsx      # Define as rotas e os componentes associados
│
├── App.jsx                   # Componente principal da aplicação
├── main.jsx                  # Ponto de entrada da aplicação React
├── App.css                   # Estilos globais da aplicação
└── index.css                 # Estilos adicionais utilizados pelo projeto


```

---

## ✨ Diferenciais

- Utilização de componentes reutilizáveis
- Estilização responsiva com Tailwind e DaisyUI
- Estrutura limpa e organizada
- Navegação entre páginas com React Router

---

## 🧑‍💻 Autor

Desenvolvido por **Vinicius Raupp** ✌️  
Se quiser bater um papo, me chama no [LinkedIn](https://www.linkedin.com/in/vinicius-raupp-152a68233/)

---