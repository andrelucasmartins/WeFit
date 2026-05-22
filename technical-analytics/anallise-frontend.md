# Analise Frontend

## Validar component Breadcrumb

Regra 1

- Separador: É necessário substituir o separador "-" para ">" ou um icone de seta para seguir o design do Figma.

Regra 2

- A etapa atual já está feita corretamente segundo o design e regras de negócio, não é necessário alterar o estilo do texto.

Regra 3

- É necessario adicionar uma validação e verificar a path e colocar um link com estilização para texto ficar underline, para indicar a etapa atual, seguindo o design do Figma.
- Mas é necessario adicionar uma validação se não bater com currentPath, a condição deve ser para não colocar o link e estilização de underline, para as etapas posteriores.

## Especificar um endpoint de cadastro

**Sucesso**

- **201 Created**: Se o cadastro for realizado com sucesso, retornando um objeto JSON com os detalhes do usuário cadastrado.
  A api deve retornar um objeto JSON contendo o ID do usuário, nome, email, data de criação, número de protocolo e uma mensagem de sucesso "Cadastrado com sucesso! Número protocolo, _número-protocolo_".
  Assim possibilitando o usuário ter um número de protocolo para acompanhar o status do cadastro.

**Tratativa de erro**

- Adicionar essa regra seguindo o Figma.

- **500 Internal Server Error**: Se ocorrer um erro inesperado no servidor durante o processamento da solicitação.
  mostrar um model com nome do usuário com a mensagem "Tente novamente mais tarde".

- **409 Conflict**: Se o email fornecido já estiver em uso por outro usuário, retornando um modal com uma mensagem de erro "Usuário já cadastrado.".

- **404 Not Found**: Se o usuário com o ID especificado não for encontrado, retornar um modal com a mensagem "Usuário não encontrado.".

- **400 Bad Request**: Se o ID fornecido não for um número inteiro válido.

- **422 Unprocessable Entity**: Se os dados fornecidos no corpo da solicitação forem inválidos ou estiverem faltando campos obrigatórios, retornando um modal com a mensagem "Dados inválidos. Verifique as informações e tente novamente.".
