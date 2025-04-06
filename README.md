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
├── components/
│   ├── header/
│   │   └── Header.jsx
│   ├── productCard/
│   │   └── ProductCard.jsx
│
├── layout/
│   ├── MainLayout.jsx
│   └── ProductLayout.jsx
│
├── pages/
│   ├── addProducts.jsx
│   ├── EditProduct.jsx
│   ├── ErrorPage.jsx
│   ├── HomePage.jsx
│   ├── ProductDetail.jsx
│   ├── ProductPage.jsx
│   └── SobrePage.jsx
│
├── routes/
│   └── CustomRoutes.jsx
│
├── App.jsx
├── main.jsx
├── App.css
└── index.css

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