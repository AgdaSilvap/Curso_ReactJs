import { useEffect, useState } from 'react';
import ClientsTable from '../components/ClientsTable';
import clientService from '../services/clientService';

const ClientsPage = () => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadClients = async () => {
      try {
        setLoading(true);
        const { clients } = await clientService.getClients();
        setClients(clients || []);
        setError(null);
      } catch (err) {
        console.error('Erro ao carregar clientes:', err);
        setError('Não foi possível carregar a lista de clientes. Certifique-se de que a tabela "clientes" foi criada no Supabase.');
      } finally {
        setLoading(false);
      }
    };

    loadClients();
  }, []);

  return (
    <div>
      <h1 className="mb-4">Clientes</h1>
      
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
      
      {!loading && !error && clients.length === 0 && (
        <div className="alert alert-info" role="alert">
          Nenhum cliente encontrado. É necessário cadastrar clientes no Supabase usando o script de população de clientes.
        </div>
      )}
      
      {!loading && !error && clients.length > 0 && (
        <ClientsTable 
          title="Todos os Clientes" 
          clients={clients} 
        />
      )}
    </div>
  );
};

export default ClientsPage; 