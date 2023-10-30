# :boom:Projeto Policia Civil de Marília - :police_officer:::boom:

- Esse é um projeto feito para auxiliar a Policia Civil de Marília no processo de identificação e cadastramento de meliantes através de um sistema web :detective:.

## Integrantes:

- Responsável pela equipe:
  - Luis Hilário Tobler Garcia

- Estagiários:
  - Igor Rafael de Sousa (R.A: 607568)
  - Mateus dos Santos de Andrade (R.A: 603872)
  - Renan Kawamoto Da Rocha (R.A: 600997)

## Tecnologias utilizadas: 

- Back-end:
  - PHP - com o micro-framework Lumen

- Front-end:
  - ReactJS - Framework(Biblioteca Javascript)   

- Banco de dados:
  - PostgreSQL(Modelo-Relacional de banco)
  
## Ambiente de Desenvolvimento:

  <code>git clone https://github.com/RenanKawamoto/ProjetoPc.git</code>

<h1>Para rodar um projeto Lumen, um micro-framework PHP baseado no Laravel, e configurar o arquivo .env, você precisa seguir alguns passos básicos. Aqui está um guia passo a passo:</h1>

# 1. Instalação do Lumen:
Antes de mais nada, certifique-se de ter o PHP instalado em seu sistema. Você pode baixar o Lumen usando o Composer, que é uma ferramenta de gerenciamento de dependências para PHP. Se você ainda não tem o Composer instalado, você pode encontrá-lo em getcomposer.org.

Para criar um novo projeto Lumen, execute o seguinte comando no terminal:

<h6>sh</h6>
<code>
composer create-project --prefer-dist laravel/lumen nome-do-seu-projeto
</code>

Isso instalará o Lumen e suas dependências em um diretório chamado nome-do-seu-projeto.

# 2. Configuração do Arquivo .env:
O arquivo .env é usado para armazenar variáveis de ambiente em seu projeto. No Lumen, você pode encontrar um arquivo .env.example na raiz do seu projeto. Você precisa copiar este arquivo e renomeá-lo para .env:

<h6>sh</h6>

<code> cp .env.example .env </code>
Em seguida, você pode editar o arquivo .env com as configurações específicas do seu projeto, como configurações de banco de dados, chave de aplicativo, e assim por diante.

# 3. Configuração do Banco de Dados:
Se você estiver usando um banco de dados, você precisa configurar as variáveis de ambiente relacionadas ao banco de dados no arquivo .env. Por exemplo:

<h6>env</h6>
<code>
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=nome-do-banco-de-dados
DB_USERNAME=nome-do-usuario
DB_PASSWORD=senha-do-usuario
</code>
Altere esses valores de acordo com as configurações do seu banco de dados.

# 4. Rodando o Servidor de Desenvolvimento:
Agora que você configurou o arquivo .env, você pode iniciar o servidor de desenvolvimento embutido do Lumen usando o comando Artisan:

<h6>sh</h6>

<code>php -S localhost:8000 -t public</code>
Isso iniciará o servidor embutido e você poderá acessar seu aplicativo Lumen em http://localhost:8000.

Lembre-se de que essas são apenas configurações básicas. Dependendo do seu projeto, você pode precisar configurar outras variáveis de ambiente no arquivo .env. Certifique-se de ler a documentação oficial do Lumen para entender melhor as opções de configuração disponíveis para você.
