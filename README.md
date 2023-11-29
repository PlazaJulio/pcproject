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

## Como rodar o projeto:

### BackEnd:
- 1 - Para rodar o backend inicialmente é necessario ter o **php com versão 8.x e o composer instalado**;
- 2 - Após instalar o php e o composer clone o repositorio e **entre dentro do diretorio API_PC via terminal**;
- 3 - Ao entrar no diretorio API_PC rode o comando `composer install`;
- 4 - Pode ocorrer que o composer reclame de algumas extensões que devem ser instaladas como por exemplo: php-xml, php-mbstring e  (mas caso isso ocorra no windows basta ir no arquivo php.ini, que é um arquivo de configuração nativo do php - que fica onde você instalou ele, e descomentar a extensão necessária - https://www.php.net/manual/pt_BR/install.pecl.windows.php - link que pode ser util, mas caso você esteja no linux basta instalar via apt);
- 5 - Após a instalação ser bem sucedida, vem a parte da configuração do banco de dados:
    -  1 - instale o banco de dados postgresql;
    -  2 - configure o usuario `postgres` com uma senha que você se lembre, pois será utilizada mais pra frente no arquivo .env;
    -  3 - após instalar e configurar o usuario, entre na interface do banco da sua preferencia - pgadmin ou psql (ambos costumam ser instalados junto com postgresql) para criar um banco de dados para o nosso sistema;
    - 4 - utilize o comando `CREATE DATABASE <nome_do_database>;`
- 6 - Agora que já temos o nosso banco de dados vamos configurar especificar o nosso ambiente:
    - 1 - Para fazer isso inicialmente temos que ir dentro do nosso diretorio API_PC e encontrar o arquivo .env_example
    - 2 - Após encontrar esse arquivo devemos duplica-lo e alterar o nome da cópia para `.env`;
    - 3 - Após alter o nome da cópia para .env devemos edita-lá alterando as informações para as corretas de acordo com nosso ambiente local:
      ~~~
      APP_NAME=Projeto_PC_API
      APP_ENV=local
      APP_KEY=
      APP_DEBUG=true
      APP_URL=http://localhost
      APP_TIMEZONE=UTC
      
      LOG_CHANNEL=stack
      LOG_SLACK_WEBHOOK_URL=
      
      DB_CONNECTION=pgsql
      DB_HOST=localhost
      DB_PORT=5432
      DB_DATABASE=nome_do_database
      DB_USERNAME=postgres
      DB_PASSWORD=senha_do_postgres
      
      CACHE_DRIVER=file
      QUEUE_CONNECTION=sync
      ~~~
        As informações que devem ser alteradas são DB_HOST=localhost (de acordo com o ambiente, caso seja local pode deixar localhost), DB_PORT=5432 (a porta do banco, a padrão do postgres é a 5432), DB_DATABASE=nome_do_database (nome do seu banco de dados criado nos passos anteriores), DB_USERNAME=postgres (usuario que deseja usar para acessar o banco, caso queira pode usar o postgres que é o padrão), DB_PASSWORD=senha_do_postgres (senha do usuario escolhido)
    - 4 - Ainda dentro do arquivo .env deve ser exluida a linha `JWT_SECRET="usar o comando php artisan jwt:secret"`
- 7 - Após essas configurações será necessário rodar o comando `php artisan jwt:secret` dentro do seu terminal;
- 8 - Logo após rode o comando `php artisan migrate`, para criar as tabelas do banco automaticamente;
- 9 - Após rodar o migrate devemos popular nosso banco rodando `php artisan db:seed RodeUmaVezSeeder` e logo após o `php artisan db:seed`;
- 10 - Após todos esses passos basta ir no ditorio API_PC do nosso repositorio e rodar o comando `php -t public -S localhost:8000` para que o backend rode;


