<h1>API Documentação</h1>

----
# Autorização 

<h2><code>POST</code> Login</h2>
<p>Ao fazer a requisição <code>POST</code> retornará um <code>token</code> para o acesso ao Token Bearer, uma autenticação necessária para conseguir utilizar as demais APIs do sistema</p>

<h2>Endpoint</h2>
<code>http:localhost:8000/autorizacao/login</code>

<h2>Resource information</h2>
<table style="width:100%">
  <tr>
    <td>Resource formats</td>
    <td>JSON</td>
   
  </tr>
  <tr>
    <td>Requires authentication?</td>
    <td>No</td>
    
  </tr>
  
</table>

<h2>Paramaters</h2>

<table style="width:100%">
  <tr>
    <td>usuario</td>
    <td>required</td>
    <td><code>String</code> format</td>
   
  </tr>
  <tr>
    <td>password</td>
    <td>required</td>
    <td><code>String</code> format</td>
    
  </tr>
  
</table><br><br><br>

<h2><code>POST</code> Logout</h2>
<p>Ao fazer a requisição <code>POST</code> o usuário que já está autenticado vai fazer <code>Logout</code> </p>

<h2>Endpoint</h2>
<code>http:localhost:8000/autorizacao/logout</code>

<h2>Resource information</h2>
<table style="width:100%">
  <tr>
    <td>Resource formats</td>
    <td>JSON</td>
   
  </tr>
  <tr>
    <td>Requires authentication?</td>
    <td>Yes</td>
    
  </tr>
  
</table>

<h2>Paramaters</h2>

<table style="width:100%">
  <tr>
    <td>usuario</td>
    <td>required</td>
    <td><code>String</code> format</td>
   
  </tr>
  <tr>
    <td>password</td>
    <td>required</td>
    <td><code>String</code> format</td>
    
  </tr>
  
</table><br><br><br>

<h2><code>POST</code> Refresh</h2>
<p>Ao fazer a requisição <code>POST</code> irá atualizar as informações do usuário como <code>Login</code> e <code>senha</code> </p>

<h2>Endpoint</h2>
<code>http:localhost:8000/autorizacao/refresh</code>

<h2>Resource information</h2>
<table style="width:100%">
  <tr>
    <td>Resource formats</td>
    <td>JSON</td>
   
  </tr>
  <tr>
    <td>Requires authentication?</td>
    <td>Yes</td>
    
  </tr>
  
</table>

<h2>Paramaters</h2>

<table style="width:100%">
  <tr>
    <td>usuario</td>
    <td>required</td>
    <td><code>String</code> format</td>
   
  </tr>
  <tr>
    <td>password</td>
    <td>required</td>
    <td><code>String</code> format</td>
    
  </tr>
  
</table><br><br><br>

----

# Acusação

<h2><code>GET</code> SelecionarPorId</h2>
<p>Ao fazer a requisição <code>GET</code> retornará as informações de acusação especifica conforme o <code>ID</code>selecionado, em um body no formato <code>JSON</code></p>

<h2>Endpoint</h2>
<code>http:localhost:8000/acusacao/<id></code>

<h2>Resource information</h2>
<table style="width:100%">
  <tr>
    <td>Resource formats</td>
    <td>JSON</td>
   
  </tr>
  <tr>
    <td>Requires authentication?</td>
    <td>Yes</td>
    
  </tr>
  
</table>

<h2>Paramaters</h2>
<br><br><br>

<h2><code>GET</code> SelecionarTodos</h2>
<p>Ao fazer a requisição <code>GET</code> retornará as informações de todas as acusações</p>

<h2>Endpoint</h2>
<code>http:localhost:8000/acusacao</code>

<h2>Resource information</h2>
<table style="width:100%">
  <tr>
    <td>Resource formats</td>
    <td>JSON</td>
   
  </tr>
  <tr>
    <td>Requires authentication?</td>
    <td>Yes</td>
    
  </tr>
  
</table>

<h2>Paramaters</h2>
<br><br><br>

<h2><code>POST</code> Inserir</h2>
<p>Ao fazer a requisição <code>POST</code> irá inserir as informações de uma acusação.</p>

<h2>Endpoint</h2>
<code>http:localhost:8000/acusacao/inserir</code>

<h2>Resource information</h2>
<table style="width:100%">
  <tr>
    <td>Resource formats</td>
    <td>JSON</td>
   
  </tr>
  <tr>
    <td>Requires authentication?</td>
    <td>Yes</td>
    
  </tr>
  
</table>

<h2>Paramaters</h2>

<table style="width:100%">
  <tr>
    <td>tipo</td>
    <td>optional</td>
    <td><code>String</code> format</td>
   
  </tr>
 
</table><br><br><br>
  
<h2><code>DELETE</code> Deletar</h2>
<p>Ao fazer a requisição <code>DELETE</code> irá deletar as informações de uma acusação selecionada pelo <code>ID</code> no endpoint.</p>

<h2>Endpoint</h2>
<code>http:localhost:8000/acusacao/<id></code>

<h2>Resource information</h2>
<table style="width:100%">
  <tr>
    <td>Resource formats</td>
    <td>JSON</td>
   
  </tr>
  <tr>
    <td>Requires authentication?</td>
    <td>Yes</td>
    
  </tr>
  
