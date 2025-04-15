
const ClientTable = ({ clients, title }) => {
  // Função para formatar data
  const formatDate = (dateString) => {
    try {
      // Adiciona 'T00:00:00' para tratar como data local e evitar problemas de fuso horário
      const date = new Date(`${dateString}T00:00:00`);
      return format(date, 'dd/MM/yyyy', { locale: ptBR });
    } catch (error) {
      return dateString;
    }
  };

  return (
    <section className="mb-4">
      <h2>{title}</h2>
      <hr />
      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th>Foto</th>
              <th>Nome</th>
              <th>Data de Nascimento</th>
              <th>Email</th>
              <th>Telefone</th>
            </tr>
          </thead>
          <tbody>
            {clients && clients.map((client) => (
              <tr key={client.id}>
                <td>
                  <img
                    src={client.foto_perfil}
                    alt={`Foto de ${client.nome}`}
                    className="rounded-circle"
                    width="50"
                    height="50"
                  />
                </td>
                <td>{client.nome}</td>
                <td>{formatDate(client.data_nascimento)}</td>
                <td>{client.email}</td>
                <td>{client.telefone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ClientTable; 