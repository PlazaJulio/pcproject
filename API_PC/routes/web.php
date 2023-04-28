<?php

/** @var \Laravel\Lumen\Routing\Router $router */
use Illuminate\Http\Request;

$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->get("/aparencia/{id}", "AparenciaController@mostrarPorId");
$router->get("/aparencia", "AparenciaController@mostrarTodos");
$router->post("/aparencia/inserir", "AparenciaController@inserir");