</table>

<h2>Paramaters</h2>

 
</table><br><br><br>
  
 <h2><code>PATCH</code> Alterar</h2>
<p>Ao fazer a requisição <code>PATCH</code> irá atualizar as informações de um campo especifico da acusação selecionada pelo <code>ID</code> no endpoint.</p>

<h2>Endpoint</h2>
<code>http:localhost:8000/acusacao/<id></code>

<h2>Resource information</h2>
<table style="width:100%">
  <tr>
    <td>Resource formats</td>
    <td>JSON</td>
   
  </tr>
  <tr>
    <td>Requires authentication?</td>
    <td>Yes</td>
    
  </tr>
  
</table>

<h2>Paramaters</h2>
<table style="width:100%">
  <tr>
    <td>tipo</td>
    <td>optional</td>
    <td><code>String</code> format</td>
   
  </tr>
 
</table><br><br><br> 

  ----

# Aparencia

<h2><code>GET</code> SelecionarPorId</h2>
<p>Ao fazer a requisição <code>GET</code> retornará as informações de aparencia especifica conforme o <code>ID</code>selecionado, em um body no formato <code>JSON</code></p>

<h2>Endpoint</h2>
<code>http:localhost:8000/aparencia/<id></code>

<h2>Resource information</h2>
<table style="width:100%">
  <tr>
    <td>Resource formats</td>
    <td>JSON</td>
   
  </tr>
  <tr>
    <td>Requires authentication?</td>
    <td>Yes</td>
    
  </tr>
  
</table>

<h2>Paramaters</h2>
<br><br><br>

<h2><code>GET</code> SelecionarTodos</h2>
<p>Ao fazer a requisição <code>GET</code> retornará as informações de todas as aparencia</p>

<h2>Endpoint</h2>
<code>http:localhost:8000/aparencia</code>

<h2>Resource information</h2>
<table style="width:100%">
  <tr>
    <td>Resource formats</td>
    <td>JSON</td>
   
  </tr>
  <tr>
    <td>Requires authentication?</td>
    <td>Yes</td>
    
  </tr>
  
</table>

<h2>Paramaters</h2>
<br><br><br>

<h2><code>POST</code> Inserir</h2>
<p>Ao fazer a requisição <code>POST</code> irá inserir as informações de uma aparencia.</p>

<h2>Endpoint</h2>
<code>http:localhost:8000/aparencia/inserir</code>

<h2>Resource information</h2>
<table style="width:100%">
  <tr>
    <td>Resource formats</td>
    <td>JSON</td>
   
  </tr>
  <tr>
    <td>Requires authentication?</td>
    <td>Yes</td>
    
  </tr>
  
</table>

<h2>Paramaters</h2>

<table style="width:100%">
  <tr>
    <td>altura</td>
    <td>required</td>
    <td><code>String</code> format</td>
  </tr>
  <tr>
    <td>etnia</td>
    <td>required</td>
    <td><code>String</code> format</td>
  </tr>
 <tr>
    <td>cor_id</td>
    <td>required</td>
    <td><code>Integer</code> format</td>
  </tr>
  <tr>
    <td>cor_do_cabelo_id</td>
    <td>required</td>
    <td><code>Integer</code> format</td>
  </tr>
  <tr>
    <td>tipo_de_cabelo_id</td>
    <td>required</td>
    <td><code>Integer</code> format</td>
  </tr>
 <tr>
    <td>cor_dos_olhos_id</td>
    <td>required</td>
    <td><code>Integer</code> format</td>
  </tr>
 <tr>
    <td>porte_fisico_id</td>
    <td>required</td>
    <td><code>Integer</code> format</td>
  </tr>
  <tr>
    <td>foto_de_perfil_esquerdo</td>
    <td>required</td>
    <td><code>String</code> format</td>
  </tr>
 <tr>
   <tr>
    <td>foto_de_perfil_direito</td>
    <td>required</td>
    <td><code>String</code> format</td>
  </tr>
 <tr>
   <tr>
    <td>foto_de_frente</td>
    <td>required</td>
    <td><code>String</code> format</td>
  </tr>
 <tr>
</table><br><br><br>
  
<h2><code>DELETE</code> Deletar</h2>
<p>Ao fazer a requisição <code>DELETE</code> irá deletar as informações de uma aparencia selecionado pelo <code>ID</code> no endpoint.</p>

<h2>Endpoint</h2>
<code>http:localhost:8000/aparencia/<id></code>

<h2>Resource information</h2>
<table style="width:100%">
  <tr>
    <td>Resource formats</td>
    <td>JSON</td>
   
  </tr>
  <tr>
    <td>Requires authentication?</td>
    <td>Yes</td>
    
  </tr>
  
</table>

<h2>Paramaters</h2>

 
</table><br><br><br>
  
 <h2><code>PATCH</code> Alterar</h2>
<p>Ao fazer a requisição <code>PATCH</code> irá atualizar as informações de um campo especifico de aparenciae selecionada pelo <code>ID</code> no endpoint.</p>

