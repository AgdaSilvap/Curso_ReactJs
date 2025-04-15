import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';

dotenv.config();

// Função para criar clientes fictícios
const populateClients = async () => {
  // Configure o cliente Supabase diretamente aqui
  const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
  const supabaseKey = process.env.VITE_SUPABASE_API_KEY || process.env.SUPABASE_API_KEY;
  const supabase = createClient(supabaseUrl, supabaseKey);

  const clients = [
    { nome: 'Ana Silva', data_nascimento: '1990-05-15', email: 'ana.silva@email.com', telefone: '(11) 98765-4321', image: 'https://randomuser.me/api/portraits/women/1.jpg' },
    { nome: 'João Santos', data_nascimento: '1985-10-22', email: 'joao.santos@email.com', telefone: '(11) 97654-3210', image: 'https://randomuser.me/api/portraits/men/2.jpg' },
    { nome: 'Maria Oliveira', data_nascimento: '1992-03-18', email: 'maria.oliveira@email.com', telefone: '(21) 98765-1234', image: 'https://randomuser.me/api/portraits/women/3.jpg' },
    { nome: 'Pedro Souza', data_nascimento: '1988-07-30', email: 'pedro.souza@email.com', telefone: '(21) 97654-5678', image: 'https://randomuser.me/api/portraits/men/4.jpg' },
    { nome: 'Carla Ferreira', data_nascimento: '1995-12-10', email: 'carla.ferreira@email.com', telefone: '(31) 98765-8765', image: 'https://randomuser.me/api/portraits/women/5.jpg' },
    { nome: 'Ricardo Alves', data_nascimento: '1983-09-25', email: 'ricardo.alves@email.com', telefone: '(31) 97654-7890', image: 'https://randomuser.me/api/portraits/men/6.jpg' },
    { nome: 'Juliana Costa', data_nascimento: '1991-04-12', email: 'juliana.costa@email.com', telefone: '(41) 98765-2345', image: 'https://randomuser.me/api/portraits/women/7.jpg' },
    { nome: 'Fernando Gomes', data_nascimento: '1987-08-05', email: 'fernando.gomes@email.com', telefone: '(41) 97654-6789', image: 'https://randomuser.me/api/portraits/men/8.jpg' },
    { nome: 'Patrícia Lima', data_nascimento: '1994-11-20', email: 'patricia.lima@email.com', telefone: '(51) 98765-9876', image: 'https://randomuser.me/api/portraits/women/9.jpg' },
    { nome: 'Lucas Martins', data_nascimento: '1980-06-15', email: 'lucas.martins@email.com', telefone: '(51) 97654-0123', image: 'https://randomuser.me/api/portraits/men/10.jpg' },
    { nome: 'Aline Pereira', data_nascimento: '1993-02-28', email: 'aline.pereira@email.com', telefone: '(61) 98765-3456', image: 'https://randomuser.me/api/portraits/women/11.jpg' },
    { nome: 'Marcos Ribeiro', data_nascimento: '1986-07-12', email: 'marcos.ribeiro@email.com', telefone: '(61) 97654-7890', image: 'https://randomuser.me/api/portraits/men/12.jpg' },
    { nome: 'Camila Santos', data_nascimento: '1996-10-05', email: 'camila.santos@email.com', telefone: '(71) 98765-4567', image: 'https://randomuser.me/api/portraits/women/13.jpg' },
    { nome: 'Bruno Oliveira', data_nascimento: '1982-03-30', email: 'bruno.oliveira@email.com', telefone: '(71) 97654-8901', image: 'https://randomuser.me/api/portraits/men/14.jpg' },
    { nome: 'Fernanda Silva', data_nascimento: '1990-08-17', email: 'fernanda.silva@email.com', telefone: '(81) 98765-5678', image: 'https://randomuser.me/api/portraits/women/15.jpg' },
    { nome: 'Rafael Souza', data_nascimento: '1984-01-25', email: 'rafael.souza@email.com', telefone: '(81) 97654-9012', image: 'https://randomuser.me/api/portraits/men/16.jpg' },
    { nome: 'Luciana Costa', data_nascimento: '1997-04-08', email: 'luciana.costa@email.com', telefone: '(91) 98765-6789', image: 'https://randomuser.me/api/portraits/women/17.jpg' },
    { nome: 'Gustavo Almeida', data_nascimento: '1981-09-15', email: 'gustavo.almeida@email.com', telefone: '(91) 97654-0123', image: 'https://randomuser.me/api/portraits/men/18.jpg' },
    { nome: 'Isabela Martins', data_nascimento: '1989-12-03', email: 'isabela.martins@email.com', telefone: '(16) 98765-7890', image: 'https://randomuser.me/api/portraits/women/19.jpg' },
    { nome: 'Eduardo Castro', data_nascimento: '1985-05-20', email: 'eduardo.castro@email.com', telefone: '(16) 97654-1234', image: 'https://randomuser.me/api/portraits/men/20.jpg' }
  ];

  try {
    console.log('URL do Supabase:', supabaseUrl);
    console.log('API Key do Supabase:', supabaseKey ? 'Configurada' : 'Não configurada');

    if (!supabaseUrl || !supabaseKey) {
      console.error('Erro: URL do Supabase ou API Key não configuradas!');
      return;
    }

    // Verifica se a tabela já existe
    const { error: tableError } = await supabase
      .from('clientes')
      .select('id')
      .limit(1);

    // Se houver erro (tabela não existe), exibe mensagem
    if (tableError) {
      console.log('Tabela de clientes pode não existir. Erro:', tableError.message);
      console.log('Certifique-se de criar a tabela "clientes" no Supabase antes de executar este script.');
    }

    // Insere os clientes na tabela
    const { data, error } = await supabase
      .from('clientes')
      .insert(clients)
      .select();

    if (error) {
      console.error('Erro ao inserir clientes:', error);
      return;
    }

    console.log(`${data.length} clientes inseridos com sucesso!`);
    return data;
  } catch (error) {
    console.error('Erro ao popular o banco de dados:', error);
  }
};

// Executa a função quando o script for executado diretamente
populateClients()
  .then(() => console.log('Script concluído!'))
  .catch(error => {
    console.error('Erro:', error);
  });

export default populateClients; 