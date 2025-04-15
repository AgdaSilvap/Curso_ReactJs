import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Importa componentes do router

// Importa os componentes de layout e páginas
import Footer from "../components/Footer";
import Header from "../components/Header";
import HomePage from './HomePage'; // Importa a nova página Home
import ProductsPage from './ProductsPage'; // Importa a nova página Produtos
import ClientsPage from './ClientsPage'; // Importa a nova página de Clientes
import CreateProductPage from './CreateProductPage'; // Importa a página de criação de produtos
// CardsGrid não é mais usado diretamente aqui, mas sim dentro das páginas

function App() {
  // Inicializa o estado para a contagem de itens no carrinho
  // useState(0) define o valor inicial como 0
  // cartItemCount: a variável que guarda o valor atual do estado
  // setCartItemCount: a função para atualizar o valor do estado
  const [cartItemCount, setCartItemCount] = useState(0);

  // Função chamada quando o botão "Adicionar ao Carrinho" em um Card é clicado
  const handleAddToCart = (product) => {
    // Atualiza o estado, incrementando a contagem anterior (prevCount)
    setCartItemCount(prevCount => prevCount + 1);
    // Exibe o produto adicionado no console (apenas para demonstração)
    console.log("Adicionado ao carrinho:", product.title);
    // Em uma aplicação real, aqui você adicionaria o produto a um array de carrinho, etc.
  };

  // O componente App agora configura o roteador e o layout principal
  return (
    <BrowserRouter> {/* Envolve toda a aplicação com o BrowserRouter */}
      <div className="d-flex flex-column min-vh-100"> {/* Mantém o layout flex para o footer */}
        {/* Header fica fora das Routes para ser exibido em todas as páginas */}
        <Header cartCount={cartItemCount} />

        {/* O container principal agora envolve as rotas */}
        <main className="container my-4 flex-grow-1">
          <Routes> {/* Define a área onde as rotas serão renderizadas */}
            {/* Rota para a Home Page */}
            <Route
              path="/"
              element={<HomePage onAddToCart={handleAddToCart} />}
            />
            {/* Rota para a Página de Produtos */}
            <Route
              path="/produtos"
              element={<ProductsPage onAddToCart={handleAddToCart} />}
            />
            {/* Rota para a Página de Novo Produto */}
            <Route
              path="/produtos/novo"
              element={<CreateProductPage />}
            />
            {/* Rota para a Página de Clientes */}
            <Route
              path="/clientes"
              element={<ClientsPage />}
            />
            {/* Adicionar outras rotas aqui (ex: /sobre, /contato, /produto/:id) */}
            {/* Rota "catch-all" para página não encontrada (opcional) */}
            {/* <Route path="*" element={<NotFoundPage />} /> */}
          </Routes>
        </main>

        {/* Footer também fica fora das Routes */}
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App;