<h2>Endpoint</h2>
<code>http:localhost:8000/aparencia/<id></code>

<h2>Resource information</h2>
<table style="width:100%">
  <tr>
    <td>Resource formats</td>
    <td>JSON</td>
   
  </tr>
  <tr>
    <td>Requires authentication?</td>
    <td>Yes</td>
    
  </tr>
  
</table>

<h2>Paramaters</h2>
<table style="width:100%">
  <tr>
    <td>tipo</td>
    <td>optional</td>
    <td><code>String</code> format</td>
   
  </tr>
 
</table><br><br><br> 

----
  
# Antecedente

<h2><code>GET</code> SelecionarPorId</h2>
<p>Ao fazer a requisição <code>GET</code> retornará as informações de Antedente especifica conforme o <code>ID</code>selecionado, em um body no formato <code>JSON</code></p>

<h2>Endpoint</h2>
<code>http:localhost:8000/antecedente/<id></code>

<h2>Resource information</h2>
<table style="width:100%">
  <tr>
    <td>Resource formats</td>
    <td>JSON</td>
   
  </tr>
  <tr>
    <td>Requires authentication?</td>
    <td>Yes</td>
    
  </tr>
  
</table>

<h2>Paramaters</h2>
<br><br><br>

<h2><code>GET</code> SelecionarTodos</h2>
<p>Ao fazer a requisição <code>GET</code> retornará as informações de todas os Antecedentes</p>

<h2>Endpoint</h2>
<code>http:localhost:8000/antecedente</code>

<h2>Resource information</h2>
<table style="width:100%">
  <tr>
    <td>Resource formats</td>
    <td>JSON</td>
   
  </tr>
  <tr>
    <td>Requires authentication?</td>
    <td>Yes</td>
    
  </tr>
  
</table>

<h2>Paramaters</h2>
<br><br><br>

<h2><code>POST</code> Inserir</h2>
<p>Ao fazer a requisição <code>POST</code> irá inserir as informações de uma antecedente.</p>

<h2>Endpoint</h2>
<code>http:localhost:8000/antecedente/inserir</code>

<h2>Resource information</h2>
<table style="width:100%">
  <tr>
    <td>Resource formats</td>
    <td>JSON</td>
   
  </tr>
  <tr>
    <td>Requires authentication?</td>
    <td>Yes</td>
    
  </tr>
  
</table>

<h2>Paramaters</h2>

<table style="width:100%">
  <tr>
    <td>local</td>
    <td>required</td>
    <td><code>String</code> format</td>
  </tr>
  <tr>
    <td>data</td>
    <td>required</td>
    <td><code>String</code> format</td>
  </tr>
 <tr>
    <td>hora</td>
    <td>required</td>
    <td><code>String</code> format</td>
  </tr>
  <tr>
    <td>descriscao</td>
    <td>required</td>
    <td><code>String</code> format</td>
  </tr>
  <tr>
    <td>acusacao_id</td>
    <td>required</td>
    <td><code>Integer</code> format</td>
  </tr>
 <tr>
    <td>criminoso_id</td>
    <td>required</td>
    <td><code>Integer</code> format</td>
  </tr>
</table><br><br><br>
  
<h2><code>DELETE</code> Deletar</h2>
<p>Ao fazer a requisição <code>DELETE</code> irá deletar as informações de um antecedente selecionado pelo <code>ID</code> no endpoint.</p>

<h2>Endpoint</h2>
<code>http:localhost:8000/antecedente/<id></code>

<h2>Resource information</h2>
<table style="width:100%">
  <tr>
    <td>Resource formats</td>
    <td>JSON</td>
   
  </tr>
  <tr>
    <td>Requires authentication?</td>
    <td>Yes</td>
    
  </tr>
  
</table>

<h2>Paramaters</h2>

 
</table><br><br><br>
  
 <h2><code>PATCH</code> Alterar</h2>
<p>Ao fazer a requisição <code>PATCH</code> irá atualizar as informações de um campo especifico de antecedente selecionada pelo <code>ID</code> no endpoint.</p>

<h2>Endpoint</h2>
<code>http:localhost:8000/antecedente/<id></code>

<h2>Resource information</h2>
<table style="width:100%">
  <tr>
    <td>Resource formats</td>
    <td>JSON</td>
   
  </tr>
  <tr>
    <td>Requires authentication?</td>
    <td>Yes</td>
    
  </tr>
  
</table>

<h2>Paramaters</h2>
<table style="width:100%">
  <tr>
    <td>tipo</td>
    <td>optional</td>
    <td><code>String</code> format</td>
   
  </tr>
 
</table><br><br><br> 

----
  
# Cor

<h2><code>GET</code> SelecionarPorId</h2>
<p>Ao fazer a requisição <code>GET</code> retornará as informações de Cor especifica conforme o <code>ID</code>selecionado, em um body no formato <code>JSON</code></p>

<h2>Endpoint</h2>
<code>http:localhost:8000/cor/<id></code>

<h2>Resource information</h2>
<table style="width:100%">
  <tr>
    <td>Resource formats</td>
    <td>JSON</td>
   
  </tr>
  <tr>
    <td>Requires authentication?</td>
    <td>Yes</td>
    
  </tr>
  
