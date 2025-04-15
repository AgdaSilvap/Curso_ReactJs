import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { NavLink } from 'react-router-dom';
import CardsGrid from "../components/CardsGrid";
import Pagination from "../components/Pagination";
import productService from '../services/productService';

// Recebe a função onAddToCart como prop
const ProductsPage = ({ onAddToCart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const PRODUCTS_PER_PAGE = 8; // Define quantos produtos por página

  // Usando useQuery para buscar produtos
  const { 
    data, 
    isLoading, 
    isError, 
    error, 
    isPreviousData 
  } = useQuery({
    // Chave da query inclui a página atual para que o React Query refaça a busca quando a página mudar
    queryKey: ['products', currentPage],
    // Função que busca os dados
    queryFn: () => productService.getProducts(currentPage, PRODUCTS_PER_PAGE),
    // Mantém os dados anteriores visíveis enquanto busca os novos, melhora UX
    keepPreviousData: true, 
  });

  // Extrai os dados de produtos e paginação do resultado da query
  const products = data?.products || [];
  const totalPages = data?.totalPages || 1;
  const totalProducts = data?.total || 0;

  // Manipulador para mudança de página
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    window.scrollTo(0, 0); // Rola para o topo ao mudar de página
  };

  if (isLoading) {
    return (
      <div className="text-center my-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Carregando...</span>
        </div>
        <p className="mt-2">Carregando produtos...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="alert alert-danger" role="alert">
        <i className="bi bi-exclamation-triangle me-2"></i>
        Erro ao carregar produtos: {error.message}
      </div>
    );
  }

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1>Produtos</h1>
        <NavLink to="/produtos/novo" className="btn btn-success">
          <i className="bi bi-plus-circle me-2"></i>
          Adicionar Produto
        </NavLink>
      </div>

      {totalProducts > 0 && (
        <p className="text-muted">
          <i className="bi bi-info-circle me-1"></i>
          Mostrando {products.length} de {totalProducts} produtos - Página {currentPage} de {totalPages}
        </p>
      )}

      <CardsGrid
        items={products}
        cols={4} 
        onAddToCart={onAddToCart}
      />

      <Pagination 
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default ProductsPage;