<?php

namespace App\Http\Controllers;
use App\Models\GrauDeEscolaridade;

class GrauDeEscolaridadeController extends Controller
{
    public function __construct()
    {
        //
    }
    
    public function mostrarPorId($id)
    {
        return GrauDeEscolaridade::findOrFail($id);
    }

    public function mostrarTodos()
    {
        return GrauDeEscolaridade::all();
    }
}