</table>

<h2>Paramaters</h2>
<br><br><br>

<h2><code>GET</code> SelecionarTodos</h2>
<p>Ao fazer a requisição <code>GET</code> retornará as informações de todas as cores</p>

<h2>Endpoint</h2>
<code>http:localhost:8000/cor</code>

<h2>Resource information</h2>
<table style="width:100%">
  <tr>
    <td>Resource formats</td>
    <td>JSON</td>
   
  </tr>
  <tr>
    <td>Requires authentication?</td>
    <td>Yes</td>
    
  </tr>
  
</table>

<h2>Paramaters</h2>
<br><br><br>
  
----
  
# Cor dos olhos

<h2><code>GET</code> SelecionarPorId</h2>
<p>Ao fazer a requisição <code>GET</code> retornará as informações de Cor dos olhos especifica conforme o <code>ID</code>selecionado, em um body no formato <code>JSON</code></p>

<h2>Endpoint</h2>
<code>http:localhost:8000/cor-dos-olhos/<id></code>

<h2>Resource information</h2>
<table style="width:100%">
  <tr>
    <td>Resource formats</td>
    <td>JSON</td>
   
  </tr>
  <tr>
    <td>Requires authentication?</td>
    <td>Yes</td>
    
  </tr>
  
</table>

<h2>Paramaters</h2>
<br><br><br>

<h2><code>GET</code> SelecionarTodos</h2>
<p>Ao fazer a requisição <code>GET</code> retornará as informações de todas as cores dos olhos</p>

<h2>Endpoint</h2>
<code>http:localhost:8000/cor-dos-olhos</code>

<h2>Resource information</h2>
<table style="width:100%">
  <tr>
    <td>Resource formats</td>
    <td>JSON</td>
   
  </tr>
  <tr>
    <td>Requires authentication?</td>
    <td>Yes</td>
    
  </tr>
  
</table>

<h2>Paramaters</h2>
<br><br><br>

----
  
# Cor do cabelo

<h2><code>GET</code> SelecionarPorId</h2>
<p>Ao fazer a requisição <code>GET</code> retornará as informações de Cor do cabelo especifica conforme o <code>ID</code>selecionado, em um body no formato <code>JSON</code></p>

<h2>Endpoint</h2>
<code>http:localhost:8000/cor-do-cabelo/<id></code>

<h2>Resource information</h2>
<table style="width:100%">
  <tr>
    <td>Resource formats</td>
    <td>JSON</td>
   
  </tr>
  <tr>
    <td>Requires authentication?</td>
    <td>Yes</td>
    
  </tr>
  
</table>

<h2>Paramaters</h2>
<br><br><br>

<h2><code>GET</code> SelecionarTodos</h2>
<p>Ao fazer a requisição <code>GET</code> retornará as informações de todas as cores de cabelo</p>

<h2>Endpoint</h2>
<code>http:localhost:8000/cor-do-cabelo</code>

<h2>Resource information</h2>
<table style="width:100%">
  <tr>
    <td>Resource formats</td>
    <td>JSON</td>
   
  </tr>
  <tr>
    <td>Requires authentication?</td>
    <td>Yes</td>
    
  </tr>
  
</table>

<h2>Paramaters</h2>
<br><br><br>
 
----
  
# Endereço

<h2><code>GET</code> SelecionarPorId</h2>
<p>Ao fazer a requisição <code>GET</code> retornará as informações de endereço especifica conforme o <code>ID</code>selecionado, em um body no formato <code>JSON</code></p>

<h2>Endpoint</h2>
<code>http:localhost:8000/endereco/<id></code>

<h2>Resource information</h2>
<table style="width:100%">
  <tr>
    <td>Resource formats</td>
    <td>JSON</td>
   
  </tr>
  <tr>
    <td>Requires authentication?</td>
    <td>Yes</td>
    
  </tr>
  
</table>

<h2>Paramaters</h2>
<br><br><br>

<h2><code>GET</code> SelecionarTodos</h2>
<p>Ao fazer a requisição <code>GET</code> retornará as informações de todas os endereços</p>

<h2>Endpoint</h2>
<code>http:localhost:8000/endereco</code>

<h2>Resource information</h2>
<table style="width:100%">
  <tr>
    <td>Resource formats</td>
    <td>JSON</td>
   
  </tr>
  <tr>
    <td>Requires authentication?</td>
    <td>Yes</td>
    
  </tr>
  
</table>

<h2>Paramaters</h2>
<br><br><br>

<h2><code>POST</code> Inserir</h2>
<p>Ao fazer a requisição <code>POST</code> irá inserir as informações de um endereco.</p>

<h2>Endpoint</h2>
<code>http:localhost:8000/endereco/inserir</code>

<h2>Resource information</h2>
<table style="width:100%">
  <tr>
    <td>Resource formats</td>
    <td>JSON</td>
   
  </tr>
  <tr>
    <td>Requires authentication?</td>
    <td>Yes</td>
    
  </tr>
  
</table>

<h2>Paramaters</h2>

