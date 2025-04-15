// Salve como populate-db.js e execute com Node.js
import { createClient } from '@supabase/supabase-js';

// Substitua com suas credenciais do Supabase
const supabaseUrl = 'https://nabsfdubivczsefmbrqn.supabase.co';
// Use a chave de serviço (service_role) em vez da chave anônima
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5hYnNmZHViaXZjenNlZm1icnFuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ3MTUzODMsImV4cCI6MjA2MDI5MTM4M30.Xq983X7bVPKueQvMdmJFChLrYlpPgBhBTEcTPVVWzYg'; // Você precisa obter esta chave no painel do Supabase
const supabase = createClient(supabaseUrl, supabaseKey);

const products = [
  {
    title: 'Teste',
    description: 'Smartphone de última geração com câmera de 108MP e tela AMOLED de 6.7.',
    price: 2499.90,
    image: 'https://picsum.photos/300/200?random=1'
  },
  // ... adicione os outros 23 produtos aqui
];

async function insertProducts() {
  for (const product of products) {
    const { data, error } = await supabase
      .from('products')
      .insert([product]);
    
    if (error) {
      console.error('Erro ao inserir produto:', product.title, error);
    } else {
      console.log('Produto inserido com sucesso:', product.title);
    }
  }
}

insertProducts()
  .then(() => console.log('Todos os produtos foram inseridos!'))
  .catch(err => console.error('Erro:', err));