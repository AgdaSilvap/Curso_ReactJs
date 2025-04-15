// Salve como populate-db.js e execute com Node.js
import supabase from './supabase';


const products = [
  {
    title: 'Smartphone XS Pro',
    description: 'Smartphone de última geração com câmera de 108MP e tela AMOLED de 6.7".',
    price: 2499.90,
    image: 'https://picsum.photos/300/200?random=1'
  },
  {
    title: 'Notebook UltraSlim',
    description: 'Notebook leve e potente com processador de última geração e 16GB de RAM.',
    price: 4299.90,
    image: 'https://picsum.photos/300/200?random=2'
  },
  {
    title: 'Smart TV 55"',
    description: 'Smart TV 4K com HDR e sistema operacional Android TV.',
    price: 2799.90,
    image: 'https://picsum.photos/300/200?random=3'
  },
  {
    title: 'Fone de Ouvido Bluetooth',
    description: 'Fone de ouvido sem fio com cancelamento de ruído e 30h de bateria.',
    price: 499.90,
    image: 'https://picsum.photos/300/200?random=4'
  },
  {
    title: 'Câmera DSLR Profissional',
    description: 'Câmera profissional com sensor full frame e gravação em 4K.',
    price: 5999.90,
    image: 'https://picsum.photos/300/200?random=5'
  },
  {
    title: 'Relógio Smartwatch',
    description: 'Smartwatch com monitor cardíaco, GPS e resistência à água.',
    price: 899.90,
    image: 'https://picsum.photos/300/200?random=6'
  },
  {
    title: 'Console de Videogame',
    description: 'Console de última geração com suporte a 4K e 1TB de armazenamento.',
    price: 3999.90,
    image: 'https://picsum.photos/300/200?random=7'
  },
  {
    title: 'Tablet Premium',
    description: 'Tablet com tela retina de 11", chip avançado e compatível com caneta digital.',
    price: 3499.90,
    image: 'https://picsum.photos/300/200?random=8'
  },
  {
    title: 'Impressora Multifuncional',
    description: 'Impressora laser com scanner e conectividade Wi-Fi.',
    price: 999.90,
    image: 'https://picsum.photos/300/200?random=9'
  },
  {
    title: 'Caixa de Som Bluetooth',
    description: 'Caixa de som portátil à prova d\'água com 20h de bateria.',
    price: 399.90,
    image: 'https://picsum.photos/300/200?random=10'
  },
  {
    title: 'Teclado Mecânico Gamer',
    description: 'Teclado mecânico RGB com switches Cherry MX e apoio de pulso.',
    price: 599.90,
    image: 'https://picsum.photos/300/200?random=11'
  },
  {
    title: 'Mouse Gamer',
    description: 'Mouse gamer com 8 botões programáveis e sensor de alta precisão.',
    price: 299.90,
    image: 'https://picsum.photos/300/200?random=12'
  },
  {
    title: 'Monitor Ultrawide',
    description: 'Monitor curvo ultrawide de 34" com resolução 4K e tempo de resposta de 1ms.',
    price: 2899.90,
    image: 'https://picsum.photos/300/200?random=13'
  },
  {
    title: 'Cadeira Gamer',
    description: 'Cadeira ergonômica com apoio lombar ajustável e reclinação de até 180°.',
    price: 1499.90,
    image: 'https://picsum.photos/300/200?random=14'
  },
  {
    title: 'Webcam HD',
    description: 'Webcam com resolução Full HD e microfone com redução de ruído.',
    price: 249.90,
    image: 'https://picsum.photos/300/200?random=15'
  },
  {
    title: 'Roteador Wi-Fi 6',
    description: 'Roteador dual-band com tecnologia Wi-Fi 6 e cobertura para grandes ambientes.',
    price: 699.90,
    image: 'https://picsum.photos/300/200?random=16'
  },
  {
    title: 'SSD 1TB',
    description: 'SSD com velocidade de leitura de até 3500MB/s e interface NVMe.',
    price: 799.90,
    image: 'https://picsum.photos/300/200?random=17'
  },
  {
    title: 'Memória RAM 16GB',
    description: 'Kit de memória RAM DDR4 com frequência de 3200MHz.',
    price: 449.90,
    image: 'https://picsum.photos/300/200?random=18'
  },
  {
    title: 'Placa de Vídeo RTX',
    description: 'Placa de vídeo com 8GB de memória GDDR6 e Ray Tracing.',
    price: 3299.90,
    image: 'https://picsum.photos/300/200?random=19'
  },
  {
    title: 'Cooler para Processador',
    description: 'Cooler com design de torre, 4 heatpipes e iluminação RGB.',
    price: 279.90,
    image: 'https://picsum.photos/300/200?random=20'
  },
  {
    title: 'Gabinete Gamer',
    description: 'Gabinete mid-tower com painel lateral em vidro temperado e 4 fans RGB.',
    price: 499.90,
    image: 'https://picsum.photos/300/200?random=21'
  },
  {
    title: 'Fonte de Alimentação 750W',
    description: 'Fonte de alimentação modular com certificação 80 Plus Gold.',
    price: 599.90,
    image: 'https://picsum.photos/300/200?random=22'
  },
  {
    title: 'Placa-Mãe Z590',
    description: 'Placa-mãe com socket LGA 1200, suporte a PCIe 4.0 e Wi-Fi integrado.',
    price: 1699.90,
    image: 'https://picsum.photos/300/200?random=23'
  },
  {
    title: 'Processador de Alto Desempenho',
    description: 'Processador octa-core com frequência de até 5.0GHz.',
    price: 2499.90,
    image: 'https://picsum.photos/300/200?random=24'
  }
];