<table style="width:100%">
  <tr>
    <td>cep</td>
    <td>required</td>
    <td><code>String</code> format</td>
  </tr>
  <tr>
    <td>rua</td>
    <td>required</td>
    <td><code>String</code> format</td>
  </tr>
 <tr>
    <td>bairro</td>
    <td>required</td>
    <td><code>String</code> format</td>
  </tr>
  <tr>
    <td>numero</td>
    <td>required</td>
    <td><code>Integer</code> format</td>
  </tr>
  <tr>
    <td>complemento</td>
    <td>required</td>
    <td><code>String</code> format</td>
  </tr>

</table>

<h2>Paramaters</h2>

 
</table><br><br><br>
  
 <h2><code>PATCH</code> Alterar</h2>
<p>Ao fazer a requisição <code>PATCH</code> irá atualizar as informações de um campo especifico de endereço selecionada pelo <code>ID</code> no endpoint.</p>

<h2>Endpoint</h2>
<code>http:localhost:8000/endereco/<id></code>

<h2>Resource information</h2>
<table style="width:100%">
  <tr>
    <td>Resource formats</td>
    <td>JSON</td>
   
  </tr>
  <tr>
    <td>Requires authentication?</td>
    <td>Yes</td>
    
  </tr>
  
</table>

<h2>Paramaters</h2>
<table style="width:100%">
  <tr>
    <td>cep</td>
    <td>optional</td>
    <td><code>String</code> format</td>
  </tr>
  <tr>
    <td>rua</td>
    <td>optional</td>
    <td><code>String</code> format</td>
  </tr>
 <tr>
    <td>bairro</td>
    <td>optional</td>
    <td><code>String</code> format</td>
  </tr>
  <tr>
    <td>numero</td>
    <td>optional</td>
    <td><code>optional</code> format</td>
  </tr>
  <tr>
    <td>complemento</td>
    <td>optional</td>
    <td><code>String</code> format</td>
  </tr>

</table><br><br><br> 

----
  
# Estado Civil

<h2><code>GET</code> SelecionarPorId</h2>
<p>Ao fazer a requisição <code>GET</code> retornará as informações de estado civil especifico conforme o <code>ID</code>selecionado, em um body no formato <code>JSON</code></p>

<h2>Endpoint</h2>
<code>http:localhost:8000/estado-civil/<id></code>

<h2>Resource information</h2>
<table style="width:100%">
  <tr>
    <td>Resource formats</td>
    <td>JSON</td>
   
  </tr>
  <tr>
    <td>Requires authentication?</td>
    <td>Yes</td>
    
  </tr>
  
</table>

<h2>Paramaters</h2>
<br><br><br>

<h2><code>GET</code> SelecionarTodos</h2>
<p>Ao fazer a requisição <code>GET</code> retornará as informações de todas os estados civil</p>

<h2>Endpoint</h2>
<code>http:localhost:8000/estado-civil</code>

<h2>Resource information</h2>
<table style="width:100%">
  <tr>
    <td>Resource formats</td>
    <td>JSON</td>
   
  </tr>
  <tr>
    <td>Requires authentication?</td>
    <td>Yes</td>
    
  </tr>
  
</table>

<h2>Paramaters</h2>
<br><br><br>
 
----

# Genero

<h2><code>GET</code> SelecionarPorId</h2>
<p>Ao fazer a requisição <code>GET</code> retornará as informações de genero especifico conforme o <code>ID</code>selecionado, em um body no formato <code>JSON</code></p>

<h2>Endpoint</h2>
<code>http:localhost:8000/genero/<id></code>

<h2>Resource information</h2>
<table style="width:100%">
  <tr>
    <td>Resource formats</td>
    <td>JSON</td>
   
  </tr>
  <tr>
    <td>Requires authentication?</td>
    <td>Yes</td>
    
  </tr>
  
</table>

<h2>Paramaters</h2>
<br><br><br>

<h2><code>GET</code> SelecionarTodos</h2>
<p>Ao fazer a requisição <code>GET</code> retornará as informações de todas os generos</p>

<h2>Endpoint</h2>
<code>http:localhost:8000/genero</code>

<h2>Resource information</h2>
<table style="width:100%">
  <tr>
    <td>Resource formats</td>
    <td>JSON</td>
   
  </tr>
  <tr>
    <td>Requires authentication?</td>
    <td>Yes</td>
    
  </tr>
  
</table>

<h2>Paramaters</h2>
<br><br><br>
 
----
  
# Grau de Escolaridade

<h2><code>GET</code> SelecionarPorId</h2>
<p>Ao fazer a requisição <code>GET</code> retornará as informações de grau-de-escolaridade especifico conforme o <code>ID</code>selecionado, em um body no formato <code>JSON</code></p>

<h2>Endpoint</h2>
<code>http:localhost:8000/grau-de-escolaridade/<id></code>

<h2>Resource information</h2>
<table style="width:100%">
  <tr>
    <td>Resource formats</td>
    <td>JSON</td>
   
  </tr>
  <tr>
    <td>Requires authentication?</td>
    <td>Yes</td>
    
  </tr>
  
</table>

<h2>Paramaters</h2>
<br><br><br>

<h2><code>GET</code> SelecionarTodos</h2>
<p>Ao fazer a requisição <code>GET</code> retornará as informações de todas os graus de escolaridade</p>

