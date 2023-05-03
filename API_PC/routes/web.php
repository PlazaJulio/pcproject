<?php

/** @var \Laravel\Lumen\Routing\Router $router */

$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->get("/aparencia/{id}", "AparenciaController@mostrarPorId");
$router->get("/aparencia", "AparenciaController@mostrarTodos");
$router->post("/aparencia/inserir", "AparenciaController@inserir");
$router->delete("/aparencia/{id}", "AparenciaController@deletar");
$router->patch("/aparencia/{id}", "AparenciaController@alterar");

$router->get("/cor/{id}", "CorController@mostrarPorId");
$router->get("/cor", "CorController@mostrarTodos");

$router->get("/cor-do-cabelo/{id}", "CorDoCabeloController@mostrarPorId");
$router->get("/cor-do-cabelo", "CorDoCabeloController@mostrarTodos");

$router->get("/tipo-de-cabelo/{id}", "TipoDeCabeloController@mostrarPorId");
$router->get("/tipo-de-cabelo", "TipoDeCabeloController@mostrarTodos");

$router->get("/porte-fisico/{id}", "PorteFisicoController@mostrarPorId");
$router->get("/porte-fisico", "PorteFisicoController@mostrarTodos");

$router->get("/cor-dos-olhos/{id}", "CorDosOlhosController@mostrarPorId");
$router->get("/cor-dos-olhos", "CorDosOlhosController@mostrarTodos");

$router->get("/estado-civil/{id}", "EstadoCivilController@mostrarPorId");
$router->get("/estado-civil", "EstadoCivilController@mostrarTodos");

$router->get("/grau-de-escolaridade/{id}", "GrauDeEscolaridadeController@mostrarPorId");
$router->get("/grau-de-escolaridade", "GrauDeEscolaridadeController@mostrarTodos");

$router->get("/genero/{id}", "GeneroController@mostrarPorId");
$router->get("/genero", "GeneroController@mostrarTodos");

$router->get("/criminoso/{id}", "CriminosoController@mostrarPorId");
$router->get("/criminoso", "CriminosoController@mostrarTodos");
$router->post("/criminoso/inserir", "CriminosoController@inserir");
$router->delete("/criminoso/{id}", "CriminosoController@deletar");
$router->patch("/criminoso/{id}", "CriminosoController@alterar");

$router->get("/acusacao/{id}", "AcusacaoController@mostrarPorId");
$router->get("/acusacao", "AcusacaoController@mostrarTodos");
$router->post("/acusacao/inserir", "AcusacaoController@inserir");
$router->delete("/acusacao/{id}", "AcusacaoController@deletar");
$router->patch("/acusacao/{id}", "AcusacaoController@alterar");

$router->get("/endereco/{id}", "EnderecoController@mostrarPorId");
$router->get("/endereco", "EnderecoController@mostrarTodos");
$router->post("/endereco/inserir", "EnderecoController@inserir");
$router->delete("/endereco/{id}", "EnderecoController@deletar");
$router->patch("/endereco/{id}", "EnderecoController@alterar");

$router->get("/antecedente/{id}", "AntecedenteController@mostrarPorId");
$router->get("/antecedente", "AntecedenteController@mostrarTodos");
$router->post("/antecedente/inserir", "AntecedenteController@inserir");
$router->delete("/antecedente/{id}", "AntecedenteController@deletar");
$router->patch("/antecedente/{id}", "AntecedenteController@alterar");
