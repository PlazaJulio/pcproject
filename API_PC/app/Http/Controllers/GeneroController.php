<?php

namespace App\Http\Controllers;

use App\Models\Genero;

class GeneroController extends Controller
{
    public function __construct()
    {
        //
    }
    
    public function mostrarPorId($id)
    {
        return Genero::findOrFail($id);
    }

    public function mostrarTodos()
    {
        return Genero::all();
    }
}