const clients = [
  {
    nome: "Ana Carolina Souza",
    data_nascimento: "1990-04-15",
    email: "ana.souza@example.com",
    telefone: "(11) 91234-5678",
    foto_perfil: "https://picsum.photos/200/200?random=1"
  },
  {
    nome: "Bruno Henrique Silva",
    data_nascimento: "1988-09-22",
    email: "bruno.henrique@example.com",
    telefone: "(21) 99876-5432",
    foto_perfil: "https://picsum.photos/200/200?random=2"
  },
  {
    nome: "Camila Fernandes Rocha",
    data_nascimento: "1995-01-10",
    email: "camila.rocha@example.com",
    telefone: "(31) 98765-4321",
    foto_perfil: "https://picsum.photos/200/200?random=3"
  },
  {
    nome: "Daniel Costa Lima",
    data_nascimento: "1985-12-03",
    email: "daniel.lima@example.com",
    telefone: "(51) 93456-7890",
    foto_perfil: "https://picsum.photos/200/200?random=4"
  },
  {
    nome: "Eduarda Ribeiro",
    data_nascimento: "1992-07-21",
    email: "eduarda.ribeiro@example.com",
    telefone: "(41) 95678-1234",
    foto_perfil: "https://picsum.photos/200/200?random=5"
  },
  {
    nome: "Felipe Oliveira Martins",
    data_nascimento: "1989-03-14",
    email: "felipe.martins@example.com",
    telefone: "(61) 94567-8901",
    foto_perfil: "https://picsum.photos/200/200?random=6"
  },
  {
    nome: "Gabriela Lima Alves",
    data_nascimento: "1993-08-27",
    email: "gabriela.alves@example.com",
    telefone: "(71) 97654-3210",
    foto_perfil: "https://picsum.photos/200/200?random=7"
  },
  {
    nome: "Henrique Barros",
    data_nascimento: "1987-05-05",
    email: "henrique.barros@example.com",
    telefone: "(85) 96543-2109",
    foto_perfil: "https://picsum.photos/200/200?random=8"
  },
  {
    nome: "Isabela Nunes",
    data_nascimento: "1991-11-30",
    email: "isabela.nunes@example.com",
    telefone: "(95) 92345-6789",
    foto_perfil: "https://picsum.photos/200/200?random=9"
  },
  {
    nome: "João Pedro Carvalho",
    data_nascimento: "1996-02-18",
    email: "joao.carvalho@example.com",
    telefone: "(81) 91234-9876",
    foto_perfil: "https://picsum.photos/200/200?random=10"
  },
  {
    nome: "Karla Mendes",
    data_nascimento: "1986-06-07",
    email: "karla.mendes@example.com",
    telefone: "(82) 93456-7890",
    foto_perfil: "https://picsum.photos/200/200?random=11"
  },
  {
    nome: "Lucas Vieira",
    data_nascimento: "1994-10-12",
    email: "lucas.vieira@example.com",
    telefone: "(84) 99876-1234",
    foto_perfil: "https://picsum.photos/200/200?random=12"
  },
  {
    nome: "Mariana Teixeira",
    data_nascimento: "1990-01-01",
    email: "mariana.teixeira@example.com",
    telefone: "(92) 96789-6543",
    foto_perfil: "https://picsum.photos/200/200?random=13"
  },
  {
    nome: "Nelson Duarte",
    data_nascimento: "1983-03-20",
    email: "nelson.duarte@example.com",
    telefone: "(62) 93456-7890",
    foto_perfil: "https://picsum.photos/200/200?random=14"
  },
  {
    nome: "Olívia Castro",
    data_nascimento: "1997-09-09",
    email: "olivia.castro@example.com",
    telefone: "(98) 97654-1234",
    foto_perfil: "https://picsum.photos/200/200?random=15"
  },
  {
    nome: "Paulo Sérgio Matos",
    data_nascimento: "1984-07-17",
    email: "paulo.matos@example.com",
    telefone: "(83) 94567-8901",
    foto_perfil: "https://picsum.photos/200/200?random=16"
  },
  {
    nome: "Renata Moura",
    data_nascimento: "1992-05-28",
    email: "renata.moura@example.com",
    telefone: "(86) 91234-5678",
    foto_perfil: "https://picsum.photos/200/200?random=17"
  },
  {
    nome: "Samuel Batista",
    data_nascimento: "1986-11-11",
    email: "samuel.batista@example.com",
    telefone: "(91) 99876-5432",
    foto_perfil: "https://picsum.photos/200/200?random=18"
  },
  {
    nome: "Tatiane Lopes",
    data_nascimento: "1993-04-04",
    email: "tatiane.lopes@example.com",
    telefone: "(96) 98765-4321",
    foto_perfil: "https://picsum.photos/200/200?random=19"
  },
  {
    nome: "Vinícius Rocha",
    data_nascimento: "1995-12-25",
    email: "vinicius.rocha@example.com",
    telefone: "(93) 97654-3210",
    foto_perfil: "https://picsum.photos/200/200?random=20"
  }
];




async function insertClients() {
  for (const client of clients) {
    const { data, error } = await supabase
      .from('clients')
      .insert([client]);

    if (error) {
      console.error('Erro ao inserir cliente:', client.nome, error);
    } else {
      console.log('Cliente inserido com sucesso:', client.nome);
    }
  }
}


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

// insertProducts()
//   .then(() => console.log('Todos os produtos foram inseridos!'))
//   .catch(err => console.error('Erro:', err));

insertClients()
  .then(() => console.log('Todos os clientes foram inseridos!'))
  .catch(err => console.error('Erro:', err));