import { useState, useEffect } from 'react';
import CardsGrid from "../components/CardsGrid";
import productService from '../services/productService';

// Recebe a função onAddToCart como prop
const ProductsPage = ({ onAddToCart }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    totalProducts: 0,
  });

  // Função para carregar os produtos
  const loadProducts = async (page = 1) => {
    try {
      setLoading(true);
      const { products, total, totalPages } = await productService.getProducts(page);
      setProducts(products || []);
      setPagination({
        currentPage: page,
        totalPages: totalPages || 1,
        totalProducts: total || 0,
      });
      setError(null);
    } catch (err) {
      console.error('Erro ao carregar produtos:', err);
      setError('Não foi possível carregar a lista de produtos.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProducts(pagination.currentPage);
  }, [pagination.currentPage]); // Recarrega quando a página atual mudar

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= pagination.totalPages) {
      setPagination(prev => ({ ...prev, currentPage: newPage }));
    }
  };

  return (
    <div>
      <h1 className="mb-4">Produtos</h1>
      
      {loading && (
        <div className="d-flex justify-content-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Carregando...</span>
          </div>
        </div>
      )}
      
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
      
      {!loading && !error && products.length === 0 && (
        <div className="alert alert-info" role="alert">
          Nenhum produto encontrado.
        </div>
      )}
      
      {!loading && !error && products.length > 0 && (
        <>
          <CardsGrid
            title="Todos os Produtos"
            items={products}
            cols={4} // Mantém 4 colunas na página de produtos
            onAddToCart={onAddToCart}
          />

          {/* Paginação */}
          {pagination.totalPages > 1 && (
            <nav aria-label="Navegação de página de produtos" className="mt-4">
              <ul className="pagination justify-content-center">
                <li className={`page-item ${pagination.currentPage === 1 ? 'disabled' : ''}`}>
                  <button 
                    className="page-link" 
                    onClick={() => handlePageChange(pagination.currentPage - 1)}
                  >
                    Anterior
                  </button>
                </li>
                {[...Array(pagination.totalPages).keys()].map(num => (
                  <li key={num + 1} className={`page-item ${pagination.currentPage === num + 1 ? 'active' : ''}`}>
                    <button 
                      className="page-link" 
                      onClick={() => handlePageChange(num + 1)}
                    >
                      {num + 1}
                    </button>
                  </li>
                ))}
                <li className={`page-item ${pagination.currentPage === pagination.totalPages ? 'disabled' : ''}`}>
                  <button 
                    className="page-link" 
                    onClick={() => handlePageChange(pagination.currentPage + 1)}
                  >
                    Próximo
                  </button>
                </li>
              </ul>
            </nav>
          )}
        </>
      )}
    </div>
  );
};

export default ProductsPage;