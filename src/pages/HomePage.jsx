import { useState, useEffect } from 'react';
import CardsGrid from "../components/CardsGrid";
import productService from '../services/productService';

// Recebe a função onAddToCart como prop
const HomePage = ({ onAddToCart }) => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Função para carregar os produtos em destaque (ex: os 4 primeiros)
    const loadFeaturedProducts = async () => {
      try {
        setLoading(true);
        // Busca apenas a primeira página com limite de 4 produtos
        const { products } = await productService.getProducts(1, 4);
        setFeaturedProducts(products || []);
        setError(null);
      } catch (err) {
        console.error('Erro ao carregar produtos em destaque:', err);
        setError('Não foi possível carregar os produtos.');
      } finally {
        setLoading(false);
      }
    };

    loadFeaturedProducts();
  }, []);

  return (
    <div>
      <h1 className="mb-4">Bem-vindo à React Shop</h1>
      <p className="lead">Confira nossos produtos em destaque:</p>
      
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
      
      {!loading && !error && featuredProducts.length === 0 && (
        <div className="alert alert-info" role="alert">
          Nenhum produto em destaque encontrado.
        </div>
      )}
      
      {!loading && !error && featuredProducts.length > 0 && (
        <CardsGrid
          title="Produtos em Destaque"
          items={featuredProducts}
          cols={4} // 4 colunas na home page
          onAddToCart={onAddToCart}
        />
      )}
      
      {/* Você pode adicionar mais seções aqui, como categorias, banners, etc. */}
    </div>
  );
};

export default HomePage;