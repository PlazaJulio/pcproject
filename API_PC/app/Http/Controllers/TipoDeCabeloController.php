<?php

namespace App\Http\Controllers;
use App\Models\TipoDeCabelo;

class TipoDeCabeloController extends Controller
{
    public function __construct()
    {
        //
    }
    
    public function mostrarPorId($id)
    {
        return TipoDeCabelo::findOrFail($id);
    }

    public function mostrarTodos()
    {
        return TipoDeCabelo::all();
    }
}