<h2>Endpoint</h2>
<code>http:localhost:8000/grau-de-escolaridade</code>

<h2>Resource information</h2>
<table style="width:100%">
  <tr>
    <td>Resource formats</td>
    <td>JSON</td>
   
  </tr>
  <tr>
    <td>Requires authentication?</td>
    <td>Yes</td>
    
  </tr>
  
</table>

<h2>Paramaters</h2>
<br><br><br>
 
----

# Marca

<h2><code>GET</code> SelecionarPorId</h2>
<p>Ao fazer a requisição <code>GET</code> retornará as informações de marca especifica conforme o <code>ID</code>selecionado, em um body no formato <code>JSON</code></p>

<h2>Endpoint</h2>
<code>http:localhost:8000/marca<id></code>

<h2>Resource information</h2>
<table style="width:100%">
  <tr>
    <td>Resource formats</td>
    <td>JSON</td>
   
  </tr>
  <tr>
    <td>Requires authentication?</td>
    <td>Yes</td>
    
  </tr>
  
</table>

<h2>Paramaters</h2>
<br><br><br>

<h2><code>GET</code> SelecionarTodos</h2>
<p>Ao fazer a requisição <code>GET</code> retornará as informações de todas as marcas</p>

<h2>Endpoint</h2>
<code>http:localhost:8000/marca</code>

<h2>Resource information</h2>
<table style="width:100%">
  <tr>
    <td>Resource formats</td>
    <td>JSON</td>
   
  </tr>
  <tr>
    <td>Requires authentication?</td>
    <td>Yes</td>
    
  </tr>
  
</table>

<h2>Paramaters</h2>
<br><br><br>

<h2><code>POST</code> Inserir</h2>
<p>Ao fazer a requisição <code>POST</code> irá inserir as informações de uma marca.</p>

<h2>Endpoint</h2>
<code>http:localhost:8000/marca/inserir</code>

<h2>Resource information</h2>
<table style="width:100%">
  <tr>
    <td>Resource formats</td>
    <td>JSON</td>
   
  </tr>
  <tr>
    <td>Requires authentication?</td>
    <td>Yes</td>
    
  </tr>
  
</table>

<h2>Paramaters</h2>

<table style="width:100%">
  <tr>
    <td>cicatriz_ou_tatuagem</td>
    <td>required</td>
    <td><code>String</code> format</td>
  </tr>
  <tr>
    <td>descricao</td>
    <td>required</td>
    <td><code>String</code> format</td>
  </tr>
 <tr>
    <td>parte_do_corpo</td>
    <td>required</td>
    <td><code>String</code> format</td>
  </tr>
  <tr>
    <td>foto</td>
    <td>required</td>
    <td><code>String</code> format</td>
  </tr>
  <tr>
    <td>tipo_de_tatuagem_id</td>
    <td>required</td>
    <td><code>Integer</code> format</td>
  </tr>

  <tr>
    <td>aparencia_id</td>
    <td>required</td>
    <td><code>Integer</code> format</td>
  </tr>
</table>

<h2>Paramaters</h2>

 
</table><br><br><br>
  
 <h2><code>PATCH</code> Alterar</h2>
<p>Ao fazer a requisição <code>PATCH</code> irá atualizar as informações de um campo especifico de endereço selecionada pelo <code>ID</code> no endpoint.</p>

<h2>Endpoint</h2>
<code>http:localhost:8000/marca/<id></code>

<h2>Resource information</h2>
<table style="width:100%">
  <tr>
    <td>Resource formats</td>
    <td>JSON</td>
   
  </tr>
  <tr>
    <td>Requires authentication?</td>
    <td>Yes</td>
    
  </tr>
  
</table>

<h2>Paramaters</h2>

<table style="width:100%">
  <tr>
    <td>cicatriz_ou_tatuagem</td>
    <td>optional</td>
    <td><code>String</code> format</td>
  </tr>
  <tr>
    <td>descricao</td>
    <td>optional</td>
    <td><code>String</code> format</td>
  </tr>
 <tr>
    <td>parte_do_corpo</td>
    <td>optional</td>
    <td><code>String</code> format</td>
  </tr>
  <tr>
    <td>foto</td>
    <td>optional</td>
    <td><code>String</code> format</td>
  </tr>
  <tr>
    <td>tipo_de_tatuagem_id</td>
    <td>optional</td>
    <td><code>Integer</code> format</td>
  </tr>

  <tr>
    <td>aparencia_id</td>
    <td>optional</td>
    <td><code>Integer</code> format</td>
  </tr>
</table><br><br><br> 

----

# Porte fisico

<h2><code>GET</code> SelecionarPorId</h2>
<p>Ao fazer a requisição <code>GET</code> retornará as informações de porte fisico especifico conforme o <code>ID</code>selecionado, em um body no formato <code>JSON</code></p>

<h2>Endpoint</h2>
<code>http:localhost:8000/porte-fisico/<id></code>

<h2>Resource information</h2>
<table style="width:100%">
  <tr>
    <td>Resource formats</td>
    <td>JSON</td>
   
  </tr>
  <tr>
    <td>Requires authentication?</td>
    <td>Yes</td>
    
  </tr>
  
