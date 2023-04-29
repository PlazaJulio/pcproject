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

$router->get("/porte-fisico/{id}", "PorteFisicoController@mostrarPorId");
$router->get("/porte-fisico", "PorteFisicoController@mostrarTodos");