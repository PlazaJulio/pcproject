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