</table>

<h2>Paramaters</h2>
<br><br><br>

<h2><code>GET</code> SelecionarTodos</h2>
<p>Ao fazer a requisição <code>GET</code> retornará as informações de todas os portes fisico</p>

<h2>Endpoint</h2>
<code>http:localhost:8000/porte-fisico</code>

<h2>Resource information</h2>
<table style="width:100%">
  <tr>
    <td>Resource formats</td>
    <td>JSON</td>
   
  </tr>
  <tr>
    <td>Requires authentication?</td>
    <td>Yes</td>
    
  </tr>
  
</table>

<h2>Paramaters</h2>
<br><br><br>
 
----
  
# Tipo de cabelo

<h2><code>GET</code> SelecionarPorId</h2>
<p>Ao fazer a requisição <code>GET</code> retornará as informações de tipo de cabelo especifico conforme o <code>ID</code>selecionado, em um body no formato <code>JSON</code></p>

<h2>Endpoint</h2>
<code>http:localhost:8000/tipo-de-cabelo/<id></code>

<h2>Resource information</h2>
<table style="width:100%">
  <tr>
    <td>Resource formats</td>
    <td>JSON</td>
   
  </tr>
  <tr>
    <td>Requires authentication?</td>
    <td>Yes</td>
    
  </tr>
  
</table>

<h2>Paramaters</h2>
<br><br><br>

<h2><code>GET</code> SelecionarTodos</h2>
<p>Ao fazer a requisição <code>GET</code> retornará as informações de todas os tipos de cabelo</p>

<h2>Endpoint</h2>
<code>http:localhost:8000/tipo-de-cabelo</code>

<h2>Resource information</h2>
<table style="width:100%">
  <tr>
    <td>Resource formats</td>
    <td>JSON</td>
   
  </tr>
  <tr>
    <td>Requires authentication?</td>
    <td>Yes</td>
    
  </tr>
  
</table>

<h2>Paramaters</h2>
<br><br><br>
 
----
  
# Tipo de tatuagem

<h2><code>GET</code> SelecionarPorId</h2>
<p>Ao fazer a requisição <code>GET</code> retornará as informações de tipo de tatuagem especifica conforme o <code>ID</code>selecionado, em um body no formato <code>JSON</code></p>

<h2>Endpoint</h2>
<code>http:localhost:8000/tipo-de-tatuagem/<id></code>

<h2>Resource information</h2>
<table style="width:100%">
  <tr>
    <td>Resource formats</td>
    <td>JSON</td>
   
  </tr>
  <tr>
    <td>Requires authentication?</td>
    <td>Yes</td>
    
  </tr>
  
</table>

<h2>Paramaters</h2>
<br><br><br>

<h2><code>GET</code> SelecionarTodos</h2>
<p>Ao fazer a requisição <code>GET</code> retornará as informações de todos os tipos de tatuagem</p>

<h2>Endpoint</h2>
<code>http:localhost:8000/tipo-de-tatuagem</code>

<h2>Resource information</h2>
<table style="width:100%">
  <tr>
    <td>Resource formats</td>
    <td>JSON</td>
   
  </tr>
  <tr>
    <td>Requires authentication?</td>
    <td>Yes</td>
    
  </tr>
  
</table>

<h2>Paramaters</h2>
<br><br><br>

<h2><code>POST</code> Inserir</h2>
<p>Ao fazer a requisição <code>POST</code> irá inserir as informações de um tipo de tatuagem.</p>

<h2>Endpoint</h2>
<code>http:localhost:8000/tipo-de-tatuagem/inserir</code>

<h2>Resource information</h2>
<table style="width:100%">
  <tr>
    <td>Resource formats</td>
    <td>JSON</td>
   
  </tr>
  <tr>
    <td>Requires authentication?</td>
    <td>Yes</td>
    
  </tr>
  
</table>

<h2>Paramaters</h2>

<table style="width:100%">
  <tr>
    <td>tipo</td>
    <td>optional</td>
    <td><code>String</code> format</td>
   
  </tr>
 
</table><br><br><br>
  
<h2><code>DELETE</code> Deletar</h2>
<p>Ao fazer a requisição <code>DELETE</code> irá deletar as informações de um tipo de tatuagem selecionada pelo <code>ID</code> no endpoint.</p>

<h2>Endpoint</h2>
<code>http:localhost:8000/tipo-de-tatuagem/<id></code>

<h2>Resource information</h2>
<table style="width:100%">
  <tr>
    <td>Resource formats</td>
    <td>JSON</td>
   
  </tr>
  <tr>
    <td>Requires authentication?</td>
    <td>Yes</td>
    
  </tr>
  
</table>

<h2>Paramaters</h2>

 
</table><br><br><br>
  
 <h2><code>PATCH</code> Alterar</h2>
<p>Ao fazer a requisição <code>PATCH</code> irá atualizar as informações de um campo especifico da acusação selecionada pelo <code>ID</code> no endpoint.</p>

<h2>Endpoint</h2>
<code>http:localhost:8000/tipo-de-tatuagem/<id></code>

