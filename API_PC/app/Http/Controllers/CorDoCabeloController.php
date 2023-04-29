<?php

namespace App\Http\Controllers;
use App\Models\CorDoCabelo;

class CorDoCabeloController extends Controller
{
    public function __construct()
    {
        //
    }
    
    public function mostrarPorId($id)
    {
        return CorDoCabelo::findOrFail($id);
    }

    public function mostrarTodos()
    {
        return CorDoCabelo::all();
    }
}