<h2>Resource information</h2>
<table style="width:100%">
  <tr>
    <td>Resource formats</td>
    <td>JSON</td>
   
  </tr>
  <tr>
    <td>Requires authentication?</td>
    <td>Yes</td>
    
  </tr>
  
</table>

<h2>Paramaters</h2>
<table style="width:100%">
  <tr>
    <td>tipo</td>
    <td>optional</td>
    <td><code>String</code> format</td>
   
  </tr>
 
</table><br><br><br> 

  ----

# Usuário

<h2><code>GET</code> SelecionarPorId</h2>
<p>Ao fazer a requisição <code>GET</code> retornará as informações de usuário conforme o <code>ID</code>selecionado, em um body no formato <code>JSON</code></p>

<h2>Endpoint</h2>
<code>http:localhost:8000/usuario/<id></code>

<h2>Resource information</h2>
<table style="width:100%">
  <tr>
    <td>Resource formats</td>
    <td>JSON</td>
   
  </tr>
  <tr>
    <td>Requires authentication?</td>
    <td>Yes</td>
    
  </tr>
  
</table>

<h2>Paramaters</h2>
<br><br><br>

<h2><code>GET</code> SelecionarTodos</h2>
<p>Ao fazer a requisição <code>GET</code> retornará as informações de todos os usuários</p>

<h2>Endpoint</h2>
<code>http:localhost:8000/usuario</code>

<h2>Resource information</h2>
<table style="width:100%">
  <tr>
    <td>Resource formats</td>
    <td>JSON</td>
   
  </tr>
  <tr>
    <td>Requires authentication?</td>
    <td>Yes</td>
    
  </tr>
  
</table>

<h2>Paramaters</h2>
<br><br><br>

<h2><code>POST</code> Inserir</h2>
<p>Ao fazer a requisição <code>POST</code> irá inserir as informações de um usuário.</p>

<h2>Endpoint</h2>
<code>http:localhost:8000/usuario/inserir</code>

<h2>Resource information</h2>
<table style="width:100%">
  <tr>
    <td>Resource formats</td>
    <td>JSON</td>
   
  </tr>
  <tr>
    <td>Requires authentication?</td>
    <td>Yes</td>
    
  </tr>
  
</table>

<h2>Paramaters</h2>

<table style="width:100%">
  <tr>
    <td>usuario</td>
    <td>required</td>
    <td><code>String</code> format</td>
   
  </tr>
   <tr>
    <td>nome</td>
    <td>required</td>
    <td><code>String</code> format</td>
   
  </tr>
  <tr>
    <td>permissao_de_escrita</td>
    <td>required</td>
    <td><code>Boolean</code> format</td>
   
  </tr>
  <tr>
    <td>password</td>
    <td>required</td>
    <td><code>String</code> format</td>
   
  </tr>
</table><br><br><br>
  
<h2><code>DELETE</code> Deletar</h2>
<p>Ao fazer a requisição <code>DELETE</code> irá deletar as informações de um usuário selecionado pelo <code>ID</code> no endpoint.</p>

<h2>Endpoint</h2>
<code>http:localhost:8000/usuario/<id></code>

<h2>Resource information</h2>
<table style="width:100%">
  <tr>
    <td>Resource formats</td>
    <td>JSON</td>
   
  </tr>
  <tr>
    <td>Requires authentication?</td>
    <td>Yes</td>
    
  </tr>
  
</table>

<h2>Paramaters</h2>

 
</table><br><br><br>
  
 <h2><code>PATCH</code> Alterar por ID</h2>
<p>Ao fazer a requisição <code>PATCH</code> irá atualizar as informações de um campo especifico do usuário selecionada pelo <code>ID</code> no endpoint.</p>

<h2>Endpoint</h2>
<code>http:localhost:8000/usuario/<id></code>

<h2>Resource information</h2>
<table style="width:100%">
  <tr>
    <td>Resource formats</td>
    <td>JSON</td>
   
  </tr>
  <tr>
    <td>Requires authentication?</td>
    <td>Yes</td>
    
  </tr>
  
</table>

<h2>Paramaters</h2>
<table style="width:100%">
  <tr>
    <td>usuario</td>
    <td>optional</td>
    <td><code>String</code> format</td>
   
  </tr>
   <tr>
    <td>nome</td>
    <td>optional</td>
    <td><code>String</code> format</td>
   
  </tr>
  <tr>
    <td>permissao_de_escrita</td>
    <td>optional</td>
    <td><code>Boolean</code> format</td>
   
  </tr>
  <tr>
    <td>password</td>
    <td>optional</td>
    <td><code>String</code> format</td>
   
  </tr>
 
</table>
  
<h2><code>GET</code> Pegar dono do Token</h2>
<p>Ao fazer a requisição <code>GET</code> retornará o Pegar dono do Token</p>

<h2>Endpoint</h2>
<code>http:localhost:8000/eu</code>

<h2>Resource information</h2>
<table style="width:100%">
  <tr>
    <td>Resource formats</td>
    <td>JSON</td>
   
  </tr>
  <tr>
    <td>Requires authentication?</td>
    <td>Yes</td>
    
  </tr>
  
</table>

<h2>Paramaters</h2>
<br><br><br>
